"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-[#050505]">
      {/* Interactive Background Gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(16, 185, 129, 0.12), transparent 80%)`,
        }}
      />
      
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" style={{
        backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl pt-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.15 }}
          className="flex flex-col gap-6"
        >
          {/* Elegant Name */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex items-center gap-4 text-emerald-400/80 font-mono text-sm md:text-base uppercase tracking-[0.3em]"
          >
            <span className="w-8 h-[1px] bg-emerald-500/50"></span>
            Amine El Bekari
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center justify-between">
            
            <div className="flex-1">
              {/* Massive Dominant Title (Scaled down slightly to fit picture) */}
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-5xl sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black leading-[0.9] tracking-tighter text-white uppercase"
              >
                Fullstack <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500">
                  Software
                </span> <br />
                Engineer
              </motion.h1>
              
              {/* Serious Engineering Subtext */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-6 md:mt-8 max-w-2xl"
              >
                <p className="text-gray-400 text-base md:text-xl lg:text-2xl font-light leading-relaxed">
                  Architecting scalable systems from Kubernetes and Cloud Infrastructure to AI integrations (RAG/LangChain) and dynamic frontends.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <a href="#projects" className="relative group px-8 py-4 bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 rounded-none text-emerald-400 font-mono text-sm uppercase tracking-widest transition-all">
                    <span className="relative z-10">View Projects</span>
                  </a>
                  <a href="https://github.com/Amine-Elbekari" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-gray-800 hover:border-gray-600 rounded-none text-gray-400 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Profile Picture */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="shrink-0 w-full max-w-[220px] sm:max-w-[320px] lg:max-w-[400px] mx-auto lg:mx-0"
            >
              <div className="group relative rounded-3xl overflow-hidden aspect-[3/4]">
                {/* Glowing orb behind to provide some ambient light, but NO border on the image container */}
                <div className="absolute -right-12 -top-12 w-64 h-64 bg-emerald-500/20 blur-[80px] z-0 pointer-events-none" />
                
                <img 
                  src="/Myportfolio/amine_p1.jpeg" 
                  alt="Amine El Bekari"
                  className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
