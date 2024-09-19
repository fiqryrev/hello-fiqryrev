"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import ShimmerButton from '../../components/ui/shimmer-button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black bg-opacity-50' : 'bg-black'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
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
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-gray-300">
                <span>Portfolio</span>
                <ChevronDown size={20} />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link href="/portfolio/project1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Project 1</Link>
                  <Link href="/portfolio/project2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Project 2</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-gray-300">
                <span>Blog</span>
                <ChevronDown size={20} />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
                  <Link href="/docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentation</Link>
                </div>
              </div>
            </div>
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
    </header>
  );
};

export default Header;