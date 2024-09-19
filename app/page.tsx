import React from 'react';
import HeroSection from './components/HeroSection';
import CareerHighlights from './components/CareerHighlights';
import WorkExperience from './components/WorkExperience';
import AIBuiltSection from './components/AIBuiltSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CareerHighlights />
      <WorkExperience />
      <AIBuiltSection />
    </main>
  );
}