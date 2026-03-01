import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speakership',
  description: 'Speaking engagements and presentations by Fiqry Revadiansyah on data science, AI, and engineering.',
};

interface SpeakershipLayoutProps {
  children: React.ReactNode;
}

const SpeakershipLayout: React.FC<SpeakershipLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <div className="mt-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default SpeakershipLayout;