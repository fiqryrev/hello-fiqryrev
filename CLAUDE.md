@AGENTS.md
@.claude/CLAUDE.md

## Claude Code specifics

Project skills are in `.claude/skills/`, symlinked to `.agents/skills/`. If a skill
does not appear in `/skills`, run `./scripts/install-agent-skills.sh` and restart
the session.

Use plan mode before any multi-file restyle.

For guarded repository work, use `$worktree-pr-harness <goal>`. The approved
workflow and durable plan history are documented in
`.claude/docs/002-worktree-pr-harness-plan.md`; the launcher is available as
`npm run pr:harness -- ...` for recovery and audit operations.
