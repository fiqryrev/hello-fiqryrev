import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen, PenTool, Sparkles } from 'lucide-react';

const BlogPage: React.FC = () => {
  // This is a placeholder for blog posts. In a real application, you would fetch this data from an API or database.
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to Data Analysis',
      slug: 'introduction-to-data-analysis',
      excerpt: 'Dive into the fundamentals of data analysis and learn how to extract meaningful insights from raw data.',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Data Science',
      tags: ['Analytics', 'Python', 'Statistics']
    },
    {
      id: 2,
      title: 'Machine Learning Basics',
      slug: 'machine-learning-basics',
      excerpt: 'Understanding the core concepts of machine learning and how to apply them in real-world scenarios.',
      date: '2024-03-10',
      readTime: '8 min read',
      category: 'AI/ML',
      tags: ['Machine Learning', 'AI', 'Deep Learning']
    },
    {
      id: 3,
      title: 'Web Development Best Practices',
      slug: 'web-development-best-practices',
      excerpt: 'Essential practices and patterns for building scalable and maintainable web applications.',
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'Development',
      tags: ['React', 'Next.js', 'TypeScript']
    },
  ];

  const categories = ['All', 'Data Science', 'AI/ML', 'Development', 'Case Studies'];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">Insights & Ideas</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Blog & Articles
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto">
              Exploring data science, AI engineering, and technology through practical insights and experiences
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-400'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-purple-400/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {blogPosts.map((post) => (
                <Link href={`/resources/blog/${post.slug}`} key={post.id}>
                  <article className="group bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 h-full flex flex-col">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-400">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-white/50 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-white/60 text-sm mb-4 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-black/30 border border-purple-400/10 rounded-md text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-purple-400/10">
                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1 text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="text-xs font-medium">Read More</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-12 max-w-2xl mx-auto">
                <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Content Coming Soon
                </h3>
                <p className="text-white/60 mb-6">
                  I&apos;m currently working on sharing insights from my experience in data science, AI engineering, and technology leadership.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/30">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-white/70 font-medium">Stay tuned for updates</span>
                </div>
              </div>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-12 text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
              <PenTool className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-white/70 font-medium">Stay Updated</span>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Never Miss an Article
              </span>
            </h2>

            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Get notified when I publish new insights on data science, AI engineering, and technology trends.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-black/40 border border-purple-400/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400/40 transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Separator with Gradient */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-400/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black px-4">
                <span className="text-purple-400">✦</span>
              </span>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-white/70 font-medium">Let&apos;s Connect</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Have a Topic Suggestion?
                </span>
              </h2>

              <p className="text-white/80 mb-3 text-lg">
                I&apos;d love to hear what topics interest you most
              </p>

              <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
                Whether it&apos;s a deep dive into specific technologies, career insights, or industry trends,
                your input helps shape the content I create.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/contact-form"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Suggest a Topic
                </Link>

                <Link
                  href="/resources/speakership"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  Speaking Events
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;