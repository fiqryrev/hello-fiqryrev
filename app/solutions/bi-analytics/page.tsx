'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  type?: string;
  partnerStatus?: string;
}

const tools: Tool[] = [
  {
    id: '1',
    name: 'Metabase',
    category: 'Business Intelligence',
    description: 'Simplify your data analysis with intuitive business intelligence dashboards',
    logo: '/images/tech/metabase_logo.png'
  },
  {
    id: '2',
    name: 'BigQuery',
    category: 'Data Warehouse',
    description: 'Serverless, highly scalable, and cost-effective cloud data warehouse',
    logo: '/images/tech/google-bigquery-logo-1.png',
    partnerStatus: 'OFFICIAL PARTNER'
  },
  {
    id: '3',
    name: 'dbt',
    category: 'Data Transformation',
    description: 'Transform your data by writing analytics code that lives in your warehouse',
    logo: '/images/tech/dbt_logo.png'
  },
  {
    id: '4',
    name: 'Airflow',
    category: 'Data Pipeline',
    description: 'Platform to programmatically author, schedule and monitor workflows',
    logo: '/images/tech/airflow_logo.png'
  },
  {
    id: '5',
    name: 'MongoDB',
    category: 'Database',
    description: 'Document-based distributed database built for modern applications',
    logo: '/images/tech/mongodb_logo.png'
  },
  {
    id: '6',
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Open source object-relational database system with reliability',
    logo: '/images/tech/postgres_logo.png'
  },
  {
    id: '7',
    name: 'FastAPI',
    category: 'API',
    description: 'Modern, fast web framework for building APIs with Python',
    logo: '/images/tech/fastapi_logo.png'
  },
  {
    id: '8',
    name: 'Neo4j',
    category: 'Database',
    description: 'Native graph database platform for connected data insights',
    logo: '/images/tech/neo4j_logo.png'
  }
];

const categories = [
  'All',
  'Business Intelligence',
  'Data Warehouse',
  'Data Pipeline',
  'Data Transformation',
  'Database',
  'API',
  'Security'
];

export default function DataStackPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            EXPLORE DATA STACK COMPONENTS
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Use best-of-breed production-ready data tools and frameworks preconfigured to work seamlessly on your data platform.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex gap-8 mb-8">
          {/* Category Sidebar */}
          <div className="w-64 flex-shrink-0">
            <h3 className="text-lg font-semibold mb-4">CATEGORY</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search Stack Component..."
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <div
                  key={tool.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-700/50 transition-colors border border-gray-700/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 relative">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    {tool.partnerStatus && (
                      <span className="text-xs text-orange-400 bg-orange-900/30 px-2 py-1 rounded">
                        {tool.partnerStatus}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <div className="text-sm text-gray-400 mb-2">{tool.category}</div>
                  <p className="text-gray-300 text-sm">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
