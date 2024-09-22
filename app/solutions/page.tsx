import React from 'react';
import { Metadata } from 'next';
import SolutionContent from './SolutionContent';

export const metadata: Metadata = {
  title: 'Solutions | Fiqry Revadiansyah',
  description: 'Explore the solutions offered by Fiqry Revadiansyah in data science and engineering.',
};

const SolutionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SolutionContent />
    </div>
  );
};

export default SolutionPage;