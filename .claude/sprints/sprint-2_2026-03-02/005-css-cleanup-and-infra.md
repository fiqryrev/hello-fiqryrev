Phase 4 plan for Sprint 2: CSS deduplication, error boundaries, and security headers.

## Overview

`globals.css` has duplicate `:root` blocks, conflicting `@layer base` body rules, a dead `.dark` class, a redundant `.container` override, and a particle class naming collision with `app/styles/particles.css`. The App Router has zero `error.tsx` or `not-found.tsx` files. Security headers are incomplete — no CSP, no HSTS, no Referrer-Policy, no Permissions-Policy. The `next/image` remote pattern is a wildcard (`**`).

## Tasks

### 4.1 — Remove duplicate `:root` block

**File:** `app/globals.css`

Delete lines 5–8 (the top-level `:root` with raw hex `#000000`, `#ffffff`). The `@layer base :root` block at lines 59–96 already defines these using HSL values and takes precedence.

### 4.2 — Merge duplicate `@layer base` blocks

**File:** `app/globals.css`

Two `@layer base` blocks exist (lines 118–125 and lines 278–285). Both define `* { @apply border-border; }` and a `body` rule. Merge into one block at lines 118–125:

```css
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-black text-white;
  }
}
```

Delete the second block (lines 278–285) entirely.

### 4.3 — Remove dead `.dark` class

**File:** `app/globals.css`

Delete the `.dark { ... }` block at lines 97–109. The site has no theme toggle — `.dark` is never applied. The variables inside are identical to `:root`, making it a no-op duplicate.

### 4.4 — Remove redundant `.container` override

**File:** `app/globals.css`

Delete the custom `.container` class at lines 167–198. It manually mirrors Tailwind's default container breakpoints (640/768/1024/1280). The project uses `container mx-auto px-4` as its standard wrapper — Tailwind's built-in `container` utility is sufficient.

Verify no component relies on custom container behavior by grepping for `.container` usage beyond Tailwind's utility class.

### 4.5 — Resolve particle class naming collision

**Files:** `app/globals.css` (lines 287–322), `app/styles/particles.css`

Both files define global `.particle-container` and `.particle` classes with different properties. Resolution options:

**Option A (recommended):** Delete `app/styles/particles.css` if it is not imported anywhere, or if its import can be replaced by the globals.css version. Check all imports first.

**Option B:** If both are actively used, convert `app/styles/particles.css` to a CSS module (`particles.module.css`) and update its imports.

Also consolidate the three particle keyframe animations (`particleFloat` in globals, `moveParticle` in particles.css, `particleMove` in 5-AIBuiltSection.module.css) if they serve the same visual purpose.

### 4.6 — Create root error boundary

**New file:** `app/error.tsx`

Client component (`"use client"` required by Next.js for error boundaries). Renders a dark-themed error page matching the design system:

```tsx
"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="heading-responsive-sm font-bold text-white mb-4">
          Something went wrong
        </h2>
        <p className="text-white/60 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
```

### 4.7 — Create root not-found page

**New file:** `app/not-found.tsx`

Server component. Renders a dark-themed 404 page:

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          404
        </h2>
        <p className="heading-responsive-sm font-bold text-white mb-4">
          Page not found
        </p>
        <p className="text-white/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
```

### 4.8 — Add nested route error boundaries

**New files:**
- `app/resources/error.tsx` — same pattern as root, with contextual message
- `app/solutions/error.tsx` — same pattern
- `app/about/error.tsx` — same pattern

Keep them lightweight — reuse the same error UI structure. Each is a `"use client"` component.

### 4.9 — Add missing security headers

**File:** `next.config.mjs`

Add to the existing `headers()` config:

| Header | Value | Purpose |
|---|---|---|
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limit referrer data leaks to third parties |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Enforce HTTPS on repeat visits (2 year max-age) |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Restrict unnecessary browser feature access |
| `Content-Security-Policy` | See below | XSS protection |

**CSP policy (starter, permissive enough for Framer Motion + Spline + external images):**

```
default-src 'self';
script-src 'self' 'unsafe-eval' 'unsafe-inline' https://prod.spline.design;
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob: https:;
font-src 'self';
connect-src 'self' https://prod.spline.design https://*.emailjs.com;
frame-src https://prod.spline.design;
media-src 'self';
```

Note: `'unsafe-inline'` for styles is required by Tailwind's runtime and Framer Motion's inline transforms. `'unsafe-eval'` may be needed by Spline runtime — test and tighten if possible.

### 4.10 — Restrict `next/image` remote pattern

**File:** `next.config.mjs`

Replace the wildcard `hostname: '**'` in `images.remotePatterns` with specific hostnames that the site actually loads images from. Audit current external image sources first, then whitelist only those.

## Files Changed

| Action | File |
|---|---|
| Modify | `app/globals.css` — remove duplicates, dead code, particle collision |
| Modify or Delete | `app/styles/particles.css` — resolve collision |
| Create | `app/error.tsx` |
| Create | `app/not-found.tsx` |
| Create | `app/resources/error.tsx` |
| Create | `app/solutions/error.tsx` |
| Create | `app/about/error.tsx` |
| Modify | `next.config.mjs` — security headers + image pattern restriction |

## Verification

1. `npm run lint` — zero warnings
2. `npm run build` — must pass
3. Visit a non-existent route (e.g., `/nonexistent`) — should see custom 404 page
4. Check response headers in browser DevTools (Network tab) — verify all security headers present
5. Verify no visual regressions from CSS cleanup by checking homepage and key pages

## Commit

```
fix: deduplicate CSS, add error boundaries, and strengthen security headers
```
