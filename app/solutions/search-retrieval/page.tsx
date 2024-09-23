import React from 'react';

const SearchRetrievalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Search and Retrieval</h1>
        <p className="text-xl mb-8">Implement efficient search systems for your data to enhance accessibility and user experience.</p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Full-text search engines</li>
          <li>Semantic search implementations</li>
          <li>Faceted search and filtering</li>
          <li>Recommendation systems</li>
          <li>Natural language query processing</li>
          <li>Image and video search solutions</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Search and Retrieval Solutions?</h2>
        <p className="mb-4">
          Our search and retrieval solutions are designed to provide fast, accurate, and relevant results, improving user satisfaction and productivity. We leverage advanced algorithms and technologies to handle complex search scenarios across various data types.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <ol className="list-decimal pl-5 mb-8 space-y-2">
          <li>Analyze your data structure and search requirements</li>
          <li>Design a customized search architecture</li>
          <li>Implement and optimize search algorithms</li>
          <li>Integrate with your existing systems and user interfaces</li>
          <li>Continuously improve search relevance and performance</li>
        </ol>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Enhance Your Search Capabilities?</h2>
          <p className="mb-4">
            Lets discuss how our Search and Retrieval solutions can improve your data accessibility. Contact us today for a consultation.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchRetrievalPage;