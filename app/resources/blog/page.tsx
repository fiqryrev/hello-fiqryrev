import React from 'react';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  // This is a placeholder for blog posts. In a real application, you would fetch this data from an API or database.
  const blogPosts = [
    { id: 1, title: 'Introduction to Data Analysis', slug: 'introduction-to-data-analysis' },
    { id: 2, title: 'Machine Learning Basics', slug: 'machine-learning-basics' },
    { id: 3, title: 'Web Development Best Practices', slug: 'web-development-best-practices' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-xl mb-8">Read the writings about data, hobbies, and more.</p>
        
        {blogPosts.length > 0 ? (
          <ul className="space-y-6">
            {blogPosts.map((post) => (
              <li key={post.id} className="border-b border-gray-700 pb-4">
                <Link href={`/resources/blog/${post.slug}`} className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No blog posts available at the moment. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;