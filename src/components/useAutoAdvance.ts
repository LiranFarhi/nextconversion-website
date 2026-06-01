"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Options = { dwell?: number; resumeAfter?: number };

/**
 * Drives an auto-advancing index for carousels.
 * - only runs while the attached element is in view
 * - respects prefers-reduced-motion
 * - pauses for `resumeAfter` ms after a manual selection / interaction
 *
 * `ref` is a callback ref — attach it to any element (section or div).
 */
export function useAutoAdvance(count: number, { dwell = 4200, resumeAfter = 9000 }: Options = {}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    observer.current?.disconnect();
    observer.current = null;
    if (node) {
      observer.current = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
        threshold: 0.2,
      });
      observer.current.observe(node);
    }
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), dwell);
    return () => clearInterval(id);
  }, [paused, inView, count, dwell]);

  useEffect(() => () => observer.current?.disconnect(), []);

  const pause = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), resumeAfter);
  }, [resumeAfter]);

  const select = useCallback(
    (i: number) => {
      setIndex(i);
      pause();
    },
    [pause]
  );

  return { index, select, pause, ref };
}
