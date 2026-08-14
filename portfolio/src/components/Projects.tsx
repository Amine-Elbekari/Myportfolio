"use client";

import { useRef, useState, useMemo, useEffect, useLayoutEffect, useCallback } from "react";
import { motion, useScroll, AnimatePresence, useMotionValue, animate } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import projectsData from "../data/projects.json";

/* ─── Filter categories ──────────────────────────────────────────────────── */
const CATEGORIES = ["All", "Web", "Security", "DevOps / Cloud", "AI / ML"] as const;
type Category = (typeof CATEGORIES)[number];

/* ─── Safe useLayoutEffect (SSR guard) ────────────────────────────────────── */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [shouldCenter, setShouldCenter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  /* Filter projects */
  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  /* ─── Horizontal scroll ─────────────────────────────────────────────────── */
  const scrollDistance = useRef(0);
  const scrollX = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Subscribe to scroll progress → update x */
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      scrollX.set(v * -scrollDistance.current);
    });
    return unsubscribe;
  }, [scrollYProgress, scrollX]);

  /* Measure actual rendered track width */
  const measureTrack = useCallback(() => {
    if (!trackRef.current) return;
    const trackW = trackRef.current.scrollWidth;
    const vw = window.innerWidth;
    const distance = Math.max(0, trackW - vw + 80);
    scrollDistance.current = distance;
    setShouldCenter(distance === 0);
    
    // Re-apply current scroll offset with new distance
    scrollX.set(scrollYProgress.get() * -distance);
  }, [scrollX, scrollYProgress]);

  /* Re-measure after DOM paint (layout effect) and on resize */
  useIsomorphicLayoutEffect(() => {
    measureTrack();
    const raf = requestAnimationFrame(measureTrack);
    const t = setTimeout(measureTrack, 300);
    window.addEventListener("resize", measureTrack);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("resize", measureTrack);
    };
  }, [filtered, measureTrack]);

  /* On filter tab click: animate x back to 0, then re-measure */
  const handleFilterChange = useCallback(
    (cat: Category) => {
      setActiveCategory(cat);
      setTimeout(() => {
        measureTrack();
        animate(scrollX, 0, { duration: 0.3, ease: [0.23, 1, 0.32, 1] });
      }, 420);
    },
    [measureTrack, scrollX]
  );

  const sectionHeight = `${Math.max(150, filtered.length * 70)}vh`;

  return (
    <section id="projects" className="bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <SectionHeading label="03 / Projects" title="Featured Work" />

        {/* ── Filter tab bar ── */}
        <div className="mt-10 flex flex-wrap gap-1 sm:gap-0 relative">
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
      </div>

      {/* Desktop horizontal scroll (lg and up only) */}
      <div
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: sectionHeight }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex items-center justify-center"
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
                ref={trackRef}
                style={{ x: scrollX }}
                className={`flex gap-12 ${
                  shouldCenter ? "w-full justify-center px-4" : "pl-[10vw] pr-20"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {filtered.map((project, i) => (
                  <ProjectCard
                    key={project.id}
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
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile + Tablet fallback (below lg) */}
      <div className="lg:hidden px-4 sm:px-6 pb-16 w-full">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p
              key="empty-mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-mono text-sm tracking-wider text-center py-16"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              No projects in this category yet. Check back soon.
            </motion.p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="w-full h-full"
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
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
