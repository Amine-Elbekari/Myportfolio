"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent-cyan to-accent-violet" />
    </motion.div>
  );
}
