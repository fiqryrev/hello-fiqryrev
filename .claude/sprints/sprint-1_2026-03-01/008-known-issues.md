# Known Issues — Bugs to Patch

Tracked issues discovered during development/testing on localhost:3000.

## Status Legend

| Label | Meaning |
|---|---|
| OPEN | Confirmed, not yet fixed |
| INVESTIGATING | Root cause unclear |
| FIXED | Patched, verified |
| WONTFIX | Accepted, not worth fixing |

---

### KI-001: Hydration mismatch in WorkExperience Image components

**Status:** FIXED
**Severity:** Medium
**Discovered:** Phase 2 (Image & Asset Optimization)
**Resolved:** 2026-03-01
**Component:** `app/components/3-WorkExperience.tsx`

**Symptoms:**
Console error: "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties."

**Root cause:**
Turbopack dev server module cache was stale after Phase 2 file edits. SSR output used cached old module while client bundle had updated code. Not a real bug — resolved by restarting dev server.

**Resolution:**
Confirmed no longer reproducing after dev server restart. Production build (`npm run build`) passes clean with no hydration issues.

---

### KI-002: ChunkLoadError for splite.tsx on initial dev load

**Status:** WONTFIX
**Severity:** Low
**Discovered:** Post-Phase 5 (manual testing)
**Component:** `components/ui/splite.tsx`

**Symptoms:**
```
ChunkLoadError: Loading chunk _app-pages-browser_components_ui_splite_tsx failed.
(error: http://localhost:3000/_next/static/chunks/_app-pages-browser_components_ui_splite_tsx.js)
```

**Root cause:**
Turbopack HMR/chunk caching issue in dev mode. Chunk stale after multiple file changes in a session.

**Resolution:**
Resolves on page refresh. Dev-only issue — does not reproduce in production build. Not worth fixing as this is a Turbopack dev server transient behavior.

---

## Adding New Issues

Use this template:

```markdown
### KI-NNN: Short description

**Status:** OPEN | INVESTIGATING | FIXED | WONTFIX
**Severity:** Critical | High | Medium | Low
**Discovered:** Phase N / manual testing / production
**Component:** `path/to/file.tsx`

**Symptoms:**
What the user sees or what the console shows.

**Likely cause:**
Best understanding of root cause.

**Proposed fix:**
Steps to resolve.

**Verification:**
How to confirm it's fixed.
```
