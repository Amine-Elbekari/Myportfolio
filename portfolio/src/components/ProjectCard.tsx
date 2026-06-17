"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  index: number;
}

export default function ProjectCard({ title, description, tech, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 20); // max rotation 10deg
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.8, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ margin: "-100px", once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[85vw] sm:w-[500px] h-[600px] shrink-0 perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full rounded-2xl border border-gray-800 bg-[#121212]/90 glass shadow-2xl overflow-hidden relative group cursor-pointer flex flex-col justify-between p-8"
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 60%)",
            transform: "translateZ(1px)"
          }}
        />

        <div style={{ transform: "translateZ(50px)" }}>
          <div className="font-mono text-emerald-400 text-sm mb-4">0{index + 1}</div>
          <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{title}</h3>
          <p className="text-gray-400 leading-relaxed text-lg">{description}</p>
        </div>

        <div style={{ transform: "translateZ(30px)" }}>
          <div className="flex flex-wrap gap-2 mt-6">
            {tech.map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs font-mono border border-gray-700 bg-gray-900/50 text-gray-300">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
             <div className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-colors">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
               </svg>
             </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
