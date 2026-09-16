---
name: design-taste
description: >
  Frontend design direction, token systems, and UI review in one workflow. Use this skill
  whenever the work touches how an interface looks or feels: building or restyling a landing
  page, marketing site, portfolio, hero section, pricing page, or any React/Next/HTML/Tailwind
  component; matching a named reference brand ("make it feel like Linear", "Vercel-style",
  "Stripe-clean"); authoring or consuming a DESIGN.md token file; auditing UI for
  accessibility, focus states, forms, motion, or performance; or when the user says the output
  looks generic, templated, AI-generated, or slop. Trigger it even when the request is phrased
  as plain implementation ("build me a hero", "write this landing page") and design is never
  mentioned, because the default output without it is templated. Do NOT use for dashboards,
  admin panels, data tables, or multi-step wizards.
license: MIT
metadata:
  version: "1.0.0"
  composite-of: "taste-skill (Leonxlnx), web-interface-guidelines (Vercel Labs), awesome-design-md (VoltAgent)"
---

# design-taste

Three bodies of rules, one workflow. Direction decides what to build, tokens decide what it
looks like, review decides whether it ships.

| Phase | Question | Reference |
|---|---|---|
| DIRECT | What is this, for whom, in what language? | this file, Step 1 and 2 |
| TOKENIZE | What are the exact values? | `references/07-design-md-catalog.md` |
| BUILD | How is it composed and animated? | `references/01-direction.md`, `02-motion-guardrails.md` |
| REVIEW | Is it correct and accessible? | `references/04-preflight-checklist.md`, `06-web-interface-guidelines.md` |

**Read only what the current phase needs.** The references total roughly 90 KB of rules plus
2.2 MB of brand token files. Loading all of it is the failure mode this router exists to prevent.

---

## Mode selection (do this first)

Pick one. Say which one in the first line of the response.

- **REVIEW ONLY** - user asked to audit, review, check a11y, or lint existing UI.
  Go straight to Step 5. Do not redesign anything unless asked.
- **REDESIGN** - existing site or component is the input.
  Read `references/03-redesign-protocol.md` before anything else, audit first, then Step 1.
- **BUILD** - new page, section, or component. Start at Step 1.
- **TOKENS ONLY** - user wants a DESIGN.md, a palette, a type scale, or a token set with no
  implementation. Go to Step 3, stop after it, skip the rest.

If the request is a dashboard, admin panel, data table, code editor, wizard, or realtime
collab UI, say so plainly, point at the right tool (Fluent, Carbon, Atlassian, Polaris,
TanStack Table, AG Grid, Monaco), and apply this skill only to the marketing surfaces.

---

## Step 1: Design read

Before any code, state one line:

> Reading this as: `<page kind>` for `<audience>`, with a `<vibe>` language, leaning toward
> `<design system or aesthetic family>`.

Infer from: page kind, vibe words the user used, reference URLs or brands they named,
audience, existing brand assets, and quiet constraints (public-sector, regulated,
accessibility-critical, kids). Constraints override aesthetics.

If the read genuinely diverges, ask **exactly one** question. Never a question dump. If it can
be inferred, do not ask.

**Anti-default discipline.** Do not reach for: AI-purple gradients, centered hero over dark
mesh, three equal feature cards, glassmorphism on everything, Inter plus slate-900, beige plus
brass plus oxblood for anything premium-consumer. Those are the defaults this skill exists to
beat.

## Step 2: Set the dials

State the values and the reason. Baseline is `8 / 6 / 4`.

- `DESIGN_VARIANCE` 1-10 - symmetry to chaos
- `MOTION_INTENSITY` 1-10 - static to cinematic
- `VISUAL_DENSITY` 1-10 - gallery to cockpit

| Signal | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| minimalist / clean / calm / editorial / Linear-style | 5-6 | 3-4 | 2-3 |
| premium consumer / Apple-y / luxury | 7-8 | 5-7 | 3-4 |
| playful / Awwwards / experimental / agency | 9-10 | 8-10 | 3-4 |
| landing page / portfolio (default) | 7-9 | 6-8 | 3-5 |
| trust-first / public-sector / regulated | 3-4 | 2-3 | 4-5 |
| redesign, preserve | match | +1 | match |
| redesign, overhaul | +2 | +2 | match |

Full dial semantics and use-case presets: `references/01-direction.md`, sections 1 and 7.

## Step 3: Resolve tokens

In priority order:

1. **Project already has a `DESIGN.md` or a token file.** Use it. Do not invent a parallel
   palette. This outranks everything below.
2. **User named a reference brand.** Open `references/07-design-md-catalog.md`, find the slug,
   read that one file from `references/design-md/<slug>/DESIGN.md`. Take tokens, not layout,
   not copy, not marks. Read at most two brand files per task.
3. **Brief maps to a real design system** (Fluent, Material 3, Carbon, Polaris, Atlaskit,
   Primer, GOV.UK, USWDS, Radix Themes, shadcn/ui, Bootstrap). Install the official package.
   Do not hand-roll its CSS, do not import its tokens then override 90% of them, do not mix
   two systems in one tree. Install commands and canonical docs:
   `references/05-design-systems.md`.
4. **Nothing fits.** Author a fresh DESIGN.md from `assets/DESIGN.template.md` and show it to
   the user before writing components. Every token must be a concrete value.

Lock the result. One accent color, one neutral temperature, one radius system, one theme
(light or dark or auto) for the whole page. No section flips mid-page.

## Step 4: Build

Read `references/01-direction.md` for typography, color calibration, layout diversification,
content density, image strategy, and the AI-tells list.

Read `references/02-motion-guardrails.md` only if `MOTION_INTENSITY > 4`, or the brief asks
for scroll effects, or you are about to write GSAP or Motion code. It carries the canonical
sticky-stack, horizontal-pan, and scroll-reveal skeletons plus reduced-motion and dark-mode
protocol.

Defaults when no design system was selected:

- React or Next with Server Components; anything with Motion, scroll, or pointer physics is an
  isolated `'use client'` leaf
- Tailwind v4 (`@tailwindcss/postcss` or the Vite plugin, not the v3 PostCSS plugin)
- `motion/react` for animation, not the legacy `framer-motion` import path
- Fonts via `next/font` or self-hosted `@font-face` with `font-display: swap`. Never a
  production `<link>` to Google Fonts
- Icons from Phosphor, HugeIcons, Radix Icons, or Tabler. One family. Never hand-rolled SVG paths
- `min-h-[100dvh]`, never `h-screen`. CSS Grid, never flex percentage math
- Never `useState` for continuous values (mouse, scroll, physics). Use `useMotionValue` /
  `useTransform` / `useScroll`
- Check `package.json` before importing anything. Output the install command if it is missing

## Step 5: Review gate

Two checklists. Both run before delivery.

1. `references/04-preflight-checklist.md` - taste and composition. Hero fits viewport, eyebrow
   count capped, no zigzag repetition, one accent, no duplicate CTA intent, motion motivated,
   no AI tells, zero em-dashes anywhere in visible copy.
2. `references/06-web-interface-guidelines.md` - correctness. Accessibility, focus states,
   forms, animation, typography details, content handling, images, performance, mobile,
   touch, state management. Also the checklist to use when the user asks for a review of code
   they already have.

For REVIEW ONLY mode, output findings grouped by file in terse `file:line` form, per the
output format at the end of the guidelines reference. No preamble, no praise, no restating
the code.

If a box cannot be honestly ticked, the work is not done. Fix it, do not caveat it.

---

## Non-negotiables

Short list. Everything else is contextual; these are not.

1. **Zero em-dashes** in any visible string. Headlines, eyebrows, body, quotes, attribution,
   captions, buttons, alt text.
2. **One accent, one neutral temperature, one radius system, one theme** across the whole page.
3. **WCAG AA** on every text-on-background pair, including CTA labels, placeholders, focus
   rings, and form labels. 4.5:1 body, 3:1 large.
4. **Visible focus** on every interactive element. Never `outline: none` without a replacement.
5. **`prefers-reduced-motion`** honored for everything that moves.
6. **Real content.** No "Jane Doe", no "Acme Inc", no lorem, no fabricated metrics or fake
   customer logos presented as real.
7. **Honest labeling.** If it is an approximation of something proprietary (Apple Liquid Glass
   is the usual case), say so in a comment. There is no official web package for it.
8. **Verify dependencies** against `package.json` before importing. Never assume.

---

## Reference map

| File | Size | Read when |
|---|---|---|
| `references/01-direction.md` | ~52 KB | Every BUILD and REDESIGN. Core generation rules and AI tells. |
| `references/02-motion-guardrails.md` | ~14 KB | `MOTION_INTENSITY > 4`, scroll effects, dark mode protocol, CWV targets. |
| `references/03-redesign-protocol.md` | ~6 KB | REDESIGN mode, before touching anything. |
| `references/04-preflight-checklist.md` | ~7 KB | Before every delivery. |
| `references/05-design-systems.md` | ~8 KB | Step 3 route 3. Install commands, canonical docs, Liquid Glass approximation. |
| `references/06-web-interface-guidelines.md` | ~8 KB | REVIEW mode, and before every delivery. |
| `references/07-design-md-catalog.md` | ~11 KB | Step 3 route 2 or 4. Index of 74 brand token files. |
| `references/design-md/<slug>/DESIGN.md` | 25-45 KB each | One or two per task, maximum. |
| `assets/DESIGN.template.md` | ~4 KB | Authoring a new token system. |

Provenance and licensing: `ATTRIBUTION.md`.
