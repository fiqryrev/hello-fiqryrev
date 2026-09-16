import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  MODELS,
  RUN_ID_PATTERN,
  assertNoSensitiveText,
  buildCodexCommand,
  buildPrBody,
  createRunId,
  assertPrimaryReady,
  discoverRepository,
  ensureRunDirectoryAvailable,
  formatCommand,
  getRunPaths,
  getValidationCommands,
  main,
  makeContext,
  parseApprovalAnswers,
  parseCli,
  parseCodexEvents,
  parseWorktreeList,
  slugify,
  transitionState,
  validatePlanMarkdown,
} from "./worktree-pr-harness.mjs";

function withLocalRepository(callback: (repositoryPath: string) => void) {
  const fixtureRoot = mkdtempSync(join(tmpdir(), "worktree-pr-harness-"));
  const repositoryPath = join(fixtureRoot, "repo");
  const remotePath = join(fixtureRoot, "remote.git");
  mkdirSync(repositoryPath);
  const git = (args: string[], cwd = repositoryPath) => execFileSync("git", args, { cwd, encoding: "utf8" });
  try {
    git(["init", "--bare", remotePath], fixtureRoot);
    git(["init", "--initial-branch=main"], repositoryPath);
    git(["config", "user.name", "Harness Test"]);
    git(["config", "user.email", "harness.invalid"]);
    writeFileSync(join(repositoryPath, ".gitignore"), ".worktrees/\n");
    writeFileSync(join(repositoryPath, "README.md"), "fixture\n");
    git(["add", ".gitignore", "README.md"]);
    git(["commit", "-m", "fixture"]);
    git(["remote", "add", "origin", remotePath]);
    git(["push", "--set-upstream", "origin", "main"]);
    callback(repositoryPath);
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
}

function makeMockedRunner(options: { codex?: boolean; ghState?: string; ghHead?: string; ghMerge?: string; remoteUrl?: string } = {}) {
  const codexOutput = [
    JSON.stringify({ type: "thread.started", thread_id: "fixture-thread" }),
    JSON.stringify({ type: "item.completed", item: { type: "agent_message", text: "Fixture plan.\n\n## Overview\n\nFixture details." } }),
    JSON.stringify({ type: "turn.completed" }),
  ].join("\n");
  return (command: string, args: string[], commandOptions: { cwd?: string; input?: string } = {}) => {
    if (command === "codex") return { status: options.codex === false ? 127 : 0, stdout: codexOutput, stderr: "" };
    if (command === "gh") {
      if (args[0] === "--version") return { status: 0, stdout: "gh fixture\n", stderr: "" };
      if (args[0] === "pr" && args[1] === "view") {
        return {
          status: 0,
          stdout: `${JSON.stringify({ number: 1, url: "pr-url", state: options.ghState ?? "OPEN", baseRefName: "main", headRefName: "codex/run-1", headRefOid: options.ghHead ?? "fixture-head", mergeCommit: options.ghState === "MERGED" ? { oid: options.ghMerge ?? "fixture-merge" } : null })}\n`,
          stderr: "",
        };
      }
    }
    if (command === "git" && args[0] === "remote" && args[1] === "get-url") {
      return { status: 0, stdout: `${options.remoteUrl ?? "https://github.com/a/b.git"}\n`, stderr: "" };
    }
    const result = spawnSync(command, args, { cwd: commandOptions.cwd, encoding: "utf8", input: commandOptions.input, stdio: ["pipe", "pipe", "pipe"] });
    return { status: result.status ?? 1, stdout: result.stdout ?? "", stderr: result.stderr ?? "" };
  };
}

function writeFixtureState(repositoryPath: string, state: Record<string, unknown>) {
  const paths = state.paths as { runDir: string; statePath: string };
  mkdirSync(paths.runDir, { recursive: true });
  writeFileSync(paths.statePath, `${JSON.stringify(state)}\n`);
  expect(readFileSync(paths.statePath, "utf8")).toContain('"runId":"run-1"');
  expect(repositoryPath).toBeTruthy();
}

describe("worktree PR harness primitives", () => {
  it("creates safe, bounded run IDs", () => {
    const runId = createRunId("Ship a feature with spaces", new Date("2026-09-16T10:11:12.000Z"), "abc123");
    expect(runId).toBe("20260916101112-ship-a-feature-with-spaces-abc123");
    expect(RUN_ID_PATTERN.test(runId)).toBe(true);
    expect(slugify("!!!")).toBe("task");
  });

  it("keeps user text out of shell argument boundaries", () => {
    const command = buildCodexCommand("execution", join("repo", "feature"), join("fixture", "output path.md"));
    expect(command.args).toContain(join("fixture", "output path.md"));
    expect(formatCommand(["npm", "run", "test", "goal with spaces"])).toContain("'goal with spaces'");
    expect(parseCli(["start", "goal with spaces", "--run-id", "run-1"])).toEqual({
      command: "start",
      goal: "goal with spaces",
      requestedRunId: "run-1",
    });
  });

  it("pins the two required model and reasoning pairs", () => {
    expect(MODELS.planning).toMatchObject({ model: "gpt-5.6-sol", reasoning: "high" });
    expect(MODELS.execution).toMatchObject({ model: "gpt-5.6-luna", reasoning: "xhigh" });
    expect(buildCodexCommand("planning", "repo", join("fixture", "plan.md")).args).toContain("model_reasoning_effort=high");
    expect(buildCodexCommand("execution", "repo", join("fixture", "run.md")).args).toContain("model_reasoning_effort=xhigh");
  });

  it("requires explicit answers for local work and records the publish scope", () => {
    expect(parseApprovalAnswers({ planApproved: true, localWorkAuthorized: true, copyPlansToClaudeDocs: true, publishAuthorized: true })).toEqual({
      planApproved: true,
      localWorkAuthorized: true,
      copyPlansToClaudeDocs: true,
      publishAuthorized: true,
      publishScope: ["commit", "push", "pr-create-or-update"],
    });
    expect(parseApprovalAnswers({ planApproved: true, localWorkAuthorized: false }).localWorkAuthorized).toBe(false);
  });

  it("parses porcelain worktrees and rejects invalid transitions", () => {
    const worktrees = parseWorktreeList([
      "worktree repo",
      "HEAD abc",
      "branch refs/heads/main",
      "",
      "worktree repo/.worktrees/run-1",
      "HEAD def",
      "branch refs/heads/codex/run-1",
      "",
    ].join("\n"));
    expect(worktrees).toEqual([
      { path: "repo", head: "abc", branchRef: "refs/heads/main", branch: "main" },
      { path: "repo/.worktrees/run-1", head: "def", branchRef: "refs/heads/codex/run-1", branch: "codex/run-1" },
    ]);
    const state = { phase: "READY_TO_PUBLISH" };
    expect(() => transitionState(state, "IMPLEMENTING")).toThrow(/Invalid phase transition/);
    expect(transitionState({ phase: "NEW" }, "PLANNING").phase).toBe("PLANNING");
  });

  it("validates plans and keeps state paths inside the ignored run directory", () => {
    expect(validatePlanMarkdown("A short plan.\n\n## Overview\n\nDetails.\n")).toContain("## Overview");
    expect(() => validatePlanMarkdown("# Wrong first line\n\n## Overview")).toThrow(/one-line summary/);
    expect(() => assertNoSensitiveText(["", "Users", "example", "private.txt"].join("/"), "test text")).toThrow(/Refusing test text/);
    expect(getRunPaths(process.cwd(), "run-1").worktreePath).toBe(join(process.cwd(), ".worktrees", "run-1"));
  });

  it("marks unavailable package checks as skipped with an exact reason", () => {
    const checks = getValidationCommands({ scripts: { lint: "eslint ." } });
    expect(checks.find((check) => check.name === "npm run lint")?.applicable).toBe(true);
    expect(checks.find((check) => check.name === "npm run build")?.reason).toMatch(/does not define/);
  });

  it("discovers a disposable primary worktree and refuses dirty control state", () => {
    withLocalRepository((repositoryPath) => {
      const ctx = makeContext({ cwd: repositoryPath });
      const discovered = discoverRepository(ctx, repositoryPath);
      expect(discovered.repository.baseBranch).toBe("main");
      expect(assertPrimaryReady(ctx, discovered.repository)).toBe(discovered.repository.baseSha);
      writeFileSync(join(repositoryPath, "unexpected.txt"), "dirty\n");
      expect(() => assertPrimaryReady(ctx, discovered.repository)).toThrow(/not clean/);
    });
  });

  it("refuses run-directory collisions and publish without the named bundle", () => {
    withLocalRepository((repositoryPath) => {
      const paths = getRunPaths(repositoryPath, "run-1");
      mkdirSync(paths.runDir, { recursive: true });
      expect(() => ensureRunDirectoryAvailable(paths)).toThrow(/collision/);

      const discovered = discoverRepository(makeContext({ cwd: repositoryPath }), repositoryPath);
      const state = {
        runId: "run-1",
        phase: "READY_TO_PUBLISH",
        repository: { ...discovered.repository, remoteUrl: "https://github.com/example/project.git" },
        branch: { name: "codex/run-1", worktreePath: paths.worktreePath, worktreeRelative: ".worktrees/run-1", createdFromSha: "base" },
        plan: { version: "001", filename: "001-fixture-plan.md", statePath: join(paths.plansDir, "001-fixture-plan.md") },
        approvals: { localWork: { authorized: true }, publish: { authorized: false, scope: [] } },
        validation: { status: "passed", checks: [] },
        paths,
      };
      mkdirSync(paths.runDir, { recursive: true });
      writeFileSync(paths.statePath, `${JSON.stringify(state)}\n`);
      expect(() => main(["publish", "run-1"], { cwd: repositoryPath })).toThrow(/explicit commit, push/);
    });
  });

  it("requires an explicit cleanup confirmation", () => {
    expect(() => parseCli(["cleanup", "run-1"])).toThrow(/confirm-merged/);
  });

  it("stops planning before branch creation and blocks execution without local authorization", () => {
    withLocalRepository((repositoryPath) => {
      const runner = makeMockedRunner();
      const started = main(["start", "fixture goal", "--run-id", "run-1"], { cwd: repositoryPath, runner });
      expect(started.phase).toBe("AWAITING_DECISIONS");
      const paths = getRunPaths(repositoryPath, "run-1");
      expect(existsSync(paths.worktreePath)).toBe(false);
      expect(execFileSync("git", ["branch", "--list", "codex/run-1"], { cwd: repositoryPath, encoding: "utf8" })).toBe("");
      const answersPath = join(repositoryPath, ".worktrees", "answers.json");
      writeFileSync(answersPath, `${JSON.stringify({ planApproved: true, localWorkAuthorized: false })}\n`);
      expect(() => main(["continue", "run-1", "--answers", ".worktrees/answers.json"], { cwd: repositoryPath, runner })).toThrow(/localWorkAuthorized/);
      expect(existsSync(paths.worktreePath)).toBe(false);
      writeFileSync(answersPath, `${JSON.stringify({ planApproved: true, localWorkAuthorized: true, copyPlansToClaudeDocs: true })}\n`);
      const continued = main(["continue", "run-1", "--answers", ".worktrees/answers.json"], { cwd: repositoryPath, runner });
      expect(continued.phase).toBe("READY_TO_PUBLISH");
      expect(existsSync(paths.worktreePath)).toBe(true);
      const headBeforeRefusal = execFileSync("git", ["rev-parse", "HEAD"], { cwd: paths.worktreePath, encoding: "utf8" }).trim();
      expect(() => main(["publish", "run-1"], { cwd: repositoryPath, runner })).toThrow(/explicit commit, push/);
      expect(execFileSync("git", ["rev-parse", "HEAD"], { cwd: paths.worktreePath, encoding: "utf8" }).trim()).toBe(headBeforeRefusal);
      expect(execFileSync("git", ["ls-remote", "--heads", "origin", "codex/run-1"], { cwd: repositoryPath, encoding: "utf8" })).toBe("");
    });
  });

  it("cleans only an explicitly verified merged PR in a disposable repository", () => {
    withLocalRepository((repositoryPath) => {
      const git = (args: string[], cwd = repositoryPath) => execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
      const baseSha = git(["rev-parse", "refs/remotes/origin/main"]);
      const paths = getRunPaths(repositoryPath, "run-1");
      mkdirSync(join(repositoryPath, ".worktrees"), { recursive: true });
      git(["worktree", "add", "-b", "codex/run-1", paths.worktreePath, "refs/remotes/origin/main"]);
      writeFileSync(join(paths.worktreePath, "feature.txt"), "feature\n");
      git(["add", "feature.txt"], paths.worktreePath);
      git(["commit", "-m", "fixture feature"], paths.worktreePath);
      const headSha = git(["rev-parse", "HEAD"], paths.worktreePath);
      git(["push", "--set-upstream", "origin", "codex/run-1"], paths.worktreePath);
      git(["merge", "--no-ff", "codex/run-1", "-m", "fixture merge"]);
      git(["push", "origin", "main"]);
      const mergeSha = git(["rev-parse", "HEAD"]);
      const discovered = discoverRepository(makeContext({ cwd: repositoryPath, runner: makeMockedRunner() }), repositoryPath);
      const state = {
        runId: "run-1",
        phase: "PR_OPEN",
        repository: { ...discovered.repository, baseSha },
        branch: { name: "codex/run-1", worktreePath: paths.worktreePath, worktreeRelative: ".worktrees/run-1", createdFromSha: baseSha },
        plan: { version: "001", filename: "001-fixture-plan.md", statePath: join(paths.plansDir, "001-fixture-plan.md") },
        approvals: { localWork: { authorized: true }, publish: { authorized: true, scope: ["commit", "push", "pr-create-or-update"] }, cleanup: { authorized: true } },
        sessions: {},
        validation: { status: "passed", checks: [] },
        pr: { number: 1, url: "pr-url", state: "OPEN", baseRefName: "main", headRefName: "codex/run-1", headRefOid: headSha, mergeCommit: null },
        paths,
        history: [],
      };
      writeFixtureState(repositoryPath, state);
      const runner = makeMockedRunner({ ghState: "MERGED", ghHead: headSha, ghMerge: mergeSha, remoteUrl: "https://github.com/a/b.git" });
      const result = main(["cleanup", "run-1", "--confirm-merged"], { cwd: repositoryPath, runner });
      expect(result.phase).toBe("CLEANED");
      expect(existsSync(paths.worktreePath)).toBe(false);
      expect(existsSync(paths.runDir)).toBe(false);
      expect(spawnSync("git", ["show-ref", "--verify", "refs/heads/codex/run-1"], { cwd: repositoryPath, encoding: "utf8" }).status).not.toBe(0);
      expect(execFileSync("git", ["ls-remote", "--heads", "origin", "codex/run-1"], { cwd: repositoryPath, encoding: "utf8" })).toBe("");
    });
  });

  it("parses JSONL session identity and failures", () => {
    const result = parseCodexEvents([
      JSON.stringify({ type: "thread.started", thread_id: "thread-1" }),
      JSON.stringify({ type: "item.completed", item: { type: "agent_message", text: "Done" } }),
      JSON.stringify({ type: "turn.completed" }),
    ].join("\n"));
    expect(result.sessionId).toBe("thread-1");
    expect(result.finalText).toBe("Done");
    expect(result.errors).toEqual([]);
  });

  it("builds a reviewer-grade PR body from recorded evidence", () => {
    const body = buildPrBody({
      plan: { summary: "Add the guarded harness." },
      publish: { files: ["scripts/worktree-pr-harness.mjs"], commits: [{ sha: "abcdef1234567890", subject: "feat: add harness" }] },
      validation: { checks: [{ command: "npm run test", status: "passed" }, { command: "npm run build", status: "skipped", reason: "not applicable" }] },
    });
    expect(body).toContain("## Summary");
    expect(body).toContain("## Files touched");
    expect(body).toContain("### Pre-merge");
    expect(body).toContain("### Post-merge");
    expect(body).toContain("## Risk / Rollback");
    expect(body).toContain("## Commit table");
    expect(body).toContain("not applicable");
  });
});
