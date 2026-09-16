A repository skill and deterministic launcher will provide one guarded workflow from planning through pull request cleanup while preserving model selection and explicit mutation approvals.

## Overview

- Plan version: `1.1`
- Status: implementation complete; validation passed; publication authorized
- Skill name: `worktree-pr-harness`
- Canonical skill location: `.agents/skills/worktree-pr-harness/`
- Primary target: GitHub repositories using `git`, `gh`, and Codex CLI

## Approved decisions

1. Primary invocation is `$worktree-pr-harness <goal>`, backed by the deterministic Node launcher.
2. Approved versioned plans are copied into `.claude/docs/` and committed in the PR.
3. The user authorizes the named publish bundle of commit, push, and GitHub PR create or update after validation passes.

The skill will coordinate the workflow, but it will not pretend that `SKILL.md` can change the active model. A repository launcher will start separate Codex runs with explicit model and reasoning settings, persist phase state, and enforce stop gates around Git and GitHub mutations.

## Objective

Provide one simple entrypoint that:

1. Runs planning with `gpt-5.6-sol` and `high` reasoning.
2. Writes a versioned Markdown plan, asks only material questions, and stops.
3. Starts execution only after the user answers, using `gpt-5.6-luna` and `xhigh` reasoning.
4. Creates an isolated feature branch and ignored worktree, implements and validates, then publishes a pull request only with explicit authorization.
5. Reuses the same branch, worktree, and pull request for revisions.
6. Cleans up only after the user confirms merge and live GitHub state verifies it.

## Scope

- Repository-local skill instructions and progressive references.
- A Node launcher that invokes Codex with pinned model and reasoning values.
- Per-run state, plan versions, authorization records, and phase transitions.
- Safe Git worktree and branch lifecycle.
- GitHub pull request creation, revision, merge verification, and cleanup through `gh`.
- Validation of the harness itself and repository-specific validation selected during planning.

## Non-scope

- Changing the model of the already-running parent conversation.
- Supporting GitLab or other forge APIs in the first version.
- Merging pull requests, force-pushing, rewriting history, or bypassing branch protection.
- Automatic production deployment or post-merge production verification.
- Guessing task requirements, approval, a PR number, or merge state.
- Cleaning unrelated worktrees, branches, files, stashes, or user changes.

## Proposed Files

| File | Purpose |
|---|---|
| `.agents/skills/worktree-pr-harness/SKILL.md` | Short entrypoint, invocation routing, authorization rules, and stop conditions. |
| `.agents/skills/worktree-pr-harness/agents/openai.yaml` | UI name and default `$worktree-pr-harness` prompt. Keep invocation policy aligned with the user's answer below. |
| `.agents/skills/worktree-pr-harness/references/workflow.md` | Detailed phase state machine, recovery behavior, and PR revision rules. |
| `.agents/skills/worktree-pr-harness/references/state-schema.md` | Run-state fields, plan metadata, approval ledger, and invariants. |
| `scripts/worktree-pr-harness.mjs` | Deterministic launcher, Codex process runner, state transitions, Git checks, and `gh` operations. |
| `scripts/worktree-pr-harness.test.ts` | State-transition, command-construction, collision, refusal, and cleanup tests using temporary local repositories. |
| `package.json` | Add a `pr:harness` script as the direct CLI alias. |
| `.claude/skills/worktree-pr-harness` | Relative symlink created by `scripts/install-agent-skills.sh`, matching existing repository structure. |
| `AGENTS.md` | Add the skill to the repository skill table and explain when it applies. |
| `.claude/CLAUDE.md` | Document the invocation and reference this plan so it is not orphaned. |

No new dependency is planned. Node, Git, Codex CLI, and GitHub CLI are sufficient.

## Invocation Contract
Recommended user-facing invocation:

```text
$worktree-pr-harness <goal>
```

The skill delegates orchestration to one repository command:

```bash
npm run pr:harness -- start "<goal>"
```

The same command owns all later phases through explicit verbs and a run ID:

```bash
npm run pr:harness -- continue <run-id> --answers <answers-file>
npm run pr:harness -- publish <run-id>
npm run pr:harness -- revise <run-id> --request <request-file>
npm run pr:harness -- cleanup <run-id> --confirm-merged
```

The skill hides these mechanics during normal conversation. The CLI remains available for recovery, automation, and auditability. Free-form answers and revision text are passed through files or stdin, not interpolated into shell commands.

## Phase State Machine and Stopping Gates

| State | Actor | Allowed outcome | Mandatory stop gate |
|---|---|---|---|
| `NEW` | launcher | Validate tools, repository, base branch, clean control worktree, and unique run ID. | Refuse on ambiguity, dirty protected paths, or collisions. |
| `PLANNING` | Sol/high | Inspect read-only context and write plan version `001`. | No branch, worktree, commit, push, or PR. |
| `AWAITING_DECISIONS` | user | Answer only material questions and select authorization scope. | Stop until answers are recorded. |
| `READY_FOR_EXECUTION` | launcher | Create the exact feature branch and `.worktrees/<run-id>/` worktree after local-work authorization. | Refuse if base, branch, or path changed unexpectedly. |
| `IMPLEMENTING` | Luna/xhigh | Implement only the approved plan in the feature worktree. | Stay inside the dedicated worktree. |
| `VALIDATING` | Luna/xhigh | Run the approved checks and write results to state/PR draft metadata. | Stop on failed or skipped required checks. |
| `READY_TO_PUBLISH` | user/launcher | Review diff, validation, commit message, and PR draft. | Continue only if the recorded answers explicitly authorized the publish bundle; otherwise stop and ask. |
| `PR_OPEN` | launcher | Commit, push, create the PR, record URL/number/head/base, and return the link. | Stop immediately after reporting the PR. |
| `REVISION_REQUESTED` | user | Record revision intent for the same run and PR. | Require explicit update authorization before commit/push. |
| `REVISING` | Luna/xhigh | Edit and validate the existing feature worktree. | Never create a second PR or switch branches silently. |
| `AWAITING_MERGE` | user | User states that the PR was merged. | This statement authorizes verification only. |
| `CLEANUP_AUTHORIZED` | user/launcher | Live `gh` verification confirms merged PR and matching head branch. | Require explicit cleanup authorization. |
| `CLEANED` | launcher | Remove exact worktree, delete exact local/remote feature branches, switch the primary worktree to `main`, and `git pull --ff-only`. | Refuse if uncommitted work, unpushed commits, identity mismatch, or unmerged PR exists. |

Every phase is idempotent. Re-running a completed phase reports its recorded result instead of repeating a mutation.

## Model Orchestration
The launcher, not `SKILL.md`, pins model selection:

```bash
codex exec -m gpt-5.6-sol -c model_reasoning_effort=high ...
codex exec -C <feature-worktree> -m gpt-5.6-luna -c model_reasoning_effort=xhigh ...
```

Planning and execution are separate sessions. The approved plan, user answers, repository instructions, and run-state manifest are the handoff contract. A fresh execution session is preferable to resuming the planning session because `-C` makes the dedicated worktree the execution root and avoids relying on conversational context for safety-critical state.

The launcher will parse `codex exec --json` events, record the session ID and terminal status, and fail closed if the requested model or reasoning configuration cannot be established. The selected models and effort levels are supported in current official model documentation, while Codex CLI exposes explicit `--model`, configuration overrides, working-directory selection, and non-interactive execution: [OpenAI models](https://developers.openai.com/api/docs/models), [Codex non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode), and [Codex configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference).

### Fallback when automatic orchestration is unavailable

If Codex CLI is missing, nested execution is blocked, the model is unavailable, or policy prevents the requested effort:

1. Do not silently use another model or effort.
2. Complete no mutating phase.
3. Write or preserve the current plan/state artifact.
4. Print exact manual handoff commands for a Sol/high planning session or Luna/xhigh execution session.
5. Require the user to start the correctly configured session and invoke `$worktree-pr-harness resume <run-id>`.

This fallback preserves one workflow and its state while making the model transition user-driven rather than falsely claiming it happened.

## Git and Worktree Safety Invariants

- Resolve repository root, common Git directory, primary worktree, base branch, remote, branch, worktree path, and PR identity before mutation.
- Use only `.worktrees/<run-id>/` for feature worktrees; `/.worktrees/` is already ignored.
- Create branches from an explicitly refreshed `origin/main`; never assume the caller's current branch is current.
- Require the primary worktree to be on `main` and clean before creating a run, except for known harness state under ignored paths.
- Refuse existing branch/worktree/path collisions unless they match the recorded run exactly.
- Never use force push, destructive reset, broad recursive deletion, stash, or implicit rebase.
- Limit file edits, validation, commits, and revision commits to the feature worktree.
- Before publish, show and record `git status`, diff summary, validation results, commit message, PR base/head, and requested mutation authorization.
- A publish authorization may be granted with the planning answers and applied only after validation succeeds; without it, stop at `READY_TO_PUBLISH`.
- Before cleanup, verify the PR is merged, its head matches the recorded branch, the local branch is fully represented by the merge, and the worktree has no changes or unpushed commits.
- Change directory to the primary worktree before removing the feature worktree. Remove only the recorded path and exact branch names.
- Treat an already deleted remote branch as an idempotent success; treat any different remote branch identity as a refusal.
- Finish with `git -C <primary-worktree> switch main` and `git -C <primary-worktree> pull --ff-only`; never create a merge commit during cleanup.

## Plan Artifact Strategy
Each run receives ignored control state at `.worktrees/.worktree-pr-harness/runs/<run-id>/`:

- `state.json` for phase, repository identity, branch/worktree/PR identity, session IDs, timestamps, and approval ledger.
- `plans/001-<slug>-plan.md`, then `002-...` for material replans. Existing versions are immutable.
- `answers/`, `requests/`, and `results/` files for shell-safe handoffs and audit records.

Every plan starts with a one-line summary and `## Overview`, records its version and status, and stays under 200 lines. After execution is authorized, the launcher can copy approved plan versions into `.claude/docs/` in the feature worktree for review and long-term history, depending on the user's answer below. Local state remains ignored and is removed only during authorized final cleanup.

## Validation Strategy

### Static and unit validation

- Run the skill validator against `.agents/skills/worktree-pr-harness/`.
- Run `./scripts/install-agent-skills.sh --check` and verify the Claude symlink.
- Run targeted Vitest coverage for state transitions, approval parsing, shell argument boundaries, and refusal paths.
- Run ESLint and TypeScript checks for added script/test files.
- Assert that no generated state or worktree content is tracked.

### Disposable integration validation

Use temporary local bare remotes and repositories to prove:

- Plan stops before branch/worktree creation.
- Execution cannot start without recorded answers and local-work authorization.
- Publish cannot commit, push, or create a PR without its explicit authorization.
- Revision targets the recorded branch and PR only.
- Cleanup refuses open/unverified PRs, dirty worktrees, unpushed commits, and identity mismatches.
- Successful cleanup removes only recorded resources and performs an `--ff-only` update.

Mock Codex and `gh` responses for automated tests. Run one opt-in live dry run on a disposable GitHub repository before declaring rollout complete; do not use this production repository as the first end-to-end mutation test.

## Rollout Steps

1. Record the three approved decisions above and mark this plan approved as version `1.1`.
2. Create the skill skeleton, focused references, launcher, and tests on the dedicated feature branch/worktree.
3. Add the package alias, repository skill registration, Claude symlink, and documentation reference.
4. Validate skill structure, installer parity, tests, lint, type checking, and build where relevant.
5. Exercise refusal and recovery paths with disposable local repositories.
6. Run an opt-in disposable GitHub integration test with explicit publish and cleanup approvals.
7. Review the implementation diff and validation record, then apply the recorded publish authorization or stop to request it before commit, push, and PR creation.
8. Return the PR link and stop. Use the same run ID for revisions and final verified cleanup.

## Decision record

The three questions are resolved in favor of the primary `$worktree-pr-harness <goal>` entrypoint, durable plan copies in `.claude/docs/`, and one explicit publish authorization bundle covering commit, push, and GitHub PR create or update after validation.
