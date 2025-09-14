'use client';

import React from 'react';
import Image from 'next/image';
import { Database, Cloud, GitBranch, Cpu, Shield, Zap, Settings, ArrowRight, CheckCircle, Sparkles, BarChart3, Code, Layers } from 'lucide-react';
import Link from 'next/link';

const DataPlatformEngineeringPage: React.FC = () => {
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
              <span className="text-xs text-white/70 font-medium">Enterprise Data Infrastructure</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Data Platform Engineering
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto">
              Build robust, scalable data infrastructure across cloud platforms with AI-powered optimization
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Database className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">PB+</div>
              <div className="text-sm text-white/60">Data Processed</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
              <div className="text-sm text-white/60">Uptime SLA</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Cloud className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">3+</div>
              <div className="text-sm text-white/60">Cloud Platforms</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Settings className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">70%</div>
              <div className="text-sm text-white/60">Cost Reduction</div>
            </div>
          </div>

          {/* Cloud Platform Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Multi-Cloud Data Platform Expertise
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Google Cloud Platform */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 relative bg-black/30 rounded-lg p-2 border border-purple-400/10">
                    <Image
                      src="/images/tech/gcp_logo.png"
                      alt="Google Cloud Platform"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Google Cloud Platform</h3>
                    <span className="text-xs text-purple-400">Certified Partner</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  End-to-end data solutions on GCP with enterprise-grade security and scalability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">BigQuery data warehouse & analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Dataflow streaming pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Cloud Composer orchestration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Pub/Sub event streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Vertex AI integration</span>
                  </li>
                </ul>
              </div>

              {/* AWS */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 relative bg-black/30 rounded-lg p-2 border border-purple-400/10">
                    <Cloud className="w-full h-full text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Amazon Web Services</h3>
                    <span className="text-xs text-purple-400">Enterprise Solutions</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Scalable data infrastructure on AWS with cost-optimized architecture.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Redshift & Athena analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">S3 data lake architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">EMR big data processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Kinesis real-time streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Glue ETL pipelines</span>
                  </li>
                </ul>
              </div>

              {/* Databricks */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 relative bg-black/30 rounded-lg p-2 border border-purple-400/10">
                    <Database className="w-full h-full text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Databricks Lakehouse</h3>
                    <span className="text-xs text-purple-400">Unified Analytics Platform</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Modern lakehouse architecture combining data lake and warehouse capabilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Delta Lake implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Unity Catalog governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Spark optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">MLflow ML lifecycle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Photon acceleration</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Data Services
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI-Powered Data Warehouse */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI-Powered Data Warehouse</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Next-generation data warehousing with built-in AI capabilities for intelligent data management and automated optimization.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Auto-Optimization</h4>
                    <p className="text-xs text-white/60">Self-tuning queries & indexing</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Smart Caching</h4>
                    <p className="text-xs text-white/60">AI-driven cache management</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Anomaly Detection</h4>
                    <p className="text-xs text-white/60">Real-time data quality checks</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Predictive Scaling</h4>
                    <p className="text-xs text-white/60">Workload-based auto-scaling</p>
                  </div>
                </div>
              </div>

              {/* Agentic Query Engine */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Agentic Query Engine</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Natural language to SQL with intelligent query optimization and multi-source data federation powered by LLMs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">NL2SQL</h4>
                    <p className="text-xs text-white/60">Natural language queries</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Multi-Source</h4>
                    <p className="text-xs text-white/60">Cross-database queries</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Smart Routing</h4>
                    <p className="text-xs text-white/60">Optimal execution paths</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Context Aware</h4>
                    <p className="text-xs text-white/60">Business logic integration</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Automation */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Workflow Automation & Orchestration
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* N8N */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <GitBranch className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">N8N Workflows</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Visual workflow automation with 400+ integrations for seamless data flow.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">API integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Data transformations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Event-driven automation</span>
                  </li>
                </ul>
              </div>

              {/* Flowise */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Flowise AI</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Drag-and-drop AI workflow builder for LLM applications and chatbots.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">LLM chains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Vector stores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Custom agents</span>
                  </li>
                </ul>
              </div>

              {/* Apache Airflow */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Apache Airflow</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Enterprise-grade workflow orchestration for complex data pipelines.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">DAG scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Monitoring & alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-xs text-white/60">Dependency management</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Core Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Core Data Engineering Services
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: "Data Lake Architecture",
                  description: "Scalable storage solutions with schema-on-read capabilities"
                },
                {
                  icon: GitBranch,
                  title: "ETL/ELT Pipelines",
                  description: "Efficient data extraction, transformation, and loading processes"
                },
                {
                  icon: Zap,
                  title: "Real-time Streaming",
                  description: "Low-latency data processing with Kafka, Pub/Sub, and Kinesis"
                },
                {
                  icon: Shield,
                  title: "Data Governance",
                  description: "Compliance, security, and data quality management"
                },
                {
                  icon: BarChart3,
                  title: "Data Modeling",
                  description: "Dimensional modeling and schema design optimization"
                },
                {
                  icon: Code,
                  title: "API Development",
                  description: "RESTful and GraphQL APIs for data access"
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

          {/* Technology Stack */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-3">Languages</h3>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Python</li>
                    <li>• SQL</li>
                    <li>• Scala</li>
                    <li>• Java</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-3">Processing</h3>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Apache Spark</li>
                    <li>• Apache Beam</li>
                    <li>• Flink</li>
                    <li>• dbt</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-3">Storage</h3>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• PostgreSQL</li>
                    <li>• MongoDB</li>
                    <li>• Redis</li>
                    <li>• Elasticsearch</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-3">Tools</h3>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Docker</li>
                    <li>• Kubernetes</li>
                    <li>• Terraform</li>
                    <li>• GitOps</li>
                  </ul>
                </div>
              </div>
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
                <span className="text-xs text-white/70 font-medium">Ready to Scale?</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Build Your Modern Data Platform
                </span>
              </h2>

              <p className="text-white/80 mb-3 text-lg">
                Transform your data infrastructure with enterprise-grade solutions
              </p>

              <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
                Whether you need cloud migration, real-time analytics, or AI-powered data services,
                I&apos;ll help you build a robust, scalable data platform that drives business value.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/contact-form"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Start Your Data Journey
                </Link>
                <Link
                  href="/solutions/bi-analytics"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  Explore Analytics
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataPlatformEngineeringPage;