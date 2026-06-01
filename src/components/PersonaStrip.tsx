"use client";

import { useState } from "react";
import Image from "next/image";

const PERSONAS = [
  { tag: "34 • F", label: "Sophisticated Sportwear", img: 1 },
  { tag: "24 • M", label: "Sustainable Hiking Gear", img: 2 },
  { tag: "52 • F", label: "Luxury coats", img: 3 },
  { tag: "19 • M", label: "Streetwear", img: 4 },
  { tag: "41 • F", label: "Organic Skincare", img: 5 },
  { tag: "30 • M", label: "Vintage Accesories", img: 6 },
  { tag: "61 • F", label: "Handcrafted Jewelry", img: 7 },
  { tag: "28 • F", label: "Budget-Friendly", img: 8 },
];

type Persona = (typeof PERSONAS)[number];

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

function Chip({ tag, label, img, active, onSelect }: Persona & { active: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`mx-2 flex h-[60px] shrink-0 items-center gap-2 rounded-full bg-white/[0.05] py-2 pl-2 pr-5 transition-colors ${
        active
          ? "border border-primary shadow-[0_0_24px_-8px_rgba(131,79,251,0.7)]"
          : "border border-white/15 hover:border-white/30"
      }`}
    >
      <Image
        src={`/figma/persona-${img}.png`}
        alt=""
        width={128}
        height={128}
        className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10"
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

export default function PersonaStrip() {
  const [selected, setSelected] = useState("Luxury coats");
  return (
    <section
      className="marquee relative overflow-hidden py-6"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="marquee-track">
        {[...PERSONAS, ...PERSONAS].map((p, i) => (
          <Chip
            key={i}
            {...p}
            active={selected === p.label}
            onSelect={() => setSelected(p.label)}
          />
        ))}
      </div>
    </section>
  );
}
