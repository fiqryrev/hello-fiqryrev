# Phase 6 — Accessibility

Add ARIA attributes, keyboard navigation, focus management, reduced-motion support, semantic HTML, and color contrast fixes.

## Tasks

### 6.1 Add ARIA attributes to Header navigation

**File:** `app/components/0-Header.tsx`

**Desktop dropdown menus:**
```tsx
// On the dropdown trigger button:
<button
  aria-expanded={isOpen}
  aria-haspopup="true"
  aria-controls="dropdown-{id}"
>
  Solutions
</button>

// On the dropdown panel:
<div
  id="dropdown-{id}"
  role="menu"
  aria-label="Solutions submenu"
>
  {items.map(item => (
    <a key={item.href} href={item.href} role="menuitem">
      {item.label}
    </a>
  ))}
</div>
```

**Mobile menu button:**
```tsx
<button
  aria-expanded={isMobileMenuOpen}
  aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
  aria-controls="mobile-menu"
>
  {/* hamburger icon */}
</button>

<nav id="mobile-menu" aria-label="Mobile navigation">
  {/* mobile menu content */}
</nav>
```

---

### 6.2 Add keyboard navigation to dropdowns

**File:** `app/components/0-Header.tsx`

**Escape key — close dropdown:**
```tsx
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveDropdown(null);
      // Return focus to the trigger button
      triggerRef.current?.focus();
    }
  };

  if (activeDropdown !== null) {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }
}, [activeDropdown]);
```

**Arrow key navigation within dropdowns:**
```tsx
const handleDropdownKeyDown = (e: React.KeyboardEvent, items: NavItem[]) => {
  const menuItems = e.currentTarget.querySelectorAll('[role="menuitem"]');
  const currentIndex = Array.from(menuItems).indexOf(document.activeElement as Element);

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % menuItems.length;
      (menuItems[nextIndex] as HTMLElement).focus();
      break;
    case 'ArrowUp':
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
      (menuItems[prevIndex] as HTMLElement).focus();
      break;
    case 'Home':
      e.preventDefault();
      (menuItems[0] as HTMLElement).focus();
      break;
    case 'End':
      e.preventDefault();
      (menuItems[menuItems.length - 1] as HTMLElement).focus();
      break;
  }
};
```

**Tab behavior:** Tab moves to next focusable element outside the dropdown (default browser behavior). No override needed.

---

### 6.3 Add focus trap to mobile menu

**File:** `app/components/0-Header.tsx`

When the mobile menu is open, Tab should cycle through menu items without escaping to the background page.

```tsx
useEffect(() => {
  if (!isMobileMenuOpen) return;

  const menuEl = mobileMenuRef.current;
  if (!menuEl) return;

  const focusableEls = menuEl.querySelectorAll(
    'a[href], button, [tabindex]:not([tabindex="-1"])'
  );
  const firstEl = focusableEls[0] as HTMLElement;
  const lastEl = focusableEls[focusableEls.length - 1] as HTMLElement;

  const handleTab = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey && document.activeElement === firstEl) {
      e.preventDefault();
      lastEl.focus();
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault();
      firstEl.focus();
    }
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
      hamburgerRef.current?.focus();
    }
  };

  document.addEventListener('keydown', handleTab);
  document.addEventListener('keydown', handleEscape);
  firstEl?.focus();

  return () => {
    document.removeEventListener('keydown', handleTab);
    document.removeEventListener('keydown', handleEscape);
  };
}, [isMobileMenuOpen]);
```

**Also:** Add `aria-hidden="true"` and `inert` attribute to `<main>` content when mobile menu is open, to prevent screen readers from accessing background content.

---

### 6.4 Implement `prefers-reduced-motion` across Framer Motion animations

**Prerequisite:** `lib/use-reduced-motion.ts` from Phase 3.

**Approach:** Use Framer Motion's built-in `useReducedMotion` hook or the custom one from Phase 3 to conditionally disable animations.

**Files to update:**

1. **`app/components/1-HeroSectionNew.tsx`**
   - Floating icons: render static if `reducedMotion`
   - Text entrance animation: instant opacity transition

2. **`app/components/2-CareerHighlights.tsx`**
   - Timeline reveal animations: render immediately visible

3. **`app/components/3-WorkExperience.tsx`**
   - Scroll-triggered reveals: render immediately visible

4. **`app/components/4-RolePortfolio.tsx`**
   - Parallax scroll effects: disable transform
   - Card hover animations: keep subtle scale only

5. **`app/components/5-AIBuiltSection.tsx`**
   - Particle system: do not spawn particles
   - Wormhole animation: show static background

6. **Solution subpages (6 files)**
   - Staggered entrance animations: render immediately visible

**Pattern for Framer Motion components:**
```tsx
const reducedMotion = useReducedMotion();

<motion.div
  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
>
```

---

### 6.5 Add focus-visible outlines for interactive elements

**File:** `app/globals.css`

Add a global focus-visible style that works with the dark theme:

```css
@layer base {
  *:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    border-radius: 4px;
  }
}
```

**Verify:** Tab through the entire site. Every button, link, and input should show a visible focus ring.

**Exception:** If specific components need custom focus styles (e.g., cards with rounded corners), override with component-level Tailwind: `focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2`.

---

### 6.6 Audit color contrast

**Concern:** `text-white/70` and `text-white/80` on `bg-black` may fail WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text).

| Class | Hex approx | Contrast on #000 | WCAG AA (normal) | WCAG AA (large) |
|---|---|---|---|---|
| `text-white` (#fff) | #ffffff | 21:1 | Pass | Pass |
| `text-white/80` | #ffffffcc | ~17:1 | Pass | Pass |
| `text-white/70` | #ffffffb3 | ~15:1 | Pass | Pass |
| `text-white/60` | #ffffff99 | ~11:1 | Pass | Pass |
| `text-white/50` | #ffffff80 | ~8.5:1 | Pass | Pass |
| `text-white/40` | #ffffff66 | ~6:1 | Pass | Pass |
| `text-white/30` | #ffffff4d | ~4.2:1 | Borderline | Pass |

**Action:**
1. Search for `text-white/30` or lower opacity text — these may fail AA for body text
2. If used only on large headings (≥18px bold or ≥24px), they pass AA
3. If used on body text, bump to `text-white/40` minimum
4. Also check `text-gray-400`, `text-gray-500` on dark backgrounds — `text-gray-500` (#6b7280) on black is only ~5.9:1, borderline for small text

---

### 6.7 Add semantic `<article>` tags for blog posts

**File:** `app/resources/blog/[slug]/page.tsx`

Wrap the blog post content in an `<article>` element:

```tsx
<article>
  <header>
    <h1>{frontmatter.title}</h1>
    <time dateTime={frontmatter.date}>{formattedDate}</time>
    <p>{frontmatter.author}</p>
  </header>
  <div className="prose prose-invert">
    {/* MDX content */}
  </div>
</article>
```

**Also in blog listing** (`app/resources/blog/page.tsx`):
```tsx
{posts.map(post => (
  <article key={post.slug}>
    <h2><a href={`/resources/blog/${post.slug}`}>{post.title}</a></h2>
    <time dateTime={post.date}>{post.formattedDate}</time>
  </article>
))}
```

---

## Files Created/Modified Summary

| Action | File |
|---|---|
| MODIFY | `app/components/0-Header.tsx` — ARIA, keyboard nav, focus trap |
| MODIFY | `app/globals.css` — focus-visible styles |
| MODIFY | `app/components/1-HeroSectionNew.tsx` — reduced motion |
| MODIFY | `app/components/2-CareerHighlights.tsx` — reduced motion |
| MODIFY | `app/components/3-WorkExperience.tsx` — reduced motion |
| MODIFY | `app/components/4-RolePortfolio.tsx` — reduced motion |
| MODIFY | `app/components/5-AIBuiltSection.tsx` — reduced motion |
| MODIFY | `app/resources/blog/[slug]/page.tsx` — semantic article |
| MODIFY | `app/resources/blog/page.tsx` — semantic article |
| MODIFY | 6x `app/solutions/*/page.tsx` — reduced motion |

## Verification Checklist

- [ ] `npm run lint` — zero warnings
- [ ] `npm run build` — succeeds
- [ ] Keyboard-only navigation: can reach all interactive elements via Tab
- [ ] Escape closes dropdowns and mobile menu
- [ ] Arrow keys navigate within dropdown menus
- [ ] Focus is trapped inside mobile menu when open
- [ ] Focus ring visible on all interactive elements during keyboard navigation
- [ ] Screen reader (VoiceOver on macOS): announces menu states correctly
- [ ] `prefers-reduced-motion: reduce` → no motion animations play
- [ ] No color contrast ratio below 4.5:1 for body text
- [ ] Blog posts wrapped in `<article>` with `<time>` elements
- [ ] Lighthouse Accessibility score ≥ 90
