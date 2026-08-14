"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import projectsData from "../data/projects.json";

/* ─── Filter categories ──────────────────────────────────────────────────── */
const CATEGORIES = ["All", "Web", "Security", "DevOps / Cloud", "AI / ML"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  /* Filter projects */
  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  /* On filter tab click */
  const handleFilterChange = useCallback((cat: Category) => {
    setActiveCategory(cat);
  }, []);

  return (
    <section id="projects" className="bg-[#0B0F19] relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-24">
        <SectionHeading label="03 / Projects" title="Featured Work" />

        {/* ── Filter tab bar ── */}
        <div className="mt-10 mb-12 flex flex-wrap gap-1 sm:gap-0 relative">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className="relative px-5 py-2.5 text-sm font-mono tracking-wide transition-colors duration-300 cursor-pointer"
                style={{ color: isActive ? "#5eead4" : "#6b7280" }}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #14b8a6, #06b6d4)",
                      boxShadow: "0 0 10px rgba(20,184,166,0.5), 0 2px 8px rgba(20,184,166,0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
        </div>

        {/* ── Fluid Grid Layout ── */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full flex items-center justify-center py-20"
            >
              <p
                className="font-mono text-sm tracking-wider"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                No projects in this category yet. Check back soon.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 sm:gap-8 items-stretch w-full"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
              }}
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="w-full flex"
                >
                  <ProjectCard
                    id={project.id}
                    index={i}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    codeSnippet={project.codeSnippet}
                    codeFilename={project.codeFilename}
                    githubUrl={project.githubUrl}
                    mockupImages={project.mockupImages}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
