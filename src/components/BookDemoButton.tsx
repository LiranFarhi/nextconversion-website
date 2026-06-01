"use client";

import { CircleArrowRight } from "lucide-react";

type Props = {
  href?: string;
  variant?: "primary" | "solid" | "ghost";
  className?: string;
  label?: string;
};

/** The recurring "Book a Demo" CTA. Opens the demo modal (falls back to #book-demo). */
export default function BookDemoButton({
  href = "#book-demo",
  variant = "primary",
  className = "",
  label = "Book a Demo",
}: Props) {
  const base =
    "group inline-flex items-center gap-2 rounded-full font-inter text-sm font-medium leading-none transition-all duration-300";
  const styles = {
    primary:
      "bg-white px-5 py-3 text-background hover:-translate-y-px hover:shadow-[0_10px_30px_-8px_rgba(131,79,251,0.6)]",
    solid:
      "bg-primary px-5 py-3 text-white hover:-translate-y-px hover:bg-primary-2 hover:shadow-[0_10px_30px_-8px_rgba(131,79,251,0.7)]",
    ghost:
      "border border-border-strong bg-white/[0.02] px-5 py-3 text-soft hover:bg-white/[0.08]",
  } as const;

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("open-demo-modal"));
      }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {label}
      <CircleArrowRight size={18} strokeWidth={1.75} className="btn-arrow" />
    </a>
  );
}
