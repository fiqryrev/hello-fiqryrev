import React from 'react';

const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Web Development</h1>
        <p className="text-xl mb-8">Create modern, responsive, and high-performance web applications tailored to your business needs.</p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>Front-end development (React, Vue, Angular)</li>
          <li>Back-end development (Node.js, Python, Ruby)</li>
          <li>Full-stack solutions</li>
          <li>Progressive Web Apps (PWAs)</li>
          <li>Responsive design and mobile-first approach</li>
          <li>API development and integration</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Web Development Solutions?</h2>
        <p className="mb-4">
          Our web development solutions combine cutting-edge technologies with user-centric design to create engaging, scalable, and high-performance web applications. We focus on delivering seamless user experiences across all devices and platforms.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <ol className="list-decimal pl-5 mb-8 space-y-2">
          <li>Understand your business requirements and target audience</li>
          <li>Design intuitive user interfaces and experiences</li>
          <li>Develop robust and scalable web applications</li>
          <li>Implement security best practices and performance optimizations</li>
          <li>Provide ongoing maintenance and support</li>
        </ol>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Build Your Next Web Application?</h2>
          <p className="mb-4">
            Lets discuss how our Web Development solutions can bring your ideas to life. Contact us today for a consultation.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;