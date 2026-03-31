"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const items = [
  {
    type: "Certification",
    title: "eJPT — eLearnSecurity Junior Penetration Tester",
    org: "INE (eLearnSecurity)",
    description:
      "Practical experience in network and host auditing, penetration testing, and web application security. Demonstrated hands-on ability to identify vulnerabilities and exploit weaknesses in real-world scenarios.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    accent: "cyan" as const,
  },
  {
    type: "Education",
    title: "1337 Coding School",
    org: "42 Network",
    description:
      "Built projects using low-level programming (C/C++) and modern web technologies. Peer-to-peer learning methodology focused on problem-solving, collaboration, and building real-world applications.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    accent: "violet" as const,
  },
  {
    type: "Education",
    title: "Physics Studies",
    org: "University Hassan II",
    description:
      "Academic foundation in physics, developing strong analytical and mathematical thinking skills applicable to engineering and problem-solving.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    accent: "violet" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Certifications() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="04 — Credentials"
          title="Certifications & Education"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ x: 4 }}
              className="group p-6 rounded-xl bg-bg-card border border-border hover:border-border-hover transition-all duration-300"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                    item.accent === "cyan"
                      ? "bg-accent-cyan/10 text-accent-cyan"
                      : "bg-accent-violet/10 text-accent-violet"
                  }`}
                >
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider ${
                        item.accent === "cyan"
                          ? "text-accent-cyan"
                          : "text-accent-violet"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-3">{item.org}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
