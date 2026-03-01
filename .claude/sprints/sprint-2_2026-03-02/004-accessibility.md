Phase 3 plan for Sprint 2: ARIA labels, keyboard navigation, focus management, and reduced-motion guards.

## Overview

The site has zero skip links, no global focus ring, non-focusable interactive elements (`<div onClick>`), modals without `role="dialog"`, form labels not associated with inputs, and animations that ignore `prefers-reduced-motion`. This phase brings the site to WCAG 2.1 Level AA compliance for the core interactive patterns.

## Tasks

### 3.1 — Skip navigation link

**File:** `app/layout.tsx`

Add a visually-hidden skip link before `<Header />` and an `id="main-content"` on the `<main>` element:

```tsx
<body>
  <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg">
    Skip to main content
  </a>
  <Header />
  <main id="main-content">
    {children}
  </main>
  ...
</body>
```

WCAG SC 2.4.1 — bypass blocks.

### 3.2 — Global focus ring

**File:** `app/globals.css`

Add a visible focus indicator at the base layer. Tailwind reset removes browser outlines, so we need to restore them:

```css
@layer base {
  :focus-visible {
    @apply outline-2 outline-offset-2 outline-purple-400;
  }
}
```

This gives every focusable element a purple ring on keyboard focus without affecting mouse clicks. WCAG SC 2.4.7.

### 3.3 — Header ARIA improvements

**File:** `app/components/0-Header.tsx`

| Element | Line(s) | Fix |
|---|---|---|
| `<nav>` element | ~153 | Add `aria-label="Main navigation"` |
| Mobile menu toggle button | ~164 | Add `aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}`, `aria-expanded={isMobileMenuOpen}`, `aria-controls="mobile-menu"` |
| Mobile menu panel | — | Add `id="mobile-menu"` |
| Desktop Solutions dropdown button | ~179 | Add `aria-expanded={activeSubmenu === 'solutions'}`, `aria-haspopup="true"` |
| Desktop Resources dropdown button | ~193 | Add `aria-expanded={activeSubmenu === 'resources'}`, `aria-haspopup="true"` |
| Mobile Solutions toggle | ~227 | Add `aria-expanded={mobileSubmenu === 'solutions'}` |
| Mobile Resources toggle | ~231 | Add `aria-expanded={mobileSubmenu === 'resources'}` |
| Download CV link | ~209 | Add `aria-label="Download CV (opens in new tab)"` |
| Dropdown menu containers | — | Add `role="menu"` on submenu wrappers, `role="menuitem"` on items |

Also add `onClick` handlers to the desktop dropdown buttons so keyboard users (Enter/Space) can toggle them, not just `onMouseEnter`.

### 3.4 — Footer ARIA improvements

**File:** `app/components/0-Footer.tsx`

| Element | Line(s) | Fix |
|---|---|---|
| Social icon links (GitHub, LinkedIn, Instagram, email) | ~15–27 | Add `aria-label` to each: `"GitHub profile"`, `"LinkedIn profile"`, `"Instagram profile"`, `"Send email"` |
| Solutions link list | ~31–50 | Wrap in `<nav aria-label="Footer solutions">` |
| Resources link list | ~51–73 | Wrap in `<nav aria-label="Footer resources">` |

### 3.5 — ScrollToTopButton ARIA

**File:** `app/components/0-ScrollToTopButton.tsx`

| Element | Line(s) | Fix |
|---|---|---|
| Progress ring SVG | ~67 | Add `aria-hidden="true"` |
| Inner arrow SVG | ~111 | Add `aria-hidden="true"` |

Already has `aria-label="Scroll to top"` — no change needed there.

### 3.6 — WorkExperience modal and tile accessibility

**File:** `app/components/3-WorkExperience.tsx` (will be `4-WorkExperience.tsx` after Phase 2 rename)

**Modals (CompanyPopup, SpeakershipPopup):**

| Element | Fix |
|---|---|
| Outer overlay div | Add `role="dialog"`, `aria-modal="true"`, `aria-labelledby="popup-title"` |
| Heading `<h2>` | Add `id="popup-title"` |
| Close button (`×`) | Add `aria-label="Close"` |
| Focus on open | Move focus to the close button or heading on mount via `useEffect` + `ref.focus()` |
| Focus trapping | Trap Tab cycle inside the modal (first/last focusable element wrap) |
| Focus on close | Return focus to the triggering element |

**Company/speakership logo tiles:**

Convert `<div onClick>` to `<button>` elements (or add `role="button"`, `tabIndex={0}`, `onKeyDown` for Enter/Space). Using `<button>` is cleaner:

```tsx
<button
  onClick={() => handleCompanyClick(index)}
  className="cursor-pointer p-4 h-24 ..."
>
  <Image ... />
</button>
```

WCAG SC 2.1.1 — keyboard accessible.

### 3.7 — EventSelector accessibility

**File:** `components/ui/event-selector.tsx`

| Element | Fix |
|---|---|
| Desktop card panels (`<div onClick>`) | Add `role="button"`, `tabIndex={0}`, `onKeyDown` for Enter/Space |
| Active card | Add `aria-selected="true"` or `aria-pressed="true"` |
| Container | Add `aria-roledescription="carousel"`, `aria-label="Event documentation carousel"` |
| Auto-rotation (10s interval) | Add a pause/play toggle button; pause on focus. WCAG SC 2.2.2 |
| Mobile dot indicators | Change `aria-label` from `"Go to slide N"` to `aria-label={events[index].title}` |

Import `useReducedMotion` and disable auto-rotation when `prefers-reduced-motion` is set.

### 3.8 — Contact form accessibility

**File:** `app/resources/contact-form/contact-form.tsx`

| Element | Line(s) | Fix |
|---|---|---|
| Form labels | ~209, 222, 235 | Add `htmlFor="fullName"`, `htmlFor="email"`, `htmlFor="message"` on labels; add `id="fullName"`, `id="email"`, `id="message"` on inputs |
| Event type toggle buttons | ~173–183 | Add `aria-pressed={formData.eventType === type}` |
| Submit button | ~247 | Add `aria-busy={status.submitting}` |
| Status message div | ~256 | Add `role="alert"` and `aria-live="polite"` |

### 3.9 — Reduced-motion guards for unguarded animations

| Component | Animation | Fix |
|---|---|---|
| `0-ScrollToTopButton.tsx` | `animate-spin-slow`, `animate-pulse`, `animate-float-up` | Import `useReducedMotion`, conditionally apply animation classes |
| `components/ui/event-selector.tsx` | Inline `<style jsx>` keyframes (`spin-slow`, `float`, `twinkle`, `pulse-star`) | Add `@media (prefers-reduced-motion: reduce)` inside the `<style>` block |
| `3-WorkExperience.tsx` | `SparklesCore` particles | Import `useReducedMotion`, conditionally render SparklesCore |
| `app/globals.css` | `particleFloat`, `fade-in`, `fade-in-up`, `iconBounce` | Add `@media (prefers-reduced-motion: reduce) { animation: none; }` |

## Files Changed

| Action | File |
|---|---|
| Modify | `app/layout.tsx` — skip link + `id="main-content"` |
| Modify | `app/globals.css` — global focus ring + reduced-motion for keyframes |
| Modify | `app/components/0-Header.tsx` — ARIA attributes + keyboard dropdown toggle |
| Modify | `app/components/0-Footer.tsx` — `aria-label` on social links + `<nav>` wrappers |
| Modify | `app/components/0-ScrollToTopButton.tsx` — `aria-hidden` on SVGs + reduced-motion |
| Modify | `app/components/4-WorkExperience.tsx` — modal ARIA + focus trapping + tile buttons |
| Modify | `components/ui/event-selector.tsx` — keyboard access + pause control + reduced-motion |
| Modify | `app/resources/contact-form/contact-form.tsx` — label association + ARIA states |

## Verification

1. `npm run lint` — zero warnings
2. `npm run build` — must pass
3. Manual keyboard testing: Tab through homepage, open modals, navigate cards, close with Escape
4. Screen reader spot check: VoiceOver on macOS for header nav, modals, and contact form
5. `prefers-reduced-motion` toggle: enable in System Preferences > Accessibility > Display, verify all animations stop

## Commit

```
feat: add ARIA labels, keyboard navigation, focus management, and reduced-motion guards
```
