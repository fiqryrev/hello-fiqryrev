"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/components/4-RolePortfolio.module.css';
import '../styles/components/4-RolePortfolioMenu.css';
import { InteractiveMenu, InteractiveMenuItem } from "@/components/ui/modern-mobile-menu";
import {
  DataScientistIcon,
  AIEngineerIcon,
  ProductManagerIcon,
  DataAnalystIcon,
  DataEngineerIcon
} from './4-RoleIcons';

interface Role {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  achievements: string[];
  specialties: string[];
  tools: string[];
  image: string;
  color: string;
  gradient: string;
}

const roles: Role[] = [
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: '🧬',
    tagline: 'Turning Data into Strategic Decisions',
    description: 'Leveraging advanced statistical methods and machine learning to solve complex business problems, from predictive modeling to experimental design.',
    achievements: [
      'Developed Hierarchical Time Series models achieving ~70% forecast accuracy at Accenture',
      'Led A/B testing framework at Ajaib that increased feature adoption by 40%',
      'Built ML models for fraud detection and customer segmentation at Bukalapak',
      'Created automated reporting systems reducing manual effort by 80%'
    ],
    specialties: [
      'Predictive Modeling & Forecasting',
      'A/B Testing & Experimentation',
      'Statistical Analysis & Hypothesis Testing',
      'Machine Learning & Deep Learning'
    ],
    tools: [
      'Python (Scikit-learn, TensorFlow, PyTorch)',
      'R (Prophet, tidyverse)',
      'SQL & BigQuery',
      'Jupyter, MLflow, Airflow'
    ],
    image: '/images/highlights/events_fortex_uai.jpeg',
    color: '#3B82F6',
    gradient: 'from-blue-600 via-blue-500 to-cyan-400'
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    icon: '🤖',
    tagline: 'Building Intelligence at Scale',
    description: 'Architecting end-to-end AI solutions from RAG systems to production LLM deployments, focusing on scalability and business impact.',
    achievements: [
      'Built enterprise OCR pipeline processing 100K+ documents monthly at Paper.id',
      'Developed Agentic AI for HR automation serving 700K+ SMEs',
      'Implemented AI-powered CI/CD reducing deployment time by 60%',
      'Created multi-modal AI systems with 95%+ accuracy using Document AI'
    ],
    specialties: [
      'LLM & RAG Architecture',
      'Agentic AI Systems',
      'Computer Vision & OCR',
      'MLOps & AI Infrastructure'
    ],
    tools: [
      'LangChain, LangSmith, LlamaIndex',
      'OpenAI GPT, Claude, Gemini, Mistral',
      'Vector DBs (Pinecone, ChromaDB, ArangoDB)',
      'FastAPI, Cloud Run, Vertex AI'
    ],
    image: '/images/highlights/events_aws.JPG',
    color: '#A855F7',
    gradient: 'from-purple-600 via-purple-500 to-pink-400'
  },
  {
    id: 'ai-product-manager',
    title: 'AI Product Manager',
    icon: '🎯',
    tagline: 'Where Vision Meets Reality',
    description: 'Leading AI product strategy and execution, translating complex AI capabilities into user-centric solutions that drive business value.',
    achievements: [
      'Led Data Science & Engineering division managing 10+ specialists at Paper.id',
      'Established AI governance framework and responsible AI practices',
      'Launched AI products serving 700K+ SMEs with 3x usage growth',
      'Directly reported to C-level executives and investor stakeholders'
    ],
    specialties: [
      'AI Product Strategy & Roadmapping',
      'Cross-functional Team Leadership',
      'AI Governance & Ethics',
      'Stakeholder Management & Communication'
    ],
    tools: [
      'Product Analytics (Amplitude, Mixpanel)',
      'Project Management (Jira, Notion)',
      'Data Visualization (Looker, Tableau)',
      'A/B Testing & Feature Flags'
    ],
    image: '/images/highlights/events_mamikos.jpeg',
    color: '#F59E0B',
    gradient: 'from-amber-600 via-amber-500 to-orange-400'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    icon: '📊',
    tagline: 'Stories Hidden in Numbers',
    description: 'Transforming complex data into actionable insights through advanced analytics and compelling visualizations that drive decision-making.',
    achievements: [
      'Migrated 400+ dashboards for crypto, marketing, and payment teams at Ajaib',
      'Built executive dashboards tracking $100M+ monthly transactions',
      'Developed cohort analysis revealing 25% retention improvement opportunities',
      'Automated Treasury reporting saving 20+ hours weekly'
    ],
    specialties: [
      'Business Intelligence & KPI Design',
      'Cohort & Funnel Analysis',
      'Customer Journey Mapping',
      'Executive Reporting & Storytelling'
    ],
    tools: [
      'SQL (BigQuery, PostgreSQL, MySQL)',
      'Looker Studio, Metabase, Redash',
      'Python (Pandas, Plotly, Streamlit)',
      'dbt for Analytics Engineering'
    ],
    image: '/images/highlights/events_bsi.jpeg',
    color: '#10B981',
    gradient: 'from-green-600 via-green-500 to-emerald-400'
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    icon: '⚙️',
    tagline: 'The Foundation of Intelligence',
    description: 'Designing and building scalable data infrastructure, from real-time streaming to data warehouses that enable organization-wide analytics.',
    achievements: [
      'Architected real-time streaming with Datastream processing 1M+ events daily',
      'Built data warehouse and marts serving 50+ business units at Paper.id',
      'Implemented data governance with 99.9% SLA and quality metrics',
      'Optimized ETL pipelines reducing processing costs by 70%'
    ],
    specialties: [
      'Data Pipeline Architecture',
      'Real-time Stream Processing',
      'Data Warehouse Design',
      'Data Governance & Quality'
    ],
    tools: [
      'Apache Airflow, Cloud Composer',
      'Google Datastream, Pub/Sub, Dataflow',
      'dbt, BigQuery, Cloud Storage',
      'Docker, Kubernetes, Cloud Build'
    ],
    image: '/images/highlights/events_evermos.jpeg',
    color: '#6366F1',
    gradient: 'from-indigo-600 via-indigo-500 to-blue-400'
  }
];

const RolePortfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDockVisible, setIsDockVisible] = useState(false);
  const [menuKey, setMenuKey] = useState(0); // Force re-render of menu
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Create menu items for the InteractiveMenu
  const menuItems: InteractiveMenuItem[] = [
    { label: 'Scientist', icon: DataScientistIcon },
    { label: 'AI Eng', icon: AIEngineerIcon },
    { label: 'Product', icon: ProductManagerIcon },
    { label: 'Analyst', icon: DataAnalystIcon },
    { label: 'Engineer', icon: DataEngineerIcon }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if we're within the RolePortfolio section
      const containerBottom = containerTop + containerHeight;
      const isInSection = scrollTop + windowHeight > containerTop + 100 && scrollTop < containerBottom - 100;
      setIsDockVisible(isInSection);


      // Determine which section is most visible
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const windowCenter = windowHeight / 2;

          if (Math.abs(sectionCenter - windowCenter) < rect.height / 2) {
            if (activeIndex !== index) {
              setActiveIndex(index);
              // Update menu by forcing re-render
              setMenuKey(prev => prev + 1);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  // Update menu active state when activeIndex changes
  useEffect(() => {
    // Wait for next tick to ensure DOM is ready
    setTimeout(() => {
      const menuItems = document.querySelectorAll('.role-portfolio-menu-wrapper .menu__item');
      menuItems.forEach((item, index) => {
        if (index === activeIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }, 50);
  }, [activeIndex, isDockVisible]);

  return (
    <section
      ref={containerRef}
      className="relative bg-black overflow-hidden"
      style={{ minHeight: `${roles.length * 100}vh` }}
    >
      {/* Fixed Background with Gradient Transition */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `linear-gradient(135deg, ${roles[activeIndex].color}10 0%, transparent 50%, black 100%)`
          }}
        />
        {/* Add subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5" />
      </div>

      {/* Interactive Menu Dock */}
      <div className={`
        role-portfolio-menu-wrapper
        fixed bottom-8 left-1/2 -translate-x-1/2 z-50
        transition-all duration-500 transform
        ${isDockVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
      `}>
        <div
          onClick={(e) => {
            // Handle menu item clicks
            const target = e.target as HTMLElement;
            const menuItem = target.closest('.menu__item');
            if (menuItem) {
              const allItems = menuItem.parentElement?.querySelectorAll('.menu__item');
              if (allItems) {
                const index = Array.from(allItems).indexOf(menuItem as Element);
                if (index !== -1) {
                  sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  setActiveIndex(index);
                }
              }
            }
          }}
        >
          <InteractiveMenu
            items={menuItems}
            accentColor="#a855f7"
          />
        </div>
      </div>

      {/* Content Sections */}
      {roles.map((role, index) => (
        <div
          key={role.id}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-20"
        >
          <div className="container mx-auto max-w-7xl">
            {/* Section Header - Only show on first section */}
            {index === 0 && (
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-lato">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    My Professional Journey
                  </span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto font-lato">
                  Scroll to explore my expertise across different roles in data and AI
                </p>
              </div>
            )}

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left Content */}
              <div
                className={`relative z-10 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                style={{
                  transform: `translateY(${index === activeIndex ? 0 : 30}px)`,
                  opacity: index === activeIndex ? 1 : 0.4,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Role Number - Smaller and subtle */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-white/30 uppercase tracking-wider font-lato">
                    Role {index + 1} of {roles.length}
                  </span>
                </div>

                {/* Title with consistent gradient */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 font-lato">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {role.title}
                  </span>
                </h2>

                {/* Tagline */}
                <p className="text-lg sm:text-xl text-white/80 mb-6 font-lato">
                  {role.tagline}
                </p>

                {/* Description with better typography */}
                <p className="text-white/60 text-base sm:text-lg mb-8 leading-relaxed font-lato">
                  {role.description}
                </p>

                {/* Achievements with card style */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-white/80 font-semibold text-base font-lato">
                    Key Achievements
                  </h3>
                  <div className="space-y-2">
                    {role.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="group"
                        style={{
                          transform: `translateX(${index === activeIndex ? 0 : -10}px)`,
                          opacity: index === activeIndex ? 1 : 0,
                          transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${achIndex * 0.05}s`
                        }}
                      >
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0" />
                          <p className="text-white/70 text-sm leading-relaxed font-lato">
                            {achievement}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Two columns for Specialties and Tools */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Specialties */}
                  <div className="space-y-3">
                    <h3 className="text-white/80 font-semibold text-base font-lato">
                      Core Specialties
                    </h3>
                    <div className="space-y-2">
                      {role.specialties.map((specialty, specIndex) => (
                        <div
                          key={specIndex}
                          className="flex items-center gap-2"
                          style={{
                            transform: `translateX(${index === activeIndex ? 0 : -10}px)`,
                            opacity: index === activeIndex ? 1 : 0,
                            transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${(specIndex + 4) * 0.05}s`
                          }}
                        >
                          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                          <p className="text-white/60 text-sm font-lato">
                            {specialty}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Technologies */}
                  <div className="space-y-3">
                    <h3 className="text-white/80 font-semibold text-base font-lato">
                      Tools & Technologies
                    </h3>
                    <div className="space-y-2">
                      {role.tools.map((tool, toolIndex) => (
                        <div
                          key={toolIndex}
                          className="flex items-center gap-2"
                          style={{
                            transform: `translateX(${index === activeIndex ? 0 : -10}px)`,
                            opacity: index === activeIndex ? 1 : 0,
                            transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${(toolIndex + 8) * 0.05}s`
                          }}
                        >
                          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                          <p className="text-white/60 text-sm font-lato">
                            {tool}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button - matching existing style */}
                <button className="
                  mt-6 px-6 py-3 rounded-xl font-medium text-white font-lato
                  bg-gradient-to-r from-purple-600 to-pink-600
                  hover:from-purple-700 hover:to-pink-700
                  transform hover:scale-105 transition-all duration-300
                  shadow-lg hover:shadow-xl hover:shadow-purple-500/25
                ">
                  View {role.title} Projects
                </button>
              </div>

              {/* Right Image */}
              <div
                className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                style={{
                  transform: `scale(${index === activeIndex ? 1 : 0.95}) translateY(${index === activeIndex ? 0 : 20}px)`,
                  opacity: index === activeIndex ? 1 : 0.6,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20 opacity-60 z-10 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Image */}
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />

                  {/* Role Badge */}
                  <div className="absolute inset-0 z-20">
                    <div className={`
                      absolute top-4 left-4 px-4 py-2 rounded-lg
                      bg-black/70 backdrop-blur-md border border-white/20
                      ${index === activeIndex ? 'opacity-100' : 'opacity-0'}
                      transition-opacity duration-500
                    `}>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{role.icon}</span>
                        <span className="text-white text-sm font-medium font-lato">{role.title}</span>
                      </div>
                    </div>

                    {/* Animated Particles - only on active */}
                    {index === activeIndex && (
                      <>
                        <div className={`${styles.particle} ${styles.particle1}`} />
                        <div className={`${styles.particle} ${styles.particle2}`} />
                        <div className={`${styles.particle} ${styles.particle3}`} />
                      </>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`
                  absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-purple-600 to-pink-600 blur-xl
                  transition-opacity duration-500 -z-10
                `} />
              </div>
            </div>
          </div>
        </div>
      ))}

    </section>
  );
};

export default RolePortfolio;