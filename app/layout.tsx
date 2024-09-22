import React from 'react'
import './globals.css'
import './styles/particles.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import { metadata } from './metadata'

const inter = Inter({ subsets: ['latin'] })

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
        <div suppressHydrationWarning>
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  )
}
