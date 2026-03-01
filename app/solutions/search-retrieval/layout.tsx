import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search & Retrieval Solutions',
  description: 'AI-powered search and retrieval systems for intelligent information discovery.',
};

export default function SearchRetrievalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
