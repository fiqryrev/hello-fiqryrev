import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = params
  const MDXContent = await import(`../../${slug}.mdx`).catch(() => null)

  if (!MDXContent) {
    return {}
  }

  return {
    title: MDXContent.frontmatter.title,
    description: MDXContent.frontmatter.description || 'Blog post',
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params
  const MDXContent = await import(`../../${slug}.mdx`).catch(() => null)

  if (!MDXContent) {
    notFound()
  }

  const Content = dynamic(() => import(`../../${slug}.mdx`), { ssr: true })

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{MDXContent.frontmatter.title}</h1>
      <p className="text-gray-500">Published on: {MDXContent.frontmatter.date}</p>
      <Content />
    </article>
  )
}