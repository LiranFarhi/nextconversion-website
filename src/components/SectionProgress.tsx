"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "problem", label: "Why" },
  { id: "agents", label: "Agents" },
  { id: "demo", label: "Demo" },
  { id: "safety", label: "Safety" },
  { id: "cta", label: "Get Started" },
];

export default function SectionProgress() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    // Show dots only after hero is out of view
    const heroObs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (hero) heroObs.observe(hero);

    // Track which section is in view
    const sectionObs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = SECTIONS.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) setActiveIdx(idx);
          }
        }
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) sectionObs.observe(el);
    });

    return () => {
      heroObs.disconnect();
      sectionObs.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 12 }}
      className="fixed right-2.5 top-1/2 -translate-y-1/2 z-30 md:hidden"
      aria-label="Section navigation"
    >
      <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-1.5 py-3 shadow-sm border border-gray-200/50">
        {SECTIONS.map((section, i) => {
          const isActive = i === activeIdx;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={section.label}
              className="relative flex items-center justify-center group"
            >
              <motion.div
                className="rounded-full"
                animate={{
                  width: isActive ? 10 : 6,
                  height: isActive ? 10 : 6,
                  backgroundColor: isActive ? "#4f46e5" : "#d1d5db",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              {/* Tooltip on tap/hover */}
              <span className="absolute right-6 whitespace-nowrap text-[10px] font-semibold text-gray-700 bg-white/90 backdrop-blur-sm rounded px-2 py-1 shadow-sm border border-gray-100 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none">
                {section.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
