import React from 'react';

interface AcademicsLayoutProps {
  children: React.ReactNode;
}

const AcademicsLayout: React.FC<AcademicsLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default AcademicsLayout;
