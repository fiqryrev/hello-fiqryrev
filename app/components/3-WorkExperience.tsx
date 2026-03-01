"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Marquee from "@/components/magicui/marquee";
import ShineBorder from "@/components/magicui/shine-border";
import ShimmerButton from "@/components/ui/shimmer-button";
import { SparklesCore } from '@/components/ui/sparkles';
import {
  workRelatedCompanies,
  speakershipCompanies,
  techStacks,
  companyData,
  speakershipData,
} from '@/app/data/work-experience';
import type { Company, CompanyData, SpeakershipData } from '@/app/data/work-experience';

const CompanyPopup: React.FC<{ company: CompanyData, onClose: () => void, onPrevious: () => void, onNext: () => void }> = ({ company, onClose, onPrevious, onNext }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 p-4">
      <div ref={popupRef} className="relative w-full max-w-4xl mx-auto">
        <ShineBorder
          className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-black/90 shadow-2xl shadow-purple-500/30"
          color={["#c084fc", "#e879f9", "#f472b6"]}
        >
          <div className="text-white p-4 sm:p-8 w-full max-h-[80vh] overflow-y-auto bg-black/95 backdrop-blur-sm rounded-xl border border-purple-500/30">
            <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-white/60 hover:text-white z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">&times;</button>

            {/* Company popup content */}
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={150}
                height={56}
                sizes="150px"
                className="object-contain"
              />
              <div className="text-center mt-4">
                <h2 className="text-xl sm:text-2xl font-bold">{company.position}</h2>
                <p className="text-white/60 mt-2 text-sm sm:text-base">{company.duration}</p>
                <p className="text-purple-400 font-semibold mt-1 text-sm sm:text-base">{company.ratio}</p>
              </div>
            </div>

            <div className="mb-4 sm:mb-6 text-sm sm:text-base">
              <p>{company.company_description}</p>
            </div>

            <div className="mb-4 sm:mb-6 text-sm sm:text-base">
              <p>{company.description}</p>
            </div>

            <div className="border-t border-white/20 pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Highlight Projects</h3>
              <Marquee className="[--duration:30s]" pauseOnHover={true}>
                {company.highlightProjects.map((project: string) => (
                  <div key={project} className="mx-2 sm:mx-4 bg-black/50 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-purple-400/20 hover:border-purple-400/40 transition-all duration-200">
                    <p className="text-xs sm:text-sm font-semibold text-white/80">{project}</p>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="flex justify-between mt-4 sm:mt-6">
              <ShimmerButton
                onClick={onPrevious}
                className="px-3 py-1 sm:px-4 sm:py-2 text-sm"
                shimmerColor="#c084fc"
                background="rgba(0, 0, 0, 0.8)"
              >
                &larr; Previous
              </ShimmerButton>
              <ShimmerButton
                onClick={onNext}
                className="px-3 py-1 sm:px-4 sm:py-2 text-sm"
                shimmerColor="#c084fc"
                background="rgba(0, 0, 0, 0.8)"
              >
                Next &rarr;
              </ShimmerButton>
            </div>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
};

const SpeakershipPopup: React.FC<{
  data: SpeakershipData;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}> = ({ data, onClose, onPrevious, onNext }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 p-4">
      <div ref={popupRef} className="relative w-full max-w-4xl mx-auto">
        <ShineBorder
          className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-black/90 shadow-2xl shadow-purple-500/30"
          color={['#c084fc', '#e879f9', '#f472b6']}
        >
          <div className="text-white p-4 sm:p-8 w-full max-h-[80vh] overflow-y-auto bg-black/95 backdrop-blur-sm rounded-xl border border-purple-500/30">
            <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-white/60 hover:text-white z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
              &times;
            </button>

            {/* Speakership popup content */}
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <Image
                src={data.logo}
                alt={`${data.university} logo`}
                width={150}
                height={56}
                sizes="150px"
                className="object-contain"
              />
              <h2 className="text-xl sm:text-2xl font-bold mt-4">{data.university}</h2>
            </div>
            {data.events.map((event) => (
              <div key={event.title} className="mb-4 sm:mb-6 border-t border-white/20 pt-4">
                <h3 className="text-lg sm:text-xl font-semibold">{event.title}</h3>
                <p className="text-white/60 mt-1 text-sm sm:text-base">{event.date}</p>
                <p className="mt-2 text-sm sm:text-base">{event.description}</p>
              </div>
            ))}

            <div className="flex justify-between mt-4 sm:mt-6">
              <ShimmerButton
                onClick={onPrevious}
                className="px-3 py-1 sm:px-4 sm:py-2 text-sm"
                shimmerColor="#c084fc"
                background="rgba(0, 0, 0, 0.8)"
              >
                &larr; Previous
              </ShimmerButton>
              <ShimmerButton
                onClick={onNext}
                className="px-3 py-1 sm:px-4 sm:py-2 text-sm"
                shimmerColor="#c084fc"
                background="rgba(0, 0, 0, 0.8)"
              >
                Next &rarr;
              </ShimmerButton>
            </div>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
};

const WorkExperience: React.FC = () => {
  const [showCompanyPopup, setShowCompanyPopup] = useState(false);
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
  const [showSpeakershipPopup, setShowSpeakershipPopup] = useState(false);
  const [selectedSpeakershipIndex, setSelectedSpeakershipIndex] = useState(0);

  const handleCompanyClick = (index: number) => {
    setSelectedCompanyIndex(index);
    setShowCompanyPopup(true);
  };

  const handleSpeakershipClick = (index: number) => {
    const speakershipDataIndex = speakershipData.findIndex(
      (data) => data.university === speakershipCompanies[index].name
    );
    if (speakershipDataIndex !== -1) {
      setSelectedSpeakershipIndex(speakershipDataIndex);
      setShowSpeakershipPopup(true);
    }
  };

  const handlePrevious = () => {
    setSelectedCompanyIndex((prevIndex) => (prevIndex === 0 ? companyData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedCompanyIndex((prevIndex) => (prevIndex + 1) % companyData.length);
  };

  const handleSpeakershipPrevious = () => {
    setSelectedSpeakershipIndex((prevIndex) =>
      prevIndex === 0 ? speakershipData.length - 1 : prevIndex - 1
    );
  };

  const handleSpeakershipNext = () => {
    setSelectedSpeakershipIndex((prevIndex) => (prevIndex + 1) % speakershipData.length);
  };

  return (
    <section className="relative py-8 sm:py-16 bg-black text-white overflow-hidden">
      {/* Animated Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="workexperience-sparkles"
          background="transparent"
          minSize={1.0}
          maxSize={1.8}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#c084fc"
          speed={0.5}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-4 text-center text-white/50 font-lato">Explore more by selecting the logo</h4>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-lato">Professional Experience</h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-white/80 font-lato">Career Highlights</h3>
        <div className="flex justify-center items-center flex-wrap mb-8 sm:mb-12 max-w-6xl mx-auto">
          {workRelatedCompanies.map((company: Company, index: number) => (
            <div key={company.name} className="w-1/2 sm:w-1/3 md:w-1/4 p-2">
              <div
                onClick={() => handleCompanyClick(index)}
                className="cursor-pointer p-4 h-24 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] transition-all duration-300"
              >
                <Image
                  src={company.img}
                  alt={`${company.name} logo`}
                  width={150}
                  height={38}
                  sizes="150px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-white/80 font-lato">Speakership and Mentorship</h3>
        <div className="flex justify-center items-center flex-wrap mb-8 sm:mb-16 max-w-7xl mx-auto">
          {speakershipCompanies.map((company: Company, index: number) => (
            <div key={company.name} className="w-1/3 sm:w-1/4 md:w-1/5 p-2">
              <div
                onClick={() => handleSpeakershipClick(index)}
                className="cursor-pointer p-3 h-20 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] transition-all duration-300"
              >
                <Image
                  src={company.img}
                  alt={`${company.name} logo`}
                  width={75}
                  height={25}
                  sizes="75px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-white/80 font-lato">Technical Competencies</h3>
        <div className="relative mt-6 overflow-hidden">
          <Marquee
            className="[--duration:60s]"
            pauseOnHover={true}
          >
            {techStacks.concat(techStacks).map((tech: Company, index: number) => (
              <a
                key={`${tech.name}-${index}`}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3 sm:mx-6 flex flex-col items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] transition-all duration-300"
              >
                <Image
                  src={tech.img}
                  alt={`${tech.name} logo`}
                  width={32}
                  height={32}
                  sizes="32px"
                  className="object-contain"
                />
                <p className="mt-2 text-center text-xs sm:text-sm">{tech.name}</p>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
      {showCompanyPopup && (
        <CompanyPopup
          company={companyData[selectedCompanyIndex]}
          onClose={() => setShowCompanyPopup(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      {showSpeakershipPopup && (
        <SpeakershipPopup
          data={speakershipData[selectedSpeakershipIndex]}
          onClose={() => setShowSpeakershipPopup(false)}
          onPrevious={handleSpeakershipPrevious}
          onNext={handleSpeakershipNext}
        />
      )}
    </section>
  );
};

export default WorkExperience;
