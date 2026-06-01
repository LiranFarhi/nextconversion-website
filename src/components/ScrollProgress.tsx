"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient progress bar pinned to the top, tracking page scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-primary-2 via-magenta to-yellow"
    />
  );
}
