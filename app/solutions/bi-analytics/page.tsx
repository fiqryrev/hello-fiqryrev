import React from 'react';

const BIAnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Business Intelligence and Analytics</h1>
        <p className="text-xl mb-8">Gain valuable insights from your data with advanced analytics and visualization tools.</p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Interactive dashboards and visualizations</li>
          <li>Predictive analytics models</li>
          <li>Data mining and pattern recognition</li>
          <li>Custom reporting solutions</li>
          <li>Real-time analytics</li>
          <li>Self-service BI tools</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Our BI and Analytics Solutions?</h2>
        <p className="mb-4">
          Our BI and analytics solutions empower your organization to make data-driven decisions quickly and confidently. We combine cutting-edge technologies with domain expertise to deliver actionable insights that drive business growth.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <ol className="list-decimal pl-5 mb-8 space-y-2">
          <li>Understand your business objectives and data sources</li>
          <li>Design and implement a comprehensive BI strategy</li>
          <li>Develop custom dashboards and reports</li>
          <li>Implement predictive and prescriptive analytics models</li>
          <li>Provide training and support for self-service analytics</li>
        </ol>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Unlock the Power of Your Data?</h2>
          <p className="mb-4">
            Lets discuss how our Business Intelligence and Analytics solutions can transform your decision-making process. Contact us today for a consultation.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BIAnalyticsPage;