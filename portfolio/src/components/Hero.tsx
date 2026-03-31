"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Industrial blueprint background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] bg-[length:52px_52px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.07),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(148,163,184,0.06),transparent_35%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* Availability card */}
          <motion.div
            variants={item}
            className="lg:col-span-4 rounded-2xl border border-gray-800 bg-[#121212]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-20px_40px_rgba(0,0,0,0.24)] px-5 py-5"
          >
            <div className="inline-flex items-center gap-2 border border-gray-700 bg-[#161616] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
              <span className="h-1.5 w-1.5 bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Mission ready for backend-heavy and architecture-first projects.
            </p>
          </motion.div>

          {/* Decorative technical card */}
          <motion.div
            variants={item}
            className="lg:col-span-8 rounded-2xl border border-gray-800 bg-[#121212]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-20px_40px_rgba(0,0,0,0.24)] overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-3 bg-[#101010]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]" />
              </div>
              <span className="text-[10px] tracking-[0.22em] uppercase text-gray-500">
                System Map
              </span>
            </div>
            <div className="h-full min-h-40 bg-[linear-gradient(rgba(34,197,94,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.13)_1px,transparent_1px)] bg-[length:26px_26px]">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_25%,rgba(34,197,94,0.18),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(148,163,184,0.15),transparent_40%)]" />
            </div>
          </motion.div>

          {/* Intro card */}
          <motion.div
            variants={item}
            className="lg:col-span-8 rounded-2xl border border-gray-800 bg-[#121212]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-20px_40px_rgba(0,0,0,0.24)] px-6 py-7 sm:px-8 sm:py-9"
          >
            <h1 className="text-left text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95]">
              Amine Elbekari
              <br />
              <span className="text-[#b7f3c8]">Full Stack Engineer</span>
            </h1>

            <p className="mt-6 text-left text-lg sm:text-xl text-gray-300 font-medium max-w-3xl">
              Focused on robust backend architecture, security, and cloud
              automation.
            </p>

            <p className="mt-5 text-left text-base text-gray-400 leading-relaxed max-w-3xl">
              Backed by strong fundamentals in low level programming and system
              design, I am highly adaptable and framework agnostic. I excel at
              picking up new technologies quickly to solve complex technical
              challenges and build reliable applications. I have a strong focus
              on backend architecture (including Django and NestJS) and
              integrating modern AI solutions.
            </p>
          </motion.div>

          {/* Action card */}
          <motion.div
            variants={item}
            className="lg:col-span-4 rounded-2xl border border-gray-800 bg-[#121212]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-20px_40px_rgba(0,0,0,0.24)] px-5 py-6"
          >
            <p className="text-[10px] tracking-[0.22em] uppercase text-gray-500 mb-4">
              Control Panel
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Amine-Elbekari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-gray-200 bg-[#151515] text-sm font-semibold uppercase tracking-[0.12em] text-gray-100 shadow-[0_5px_0_#0b0b0b] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_3px_0_#0b0b0b] active:translate-y-[4px] active:shadow-none"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:amineelbekari8@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-[#86efac] bg-[#151515] text-sm font-semibold uppercase tracking-[0.12em] text-[#d7ffe4] shadow-[0_5px_0_#0b0b0b] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_3px_0_#0b0b0b] active:translate-y-[4px] active:shadow-none"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 w-full flex items-center justify-center"
        >
          <div className="w-48 sm:w-56 h-8 border border-gray-800 bg-[#101010] px-2 flex items-center">
            <motion.div
              animate={{ x: [0, 148, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-10 bg-[#b7f3c8]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
