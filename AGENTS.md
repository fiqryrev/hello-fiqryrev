# AGENTS.md

Read by Codex, Cursor, Copilot CLI, and Gemini CLI at session start.
Claude Code reads it through the `@AGENTS.md` import in the root `CLAUDE.md`.
The root `CLAUDE.md` also imports `.claude/CLAUDE.md` for Claude-specific project conventions.

## Agent skills in this repo

Committed skills live in `.agents/skills/`. Claude Code sees them through
`.claude/skills/`, which `scripts/install-agent-skills.sh` keeps in sync.

| Skill | Path | Applies to |
|---|---|---|
| `design-taste` | `.agents/skills/design-taste/SKILL.md` | Any work on how an interface looks or behaves |
| `frontend-tailwind-best-practices` | `.agents/skills/frontend-tailwind-best-practices/SKILL.md` | Tailwind CSS component styling and layout |
| `worktree-pr-harness` | `.agents/skills/worktree-pr-harness/SKILL.md` | Guarded planning, implementation, validation, and GitHub PR lifecycle in an isolated worktree |

Use `worktree-pr-harness` for repository changes that need a versioned plan, a
dedicated worktree, explicit mutation approvals, or repeatable GitHub PR
revisions and cleanup. Its primary invocation is `$worktree-pr-harness <goal>`;
the recovery and audit interface is `npm run pr:harness -- ...`.

## design-taste: when to load it

Read `.agents/skills/design-taste/SKILL.md` **before writing or editing any of the
following**, without waiting to be asked:

- Any file under a UI path: `.tsx`, `.jsx`, `.vue`, `.svelte`, `.css`, `.html`
- Any landing page, marketing page, portfolio, hero, pricing table, or email template
- Any restyle, redesign, or "make this look better" request
- Any request that names a reference brand ("Linear-style", "Vercel-clean", "like Stripe")
- Any accessibility, focus-state, form, motion, or Core Web Vitals audit

Do not load it for backend work, data pipelines, SQL, dbt models, Airflow DAGs,
notebooks, or CLI tooling. It has no bearing on those and burns context.

The skill is a router. Read its `SKILL.md` first and follow its own pointers into
`references/`. Do not bulk-read the `references/` directory; the brand token files
under `references/design-md/` are 25-45 KB each and at most two belong in context
per task.

## Project design tokens

If `DESIGN.md` exists at the repo root, it is the source of truth for colors, type
scale, spacing, radii, and elevation. It outranks anything the skill suggests and
outranks any bundled brand file. Do not introduce a parallel palette.

## Non-negotiable output rules

These hold for every agent on every UI change in this repo:

1. No em-dash characters in any user-visible string.
2. One accent color, one neutral temperature, one radius system, one theme per page.
3. WCAG AA contrast on all text, including CTA labels, placeholders, and focus rings.
4. Visible focus on every interactive element. Never `outline: none` without a replacement.
5. `prefers-reduced-motion` honored for anything that animates.
6. No placeholder identities in committed code: no "Jane Doe", no "Acme Inc", no lorem.
7. Verify a package exists in `package.json` before importing it.

Run the skill's review gate before opening a PR that touches UI.
