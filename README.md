# Hello Fiqryrev

Portfolio website for Fiqry Revadiansyah — Data Science and Engineering Lead. Dark-themed, animation-rich showcase of expertise in AI/ML, data engineering, and analytics.

**Live:** Deployed on Vercel via GitHub connector.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| React | React 19 |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion 12, tsparticles, Spline (3D) |
| Content | MDX with remark-gfm |
| Icons | Lucide React, React Icons |
| Email | EmailJS |
| Linting | ESLint 9 (flat config, next/core-web-vitals + next/typescript) |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Commands

```bash
npm run dev    # Start dev server (Turbopack)
npm run build  # Production build — primary quality gate
npm start      # Start production server
npm run lint   # ESLint check (zero warnings policy)
```

## Project Structure

```
app/
├── layout.tsx                  # Root layout (Header + Footer + JSON-LD)
├── page.tsx                    # Homepage (numbered sections)
├── metadata.ts                 # Root metadata (OpenGraph, Twitter, SEO)
├── sitemap.ts                  # Dynamic sitemap generation
├── robots.ts                   # Robots.txt generation
├── globals.css                 # Global styles + responsive utility classes
├── components/
│   ├── 0-Header.tsx            # Site header with navigation
│   ├── 0-Footer.tsx            # Site footer
│   ├── 0-ScrollToTopButton.tsx # Scroll-to-top FAB
│   ├── 1-HeroSectionNew.tsx    # Hero section
│   ├── 2-CareerHighlights.tsx  # Career timeline
│   ├── 3-WorkExperience.tsx    # Work experience + tech stack
│   ├── 4-RolePortfolio.tsx     # Role showcase with parallax
│   ├── 5-AIBuiltSection.tsx    # AI-built portfolio section
│   └── shared/                 # Shared components (ParticleEffect)
├── data/                       # Typed data files (career events, navigation, work experience)
├── services/                   # API services (chatbot)
├── about/                      # About page
├── resources/
│   ├── blog/                   # Blog listing + MDX posts
│   ├── case-studies/           # Case studies (multimodal-ocr)
│   ├── contact-form/           # Contact form (EmailJS)
│   ├── speakership/            # Speaking engagements
│   └── academics/              # Academic background
└── solutions/                  # Solution pages (6 service areas)

components/
├── ui/                         # shadcn/ui primitives + project widgets
└── magicui/                    # Custom animation components

lib/
├── utils.ts                    # cn() utility (clsx + tailwind-merge)
├── use-visibility.ts           # IntersectionObserver hook
└── use-reduced-motion.ts       # Reduced motion preference hook

public/
└── images/                     # Static assets organized by category
    ├── tech/                   # Technology logos
    ├── work_experience/        # Company logos
    ├── speakership/            # University/event logos
    ├── highlights/             # Event photos
    ├── articles/               # Blog/case study images
    ├── background/             # Background videos/images
    └── menus/                  # Navigation assets
```

## Environment Variables

Create `.env.local` from `.env.example`:

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_CHATBOT_API_URL` | Flowise chatbot API endpoint | Yes |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes |
| `GEMINI_API_KEY` | Google Gemini API key | Optional |

## Design System

- **Theme:** Dark only — black background, white text, no light mode
- **Accents:** Blue/purple/pink gradients (`from-blue-400 via-purple-400 to-pink-400`)
- **Effects:** Glassmorphism (`backdrop-blur-md` + `bg-white/10`), glow shadows
- **Layout:** Fixed header with `pt-24` clearance, `container mx-auto px-4` wrapper
- **Spacing:** `mb-16` between major sections, `gap-8` between grid cards
- **Status indicators:** Animated `animate-ping` dots (purple = activity, green = available)

## Content

### Blog Posts

MDX files in `app/resources/blog/` with required frontmatter:

```yaml
---
title: 'Post Title'
date: 'YYYY-MM-DD'
author: 'Author Name'
---
```

Blog posts are statically generated at build time via `generateStaticParams`.

### Solution Pages

Six service area pages under `app/solutions/`:
- BI & Analytics
- Data & AI Product
- Data Governance & Security
- Data Platform Engineering
- Search & Retrieval
- Web Development

## SEO

- Auto-generated `sitemap.xml` with all routes + dynamic blog slugs
- Auto-generated `robots.txt`
- OpenGraph and Twitter Card metadata on all pages
- JSON-LD `Person` structured data
- Per-page metadata with title template (`%s | Fiqry Revadiansyah`)
- Canonical URLs via `metadataBase`

## Development Guidelines

Full coding standards, architecture rules, and conventions are documented in `.claude/CLAUDE.md`. Key points:

- **Server components by default** — only add `"use client"` when needed
- **`cn()` for class merging** — never template literals for conditional classes
- **`next/image` for all images** — with meaningful `alt` text and `sizes` prop
- **Path alias `@/`** — no deep relative imports (`../../`)
- **Zero ESLint warnings** — fix, don't suppress
- **`npm run build` must pass** — this is the quality gate

## License

Private project. All rights reserved.
