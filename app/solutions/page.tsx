import React from 'react';
import { Metadata } from 'next';
import SolutionContent from './SolutionContent';

export const metadata: Metadata = {
  title: 'About | Fiqry Revadiansyah',
  description: 'Learn more about Fiqry Revadiansyah, his professional experience, and expertise in data science and engineering.',
};

const SolutionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Solutions</h1>
      <SolutionContent />
    </div>
  );
};

export default SolutionPage;