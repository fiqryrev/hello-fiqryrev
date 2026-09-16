#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { randomBytes } from "node:crypto";
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

export const BASE_BRANCH = "main";
export const REMOTE_NAME = "origin";
export const RUN_ID_PATTERN = /^[a-z0-9][a-z0-9-]{2,63}$/;
export const MODELS = Object.freeze({
  planning: Object.freeze({ model: "gpt-5.6-sol", reasoning: "high", sandbox: "read-only" }),
  execution: Object.freeze({ model: "gpt-5.6-luna", reasoning: "xhigh", sandbox: "workspace-write" }),
});

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const DEFAULT_REPO_ROOT = resolve(SCRIPT_DIR, "..");
const RUNS_RELATIVE = join(".worktrees", ".worktree-pr-harness", "runs");
const EXECUTION_CHECKS = ["lint", "type-check", "test", "build"];

function canonicalPath(path) {
  try {
    return realpathSync(path);
  } catch {
    return resolve(path);
  }
}
const ALLOWED_PHASES = new Set([
  "NEW",
  "PLANNING",
  "AWAITING_DECISIONS",
  "READY_FOR_EXECUTION",
  "IMPLEMENTING",
  "VALIDATING",
  "READY_TO_PUBLISH",
  "PR_OPEN",
  "REVISION_REQUESTED",
  "REVISING",
  "AWAITING_MERGE",
  "CLEANUP_AUTHORIZED",
  "CLEANED",
]);
const TRANSITIONS = Object.freeze({
  NEW: ["PLANNING"],
  PLANNING: ["AWAITING_DECISIONS", "READY_FOR_EXECUTION"],
  AWAITING_DECISIONS: ["READY_FOR_EXECUTION"],
  READY_FOR_EXECUTION: ["IMPLEMENTING"],
  IMPLEMENTING: ["VALIDATING"],
  VALIDATING: ["READY_TO_PUBLISH"],
  READY_TO_PUBLISH: ["PR_OPEN"],
  PR_OPEN: ["REVISION_REQUESTED", "AWAITING_MERGE"],
  REVISION_REQUESTED: ["REVISING"],
  REVISING: ["VALIDATING"],
  AWAITING_MERGE: ["CLEANUP_AUTHORIZED"],
  CLEANUP_AUTHORIZED: ["CLEANED"],
});

export class HarnessError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "HarnessError";
    Object.assign(this, details);
  }
}

function defaultRunner(command, args, options = {}) {
  let result;
  try {
    result = spawnSync(command, args, {
      cwd: options.cwd,
      encoding: "utf8",
      env: options.env ? { ...process.env, ...options.env } : process.env,
      input: options.input,
      maxBuffer: 20 * 1024 * 1024,
      stdio: ["pipe", "pipe", "pipe"],
    });
  } catch (error) {
    return { status: 127, stdout: "", stderr: error instanceof Error ? error.message : String(error), error };
  }
  return {
    status: typeof result.status === "number" ? result.status : 1,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    error: result.error,
  };
}

export function makeContext(options = {}) {
  return {
    cwd: options.cwd ?? DEFAULT_REPO_ROOT,
    now: options.now ?? (() => new Date()),
    runner: options.runner ?? defaultRunner,
  };
}

export function runCommand(ctx, command, args, options = {}) {
  return ctx.runner(command, args, { cwd: options.cwd ?? ctx.cwd, input: options.input, env: options.env });
}

function commandFailure(command, args, result) {
  const detail = [result.stderr, result.stdout].filter(Boolean).join("\n").trim();
  return new HarnessError(`Command failed: ${formatCommand([command, ...args])}${detail ? `\n${detail}` : ""}`, {
    command,
    args,
    result,
  });
}

function runText(ctx, command, args, options = {}) {
  const result = runCommand(ctx, command, args, options);
  if (result.status !== 0) throw commandFailure(command, args, result);
  return String(result.stdout ?? "").trim();
}

function runGit(ctx, args, cwd = ctx.cwd) {
  return runCommand(ctx, "git", args, { cwd });
}

function gitText(ctx, args, cwd) {
  return runText(ctx, "git", args, { cwd });
}

function writeOutput(message) {
  process.stdout.write(`${message.endsWith("\n") ? message : `${message}\n`}`);
}

function writeError(message) {
  process.stderr.write(`${message.endsWith("\n") ? message : `${message}\n`}`);
}

export function slugify(value) {
  const slug = String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32)
    .replace(/-+$/g, "");
  return slug || "task";
}

export function createRunId(goal, now = new Date(), entropy = randomBytes(3).toString("hex")) {
  const stamp = now.toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
  const runId = `${stamp}-${slugify(goal)}-${String(entropy).toLowerCase()}`.slice(0, 64).replace(/-+$/g, "");
  if (!RUN_ID_PATTERN.test(runId)) throw new HarnessError(`Generated invalid run ID: ${runId}`);
  return runId;
}

export function assertRunId(runId) {
  if (!RUN_ID_PATTERN.test(runId)) {
    throw new HarnessError(`Invalid run ID: ${runId}. Use lowercase letters, numbers, and hyphens only.`);
  }
  return runId;
}

export function getRunPaths(repoRoot, runId) {
  assertRunId(runId);
  const root = canonicalPath(repoRoot);
  const runsDir = join(root, RUNS_RELATIVE);
  const runDir = join(runsDir, runId);
  const expectedPrefix = `${runsDir}${sep}`;
  if (!runDir.startsWith(expectedPrefix)) throw new HarnessError("Refusing a run path outside the ignored runs directory.");
  return {
    runsDir,
    runDir,
    statePath: join(runDir, "state.json"),
    plansDir: join(runDir, "plans"),
    answersDir: join(runDir, "answers"),
    requestsDir: join(runDir, "requests"),
    resultsDir: join(runDir, "results"),
    worktreePath: join(root, ".worktrees", runId),
  };
}

export function parseWorktreeList(output) {
  const worktrees = [];
  let current = null;
  const finish = () => {
    if (current?.path) worktrees.push(current);
    current = null;
  };
  for (const line of String(output).split(/\r?\n/)) {
    if (!line) {
      finish();
      continue;
    }
    if (line.startsWith("worktree ")) {
      finish();
      current = { path: line.slice("worktree ".length) };
    } else if (line.startsWith("HEAD ") && current) {
      current.head = line.slice("HEAD ".length);
    } else if (line.startsWith("branch ") && current) {
      current.branchRef = line.slice("branch ".length);
      current.branch = current.branchRef.replace("refs/heads/", "");
    } else if (line === "detached" && current) {
      current.detached = true;
    }
  }
  finish();
  return worktrees;
}

function readRemoteUrl(ctx, cwd) {
  return gitText(ctx, ["remote", "get-url", REMOTE_NAME], cwd);
}

function readOptionalGitText(ctx, args, cwd) {
  const result = runGit(ctx, args, cwd);
  return result.status === 0 ? String(result.stdout ?? "").trim() : null;
}

export function discoverRepository(ctx, cwd = ctx.cwd) {
  const currentRoot = resolve(gitText(ctx, ["rev-parse", "--show-toplevel"], cwd));
  const commonGitDirRaw = gitText(ctx, ["rev-parse", "--git-common-dir"], cwd);
  const commonGitDir = resolve(cwd, commonGitDirRaw);
  const worktrees = parseWorktreeList(gitText(ctx, ["worktree", "list", "--porcelain"], cwd));
  const primary = worktrees.find((worktree) => worktree.branchRef === `refs/heads/${BASE_BRANCH}`);
  if (!primary) throw new HarnessError(`No primary worktree on ${BASE_BRANCH} was found.`);
  const primaryWorktree = resolve(primary.path);
  const remoteUrl = readRemoteUrl(ctx, primaryWorktree);
  return {
    currentRoot,
    repository: {
      root: primaryWorktree,
      primaryWorktree,
      commonGitDir,
      remote: REMOTE_NAME,
      remoteUrl,
      baseBranch: BASE_BRANCH,
      baseSha: readOptionalGitText(ctx, ["rev-parse", `refs/remotes/${REMOTE_NAME}/${BASE_BRANCH}`], primaryWorktree),
    },
    worktrees,
  };
}

export function assertPrimaryReady(ctx, repository, expectedBaseSha = null) {
  const branch = gitText(ctx, ["branch", "--show-current"], repository.primaryWorktree);
  if (branch !== BASE_BRANCH) throw new HarnessError(`Primary worktree must be on ${BASE_BRANCH}; found ${branch || "detached HEAD"}.`);
  const status = gitText(ctx, ["status", "--porcelain=v1", "--untracked-files=all"], repository.primaryWorktree);
  if (status) throw new HarnessError(`Primary worktree is not clean:\n${status}`);
  const baseSha = gitText(ctx, ["rev-parse", `refs/remotes/${REMOTE_NAME}/${BASE_BRANCH}`], repository.primaryWorktree);
  if (expectedBaseSha && baseSha !== expectedBaseSha) {
    throw new HarnessError(`Base branch changed from ${expectedBaseSha} to ${baseSha}; replan before execution.`);
  }
  return baseSha;
}

export function refreshBase(ctx, repository) {
  const result = runGit(ctx, ["fetch", REMOTE_NAME, BASE_BRANCH], repository.primaryWorktree);
  if (result.status !== 0) throw commandFailure("git", ["fetch", REMOTE_NAME, BASE_BRANCH], result);
  return gitText(ctx, ["rev-parse", `refs/remotes/${REMOTE_NAME}/${BASE_BRANCH}`], repository.primaryWorktree);
}

function toolAvailable(ctx, command, cwd) {
  const result = runCommand(ctx, command, ["--version"], { cwd });
  return result.status === 0;
}

function requireTool(ctx, command, cwd) {
  if (!toolAvailable(ctx, command, cwd)) throw new HarnessError(`Required command is unavailable: ${command} --version`);
}

export function buildCodexCommand(phase, cwd, outputPath) {
  const settings = phase === "planning" ? MODELS.planning : MODELS.execution;
  return {
    command: "codex",
    args: [
      "exec",
      "--json",
      "--ephemeral",
      "--sandbox",
      settings.sandbox,
      "-C",
      cwd,
      "-m",
      settings.model,
      "-c",
      `model_reasoning_effort=${settings.reasoning}`,
      "--output-last-message",
      outputPath,
      "-",
    ],
    model: settings.model,
    reasoning: settings.reasoning,
  };
}

export function buildCodexPrompt(phase, goal, extra = "") {
  if (phase === "planning") {
    return [
      "You are the read-only planning phase of a guarded repository workflow.",
      "Read the repository instructions and inspect the repository without editing files.",
      "Return only a complete Markdown implementation plan.",
      "The first line must be a one-line summary, followed by a `## Overview` section.",
      "Keep the plan under 200 lines. Identify material questions and the exact validation commands.",
      "Do not create branches, worktrees, commits, pushes, or pull requests.",
      `Goal:\n${goal}`,
    ].join("\n\n");
  }
  return [
    "You are the execution phase of a guarded repository workflow.",
    "Read AGENTS.md, CLAUDE.md, the approved plan, and any applicable repository instructions before editing.",
    "Implement only the approved scope in the current dedicated worktree.",
    "Run the applicable repository validation commands and report each command as pass, fail, or skipped with its exact reason.",
    "Do not commit, push, create, edit, merge, or close a pull request. The launcher owns those mutations.",
    `Goal:\n${goal}`,
    extra,
  ].filter(Boolean).join("\n\n");
}

export function parseCodexEvents(stdout) {
  let sessionId = null;
  let finalText = "";
  const errors = [];
  const events = [];
  for (const line of String(stdout).split(/\r?\n/)) {
    if (!line.trim()) continue;
    let event;
    try {
      event = JSON.parse(line);
    } catch {
      continue;
    }
    events.push(event);
    if (event.type === "thread.started") sessionId = event.thread_id ?? event.threadId ?? event.id ?? sessionId;
    if (event.type === "error" || event.type === "turn.failed") errors.push(event.message ?? event.error?.message ?? "Codex reported a failure.");
    const item = event.item;
    if (event.type === "item.completed" && item?.type === "agent_message") finalText = item.text ?? item.content ?? finalText;
    if (event.type === "agent_message") finalText = event.text ?? event.content ?? finalText;
  }
  return { sessionId, finalText, errors, events };
}

function runCodex(ctx, phase, cwd, prompt, outputPath) {
  const spec = buildCodexCommand(phase, cwd, outputPath);
  mkdirSync(dirname(outputPath), { recursive: true });
  const result = runCommand(ctx, spec.command, spec.args, { cwd, input: prompt });
  const events = parseCodexEvents(result.stdout);
  const session = {
    command: [spec.command, ...spec.args.filter((arg) => arg !== outputPath)],
    model: spec.model,
    reasoning: spec.reasoning,
    sessionId: events.sessionId,
    status: result.status === 0 && events.errors.length === 0 ? "passed" : "failed",
    exitCode: result.status,
    stderr: String(result.stderr ?? "").trim(),
  };
  if (result.status !== 0 || events.errors.length > 0) {
    throw new HarnessError(`Codex ${phase} session failed.`, { session, events });
  }
  const output = existsSync(outputPath) ? readFileSync(outputPath, "utf8") : events.finalText;
  return { session, output };
}

export function validatePlanMarkdown(markdown) {
  const content = String(markdown).replace(/^```(?:markdown)?\s*\n|\n```\s*$/g, "").trim();
  const lines = content ? content.split(/\r?\n/) : [];
  if (!content) throw new HarnessError("Planning returned an empty plan.");
  if (lines.length > 200) throw new HarnessError(`Plan is ${lines.length} lines; the repository limit is 200.`);
  if (!lines[0] || lines[0].startsWith("#")) throw new HarnessError("Plan must begin with a one-line summary, not a heading.");
  if (!/^## Overview\s*$/m.test(content)) throw new HarnessError("Plan must contain a ## Overview section.");
  assertNoSensitiveText(content, "plan");
  return `${content}\n`;
}

export const SENSITIVE_PATTERNS = Object.freeze([
  /(?:^|[\s"'=])\/(?:Users|home)\/[^\s"'`]+/i,
  /(?:^|[\s"'=])[A-Z]:\\Users\\[^\s"'`]+/i,
  /\b(?:ghp_|github_pat_|xox[baprs]-|AKIA[0-9A-Z]{16}|sk-[A-Za-z0-9])[^\s"'`]+/,
  /\bBearer\s+[A-Za-z0-9._-]{16,}/i,
  /\barn:aws:[^\s"'`]+/i,
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
]);

export function assertNoSensitiveText(text, label = "text") {
  const match = SENSITIVE_PATTERNS.find((pattern) => pattern.test(String(text)));
  if (match) throw new HarnessError(`Refusing ${label}: it contains a local path, credential, token, or account-specific identifier.`);
  return true;
}

function safePlanFilename(goal) {
  return `001-${slugify(goal)}-plan.md`;
}

function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function readJson(path, label) {
  if (!existsSync(path)) throw new HarnessError(`Missing ${label}: ${path}`);
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    throw new HarnessError(`Invalid JSON in ${label}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function saveState(ctx, state) {
  state.updatedAt = ctx.now().toISOString();
  writeJson(state.paths.statePath, state);
}

export function transitionState(state, nextPhase) {
  if (!ALLOWED_PHASES.has(nextPhase)) throw new HarnessError(`Unknown phase: ${nextPhase}`);
  if (state.phase === nextPhase) return state;
  const allowed = TRANSITIONS[state.phase] ?? [];
  if (!allowed.includes(nextPhase)) throw new HarnessError(`Invalid phase transition: ${state.phase} -> ${nextPhase}`);
  state.phase = nextPhase;
  return state;
}

function record(state, event, data = {}, now = new Date()) {
  state.history.push({ event, at: now.toISOString(), ...data });
}

function makeInitialState(ctx, repository, goal, runId, paths, baseSha) {
  const filename = safePlanFilename(goal);
  const planPath = join(paths.plansDir, filename);
  return {
    schemaVersion: 1,
    runId,
    goal,
    phase: "NEW",
    createdAt: ctx.now().toISOString(),
    updatedAt: ctx.now().toISOString(),
    repository: { ...repository, baseSha },
    branch: {
      name: `codex/${runId}`,
      worktreePath: paths.worktreePath,
      worktreeRelative: relative(repository.root, paths.worktreePath),
      createdFromSha: baseSha,
    },
    plan: {
      version: "001",
      filename,
      statePath: planPath,
      copiedTo: null,
    },
    approvals: {
      localWork: { authorized: false },
      publish: { authorized: false, scope: [] },
      cleanup: { authorized: false },
    },
    sessions: {},
    validation: null,
    pr: null,
    history: [],
    paths,
  };
}

function writeManualHandoff(runId, phase) {
  const settings = phase === "planning" ? MODELS.planning : MODELS.execution;
  return [
    `Automatic ${phase} orchestration is unavailable for run ${runId}.`,
    "No fallback model or reasoning effort was selected.",
    `Start a correctly configured Codex session with: codex exec -m ${settings.model} -c model_reasoning_effort=${settings.reasoning} ...`,
    `After completing that phase, resume the recorded run with: npm run pr:harness -- resume ${runId}`,
  ].join("\n");
}

export function ensureRunDirectoryAvailable(paths) {
  if (existsSync(paths.runDir)) throw new HarnessError(`Run ID collision: ${paths.runDir} already exists.`);
}

function loadState(repoRoot, runId) {
  const paths = getRunPaths(repoRoot, runId);
  if (existsSync(paths.runDir) && lstatSync(paths.runDir).isSymbolicLink()) throw new HarnessError("Refusing a symlinked run directory.");
  const state = readJson(paths.statePath, "run state");
  if (state.runId !== runId || state.paths?.runDir !== paths.runDir) throw new HarnessError("Run state identity does not match its path.");
  return state;
}

function assertStatePaths(state) {
  const expected = getRunPaths(state.repository.root, state.runId);
  if (state.paths.runDir !== expected.runDir || state.paths.worktreePath !== expected.worktreePath) {
    throw new HarnessError("Run state paths do not match the recorded repository and run ID.");
  }
  if (existsSync(state.paths.runDir) && lstatSync(state.paths.runDir).isSymbolicLink()) throw new HarnessError("Refusing a symlinked run directory.");
}

function assertRecordedWorktree(ctx, state, allowDirty = false) {
  assertStatePaths(state);
  if (!existsSync(state.branch.worktreePath)) throw new HarnessError(`Recorded worktree is missing: ${state.branch.worktreePath}`);
  if (lstatSync(state.branch.worktreePath).isSymbolicLink()) throw new HarnessError("Refusing a symlinked feature worktree path.");
  const branch = gitText(ctx, ["branch", "--show-current"], state.branch.worktreePath);
  if (branch !== state.branch.name) throw new HarnessError(`Recorded worktree is on ${branch || "detached HEAD"}, expected ${state.branch.name}.`);
  const status = gitText(ctx, ["status", "--porcelain=v1", "--untracked-files=all"], state.branch.worktreePath);
  if (!allowDirty && status) throw new HarnessError(`Recorded worktree is not clean:\n${status}`);
  return { branch, status };
}

function assertStateRepository(ctx, state, requireRecordedBase = false) {
  const discovered = discoverRepository(ctx, state.repository.primaryWorktree);
  if (discovered.repository.primaryWorktree !== state.repository.primaryWorktree) throw new HarnessError("Primary worktree identity changed.");
  if (discovered.repository.remoteUrl !== state.repository.remoteUrl) throw new HarnessError("Origin remote identity changed.");
  assertPrimaryReady(ctx, discovered.repository, requireRecordedBase ? state.repository.baseSha : null);
  return discovered.repository;
}

export function parseApprovalAnswers(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new HarnessError("Answers must be a JSON object.");
  const planApproved = value.planApproved === true || value.approved === true;
  const localWorkAuthorized = value.localWorkAuthorized === true || value.authorizeLocalWork === true;
  const publishAuthorized = value.publishAuthorized === true || value.publish?.authorized === true;
  const scope = Array.isArray(value.publishScope)
    ? value.publishScope.filter((item) => typeof item === "string")
    : publishAuthorized ? ["commit", "push", "pr-create-or-update"] : [];
  return {
    planApproved,
    localWorkAuthorized,
    copyPlansToClaudeDocs: value.copyPlansToClaudeDocs === true,
    publishAuthorized,
    publishScope: scope,
  };
}

function requireExecutionAnswers(answers) {
  if (!answers.planApproved) throw new HarnessError("Execution requires planApproved: true.");
  if (!answers.localWorkAuthorized) throw new HarnessError("Execution requires localWorkAuthorized: true.");
}

function planCopyPath(state) {
  return join(state.branch.worktreePath, ".claude", "docs", state.plan.filename);
}

function copyApprovedPlan(state, enabled) {
  if (!enabled) return null;
  const target = planCopyPath(state);
  const source = state.plan.statePath;
  const content = readFileSync(source, "utf8");
  mkdirSync(dirname(target), { recursive: true });
  if (existsSync(target) && lstatSync(target).isSymbolicLink()) throw new HarnessError(`Refusing a symlinked plan target at ${target}.`);
  if (existsSync(target) && readFileSync(target, "utf8") !== content) throw new HarnessError(`Refusing to overwrite a different plan at ${target}.`);
  writeFileSync(target, content, "utf8");
  return target;
}

export function getValidationCommands(packageJson) {
  const scripts = packageJson?.scripts ?? {};
  return [
    { name: "git diff --check", command: ["git", "diff", "--check"], applicable: true, reason: null },
    ...EXECUTION_CHECKS.map((name) => ({
      name: `npm run ${name}`,
      command: ["npm", "run", name],
      applicable: typeof scripts[name] === "string",
      reason: typeof scripts[name] === "string" ? null : `package.json does not define the ${name} script`,
    })),
  ];
}

function commandLabel(command) {
  return formatCommand(command);
}

export function formatCommand(args) {
  return args.map((arg) => /[^a-zA-Z0-9_./:=+-]/.test(arg) ? `'${String(arg).replaceAll("'", "'\\''")}'` : arg).join(" ");
}

export function runValidation(ctx, worktreePath) {
  let packageJson = {};
  const packagePath = join(worktreePath, "package.json");
  if (existsSync(packagePath)) packageJson = readJson(packagePath, "package.json");
  const checks = [];
  for (const spec of getValidationCommands(packageJson)) {
    if (!spec.applicable) {
      checks.push({ command: commandLabel(spec.command), status: "skipped", reason: spec.reason });
      continue;
    }
    const result = runCommand(ctx, spec.command[0], spec.command.slice(1), { cwd: worktreePath });
    checks.push({
      command: commandLabel(spec.command),
      status: result.status === 0 ? "passed" : "failed",
      exitCode: result.status,
      output: [result.stdout, result.stderr].filter(Boolean).join("\n").trim().slice(-4000),
    });
  }
  const failed = checks.find((check) => check.status === "failed");
  return {
    status: failed ? "failed" : "passed",
    checkedAt: ctx.now().toISOString(),
    checks,
    failedCommand: failed?.command ?? null,
  };
}

function readPlan(state) {
  return validatePlanMarkdown(readFileSync(state.plan.statePath, "utf8"));
}

function runPlanning(ctx, state) {
  requireTool(ctx, "codex", state.repository.primaryWorktree);
  const resultPath = join(state.paths.resultsDir, "planning-output.md");
  const prompt = buildCodexPrompt("planning", state.goal);
  const result = runCodex(ctx, "planning", state.repository.primaryWorktree, prompt, resultPath);
  const plan = validatePlanMarkdown(result.output);
  mkdirSync(state.paths.plansDir, { recursive: true });
  writeFileSync(state.plan.statePath, plan, "utf8");
  state.plan.summary = plan.split(/\r?\n/, 1)[0];
  state.sessions.planning = result.session;
  transitionState(state, "AWAITING_DECISIONS");
  record(state, "planning-complete", { plan: state.plan.filename }, ctx.now());
  return state;
}

export function buildPrBody(state) {
  const files = state.publish?.files?.length ? state.publish.files : ["No file list recorded."];
  const checks = state.validation?.checks ?? [];
  const checkLines = checks.length
    ? checks.map((check) => check.status === "passed"
      ? `- [x] \`${check.command}\``
      : `- [ ] Skipped \`${check.command}\`: ${check.reason ?? "not run"}`)
    : ["- [ ] No validation results recorded."];
  const commits = state.publish?.commits?.length
    ? state.publish.commits.map((commit) => `| \`${commit.sha.slice(0, 12)}\` | ${commit.subject} |`)
    : ["| Pending | Commit is created during publication. |"];
  const summary = state.plan?.summary ?? "Implements the approved repository change.";
  assertNoSensitiveText(summary, "PR summary");
  return [
    "## Summary",
    summary,
    "",
    "## Files touched",
    ...files.map((file) => `- \`${file}\``),
    "",
    "## Test Plan",
    "### Pre-merge",
    ...checkLines,
    "",
    "### Post-merge",
    "- [ ] No post-merge or deployment check was run by this harness; verify through the repository's normal GitHub workflow after merge.",
    "",
    "## Risk / Rollback",
    "The change is isolated to the recorded feature branch. Reviewers can request revisions before merge; after merge, revert the merge commit if rollback is needed. This harness does not merge or deploy.",
    "",
    "## Commit table",
    "| Commit | Message |",
    "|---|---|",
    ...commits,
  ].join("\n");
}

function parseRemoteSlug(remoteUrl) {
  const normalized = remoteUrl.replace(/\.git$/, "");
  const match = normalized.match(/github\.com[/:]([^/]+\/[^/]+)$/i);
  if (!match) throw new HarnessError(`Origin is not a GitHub repository: ${remoteUrl}`);
  return match[1];
}

function ghJson(ctx, args, cwd) {
  requireTool(ctx, "gh", cwd);
  const output = runText(ctx, "gh", args, { cwd });
  try {
    return JSON.parse(output);
  } catch (error) {
    throw new HarnessError(`GitHub CLI returned invalid JSON: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function listPullRequests(ctx, state) {
  const repo = parseRemoteSlug(state.repository.remoteUrl);
  const result = ghJson(ctx, [
    "pr",
    "list",
    "--repo",
    repo,
    "--head",
    state.branch.name,
    "--base",
    BASE_BRANCH,
    "--state",
    "all",
    "--limit",
    "20",
    "--json",
    "number,url,state,baseRefName,headRefName,headRefOid,mergeCommit",
  ], state.branch.worktreePath);
  return Array.isArray(result) ? result : [];
}

function viewPullRequest(ctx, state, identifier = state.pr?.number) {
  const repo = parseRemoteSlug(state.repository.remoteUrl);
  return ghJson(ctx, [
    "pr",
    "view",
    String(identifier),
    "--repo",
    repo,
    "--json",
    "number,url,state,baseRefName,headRefName,headRefOid,mergeCommit",
  ], state.branch.worktreePath);
}

function assertPullRequestIdentity(pr, state) {
  if (!pr || pr.number !== state.pr.number || pr.baseRefName !== BASE_BRANCH || pr.headRefName !== state.branch.name || (state.pr.headRefOid && pr.headRefOid && pr.headRefOid !== state.pr.headRefOid)) {
    throw new HarnessError("GitHub PR identity does not match the recorded run.");
  }
}

function collectCommits(ctx, state) {
  const output = gitText(ctx, ["log", "--format=%H%x09%s", state.branch.name, "--not", BASE_BRANCH], state.branch.worktreePath);
  return output ? output.split(/\r?\n/).filter(Boolean).map((line) => {
    const [sha, ...subject] = line.split("\t");
    return { sha, subject: subject.join("\t") };
  }) : [];
}

function reviewDiff(ctx, state) {
  const status = gitText(ctx, ["status", "--short", "--untracked-files=all"], state.branch.worktreePath);
  const summary = gitText(ctx, ["diff", "--stat"], state.branch.worktreePath);
  const trackedFiles = gitText(ctx, ["diff", "--name-only"], state.branch.worktreePath).split(/\r?\n/).filter(Boolean);
  const untrackedFiles = gitText(ctx, ["ls-files", "--others", "--exclude-standard"], state.branch.worktreePath).split(/\r?\n/).filter(Boolean);
  const files = [...new Set([...trackedFiles, ...untrackedFiles])];
  const diff = gitText(ctx, ["diff", "--no-color"], state.branch.worktreePath);
  assertNoSensitiveText(diff, "candidate diff");
  const check = runGit(ctx, ["diff", "--check"], state.branch.worktreePath);
  if (check.status !== 0) throw commandFailure("git", ["diff", "--check"], check);
  if (!status) throw new HarnessError("Nothing to publish in the feature worktree.");
  return { status, summary, files, checkedAt: ctx.now().toISOString() };
}

function commitAndPush(ctx, state, review, message) {
  const add = runGit(ctx, ["add", "--all", "--", "."], state.branch.worktreePath);
  if (add.status !== 0) throw commandFailure("git", ["add", "--all", "--", "."], add);
  const cachedCheck = runGit(ctx, ["diff", "--cached", "--check"], state.branch.worktreePath);
  if (cachedCheck.status !== 0) throw commandFailure("git", ["diff", "--cached", "--check"], cachedCheck);
  const cachedDiff = gitText(ctx, ["diff", "--cached", "--no-color"], state.branch.worktreePath);
  assertNoSensitiveText(cachedDiff, "staged diff");
  const commit = runGit(ctx, ["commit", "-m", message], state.branch.worktreePath);
  if (commit.status !== 0) throw commandFailure("git", ["commit", "-m", message], commit);
  const sha = gitText(ctx, ["rev-parse", "HEAD"], state.branch.worktreePath);
  state.publish = {
    ...(state.publish ?? {}),
    ...review,
    committedSha: sha,
    commits: collectCommits(ctx, state),
    committedAt: ctx.now().toISOString(),
  };
  saveState(ctx, state);
  const push = runGit(ctx, ["push", "--set-upstream", REMOTE_NAME, state.branch.name], state.branch.worktreePath);
  if (push.status !== 0) throw commandFailure("git", ["push", "--set-upstream", REMOTE_NAME, state.branch.name], push);
  state.publish = {
    ...state.publish,
    publishedSha: sha,
    pushedAt: ctx.now().toISOString(),
  };
  saveState(ctx, state);
}

function publishPullRequest(ctx, state) {
  const existing = listPullRequests(ctx, state);
  const open = existing.find((pr) => pr.state === "OPEN");
  const closed = existing.find((pr) => pr.state !== "OPEN");
  if (closed && !open) throw new HarnessError(`A closed or merged PR already uses ${state.branch.name}; refusing to create another PR.`);
  const bodyPath = join(state.paths.resultsDir, "pr-body.md");
  writeFileSync(bodyPath, `${buildPrBody(state)}\n`, "utf8");
  const repo = parseRemoteSlug(state.repository.remoteUrl);
  let pr;
  if (open) {
    const editArgs = ["pr", "edit", String(open.number), "--repo", repo, "--body-file", bodyPath];
    const edit = runCommand(ctx, "gh", editArgs, { cwd: state.branch.worktreePath });
    if (edit.status !== 0) throw commandFailure("gh", editArgs, edit);
    pr = viewPullRequest(ctx, state, open.number);
  } else {
    const title = "feat: implement approved repository change";
    const createArgs = [
      "pr",
      "create",
      "--repo",
      repo,
      "--base",
      BASE_BRANCH,
      "--head",
      state.branch.name,
      "--title",
      title,
      "--body-file",
      bodyPath,
      "--no-maintainer-edit",
    ];
    const created = runCommand(ctx, "gh", createArgs, { cwd: state.branch.worktreePath });
    if (created.status !== 0) throw commandFailure("gh", createArgs, created);
    const url = String(created.stdout ?? "").trim().split(/\r?\n/).filter(Boolean).at(-1);
    if (!url) throw new HarnessError("GitHub CLI did not return a pull request URL.");
    pr = viewPullRequest(ctx, state, url);
  }
  if (state.publish?.publishedSha && pr.headRefOid && pr.headRefOid !== state.publish.publishedSha) {
    throw new HarnessError("GitHub PR head does not match the commit that was pushed.");
  }
  assertPullRequestIdentity(pr, { ...state, pr: { number: pr.number } });
  state.pr = {
    number: pr.number,
    url: pr.url,
    state: pr.state,
    baseRefName: pr.baseRefName,
    headRefName: pr.headRefName,
    headRefOid: pr.headRefOid,
    mergeCommit: pr.mergeCommit ?? null,
  };
}

function ensurePublishApproval(state) {
  if (!state.approvals.publish?.authorized) throw new HarnessError("Publish requires explicit commit, push, and PR create-or-update authorization.");
  const scope = new Set(state.approvals.publish.scope ?? []);
  for (const item of ["commit", "push", "pr-create-or-update"]) {
    if (!scope.has(item)) throw new HarnessError(`Publish authorization is missing scope: ${item}`);
  }
}

function startRun(ctx, goal, requestedRunId = null) {
  const cleanGoal = String(goal ?? "").trim();
  if (!cleanGoal) throw new HarnessError("A non-empty goal is required.");
  const discovered = discoverRepository(ctx);
  const baseSha = assertPrimaryReady(ctx, discovered.repository);
  const refreshedSha = refreshBase(ctx, discovered.repository);
  const runId = requestedRunId ? assertRunId(requestedRunId) : createRunId(cleanGoal, ctx.now());
  const paths = getRunPaths(discovered.repository.root, runId);
  ensureRunDirectoryAvailable(paths);
  mkdirSync(paths.runDir, { recursive: true });
  const state = makeInitialState(ctx, discovered.repository, cleanGoal, runId, paths, refreshedSha || baseSha);
  transitionState(state, "PLANNING");
  record(state, "planning-started", { model: MODELS.planning.model, reasoning: MODELS.planning.reasoning }, ctx.now());
  saveState(ctx, state);
  if (!toolAvailable(ctx, "codex", discovered.repository.primaryWorktree)) {
    state.blockedReason = "codex --version is unavailable";
    saveState(ctx, state);
    writeOutput(writeManualHandoff(runId, "planning"));
    return state;
  }
  try {
    runPlanning(ctx, state);
    saveState(ctx, state);
  } catch (error) {
    state.blockedReason = error instanceof Error ? error.message : String(error);
    saveState(ctx, state);
    throw error;
  }
  writeOutput(`Run ${runId} is awaiting decisions. Plan: ${state.plan.filename}`);
  writeOutput(`Continue with: npm run pr:harness -- continue ${runId} --answers <answers-file>`);
  return state;
}

function continueRun(ctx, runId, answersPath) {
  const state = loadState(discoverRepository(ctx).repository.root, runId);
  if (state.phase === "READY_TO_PUBLISH" || state.phase === "PR_OPEN") {
    writeOutput(`Run ${runId} is already ${state.phase}.`);
    return state;
  }
  const answers = parseApprovalAnswers(readJson(resolve(ctx.cwd, answersPath), "answers file"));
  requireExecutionAnswers(answers);
  state.approvals.localWork = { authorized: true, source: relative(state.repository.root, resolve(ctx.cwd, answersPath)) };
  state.approvals.publish = { authorized: answers.publishAuthorized, scope: answers.publishScope, source: state.approvals.localWork.source };
  state.answers = answers;
  writeJson(join(state.paths.answersDir, "001.json"), answers);
  const repository = assertStateRepository(ctx, state);
  const currentBase = gitText(ctx, ["rev-parse", `refs/remotes/${REMOTE_NAME}/${BASE_BRANCH}`], repository.primaryWorktree);
  if (currentBase !== state.repository.baseSha) throw new HarnessError(`Base branch changed from ${state.repository.baseSha} to ${currentBase}; create a new plan.`);
  readPlan(state);
  requireTool(ctx, "codex", repository.primaryWorktree);
  if (existsSync(state.branch.worktreePath)) throw new HarnessError(`Feature worktree collision: ${state.branch.worktreePath}`);
  const branchRef = readOptionalGitText(ctx, ["show-ref", "--verify", `refs/heads/${state.branch.name}`], repository.primaryWorktree);
  if (branchRef) throw new HarnessError(`Feature branch collision: ${state.branch.name}`);
  transitionState(state, "READY_FOR_EXECUTION");
  saveState(ctx, state);
  mkdirSync(dirname(state.branch.worktreePath), { recursive: true });
  const added = runGit(ctx, ["worktree", "add", "-b", state.branch.name, state.branch.worktreePath, `refs/remotes/${REMOTE_NAME}/${BASE_BRANCH}`], repository.primaryWorktree);
  if (added.status !== 0) throw commandFailure("git", ["worktree", "add", "-b", state.branch.name, state.branch.worktreePath, `refs/remotes/${REMOTE_NAME}/${BASE_BRANCH}`], added);
  state.plan.copiedTo = copyApprovedPlan(state, answers.copyPlansToClaudeDocs);
  transitionState(state, "IMPLEMENTING");
  saveState(ctx, state);
  const resultPath = join(state.paths.resultsDir, "execution-output.md");
  let execution;
  try {
    execution = runCodex(ctx, "execution", state.branch.worktreePath, buildCodexPrompt("execution", state.goal, `Approved plan filename: ${state.plan.filename}`), resultPath);
  } catch (error) {
    state.blockedReason = error instanceof Error ? error.message : String(error);
    saveState(ctx, state);
    throw error;
  }
  state.sessions.execution = execution.session;
  transitionState(state, "VALIDATING");
  saveState(ctx, state);
  state.validation = runValidation(ctx, state.branch.worktreePath);
  writeJson(join(state.paths.resultsDir, "validation.json"), state.validation);
  if (state.validation.status !== "passed") {
    state.blockedReason = `Validation failed: ${state.validation.failedCommand}`;
    saveState(ctx, state);
    throw new HarnessError(state.blockedReason);
  }
  transitionState(state, "READY_TO_PUBLISH");
  record(state, "ready-to-publish", { validation: state.validation.status }, ctx.now());
  saveState(ctx, state);
  writeOutput(`Run ${runId} is ready to publish. Use: npm run pr:harness -- publish ${runId}`);
  return state;
}

function publishRun(ctx, runId) {
  const state = loadState(discoverRepository(ctx).repository.root, runId);
  if (state.phase === "PR_OPEN") {
    writeOutput(state.pr?.url ?? `Run ${runId} is already published.`);
    return state;
  }
  if (state.phase !== "READY_TO_PUBLISH") throw new HarnessError(`Publish requires READY_TO_PUBLISH; found ${state.phase}.`);
  ensurePublishApproval(state);
  if (state.validation?.status !== "passed") throw new HarnessError("Publish requires passing validation.");
  requireTool(ctx, "gh", state.branch.worktreePath);
  assertStateRepository(ctx, state);
  const recordedWorktree = assertRecordedWorktree(ctx, state, true);
  if (state.publish?.committedSha) {
    if (recordedWorktree.status) throw new HarnessError("Recorded commit exists, but the feature worktree has additional uncommitted changes.");
    const head = gitText(ctx, ["rev-parse", "HEAD"], state.branch.worktreePath);
    if (head !== state.publish.committedSha) throw new HarnessError("Recorded commit does not match the feature worktree HEAD.");
    if (!state.publish.publishedSha) {
      const pushArgs = ["push", "--set-upstream", REMOTE_NAME, state.branch.name];
      const push = runGit(ctx, pushArgs, state.branch.worktreePath);
      if (push.status !== 0) throw commandFailure("git", pushArgs, push);
      state.publish.publishedSha = head;
      state.publish.pushedAt = ctx.now().toISOString();
      saveState(ctx, state);
    }
  } else {
    const review = reviewDiff(ctx, state);
    commitAndPush(ctx, state, review, "feat: implement approved repository change");
  }
  publishPullRequest(ctx, state);
  transitionState(state, "PR_OPEN");
  record(state, "published", { number: state.pr.number, url: state.pr.url }, ctx.now());
  saveState(ctx, state);
  writeOutput(state.pr.url);
  return state;
}

function reviseRun(ctx, runId, requestPath) {
  const state = loadState(discoverRepository(ctx).repository.root, runId);
  if (state.phase !== "PR_OPEN") throw new HarnessError(`Revision requires PR_OPEN; found ${state.phase}.`);
  const request = readJson(resolve(ctx.cwd, requestPath), "revision request");
  if (!request || typeof request.request !== "string" || !request.request.trim()) throw new HarnessError("Revision request must contain a non-empty request string.");
  if (request.authorizeUpdate !== true) throw new HarnessError("Revision requires authorizeUpdate: true before commit and push.");
  const repository = assertStateRepository(ctx, state);
  requireTool(ctx, "codex", state.branch.worktreePath);
  const livePr = viewPullRequest(ctx, state);
  assertPullRequestIdentity(livePr, state);
  if (livePr.state !== "OPEN") throw new HarnessError(`Cannot revise a PR in state ${livePr.state}.`);
  writeJson(join(state.paths.requestsDir, `${state.history.length + 1}.json`), { request: request.request, authorizeUpdate: true });
  transitionState(state, "REVISION_REQUESTED");
  saveState(ctx, state);
  transitionState(state, "REVISING");
  saveState(ctx, state);
  const resultPath = join(state.paths.resultsDir, `revision-${state.history.length + 1}.md`);
  let execution;
  try {
    execution = runCodex(ctx, "execution", state.branch.worktreePath, buildCodexPrompt("execution", state.goal, `Revision request:\n${request.request}`), resultPath);
  } catch (error) {
    state.blockedReason = error instanceof Error ? error.message : String(error);
    saveState(ctx, state);
    throw error;
  }
  state.sessions[`revision-${state.history.length + 1}`] = execution.session;
  transitionState(state, "VALIDATING");
  saveState(ctx, state);
  state.validation = runValidation(ctx, state.branch.worktreePath);
  writeJson(join(state.paths.resultsDir, "validation.json"), state.validation);
  if (state.validation.status !== "passed") throw new HarnessError(`Validation failed: ${state.validation.failedCommand}`);
  state.publish = null;
  state.approvals.publish = { authorized: true, scope: ["commit", "push", "pr-create-or-update"], source: "explicit revision authorization" };
  transitionState(state, "READY_TO_PUBLISH");
  saveState(ctx, state);
  publishRun(ctx, runId);
  return state;
}

function remoteBranchExists(ctx, state) {
  const result = runGit(ctx, ["ls-remote", "--exit-code", "--heads", REMOTE_NAME, `refs/heads/${state.branch.name}`], state.repository.primaryWorktree);
  return result.status === 0;
}

function assertAncestor(ctx, state, mergeSha) {
  const result = runGit(ctx, ["merge-base", "--is-ancestor", state.branch.name, mergeSha], state.repository.primaryWorktree);
  if (result.status !== 0) throw new HarnessError(`Local branch ${state.branch.name} is not fully represented by merge ${mergeSha}.`);
}

function cleanupRun(ctx, runId, confirmed) {
  if (!confirmed) throw new HarnessError("Cleanup requires the explicit --confirm-merged flag.");
  const state = loadState(discoverRepository(ctx).repository.root, runId);
  if (!state.pr) throw new HarnessError("Cleanup requires a recorded pull request.");
  const livePr = viewPullRequest(ctx, state);
  assertPullRequestIdentity(livePr, state);
  if (livePr.state !== "MERGED") throw new HarnessError(`Cleanup requires a merged PR; live state is ${livePr.state}.`);
  const mergeSha = livePr.mergeCommit?.oid ?? livePr.mergeCommit;
  if (!mergeSha) throw new HarnessError("Merged PR has no merge commit identity.");
  assertStateRepository(ctx, state);
  assertRecordedWorktree(ctx, state, false);
  const remoteExists = remoteBranchExists(ctx, state);
  assertAncestor(ctx, state, mergeSha);
  if (remoteExists) {
    const fetched = runGit(ctx, ["fetch", REMOTE_NAME, state.branch.name], state.repository.primaryWorktree);
    if (fetched.status !== 0) throw commandFailure("git", ["fetch", REMOTE_NAME, state.branch.name], fetched);
    const counts = gitText(ctx, ["rev-list", "--left-right", "--count", `${REMOTE_NAME}/${state.branch.name}...${state.branch.name}`], state.repository.primaryWorktree).split(/\s+/).map(Number);
    if (counts[1] > 0) throw new HarnessError("Local feature branch has unpushed commits.");
  }
  if (state.phase === "PR_OPEN") transitionState(state, "AWAITING_MERGE");
  transitionState(state, "CLEANUP_AUTHORIZED");
  saveState(ctx, state);
  const switchedBeforeRemoval = runGit(ctx, ["switch", BASE_BRANCH], state.repository.primaryWorktree);
  if (switchedBeforeRemoval.status !== 0) throw commandFailure("git", ["switch", BASE_BRANCH], switchedBeforeRemoval);
  const pulledBeforeRemoval = runGit(ctx, ["pull", "--ff-only"], state.repository.primaryWorktree);
  if (pulledBeforeRemoval.status !== 0) throw commandFailure("git", ["pull", "--ff-only"], pulledBeforeRemoval);
  const removed = runGit(ctx, ["worktree", "remove", state.branch.worktreePath], state.repository.primaryWorktree);
  if (removed.status !== 0) throw commandFailure("git", ["worktree", "remove", state.branch.worktreePath], removed);
  const deletedLocal = runGit(ctx, ["branch", "-d", state.branch.name], state.repository.primaryWorktree);
  if (deletedLocal.status !== 0) throw commandFailure("git", ["branch", "-d", state.branch.name], deletedLocal);
  if (remoteExists) {
    const deleteArgs = ["push", REMOTE_NAME, "--delete", state.branch.name];
    const deletedRemote = runGit(ctx, deleteArgs, state.repository.primaryWorktree);
    if (deletedRemote.status !== 0 && remoteBranchExists(ctx, state)) throw commandFailure("git", deleteArgs, deletedRemote);
  }
  const switched = runGit(ctx, ["switch", BASE_BRANCH], state.repository.primaryWorktree);
  if (switched.status !== 0) throw commandFailure("git", ["switch", BASE_BRANCH], switched);
  const pulled = runGit(ctx, ["pull", "--ff-only"], state.repository.primaryWorktree);
  if (pulled.status !== 0) throw commandFailure("git", ["pull", "--ff-only"], pulled);
  transitionState(state, "CLEANED");
  record(state, "cleaned", { mergedSha: mergeSha }, ctx.now());
  saveState(ctx, state);
  const finalStatePath = join(state.paths.resultsDir, "cleanup-complete.json");
  writeJson(finalStatePath, state);
  const runDir = state.paths.runDir;
  const expected = getRunPaths(state.repository.root, state.runId).runDir;
  if (runDir !== expected) throw new HarnessError("Refusing to remove an unrecognized run directory.");
  rmSync(runDir, { recursive: true, force: true });
  writeOutput(`Cleaned run ${runId}.`);
  return state;
}

export function parseCli(argv) {
  const [command, ...rest] = argv;
  if (!command || command === "--help" || command === "-h") return { command: "help" };
  if (!["start", "continue", "resume", "publish", "revise", "cleanup"].includes(command)) throw new HarnessError(`Unknown command: ${command}`);
  if (command === "start") {
    let requestedRunId = null;
    const goal = [];
    for (let index = 0; index < rest.length; index += 1) {
      if (rest[index] === "--run-id") {
        requestedRunId = rest[++index];
        if (!requestedRunId) throw new HarnessError("--run-id requires a value.");
      } else goal.push(rest[index]);
    }
    return { command, goal: goal.join(" "), requestedRunId };
  }
  if (["continue", "resume"].includes(command)) {
    const runId = rest[0];
    const flagIndex = rest.indexOf("--answers");
    if (!runId || flagIndex < 0 || !rest[flagIndex + 1]) throw new HarnessError(`${command} requires <run-id> --answers <answers-file>.`);
    return { command: "continue", runId, answersPath: rest[flagIndex + 1] };
  }
  if (command === "publish") {
    if (rest.length !== 1) throw new HarnessError("publish requires exactly <run-id>.");
    return { command, runId: rest[0] };
  }
  if (command === "revise") {
    const runId = rest[0];
    const flagIndex = rest.indexOf("--request");
    if (!runId || flagIndex < 0 || !rest[flagIndex + 1]) throw new HarnessError("revise requires <run-id> --request <request-file>.");
    return { command, runId, requestPath: rest[flagIndex + 1] };
  }
  if (rest.length !== 2 || rest[1] !== "--confirm-merged") throw new HarnessError("cleanup requires <run-id> --confirm-merged.");
  return { command, runId: rest[0], confirmed: true };
}

export function usage() {
  return [
    "Usage:",
    "  npm run pr:harness -- start <goal> [--run-id <safe-id>]",
    "  npm run pr:harness -- continue <run-id> --answers <answers-file>",
    "  npm run pr:harness -- publish <run-id>",
    "  npm run pr:harness -- revise <run-id> --request <request-file>",
    "  npm run pr:harness -- cleanup <run-id> --confirm-merged",
  ].join("\n");
}

export function main(argv = process.argv.slice(2), options = {}) {
  const parsed = parseCli(argv);
  if (parsed.command === "help") {
    writeOutput(usage());
    return null;
  }
  const ctx = makeContext(options);
  if (parsed.command === "start") return startRun(ctx, parsed.goal, parsed.requestedRunId);
  if (parsed.command === "continue") return continueRun(ctx, parsed.runId, parsed.answersPath);
  if (parsed.command === "publish") return publishRun(ctx, parsed.runId);
  if (parsed.command === "revise") return reviseRun(ctx, parsed.runId, parsed.requestPath);
  return cleanupRun(ctx, parsed.runId, parsed.confirmed);
}

const isEntrypoint = process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url));
if (isEntrypoint) {
  try {
    main();
  } catch (error) {
    writeError(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
