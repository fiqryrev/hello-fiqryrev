// src/pages/Blog.js
import React from 'react';
import Header from '../src/components/Header';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Chatbot from '../src/components/Chatbot';

const BlogPost = ({ title, date, excerpt, link }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-500 text-sm mb-2">{date}</p>
    <p className="text-gray-600 mb-4">{excerpt}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      Read more
    </a>
  </div>
);

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Web Development",
      date: "April 15, 2024",
      excerpt: "Exploring how artificial intelligence is shaping the future of web development and its potential impact on developers.",
      link: "#"
    },
    {
      title: "Best Practices for Secure Coding",
      date: "March 28, 2024",
      excerpt: "A comprehensive guide to writing secure code and protecting your applications from common vulnerabilities.",
      link: "#"
    },
    {
      title: "Optimizing React Performance",
      date: "March 10, 2024",
      excerpt: "Tips and tricks for improving the performance of your React applications, from code splitting to memoization.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        
        <div className="mt-8">
          <a href="#" className="text-blue-500 hover:underline">View all blog posts</a>
        </div>
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Blog;