'use client';

import { useState } from 'react';
import { Wand2, Code2, Database, Sparkles, Palette, Layers, Zap, Brain, Terminal, Globe, Cpu, Cloud, GitBranch, Blocks, Smartphone, Server } from 'lucide-react';

interface AITool {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: any;
  category: string;
}

const aiTools: AITool[] = [
  {
    id: 'v0',
    name: 'v0 by Vercel',
    description: 'Generate UI components with natural language prompts. Create production-ready React components instantly.',
    features: ['Natural language to code', 'React/Next.js components', 'Tailwind CSS styling', 'Instant preview'],
    icon: Wand2,
    category: 'UI Generation'
  },
  {
    id: 'cursor',
    name: 'Cursor IDE',
    description: 'AI-first code editor that understands your codebase and writes code alongside you.',
    features: ['Context-aware coding', 'Multi-file edits', 'Smart refactoring', 'Natural language commands'],
    icon: Terminal,
    category: 'AI Coding'
  },
  {
    id: 'claude',
    name: 'Claude Artifacts',
    description: 'Create interactive applications, visualizations, and prototypes with conversational AI.',
    features: ['Full app generation', 'Interactive components', 'Data visualization', 'Instant deployment'],
    icon: Brain,
    category: 'App Generation'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code completions and entire functions in real-time.',
    features: ['Code suggestions', 'Multi-language support', 'Test generation', 'Documentation writing'],
    icon: Code2,
    category: 'AI Coding'
  }
];

const saasComponents = [
  {
    title: 'Landing Pages',
    description: 'Generate complete landing pages with hero sections, features, pricing, and CTAs',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Dashboard UIs',
    description: 'Create data-rich dashboards with charts, tables, and real-time metrics',
    icon: Layers,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Authentication',
    description: 'Build secure auth flows with social logins and multi-factor authentication',
    icon: Server,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Database Schemas',
    description: 'Design and generate optimized database structures with relationships',
    icon: Database,
    gradient: 'from-orange-500 to-red-500'
  }
];

const workflowSteps = [
  {
    step: '01',
    title: 'Describe Your Vision',
    description: 'Use natural language to describe your application requirements and features',
    icon: Sparkles
  },
  {
    step: '02',
    title: 'AI Generation',
    description: 'AI generates complete components, pages, or entire applications instantly',
    icon: Wand2
  },
  {
    step: '03',
    title: 'Database Integration',
    description: 'Connect to PostgreSQL, MySQL, MongoDB, or Supabase with generated schemas',
    icon: Database
  },
  {
    step: '04',
    title: 'Deploy & Scale',
    description: 'One-click deployment to Vercel, Netlify, or your preferred cloud platform',
    icon: Cloud
  }
];

export default function WebDevelopmentPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'UI Generation', 'AI Coding', 'App Generation'];

  const filteredTools = selectedCategory === 'All'
    ? aiTools
    : aiTools.filter(tool => tool.category === selectedCategory);

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
              <span className="text-xs text-white/70 font-medium">AI-Powered Development</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Build with AI Magic
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto">
              Transform ideas into production-ready applications using AI. From UI generation to database design, build complete SaaS products in minutes, not months.
            </p>
          </div>

          {/* AI Workflow Process */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Development Workflow
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-purple-400/30">{step.step}</span>
                        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-white/60">{step.description}</p>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-purple-400/30">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SaaS Components Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Generate SaaS Components
              </span>
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              Build complete SaaS applications with AI-generated components that connect seamlessly to your database
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {saasComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${component.gradient} bg-opacity-20 mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {component.title}
                    </h3>
                    <p className="text-sm text-white/60">{component.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Tools Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Development Tools
              </span>
            </h2>
            <p className="text-center text-white/60 mb-8 max-w-2xl mx-auto">
              Leverage cutting-edge AI tools to accelerate your development workflow
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-purple-400/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTools.map(tool => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.id}
                    className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                        <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs text-purple-400">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/60 mb-4">{tool.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Database Integration Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
                  <Database className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-white/70 font-medium">Database Integration</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Seamless Database Connections
                  </span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Connect your AI-generated applications to any database. Generate schemas, migrations, and ORM models automatically.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Prisma', 'Firebase', 'Redis', 'DynamoDB'].map((db, index) => (
                  <div
                    key={index}
                    className="bg-black/30 border border-purple-400/10 rounded-xl p-4 text-center hover:border-purple-400/30 hover:bg-purple-500/5 transition-all duration-300"
                  >
                    <Database className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <span className="text-sm text-white/70">{db}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Development Features
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6">
                <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Instant Generation</h3>
                <p className="text-white/60 text-sm">Generate complete applications in seconds with natural language prompts</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6">
                <Palette className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Beautiful UI/UX</h3>
                <p className="text-white/60 text-sm">AI creates modern, responsive designs following best practices</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6">
                <GitBranch className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Version Control</h3>
                <p className="text-white/60 text-sm">Git integration with AI-powered commit messages and PR descriptions</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6">
                <Blocks className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Component Library</h3>
                <p className="text-white/60 text-sm">Reusable AI-generated components for consistent design system</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6">
                <Smartphone className="w-10 h-10 text-pink-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Mobile Responsive</h3>
                <p className="text-white/60 text-sm">Automatically responsive designs that work on all devices</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6">
                <Cpu className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Performance</h3>
                <p className="text-white/60 text-sm">Optimized code generation with best performance practices</p>
              </div>
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
                <span className="text-xs text-white/70 font-medium">Let's Build with AI</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to 10x Your Development Speed?
                </span>
              </h2>

              <p className="text-white/80 mb-3 text-lg">
                Ship faster with AI-powered development
              </p>

              <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
                From idea to production in hours, not weeks. Let AI handle the boilerplate
                while you focus on what makes your product unique.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/resources/contact-form"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Start Building with AI
                </a>
                <a
                  href="/resources/case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  View AI Projects
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}