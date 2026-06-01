"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  active: number;
  onSelect: (i: number) => void;
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
};

/**
 * Horizontal scroll-snap carousel kept in sync with a controlled `active` index.
 * - changing `active` smoothly scrolls that item into view
 * - the user swiping snaps and reports the nearest item back via `onSelect`
 */
export default function SnapRow({ active, onSelect, children, className = "", itemClassName = "" }: Props) {
  const scroller = useRef<HTMLDivElement | null>(null);
  const programmatic = useRef(false);
  const settle = useRef<ReturnType<typeof setTimeout> | null>(null);

  // scroll the active item into view when the index changes
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const item = el.children[active] as HTMLElement | undefined;
    if (!item) return;
    programmatic.current = true;
    el.scrollTo({ left: item.offsetLeft - (el.clientWidth - item.clientWidth) / 2, behavior: "smooth" });
    const t = setTimeout(() => (programmatic.current = false), 600);
    return () => clearTimeout(t);
  }, [active]);

  const onScroll = () => {
    if (programmatic.current) return;
    if (settle.current) clearTimeout(settle.current);
    settle.current = setTimeout(() => {
      const el = scroller.current;
      if (!el) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let nearest = 0;
      let best = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const item = c as HTMLElement;
        const mid = item.offsetLeft + item.clientWidth / 2;
        const d = Math.abs(mid - center);
        if (d < best) {
          best = d;
          nearest = i;
        }
      });
      if (nearest !== active) onSelect(nearest);
    }, 120);
  };

  return (
    <div
      ref={scroller}
      onScroll={onScroll}
      className={`scrollbar-hide relative flex snap-x snap-mandatory overflow-x-auto ${className}`}
    >
      {children.map((child, i) => (
        <div key={i} className={`snap-center shrink-0 ${itemClassName}`}>
          {child}
        </div>
      ))}
    </div>
  );
}
