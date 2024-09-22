import React from 'react';

interface SolutionsLayoutProps {
  children: React.ReactNode;
}

const SolutionsLayout: React.FC<SolutionsLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default SolutionsLayout;