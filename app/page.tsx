import React from 'react';
import HeroSectionNew from './components/1-HeroSectionNew';
import CareerHighlights from './components/2-CareerHighlights';
import WorkExperience from './components/3-WorkExperience';
import RolePortfolio from './components/4-RolePortfolio';
import AIBuiltSection from './components/5-AIBuiltSection';

export default function Home() {
  return (
    <main>
      <HeroSectionNew />
      <CareerHighlights />
      <WorkExperience />
      <RolePortfolio />
      <AIBuiltSection />
    </main>
  );
}