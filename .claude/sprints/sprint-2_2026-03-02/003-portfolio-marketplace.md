Phase 2 plan for Sprint 2: replace RolePortfolio with Apple-style PortfolioShowcase and reorder homepage sections.

## Overview

Replace the current Section 4 (`4-RolePortfolio.tsx` — 500vh scroll-jacking role panels with Spline 3D background) with a new Section 3 (`3-PortfolioShowcase.tsx` — Apple Inc. product showcase design). Swap the positions of the portfolio section and WorkExperience so the new portfolio comes before Professional Experience.

**Current homepage order:** Hero(1) → CareerHighlights(2) → WorkExperience(3) → RolePortfolio(4) → AIBuilt(5)

**New homepage order:** Hero(1) → CareerHighlights(2) → **PortfolioShowcase(3)** → **WorkExperience(4)** → AIBuilt(5)

## Tasks

### 2.1 — Archive deprecated files

Move to `app/components/_archive/` (directory already exists):

| Source | Destination |
|---|---|
| `app/components/4-RolePortfolio.tsx` | `app/components/_archive/4-RolePortfolio.tsx` |
| `app/components/4-RoleIcons.tsx` | `app/components/_archive/4-RoleIcons.tsx` |
| `app/styles/components/4-RolePortfolio.module.css` | `app/components/_archive/4-RolePortfolio.module.css` |
| `app/styles/components/4-RolePortfolioMenu.css` | `app/components/_archive/4-RolePortfolioMenu.css` |

Per CLAUDE.md rule 12: archive first, never silently delete.

### 2.2 — Create data file

**New file:** `app/data/portfolio-projects.ts`

Type definitions:

```typescript
type ProjectCategory =
  | "ai-product-engineering"
  | "data-platform-engineering"
  | "data-science-analytics";

interface ProjectTechTag {
  label: string;
}

interface PortfolioProject {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  techTags: ProjectTechTag[];
  impactMetric: string;
  impactLabel: string;
  featured: boolean;
  detailRoute: string | null;
  status: "live" | "archived" | "in-progress";
}

interface ProjectCategoryMeta {
  id: ProjectCategory;
  label: string;
  description: string;
}
```

**3 categories:**

| ID | Label | Description |
|---|---|---|
| `ai-product-engineering` | AI Product and Engineering | LLM systems, agentic AI, computer vision, production ML |
| `data-platform-engineering` | Data Platform and Engineering | Data warehouses, streaming pipelines, orchestration, governance |
| `data-science-analytics` | Data Science and Analytics | Forecasting, experimentation, BI platforms, customer analytics |

**9 placeholder projects** (3 per category, 1 featured each):

AI Product and Engineering:
- **Featured:** Enterprise OCR Pipeline → detailRoute `/solutions/data-ai-product`
- Agentic HR Automation → detailRoute `null`
- AI-Powered CI/CD → detailRoute `null`

Data Platform and Engineering:
- **Featured:** Real-time Event Streaming → detailRoute `/solutions/data-platform-engineering`
- Data Warehouse Migration → detailRoute `null`
- ETL Cost Optimization → detailRoute `null`

Data Science and Analytics:
- **Featured:** Hierarchical Time Series Forecasting → detailRoute `null`
- A/B Testing Framework → detailRoute `null`
- Executive Dashboard Migration → detailRoute `/solutions/bi-analytics`

Follows the pattern of `app/data/work-experience.ts` (typed interfaces, named exports).

### 2.3 — Create `3-PortfolioShowcase.tsx`

**New file:** `app/components/3-PortfolioShowcase.tsx`

Client component (`"use client"`) — requires `useState` for category tabs and modal state.

**Internal subcomponents (unexported):**
- `CategoryTabs` — pill selector with active gradient highlight
- `FeaturedProjectCard` — full-width card for `featured: true` project
- `ProjectCard` — standard grid card
- `ProjectGrid` — composes featured + standard cards
- `ProjectModal` — overlay popup with full project details + CTA link

**Design system (Apple-style, dark theme):**

| Element | Classes |
|---|---|
| Section wrapper | `py-24 bg-black overflow-hidden` |
| Status badge | `animate-ping` purple dot + "Portfolio" label in `bg-white/5 border border-white/10 rounded-full` |
| Section heading | `heading-responsive-lg` + gradient text (`from-blue-400 via-purple-400 to-pink-400`) |
| Category tabs container | `bg-white/5 border border-white/10 rounded-full backdrop-blur-sm` |
| Active tab | `bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full` |
| Inactive tab | `text-white/50 hover:text-white/80` |
| Cards | `bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl` |
| Card hover | `hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]` |
| Tech tags | `bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs` |
| Impact metric | Gradient background `from-purple-900/20 to-pink-900/20 border border-purple-400/20` |
| Grid layout | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` |
| Modal overlay | `bg-black/70 backdrop-blur-sm` |
| Modal panel | `bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl max-w-2xl` |

**Framer Motion animations:**
- Category switch: `AnimatePresence mode="wait"`, fade + Y translate (0.25s ease-out)
- Cards: `motion.div` with `layout` prop for smooth transitions
- Modal: fade in/out with `AnimatePresence`

**Modal interaction:**
- Opens on card click
- Closes on `Escape` key or click-outside (same pattern as `CompanyPopup` in WorkExperience)
- Shows full description, tech tags, impact metric, status badge
- CTA: `<Link>` to `detailRoute` if exists, or disabled "Coming Soon" button if `null`

**State:**
```typescript
const [activeCategory, setActiveCategory] = useState<ProjectCategory>("ai-product-engineering");
const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
```

No `isMounted` guard needed — no browser APIs, no scroll position, no `window`/`document` references.

### 2.4 — Rename WorkExperience

```bash
git mv app/components/3-WorkExperience.tsx app/components/4-WorkExperience.tsx
```

Content unchanged. Only the filename number changes to reflect new render position.

### 2.5 — Update `app/page.tsx`

Replace `RolePortfolio` dynamic import with `PortfolioShowcase`:

```typescript
const PortfolioShowcase = dynamic(() => import("./components/3-PortfolioShowcase"), {
  loading: () => <section className="min-h-screen bg-black" />,
});
const WorkExperience = dynamic(() => import("./components/4-WorkExperience"), {
  loading: () => <section className="min-h-screen bg-black" />,
});
```

Render order:
```tsx
<HeroSectionNew />
<CareerHighlights />
<PortfolioShowcase />
<WorkExperience />
<AIBuiltSection />
```

## Dependencies

- `framer-motion` — already installed (category transitions, modal animation)
- `lucide-react` — already installed (`ArrowRight`, `X` icons)
- `next/link` — built-in (detail page CTA)
- `@/lib/utils` — `cn()` for class merging

No new packages needed.

## Files Changed

| Action | File |
|---|---|
| Archive | `app/components/4-RolePortfolio.tsx` → `_archive/` |
| Archive | `app/components/4-RoleIcons.tsx` → `_archive/` |
| Archive | `app/styles/components/4-RolePortfolio.module.css` → `_archive/` |
| Archive | `app/styles/components/4-RolePortfolioMenu.css` → `_archive/` |
| Create | `app/data/portfolio-projects.ts` |
| Create | `app/components/3-PortfolioShowcase.tsx` |
| Rename | `app/components/3-WorkExperience.tsx` → `4-WorkExperience.tsx` |
| Modify | `app/page.tsx` |

## Verification

1. `npm run lint` — zero warnings
2. `npm run build` — must pass
3. `npm run dev` — visual checks:
   - Homepage loads, sections in correct order (CareerHighlights → PortfolioShowcase → WorkExperience)
   - 3 category tabs render, switching animates smoothly
   - Featured card spans full width per category
   - Standard cards render in 3-col grid (desktop), 1-col (mobile)
   - Card click opens modal with full details
   - Modal closes on Escape / click-outside
   - Detail link navigates to existing `/solutions/*` page
   - "Coming Soon" button appears for projects without detail routes
   - Mobile responsive: tabs wrap or scroll horizontally

## Commit

```
feat: replace RolePortfolio with Apple-style PortfolioShowcase and reorder sections
```
