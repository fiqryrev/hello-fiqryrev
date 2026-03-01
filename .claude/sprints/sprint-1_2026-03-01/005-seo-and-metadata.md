# Phase 5 — SEO & Metadata

Add sitemap, robots.txt, OpenGraph/Twitter cards, JSON-LD structured data, per-page metadata, canonical URLs, and static params for blog.

## Tasks

### 5.1 Create `app/sitemap.ts`

**New file:** `app/sitemap.ts`

```typescript
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hellofiqryrev.com'; // Update to actual domain

  const staticRoutes = [
    '',
    '/about',
    '/about/academics',
    '/about/speakership',
    '/resources/blog',
    '/resources/case-studies',
    '/resources/contact-form',
    '/solutions/data-analytics',
    '/solutions/data-engineering',
    '/solutions/data-science',
    '/solutions/gen-ai',
    '/solutions/mlops',
    '/solutions/web-development',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // TODO: Add dynamic blog post URLs by reading MDX files
  // const blogSlugs = getBlogSlugs();
  // const blogEntries = blogSlugs.map(slug => ({ ... }));

  return [...staticEntries];
}
```

**Post-task:** Verify at `localhost:3000/sitemap.xml` that all routes appear.

---

### 5.2 Create `app/robots.ts`

**New file:** `app/robots.ts`

```typescript
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hellofiqryrev.com'; // Update to actual domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

**Post-task:** Verify at `localhost:3000/robots.txt`.

---

### 5.3 Expand root metadata in `app/metadata.ts`

**File:** `app/metadata.ts` (or wherever root metadata is exported — may be in `app/layout.tsx`)

**Add/expand these fields:**

```typescript
import type { Metadata } from 'next';

const baseUrl = 'https://hellofiqryrev.com';

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Fiqry Revadiansyah — Data Science & Engineering Lead',
    template: '%s | Fiqry Revadiansyah',
  },
  description: 'Portfolio of Fiqry Revadiansyah — Data Science and Engineering Lead specializing in AI/ML, data engineering, and analytics.',
  authors: [{ name: 'Fiqry Revadiansyah' }],
  creator: 'Fiqry Revadiansyah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Fiqry Revadiansyah',
    title: 'Fiqry Revadiansyah — Data Science & Engineering Lead',
    description: 'Portfolio of Fiqry Revadiansyah — Data Science and Engineering Lead specializing in AI/ML, data engineering, and analytics.',
    // images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '...' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiqry Revadiansyah — Data Science & Engineering Lead',
    description: 'Portfolio of Fiqry Revadiansyah — Data Science and Engineering Lead.',
    // images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    // apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

**Note:** The OG image comments are placeholders — create an OG image asset if one doesn't exist, or uncomment once available.

---

### 5.4 Add `metadata` exports to pages missing them

Each page below needs a `metadata` export. Use the `title.template` from root layout so titles render as `Page Title | Fiqry Revadiansyah`.

| Page file | `title` value | `description` |
|---|---|---|
| `app/about/page.tsx` | `'About'` | Brief bio summary |
| `app/about/academics/page.tsx` | `'Academics'` | Education background |
| `app/about/speakership/page.tsx` | `'Speakership'` | Speaking engagements |
| `app/resources/contact-form/page.tsx` | `'Contact'` | Contact form |
| `app/resources/case-studies/page.tsx` | `'Case Studies'` | Case study portfolio |
| `app/resources/blog/page.tsx` | `'Blog'` | Blog listing |
| `app/solutions/data-analytics/page.tsx` | `'Data Analytics Solutions'` | Service description |
| `app/solutions/data-engineering/page.tsx` | `'Data Engineering Solutions'` | Service description |
| `app/solutions/data-science/page.tsx` | `'Data Science Solutions'` | Service description |
| `app/solutions/gen-ai/page.tsx` | `'Generative AI Solutions'` | Service description |
| `app/solutions/mlops/page.tsx` | `'MLOps Solutions'` | Service description |
| `app/solutions/web-development/page.tsx` | `'Web Development Solutions'` | Service description |

**Pattern for each page:**
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'A concise description of this page.',
};
```

For `"use client"` pages: metadata exports must come from a Server Component. If the page is a client component, either:
1. Convert the page to a server component that wraps a client component, or
2. Move the metadata to a `layout.tsx` in the same directory

---

### 5.5 Add `generateStaticParams()` to blog slug page

**File:** `app/resources/blog/[slug]/page.tsx`

```typescript
export async function generateStaticParams() {
  // Read all MDX files from the blog directory
  const fs = await import('fs');
  const path = await import('path');

  const blogDir = path.join(process.cwd(), 'app/resources/blog');
  const files = fs.readdirSync(blogDir).filter((f: string) => f.endsWith('.mdx'));

  return files.map((file: string) => ({
    slug: file.replace('.mdx', ''),
  }));
}
```

**Result:** All blog posts are pre-rendered at build time instead of on-demand. Improves TTFB for blog pages.

**Also add dynamic metadata:**
```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Read frontmatter from MDX file
  // Return title and description from frontmatter
}
```

---

### 5.6 Add JSON-LD structured data

**File:** `app/layout.tsx`

Add a `<script type="application/ld+json">` in the root layout `<head>`:

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fiqry Revadiansyah',
  jobTitle: 'Data Science and Engineering Lead',
  url: 'https://hellofiqryrev.com',
  sameAs: [
    // LinkedIn, GitHub, etc. — pull from social links data
  ],
  knowsAbout: [
    'Data Science', 'Data Engineering', 'Machine Learning',
    'Artificial Intelligence', 'MLOps', 'Analytics',
  ],
};

// In the layout JSX, inside <head>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

---

### 5.7 Add canonical URLs

**Approach:** Set `metadataBase` in root metadata (done in 5.3). Then Next.js auto-generates canonical URLs from the `alternates` field.

**In root layout metadata:**
```typescript
alternates: {
  canonical: '/',
},
```

**Per page (if needed for non-standard paths):**
```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
};
```

For most pages, the `metadataBase` + route path is sufficient and Next.js handles it automatically.

---

## Files Created/Modified Summary

| Action | File |
|---|---|
| CREATE | `app/sitemap.ts` |
| CREATE | `app/robots.ts` |
| MODIFY | `app/layout.tsx` — root metadata expansion, JSON-LD script |
| MODIFY | `app/metadata.ts` — OpenGraph, Twitter, icons, authors |
| MODIFY | `app/about/page.tsx` — add metadata export |
| MODIFY | `app/about/academics/page.tsx` — add metadata export |
| MODIFY | `app/about/speakership/page.tsx` — add metadata export |
| MODIFY | `app/resources/contact-form/page.tsx` — add metadata export |
| MODIFY | `app/resources/case-studies/page.tsx` — add metadata export |
| MODIFY | `app/resources/blog/page.tsx` — add metadata export |
| MODIFY | `app/resources/blog/[slug]/page.tsx` — generateStaticParams, generateMetadata |
| MODIFY | 6x `app/solutions/*/page.tsx` — add metadata export |

## Verification Checklist

- [ ] `npm run build` — succeeds
- [ ] `localhost:3000/sitemap.xml` — lists all routes
- [ ] `localhost:3000/robots.txt` — correct format with sitemap reference
- [ ] View page source on homepage — OpenGraph meta tags present
- [ ] View page source on homepage — JSON-LD script tag present
- [ ] Each page has a unique `<title>` in the browser tab
- [ ] Twitter Card Validator accepts the homepage URL (after deploy)
- [ ] Blog posts are statically generated at build time (check build output)
- [ ] No duplicate `<title>` or `<meta description>` tags in page source
