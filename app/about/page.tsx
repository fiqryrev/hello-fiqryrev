'use client';

import React, { useState, useEffect, useRef } from 'react';
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
    const sliderRef = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (e: React.MouseEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
      }
    };
  
    const handleTouchMove = (e: React.TouchEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        setSliderPosition((x / rect.width) * 100);
      }
    };
  
    return (
      <div
        ref={sliderRef}
        className="relative w-full h-0 pb-[56.25%] overflow-hidden cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {/* 'After' image */}
          <div className="w-full h-full bg-contain bg-no-repeat bg-center" 
               style={{ backgroundImage: "url('/images/articles/datawarehouse_after.png')" }}></div>
        </div>
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* 'Before' image */}
          <div 
            className="w-full h-full bg-contain bg-no-repeat bg-center" 
            style={{ 
              backgroundImage: "url('/images/articles/datawarehouse_before.png')",
              width: `${100 / (sliderPosition / 100)}%`,
              height: '100%',
            }}
          ></div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>
    );
};

export default function About() {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setIsSent(true);
    setMessage('');
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative w-full m-0 p-0">
      <ParticleEffect />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
          {/* Main Title Section */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 sm:mt-8 md:mt-12 mb-6 sm:mb-8 md:mb-12">
            <div className="text-center md:text-left md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lato mb-3 sm:mb-4">
                Elevating Your Vision with <br className="hidden sm:inline" />
                Data and AI Innovation
              </h1>
            </div>
            <div className="text-center md:text-right md:w-1/2 md:pl-4 lg:pl-8">
              <p className="text-sm sm:text-base md:text-lg font-light">
                I leverage cutting-edge technologies to solve complex challenges. From advanced analytics to AI-powered automation, my work bridges the gap between innovation and impact. Together, we create solutions that transform businesses into data-driven powerhouses.
                <br className="hidden sm:inline" />
                Let&apos;s build the future of intelligent systems, starting today.
              </p>
            </div>
          </div>
  
          {/* Separator Line */}
          <div className="border-t border-gray-500 my-4 sm:my-6"></div>
  
          {/* Case Study Section */}
          <section className="mb-6 sm:mb-8 md:mb-12 bg-gray-900 bg-opacity-70 p-3 sm:p-4 md:p-6 rounded-lg shadow-md">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-lato font-bold text-center mb-3 sm:mb-4">
              Case Study - Modernize Data Warehouse Architecture
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-center">
              Here is my top-notch data warehouse architecture utilizing advanced AI solutions for top tech companies, leading innovations in automation, data governance, and machine learning. This transformation modernizes data warehouse architecture by integrating AI-powered tools like dbt and Google Gemini for automated SQL generation, metadata management, and real-time data processing.
            </p>
            <ImageSlider />
          </section>

          {/* Separator Line */}
          <div className="border-t border-gray-500 my-4 sm:my-6"></div>
  
          {/* Inquiry Form */}
          <section className="mt-12 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-white">Empower Your Data Warehouse with Cutting-Edge AI Solutions</h2>
              <p className="text-gray-300 mb-3">Seeking a knowledgeable individual for your event on data science, analytics, or data engineering projects?</p>
              <p className="text-gray-400 mb-6 text-sm">Discover strategies for automating data pipelines, advancing data governance, and harnessing machine learning to modernize your data architecture.</p>
              <RainbowButton href="/resources/contact-form">
                  Book a Project
              </RainbowButton>
          </section>
        </div>
      </div>
    </div>
  );
}
