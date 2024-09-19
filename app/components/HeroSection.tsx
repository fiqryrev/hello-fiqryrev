"use client";

import React from 'react';
import Image from 'next/image';
import SparklesText from "@/components/magicui/sparkles-text";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Marquee from "@/components/magicui/marquee";
import ShinyButton from "@/components/magicui/shiny-button";

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
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black bg-400% animate-gradient"></div>
      <div className="absolute inset-0 opacity-20">
        <AnimatedGridPattern />
      </div>
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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-6xl font-bold mb-4 text-blue-500 font-lato"><SparklesText text="Fiqry Revadiansyah"/></h1>
            
            <p className="text-xl mb-6 text-gray-300 font-lato">
            A <b>leader</b> professional with <b>6</b> years of experience in the entire data functionality (Data Science, Analytics, and Engineering) and a product management. Based in Jakarta Indonesia, he has honed his skills across various sectors, integrating actionable data insights, AI automations into product, business, and engineering functions.
            </p>
            <div className="flex space-x-4 mb-6">
              <ShinyButton text="Data Scientist" className="bg-white px-8 py-2 rounded-full text-white font-lato" />
              <ShinyButton text="Data Analyst" className="bg-white px-8 py-2 rounded-full text-white font-lato" />
              <ShinyButton text="Data Engineer" className="bg-white px-8 py-2 rounded-full text-white font-lato" />
            </div>
            <div className="flex space-x-4 mb-6">
              <ShinyButton text="AI Product Manager" className="bg-white px-8 py-2 rounded-full text-white font-lato" />
              <ShinyButton text="AI & Prompt Engineer" className="bg-white px-8 py-2 rounded-full text-white font-lato" />
              <ShinyButton text="Speaker & Mentor" className="bg-white px-8 py-2 rounded-full text-white font-lato" />
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <MarqueeTechStacks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;