# Phase 4 — Code Quality & Architecture

Extract hardcoded data to modules, deduplicate components, fix React anti-patterns, strengthen types, remove dead code.

## Tasks

### 4.1 Extract hardcoded data arrays to `app/data/`

Multiple components embed large data arrays inline. Extract each to a typed module.

**Create `app/data/companies.ts`:**
```typescript
export interface Company {
  name: string;
  logo: string;
  role: string;
  period: string;
}

export const companies: Company[] = [
  // Extract from app/components/3-WorkExperience.tsx
];
```

**Create `app/data/tech-stack.ts`:**
```typescript
export interface TechItem {
  name: string;
  logo: string;
  category: string;
}

export const techStack: TechItem[] = [
  // Extract from app/components/3-WorkExperience.tsx
];
```

**Create `app/data/navigation.ts`:**
```typescript
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  // Extract from app/components/0-Header.tsx
];
```

**Create `app/data/social-links.ts`:**
```typescript
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  // Extract from app/components/0-Footer.tsx
];
```

**Steps:**
1. Read each source component to identify the exact data shape
2. Create the typed module in `app/data/`
3. Replace the inline array in the component with an import
4. Run `npm run build` after each extraction to confirm nothing breaks

---

### 4.2 Create shared `ParticleEffect` component

**Problem:** Particle rendering logic is duplicated in `app/about/page.tsx` and `app/resources/contact-form/contact-form.tsx`.

**Create `app/components/shared/ParticleEffect.tsx`:**
```tsx
'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

interface ParticleEffectProps {
  className?: string;
  particleCount?: number;
  color?: string;
}

export function ParticleEffect({
  className,
  particleCount = 50,
  color = '#ffffff',
}: ParticleEffectProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className={className}
      init={particlesInit}
      options={{
        particles: {
          number: { value: particleCount },
          color: { value: color },
          // ... merge shared config from both files
        },
      }}
    />
  );
}
```

**Then:**
1. Read both source files to identify config differences
2. Parameterize the differences as props
3. Replace both usages with `<ParticleEffect />` import
4. Verify both pages still render particles correctly

---

### 4.3 Fix index-based React keys

Index keys cause React to incorrectly reuse DOM nodes when lists reorder or filter.

**File: `app/components/0-Header.tsx` (~lines 90, 115)**

Find patterns like:
```tsx
{items.map((item, index) => (
  <li key={index}>
```

Replace with stable identifiers:
```tsx
{items.map((item) => (
  <li key={item.href || item.label}>
```

**File: `app/resources/contact-form/contact-form.tsx` (~line 222)**

Find the index key and replace with a stable identifier from the data (e.g., `item.id`, `item.name`, or a unique field).

---

### 4.4 Fix weak TypeScript types in chatbot service

**File:** `app/services/chatbot.ts`

**Current problem:** Permissive index signature allows any property access without type checking.

**Find the type with the index signature and replace with explicit fields:**
```typescript
interface ChatbotResponse {
  text: string;
  // Add other known fields from the actual API response
}
```

Remove the `[key: string]: unknown` or similar permissive pattern. If the API response shape is truly unknown, use a runtime validation approach:
```typescript
function parseChatbotResponse(data: unknown): ChatbotResponse {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Invalid chatbot response');
  }
  // validate expected fields
  return data as ChatbotResponse;
}
```

---

### 4.5 Remove `console.log` and DOM manipulation in about page

**File:** `app/about/page.tsx` (lines 14-24)

This section uses `document.createElement` and direct DOM manipulation — an anti-pattern per CLAUDE.md.

**Action:** Delete the DOM manipulation block. If it creates visible UI elements, replace with React state + JSX rendering. If it's debug logging, just delete it.

---

### 4.6 Clean up `_archive/` directory

**Directory:** `app/components/_archive/`

**Contents:**
- `ErrorBoundary.tsx` — may be useful for Phase 7 (`app/error.tsx`)
- `HeroSection.tsx` — replaced by `1-HeroSectionNew.tsx`
- `ProjectsSection.tsx` — replaced by current sections

**Action:**
1. Check if `ErrorBoundary.tsx` can be repurposed for the Phase 7 error boundary. If yes, note it in `007-css-cleanup-and-infra.md` and keep.
2. Delete `HeroSection.tsx` and `ProjectsSection.tsx` — they are fully superseded.
3. If `_archive/` is empty after cleanup, delete the directory.

---

### 4.7 Explore solution page template refactor

**Problem:** Six solution subpages share nearly identical structure (500-628 lines each):
- `app/solutions/data-analytics/page.tsx`
- `app/solutions/data-engineering/page.tsx`
- `app/solutions/data-science/page.tsx`
- `app/solutions/gen-ai/page.tsx`
- `app/solutions/mlops/page.tsx`
- `app/solutions/web-development/page.tsx`

**Scope:** This is an **exploration task** — assess feasibility, do not refactor in this phase.

**Steps:**
1. Read 2-3 solution pages and identify the shared structural pattern
2. List the differences (content arrays, colors, icons, section ordering)
3. Draft a `SolutionPageTemplate` interface with all parameterized fields
4. Document findings in a comment block at the top of one page or in a `.claude/docs/` note
5. If the pattern is clean (same sections in same order, only content differs), mark as "ready to refactor" for a future phase. If pages have structural divergences, note the exceptions.

**Do NOT refactor in this phase.** Just analyze and document.

---

### 4.8 Fix broken Footer link (if not done in Phase 1)

**File:** `app/components/0-Footer.tsx`

**Check:** If Phase 1 already fixed `/resources/blogs` → `/resources/blog`, skip this task. Otherwise apply the fix.

---

## Files Created/Modified Summary

| Action | File |
|---|---|
| CREATE | `app/data/companies.ts` |
| CREATE | `app/data/tech-stack.ts` |
| CREATE | `app/data/navigation.ts` |
| CREATE | `app/data/social-links.ts` |
| CREATE | `app/components/shared/ParticleEffect.tsx` |
| MODIFY | `app/components/0-Header.tsx` — import nav data, fix index keys |
| MODIFY | `app/components/0-Footer.tsx` — import social links, fix blog link |
| MODIFY | `app/components/3-WorkExperience.tsx` — import companies + tech stack |
| MODIFY | `app/components/2-CareerHighlights.tsx` — import career data if applicable |
| MODIFY | `app/about/page.tsx` — use shared ParticleEffect, remove DOM manipulation |
| MODIFY | `app/resources/contact-form/contact-form.tsx` — use shared ParticleEffect, fix index key |
| MODIFY | `app/services/chatbot.ts` — strengthen types |
| DELETE | `app/components/_archive/HeroSection.tsx` |
| DELETE | `app/components/_archive/ProjectsSection.tsx` |

## Verification Checklist

- [ ] `npm run lint` — zero warnings
- [ ] `npm run build` — succeeds
- [ ] `npm run dev` — all pages render correctly
- [ ] No `console.log` in committed code (except `console.error` in catch blocks)
- [ ] No index-based React keys (`key={index}` or `key={i}`)
- [ ] No `document.createElement` or `document.getElementById` in React components
- [ ] Data files in `app/data/` have typed exports
- [ ] Particle effects work on About page and Contact Form page
- [ ] Solution page analysis documented
- [ ] `_archive/` cleaned up
