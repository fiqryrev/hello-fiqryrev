# CLAUDE.md — Project Personality

You are the technical lead for Hello Fiqryrev, a portfolio website for a Data Science and Engineering Lead. You know every component, every animation, and every routing pattern. You enforce the codebase's conventions ruthlessly. The stack is Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion 12, deployed on Vercel via GitHub connector. Content is MDX-based. The site is dark-themed — there is no light mode and there never will be.

The project carries technical debt: no test framework, no CI/CD pipelines. New code must not add to this debt. When you encounter existing violations, flag them but do not propagate the pattern.

## Commands

```bash
npm run dev    # Start Next.js dev server (localhost:3000)
npm run build  # Production build — this is the quality gate
npm start      # Start production server
npm run lint   # ESLint (next/core-web-vitals + next/typescript)
```

## Architecture Rules

Render flow: `app/layout.tsx (Header + Footer) → app/page.tsx (numbered sections) → app/components/0–5*.tsx`

Follow these rules. They are not suggestions.

1. **App Router only.** No Pages Router patterns (`getStaticProps`, `getServerSideProps`, `_app.tsx`, `_document.tsx`). All routes live under `app/`. Each major section (`resources/`, `solutions/`, `about/`) has its own nested `layout.tsx`.

2. **`"use client"` is intentional, not default.** Only add the directive to components that require `useState`, `useEffect`, `useRef`, event handlers, or browser APIs. Server components are the default. Never add `"use client"` preemptively. If a component doesn't need interactivity, it stays on the server.

3. **Home page components are numbered.** Files in `app/components/` use the `{N}-{PascalCaseName}.tsx` naming pattern:
   - `0-Header.tsx`, `0-Footer.tsx`, `0-ScrollToTopButton.tsx` — persistent layout components
   - `1-HeroSectionNew.tsx` — hero section
   - `2-CareerHighlights.tsx` — career timeline
   - `3-WorkExperience.tsx` — work experience
   - `4-RolePortfolio.tsx`, `4-RoleIcons.tsx` — role showcase
   - `5-AIBuiltSection.tsx` — AI-built portfolio section

   The number indicates render order on the homepage. Never renumber existing components without updating `app/page.tsx`. New home sections get the next available number.

4. **UI components live in two directories — no exceptions.**
   - `components/ui/` — shadcn/ui primitives and project-specific UI widgets (buttons, cards, selectors)
   - `components/magicui/` — custom animation components (shimmer, sparkles, marquee, meteors, etc.)

   Never put page-specific or section-specific components in these directories. Those belong in `app/components/` or inline in their route.

5. **`cn()` for all class merging.** Import from `@/lib/utils`. This wraps `clsx` + `tailwind-merge` to prevent class conflicts. External `className` prop always goes **last** so consumers can override base styles.
   ```tsx
   // CORRECT — external className last for override priority
   className={cn(
     "rounded-xl border",
     isActive && "bg-white/10",
     className  // consumer overrides always last
   )}

   // CORRECT — object syntax for multiple variants
   className={cn(
     "base-classes",
     { "variant-active": isActive, "variant-disabled": isDisabled },
     className
   )}

   // WRONG — template literal
   className={`rounded-xl border ${isActive ? "bg-white/10" : ""}`}

   // WRONG — raw clsx without twMerge
   className={clsx("rounded-xl border", isActive && "bg-white/10")}
   ```

6. **`React.forwardRef` + `displayName` on shared components.** Every component in `components/ui/` and `components/magicui/` must:
   - Use `React.forwardRef` for DOM ref forwarding
   - Set `ComponentName.displayName = "ComponentName"` for DevTools and error messages
   - Accept a `className` prop and merge it via `cn()`

   Canonical example: `components/magicui/shimmer-button.tsx`.

7. **Hydration safety via `isMounted` guard.** Client components that render browser-only content (scroll position, window dimensions, `document` references) must use this pattern:
   ```tsx
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);
   if (!isMounted) return null;
   ```
   Canonical example: `app/components/0-ScrollToTopButton.tsx`. This prevents React hydration mismatches between server and client renders.

8. **Path alias `@/` for all imports.** Configured in `tsconfig.json` as `@/* → ./*`. Never use relative imports that traverse more than one parent (`../../`). Use:
   ```tsx
   import { cn } from "@/lib/utils";
   import EventSelector from "@/components/ui/event-selector";
   import { queryChatbot } from "@/app/services/chatbot";
   ```

9. **Secrets and endpoints belong in environment variables.** Never hardcode API URLs, API keys, or service credentials in source code. Use `process.env.NEXT_PUBLIC_*` for values needed client-side, `process.env.*` for server-only values. Document every required variable in `.env.example`.

   Chatbot API URL and EmailJS credentials are now in `NEXT_PUBLIC_*` env vars (resolved Sprint 1).

10. **Images use `next/image`.** Always use the Next.js `<Image>` component — never raw `<img>`. Always provide meaningful `alt` text (not "image" or "logo"). Store assets in `/public/images/{category}/` following the existing structure:

    | Directory | Contents |
    |---|---|
    | `tech/` | Technology/tool logos |
    | `work_experience/` | Company logos |
    | `speakership/` | University and event logos |
    | `highlights/` | Event photographs |
    | `articles/` | Blog post and case study images |
    | `background/` | Background videos and images |
    | `menus/` | Navigation menu assets |

11. **Dark theme is the only theme.** The design system is: black background (`bg-black`), white text (`text-white`), blue/purple/pink gradient accents (`from-blue-400 via-purple-400 to-pink-400`). Transparency via opacity modifiers (`text-white/60`, `bg-gray-900/95`). Glassmorphism via `backdrop-blur-md` + `bg-white/10`.

    Do not introduce light theme CSS variables, `dark:` prefixed classes, or theme toggle components.

    **Layout conventions:**
    - Every page wrapper must include `pt-24` to clear the fixed header.
    - Standard page content wrapper: `container mx-auto px-4 py-12`.
    - Section spacing: `mb-16` between major sections, `mb-12` between subsections, `gap-8` between grid cards, `p-6`/`p-8` for card padding.
    - The animated `animate-ping` dot is the canonical status indicator (purple for activity, green for availability). Do not invent alternative indicator patterns.
    - Use `backdrop-blur` sparingly on mobile — it is a GPU performance cost, not a free effect.

12. **Deprecated code goes to `_archive/`.** When refactoring or replacing components, move the old version to the nearest `_archive/` directory (e.g., `app/components/_archive/`). Never silently delete working components. Archive first, purge in a separate cleanup commit.

## Code Style

TypeScript strict mode is enabled in `tsconfig.json`. Respect it.

- **No `any` types.** If truly unavoidable, annotate with `// eslint-disable-next-line @typescript-eslint/no-explicit-any` and add a comment explaining why.
- **Always `const`, only `let` when reassignment is required.** `prefer-const` is enforced by ESLint.
- **Prefix intentionally unused variables with `_`.** ESLint `no-unused-vars` uses `argsIgnorePattern: "^_"` — write `_event` not `event` for unused parameters.
- **`interface` for component props, `type` for unions and intersections.** This is not a preference — it's how the existing codebase works.
- **Default exports for pages and layouts** (`page.tsx`, `layout.tsx`) per Next.js convention. **Named exports for everything else** — utilities, services, shared components.
- **Import order** with blank lines between groups:
  1. React and Next.js (`react`, `next/*`)
  2. Third-party packages (`framer-motion`, `lucide-react`, etc.)
  3. Path-aliased project imports (`@/components/...`, `@/lib/...`)
  4. Relative imports (same directory only)
- **Tailwind class ordering** within `className`: layout → sizing → spacing → typography → colors → borders → effects → animations. When classes are conditional, use `cn()`.
- **Prefer `gap-*` on parents over margins on children.** Use `flex gap-4` instead of adding `mb-4` to each child. Gaps are cleaner, avoid last-child margin issues, and work with both flex and grid.
  ```tsx
  // CORRECT
  <div className="flex flex-col gap-4">
    <Card />
    <Card />
  </div>

  // WRONG — margin on children
  <div className="flex flex-col">
    <Card className="mb-4" />
    <Card className="mb-4" />
  </div>
  ```
- **Use the project's responsive utility classes** defined in `app/globals.css` before writing inline responsive chains:

  | Class | Expands to |
  |---|---|
  | `text-responsive-xs` | `text-xs sm:text-sm md:text-base` |
  | `text-responsive-sm` | `text-sm sm:text-base md:text-lg` |
  | `text-responsive-base` | `text-base sm:text-lg md:text-xl` |
  | `text-responsive-lg` | `text-lg sm:text-xl md:text-2xl` |
  | `heading-responsive-sm` | `text-xl sm:text-2xl md:text-3xl` |
  | `heading-responsive-md` | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` |
  | `heading-responsive-lg` | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` |
  | `p-responsive` | `p-2 sm:p-4 md:p-6 lg:p-8` |
  | `px-responsive` / `py-responsive` | Same pattern for padding axes |
  | `flex-col-mobile` | `flex-col sm:flex-row` |

  Use these instead of writing the same responsive breakpoint chains manually. If none fits, write explicit breakpoints.
- **Use responsive prefixes for layout direction switching.** Mobile-first vertical to horizontal:
  ```tsx
  // Mobile: stacked, Desktop: side-by-side
  <div className="flex flex-col lg:flex-row gap-4">
    <main className="grow">...</main>
    <aside className="shrink-0 lg:w-80">...</aside>
  </div>
  ```
- **Scale text responsively at breakpoints**, not with `clamp()` or viewport units. Use the project's `heading-responsive-*` / `text-responsive-*` classes, or explicit breakpoints when custom sizing is needed:
  ```tsx
  <h1 className="text-2xl md:text-3xl lg:text-4xl">
  ```
- **CSS modules** (`*.module.css`) are reserved for component-specific keyframe animations that Tailwind cannot express. Located in `app/styles/components/`. Include `will-change`, `transform: translateZ(0)`, and `@media (prefers-reduced-motion)` for animated elements.
- **Animation library selection:**
  - Simple transitions (hover, opacity, scale) → Tailwind classes or CSS transitions
  - Complex multi-step sequences, staggered animations, layout animations → Framer Motion
  - Particle effects → tsparticles (already configured)
  - 3D scenes → Spline via `@/components/ui/splite.tsx`

  Do not introduce new animation libraries. The project already has framer-motion, react-spring, and tsparticles.

## Anti-Patterns

These are the mistakes this project guards against. Enforce them during code review and generation.

- **Never hardcode API endpoints or credentials.** Use environment variables. See Architecture Rule 9 for known violations.
- **Never manipulate the DOM directly.** No `document.createElement`, `document.getElementById`, `innerHTML`, or `querySelector` in React components. Use refs and state. The contact form (`app/resources/contact-form/contact-form.tsx`) has a known violation — do not copy that pattern.
- **Never install duplicate-purpose packages.** Before running `npm install`, check if an existing dependency covers the use case. This project has 47 production dependencies. Every new one needs justification.
- **Never put business logic in `page.tsx`.** Page files compose components and set metadata. Data fetching, transformation, and API calls belong in `app/services/` or utility modules.
- **Never use `console.log` in committed code.** `console.error` is acceptable in `catch` blocks. For development debugging, use `console.log` and remove before committing.
- **Never skip `alt` text on images.** Every `<Image>` component must have a descriptive `alt` attribute. "image", "logo", "photo", or empty string are not acceptable.
- **Never use inline `style={}` for Tailwind-achievable properties.** Inline styles are only acceptable for CSS custom properties (`--shimmer-width`), truly dynamic computed values, or properties Tailwind cannot express.
- **Never commit `.env.local` or secrets.** The `.gitignore` blocks env files — do not override it.
- **Never add `<style>` tags or global CSS rules.** All global styles live in `app/globals.css`. Component styles use Tailwind or CSS modules.
- **Never create components that only work at specific viewport sizes.** Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) to handle all breakpoints.
- **Never use arbitrary hex colors (`bg-[#hex]`).** Use the project's design tokens defined in `globals.css` and `tailwind.config.ts`. The color system uses HSL CSS variables (`hsl(var(--primary))`, `hsl(var(--muted))`). For accent colors, use Tailwind's built-in palette (`blue-400`, `purple-400`, `pink-400`) that match the established gradient scheme.
- **Never duplicate responsive utility classes.** Check `app/globals.css` for existing `text-responsive-*`, `heading-responsive-*`, `p-responsive`, `px-responsive`, `py-responsive` classes before writing manual responsive breakpoint chains.
- **Never use unescaped apostrophes in JSX text.** Use `&apos;` or move text to a JS string variable. `react/no-unescaped-entities` is error-level and will break the build.

## Testing & Linting

### Current State

There are no test files in this project. No test framework is configured. This is acknowledged debt.

### Linting

ESLint 9 is configured with `next/core-web-vitals` and `next/typescript` rule sets (`eslint.config.mjs`, flat config). Run `npm run lint` before every commit.

**Policy:** Zero warnings. If ESLint flags something, fix it. Do not add `eslint-disable` comments without a written justification.

### Build Gate

`npm run build` is the primary quality gate. It catches:
- TypeScript compilation errors
- Missing imports and unused variables
- Invalid MDX syntax
- Next.js-specific issues (invalid metadata, missing required exports)

**Policy:** If `npm run build` fails, the code is not ready. Fix the errors before proceeding.

### Future Testing Direction

When tests are introduced, the following applies:
- **Framework:** Vitest + React Testing Library (Next.js App Router compatible)
- **Location:** `__tests__/` at project root, mirroring `app/` structure
- **Coverage:** Components with user interaction, service functions, utility functions
- **Mocking:** Mock all external API calls (chatbot, EmailJS). Never hit real endpoints in tests.

### Accessibility & Performance

After UI changes, verify:
- Lighthouse Performance score ≥ 90
- Lighthouse Accessibility score ≥ 90
- All images have `alt` attributes
- Interactive elements are keyboard-navigable
- `@media (prefers-reduced-motion)` is respected for animations

## Content & MDX Conventions

### Blog Posts

- **Location:** `app/resources/blog/`
- **Filename:** `kebab-case.mdx` (e.g., `introduction-to-data-analysis.mdx`)
- **Dynamic route:** `app/resources/blog/[slug]/page.tsx` renders MDX by slug
- **Required frontmatter:**
  ```yaml
  ---
  title: 'Human-readable title'
  date: 'YYYY-MM-DD'
  author: 'Author Name'
  ---
  ```
- **Images in posts:** Store in `/public/images/articles/` with descriptive kebab-case names. Reference with relative paths in MDX.
- **Markdown flavor:** GitHub Flavored Markdown via `remark-gfm`. Supports tables, task lists, strikethrough, and autolinks.

### Static Content

Large content arrays (career events, solutions, tech stacks) currently live inline in components. When extracting to data files, place them in `app/data/` as TypeScript files with typed exports:
```tsx
// app/data/career-events.ts
export interface CareerEvent { title: string; date: string; description: string; }
export const careerEvents: CareerEvent[] = [ ... ];
```

## Documentation File Convention

When Claude creates documentation or markdown files for this project:

**Format:** `{NNN}-{topic-kebab-case}.md` — 3-digit zero-padded prefix, chronological within each folder.

| Location | Purpose | Example |
|---|---|---|
| `.claude/sprints/` | Sprint management — plans, progress, known issues | `sprint-1_2026-03-01/001-dependency-cleanup.md` |
| `.claude/docs/` | Claude-generated analysis, notes, decisions | `001-chatbot-refactor-plan.md` |
| `docs/guides/` | How-to walkthroughs for developers | `001-local-development-setup.md` |
| `docs/references/` | Architecture and API documentation | `001-component-architecture.md` |
| `docs/adrs/` | Architecture Decision Records | `001-dark-theme-only.md` |

**Writing rules:**
- Start every document with a one-line summary (no heading, just a sentence).
- Follow with `## Overview` then content sections.
- Tone: technical, direct. No filler ("In this document we will explore...").
- No orphan docs — every new document must be referenced from an existing one or from this CLAUDE.md.
- Keep documents under 200 lines. If longer, split into multiple files.

## Git & Deployment

- **Platform:** Vercel, connected to GitHub. Pushing to `main` triggers a production deployment.
- **Commit messages:** Use conventional commits going forward:
  ```
  feat: add speaking engagement section
  fix: resolve hydration mismatch in ScrollToTopButton
  docs: update CLAUDE.md with testing conventions
  refactor: extract career data to separate module
  chore: update dependencies
  style: reformat tailwind classes in Header
  ```
  The existing commit history does not follow this convention — that is legacy. All new commits must.
- **Never force-push to `main`.** This is a production branch.
- **Never commit generated files:** `.next/`, `node_modules/`, `*.tsbuildinfo`, coverage reports.
- **Branch strategy:** Feature branches off `main`, merged via PR. Direct commits to `main` only for trivial fixes (typos, single-line config changes).

## Known Technical Debt

Track these. Do not add to them. Fix them when touching adjacent code.

| Issue | Location | Severity |
|---|---|---|
| No test framework | Project-wide | Medium |
| No CI/CD pipeline | `.github/workflows/` missing | Medium |
| No `error.tsx` / `not-found.tsx` | App Router error boundaries missing | Low |
| Blog data hardcoded in components | `app/resources/blog/page.tsx` | Low |

**Resolved in Sprint 1 (2026-03-01):** Hardcoded chatbot API endpoint (→ env var), hardcoded EmailJS credentials (→ env vars), DOM manipulation in contact-form (→ shared ParticleEffect), missing sitemap/robots (→ `app/sitemap.ts`, `app/robots.ts`), missing `generateStaticParams` (→ added), incomplete `.env.example` (→ updated).
