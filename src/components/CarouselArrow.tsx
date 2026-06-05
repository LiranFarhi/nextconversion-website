"use client";

import type { ReactElement } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  /** which direction the arrow points / advances */
  dir: "prev" | "next";
  onClick: () => void;
  /** full screen-reader label, e.g. "Previous agent" */
  label: string;
  className?: string;
};

/**
 * Shared prev/next control for carousels (agents + storefronts).
 * - 44×44 tap target (WCAG 2.5.5 / HIG)
 * - discoverable resting state, brand-tinted hover, pressed + focus states
 * - the chevron nudges toward its edge on hover as a directional cue
 * - all motion is suppressed under prefers-reduced-motion
 */
export default function CarouselArrow({ dir, onClick, label, className = "" }: Props): ReactElement {
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/[0.12] bg-white/[0.05] text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-white/[0.10] hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:active:scale-100 ${className}`}
    >
      <Icon
        size={20}
        strokeWidth={2}
        className={`transition-transform duration-200 motion-reduce:transition-none ${
          dir === "prev" ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"
        }`}
      />
    </button>
  );
}
