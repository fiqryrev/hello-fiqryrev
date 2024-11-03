import React from 'react';

interface ContactFormLayoutProps {
  children: React.ReactNode;
}

const ContactFormLayout: React.FC<ContactFormLayoutProps> = ({ children }) => {
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

export default ContactFormLayout;
