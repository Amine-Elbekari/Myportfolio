"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading label="01 — Experience" title="Where I've Worked" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-12"
        >
          {/* Glassmorphism Card */}
          <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-[#121212]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden group">
            
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5" />
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
                  Internship
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Fullstack Developer</h3>
                <div className="text-lg font-medium gradient-text">Multimedia Center — UM6P</div>
                <div className="text-gray-500 mt-1 font-mono text-sm">Morocco</div>
              </div>
              <div className="text-gray-400 font-mono">6 Months</div>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Developed a comprehensive platform to manage multimedia requests across the university's multimedia center.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "TypeORM", "AI Chatbot"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Designed a role-based access system (Client, Worker, Manager) with granular permissions.",
                  "Built the frontend using Next.js, TypeScript, and Tailwind CSS with a responsive, component-driven architecture.",
                  "Architected the backend with NestJS, PostgreSQL, and TypeORM for robust data management and API design.",
                  "Implemented user accounts with secure authentication and an AI-powered chatbot for intelligent request handling.",
                ].map((detail, i) => (
                  <li key={i} className="flex gap-4 text-gray-400 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
