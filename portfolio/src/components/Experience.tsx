"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="01 — Experience" title="Where I've Worked" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent hidden sm:block" />

          <div className="sm:pl-10 relative">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.5)] -translate-x-[3.5px] hidden sm:block" />

            {/* Role header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-text-primary">
                  Full-Stack Developer Intern
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                  Internship
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                <span className="font-medium gradient-text">
                  Multimedia Center — UM6P
                </span>
                <span className="text-text-muted">·</span>
                <span className="text-text-muted">Morocco</span>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 rounded-xl bg-bg-card border border-border hover:border-border-hover transition-colors duration-300">
              <p className="text-text-secondary leading-relaxed mb-5">
                Developed a comprehensive platform to manage multimedia
                requests across the university's multimedia center.
              </p>

              <ul className="space-y-3">
                {[
                  "Designed a role-based access system (Client, Worker, Manager) with granular permissions.",
                  "Built the frontend using Next.js, TypeScript, and Tailwind CSS with a responsive, component-driven architecture.",
                  "Architected the backend with NestJS, PostgreSQL, and TypeORM for robust data management and API design.",
                  "Implemented user accounts with secure authentication and an AI-powered chatbot for intelligent request handling.",
                ].map((detail, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-violet/60 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Tech pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "NestJS",
                  "PostgreSQL",
                  "TypeORM",
                  "AI Chatbot",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-bg-primary border border-border text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
