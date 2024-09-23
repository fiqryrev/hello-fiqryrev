import React from 'react';

const DataAIProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Data and AI Products</h1>
        <p className="text-xl mb-8">Build the ideal product powered by AI and data-driven insights.</p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>AI-powered analytics solutions</li>
          <li>Machine learning model development</li>
          <li>Natural language processing applications</li>
          <li>Computer vision systems</li>
          <li>Predictive modeling and forecasting</li>
          <li>Recommendation engines</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Data and AI Products?</h2>
        <p className="mb-4">
          Our data and AI products leverage cutting-edge technologies to provide you with actionable insights and automate complex processes. We focus on creating scalable, efficient, and interpretable AI solutions that drive real business value.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <ol className="list-decimal pl-5 mb-8 space-y-2">
          <li>Understand your business needs and data landscape</li>
          <li>Design custom AI solutions tailored to your specific challenges</li>
          <li>Develop and train models using state-of-the-art techniques</li>
          <li>Implement and integrate AI products into your existing systems</li>
          <li>Provide ongoing support and model maintenance</li>
        </ol>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="mb-4">
            Lets discuss how our Data and AI Products can transform your business. Contact us today for a consultation.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataAIProductPage;