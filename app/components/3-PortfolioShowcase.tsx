"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  portfolioProjects,
  projectCategories,
} from "@/app/data/portfolio-projects";
import type {
  PortfolioProject,
  ProjectCategory,
} from "@/app/data/portfolio-projects";

/* ------------------------------------------------------------------ */
/*  CategoryTabs                                                       */
/* ------------------------------------------------------------------ */

function CategoryTabs({
  active,
  onChange,
}: {
  active: ProjectCategory;
  onChange: (id: ProjectCategory) => void;
}) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex flex-wrap justify-center gap-2 rounded-full bg-white/5 border border-white/10 p-1.5 backdrop-blur-sm">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
              active === cat.id
                ? "text-white"
                : "text-white/50 hover:text-white/80"
            )}
          >
            {active === cat.id && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FeaturedProjectCard                                                */
/* ------------------------------------------------------------------ */

function FeaturedProjectCard({
  project,
  onClick,
}: {
  project: PortfolioProject;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={onClick}
      className="group col-span-full cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        {/* Left: content */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-0.5 text-xs font-medium text-white">
              Featured
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs text-white/50">
              {project.status === "live"
                ? "Live"
                : project.status === "in-progress"
                ? "In Progress"
                : "Archived"}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white md:text-2xl">
            {project.title}
          </h3>

          <p className="text-white/60 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techTags.map((tag) => (
              <span
                key={tag.label}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: impact metric */}
        <div className="flex shrink-0 flex-col items-center justify-center rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 px-8 py-6 text-center lg:min-w-[180px]">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.impactMetric}
          </span>
          <span className="mt-1 text-xs text-white/50">
            {project.impactLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  ProjectCard                                                        */
/* ------------------------------------------------------------------ */

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: PortfolioProject;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut", delay: index * 0.05 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <ArrowRight className="h-4 w-4 text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-purple-400" />
        </div>

        <p className="text-sm leading-relaxed text-white/60">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.techTags.slice(0, 3).map((tag) => (
            <span
              key={tag.label}
              className="rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60"
            >
              {tag.label}
            </span>
          ))}
          {project.techTags.length > 3 && (
            <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/40">
              +{project.techTags.length - 3}
            </span>
          )}
        </div>

        {/* Impact metric */}
        <div className="mt-auto flex items-baseline gap-2 rounded-lg border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 px-3 py-2">
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.impactMetric}
          </span>
          <span className="text-xs text-white/50">{project.impactLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  ProjectGrid                                                        */
/* ------------------------------------------------------------------ */

function ProjectGrid({
  category,
  onSelect,
}: {
  category: ProjectCategory;
  onSelect: (p: PortfolioProject) => void;
}) {
  const filtered = portfolioProjects.filter((p) => p.category === category);
  const featured = filtered.find((p) => p.featured);
  const standard = filtered.filter((p) => !p.featured);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {featured && (
          <FeaturedProjectCard
            project={featured}
            onClick={() => onSelect(featured)}
          />
        )}
        {standard.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            onClick={() => onSelect(project)}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  ProjectModal                                                       */
/* ------------------------------------------------------------------ */

function ProjectModal({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleKeyDown, handleClickOutside]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-black/95 p-6 backdrop-blur-md md:p-8"
        style={{ maxHeight: "85vh" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close project details"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Status + category */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs text-white/50">
            {project.status === "live"
              ? "Live"
              : project.status === "in-progress"
              ? "In Progress"
              : "Archived"}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs text-white/50">
            {projectCategories.find((c) => c.id === project.category)?.label}
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
          {project.title}
        </h2>

        {/* Full description */}
        <p className="mb-6 leading-relaxed text-white/70">
          {project.fullDescription}
        </p>

        {/* Tech tags */}
        <div className="mb-6">
          <h4 className="mb-2 text-sm font-medium text-white/40 uppercase tracking-wider">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techTags.map((tag) => (
              <span
                key={tag.label}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Impact metric */}
        <div className="mb-8 rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 px-6 py-4 text-center">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.impactMetric}
          </span>
          <p className="mt-1 text-sm text-white/50">{project.impactLabel}</p>
        </div>

        {/* CTA */}
        {project.detailRoute ? (
          <Link
            href={project.detailRoute}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/25"
          >
            View Case Study
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <button
            disabled
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/30"
          >
            Coming Soon
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  PortfolioShowcase (main export)                                    */
/* ------------------------------------------------------------------ */

const PortfolioShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("ai-product-engineering");
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Status badge */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
            Portfolio
          </span>
        </div>

        {/* Section heading */}
        <h2 className="heading-responsive-lg mb-4 text-center font-bold">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            What I&apos;ve Built
          </span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-white/60">
          A curated collection of projects across AI engineering, data platforms,
          and analytics — each solving real business problems at scale.
        </p>

        {/* Category tabs */}
        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

        {/* Project grid */}
        <ProjectGrid
          category={activeCategory}
          onSelect={setSelectedProject}
        />

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
