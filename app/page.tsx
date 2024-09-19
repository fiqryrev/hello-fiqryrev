import React from 'react';
import HeroSection from './components/HeroSection';
import WorkExperience from './components/WorkExperience';
import ProjectsSection from './components/ProjectsSection';
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
//<ProjectsSection />