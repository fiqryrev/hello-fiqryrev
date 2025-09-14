'use client';

import React from 'react';
import { RainbowButton } from '../../../components/ui/rainbow-button';

const SpeakershipPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        
        {/* Professional Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-xs text-white/70 font-medium">Speaker & Educator</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Speaking Engagements
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light">
            Sharing Knowledge, Inspiring Innovation
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">25+</h3>
            <p className="text-gray-400 text-sm mt-1">Speaking Events</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">7</h3>
            <p className="text-gray-400 text-sm mt-1">Years Experience</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">20K+</h3>
            <p className="text-gray-400 text-sm mt-1">Audience Reached</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">20+</h3>
            <p className="text-gray-400 text-sm mt-1">Organizations</p>
          </div>
        </div>

        {/* Separator with Gradient */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-400/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4">
              <span className="text-purple-400">★</span>
            </span>
          </div>
        </div>

        {/* Topics Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-white">Speaking Topics</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/20 rounded-full text-sm text-gray-200">Artificial Intelligence & Machine Learning</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/20 rounded-full text-sm text-gray-200">Data Science & Analytics</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/20 rounded-full text-sm text-gray-200">Large Language Models (LLM)</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/20 rounded-full text-sm text-gray-200">RAG & Vector Databases</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/20 rounded-full text-sm text-gray-200">MLOps & AI Infrastructure</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/20 rounded-full text-sm text-gray-200">Data Engineering & Platforms</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/20 rounded-full text-sm text-gray-200">Career Development in Tech</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/20 rounded-full text-sm text-gray-200">Python & R Programming</span>
          </div>
        </div>

        {/* Separator with Gradient */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-400/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4">
              <span className="text-purple-400">★</span>
            </span>
          </div>
        </div>

        {/* Speaking Engagements Section */}
        <section>
        <h2 className="text-2xl font-semibold mb-6 text-white">Recent Speaking Engagements</h2>
        <div className="text-center mb-6">
            <a href="https://speakerdeck.com/fiqryr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
              <span className="text-sm">View presentation slides on SpeakerDeck</span>
            </a>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm">
                    <th className="p-4 font-semibold text-white">Event Name</th>
                    <th className="p-4 font-semibold text-white">Role</th>
                    <th className="p-4 font-semibold text-white">Organizer</th>
                    <th className="p-4 font-semibold text-white">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">PKKMB Data Science 2025: The First Step into the Universe of Insight</td>
                    <td className="p-3 text-gray-200">Keynote Speaker</td>
                    <td className="p-3 text-gray-200">Telkom University Indonesia</td>
                    <td className="p-3 text-gray-200">Sep 2025</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">AWS Summit Jakarta 2025: Multi-agent Collaboration for Financial Services</td>
                    <td className="p-3 text-gray-200">Technical Speaker</td>
                    <td className="p-3 text-gray-200">Amazon Web Services</td>
                    <td className="p-3 text-gray-200">Aug 2025</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Data Governance and Indonesian Personal Data Protection Act</td>
                    <td className="p-3 text-gray-200">Webinar Speaker</td>
                    <td className="p-3 text-gray-200">Evermos Indonesia</td>
                    <td className="p-3 text-gray-200">Mar 2025</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">AI in Banking - Officer Development Program Batch 24</td>
                    <td className="p-3 text-gray-200">AI & Banking Speaker</td>
                    <td className="p-3 text-gray-200">Bank Syariah Indonesia</td>
                    <td className="p-3 text-gray-200">Jan 2025</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Fortex 5.0: Data Science Seminar</td>
                    <td className="p-3 text-gray-200">Industry Speaker</td>
                    <td className="p-3 text-gray-200">Universitas Al Azhar Indonesia</td>
                    <td className="p-3 text-gray-200">Jan 2025</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">AI in Banking - Officer Development Program Batch 22</td>
                    <td className="p-3 text-gray-200">AI & Banking Speaker</td>
                    <td className="p-3 text-gray-200">Bank Syariah Indonesia</td>
                    <td className="p-3 text-gray-200">Dec 2024</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Bitlabs Pitching Day 2024</td>
                    <td className="p-3 text-gray-200">Startup Judge</td>
                    <td className="p-3 text-gray-200">Bitlabs Indonesia</td>
                    <td className="p-3 text-gray-200">Dec 2024</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">AWS Community Day Jakarta 2024</td>
                    <td className="p-3 text-gray-200">Technical Speaker</td>
                    <td className="p-3 text-gray-200">AWS User Group Indonesia</td>
                    <td className="p-3 text-gray-200">Sep 2024</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Angelhacks Global Hackathon Indonesia 2024</td>
                    <td className="p-3 text-gray-200">Hackathon Judge</td>
                    <td className="p-3 text-gray-200">Angelhacks Global & Grab Indonesia</td>
                    <td className="p-3 text-gray-200">Jul 2024</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Data Analytics Excellence Program for IFG</td>
                    <td className="p-3 text-gray-200">Lead Instructor</td>
                    <td className="p-3 text-gray-200">Rakamin Academy & Indonesia Financial Group</td>
                    <td className="p-3 text-gray-200">Jul 2024</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Garudahacks 5.0 Indonesia Closing Ceremony</td>
                    <td className="p-3 text-gray-200">Industry Speaker</td>
                    <td className="p-3 text-gray-200">Garudahacks & Paper.id</td>
                    <td className="p-3 text-gray-200">Jul 2024</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">GDG DevFest Jakarta 2023</td>
                    <td className="p-3 text-gray-200">AI/ML Speaker</td>
                    <td className="p-3 text-gray-200">Google Developer Groups Jakarta</td>
                    <td className="p-3 text-gray-200">Nov 2023</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Big Data & AI for SDGs: Gen Z&apos;s Role (SEA Scale)</td>
                    <td className="p-3 text-gray-200">Panelist & Speaker</td>
                    <td className="p-3 text-gray-200">Universitas Padjadjaran</td>
                    <td className="p-3 text-gray-200">Oct 2023</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Data Analytics Bootcamp for Government Officials</td>
                    <td className="p-3 text-gray-200">Lead Instructor</td>
                    <td className="p-3 text-gray-200">Rakamin Academy & LKPP Indonesia</td>
                    <td className="p-3 text-gray-200">Jun 2023</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">TechTalk: Building Scalable AI Solutions</td>
                    <td className="p-3 text-gray-200">Technical Speaker</td>
                    <td className="p-3 text-gray-200">Tech in Asia Indonesia</td>
                    <td className="p-3 text-gray-200">Mar 2023</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">The Asterism Fragments of Data Science</td>
                    <td className="p-3 text-gray-200">Keynote Speaker</td>
                    <td className="p-3 text-gray-200">Institut Teknologi Telkom Purwokerto</td>
                    <td className="p-3 text-gray-200">Sep 2022</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Python Masterclass: From Zero to Hero</td>
                    <td className="p-3 text-gray-200">Workshop Instructor</td>
                    <td className="p-3 text-gray-200">Ajaib & DQLab</td>
                    <td className="p-3 text-gray-200">Aug 2022</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Data Visualization for Business Impact</td>
                    <td className="p-3 text-gray-200">Industry Expert</td>
                    <td className="p-3 text-gray-200">Glints Indonesia</td>
                    <td className="p-3 text-gray-200">Aug 2021</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Career in Tech: Orchestrating The Stellar Journey</td>
                    <td className="p-3 text-gray-200">Inspirational Speaker</td>
                    <td className="p-3 text-gray-200">SMA Kornita IPB Bogor</td>
                    <td className="p-3 text-gray-200">Jul 2021</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Actuarial Science & Data Science in Industry 4.0</td>
                    <td className="p-3 text-gray-200">Academic Speaker</td>
                    <td className="p-3 text-gray-200">Universitas Tanjungpura FMIPA</td>
                    <td className="p-3 text-gray-200">May 2021</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Passion Playground Festival</td>
                    <td className="p-3 text-gray-200">Tech Panelist</td>
                    <td className="p-3 text-gray-200">Vooya.ID</td>
                    <td className="p-3 text-gray-200">Nov 2020</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Kickstart Your Data Science Career</td>
                    <td className="p-3 text-gray-200">Career Coach</td>
                    <td className="p-3 text-gray-200">Bisasih Community Indonesia</td>
                    <td className="p-3 text-gray-200">Nov 2020</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Deep Dive into Facebook Prophet Model</td>
                    <td className="p-3 text-gray-200">Technical Workshop</td>
                    <td className="p-3 text-gray-200">Indonesia R Community & ML ID</td>
                    <td className="p-3 text-gray-200">Jun 2019</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="p-3 text-gray-200">Data Science Bootcamp - UGM Chapter</td>
                    <td className="p-3 text-gray-200">Lead Instructor</td>
                    <td className="p-3 text-gray-200">Bukalapak & Universitas Gadjah Mada</td>
                    <td className="p-3 text-gray-200">May 2019</td>
                </tr>
            </tbody>
            </table>
        </div>
        </section>

        {/* Separator with Gradient */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-400/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4">
              <span className="text-purple-400">✦</span>
            </span>
          </div>
        </div>

        {/* CTA Section with Glassmorphism */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">Available for Speaking</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Elevate Your Next Data & AI Event
              </span>
            </h2>

            <p className="text-white/80 mb-3 text-lg">
              Looking for an experienced speaker for your data science, analytics, or AI engineering event?
            </p>

            <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
              Available for workshops, seminars, and guest lectures at universities, corporate events, and tech conferences. Let's inspire your audience with cutting-edge insights and practical knowledge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RainbowButton href="/resources/contact-form">
                Book Me as Speaker
              </RainbowButton>

              <a
                href="/resources/contact-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
              >
                View Speaking Topics
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpeakershipPage;
