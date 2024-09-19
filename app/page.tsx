import React from 'react';
import HeroSection from './components/HeroSection';
import WorkExperience from './components/WorkExperience';
import AIBuiltSection from './components/AIBuiltSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkExperience />
      <AIBuiltSection />
    </main>
  );
}