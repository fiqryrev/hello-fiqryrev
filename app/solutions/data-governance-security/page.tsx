import React from 'react';

const DataGovernanceSecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Data Governance and Security</h1>
        <p className="text-xl mb-8">Ensure data compliance and security across your organization with our comprehensive solutions.</p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Data privacy and compliance frameworks</li>
          <li>Access control and authentication systems</li>
          <li>Data encryption and protection strategies</li>
          <li>Audit and monitoring solutions</li>
          <li>Data classification and lifecycle management</li>
          <li>Incident response and recovery planning</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Data Governance and Security Solutions?</h2>
        <p className="mb-4">
          Our solutions are designed to protect your valuable data assets while ensuring compliance with industry regulations. We provide robust, scalable, and adaptable security measures that grow with your organization.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <ol className="list-decimal pl-5 mb-8 space-y-2">
          <li>Assess your current data governance and security posture</li>
          <li>Develop a comprehensive data governance strategy</li>
          <li>Implement security controls and monitoring systems</li>
          <li>Provide employee training on data security best practices</li>
          <li>Continuously evaluate and improve security measures</li>
        </ol>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Secure Your Data?</h2>
          <p className="mb-4">
            Lets discuss how our Data Governance and Security solutions can protect your organization. Contact us today for a consultation.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataGovernanceSecurityPage;