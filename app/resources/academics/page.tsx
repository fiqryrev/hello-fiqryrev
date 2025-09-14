import React from 'react';
import Image from 'next/image';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const AcademicsPage = () => {
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
            <span className="text-xs text-white/70 font-medium">Academic Excellence</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light">
            Research, Teaching, and Academic Contributions
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-purple-400" />
            Education
          </h2>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20"></div>
                <Image src="/images/speakership/speaker_unpad_logo.png" alt="University Logo" fill className="object-contain relative z-10" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Bachelor of Statistics
                </h3>
                <p className="text-white/70 mb-3">Universitas Padjadjaran, 2018</p>
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-purple-400/10">
                  <p className="text-white/80 text-sm leading-relaxed">
                    <span className="text-purple-400 font-semibold">Thesis:</span> The Application of Generalized Space Time Autoregressive Integrated (GSTARI) Model in Consumer Price Index (CPI) Forecasting in Four Cities of West Java Province Indonesia
                  </p>
                </div>
                <a
                  href="https://scholar.google.co.id/citations?user=dxZ3G84AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-400 hover:text-purple-300 hover:border-purple-400/50 transition-all duration-300 text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Contributions Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
            <Award className="w-8 h-8 text-purple-400" />
            Academic Contributions
          </h2>
          <div className="space-y-6">

            
            {/* Adjunct Assitant Lecturer at Universitas Indonesia */}
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-400/20">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Adjunct Assistant Lecturer at Universitas Indonesia</h3>
                  <p className="text-white/60 text-sm mb-3">Faculty of Economy and Business • Indonesia • August - December 2025</p>
                  <div className="bg-black/20 rounded-lg p-4 border border-purple-400/10">
                    <p className="text-white/70 text-sm leading-relaxed">
                      <span className="text-purple-400">Course:</span> Data Science for Business class, attended by master of accounting students
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      <span className="text-purple-400">Lecturer:</span> <a href="https://scholar.google.co.id/citations?hl=en&user=vvtytGIAAAAJ" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Yudhistira Dharma Putra, S.E., M.Sc.</a>
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      <span className="text-purple-400">Topics:</span> Data Science for Business on Economy and Accounting use cases
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Board */}
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-400/20">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Advisory Board at Universitas Padjadjaran</h3>
                  <p className="text-white/60 text-sm mb-3">Faculty of Mathematics and Natural Science • Indonesia • November 2022</p>
                  <div className="bg-black/20 rounded-lg p-4 border border-purple-400/10">
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      Suggest, recommend, and provide feedback about the department education curriculum by incorporating the latest industry-ready standards and the department identity and goal while implementing the OBE (Outcome-Based Education) method.
                    </p>
                    <a href="https://drive.google.com/file/d/1pjqVhxDs2UP9VOsnj_Ero2VwnxRl9Yzb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-colors">
                      📄 Official Letter of Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Lecturer at Universitas Negeri Malang */}
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-400/20">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Guest Lecturer at Universitas Negeri Malang</h3>
                  <p className="text-white/60 text-sm mb-3">Faculty of Mathematics and Natural Science • Indonesia • December 2022</p>
                  <div className="bg-black/20 rounded-lg p-4 border border-purple-400/10">
                    <p className="text-white/70 text-sm leading-relaxed">
                      <span className="text-purple-400">Course:</span> Computational Thinking, attended by 50+ master degree students
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      <span className="text-purple-400">Lecturer:</span> <a href="https://scholar.google.co.id/citations?hl=en&user=TLOoaa4AAAAJ" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Deny Setiawan, M.Pd.</a>
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      <span className="text-purple-400">Topics:</span> Introduction of artificial intelligence and its implementation in students majors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Lecturer at ITB */}
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-400/20">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Guest Lecturer at Institut Teknologi Bandung</h3>
                  <p className="text-white/60 text-sm mb-3">School of Business Management • Indonesia • April 2021</p>
                  <div className="bg-black/20 rounded-lg p-4 border border-purple-400/10">
                    <p className="text-white/70 text-sm leading-relaxed">
                      <span className="text-purple-400">Course:</span> MB1201 - Business Statistics: Statistics as Decision, Business, and Marketing Science in the Disruptive Industry
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      <span className="text-purple-400">Attendance:</span> 300+ bachelor degree students
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      <span className="text-purple-400">Lecturer:</span> <a href="https://scholar.google.co.id/citations?user=ku9d3YgAAAAJ&hl=id&oi=ao" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Meditya Wasesa, Ph.D.</a>
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      <span className="text-purple-400">Topics:</span> Business innovation, disruption, and statistical application in industries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CRAN Project */}
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-400/20">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">CRAN Project Contribution: gstar Package</h3>
                  <p className="text-white/60 text-sm mb-3">Comprehensive R Archive Network (CRAN) • June 2019</p>
                  <div className="bg-black/20 rounded-lg p-4 border border-purple-400/10">
                    <p className="text-white/70 text-sm leading-relaxed mb-2">
                      Developed and deployed an academic package for statistics on the CRAN Project, named gstar.
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      Multivariate time series analysis based on Generalized Space-Time Autoregressive Model by Ruchjana et al.(2012)
                      <a href="https://doi.org/10.1063%2F1.4724118" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 ml-1">doi:10.1063/1.4724118</a>
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://cran.r-project.org/web/packages/gstar/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                        📦 CRAN Package
                      </a>
                      <a href="https://drive.google.com/file/d/1pYAJMu0qPKrTabdoqJljfWRDqVdLmCP3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                        🔒 IPR Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-400" />
            Research Papers
          </h2>
          <div className="space-y-6">
            {/* IFCS Conference */}
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                  <span className="text-xl">🌍</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Oral Presentation at IFCS Conference 2019</h3>
                  <p className="text-white/60 text-sm mb-3">Thessaloniki Concert Hall, Greece • August 2019</p>
                  <div className="bg-black/20 rounded-lg p-4 border border-purple-400/10 mb-3">
                    <p className="text-purple-400 font-semibold text-sm mb-2">Research Title:</p>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      Double helix multi-stage text classification model to enhance chat user experience in e-commerce website
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Presented as the representative of PT.Bukalapak.com at the 16th Conference of the International Federation of Classification Societies. This presentation was part of a select data research project on Natural Language Processing (NLP).
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://link.springer.com/book/10.1007/978-3-030-60104-1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                      📖 Proceedings
                    </a>
                    <a href="https://www.flickr.com/photos/artion/albums/72157711054627826/page2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                      📷 Photos
                    </a>
                    <a href="https://drive.google.com/file/d/1cdL07v-VMeYraMRYd8-T1pvlfurMfF51/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                      🏆 Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ISASC 2017 */}
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                  <span className="text-xl">🇯🇵</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Oral Presentation at ISASC 2017</h3>
                  <p className="text-white/60 text-sm mb-3">Osaka University, Japan • October 2017</p>
                  <div className="bg-black/20 rounded-lg p-4 border border-purple-400/10 mb-3">
                    <p className="text-purple-400 font-semibold text-sm mb-2">Achievement:</p>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      Two research papers selected from the top 10 out of 94 submissions, covering topics in Humanities, Social Science, Politics, and Economics.
                    </p>
                    <div className="space-y-2">
                      <p className="text-white/70 text-sm">
                        <span className="text-purple-400">• Paper 1:</span> Application of Geographically Weighted Regression on Abating Poverty Problem in Indonesia Through 2030
                      </p>
                      <p className="text-white/70 text-sm">
                        <span className="text-purple-400">• Paper 2:</span> Indonesian Foreign Debt Optimization by QHM-ARIMA through 2030 as an Indonesian Demographic Bonus
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://drive.google.com/file/d/146VaRZrIC8aERQJ40PoLMmiwnUzmsfJy/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                      📷 Photos
                    </a>
                    <a href="https://drive.google.com/file/d/1yCr8BpvQQfpEJFg9IzKd3TFCEqcsfol5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                      🏆 Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CISAK 2017 */}
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                  <span className="text-xl">🇰🇷</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Poster Presentation at CISAK 2017</h3>
                  <p className="text-white/60 text-sm mb-3">UST Daejeon, South Korea • July 2017</p>
                  <div className="bg-black/20 rounded-lg p-4 border border-purple-400/10 mb-3">
                    <p className="text-purple-400 font-semibold text-sm mb-2">Research Title:</p>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      Application of Geographically Weighted Regression on Abating Poverty Problems in Indonesia Through 2030
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Selected as one of 88 research papers presented as a poster at the Conference of the Indonesian Student Association, held at the University of Science and Technology.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://scholar.google.co.id/citations?view_op=view_citation&hl=en&user=dxZ3G84AAAAJ&citation_for_view=dxZ3G84AAAAJ:u-x6o8ySG0sC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                      📝 Paper
                    </a>
                    <a href="https://www.linkedin.com/posts/fiqryrevadiansyah_finally-weve-been-finished-our-conference-activity-6294910440778620928-7dMp?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                      📷 Photos
                    </a>
                    <a href="https://drive.google.com/file/d/1xCHTsLT9ZzHRuZ_HEh8xcPZjndlgjw3y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-400 hover:text-purple-300 text-xs transition-colors">
                      🏆 Certificate
                    </a>
                  </div>
                </div>
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
        <section className="text-center mb-12">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">Open for Collaboration</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Collaborate on Cutting-Edge Research
              </span>
            </h2>

            <p className="text-white/80 mb-3 text-lg">
              Interested in advancing your projects in data science, analytics, or AI engineering?
            </p>

            <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
              Let&apos;s explore innovative strategies together—whether it&apos;s driving data automation, enhancing data governance, or pioneering machine learning solutions. I&apos;m excited to connect with new people and discuss impactful, industry-driven research ideas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RainbowButton href="/resources/contact-form">
                Start a Conversation
              </RainbowButton>

              <a
                href="/resources/speakership"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
              >
                View Speaking Events
              </a>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;