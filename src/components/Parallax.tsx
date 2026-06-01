"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** vertical travel in px across the viewport pass */
  distance?: number;
};

/** Scroll-linked vertical parallax — subtle depth as the element passes through the viewport. */
export default function Parallax({ children, className, distance = 48 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}
