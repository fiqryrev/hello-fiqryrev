import type { Metadata } from 'next';
import Image from 'next/image'
import { Brain, Zap, TrendingUp, Shield, Database, ArrowRight, CheckCircle, GitBranch } from 'lucide-react'
import Link from 'next/link'
import { SolutionHeader, MetricsGrid, GradientSeparator, SolutionCTA } from '@/app/solutions/_components'

export const metadata: Metadata = {
  title: 'Data & AI Product Solutions',
  description: 'AI-powered data products and intelligent automation solutions by Fiqry Revadiansyah.',
};

export default function DataAIProduct() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <SolutionHeader
            badgeText="AI-Powered Solutions"
            title="Data & AI Products"
            subtitle="Transform your business with intelligent solutions powered by cutting-edge AI and data engineering"
          />

          <MetricsGrid items={[
            { icon: Brain, value: "10+", label: "AI Models Deployed" },
            { icon: Zap, value: "90%", label: "Process Automation" },
            { icon: TrendingUp, value: "5x", label: "ROI Improvement" },
            { icon: Shield, value: "100%", label: "Data Security" },
          ]} />

          {/* Featured Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our AI & Data Solutions
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Solution 1: Multimodal OCR */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Intelligent Document Processing</h3>
                    <span className="text-xs text-purple-400">Powered by Google Gemini</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Transform unstructured documents into actionable data with our multimodal OCR solution.
                  Process receipts, invoices, and financial documents with 95% accuracy in under 10 seconds.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">90% reduction in processing time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Automatic categorization & validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Multi-language support</span>
                  </li>
                </ul>
                <Link href="/resources/case-studies/multimodal-ocr" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium">View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Solution 2: Predictive Analytics */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Predictive Analytics Platform</h3>
                    <span className="text-xs text-purple-400">ML-Powered Insights</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Leverage machine learning to forecast trends, detect anomalies, and optimize business decisions
                  with our comprehensive predictive analytics solution.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Time-series forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Anomaly detection algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Real-time dashboard integration</span>
                  </li>
                </ul>
                <button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Solution 3: RAG System */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">RAG-Powered Knowledge Base</h3>
                    <span className="text-xs text-purple-400">Retrieval Augmented Generation</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Build intelligent chatbots and Q&A systems that understand your business context with
                  our RAG implementation using LangChain and vector databases.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Semantic search capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Context-aware responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Multi-source data integration</span>
                  </li>
                </ul>
                <button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Solution 4: Data Pipeline Automation */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Automated Data Pipelines</h3>
                    <span className="text-xs text-purple-400">ETL/ELT Orchestration</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Streamline your data flow with automated pipelines using Apache Airflow, dbt, and
                  cloud-native solutions for reliable data processing at scale.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Real-time & batch processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Data quality monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Automated error recovery</span>
                  </li>
                </ul>
                <button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powered by Industry-Leading Technologies
              </span>
            </h2>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                <div className="w-32 h-12 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/images/tech/gcp_logo.png"
                    alt="Google Cloud Platform"
                    fill
                    className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="w-32 h-12 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/images/tech/google-bigquery-logo-1.png"
                    alt="BigQuery"
                    fill
                    className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="w-32 h-12 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/images/tech/google_vertex_logo.png"
                    alt="Vertex AI"
                    fill
                    className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="w-32 h-12 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/images/tech/google_gemini_logo.png"
                    alt="Gemini"
                    fill
                    className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="w-32 h-12 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/images/tech/langchain_logo.png"
                    alt="LangChain"
                    fill
                    className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="w-32 h-12 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/images/tech/python_logo.png"
                    alt="Python"
                    fill
                    className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Implementation Process
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-400 font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Discovery & Analysis</h3>
                <p className="text-white/60 text-sm">Understand your business needs, data landscape, and define success metrics</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Design & Architecture</h3>
                <p className="text-white/60 text-sm">Create scalable solution architecture tailored to your requirements</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Build & Deploy</h3>
                <p className="text-white/60 text-sm">Implement solution with best practices and deploy to production</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-400 font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Monitor & Optimize</h3>
                <p className="text-white/60 text-sm">Continuous monitoring, optimization, and support for peak performance</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-12 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose Our AI Solutions?
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Google Cloud Partner Expertise</h3>
                      <p className="text-white/60 text-sm">Certified expertise in GCP, BigQuery, Vertex AI, and Gemini implementations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">End-to-End Solutions</h3>
                      <p className="text-white/60 text-sm">From data engineering to AI deployment, we handle the complete lifecycle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Proven Track Record</h3>
                      <p className="text-white/60 text-sm">Successfully delivered solutions across finance, healthcare, and e-commerce</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Scalable Architecture</h3>
                      <p className="text-white/60 text-sm">Built for growth with cloud-native, serverless, and microservices approaches</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Security First</h3>
                      <p className="text-white/60 text-sm">Enterprise-grade security with data encryption and compliance standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Continuous Support</h3>
                      <p className="text-white/60 text-sm">Ongoing maintenance, monitoring, and optimization for peak performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <GradientSeparator />

          <SolutionCTA
            badgeText="Ready to Transform?"
            headline="Let's Build Your AI-Powered Future"
            tagline="Transform your data into competitive advantage"
            body="Whether you need document automation, predictive analytics, or custom AI solutions, I'm here to help you leverage the power of data and artificial intelligence."
            primaryHref="/resources/contact-form"
            primaryLabel="Start Your AI Journey"
            secondaryHref="/resources/case-studies"
            secondaryLabel="View Success Stories"
          />
        </div>
      </div>
    </div>
  )
}
