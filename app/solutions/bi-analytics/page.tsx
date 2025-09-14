'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Database, BarChart3, Layers, GitBranch, Server, Code2, Shield, Sparkles } from 'lucide-react';

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

const categoryIcons: { [key: string]: any } = {
  'All': Sparkles,
  'Business Intelligence': BarChart3,
  'Data Warehouse': Database,
  'Data Pipeline': GitBranch,
  'Data Transformation': Layers,
  'Database': Database,
  'API': Code2,
  'Security': Shield
};

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
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">Business Intelligence & Analytics</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Data Stack Components
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto">
              Best-of-breed production-ready data tools and frameworks preconfigured to work seamlessly on your data platform
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Category Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <h3 className="text-lg font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Filter by Category
                  </span>
                </h3>
                <div className="space-y-2">
                  {categories.map(category => {
                    const Icon = categoryIcons[category] || Sparkles;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                            : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-purple-400/20 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    type="text"
                    placeholder="Search Stack Component..."
                    className="w-full pl-12 pr-6 py-4 bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-400/40 hover:border-purple-400/30 transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTools.length > 0 ? (
                  filteredTools.map(tool => (
                    <div
                      key={tool.id}
                      className="group bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-14 w-14 relative bg-black/30 rounded-lg p-2 border border-purple-400/10">
                          <Image
                            src={tool.logo}
                            alt={tool.name}
                            fill
                            style={{ objectFit: 'contain' }}
                            className="p-1"
                          />
                        </div>
                        {tool.partnerStatus && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-full">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                            </span>
                            <span className="text-xs text-orange-400 font-medium">{tool.partnerStatus}</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {tool.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-400 mb-3">
                        {tool.category}
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{tool.description}</p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full">
                    <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-12 text-center">
                      <Database className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-white">No Components Found</h3>
                      <p className="text-white/60">Try adjusting your search or filter criteria</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Separator with Gradient */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-400/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black px-4">
                <span className="text-purple-400">✦</span>
              </span>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center mb-16">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-white/70 font-medium">Let's Build Together</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Need Custom Analytics Solutions?
                </span>
              </h2>

              <p className="text-white/80 mb-3 text-lg">
                Transform your data into actionable insights
              </p>

              <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
                Whether you need a complete BI platform or integration of specific tools,
                I'll help you build the perfect analytics stack for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/resources/contact-form"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/resources/case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
