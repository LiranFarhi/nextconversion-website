"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** entrance delay in ms */
  delay?: number;
  /** enable pointer tilt (web). Ignored on touch / reduced-motion. */
  tilt?: boolean;
};

/** Card with an in-view spring entrance and a pointer-driven 3D tilt (web only). */
export default function TiltCard({ children, className = "", delay = 0, tilt = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const enableTilt = tilt && !reduce;

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 18 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      onPointerMove={enableTilt ? onMove : undefined}
      onPointerLeave={enableTilt ? reset : undefined}
      style={enableTilt ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
