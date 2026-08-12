"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-teal-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading label="00 / About" title="A Bit About Me" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d1117 0%, #111827 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Accent top bar */}
          <div
            className="w-full h-[3px]"
            style={{
              background: "linear-gradient(90deg, #14b8a6, #06b6d4, #10b981)",
              boxShadow: "0 0 16px rgba(20,184,166,0.4)",
            }}
          />

          <div className="p-6 md:p-10 flex flex-col gap-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed"
            >
              {`I'm Amine, a fullstack engineer based in Morocco. I got into programming through 1337, the local branch of the 42 Network, where the entire learning model is peer to peer with no teachers and no lectures. That environment forced me to figure things out on my own, and honestly, it's the reason I'm the kind of developer I am today. I don't wait for someone to hand me a solution. I dig in, break things, and keep going until I understand how they work.`}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed"
            >
              {`What excites me most is building things that people actually rely on. Not prototypes or demos, but real products where the backend has to be solid, the frontend has to feel right, and everything in between has to hold up under pressure. I love the challenge of taking a messy, real world problem and turning it into something clean and functional. Whether that means designing an API that handles thousands of requests gracefully or crafting an interface where users never have to think twice about what to click next.`}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed"
            >
              {`Outside of code, I'm always exploring new tools and ideas, reading about system design, or experimenting with side projects just to see what's possible. I believe the best engineers never stop being curious, and I try to bring that mindset to everything I work on.`}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
