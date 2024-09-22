import React from 'react';
import Link from 'next/link';

const PresentationDeckPage: React.FC = () => {
  // This is a placeholder for presentation decks. In a real application, you would fetch this data from an API or database.
  const presentationDecks = [
    { id: 1, title: 'Introduction to Data Science', slug: 'intro-to-data-science' },
    { id: 2, title: 'Machine Learning in Practice', slug: 'machine-learning-practice' },
    { id: 3, title: 'Web Development Trends 2023', slug: 'web-dev-trends-2023' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Presentation Decks</h1>
        <p className="text-xl mb-8">Explore my latest presentation decks on various topics.</p>
        
        {presentationDecks.length > 0 ? (
          <ul className="space-y-6">
            {presentationDecks.map((deck) => (
              <li key={deck.id} className="border-b border-gray-700 pb-4">
                <Link href={`/resources/presentation-deck/${deck.slug}`} className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  {deck.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No presentation decks available at the moment. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default PresentationDeckPage;