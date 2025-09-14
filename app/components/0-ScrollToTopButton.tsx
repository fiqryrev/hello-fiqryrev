'use client'

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Don't render on server to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-0'}
      `}
    >
      {/* Outer glow container */}
      <div className="relative group">
        {/* Animated galaxy ring */}
        <div className="
          absolute inset-0 rounded-full
          bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
          animate-spin-slow opacity-75 blur-md
          group-hover:opacity-100 transition-opacity duration-300
        " />

        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-14 h-14 -rotate-90 pointer-events-none"
          viewBox="0 0 56 56"
        >
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 24}`}
            strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-100"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Main button */}
        <div className="
          relative w-14 h-14 rounded-full
          bg-gradient-to-br from-purple-900/80 via-purple-800/80 to-pink-900/80
          backdrop-blur-xl border border-purple-400/20
          shadow-[0_0_20px_rgba(168,85,247,0.4)]
          group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
          group-hover:border-purple-400/40
          transition-all duration-300
          flex items-center justify-center
          overflow-hidden
        ">
          {/* Starfield effect */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-2 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
            <div className="absolute top-5 right-4 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse delay-75" />
            <div className="absolute bottom-3 left-5 w-0.5 h-0.5 bg-pink-300 rounded-full animate-pulse delay-150" />
            <div className="absolute bottom-5 right-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300" />
          </div>

          {/* Icon */}
          <svg
            className="w-6 h-6 text-white relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>

          {/* Hover shine effect */}
          <div className="
            absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent
            translate-y-full group-hover:translate-y-0
            transition-transform duration-500
          " />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="
            absolute -top-1 left-1/2 w-1 h-1 bg-purple-400 rounded-full
            animate-float-up opacity-0 group-hover:opacity-100
          " />
          <div className="
            absolute -top-1 left-1/3 w-1 h-1 bg-pink-400 rounded-full
            animate-float-up opacity-0 group-hover:opacity-100 delay-100
          " />
          <div className="
            absolute -top-1 right-1/3 w-1 h-1 bg-purple-300 rounded-full
            animate-float-up opacity-0 group-hover:opacity-100 delay-200
          " />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTopButton;