"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import type { StorefrontId } from "./storefronts";

export type Persona = { tag: string; label: string; img: number; storefront: StorefrontId };

// Each visitor gets a bespoke storefront — a different *format* per person
// (modern shop, magazine, lookbook, video feed, pin board, social shop, chat, deals).
export const PERSONAS: Persona[] = [
  { tag: "34 • F", label: "Sophisticated Sportwear", img: 1, storefront: "sport" },
  { tag: "24 • M", label: "Sustainable Hiking Gear", img: 2, storefront: "hiking" },
  { tag: "52 • F", label: "Luxury coats", img: 3, storefront: "luxury" },
  { tag: "19 • M", label: "Streetwear", img: 4, storefront: "street" },
  { tag: "41 • F", label: "Organic Skincare", img: 5, storefront: "skincare" },
  { tag: "30 • M", label: "Vintage Accesories", img: 6, storefront: "vintage" },
  { tag: "61 • F", label: "Handcrafted Jewelry", img: 7, storefront: "jewelry" },
  { tag: "28 • F", label: "Budget-Friendly", img: 8, storefront: "budget" },
];

function DeviceIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="ml-3 mt-0.5 h-4 w-4 shrink-0 text-white/80"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.33}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4.5" y="1.5" width="7" height="13" rx="1.5" />
      <line x1="7" y1="12.5" x2="9" y2="12.5" />
    </svg>
  );
}

function Chip({
  tag,
  label,
  img,
  active,
  onSelect,
}: Persona & { active: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      data-active={active || undefined}
      className={`flex h-[60px] shrink-0 snap-center items-center gap-2 rounded-full py-2 pl-2 pr-5 transition-all duration-300 ${
        active
          ? "border border-primary bg-white/[0.07] shadow-[0_0_24px_-8px_rgba(131,79,251,0.7)]"
          : "border border-white/15 bg-white/[0.05] opacity-60 hover:opacity-100"
      }`}
    >
      <Image
        src={`/figma/persona-${img}.png`}
        alt=""
        width={128}
        height={128}
        loading="eager"
        className={`h-10 w-10 shrink-0 rounded-full object-cover ring-1 ${
          active ? "ring-primary" : "ring-white/10"
        }`}
      />
      <span className="flex min-w-[164px] flex-col items-start leading-tight">
        <span className="flex w-full items-center justify-between">
          <span className="font-inter text-sm font-normal text-white/80">{tag}</span>
          <DeviceIcon />
        </span>
        <span className="whitespace-nowrap font-inter text-sm font-normal text-white/80">{label}</span>
      </span>
    </button>
  );
}

type Props = {
  /** controlled active persona label; falls back to internal state when omitted */
  activeLabel?: string;
  onSelect?: (label: string) => void;
  /** called when the user manually scrolls/touches the strip (to pause auto-tour) */
  onInteract?: () => void;
};

export default function PersonaStrip({ activeLabel, onSelect, onInteract }: Props) {
  const [internal, setInternal] = useState("Luxury coats");
  const active = activeLabel ?? internal;
  const handle = (label: string) => (onSelect ? onSelect(label) : setInternal(label));
  const scroller = useRef<HTMLDivElement | null>(null);

  // keep the active chip centered as it changes (auto-tour or click)
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const i = PERSONAS.findIndex((p) => p.label === active);
    const chip = el.children[i] as HTMLElement | undefined;
    if (!chip) return;
    el.scrollTo({ left: chip.offsetLeft - (el.clientWidth - chip.clientWidth) / 2, behavior: "smooth" });
  }, [active]);

  return (
    <div
      ref={scroller}
      onPointerDown={onInteract}
      onWheel={onInteract}
      onTouchStart={onInteract}
      role="tablist"
      aria-label="Choose a visitor"
      className="scrollbar-hide relative flex snap-x snap-mandatory gap-3 overflow-x-auto px-2 py-2"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      {PERSONAS.map((p) => (
        <Chip key={p.label} {...p} active={active === p.label} onSelect={() => handle(p.label)} />
      ))}
    </div>
  );
}
