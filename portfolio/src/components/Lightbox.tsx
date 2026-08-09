"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  isOpen: boolean;
  disclaimer?: string;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  isOpen,
  disclaimer,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
          onClick={onClose}
        >
          {/* ── Disclaimer bar (fixed at very top) ── */}
          {disclaimer && (
            <div
              className="absolute top-0 left-0 right-0 flex items-center justify-center z-20 pointer-events-none"
              style={{
                paddingTop: "8px",
                paddingBottom: "8px",
                background: "rgba(0,0,0,0.3)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.4)",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                  margin: 0,
                  userSelect: "none",
                }}
              >
                {disclaimer}
              </p>
            </div>
          )}

          {/* ── Close button ── */}
          <button
            onClick={onClose}
            className="absolute top-12 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* ── Image counter ── */}
          {images.length > 1 && (
            <div
              className="absolute left-1/2 -translate-x-1/2 font-mono text-xs text-gray-500 tracking-wider z-10"
              style={{ top: disclaimer ? "40px" : "24px" }}
            >
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* ── Left arrow ── */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer hover:scale-110"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* ── Right arrow ── */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer hover:scale-110"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* ── Centered image ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-[90vw] max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
              style={{ marginTop: disclaimer ? "32px" : "0" }}
            >
              <img
                src={images[currentIndex]}
                alt={`Mockup ${currentIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
                style={{ boxShadow: "0 0 60px rgba(0,0,0,0.6)" }}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* ── Bottom dot indicators ── */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background:
                      i === currentIndex
                        ? "linear-gradient(135deg, #14b8a6, #06b6d4)"
                        : "rgba(255,255,255,0.2)",
                    boxShadow:
                      i === currentIndex ? "0 0 8px rgba(20,184,166,0.6)" : "none",
                    transform: i === currentIndex ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
