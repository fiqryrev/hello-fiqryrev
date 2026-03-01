Phase 5 plan for Sprint 2: extract shared solution page sub-components.

## Overview

The 6 solution pages (`data-ai-product`, `data-platform-engineering`, `bi-analytics`, `data-governance-security`, `search-retrieval`, `web-development`) share identical header, metrics grid, separator, and CTA patterns with only text/data differences. Each page duplicates ~80 lines of identical markup. This phase extracts 4 server components to `app/solutions/_components/`.

Prior analysis: `.claude/docs/001-solution-page-template-analysis.md`.

## Tasks

### 5.1 — Create `SolutionHeader` component

**New file:** `app/solutions/_components/SolutionHeader.tsx`

Server component (no `"use client"`). Renders the status badge + gradient heading + subtitle.

```typescript
interface SolutionHeaderProps {
  badgeText: string;
  title: string;
  subtitle: string;
}
```

Extracts the exact pattern found in all 3 audited pages: `animate-ping` purple dot badge, `heading-responsive-lg` gradient `<h1>`, subtitle paragraph. No interactivity.

### 5.2 — Create `MetricsGrid` component

**New file:** `app/solutions/_components/MetricsGrid.tsx`

Server component. Renders a 4-column stats grid.

```typescript
import type { LucideIcon } from "lucide-react";

interface MetricItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface MetricsGridProps {
  items: MetricItem[];
}
```

Uses the glassmorphism card pattern: `bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl`. Grid layout: `grid-cols-1 md:grid-cols-4 gap-6`.

Not all solution pages have metrics — only render when provided.

### 5.3 — Create `GradientSeparator` component

**New file:** `app/solutions/_components/GradientSeparator.tsx`

Server component. Zero props. Renders the purple diamond separator line found verbatim in all solution pages:

```tsx
<div className="relative my-16">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-purple-400/20" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-black px-4">
      <span className="text-purple-400">&#10022;</span>
    </span>
  </div>
</div>
```

### 5.4 — Create `SolutionCTA` component

**New file:** `app/solutions/_components/SolutionCTA.tsx`

Server component. Renders the call-to-action block with badge, headline, body text, and two buttons.

```typescript
interface SolutionCTAProps {
  badgeText: string;
  headline: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}
```

Uses `next/link` for both buttons (fixing the raw `<a>` tag violation in `bi-analytics/page.tsx`). Primary button uses gradient style, secondary uses outline style.

### 5.5 — Create barrel export

**New file:** `app/solutions/_components/index.ts`

```typescript
export { SolutionHeader } from "./SolutionHeader";
export { MetricsGrid } from "./MetricsGrid";
export { GradientSeparator } from "./GradientSeparator";
export { SolutionCTA } from "./SolutionCTA";
```

### 5.6 — Refactor solution pages to use shared components

Update all 6 solution pages to import from `@/app/solutions/_components` and replace inline markup:

| Page | Components to use |
|---|---|
| `data-ai-product/page.tsx` | SolutionHeader, MetricsGrid, GradientSeparator, SolutionCTA |
| `data-platform-engineering/page.tsx` | SolutionHeader, MetricsGrid, GradientSeparator, SolutionCTA |
| `bi-analytics/page.tsx` | SolutionHeader, GradientSeparator, SolutionCTA |
| `data-governance-security/page.tsx` | SolutionHeader, GradientSeparator, SolutionCTA |
| `search-retrieval/page.tsx` | SolutionHeader, GradientSeparator, SolutionCTA |
| `web-development/page.tsx` | SolutionHeader, GradientSeparator, SolutionCTA |

Each page keeps its unique content sections (card grids, filter UI, tech logo grids, process steps) inline.

### 5.7 — Remove unnecessary `"use client"` from `data-platform-engineering/page.tsx`

This page has `"use client"` but uses no hooks, state, or browser APIs. Remove the directive to make it a server component per Architecture Rule 2.

## Files Changed

| Action | File |
|---|---|
| Create | `app/solutions/_components/SolutionHeader.tsx` |
| Create | `app/solutions/_components/MetricsGrid.tsx` |
| Create | `app/solutions/_components/GradientSeparator.tsx` |
| Create | `app/solutions/_components/SolutionCTA.tsx` |
| Create | `app/solutions/_components/index.ts` |
| Modify | `app/solutions/data-ai-product/page.tsx` |
| Modify | `app/solutions/data-platform-engineering/page.tsx` |
| Modify | `app/solutions/bi-analytics/page.tsx` |
| Modify | `app/solutions/data-governance-security/page.tsx` |
| Modify | `app/solutions/search-retrieval/page.tsx` |
| Modify | `app/solutions/web-development/page.tsx` |

## Verification

1. `npm run lint` — zero warnings
2. `npm run build` — must pass
3. Visually compare each solution page before/after — must be pixel-identical
4. Check that no page lost its unique content sections during refactor

## Commit

```
refactor: extract shared solution page components (SolutionHeader, MetricsGrid, GradientSeparator, SolutionCTA)
```
