"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";

const INTERNSHIP_MOCKUPS = [
  "/Myportfolio/internship_mockups/mockup-1.jpg",
  "/Myportfolio/internship_mockups/mockup-2.png",
  "/Myportfolio/internship_mockups/mockup-3.jpg",
  "/Myportfolio/internship_mockups/mockup-4.jpg",
];

const experiences = [
  {
    role: "Fullstack Developer",
    company: "Multimedia Center, UM6P",
    location: "Rabat, Morocco",
    type: "INTERNSHIP",
    duration: "Dec 2024 to Jun 2025 · 6 Months",
    summary:
      "I built a full platform that manages service requests for the university multimedia center, taking each request from the moment it comes in all the way through to delivery. The system handles user permissions, automates common questions through a chat assistant, and keeps everyone in the loop with real time updates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "TypeORM", "AI Chatbot"],
    achievements: [
      "I built a secure authentication and permissions layer from scratch, giving clients, workers, and managers each their own tailored access to the platform without compromising on safety.",
      "I created the entire frontend in Next.js with TypeScript, focusing on making every interaction feel fast and intuitive regardless of screen size or device.",
      "I designed the backend API architecture and database models, making sure the system could handle complex relationships between requests, users, and workflows without breaking a sweat.",
      "I implemented a chat assistant that fields common questions and processes new service requests on its own, which ended up cutting manual work by about 40 percent.",
      "I worked closely with my teammates to wire up live notifications using WebSockets, so users always know the moment something changes on their requests.",
    ],
    mockupImages: INTERNSHIP_MOCKUPS,
  },
];

export default function Experience() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [activeMockups, setActiveMockups] = useState<string[]>([]);

  const openLightbox = useCallback((images: string[]) => {
    setActiveMockups(images);
    setLightboxIdx(0);
    setLightboxOpen(true);
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading label="01 / Experience" title="Where I've Worked" />

        <div className="mt-14 flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
            >
              {/* Card */}
              <div
                className="relative rounded-2xl overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #0d1117 0%, #111827 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                }}
              >


                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 20% 50%, rgba(20,184,166,0.06) 0%, transparent 60%)",
                  }}
                />

                {/* Top meta bar */}
                <div className="flex items-center justify-between px-5 md:px-8 pt-5 md:pt-6 pb-0">
                  {/* INTERNSHIP badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest"
                    style={{
                      background: "rgba(20,184,166,0.12)",
                      border: "1px solid rgba(20,184,166,0.35)",
                      color: "#5eead4",
                      boxShadow: "0 0 8px rgba(20,184,166,0.2)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: "#14b8a6", boxShadow: "0 0 6px #14b8a6" }}
                    />
                    {exp.type}
                  </div>

                  {/* Duration */}
                  <div className="font-mono text-xs text-gray-500 tracking-wide">{exp.duration}</div>
                </div>

                {/* Main two-column body */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-5 md:px-8 pt-5 md:pt-6 pb-6 md:pb-8">
                  {/* ── LEFT COLUMN ── */}
                  <div className="flex flex-col gap-5">
                    {/* Role & company */}
                    <div>
                      <h3 className="text-2xl font-bold text-white leading-snug mb-1">{exp.role}</h3>
                      <div
                        className="text-base font-semibold"
                        style={{
                          background: "linear-gradient(90deg,#14b8a6,#06b6d4)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 text-gray-500 text-xs font-mono">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {exp.location}
                      </div>
                    </div>

                    {/* Summary paragraph */}
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.summary}</p>

                    {/* Tech stack pills */}
                    <div>
                      <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-200 cursor-default"
                            style={{
                              background: "rgba(20,184,166,0.08)",
                              border: "1px solid rgba(20,184,166,0.2)",
                              color: "#94d5ce",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── RIGHT COLUMN ── */}
                  <div className="flex flex-col">
                    <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">
                      Key Achievements
                    </div>
                    <ul className="space-y-3 flex-1">
                      {exp.achievements.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                          className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                        >
                          <span
                            className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{
                              background: "linear-gradient(135deg,#14b8a6,#06b6d4)",
                              boxShadow: "0 0 8px rgba(20,184,166,0.7)",
                            }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {/* View product button */}
                    {exp.mockupImages.length > 0 && (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openLightbox(exp.mockupImages)}
                        className="mt-6 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono font-medium transition-all duration-300 cursor-pointer"
                        style={{
                          background: "linear-gradient(135deg, rgba(20,184,166,0.15), rgba(6,182,212,0.1))",
                          border: "1px solid rgba(20,184,166,0.3)",
                          color: "#5eead4",
                          boxShadow: "0 0 16px rgba(20,184,166,0.15)",
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View product →
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shared Lightbox */}
      <Lightbox
        images={activeMockups}
        currentIndex={lightboxIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIdx((p) => (p - 1 + activeMockups.length) % activeMockups.length)}
        onNext={() => setLightboxIdx((p) => (p + 1) % activeMockups.length)}
      />
    </section>
  );
}
