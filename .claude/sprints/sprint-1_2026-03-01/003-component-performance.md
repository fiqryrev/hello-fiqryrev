# Phase 3 — Component Performance

Lazy load below-fold sections, throttle particle systems, add visibility-based animation control, fix memory leaks.

## Tasks

### 3.1 Lazy load below-fold homepage sections

**File:** `app/page.tsx`

The hero is above the fold — keep it eager. Everything else should be dynamically imported.

**Current:**
```tsx
import HeroSectionNew from './components/1-HeroSectionNew';
import CareerHighlights from './components/2-CareerHighlights';
import WorkExperience from './components/3-WorkExperience';
import RolePortfolio from './components/4-RolePortfolio';
import AIBuiltSection from './components/5-AIBuiltSection';
```

**Replace with:**
```tsx
import dynamic from 'next/dynamic';
import HeroSectionNew from './components/1-HeroSectionNew';

const CareerHighlights = dynamic(() => import('./components/2-CareerHighlights'), {
  loading: () => <section className="min-h-screen bg-black" />,
});
const WorkExperience = dynamic(() => import('./components/3-WorkExperience'), {
  loading: () => <section className="min-h-screen bg-black" />,
});
const RolePortfolio = dynamic(() => import('./components/4-RolePortfolio'), {
  loading: () => <section className="min-h-screen bg-black" />,
});
const AIBuiltSection = dynamic(() => import('./components/5-AIBuiltSection'), {
  loading: () => <section className="min-h-screen bg-black" />,
});
```

**Result:** Initial JS bundle only includes HeroSectionNew. Other sections load as user scrolls.

---

### 3.2 Reduce particle count in AIBuiltSection

**File:** `app/components/5-AIBuiltSection.tsx`

Find the particle configuration constants:
- Change `maxParticles` from `500` → `80`
- Change particle creation interval from `200` ms → `500` ms

This reduces:
- DOM nodes from 500 → 80 (84% reduction)
- Creation rate from 5/sec → 2/sec

---

### 3.3 Replace DOM manipulation particles with React rendering

**File:** `app/components/5-AIBuiltSection.tsx`

The current implementation uses `document.createElement('div')` and `appendChild` — anti-pattern in React.

**Replace with React state-driven approach:**

```tsx
interface Particle {
  id: number;
  left: string;
  top: string;
  duration: string;
  delay: string;
}

const [particles, setParticles] = useState<Particle[]>([]);
const nextId = useRef(0);

useEffect(() => {
  if (!isVisible) return;

  const interval = setInterval(() => {
    setParticles(prev => {
      if (prev.length >= 80) return prev;
      return [...prev, {
        id: nextId.current++,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${2 + Math.random() * 3}s`,
        delay: `${Math.random() * 0.5}s`,
      }];
    });
  }, 500);

  return () => clearInterval(interval);
}, [isVisible]);

// Remove particles after animation ends
const handleAnimationEnd = (id: number) => {
  setParticles(prev => prev.filter(p => p.id !== id));
};
```

Render in JSX:
```tsx
{particles.map(p => (
  <div
    key={p.id}
    className={styles.particle}
    style={{ left: p.left, top: p.top, animationDuration: p.duration, animationDelay: p.delay }}
    onAnimationEnd={() => handleAnimationEnd(p.id)}
  />
))}
```

---

### 3.4 Add IntersectionObserver for animation control

Create a reusable hook for visibility detection:

**New file:** `lib/use-visibility.ts`
```tsx
import { useEffect, useRef, useState } from 'react';

export function useVisibility(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
```

**Apply to:**

1. **`app/components/1-HeroSectionNew.tsx`** — Floating icons (Code2, Database, GitBranch)
   - Wrap the icon container with `ref={visibilityRef}`
   - Pass `animate={isVisible ? "visible" : "hidden"}` to motion components
   - Stops infinite animations when hero scrolls out of view

2. **`app/components/5-AIBuiltSection.tsx`** — Wormhole + particles
   - Wrap section with `ref={visibilityRef}`
   - Only create particles when `isVisible === true`
   - Pause wormhole CSS animation when not visible (toggle class)

---

### 3.5 Throttle scroll handler in RolePortfolio

**File:** `app/components/4-RolePortfolio.tsx`

**Current issue:** Scroll event fires on every pixel, calls `getBoundingClientRect()` every frame.

**Fix approach:**
1. Use `IntersectionObserver` to detect when the section enters/exits viewport
2. Only attach scroll listener when section is visible
3. Add a `ticking` ref to throttle to 1 call per animation frame:

```tsx
const ticking = useRef(false);

const handleScroll = () => {
  if (ticking.current) return;
  ticking.current = true;

  requestAnimationFrame(() => {
    // ... existing scroll logic ...
    ticking.current = false;
  });
};
```

4. **Fix timeout leak** (~line 280): Store timeout ID in a ref and clear it in useEffect cleanup:
```tsx
const timeoutRef = useRef<NodeJS.Timeout>();

// In effect:
timeoutRef.current = setTimeout(() => { ... }, 50);

// In cleanup:
return () => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  window.removeEventListener('scroll', handleScroll);
};
```

---

### 3.6 Fix memory leaks

**File: `app/components/5-AIBuiltSection.tsx`**
- useEffect cleanup must: (1) clear the particle creation interval, (2) remove all particle DOM nodes if still using DOM approach, or clear state if using React approach
- The `particleCount` dependency in useEffect causes interval recreation — use a ref instead

**File: `app/components/4-RolePortfolio.tsx`**
- Clear the `setTimeout` at ~line 280 in useEffect cleanup (see 3.5 above)
- Verify `requestAnimationFrame` callback ID is cancelled on cleanup

**File: `app/components/1-HeroSectionNew.tsx`**
- Verify the `setInterval` for placeholder rotation (lines 31-37) is cleaned up — it currently is via `clearInterval`, confirm the dependency array is stable
- Verify the chatbot response timeout (lines 39-64) is cleaned up if component unmounts mid-response

---

### 3.7 Add `prefers-reduced-motion` hook

**New file:** `lib/use-reduced-motion.ts`

```tsx
'use client';

import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}
```

**Apply to:**

1. **`app/components/1-HeroSectionNew.tsx`**
   - If `reducedMotion`, skip floating icon animations (render static icons)
   - Simplify hero text entrance to instant opacity:1

2. **`app/components/5-AIBuiltSection.tsx`**
   - If `reducedMotion`, don't create particles
   - Disable wormhole hue-rotate animation

3. **`app/components/4-RolePortfolio.tsx`**
   - If `reducedMotion`, disable scroll-based parallax transforms

---

## Files Created/Modified Summary

| Action | File |
|---|---|
| MODIFY | `app/page.tsx` — dynamic imports |
| MODIFY | `app/components/5-AIBuiltSection.tsx` — particles, visibility, cleanup |
| MODIFY | `app/components/1-HeroSectionNew.tsx` — visibility, reduced motion |
| MODIFY | `app/components/4-RolePortfolio.tsx` — scroll throttle, cleanup |
| CREATE | `lib/use-visibility.ts` — IntersectionObserver hook |
| CREATE | `lib/use-reduced-motion.ts` — prefers-reduced-motion hook |

## Verification Checklist

- [ ] `npm run lint` — zero warnings
- [ ] `npm run build` — succeeds
- [ ] `npm run dev` — homepage loads, all sections render on scroll
- [ ] DevTools Network tab: initial JS bundle noticeably smaller
- [ ] DevTools Performance tab: record scroll through full page — no frame drops > 50ms
- [ ] Below-fold sections load lazily (check Network tab for chunk requests on scroll)
- [ ] Particles cap at 80 max, no DOM leak on unmount
- [ ] Set OS to "reduce motion" → animations are simplified/disabled
- [ ] No console errors about memory leaks or missing cleanups
- [ ] Lighthouse Performance score improvement (target: ≥ 80)
