"use client";
import { useEffect, useRef, useState } from "react";

export function useCountUp(
  target: number,
  duration: number,
  active: boolean,
  decimals = 0
) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(
        decimals > 0 ? Math.round(current * 10) / 10 : Math.floor(current)
      );
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };

    requestAnimationFrame(animate);
  }, [target, duration, active, decimals]);

  return count;
}
