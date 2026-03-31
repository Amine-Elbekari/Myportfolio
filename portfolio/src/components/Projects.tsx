"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  codeUrl: string;
  isPlaceholder?: boolean;
}

const projects: Project[] = [
  {
    title: "Inception of Things",
    subtitle: "1337 Project",
    description:
      "Orchestrated a minimalist Kubernetes ecosystem to master container lifecycle. Built a multi-node cluster using K3s and Vagrant. Deployed a GitOps workflow using Argo CD for seamless continuous deployment.",
    tags: ["Kubernetes", "K3s", "Vagrant", "Argo CD", "GitOps"],
    image: "/projects/kubernetes.png",
    codeUrl: "#",
  },
  {
    title: "Cloud-1",
    subtitle: "1337 Project",
    description:
      "Used Ansible to turn a complex cloud setup into a single-command deployment. Engineered persistence using host-mounted volumes for reliable stateful applications.",
    tags: ["Ansible", "Docker", "Cloud", "Automation"],
    image: "/projects/cloud.png",
    codeUrl: "#",
  },
  {
    title: "Coming Soon",
    subtitle: "Future Project",
    description:
      "An exciting new project is in development. Stay tuned for updates on this innovative solution.",
    tags: ["TBD"],
    image: "/projects/placeholder-1.png",
    codeUrl: "#",
    isPlaceholder: true,
  },
  {
    title: "Coming Soon",
    subtitle: "Future Project",
    description:
      "A new challenge approaches. This space is reserved for the next technical deep dive.",
    tags: ["TBD"],
    image: "/projects/placeholder-2.png",
    codeUrl: "#",
    isPlaceholder: true,
  },
  {
    title: "Coming Soon",
    subtitle: "Future Project",
    description:
      "More projects are on the way. Each one pushes the boundaries of what's possible.",
    tags: ["TBD"],
    image: "/projects/placeholder-3.png",
    codeUrl: "#",
    isPlaceholder: true,
  },
  {
    title: "Coming Soon",
    subtitle: "Future Project",
    description:
      "Innovation never stops. This card will showcase the next breakthrough project.",
    tags: ["TBD"],
    image: "/projects/placeholder-4.png",
    codeUrl: "#",
    isPlaceholder: true,
  },
  {
    title: "Coming Soon",
    subtitle: "Future Project",
    description:
      "Continuous learning, continuous building. Watch this space for the next creation.",
    tags: ["TBD"],
    image: "/projects/placeholder-5.png",
    codeUrl: "#",
    isPlaceholder: true,
  },
  {
    title: "Coming Soon",
    subtitle: "Future Project",
    description:
      "The journey continues. More projects coming soon to expand this portfolio.",
    tags: ["TBD"],
    image: "/projects/placeholder-6.png",
    codeUrl: "#",
    isPlaceholder: true,
  },
];

/* ── Framer Motion Variants ─────────────────────────────── */

const overlayVariants: Variants = {
  rest: {
    background:
      "linear-gradient(to top, rgba(5,10,20,0.78) 0%, rgba(5,10,20,0.40) 38%, rgba(5,10,20,0.08) 68%, transparent 100%)",
  },
  hover: {
    background:
      "linear-gradient(to top, rgba(5,10,20,0.88) 0%, rgba(5,10,20,0.56) 45%, rgba(5,10,20,0.18) 76%, transparent 100%)",
  },
};

const blurVariants: Variants = {
  rest: { backdropFilter: "blur(0px)" },
  hover: { backdropFilter: "blur(4px)" },
};

const revealVariants: Variants = {
  rest: { opacity: 0, y: 16, height: 0 },
  hover: { opacity: 1, y: 0, height: "auto" },
};

const containerTransition = {
  staggerChildren: 0.05,
};

/* ── ProjectCard Component ──────────────────────────────── */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [tapped, setTapped] = useState(false);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate={tapped ? "hover" : "rest"}
      onTap={() => {
        // Only toggle on touch devices (no hover capability)
        if (window.matchMedia("(hover: none)").matches) {
          setTapped((prev) => !prev);
        }
      }}
      transition={{ duration: 0.4, ...containerTransition }}
      className={`group relative flex-shrink-0 w-[340px] sm:w-[380px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer select-none ${
        project.isPlaceholder ? "opacity-60 hover:opacity-90" : ""
      }`}
    >
      {/* ── Background Image ────────────────────────────── */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 340px, 380px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={index < 2}
      />

      {/* ── Dark Gradient Overlay ───────────────────────── */}
      <motion.div
        variants={overlayVariants}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-10"
      />

      {/* ── Blur Layer ──────────────────────────────────── */}
      <motion.div
        variants={blurVariants}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-[11]"
        style={{ WebkitBackdropFilter: "inherit" }}
      />

      {/* ── Reveal Content ──────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6">
        {/* ── Reveal content: slides up on hover ────────── */}
        <motion.div
          variants={revealVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-14"
        >
          {/* Subtitle */}
          <span
            className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
              project.isPlaceholder ? "text-text-muted" : "text-accent-cyan"
            }`}
          >
            {project.subtitle}
          </span>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed mb-3 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/10 text-gray-200 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Code Button (real projects only) */}
          {!project.isPlaceholder && (
            <div className="mb-3">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  bg-gradient-to-r from-accent-cyan to-accent-violet text-white
                  hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.97 5.97a.75.75 0 01-1.06-1.06l5.97-5.97H12.25a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                View Code
              </a>
            </div>
          )}
        </motion.div>

      </div>

      {/* ── Title: always visible, bottom-left ─────────── */}
      <motion.h3
        variants={{ rest: { y: 0 }, hover: { y: 0 } }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20 max-w-[calc(100%-2.5rem)] text-xl sm:text-2xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      >
        {project.title}
      </motion.h3>

      {/* ── Accent border on hover (real projects) ──────── */}
      {!project.isPlaceholder && (
        <div className="absolute inset-0 z-30 rounded-2xl border-2 border-transparent group-hover:border-accent-cyan/30 transition-colors duration-500 pointer-events-none" />
      )}
    </motion.div>
  );
}

/* ── Projects Section ───────────────────────────────────── */

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="03 — Projects" title="Selected Work" />
      </div>

      {/* Desktop: Sticky horizontal scroll */}
      <div ref={containerRef} className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-[max(1.5rem,calc((100vw-72rem)/2))]"
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: Vertical stack */}
      <div className="md:hidden px-6 space-y-6 max-w-lg mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
