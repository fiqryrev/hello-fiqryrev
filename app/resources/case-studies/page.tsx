import React from 'react';
import Link from 'next/link';

const CaseStudiesPage: React.FC = () => {
  // This is a placeholder for case studies. In a real application, you would fetch this data from an API or database.
  const caseStudies = [
    { id: 1, title: 'Optimizing Data Pipeline for E-commerce Giant', slug: 'optimizing-data-pipeline' },
    { id: 2, title: 'AI-Driven Customer Segmentation for Retail', slug: 'ai-customer-segmentation' },
    { id: 3, title: 'Building Scalable Cloud Infrastructure for FinTech Startup', slug: 'scalable-cloud-infrastructure' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl mb-8">Explore real-world examples of our data and AI solutions in action.</p>
        
        {caseStudies.length > 0 ? (
          <ul className="space-y-6">
            {caseStudies.map((study) => (
              <li key={study.id} className="border-b border-gray-700 pb-4">
                <Link href={`/resources/case-studies/${study.slug}`} className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  {study.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No case studies available at the moment. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default CaseStudiesPage;