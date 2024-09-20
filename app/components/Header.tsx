"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import ShimmerButton from '../../components/ui/shimmer-button';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  const SolutionsMenuItem: React.FC<{ icon: string; text: string; description: string; href: string }> = ({ icon, text, description, href }) => (
    <Link href={href} className="block">
      <div className="flex items-start p-4 hover:bg-gray-700 transition-colors duration-200 h-full">
        <div className="w-6 h-6 mr-3 flex items-center justify-center bg-gray-600 rounded-full flex-shrink-0">
          <span className="text-xs">{icon}</span>
        </div>
        <div className="flex-grow">
          <h3 className="text-xs font-semibold text-white font-lato">{text}</h3>
          <p className="text-xs text-gray-300 mt-1 font-lato leading-tight">{description}</p>
        </div>
      </div>
    </Link>
  );

  const SolutionsSubMenu: React.FC<{ items: { icon: string; text: string; description: string; href: string }[] }> = ({ items }) => (
    <div className="grid grid-cols-3 gap-0">
      {items.map((item, index) => (
        <div key={index} className="w-[300px] border-r border-b border-gray-700 last:border-r-0">
          <SolutionsMenuItem icon={item.icon} text={item.text} description={item.description} href={item.href} />
        </div>
      ))}
    </div>
  );

  const ResourcesMenuItem: React.FC<{ icon: string; text: string; description: string; href: string }> = ({ icon, text, description, href }) => (
    <Link href={href} className="block">
      <div className="flex items-start p-4 hover:bg-gray-700 transition-colors duration-200">
        <div className="w-6 h-6 mr-3 flex items-center justify-center bg-gray-600 rounded-full flex-shrink-0">
          <span className="text-xs">{icon}</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white font-lato">{text}</h3>
          <p className="text-xs text-gray-300 mt-1 font-lato leading-tight">{description}</p>
        </div>
      </div>
    </Link>
  );

  const ResourcesSubMenu: React.FC = () => (
    <div className="flex">
      <div className="w-3/4 grid grid-cols-2 gap-0">
        <ResourcesMenuItem icon="📝" text="Blog" description="Read the writings about data, hobbies, etc" href="/blog" />
        <ResourcesMenuItem icon="🎓" text="Certifications" description="Get informed about my certifications" href="/certifications" />
        <ResourcesMenuItem icon="🖥️" text="Presentation Deck" description="Visit my latest presentation deck" href="/presentation-deck" />
        <ResourcesMenuItem icon="📊" text="Case Studies" description="Latest news, tips, and best practices" href="/case-studies" />
      </div>
      <div className="w-1/4 flex border-l border-gray-700">
        <Link href="/case-studies/multimodal-ocr" className="flex items-center w-full">
          <div className="w-1/3 h-full flex items-center justify-center p-2">
            <div className="relative w-full h-0 pb-[100%]">
              <Image
                src="/images/articles/gcp_logo.png"
                alt="Case Study Preview"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-sm font-bold text-white mb-2">CASE STUDY</h3>
            <p className="text-xs text-white leading-tight">
              How Multimodal OCR able to cut manual document processing time up to 90%
            </p>
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

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-lato">
      <div className="w-full bg-black" onMouseLeave={handleMouseLeave}>
        {/* Static background box */}
        <div className="w-full h-20"></div>
        
        {/* Menu box */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black w-3/4 h-20">
          <nav className="container mx-auto px-6 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Left space (25% for logo) */}
              <div className="w-1/4">
                <Link href="/" className="text-xl font-bold text-white">
                  Hello Fiqryrev!
                </Link>
              </div>

              {/* Middle space (50% for menu, center-aligned) */}
              <div className="w-1/2 flex justify-center space-x-6">
                <Link href="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
                <div className="relative" onMouseEnter={() => handleMouseEnter('solutions')}>
                  <button className="flex items-center space-x-1 text-white hover:text-gray-300">
                    <span>Solutions</span>
                    <ChevronDown size={20} />
                  </button>
                </div>
                <div className="relative" onMouseEnter={() => handleMouseEnter('resources')}>
                  <button className="flex items-center space-x-1 text-white hover:text-gray-300">
                    <span>Resources</span>
                    <ChevronDown size={20} />
                  </button>
                </div>
                <Link href="/about" className="text-white hover:text-gray-300">
                  About
                </Link>
              </div>

              {/* Right space (25% for CV button) */}
              <div className="w-1/4 flex justify-end">
                <ShimmerButton
                  shimmerColor="#ffffff33"
                  background="linear-gradient(#00000033, #00000033, #00000033)"
                >
                  Ask Me Anything
                </ShimmerButton>
              </div>
            </div>
          </nav>
        </div>

        {/* Submenu background box */}
        {activeSubmenu && (
          <div className="w-full bg-black">
            {/* Submenu content box */}
            <div className="mx-auto bg-black w-[900px]">
              <div className="w-full mx-auto">
                {activeSubmenu === 'solutions' && <SolutionsSubMenu items={solutionsItems} />}
                {activeSubmenu === 'resources' && <ResourcesSubMenu />}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;