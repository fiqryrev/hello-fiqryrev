This reference documents the ignored run manifest used by the worktree PR harness.

## Overview

Run state lives at `.worktrees/.worktree-pr-harness/runs/<run-id>/state.json`.
The directory is control state, not a repository artifact. Plans, answers,
requests, command results, and PR body drafts are stored beside it.

## Manifest fields

```json
{
  "schemaVersion": 1,
  "runId": "<safe-run-id>",
  "goal": "<user goal>",
  "phase": "AWAITING_DECISIONS",
  "repository": {
    "root": "<runtime path>",
    "primaryWorktree": "<runtime path>",
    "commonGitDir": "<runtime path>",
    "remote": "origin",
    "remoteUrl": "<runtime value>",
    "baseBranch": "main",
    "baseSha": "<sha>"
  },
  "branch": {
    "name": "codex/<run-id>",
    "worktreePath": "<runtime path>",
    "worktreeRelative": ".worktrees/<run-id>",
    "createdFromSha": "<sha>"
  },
  "plan": {
    "version": "001",
    "filename": "001-<slug>-plan.md",
    "statePath": "<runtime path>",
    "copiedTo": null
  },
  "approvals": {
    "localWork": { "authorized": false },
    "publish": { "authorized": false, "scope": [] }
  },
  "sessions": {},
  "validation": null,
  "pr": null,
  "history": []
}
```

Runtime paths stay in ignored state only. Plans, PR bodies, and committed
repository files use repository-relative paths and must not contain local
usernames, absolute paths, credentials, tokens, or account-specific values.

## Invariants

- `runId` matches `^[a-z0-9][a-z0-9-]{2,63}$` and is never reused.
- `branch.name` and `branch.worktreePath` are the exact recorded resources.
- `repository.baseBranch` is `main`, and execution starts only from the
  recorded `origin/main` SHA.
- `phase` moves forward through the state machine; completed publish and
  cleanup operations report their recorded result rather than repeating it.
- `validation.status` must be `passed` before publish. Failed defined checks
  remain blocking; skipped checks include a reason.
- `pr.headRefName`, `pr.baseRefName`, and `pr.headRefOid` are rechecked before
  revision and cleanup. A different PR identity is a refusal.
- Cleanup is the only operation that removes the exact run directory, and it
  does so only after merged-state verification and clean-worktree checks.
