import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'How Multimodal OCR Cut Manual Document Processing Time by 90%',
      description: 'Learn how we leveraged Google Gemini Flash Multimodal LLM to automate financial document processing, reducing manual input time from 10 minutes to just 10 seconds.',
      image: '/images/articles/resources-casestudies-multimodal-receipt.png',
      link: '/resources/case-studies/multimodal-ocr',
      tags: ['AI/ML', 'OCR', 'Finance', 'Automation']
    },
    // Add more case studies here as they are created
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <Link href={study.link} key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{study.title}</h2>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
