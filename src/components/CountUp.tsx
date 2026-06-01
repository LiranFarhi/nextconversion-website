"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** e.g. "+30%", "10x", "800%", "+200%" */
  value: string;
  className?: string;
  style?: React.CSSProperties;
  durationMs?: number;
};

/** Counts up to the numeric part of `value` once it scrolls into view. */
export default function CountUp({ value, className = "", style, durationMs = 1400 }: Props) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : NaN;
  const suffix = match?.[3] ?? "";
  const decimals = match?.[2].includes(".") ? match[2].split(".")[1].length : 0;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(Number.isNaN(target) ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (Number.isNaN(target)) return;
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let start = 0;
    const run = () => {
      const tick = (t: number) => {
        if (!start) start = t;
        const p = Math.min((t - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = (target * eased).toFixed(decimals);
        setDisplay(`${prefix}${current}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (reduce) setDisplay(value);
          else run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, prefix, suffix, decimals, durationMs, value]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
