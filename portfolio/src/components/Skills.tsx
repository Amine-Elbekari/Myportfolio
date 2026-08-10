"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const row1 = ["Node.js", "NestJS", "Django", "FastAPI", "Python", "TypeScript", "JavaScript", "React", "Next.js", "PostgreSQL", "Node.js", "NestJS", "Django", "FastAPI", "Python", "TypeScript", "JavaScript", "React", "Next.js", "PostgreSQL"];
const row2 = ["AWS", "Docker", "Kubernetes", "K3s", "Ansible", "Vagrant", "LangChain", "RAG", "Git", "Linux", "AWS", "Docker", "Kubernetes", "K3s", "Ansible", "Vagrant", "LangChain", "RAG", "Git", "Linux"];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
        <SectionHeading label="04 — Skills" title="Tech Stack" />
      </div>

      <div className="relative flex flex-col gap-6 opacity-90">
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Scrolling Left) */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-3 sm:gap-8 min-w-max"
          >
            {row1.map((skill, index) => (
              <div
                key={index}
                className="px-4 md:px-6 py-2 md:py-3 rounded-xl border border-gray-800 bg-[#121212]/50 glass font-mono text-gray-300 text-sm md:text-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex gap-3 sm:gap-8 min-w-max"
          >
            {row2.map((skill, index) => (
              <div
                key={index}
                className="px-4 md:px-6 py-2 md:py-3 rounded-xl border border-gray-800 bg-[#121212]/50 glass font-mono text-gray-300 text-sm md:text-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
