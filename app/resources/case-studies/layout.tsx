import React from 'react';

interface CaseStudiesLayoutProps {
  children: React.ReactNode;
}

const CaseStudiesLayout: React.FC<CaseStudiesLayoutProps> = ({ children }) => {
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

export default CaseStudiesLayout;