# Phase 2 — Image & Asset Optimization

Compress oversized images, fix video loading strategy, fix deprecated Next.js Image props.

## Tasks

### 2.1 Compress oversized images

Use `sharp` CLI (install temporarily: `npx sharp-cli`) or manual compression. Targets:
- Logos: < 200KB
- Photos: < 500KB
- All: preserve visual quality at display resolution

| File | Current | Target | Method |
|---|---|---|---|
| `public/images/speakership/speaker_um_logo.png` | **12MB** | <200KB | Resize to max 512px wide, compress PNG |
| `public/images/speakership/speaker_kemenparekraf_logo.png` | **2.7MB** | <200KB | Resize to max 512px wide, compress PNG |
| `public/images/highlights/events_ifcs_greece.png` | **2.0MB** | <500KB | Convert to WebP or compress PNG |
| `public/images/tech/airflow_logo.png` | 638KB | <100KB | Compress PNG, reduce dimensions |
| `public/images/articles/resources-casestudies-multimodal-receipt.png` | 588KB | <300KB | Compress PNG |
| `public/images/tech/postgres_logo.png` | 200KB | <50KB | Compress PNG |

**Command pattern:**
```bash
# Example with sharp-cli
npx sharp-cli -i public/images/speakership/speaker_um_logo.png -o public/images/speakership/speaker_um_logo.png resize 512
```

**After compression:** Verify images still render correctly on the site.

**Also audit:** Run `find public/images -size +500k -type f` to catch any other oversized files missed above.

---

### 2.2 Fix video loading — blackhole.webm

The same 740KB video is loaded in two components. Both need `preload="none"` to prevent eager download.

**File 1: `app/components/1-HeroSectionNew.tsx`**

Find the `<video>` tag (~line 84-94). Change to:
```tsx
<video
  src="/images/background/blackhole.webm"
  autoPlay
  loop
  muted
  playsInline
  preload="none"
  className="..."
/>
```

**File 2: `app/components/5-AIBuiltSection.tsx`**

Find the `<video>` tag (~line 63-73). Change to:
```tsx
<video
  loop
  muted
  playsInline
  preload="none"
  onLoadedData={() => setIsVideoLoaded(true)}
  className="..."
>
  <source src="/images/background/blackhole.webm" type="video/webm" />
</video>
```

**Result:** Video only loads when the browser decides to play it (autoPlay in hero) or when explicitly triggered. Saves 740KB on initial page load for the AI section.

---

### 2.3 Fix deprecated Image props in Header

**File:** `app/components/0-Header.tsx` (~lines 125-131)

**Current (deprecated):**
```tsx
<Image
  src="/images/articles/gcp_logo.png"
  alt="Case Study Preview"
  layout="fill"
  objectFit="contain"
/>
```

**Fix:**
```tsx
<Image
  src="/images/articles/gcp_logo.png"
  alt="Multimodal OCR Case Study Preview"
  fill
  sizes="(max-width: 768px) 100vw, 200px"
  className="object-contain"
/>
```

Changes:
- `layout="fill"` → `fill` (boolean prop, Next.js 13+ syntax)
- `objectFit="contain"` → `className="object-contain"` (Tailwind)
- Added `sizes` for responsive image serving
- Improved `alt` text to be more descriptive

---

### 2.4 Audit and fix all Image components missing `sizes`

Search for all `<Image` usages. For each one missing `sizes`, add an appropriate value:

| Pattern | `sizes` value |
|---|---|
| Full-width hero images | `100vw` |
| Half-width on desktop | `(max-width: 768px) 100vw, 50vw` |
| Small logos (64px) | `64px` |
| Card thumbnails | `(max-width: 768px) 100vw, 33vw` |
| Fixed-size icons | `{width}px` (match the width prop) |

Components to check:
- `app/components/0-Header.tsx` — navigation logos
- `app/components/2-CareerHighlights.tsx` — event images
- `app/components/3-WorkExperience.tsx` — company logos, tech stack
- `app/components/4-RolePortfolio.tsx` — role images (already has `sizes` ✓)
- `app/components/0-Footer.tsx` — if any images

---

## Verification Checklist

- [ ] `npm run build` — succeeds
- [ ] `npm run dev` — all images render correctly
- [ ] No image file > 500KB in `public/images/` (logos < 200KB)
- [ ] No `layout=` or `objectFit=` deprecation warnings in console
- [ ] DevTools Network tab: initial page load < 3MB total transfer
- [ ] Video does not auto-download on sections below fold
- [ ] All `<Image>` components have `sizes` prop
