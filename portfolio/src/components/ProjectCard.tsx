"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MouseEvent, useRef, useState, useCallback } from "react";
import Lightbox from "./Lightbox";

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface CodeToken {
  t: string;
  v: string;
}

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  index: number;
  codeSnippet: CodeToken[];
  codeFilename: string;
  githubUrl: string;
  mockupImages: string[];
}

/* ─── Per-project accent colours ─────────────────────────────────────────── */
const ACCENTS = [
  { from: "#14b8a6", to: "#06b6d4", glow: "rgba(20,184,166,0.35)" },
  { from: "#a855f7", to: "#6366f1", glow: "rgba(168,85,247,0.35)" },
  { from: "#f97316", to: "#ef4444", glow: "rgba(249,115,22,0.35)" },
  { from: "#ec4899", to: "#f43f5e", glow: "rgba(236,72,153,0.35)" },
  { from: "#3b82f6", to: "#8b5cf6", glow: "rgba(59,130,246,0.35)" },
];

const TOKEN_COLORS: Record<string, string> = {
  keyword: "#c084fc",
  fn: "#34d399",
  comment: "#6b7280",
  str: "#fbbf24",
  plain: "#e2e8f0",
};

/* ─── Animated code visual ────────────────────────────────────────────────── */
function CodeVisual({
  tokens,
  filename,
  accent,
}: {
  tokens: CodeToken[];
  filename: string;
  accent: (typeof ACCENTS)[0];
}) {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden font-mono text-[11px] leading-5"
      style={{
        background: "rgba(0,0,0,0.45)",
        border: `1px solid ${accent.from}30`,
        boxShadow: `0 0 30px ${accent.glow}`,
      }}
    >
      {/* Terminal top bar */}
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{
          borderBottom: `1px solid ${accent.from}25`,
          background: "rgba(0,0,0,0.3)",
        }}
      >
        {["#ff5f57", "#ffbd2e", "#28ca41"].map((c) => (
          <span key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
        <span className="ml-2 text-gray-600 text-[10px]">{filename}</span>
      </div>

      {/* Code body */}
      <div className="p-4 overflow-hidden max-h-[80px] sm:max-h-[160px]">
        <pre className="whitespace-pre-wrap break-all">
          {tokens.map((tok, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.04, duration: 0.25 }}
              style={{ color: TOKEN_COLORS[tok.t] ?? "#e2e8f0" }}
            >
              {tok.v}
            </motion.span>
          ))}
        </pre>
      </div>

      {/* Scan-line shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ y: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear", repeatDelay: 3 }}
        style={{
          background: `linear-gradient(180deg, transparent 40%, ${accent.from}18 50%, transparent 60%)`,
        }}
      />
    </div>
  );
}

/* ─── Main card ───────────────────────────────────────────────────────────── */
export default function ProjectCard({
  id,
  title,
  description,
  tags,
  index,
  codeSnippet,
  codeFilename,
  githubUrl,
  mockupImages,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const accent = ACCENTS[index % ACCENTS.length];

  /* 3D tilt */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const mouseXSpring = useSpring(mx, { stiffness: 250, damping: 18 });
  const mouseYSpring = useSpring(my, { stiffness: 250, damping: 18 });
  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 14);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * -14);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  /* Lightbox */
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightbox = useCallback(() => {
    if (mockupImages.length > 0) {
      setLightboxIdx(0);
      setLightboxOpen(true);
    }
  }, [mockupImages]);

  const hasMockups = mockupImages.length > 0;
  const hasGithub = githubUrl.length > 0;

  return (
    <>
      {/* Card wrapper — visible immediately, no whileInView opacity trap */}
      <motion.div
        initial={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full sm:w-[420px] shrink-0"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            background: "linear-gradient(160deg, #0d1117 0%, #0f1923 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
          className="relative w-full rounded-2xl overflow-hidden cursor-pointer group flex flex-col"
        >
          {/* ── Colored top accent bar ── */}
          <div
            className="w-full h-[3px] shrink-0"
            style={{
              background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
              boxShadow: `0 0 20px ${accent.glow}`,
            }}
          />

          {/* ── Background glow blob ── */}
          <div
            className="absolute -top-16 -right-16 w-60 h-60 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle, ${accent.glow} 0%, transparent 70%)`,
              filter: "blur(40px)",
              transform: "translateZ(-1px)",
            }}
          />

          <div className="p-5 sm:p-7 flex flex-col gap-4 sm:gap-5 flex-1" style={{ transform: "translateZ(0)" }}>
            {/* ── Large project number ── */}
            <div
              className="font-mono font-black leading-none select-none"
              style={{
                fontSize: "clamp(2.5rem,8vw,4.5rem)",
                background: `linear-gradient(135deg, ${accent.from}60, ${accent.to}20)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* ── Title ── */}
            <div style={{ transform: "translateZ(40px)" }}>
              <h3 className="text-xl font-bold text-white leading-snug">{title}</h3>
            </div>

            {/* ── Visual fill area (code snippet) ── */}
            <div style={{ transform: "translateZ(30px)" }}>
              <CodeVisual tokens={codeSnippet} filename={codeFilename} accent={accent} />
            </div>

            {/* ── Description ── */}
            <p
              className="text-gray-400 text-sm leading-relaxed"
              style={{ transform: "translateZ(20px)" }}
            >
              {description}
            </p>
          </div>

          {/* ── Tech pills (bottom) ── */}
          <div
            className="px-5 sm:px-7 pb-5 sm:pb-6 flex flex-wrap gap-2"
            style={{
              transform: "translateZ(25px)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wide transition-all duration-200"
                style={{
                  background: `${accent.from}12`,
                  border: `1px solid ${accent.from}30`,
                  color: accent.from,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* ── Hover overlay (slides up from bottom) ── */}
          <div
            className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none group-hover:pointer-events-auto"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.95) 100%)",
            }}
          >
            <div className="px-5 sm:px-7 pt-10 sm:pt-14 pb-5 sm:pb-6 flex items-end justify-between gap-3">
              <p className="text-gray-300 text-xs leading-snug line-clamp-1 flex-1">{description}</p>
              <div className="flex gap-2 shrink-0">
                {/* GitHub button — active link or disabled "Private repo" */}
                {hasGithub ? (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#e2e8f0",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub →
                  </a>
                ) : (
                  <span
                    className="px-3.5 py-2 rounded-lg text-xs font-mono font-medium select-none"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.25)",
                      cursor: "not-allowed",
                    }}
                    title="Source code is private"
                  >
                    Private repo
                  </span>
                )}
                {hasMockups && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox();
                    }}
                    className="px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 hover:scale-105 cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                      color: "#0d1117",
                      boxShadow: `0 0 16px ${accent.glow}`,
                    }}
                  >
                    View mockup →
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        images={mockupImages}
        currentIndex={lightboxIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIdx((p) => (p - 1 + mockupImages.length) % mockupImages.length)}
        onNext={() => setLightboxIdx((p) => (p + 1) % mockupImages.length)}
      />
    </>
  );
}
