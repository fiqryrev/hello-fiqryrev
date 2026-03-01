'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Database, BarChart3, Layers, GitBranch, Code2, Shield, Sparkles } from 'lucide-react';
import { SolutionHeader, GradientSeparator, SolutionCTA } from '@/app/solutions/_components'

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

const categoryIcons: { [key: string]: React.ElementType } = {
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
          <SolutionHeader
            badgeText="Business Intelligence & Analytics"
            title="Data Stack Components"
            subtitle="Best-of-breed production-ready data tools and frameworks preconfigured to work seamlessly on your data platform"
          />

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

          <GradientSeparator />

          <SolutionCTA
            badgeText="Let's Build Together"
            headline="Need Custom Analytics Solutions?"
            tagline="Transform your data into actionable insights"
            body="Whether you need a complete BI platform or integration of specific tools, I'll help you build the perfect analytics stack for your business."
            primaryHref="/resources/contact-form"
            primaryLabel="Get Started"
            secondaryHref="/resources/case-studies"
            secondaryLabel="View Case Studies"
            className="mb-16"
          />
        </div>
      </div>
    </div>
  );
}
