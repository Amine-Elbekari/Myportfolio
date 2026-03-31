"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "Bash", "C", "C++"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "Docker", "Kubernetes", "Vagrant", "Ansible"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Django", "NestJS", "Node.js", "PostgreSQL"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="02 — Skills" title="Tech Stack" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-border-hover hover:shadow-[0_0_12px_rgba(6,182,212,0.08)] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
