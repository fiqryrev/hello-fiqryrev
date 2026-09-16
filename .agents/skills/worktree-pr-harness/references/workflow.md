This reference defines the guarded phase workflow behind `$worktree-pr-harness`.

## Overview

The launcher owns state transitions and subprocess argument construction. The
agent owns read-only discovery, implementation, and repository-specific
validation. The user owns material decisions and mutation authorization.

## Phase procedure

1. `start <goal>` resolves the primary `main` worktree, `origin`, and a unique
   run ID. It requires a clean primary worktree and refreshes `origin/main`.
   It invokes a read-only Sol planning session and stores plan `001` in ignored
   run state. No branch or feature worktree exists at this point.
2. `continue <run-id> --answers <file>` accepts JSON answers. It requires
   `planApproved: true` and `localWorkAuthorized: true`. The launcher refuses
   branch, path, base, and repository identity collisions. With
   `copyPlansToClaudeDocs: true`, it copies the immutable approved plan into
   the feature worktree's `.claude/docs/` directory.
3. The execution session runs in `.worktrees/<run-id>/` with the Luna/xhigh
   configuration. The agent must read repository instructions, implement only
   the approved plan, and leave commit, push, and PR operations to the
   launcher. The launcher then runs `git diff --check` and the applicable
   package checks before entering `READY_TO_PUBLISH`.
4. `publish <run-id>` rechecks the recorded worktree and primary worktree,
   reviews the status and diff summary, rejects sensitive local-path or token
   text, and requires the explicit publish bundle. It creates one conventional
   commit, pushes without force, and creates or updates only the recorded
   `main` pull request. It records the URL and head identity before returning.
5. `revise <run-id> --request <file>` requires JSON with a non-empty `request`
   and `authorizeUpdate: true`. The same branch and worktree are reused. After
   the Luna/xhigh revision and fresh validation, the launcher creates a normal
   follow-up commit, pushes normally, and edits the recorded PR body.
6. `cleanup <run-id> --confirm-merged` verifies the recorded PR live through
   `gh`: it must be `MERGED`, target `main`, and point at the recorded branch.
   The worktree must be clean, local commits must be represented by the merge,
   and there must be no unpushed commits. Only then does the launcher remove
   the exact recorded worktree and branches, switch the primary worktree to
   `main`, and pull with `--ff-only`.

## Recovery and refusal

Every mutating operation is preceded by read-only checks. If a check fails,
the launcher records the blocker and stops without trying a different branch,
worktree, model, effort, remote, or PR. A failed Codex invocation leaves the
run in its current non-publishable phase and prints a manual handoff with the
required model and reasoning settings.

If planning is interrupted, a user may place a valid Markdown plan at the
recorded plan path and use `resume <run-id>` with the same answer file. The
launcher still requires the normal plan and local-work approvals. A missing
optional repository command is recorded as skipped with its exact reason; a
defined check that exits non-zero blocks publication.

Do not use stash, force-push, destructive reset, implicit rebase, broad
recursive deletion, or a second PR for a revision. An already deleted remote
feature branch is acceptable during cleanup only after the merged PR identity
has been verified.

## Answer examples

The minimum execution answer is:

```json
{
  "planApproved": true,
  "localWorkAuthorized": true,
  "copyPlansToClaudeDocs": true,
  "publishAuthorized": false
}
```

To authorize the named publish bundle in the same answer file, add:

```json
{
  "publishAuthorized": true,
  "publishScope": ["commit", "push", "pr-create-or-update"]
}
```

The cleanup flag is separate and does not authorize a merge. Live GitHub state
must still prove that the exact PR was merged.
