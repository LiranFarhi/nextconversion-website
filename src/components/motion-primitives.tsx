"use client";

import { motion, HTMLMotionProps, type Variants } from "framer-motion";

// ─── Shared Variants ──────────────────────────────────────────────────────────

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ─── FadeUp ───────────────────────────────────────────────────────────────────
// Standard scroll-triggered reveal. Fades + slides up when entering viewport.

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  className?: string;
}

export function FadeUp({ delay = 0, className, children, ...rest }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerParent ────────────────────────────────────────────────────────────
// Wraps a group of StaggerChild elements; triggers staggered animation on view.

interface StaggerParentProps extends HTMLMotionProps<"div"> {
  className?: string;
  delay?: number;
}

export function StaggerParent({ className, delay = 0, children, ...rest }: StaggerParentProps) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerChild ─────────────────────────────────────────────────────────────
// Individual item inside a StaggerParent.

interface StaggerChildProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export function StaggerChild({ className, children, ...rest }: StaggerChildProps) {
  return (
    <motion.div variants={staggerItemVariants} className={className} {...rest}>
      {children}
    </motion.div>
  );
}

// ─── ScaleCard ────────────────────────────────────────────────────────────────
// Card that lifts with spring physics on hover.

interface ScaleCardProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export function ScaleCard({ className, children, ...rest }: ScaleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
