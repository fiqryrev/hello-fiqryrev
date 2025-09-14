'use client';

import React from 'react';
import { Search, Brain, Database, Zap, Layers, GitBranch, ArrowRight, CheckCircle, Sparkles, Code, Server, Shield } from 'lucide-react';
import Link from 'next/link';

const SearchRetrievalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">AI-Powered Search Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Search & Retrieval Systems
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto">
              Build intelligent search systems with vector embeddings, semantic search, and AI-powered retrieval
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Search className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">&lt;50ms</div>
              <div className="text-sm text-white/60">Query Latency</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">99%</div>
              <div className="text-sm text-white/60">Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Database className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">1B+</div>
              <div className="text-sm text-white/60">Vectors</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">10x</div>
              <div className="text-sm text-white/60">Faster Retrieval</div>
            </div>
          </div>

          {/* Vector Search Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vector Search & Embedding Solutions
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Semantic Search */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Semantic Search Engine</h3>
                    <span className="text-xs text-purple-400">Understanding Context & Intent</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  AI-powered search that understands meaning, not just keywords, using state-of-the-art embeddings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Multi-lingual embedding models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Context-aware ranking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Query expansion & synonyms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Intent classification</span>
                  </li>
                </ul>
              </div>

              {/* Hybrid Search */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Layers className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Hybrid Search System</h3>
                    <span className="text-xs text-purple-400">Best of Both Worlds</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Combine vector similarity with traditional search for optimal results across all query types.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">BM25 + Vector fusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Reciprocal rank fusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Dynamic weight optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Faceted filtering</span>
                  </li>
                </ul>
              </div>

              {/* RAG Implementation */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">RAG Systems</h3>
                    <span className="text-xs text-purple-400">Retrieval Augmented Generation</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Build intelligent Q&A systems that retrieve relevant context for accurate LLM responses.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Document chunking strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Context window optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Multi-hop reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Source attribution</span>
                  </li>
                </ul>
              </div>

              {/* Image & Multimodal Search */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Multimodal Search</h3>
                    <span className="text-xs text-purple-400">Text, Image & Beyond</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Search across different data modalities using CLIP and multimodal embeddings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Text-to-image search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Image similarity search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Cross-modal retrieval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Video frame search</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Vector Database Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vector Database Infrastructure
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* MongoDB Atlas */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">MongoDB Atlas</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Document database with native vector search capabilities for AI applications.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Vector Search indexes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Atlas Search integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Flexible data model</span>
                  </li>
                </ul>
              </div>

              {/* Pinecone */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Pinecone</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Fully managed vector database with seamless scaling and high performance.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Serverless architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Real-time indexing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Metadata filtering</span>
                  </li>
                </ul>
              </div>

              {/* Weaviate */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Weaviate</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Open-source vector database with built-in ML models and hybrid search.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">GraphQL API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Module ecosystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Multi-tenancy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <h3 className="text-xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Also Supporting
                </span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <Server className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-white/70">ChromaDB</p>
                </div>
                <div>
                  <Database className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-white/70">Milvus</p>
                </div>
                <div>
                  <Code className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-white/70">FAISS</p>
                </div>
                <div>
                  <GitBranch className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-white/70">Elasticsearch</p>
                </div>
              </div>
            </div>
          </section>

          {/* Embedding Models */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Embedding Models & Technologies
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Text Embeddings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">OpenAI text-embedding-3</span>
                    <span className="text-xs text-purple-400">3072 dims</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">Cohere Embed v3</span>
                    <span className="text-xs text-purple-400">1024 dims</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">Google Vertex AI Embeddings</span>
                    <span className="text-xs text-purple-400">768 dims</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">Sentence Transformers</span>
                    <span className="text-xs text-purple-400">384-768 dims</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Multimodal Embeddings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">CLIP (OpenAI)</span>
                    <span className="text-xs text-purple-400">Text + Image</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">ALIGN (Google)</span>
                    <span className="text-xs text-purple-400">Cross-modal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">ImageBind (Meta)</span>
                    <span className="text-xs text-purple-400">6 modalities</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">Gemini Vision</span>
                    <span className="text-xs text-purple-400">Text + Vision</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Implementation Process
              </span>
            </h2>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Data Analysis", desc: "Content profiling & requirements" },
                  { step: "2", title: "Model Selection", desc: "Choose optimal embeddings" },
                  { step: "3", title: "Infrastructure", desc: "Deploy vector database" },
                  { step: "4", title: "Optimization", desc: "Fine-tune & scale" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-400 font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real-World Applications
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: "E-commerce Search",
                  description: "Product discovery with visual and semantic search"
                },
                {
                  icon: Brain,
                  title: "Knowledge Base Q&A",
                  description: "Intelligent document retrieval and answering"
                },
                {
                  icon: Database,
                  title: "Content Recommendation",
                  description: "Personalized content discovery systems"
                },
                {
                  icon: Shield,
                  title: "Fraud Detection",
                  description: "Similarity-based anomaly detection"
                },
                {
                  icon: Code,
                  title: "Code Search",
                  description: "Semantic code similarity and retrieval"
                },
                {
                  icon: Sparkles,
                  title: "Customer Support",
                  description: "Smart ticket routing and solution matching"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/60 text-sm">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

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
          <section className="text-center">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-white/70 font-medium">Elevate Your Search</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Build Intelligent Search Systems
                </span>
              </h2>

              <p className="text-white/80 mb-3 text-lg">
                Transform how users discover and retrieve information
              </p>

              <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
                Whether you need semantic search, RAG implementation, or multimodal retrieval,
                I&apos;ll help you build search systems that understand context and deliver relevant results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/contact-form"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Start Your Search Project
                </Link>
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchRetrievalPage;