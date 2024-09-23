import React from 'react';

const DataPlatformEngineeringPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Data Platform and Engineering</h1>
        <p className="text-xl mb-8">Build robust data infrastructure and pipelines to power your data-driven initiatives.</p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Big data architecture design</li>
          <li>ETL and data pipeline development</li>
          <li>Data warehousing solutions</li>
          <li>Real-time data processing systems</li>
          <li>Cloud-based data platforms</li>
          <li>Data lake implementation</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Data Platform and Engineering Solutions?</h2>
        <p className="mb-4">
          Our solutions are designed to handle large volumes of data efficiently, enabling you to extract valuable insights and make data-driven decisions. We focus on scalability, performance, and reliability to meet your evolving data needs.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <ol className="list-decimal pl-5 mb-8 space-y-2">
          <li>Assess your current data infrastructure and requirements</li>
          <li>Design a scalable and efficient data architecture</li>
          <li>Implement data pipelines and processing systems</li>
          <li>Integrate with existing systems and data sources</li>
          <li>Provide ongoing optimization and support</li>
        </ol>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Data Infrastructure?</h2>
          <p className="mb-4">
            Lets discuss how our Data Platform and Engineering solutions can empower your organization. Contact us today for a consultation.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataPlatformEngineeringPage;