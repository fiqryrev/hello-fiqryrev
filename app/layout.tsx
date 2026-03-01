import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/0-Header'
import Footer from './components/0-Footer'
import ScrollToTopButton from './components/0-ScrollToTopButton'
import { metadata } from './metadata'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export { metadata }

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fiqry Revadiansyah',
  jobTitle: 'Data Science and Engineering Lead',
  url: 'https://hellofiqryrev.com',
  sameAs: [
    'https://linkedin.com/in/fiqryrevadiansyah',
    'https://github.com/fiqryrev',
  ],
  knowsAbout: [
    'Data Science',
    'Data Engineering',
    'Machine Learning',
    'Artificial Intelligence',
    'MLOps',
    'Analytics',
    'Generative AI',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col m-0 p-0`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
