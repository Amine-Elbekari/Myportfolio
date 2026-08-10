"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="05 — Credentials" title="Education & Certifications" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-[#0a0a0a]"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-gray-800">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 text-xs font-mono text-gray-500">guest@amine-system: ~</div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-6 font-mono text-xs md:text-base leading-relaxed text-gray-300">
            {/* Command 1 */}
            <div className="mb-6">
              <div className="flex gap-2 text-emerald-400">
                <span className="text-green-400">➜</span>
                <span>~</span>
                <span className="text-white">cat education.txt</span>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-2 pl-4 border-l-2 border-gray-800"
              >
                <div className="text-emerald-300 font-bold">1337 Coding School (42 Network)</div>
                <div className="text-gray-400">5th-year CS student</div>
                <div className="mt-2 text-gray-500 text-sm">
                  &gt; Mastered C/C++ in a rigorous peer-to-peer environment.<br/>
                  &gt; Built complex system architecture, graphics, and networking projects from scratch.
                </div>
              </motion.div>
            </div>

            {/* Command 2 */}
            <div className="mb-6">
              <div className="flex gap-2 text-emerald-400">
                <span className="text-green-400">➜</span>
                <span>~</span>
                <span className="text-white">./check_certs.sh</span>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-2 pl-4 border-l-2 border-gray-800"
              >
                <a 
                  href="https://certs.ine.com/80e7be99-392d-4939-94a6-3e0589079643#acc.l2QIurLY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block w-fit"
                >
                  <div className="text-emerald-300 font-bold flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                    <span>[+] eJPT</span>
                    <span className="px-2 py-0.5 text-[10px] bg-emerald-900/50 text-emerald-200 rounded group-hover:bg-emerald-800/50 transition-colors">VERIFIED</span>
                    <svg className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">eLearnSecurity Junior Penetration Tester</div>
                </a>
                <div className="mt-2 text-gray-500 text-sm">
                  &gt; Practical experience in network and host auditing.<br/>
                  &gt; Demonstrated hands-on ability to exploit vulnerabilities in real-world scenarios.
                </div>
              </motion.div>
            </div>
            
            {/* Command 3 */}
            <div className="mb-2">
              <div className="flex gap-2 text-emerald-400">
                <span className="text-green-400">➜</span>
                <span>~</span>
                <span className="text-white animate-pulse">_</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
