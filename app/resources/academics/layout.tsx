import React from 'react';

interface AcademicsLayoutProps {
  children: React.ReactNode;
}

const AcademicsLayout: React.FC<AcademicsLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <main className="container mx-auto px-4 py-16">
        <div className="mt-8 max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AcademicsLayout;
