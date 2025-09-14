'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { RainbowButton } from '../../components/ui/rainbow-button';

const ParticleEffect = () => {
  useEffect(() => {
    const container = document.querySelector('.particle-container');
    if (!container) return;

    const maxParticles = 50;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    };

    const particleInterval = setInterval(() => {
      if (container.children.length < maxParticles) {
        createParticle();
      }
    }, 200);

    return () => clearInterval(particleInterval);
  }, []);

  return <div className="particle-container"></div>;
};

const ImageSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const updatePosition = (clientX: number) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
      }
    };

    const handleMouseDown = () => {
      setIsDragging(true);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (isDragging) {
        updatePosition(e.clientX);
      }
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    };

    const handleClick = (e: React.MouseEvent) => {
      updatePosition(e.clientX);
    };

    useEffect(() => {
      const handleGlobalMouseUp = () => {
        setIsDragging(false);
      };

      if (isDragging) {
        document.addEventListener('mouseup', handleGlobalMouseUp);
        document.addEventListener('mouseleave', handleGlobalMouseUp);
      }

      return () => {
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        document.removeEventListener('mouseleave', handleGlobalMouseUp);
      };
    }, [isDragging]);

    return (
      <div
        ref={sliderRef}
        className="relative w-full aspect-video overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* After image (right side) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/articles/datawarehouse_after.png"
            alt="After"
            fill
            className="object-contain"
            draggable={false}
          />
        </div>

        {/* Before image (left side) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative h-full" style={{
              width: `${(100 / sliderPosition) * 100}%`,
              maxWidth: 'none'
            }}>
            <Image
              src="/images/articles/datawarehouse_before.png"
              alt="Before"
              fill
              className="object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-r from-purple-400 to-pink-400 cursor-ew-resize shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 12L4 8m0 0l4-4m-4 4h16m0 0l-4 4m4-4l-4-4" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20">
          Before
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20">
          After
        </div>
      </div>
    );
};

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white relative w-full m-0 p-0">
      <ParticleEffect />
      <div className="relative z-10 pt-24">
        <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
          {/* Professional Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">Innovation Leader</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Fiqry
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light mb-8">
              Elevating Your Vision with Data and AI Innovation
            </p>
          </div>

          {/* Main Content Section with Glassmorphism */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Mission
              </h2>
              <p className="text-white/70 leading-relaxed">
                I leverage cutting-edge technologies to solve complex challenges. From advanced analytics to AI-powered automation, my work bridges the gap between innovation and impact. Together, we create solutions that transform businesses into data-driven powerhouses.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Vision
              </h2>
              <p className="text-white/70 leading-relaxed">
                Building the future of intelligent systems, starting today. I envision a world where data and AI seamlessly integrate into every business process, enabling unprecedented efficiency, innovation, and growth across all industries.
              </p>
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

          {/* Case Study Section with Glassmorphism */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 mb-4 text-xs font-medium text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/30">
                  Featured Case Study
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Modernize Data Warehouse Architecture
                  </span>
                </h2>
                <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Revolutionizing data infrastructure for top tech companies through AI-powered automation, advanced data governance, and cutting-edge machine learning. This transformation integrates tools like dbt and Google Gemini for automated SQL generation, metadata management, and real-time data processing.
                </p>
              </div>

              {/* Image Slider with Border */}
              <div className="rounded-xl overflow-hidden border border-purple-400/20 shadow-lg">
                <ImageSlider />
              </div>

              {/* Case Study Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">90%</div>
                  <div className="text-sm text-white/60">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">60%</div>
                  <div className="text-sm text-white/60">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-white/60">Real-time Analytics</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-white/60">Automated</div>
                </div>
              </div>
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
                <span className="text-xs text-white/70 font-medium">Available for Projects</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Empower Your Data & AI Journey
                </span>
              </h2>

              <p className="text-white/80 mb-3 text-lg">
                Seeking expertise for your data science, analytics, or AI engineering projects?
              </p>

              <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
                Discover strategies for automating data pipelines, advancing data governance, and harnessing machine learning to modernize your data architecture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RainbowButton href="/resources/contact-form">
                  Book a Project
                </RainbowButton>

                <a
                  href="/resources/contact-form"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  Let&apos;s Chat
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
