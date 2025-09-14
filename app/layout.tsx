import React from 'react'
import './globals.css'
import './styles/particles.css'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col m-0 p-0`}>
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
