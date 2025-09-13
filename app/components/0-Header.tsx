"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (submenu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubmenu(submenu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null); // Close any open submenu when toggling mobile menu
  };

  const handleMobileSubmenuToggle = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const SolutionsMenuItem: React.FC<{ icon: string; text: string; description: string; href: string }> = ({ icon, text, description, href }) => (
    <Link href={href} className="block group" onClick={closeMobileMenu}>
      <div className="flex items-start p-3 hover:bg-gray-800/50 transition-all duration-300 h-full bg-gray-900/95 m-0.5 rounded-lg border border-gray-700/50 hover:border-blue-500/30">
        <div className="w-7 h-7 mr-2.5 flex items-center justify-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
          <span className="text-xs">{icon}</span>
        </div>
        <div className="flex-grow">
          <h3 className="text-xs font-semibold text-white font-lato group-hover:text-blue-400 transition-colors duration-300">{text}</h3>
          <p className="text-[10px] text-gray-400 mt-0.5 font-lato leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </Link>
  );

  const SolutionsSubMenu: React.FC<{ items: { icon: string; text: string; description: string; href: string }[] }> = ({ items }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 p-1">
      {items.map((item, index) => (
        <div key={index} className="w-full">
          <SolutionsMenuItem icon={item.icon} text={item.text} description={item.description} href={item.href} />
        </div>
      ))}
    </div>
  );

  const ResourcesMenuItem: React.FC<{ icon: string; text: string; description: string; href: string }> = ({ icon, text, description, href }) => (
    <Link href={href} className="block group" onClick={closeMobileMenu}>
      <div className="flex items-start p-3 hover:bg-gray-800/50 transition-all duration-300 bg-gray-900/95 m-0.5 rounded-lg border border-gray-700/50 hover:border-blue-500/30">
        <div className="w-7 h-7 mr-2.5 flex items-center justify-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
          <span className="text-xs">{icon}</span>
        </div>
        <div>
          <h3 className="text-xs font-semibold text-white font-lato group-hover:text-blue-400 transition-colors duration-300">{text}</h3>
          <p className="text-[10px] text-gray-400 mt-0.5 font-lato leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </Link>
  );

  const ResourcesSubMenu: React.FC = () => (
    <div className="flex flex-col md:flex-row p-1">
      <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-0">
        {resourcesItems.map((item, index) => (
          <div key={index} className="w-full">
            <ResourcesMenuItem icon={item.icon} text={item.text} description={item.description} href={item.href} />
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/4 flex">
        <Link href="/resources/case-studies/multimodal-ocr" className="flex items-center w-full group" onClick={closeMobileMenu}>
          <div className="flex items-center w-full bg-gray-900/95 m-0.5 rounded-lg border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/50 transition-all duration-300">
            <div className="w-1/3 h-full flex items-center justify-center p-3">
              <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src="/images/articles/gcp_logo.png"
                  alt="Case Study Preview"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="w-2/3 p-3">
              <h3 className="text-xs font-bold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-300">CASE STUDY</h3>
              <p className="text-[10px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                How Multimodal OCR able to cut manual document processing time up to 90%
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

  const solutionsItems = [
    { icon: "💻", text: "Data and AI Products", description: "Build the ideal product from AI", href: "/solutions/data-ai-product" },
    { icon: "🔧", text: "Data Platform and Engineering", description: "Build robust data infrastructure and pipelines", href: "/solutions/data-platform-engineering" },
    { icon: "🔍", text: "Search and Retrieval", description: "Implement efficient search systems for your data", href: "/solutions/search-retrieval" },
    { icon: "📊", text: "Business Intelligence and Analytics", description: "Gain insights from your data with advanced analytics", href: "/solutions/bi-analytics" },
    { icon: "🔒", text: "Data Governance and Security", description: "Ensure data compliance and security across your organization", href: "/solutions/data-governance-security" },
    { icon: "🌐", text: "Web Development", description: "Create modern, responsive web applications", href: "/solutions/web-development" },
  ];

  const resourcesItems = [
    { icon: "📝", text: "Blog", description: "Latest news, tips, and best practices", href: "/resources/blog" },
    { icon: "🎓", text: "Academics", description: "Academic publications and research", href: "/resources/academics" },
    { icon: "🎤", text: "Speakership Portfolio", description: "Speaking engagements and presentations", href: "/resources/speakership" },
    { icon: "💡", text: "Case Studies", description: "Real-world implementation stories", href: "/resources/case-studies" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-lato p-4" ref={headerRef}>
      <div className={`relative mx-auto max-w-7xl transition-all duration-300 ${isScrolled ? 'backdrop-blur-2xl bg-white/10 shadow-2xl' : 'backdrop-blur-xl bg-white/5'} rounded-2xl border border-white/20`} onMouseLeave={handleMouseLeave}>
        {/* Menu box with glassmorphism */}
        <div className="w-full h-16">
          <nav className="px-6 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Left space (logo) */}
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold tracking-wider">FIQRYREV</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-white">
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Desktop menu with modern styling */}
              <div className="hidden md:flex justify-center items-center space-x-8">
                <Link href="/" className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105">
                  Home
                </Link>
                <div className="relative" onMouseEnter={() => handleMouseEnter('solutions')}>
                  <button className="flex items-center space-x-1 text-white/90 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105">
                    <span>Solutions</span>
                    <ChevronDown size={16} className="transition-transform duration-300" />
                  </button>
                </div>
                <div className="relative" onMouseEnter={() => handleMouseEnter('resources')}>
                  <button className="flex items-center space-x-1 text-white/90 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105">
                    <span>Resources</span>
                    <ChevronDown size={16} className="transition-transform duration-300" />
                  </button>
                </div>
                <Link href="/about" className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105">
                  About
                </Link>
              </div>

              {/* CTA button with futuristic style */}
              <div className="hidden md:flex justify-end">
                <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                  Download CV
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile menu with glassmorphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
            <div className="px-4 pt-4 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300" onClick={closeMobileMenu}>Home</Link>
              <button onClick={() => handleMobileSubmenuToggle('solutions')} className="w-full text-left px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 flex items-center justify-between">
                Solutions
                <ChevronDown size={16} className={`transition-transform duration-300 ${activeSubmenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              <button onClick={() => handleMobileSubmenuToggle('resources')} className="w-full text-left px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 flex items-center justify-between">
                Resources
                <ChevronDown size={16} className={`transition-transform duration-300 ${activeSubmenu === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              <Link href="/about" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300" onClick={closeMobileMenu}>About</Link>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 hover:border-white/30 transition-all duration-300">
                Download CV
              </button>
            </div>
          </div>
        )}

        {/* Submenu with solid dark background */}
        {activeSubmenu && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-gray-950/98 shadow-2xl rounded-xl border border-gray-800 overflow-hidden">
            {/* Submenu content box */}
            <div className="w-full">
              {activeSubmenu === 'solutions' && <SolutionsSubMenu items={solutionsItems} />}
              {activeSubmenu === 'resources' && <ResourcesSubMenu />}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;