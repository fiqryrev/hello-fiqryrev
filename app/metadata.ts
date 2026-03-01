import type { Metadata } from 'next';

const baseUrl = 'https://hellofiqryrev.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Fiqry Revadiansyah — Data Science & Engineering Lead',
    template: '%s | Fiqry Revadiansyah',
  },
  description:
    'Portfolio of Fiqry Revadiansyah — Data Science and Engineering Lead specializing in AI/ML, data engineering, and analytics.',
  authors: [{ name: 'Fiqry Revadiansyah' }],
  creator: 'Fiqry Revadiansyah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Fiqry Revadiansyah',
    title: 'Fiqry Revadiansyah — Data Science & Engineering Lead',
    description:
      'Portfolio of Fiqry Revadiansyah — Data Science and Engineering Lead specializing in AI/ML, data engineering, and analytics.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiqry Revadiansyah — Data Science & Engineering Lead',
    description:
      'Portfolio of Fiqry Revadiansyah — Data Science and Engineering Lead specializing in AI/ML, data engineering, and analytics.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};
