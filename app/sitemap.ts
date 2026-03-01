import fs from 'fs';
import path from 'path';

import type { MetadataRoute } from 'next';

const baseUrl = 'https://hellofiqryrev.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: {
    route: string;
    changeFrequency: 'weekly' | 'monthly';
    priority: number;
  }[] = [
    { route: '', changeFrequency: 'weekly', priority: 1.0 },
    { route: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { route: '/solutions', changeFrequency: 'monthly', priority: 0.9 },
    { route: '/solutions/bi-analytics', changeFrequency: 'monthly', priority: 0.7 },
    { route: '/solutions/data-ai-product', changeFrequency: 'monthly', priority: 0.7 },
    { route: '/solutions/data-governance-security', changeFrequency: 'monthly', priority: 0.7 },
    { route: '/solutions/data-platform-engineering', changeFrequency: 'monthly', priority: 0.7 },
    { route: '/solutions/search-retrieval', changeFrequency: 'monthly', priority: 0.7 },
    { route: '/solutions/web-development', changeFrequency: 'monthly', priority: 0.7 },
    { route: '/resources/blog', changeFrequency: 'weekly', priority: 0.8 },
    { route: '/resources/case-studies', changeFrequency: 'monthly', priority: 0.8 },
    { route: '/resources/case-studies/multimodal-ocr', changeFrequency: 'monthly', priority: 0.6 },
    { route: '/resources/contact-form', changeFrequency: 'monthly', priority: 0.6 },
    { route: '/resources/speakership', changeFrequency: 'monthly', priority: 0.7 },
    { route: '/resources/academics', changeFrequency: 'monthly', priority: 0.7 },
  ];

  const staticEntries = staticRoutes.map(({ route, changeFrequency, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  // Dynamic blog post URLs from MDX files
  const blogDir = path.join(process.cwd(), 'app/resources/blog');
  const mdxFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));
  const blogEntries = mdxFiles.map((file) => ({
    url: `${baseUrl}/resources/blog/${file.replace('.mdx', '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
