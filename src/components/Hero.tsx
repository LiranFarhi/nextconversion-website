"use client";

import { type PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, type Variants } from "framer-motion";
import BookDemoButton from "./BookDemoButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const gx = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const gy = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    gx.set((e.clientX / w - 0.5) * 40);
    gy.set((e.clientY / h - 0.5) * 30);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-[72px]" onPointerMove={onMove}>
      {/* Pointer-parallax wrapper around the pulsing brand glow */}
      <motion.div aria-hidden style={{ x: gx, y: gy }} className="pointer-events-none absolute inset-0">
        <div
          className="animate-glow absolute left-1/2 top-[-10%] h-[720px] w-[1180px] max-w-[150vw] -translate-x-1/2 rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, rgba(131,79,251,0.45), rgba(225,81,255,0.16) 46%, rgba(1,0,30,0) 72%)",
          }}
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-[1000px] px-5 pb-20 pt-[72px] text-center sm:pt-[96px]"
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 font-inter text-[13px] font-medium tracking-[0.01em] text-soft backdrop-blur-sm"
        >
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
          </span>
          AI-Powered E-Commerce Evolution
        </motion.p>

        <motion.h1
          variants={item}
          className="mx-auto mt-7 max-w-[15ch] font-display text-[clamp(2.75rem,7.2vw,5.5625rem)] font-light leading-[1.02] tracking-[-0.02em] text-white"
        >
          Turning Static Storefronts Into Endless{" "}
          <span className="gradient-text gradient-animate font-normal">Self-Adaptive Experiences</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-[620px] font-inter text-base leading-relaxed text-soft/80 sm:text-[18px]"
        >
          Stop directing targeted ad traffic to generic websites. NextConversion transforms each click into
          a personalized, real-time storefront that optimizes continuously.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex justify-center">
          <BookDemoButton />
        </motion.div>
      </motion.div>
    </section>
  );
}
