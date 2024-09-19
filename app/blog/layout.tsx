import React from 'react'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <article className="prose lg:prose-xl">
          {children}
        </article>
      </div>
    </div>
  )
}