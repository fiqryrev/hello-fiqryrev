// File: src/utils/api.js

// This is just an example. Modify according to your needs.
const API_URL = 'https://api.example.com';

export async function fetchProjects() {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

export async function fetchBlogPosts() {
  const response = await fetch(`${API_URL}/blog-posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}
