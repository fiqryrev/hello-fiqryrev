import React from 'react';
import { Metadata } from 'next';
import SolutionContent from './SolutionContent';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Explore data science, engineering, and AI solutions offered by Fiqry Revadiansyah.',
};

const SolutionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SolutionContent />
    </div>
  );
};

export default SolutionPage;