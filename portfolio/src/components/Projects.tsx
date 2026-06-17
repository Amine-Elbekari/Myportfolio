"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Scalable Booking System",
    description: "A highly resilient booking platform featuring advanced architecture. Built for high concurrency and robust data consistency.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker", "Redis"],
  },
  {
    title: "42 Network Django Piscine",
    description: "Intense backend web development challenges. Mastered Django ORM, authentication, real-time sockets, and secure API design.",
    tech: ["Django", "Python", "WebSockets", "Vanilla JS"],
  },
  {
    title: "Boot2Root CTF Solutions",
    description: "Comprehensive penetration testing and security exploits. Demonstrating practical vulnerability assessment and privilege escalation.",
    tech: ["Security", "Kali Linux", "Bash", "Python", "Networking"],
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="projects" className="bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <SectionHeading label="03 — Projects" title="Featured Work" />
      </div>

      <div ref={containerRef} className="h-[300vh] relative hidden md:block">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 pl-[10vw]">
            {projects.map((project, i) => (
              <ProjectCard 
                key={i} 
                index={i} 
                title={project.title} 
                description={project.description} 
                tech={project.tech} 
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Fallback */}
      <div className="md:hidden flex flex-col gap-12 px-6 pb-24 items-center overflow-hidden">
        {projects.map((project, i) => (
          <ProjectCard 
            key={i} 
            index={i} 
            title={project.title} 
            description={project.description} 
            tech={project.tech} 
          />
        ))}
      </div>
    </section>
  );
}
