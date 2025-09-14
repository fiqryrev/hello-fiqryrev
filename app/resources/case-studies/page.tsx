import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, Clock, Sparkles } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'How Multimodal OCR Cut Manual Document Processing Time by 90%',
      description: 'Learn how we leveraged Google Gemini Flash Multimodal LLM to automate financial document processing, reducing manual input time from 10 minutes to just 10 seconds.',
      image: '/images/articles/resources-casestudies-multimodal-receipt.png',
      link: '/resources/case-studies/multimodal-ocr',
      tags: ['AI/ML', 'OCR', 'Finance', 'Automation'],
      stats: {
        improvement: '90%',
        timeReduced: '10min → 10sec'
      }
    },
    // Add more case studies here as they are created
  ];

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
              <span className="text-xs text-white/70 font-medium">Real-World Impact</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto">
              Discover how data and AI solutions transform businesses through real implementation stories
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <Link href={study.link} key={index}>
                <div className="group bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 z-20 flex gap-4">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-400/30">
                        <div className="text-2xl font-bold text-purple-400">{study.stats.improvement}</div>
                        <div className="text-xs text-white/60">Improvement</div>
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-400/30">
                        <div className="text-sm font-bold text-purple-400">{study.stats.timeReduced}</div>
                        <div className="text-xs text-white/60">Time Saved</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {study.title}
                    </h2>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-purple-500/10 border border-purple-400/20 text-purple-400 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm font-medium">Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-white/70 font-medium">Coming Soon</span>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                More Case Studies in Progress
              </span>
            </h2>

            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              We&apos;re documenting more success stories from our data and AI implementations.
              Check back soon for insights on data platform modernization, ML model deployments, and business intelligence transformations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/10">
                <FileText className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                <h3 className="text-white/80 font-medium mb-2">Data Platform Migration</h3>
                <p className="text-white/50 text-sm">Cloud-native architecture transformation</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/10">
                <Clock className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                <h3 className="text-white/80 font-medium mb-2">Real-time Analytics</h3>
                <p className="text-white/50 text-sm">Streaming data pipeline implementation</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/10">
                <Sparkles className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                <h3 className="text-white/80 font-medium mb-2">AI Product Launch</h3>
                <p className="text-white/50 text-sm">End-to-end ML product development</p>
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
          <section className="text-center">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-white/70 font-medium">Let&apos;s Build Together</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Have a Challenge to Solve?
                </span>
              </h2>

              <p className="text-white/80 mb-3 text-lg">
                Let&apos;s discuss how data and AI can transform your business
              </p>

              <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
                Whether you&apos;re looking to optimize operations, enhance customer experience, or build new data products,
                I&apos;m here to help turn your vision into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/contact-form"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Start a Project
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;