import React from 'react';

const CertificationsPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Certifications</h1>
        <p className="text-xl mb-8">Get informed about my certifications</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Google Cloud Professional Data Engineer</li>
          <li>AWS Certified Solutions Architect</li>
          <li>Microsoft Certified: Azure Data Scientist Associate</li>
          <li>Certified Information Systems Security Professional (CISSP)</li>
        </ul>
      </div>
    </div>
  );
};

export default CertificationsPage;