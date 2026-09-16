# Attribution

`design-taste` is a composite skill. It bundles material from three upstream projects,
all MIT licensed. Nothing here is original design research; the value of this package is
the routing layer that decides which body of rules applies to which phase of a task.

## 1. taste-skill

- Author: Leonxlnx
- Repo: https://github.com/leonxlnx/taste-skill
- License: MIT (Copyright (c) 2026 Leonxlnx)
- Upstream file: `skills/taste-skill/SKILL.md` (skill name `design-taste-frontend`)
- Used in: `references/01-direction.md`, `02-motion-guardrails.md`,
  `03-redesign-protocol.md`, `04-preflight-checklist.md`, `05-design-systems.md`
- Modification: the single 1,206-line SKILL.md was split into five reference files by
  section boundary so the router can load only the relevant part. Rule text is unchanged.

The upstream repo also ships 12 other skills not bundled here: `brandkit`,
`imagegen-frontend-web`, `imagegen-frontend-mobile`, `image-to-code`, `stitch-design-taste`,
`redesign-existing-projects`, `high-end-visual-design`, `minimalist-ui`,
`industrial-brutalist-ui`, `gpt-taste`, `full-output-enforcement`, and `design-taste-frontend-v1`.
Install those separately from the upstream repo if needed.

## 2. Vercel Web Interface Guidelines

- Author: Vercel Labs
- Rules repo: https://github.com/vercel-labs/web-interface-guidelines (MIT, Copyright (c) 2025 Vercel Labs)
- Skill wrapper repo: https://github.com/vercel-labs/agent-skills (`skills/web-design-guidelines`, no license file at time of bundling)
- Used in: `references/06-web-interface-guidelines.md`
- Modification: the upstream skill is a thin wrapper that fetches `command.md` over the
  network at review time. That dependency was removed by inlining a snapshot of `command.md`
  taken 2026-09-15. The file retains the source URL so it can be refreshed.

## 3. awesome-design-md

- Author: VoltAgent
- Repo: https://github.com/VoltAgent/awesome-design-md
- License: MIT (Copyright (c) 2026 VoltAgent)
- Used in: `references/design-md/` (74 DESIGN.md files, verbatim) and
  `references/07-design-md-catalog.md` (index derived from the upstream README)
- DESIGN.md as a format is a Google Stitch convention:
  https://stitch.withgoogle.com/docs/design-md/overview/

## Trademark note

The bundled DESIGN.md files describe publicly observable design languages of real products.
Brand names, logos, trademarks, and proprietary typefaces in those files belong to their
owners and are referenced for direction only. Do not ship clones of those sites, reuse their
marks, or embed licensed fonts you do not have rights to.

## Not included

Sponsor content, banners, and affiliate links present in the upstream READMEs were dropped.
They are marketing, not instruction, and would waste context on every skill load.
