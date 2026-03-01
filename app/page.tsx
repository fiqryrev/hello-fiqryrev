import dynamic from 'next/dynamic';
import HeroSectionNew from './components/1-HeroSectionNew';

const CareerHighlights = dynamic(() => import('./components/2-CareerHighlights'), {
  loading: () => <section className="min-h-screen bg-black" />,
});
const WorkExperience = dynamic(() => import('./components/3-WorkExperience'), {
  loading: () => <section className="min-h-screen bg-black" />,
});
const RolePortfolio = dynamic(() => import('./components/4-RolePortfolio'), {
  loading: () => <section className="min-h-screen bg-black" />,
});
const AIBuiltSection = dynamic(() => import('./components/5-AIBuiltSection'), {
  loading: () => <section className="min-h-screen bg-black" />,
});

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
