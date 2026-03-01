# Phase 7 — CSS Cleanup & Infrastructure

Fix duplicate CSS layers, audit unused utilities, add error boundaries, 404 page, loading states, security headers, remove redundant meta tags, add a11y linting.

## Tasks

### 7.1 Fix duplicate `@layer base` declarations

**File:** `app/globals.css`

**Problem:** Two separate `@layer base` blocks exist — one at lines 58-116 and another at lines 278-285. Tailwind merges them, but it's confusing and risks specificity conflicts.

**Action:**
1. Read both blocks
2. Merge all rules into a single `@layer base {}` block
3. Deduplicate any rules that appear in both blocks
4. Place the merged block in a logical position (after `@tailwind` directives)

---

### 7.2 Audit and remove unused responsive utility classes

**File:** `app/globals.css`

The file defines custom responsive utilities. Before removing any, verify actual usage:

```bash
# For each class, grep the entire codebase
rg "text-responsive-xs" --type tsx --type jsx
rg "text-responsive-sm" ...
rg "text-responsive-base" ...
rg "heading-responsive-sm" ...
rg "p-responsive" ...
rg "px-responsive" ...
rg "py-responsive" ...
rg "flex-col-mobile" ...
```

**Decision matrix:**

| Class | Used? | Action |
|---|---|---|
| `text-responsive-*` | Check | Keep if used, remove if zero matches |
| `heading-responsive-*` | Check | Keep if used, remove if zero matches |
| `p-responsive` | Check | Keep if used, remove if zero matches |
| `px-responsive` / `py-responsive` | Check | Keep if used, remove if zero matches |
| `flex-col-mobile` | Check | Keep if used, remove if zero matches |

**Important:** Only remove classes with **zero usage**. If a class is used even once, keep it. Update CLAUDE.md if any documented classes are removed.

---

### 7.3 Audit `app/styles/particles.css`

**File:** `app/styles/particles.css` (if it exists)

**Check:** Is this CSS imported anywhere? Search for:
```bash
rg "particles.css" --type ts --type tsx
```

**If unused:** Delete the file.
**If used:** Keep it but check if its styles can be absorbed into Tailwind classes or the component's CSS module.

---

### 7.4 Create root error boundary

**New file:** `app/error.tsx`

```tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
      <p className="mb-8 text-white/60">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
```

**Note:** Check `app/components/_archive/ErrorBoundary.tsx` from Phase 4 — it may contain useful patterns or messaging to incorporate.

---

### 7.5 Create root 404 page

**New file:** `app/not-found.tsx`

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="mb-2 text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="mb-4 text-2xl font-semibold">Page not found</h2>
      <p className="mb-8 text-white/60">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
```

---

### 7.6 Create blog loading skeleton

**New file:** `app/resources/blog/[slug]/loading.tsx`

```tsx
export default function BlogPostLoading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Title skeleton */}
      <div className="mb-4 h-10 w-3/4 animate-pulse rounded bg-white/10" />
      {/* Date skeleton */}
      <div className="mb-8 h-4 w-1/4 animate-pulse rounded bg-white/10" />
      {/* Content skeleton lines */}
      <div className="space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-white/10" />
        <div className="h-4 w-full animate-pulse rounded bg-white/10" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
        <div className="h-4 w-full animate-pulse rounded bg-white/10" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-white/10" />
      </div>
    </div>
  );
}
```

---

### 7.7 Add security headers in `next.config.mjs`

**File:** `next.config.mjs`

Add a `headers()` function:

```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ];
},
```

**Content-Security-Policy:** Start with a report-only policy to avoid breaking the site. Add once other phases are complete and all external resources are catalogued:
```javascript
{
  key: 'Content-Security-Policy-Report-Only',
  value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
},
```

**Note:** The `connect-src` directive must include the chatbot API domain once it's moved to an env var (Phase 1). Adjust after deployment testing.

---

### 7.8 Remove redundant `<meta name="viewport">` tag

**File:** `app/layout.tsx`

**Problem:** Next.js automatically adds the viewport meta tag. A manual one in the layout creates a duplicate.

**Action:** Search for `<meta name="viewport"` in `app/layout.tsx`. If found, delete it. Next.js handles this via the `viewport` export:

```typescript
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};
```

If a custom `viewport` export already exists, keep it and just remove the `<meta>` tag. If neither exists, Next.js defaults are fine — no action needed.

---

### 7.9 Add `eslint-plugin-jsx-a11y` to ESLint config

**Install:**
```bash
npm install -D eslint-plugin-jsx-a11y
```

**File:** `.eslintrc.json`

**Add to extends array:**
```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "plugin:jsx-a11y/recommended"
  ]
}
```

**Post-install:** Run `npm run lint` and fix any new warnings. Common issues this catches:
- Missing `alt` on images
- Missing `htmlFor` on labels
- Click handlers without keyboard equivalents
- Missing ARIA attributes on interactive elements

Fix all warnings before proceeding.

---

## Files Created/Modified Summary

| Action | File |
|---|---|
| MODIFY | `app/globals.css` — merge @layer base, remove unused utilities |
| DELETE | `app/styles/particles.css` — if unused |
| CREATE | `app/error.tsx` — root error boundary |
| CREATE | `app/not-found.tsx` — root 404 page |
| CREATE | `app/resources/blog/[slug]/loading.tsx` — blog skeleton |
| MODIFY | `next.config.mjs` — security headers |
| MODIFY | `app/layout.tsx` — remove redundant viewport meta |
| MODIFY | `.eslintrc.json` — add jsx-a11y plugin |
| INSTALL | `eslint-plugin-jsx-a11y` (devDependency) |

## Verification Checklist

- [ ] `npm run lint` — zero warnings (including new jsx-a11y rules)
- [ ] `npm run build` — succeeds
- [ ] Navigate to `/nonexistent-page` — custom 404 renders
- [ ] Trigger an error in dev — error boundary renders with "Try again" button
- [ ] Navigate to a blog post — loading skeleton flashes briefly
- [ ] `curl -I localhost:3000` — security headers present in response
- [ ] No duplicate `<meta name="viewport">` in page source
- [ ] `app/globals.css` has exactly one `@layer base` block
- [ ] No unused CSS classes remain (verified by grep)
- [ ] DevTools console: no CSP violations in report-only mode
