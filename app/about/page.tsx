'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

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
        className="relative w-full h-[400px] md:h-[750px] overflow-hidden cursor-ew-resize" // Increased height here
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {/* 'After' image */}
          <div className="w-full h-full bg-cover bg-center" 
               style={{ backgroundImage: "url('/images/articles/datawarehouse_after.png')" }}></div>
        </div>
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* 'Before' image */}
          <div 
            className="w-full h-full bg-cover bg-center" 
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
    <div className="min-h-screen bg-black text-white relative">
      <ParticleEffect />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Main Title Section */}
            <div className="flex flex-col md:flex-row justify-center items-center mt-16 mb-16"> {/* Made responsive */}
            <div className="text-center md:text-left md:w-1/2"> {/* Adjusted for responsiveness */}
            <h1 className="text-4xl md:text-5xl font-lato mb-6">
                Elevating Your Vision with <br />
                Data and AI Innovation
            </h1>
            </div>
            <div className="text-center md:text-right md:w-1/2 mt-4 md:mt-0 md:ml-8"> {/* Adjusted for responsiveness */}
            <p className="text-lg font-light">
                I leverage cutting-edge technologies to solve complex challenges. From advanced analytics to AI-powered automation, my work bridges the gap between innovation and impact. Together, we create solutions that transform businesses into data-driven powerhouses.
                <br />
                Let's build the future of intelligent systems, starting today.
            </p>
            </div>
            </div>
  
          {/* Separator Line */}
          <div className="border-t border-gray-500 my-8"></div>
  
          {/* Case Study Section */}
          <section className="mb-12 bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-lato font-bold text-center mb-6">
                Case Study - Modernize Data Warehouse Architecture
            </h1>
            <p className="text-lg mb-8 text-center">
            Here is my top-notch data warehouse architecture utilizing advanced AI solutions for top tech companies, leading innovations in automation, data governance, and machine learning. With each project, my goal is to make your business smarter, faster, and more secure.
            <br />
            Let's reshape the way you think about data.
            </p>
            <ImageSlider />
          </section>
  
          {/* Inquiry Form */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Send Your Inquiries</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <textarea
                className="w-full p-3 border border-gray-600 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                rows={4}
                placeholder="Enter your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                disabled={isSent}
              >
                {isSent ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}