---
name: worktree-pr-harness
description: >
  Run a guarded repository workflow from an approved plan through isolated
  implementation, validation, GitHub pull request publication, revision, and
  post-merge cleanup. Use when a change needs a dedicated worktree and explicit
  mutation approvals.
license: MIT
metadata:
  version: "1.0.0"
---

# Worktree PR Harness

Use this skill when a repository change needs a durable plan, a dedicated
worktree, pinned planning and execution sessions, or an auditable GitHub PR
lifecycle.

## Invocation

The conversational entrypoint is:

```text
$worktree-pr-harness <goal>
```

The deterministic recovery interface is:

```bash
npm run pr:harness -- start "<goal>"
npm run pr:harness -- continue <run-id> --answers <answers-file>
npm run pr:harness -- publish <run-id>
npm run pr:harness -- revise <run-id> --request <request-file>
npm run pr:harness -- cleanup <run-id> --confirm-merged
```

Free-form answers and revision requests belong in files. Do not interpolate
them into shell commands.

## Guardrails

- Planning runs with `gpt-5.6-sol` at `high`; execution and revisions run with
  `gpt-5.6-luna` at `xhigh`. The launcher establishes these values because a
  skill cannot change the active model of its parent conversation.
- Planning creates only ignored state under `.worktrees/` and stops for
  decisions. It does not create branches, worktrees, commits, pushes, or PRs.
- Continue requires recorded plan approval and local-work authorization.
- Publish requires the named authorization bundle for commit, push, and PR
  create or update, plus passing validation. A PR is never merged by this
  workflow.
- Revision stays on the recorded branch and PR. Cleanup requires the explicit
  `--confirm-merged` flag and live verification that the matching PR is merged.
- Never force-push, rewrite history, deploy, clean unrelated resources, or
  switch to another worktree silently.

Read `references/workflow.md` for the phase-specific procedure. Read
`references/state-schema.md` only when inspecting or recovering a run
manifest. Keep the launcher and references aligned with the approved plan in
`.claude/docs/002-worktree-pr-harness-plan.md`.
