"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Sparkles, Globe, GitBranch, Send, MessageSquare } from 'lucide-react';

const HeroSectionNew: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholderQuestions = [
    "Ask me anything...",
    "What's Fiqry's experience with AI and machine learning?",
    "Tell me about his data engineering projects at Paper.id",
    "What are his key achievements in data science?",
    "How can Fiqry help with my data & AI initiatives?",
    "What speaking engagements has he done recently?"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderQuestions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [placeholderQuestions.length]);

  const roles = [
    { title: "Data Analytics", icon: Brain, color: "from-blue-400 to-cyan-400" },
    { title: "Data Scientists", icon: Sparkles, color: "from-purple-400 to-pink-400" },
    { title: "Data Engineering", icon: Database, color: "from-green-400 to-emerald-400" },
    { title: "AI Engineering", icon: Globe, color: "from-blue-400 to-red-400" },
    { title: "AI Product Manager", icon: Globe, color: "from-orange-400 to-red-400" },
  ];

  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "25+", label: "Speaking Events" },
    { value: "5+", label: "Industries Covered" },
    { value: "10+", label: "Team Members Managed" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/images/background/blackhole.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[200%] object-cover opacity-70 absolute bottom-0 left-0"
          style={{ transform: 'translateY(50%)' }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 relative max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 md:mb-6 mt-8 md:mt-0 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-white/70 font-medium">Available for Consultation</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Fiqry Revadiansyah
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/80 mb-4 font-light"
          >
            Transforming Data into Intelligence
          </motion.p>

          {/* Role Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative flex items-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <role.icon className="w-4 h-4 text-white/70" />
                  <span className="text-sm text-white/90 font-medium">{role.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description - Simplified for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-base md:text-lg text-white/60 leading-relaxed hidden md:block">
              Data & AI executive with <span className="text-white/90 font-semibold">7+ years of experience</span> in Data Science, Analytics, and Engineering,
              currently leading AI and data innovation at <span className="text-white/90 font-semibold">Paper.id</span>.
              He has developed a diverse skill set across sectors such as financial technology, management consulting, e-commerce and beyond.
              Beyond his professional role, he has delivered over <span className="text-white/90 font-semibold">25+ national and international talks </span>
              and has served as an <span className="text-white/90 font-semibold">Advisory Board Member</span> for the Statistics Department at Universitas Padjadjaran,
              an <span className="text-white/90 font-semibold">Adjunct Assistant Lecturer</span> of a Master Degree of Faculty of Economy and Business at Universitas Indonesia,
              a <span className="text-white/90 font-semibold">Guest Lecturer</span> at the School of Business and Management, Institut Teknologi Bandung, and many more.
            </p>
            {/* Mobile version - shorter */}
            <p className="text-base text-white/60 leading-relaxed md:hidden">
              Data & AI executive with <span className="text-white/90 font-semibold">7+ years of experience</span>,
              currently leading AI and data innovation at <span className="text-white/90 font-semibold">Paper.id</span>.
              <span className="text-white/90 font-semibold"> 25+ speaker</span> & educator at multiple universities.
            </p>
          </motion.div>

          {/* Chat Bar - Ask Me Anything */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center mb-12 md:mb-16 px-4"
          >
            <div className="relative w-full max-w-2xl">
              <div
                className={`
                  relative flex items-center gap-3 px-6 py-4
                  bg-black/40 backdrop-blur-md
                  border rounded-2xl
                  transition-all duration-300
                  ${isFocused
                    ? 'border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]'
                    : 'border-white/20 hover:border-purple-400/30'
                  }
                `}
              >
                <MessageSquare className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={placeholderQuestions[placeholderIndex]}
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 text-base transition-all duration-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && chatInput.trim()) {
                      // Handle send message
                      window.location.href = `/resources/contact-form?message=${encodeURIComponent(chatInput)}`;
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (chatInput.trim()) {
                      window.location.href = `/resources/contact-form?message=${encodeURIComponent(chatInput)}`;
                    }
                  }}
                  className={`
                    p-2 rounded-lg transition-all duration-200
                    ${chatInput.trim()
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }
                  `}
                  disabled={!chatInput.trim()}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-center text-white/40 text-xs mt-3">
                Press Enter to send or click the arrow
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Tech Icons - Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 opacity-10"
          >
            <Code2 className="w-24 h-24 text-blue-400" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 opacity-10"
          >
            <Database className="w-32 h-32 text-purple-400" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-20 opacity-10"
          >
            <GitBranch className="w-20 h-20 text-pink-400" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30"></div>
    </section>
  );
};

export default HeroSectionNew;