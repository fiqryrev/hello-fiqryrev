"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Marquee from "@/components/magicui/marquee";
import ShinyButton from "@/components/magicui/shiny-button";
import CombinedAnimation from "@/components/magicui/hero-anim";
import BlurIn from "@/components/magicui/blur-in";

const techStacks = [
  { name: "dbt", img: "/images/tech/dbt_logo.png" },
  { name: "BigQuery", img: "/images/tech/google-bigquery-logo-1.png" },
  { name: "Cloud Run", img: "/images/tech/google_cloud_run_logo.png" },
  { name: "Gemini", img: "/images/tech/google_gemini_logo.png" },
  { name: "OpenAI", img: "/images/tech/openai_logo.png" },
  { name: "Anthropic", img: "/images/tech/anthropic_logo.png" },
  { name: "ArangoDB", img: "/images/tech/arango_logo.png" },
  { name: "FastAPI", img: "/images/tech/fastapi_logo.png" },
  { name: "Cloud Build", img: "/images/tech/google_cloud_build.png" },
  { name: "Cloud Composer", img: "/images/tech/google_cloud_composer.png" },
  { name: "Cloud Functions", img: "/images/tech/google_cloud_function_logo.png" },
  { name: "Datastream", img: "/images/tech/google_data_stream_logo.png" },
  { name: "Document AI", img: "/images/tech/google_documentai_logo.png" },
  { name: "Looker Studio", img: "/images/tech/google_looker_studio_logo.png" },
  { name: "Pub/Sub", img: "/images/tech/google_pubsub_logo.png" },
  { name: "Vertex AI", img: "/images/tech/google_vertex_logo.png" },
  { name: "Metabase", img: "/images/tech/metabase_logo.png" },
  { name: "MongoDB", img: "/images/tech/mongodb_logo.png" },
  { name: "MySQL", img: "/images/tech/mysql_logo.png" },
  { name: "Python", img: "/images/tech/python_logo.png" },
  { name: "R", img: "/images/tech/r_logo.png" },
  { name: "Ollama", img: "/images/tech/ollama_logo.png" },
  { name: "Airflow", img: "/images/tech/airflow_logo.png" },
  { name: "GCP", img: "/images/tech/gcp_logo.png" },
  { name: "GitHub", img: "/images/tech/github_logo.png" },
  { name: "LangChain", img: "/images/tech/langchain_logo.png" },
  { name: "LangSmith", img: "/images/tech/langsmith_logo.png" },
  { name: "Mistral", img: "/images/tech/mistral_logo.png" },
  { name: "Neo4j", img: "/images/tech/neo4j_logo.png" },
  { name: "PostgreSQL", img: "/images/tech/postgres_logo.png" },
];



const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: 0.1 + Math.random() * 0.3
      });
    }

    function drawStars() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#0f172a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Move star
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Twinkle effect
        star.opacity = Math.sin(Date.now() * 0.001 * star.speed) * 0.5 + 0.5;
      });

      // Draw light from below
      const lightGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height + 500, 0,
        canvas.width / 2, canvas.height + 500, canvas.height
      );
      lightGradient.addColorStop(0, 'rgba(66, 103, 212, 0.3)');
      lightGradient.addColorStop(1, 'rgba(66, 103, 212, 0)');
      ctx.fillStyle = lightGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(drawStars);
    }

    drawStars();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const BottomCurve: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* Apply the gradient to a rectangle that covers the entire SVG */}
        <rect width="1440" height="600" fill="url(#lightSpectrum)" />

        {/* The bottom curve */}
        <path
          d="M0 600V300C240 100 480 0 720 0C960 0 1200 100 1440 300V600H0Z"
          fill="#000000"
        />
      </svg>
    </div>
  );
};

const MarqueeTechStacks = () => {
  // Split the techStacks into four parts for four columns
  const columnSize = Math.ceil(techStacks.length / 4);
  const firstColumn = techStacks.slice(0, columnSize);
  const secondColumn = techStacks.slice(columnSize, columnSize * 2);
  const thirdColumn = techStacks.slice(columnSize * 2, columnSize * 3);
  const fourthColumn = techStacks.slice(columnSize * 3);

  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-transparent">
      <div className="flex w-full h-full">
        <Marquee pauseOnHover vertical className="[--duration:10s] flex-1">
          {firstColumn.map((tech) => (
            <div
              key={tech.name}
              className="h-[125px] w-[125px] flex items-center justify-center m-4 bg-gray-800 bg-opacity-30 rounded-lg backdrop-blur-sm border border-gray-700"
            >
              <Image
                src={tech.img}
                alt={tech.name}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:10s] flex-1">
          {secondColumn.map((tech) => (
            <div
              key={tech.name}
              className="h-[125px] w-[125px] flex items-center justify-center m-4 bg-gray-800 bg-opacity-30 rounded-lg backdrop-blur-sm border border-gray-700"
            >
              <Image
                src={tech.img}
                alt={tech.name}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:10s] flex-1">
          {thirdColumn.map((tech) => (
            <div
              key={tech.name}
              className="h-[125px] w-[125px] flex items-center justify-center m-4 bg-gray-800 bg-opacity-30 rounded-lg backdrop-blur-sm border border-gray-700"
            >
              <Image
                src={tech.img}
                alt={tech.name}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:5s] flex-1">
          {fourthColumn.map((tech) => (
            <div
              key={tech.name}
              className="h-[125px] w-[125px] flex items-center justify-center m-4 bg-gray-800 bg-opacity-30 rounded-lg backdrop-blur-sm border border-gray-700"
            >
              <Image
                src={tech.img}
                alt={tech.name}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [areButtonsVisible, setAreButtonsVisible] = useState(false);
  
    useEffect(() => {
      // Delay to show the paragraph animation after CombinedAnimation
      const textTimer = setTimeout(() => {
        setIsTextVisible(true);
      }, 500); // 0.5 second delay for the paragraph
  
      // Delay to show buttons after the paragraph is fully visible
      const buttonsTimer = setTimeout(() => {
        setAreButtonsVisible(true);
      }, 1700); // 1 second delay after the paragraph appears
  
      return () => {
        clearTimeout(textTimer);
        clearTimeout(buttonsTimer);
      };
    }, []);
  
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/effect_ray.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-30"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-6xl font-bold mb-4 text-blue-500 font-lato">
                <CombinedAnimation
                  text="Fiqry Revadiansyah"
                  className="text-6xl font-bold mb-4 text-blue-500 font-lato"
                />
              </h1>
              {isTextVisible && (
                <BlurIn
                  word="A professional leader with 6 years of experience in the entire data functionality (Data Science, Analytics, and Engineering) and a product management. Based in Jakarta Indonesia, he has honed his skills across various sectors, integrating actionable data insights, AI automations into product, business, and engineering functions."
                  className="text-xl mb-6 text-gray-300 font-lato text-left"
                  size="text-l"
                />
              )}
              <div className="flex flex-wrap gap-4 min-h-[10rem] justify-start items-center">
                <ShinyButton 
                  text="Data Scientist" 
                  className={`bg-white px-8 py-2 rounded-full text-white font-lato transition-opacity duration-500 ${areButtonsVisible ? 'opacity-100' : 'opacity-0'}`} 
                />
                <ShinyButton 
                  text="Data Analyst" 
                  className={`bg-white px-8 py-2 rounded-full text-white font-lato transition-opacity duration-500 ${areButtonsVisible ? 'opacity-100' : 'opacity-0'}`} 
                />
                <ShinyButton 
                  text="Data Engineer" 
                  className={`bg-white px-8 py-2 rounded-full text-white font-lato transition-opacity duration-500 ${areButtonsVisible ? 'opacity-100' : 'opacity-0'}`} 
                />
                <ShinyButton 
                  text="AI Product Manager" 
                  className={`bg-white px-8 py-2 rounded-full text-white font-lato transition-opacity duration-500 ${areButtonsVisible ? 'opacity-100' : 'opacity-0'}`} 
                />
                <ShinyButton 
                  text="AI & Prompt Engineer" 
                  className={`bg-white px-8 py-2 rounded-full text-white font-lato transition-opacity duration-500 ${areButtonsVisible ? 'opacity-100' : 'opacity-0'}`} 
                />
                <ShinyButton 
                  text="Speaker & Mentor" 
                  className={`bg-white px-8 py-2 rounded-full text-white font-lato transition-opacity duration-500 ${areButtonsVisible ? 'opacity-100' : 'opacity-0'}`} 
                />
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <MarqueeTechStacks />
            </div>
          </div>
        </div>
        <BottomCurve />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-30"></div>
      </section>
    );
  };

export default HeroSection;