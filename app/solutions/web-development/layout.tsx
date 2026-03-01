import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Solutions',
  description: 'Modern web development solutions powered by AI tools and cutting-edge frameworks.',
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
