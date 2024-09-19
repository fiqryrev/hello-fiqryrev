import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest blog posts',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to Data Analysis',
      slug: 'introduction-to-data-analysis',
      excerpt: 'Learn the basics of data analysis and how to use it to gain insights from your data.',
      date: '2023-05-15',
    },
    // Add more blog posts here as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <p className="text-sm text-gray-500">Published on: {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}