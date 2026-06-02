import type { ReactElement } from "react";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Music2,
  Plus,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

// ─── Photorealistic product thumbnails ───────────────────────────────────────

function TeeThumbnail(): ReactElement {
  return (
    <svg viewBox="0 0 60 60" fill="none" aria-hidden="true" className="h-full w-full">
      <defs>
        <radialGradient id="teeBg" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#1e2a1a" />
          <stop offset="100%" stopColor="#050a04" />
        </radialGradient>
        <radialGradient id="teeLight" cx="30%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="teeBodyGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="60%" stopColor="#111" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <filter id="teeGlow">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="60" height="60" rx="6" fill="url(#teeBg)" />
      <rect width="60" height="60" rx="6" fill="url(#teeLight)" />
      {/* fabric fold shadows */}
      <ellipse cx="30" cy="48" rx="18" ry="4" fill="black" opacity="0.45" />
      {/* tee body with realistic shaping */}
      <path
        d="M12 20 L5 28 L13 31 L13 52 L47 52 L47 31 L55 28 L48 20 L38 24 Q30 28 22 24 Z"
        fill="url(#teeBodyGrad)"
        stroke="#2a2a2a"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      {/* left shoulder highlight */}
      <path d="M12 20 L22 24 Q17 22 14 23 Z" fill="white" opacity="0.05" />
      {/* collar */}
      <path d="M22 24 Q30 29 38 24" stroke="#333" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* chest lighting */}
      <ellipse cx="25" cy="36" rx="8" ry="10" fill="white" opacity="0.025" />
      {/* lightning bolt — neon green, glowing */}
      <path d="M34 27 L27 38 L32 38 L25 50 L40 35 L35 35 Z"
        fill="#39ff14" opacity="0.95" filter="url(#teeGlow)" />
      {/* subtle seams */}
      <line x1="13" y1="31" x2="13" y2="52" stroke="#222" strokeWidth="0.4" />
      <line x1="47" y1="31" x2="47" y2="52" stroke="#222" strokeWidth="0.4" />
      {/* neon rim light on right edge */}
      <path d="M47 31 L55 28 L48 20 L42 23" stroke="#39ff14" strokeWidth="0.4" opacity="0.4" fill="none" />
    </svg>
  );
}

function HoodieThumbnail(): ReactElement {
  return (
    <svg viewBox="0 0 60 60" fill="none" aria-hidden="true" className="h-full w-full">
      <defs>
        <radialGradient id="hoodBg" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#1a1525" />
          <stop offset="100%" stopColor="#060408" />
        </radialGradient>
        <radialGradient id="hoodLight" cx="30%" cy="15%" r="55%">
          <stop offset="0%" stopColor="#e040fb" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#e040fb" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hoodBodyGrad" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#201c28" />
          <stop offset="60%" stopColor="#141018" />
          <stop offset="100%" stopColor="#0a0810" />
        </radialGradient>
        <filter id="hoodGlow">
          <feGaussianBlur stdDeviation="0.9" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="60" height="60" rx="6" fill="url(#hoodBg)" />
      <rect width="60" height="60" rx="6" fill="url(#hoodLight)" />
      {/* drop shadow under hoodie */}
      <ellipse cx="30" cy="55" rx="20" ry="3" fill="black" opacity="0.5" />
      {/* body */}
      <path
        d="M10 21 L2 33 L13 35 L13 55 L47 55 L47 35 L58 33 L50 21 L39 27 Q30 31 21 27 Z"
        fill="url(#hoodBodyGrad)"
        stroke="#2e2840"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      {/* hood */}
      <path
        d="M21 27 Q21 12 30 11 Q39 12 39 27 Q34 19 30 18 Q26 19 21 27 Z"
        fill="#1a1620"
        stroke="#3a3048"
        strokeWidth="0.7"
        strokeLinejoin="round"
      />
      {/* hood inner shadow */}
      <path d="M24 26 Q30 16 36 26 Q32 21 30 20 Q28 21 24 26 Z" fill="black" opacity="0.4" />
      {/* rim light on hood */}
      <path d="M39 27 Q40 18 34 13" stroke="#e040fb" strokeWidth="0.5" fill="none" opacity="0.5" />
      {/* kangaroo pocket */}
      <rect x="19" y="43" width="22" height="8" rx="2.5" fill="#130f1c" stroke="#2e2840" strokeWidth="0.7" />
      {/* pocket center seam */}
      <line x1="30" y1="43" x2="30" y2="51" stroke="#2e2840" strokeWidth="0.5" />
      {/* chest highlight */}
      <ellipse cx="24" cy="38" rx="7" ry="8" fill="white" opacity="0.03" />
      {/* drawstring dots */}
      <circle cx="25" cy="28.5" r="1.2" fill="#e040fb" opacity="0.7" filter="url(#hoodGlow)" />
      <circle cx="35" cy="28.5" r="1.2" fill="#e040fb" opacity="0.7" filter="url(#hoodGlow)" />
      {/* neon rim light right */}
      <path d="M47 35 L58 33 L50 21 L43 25" stroke="#e040fb" strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
  );
}

function CargoThumbnail(): ReactElement {
  return (
    <svg viewBox="0 0 60 60" fill="none" aria-hidden="true" className="h-full w-full">
      <defs>
        <radialGradient id="cargoBg" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1a1e14" />
          <stop offset="100%" stopColor="#050604" />
        </radialGradient>
        <radialGradient id="cargoLight" cx="40%" cy="10%" r="55%">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="legLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="40%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0e0e0e" />
        </linearGradient>
        <linearGradient id="legRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0e0e0e" />
          <stop offset="60%" stopColor="#141414" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
      </defs>
      <rect width="60" height="60" rx="6" fill="url(#cargoBg)" />
      <rect width="60" height="60" rx="6" fill="url(#cargoLight)" />
      {/* floor shadow */}
      <ellipse cx="30" cy="58" rx="18" ry="2.5" fill="black" opacity="0.5" />
      {/* waistband */}
      <rect x="12" y="8" width="36" height="6" rx="2" fill="#1e1e1e" stroke="#39ff14" strokeWidth="0.8" opacity="0.9" />
      {/* belt loops */}
      <rect x="19" y="7" width="3" height="4" rx="0.7" fill="#39ff14" opacity="0.3" />
      <rect x="28" y="7" width="3" height="4" rx="0.7" fill="#39ff14" opacity="0.3" />
      <rect x="37" y="7" width="3" height="4" rx="0.7" fill="#39ff14" opacity="0.3" />
      {/* left leg */}
      <path d="M12 14 L12 57 L27 57 L29 35 L23 14 Z" fill="url(#legLeft)" stroke="#252525" strokeWidth="0.5" strokeLinejoin="round" />
      {/* right leg */}
      <path d="M37 14 L48 14 L48 57 L33 57 L31 35 Z" fill="url(#legRight)" stroke="#252525" strokeWidth="0.5" strokeLinejoin="round" />
      {/* crotch seam */}
      <path d="M23 14 L29 35 L31 35 L37 14" stroke="#333" strokeWidth="0.5" fill="none" />
      {/* left cargo pocket */}
      <rect x="13" y="27" width="9" height="10" rx="1.5" fill="#1c1c1c" stroke="#39ff14" strokeWidth="0.7" opacity="0.85" />
      <line x1="13" y1="31.5" x2="22" y2="31.5" stroke="#39ff14" strokeWidth="0.4" opacity="0.4" />
      <line x1="17.5" y1="27" x2="17.5" y2="37" stroke="#39ff14" strokeWidth="0.3" opacity="0.25" />
      {/* right cargo pocket */}
      <rect x="38" y="27" width="9" height="10" rx="1.5" fill="#1c1c1c" stroke="#39ff14" strokeWidth="0.7" opacity="0.85" />
      <line x1="38" y1="31.5" x2="47" y2="31.5" stroke="#39ff14" strokeWidth="0.4" opacity="0.4" />
      <line x1="42.5" y1="27" x2="42.5" y2="37" stroke="#39ff14" strokeWidth="0.3" opacity="0.25" />
      {/* knee highlight */}
      <ellipse cx="19" cy="43" rx="4" ry="5" fill="white" opacity="0.025" />
      <ellipse cx="41" cy="43" rx="4" ry="5" fill="white" opacity="0.025" />
      {/* neon rim left edge */}
      <line x1="12" y1="14" x2="12" y2="57" stroke="#39ff14" strokeWidth="0.4" opacity="0.3" />
    </svg>
  );
}

// ─── Cinematic hero figure ────────────────────────────────────────────────────

function HeroFigure(): ReactElement {
  return (
    <svg
      viewBox="0 0 220 380"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="figureAmbient" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bodyGrad" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#1d1d1d" />
          <stop offset="50%" stopColor="#111" />
          <stop offset="100%" stopColor="#080808" />
        </radialGradient>
        <radialGradient id="faceGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#2a2218" />
          <stop offset="100%" stopColor="#141008" />
        </radialGradient>
        <radialGradient id="floorGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </radialGradient>
        <filter id="rimGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="legGradL" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e1e1e" />
          <stop offset="100%" stopColor="#0c0c0c" />
        </linearGradient>
        <linearGradient id="legGradR" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0c0c0c" />
          <stop offset="100%" stopColor="#171717" />
        </linearGradient>
      </defs>

      {/* ground glow pool */}
      <ellipse cx="110" cy="372" rx="65" ry="7" fill="url(#floorGlow)" />
      <ellipse cx="110" cy="373" rx="40" ry="3.5" fill="#39ff14" opacity="0.06" />

      {/* ── LEGS: wide cargo silhouette ── */}
      {/* left leg */}
      <path d="M78 236 L70 375 L98 375 L108 300 L96 236 Z"
        fill="url(#legGradL)" stroke="#1f1f1f" strokeWidth="0.7" strokeLinejoin="round" />
      {/* right leg */}
      <path d="M124 236 L144 236 L150 375 L122 375 L112 300 Z"
        fill="url(#legGradR)" stroke="#1f1f1f" strokeWidth="0.7" strokeLinejoin="round" />
      {/* crotch crease */}
      <path d="M96 236 L108 300 L112 300 L124 236" stroke="#2a2a2a" strokeWidth="0.6" fill="none" />
      {/* cargo pockets */}
      <rect x="71" y="278" width="20" height="17" rx="2.2" fill="#181818" stroke="#39ff14" strokeWidth="0.7" opacity="0.8" />
      <line x1="71" y1="286.5" x2="91" y2="286.5" stroke="#39ff14" strokeWidth="0.4" opacity="0.35" />
      <rect x="129" y="278" width="20" height="17" rx="2.2" fill="#181818" stroke="#39ff14" strokeWidth="0.7" opacity="0.8" />
      <line x1="129" y1="286.5" x2="149" y2="286.5" stroke="#39ff14" strokeWidth="0.4" opacity="0.35" />
      {/* knee highlight */}
      <ellipse cx="82" cy="320" rx="8" ry="11" fill="white" opacity="0.028" />
      <ellipse cx="138" cy="320" rx="8" ry="11" fill="white" opacity="0.028" />
      {/* waistband */}
      <rect x="74" y="230" width="72" height="9" rx="3" fill="#1a1a1a" stroke="#39ff14" strokeWidth="0.85" opacity="0.9" />
      {/* belt */}
      <rect x="76" y="233" width="68" height="3" rx="1" fill="#141414" stroke="#555" strokeWidth="0.4" />
      <rect x="107" y="231" width="6" height="7" rx="1" fill="#888" opacity="0.5" />

      {/* ── TORSO: oversized tee ── */}
      <path
        d="M44 155 L20 192 L48 199 L54 231 L166 231 L172 199 L200 192 L176 155 L152 167 Q110 182 68 167 Z"
        fill="url(#bodyGrad)"
        stroke="#232323"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      {/* collar */}
      <path d="M78 166 Q110 177 142 166" stroke="#303030" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* chest fabric catch-light */}
      <ellipse cx="88" cy="195" rx="22" ry="28" fill="white" opacity="0.022" />
      {/* chest lightning bolt — main graphic */}
      <path d="M128 178 L112 205 L122 205 L106 234 L142 208 L132 208 Z"
        fill="#39ff14" opacity="0.95" filter="url(#rimGlow)" />
      {/* tee hem */}
      <line x1="64" y1="231" x2="156" y2="231" stroke="#39ff14" strokeWidth="0.7" opacity="0.2" />
      {/* left arm */}
      <path d="M44 155 L22 218 L50 224 L70 192 Z"
        fill="#141414" stroke="#202020" strokeWidth="0.7" strokeLinejoin="round" />
      {/* right arm */}
      <path d="M176 155 L198 218 L170 224 L150 192 Z"
        fill="#141414" stroke="#202020" strokeWidth="0.7" strokeLinejoin="round" />
      {/* arm crease shadows */}
      <path d="M34 185 L44 215" stroke="#0a0a0a" strokeWidth="1.2" opacity="0.6" />
      <path d="M186 185 L176 215" stroke="#0a0a0a" strokeWidth="1.2" opacity="0.6" />

      {/* ── NECK ── */}
      <rect x="98" y="118" width="24" height="16" rx="5" fill="#1a1510" />
      <line x1="110" y1="118" x2="110" y2="134" stroke="#222" strokeWidth="0.5" opacity="0.5" />

      {/* ── HEAD ── */}
      <ellipse cx="110" cy="96" rx="30" ry="33" fill="url(#faceGrad)" stroke="#1e1a12" strokeWidth="0.7" />
      {/* skull highlight */}
      <ellipse cx="100" cy="80" rx="14" ry="10" fill="white" opacity="0.04" />

      {/* ── CAP ── */}
      <path d="M80 82 Q80 68 110 67 Q140 68 140 82 L140 90 L80 90 Z"
        fill="#181818" stroke="#39ff14" strokeWidth="0.8" strokeLinejoin="round" />
      {/* cap panel seam */}
      <line x1="110" y1="67" x2="110" y2="90" stroke="#252525" strokeWidth="0.6" />
      {/* front button */}
      <circle cx="110" cy="68.5" r="1.5" fill="#39ff14" opacity="0.5" />
      {/* brim */}
      <path d="M78 89 Q78 95 82 96 L138 96 Q142 95 142 89 Z"
        fill="#141414" stroke="#39ff14" strokeWidth="0.7" />
      {/* brim underside shadow */}
      <path d="M82 96 Q110 98 138 96" stroke="black" strokeWidth="1.5" opacity="0.4" />

      {/* ── FACE FEATURES (subtle) ── */}
      {/* brow shadow */}
      <path d="M96 96 Q102 93 108 96" stroke="#0f0c06" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M112 96 Q118 93 124 96" stroke="#0f0c06" strokeWidth="2" fill="none" opacity="0.6" />
      {/* eyes — half-closed, edgy */}
      <rect x="96" y="98" width="10" height="5" rx="2.5" fill="#0d0b07" />
      <rect x="114" y="98" width="10" height="5" rx="2.5" fill="#0d0b07" />
      {/* iris catch-lights */}
      <circle cx="101" cy="100.5" r="1.8" fill="#1a1408" />
      <circle cx="119" cy="100.5" r="1.8" fill="#1a1408" />
      <circle cx="100" cy="99.5" r="0.7" fill="white" opacity="0.35" />
      <circle cx="118" cy="99.5" r="0.7" fill="white" opacity="0.35" />
      {/* nose bridge */}
      <path d="M109 104 L107 114 L113 114" stroke="#1a1208" strokeWidth="1" fill="none" opacity="0.5" />
      {/* mouth — serious/slight smirk */}
      <path d="M103 119 Q110 123 116 119" stroke="#2a1e10" strokeWidth="1.3" fill="none" strokeLinecap="round" />

      {/* ── RIM LIGHTS (neon green from floor, fuchsia from top) ── */}
      {/* green floor rim — left silhouette */}
      <path d="M44 155 L22 218 L50 224 L54 231 L78 236 L70 375"
        stroke="#39ff14" strokeWidth="0.55" fill="none" opacity="0.28" filter="url(#softGlow)" />
      {/* fuchsia top-right rim */}
      <path d="M176 155 L198 218 L170 224 L166 231 L144 236 L150 375"
        stroke="#e040fb" strokeWidth="0.45" fill="none" opacity="0.22" />
      {/* cap top rim */}
      <path d="M80 82 Q80 68 110 67 Q140 68 140 82"
        stroke="#39ff14" strokeWidth="0.5" fill="none" opacity="0.35" />
      {/* head-right rim light */}
      <path d="M138 85 Q142 96 140 110 Q136 126 122 132"
        stroke="#e040fb" strokeWidth="0.5" fill="none" opacity="0.2" />

      {/* ambient figure glow overlay */}
      <rect x="0" y="0" width="220" height="380" fill="url(#figureAmbient)" />
    </svg>
  );
}

// ─── Product data ─────────────────────────────────────────────────────────────

interface Product {
  id: number;
  name: string;
  price: string;
  tag: string;
  accent: string;
  Thumb: () => ReactElement;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Graphic Tee", price: "$48", tag: "HOT", accent: "#39ff14", Thumb: TeeThumbnail },
  { id: 2, name: "Hoodie",      price: "$72", tag: "NEW", accent: "#e040fb", Thumb: HoodieThumbnail },
  { id: 3, name: "Cargo Pants", price: "$90", tag: "LTD", accent: "#39ff14", Thumb: CargoThumbnail },
];

// ─── Story progress segment ───────────────────────────────────────────────────

function StoryBar({ fill }: { fill: number }): ReactElement {
  return (
    <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/20">
      {fill > 0 && (
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-white"
          style={{ width: `${fill * 100}%` }}
        />
      )}
    </div>
  );
}

// ─── Right rail action button ─────────────────────────────────────────────────

function RailBtn({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}): ReactElement {
  return (
    <div className="flex flex-col items-center gap-[2px]">
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-black/50 shadow-lg backdrop-blur-sm">
        {children}
      </div>
      <span className="text-[8px] font-bold leading-none text-white/75 drop-shadow">{label}</span>
    </div>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }): ReactElement {
  const { name, price, tag, accent, Thumb } = product;
  return (
    <div
      className="relative flex w-[88px] shrink-0 flex-col overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(160deg,#161616 0%,#0d0d0d 100%)",
        border: `1px solid ${accent}30`,
        boxShadow: `0 0 12px ${accent}18, inset 0 1px 0 rgba(255,255,255,0.04)`,
      }}
    >
      {/* badge */}
      <div
        className="absolute left-[5px] top-[5px] z-10 rounded px-[4px] py-[1.5px] text-[6.5px] font-black leading-none tracking-wide text-black"
        style={{ backgroundColor: accent, boxShadow: `0 0 6px ${accent}80` }}
      >
        {tag}
      </div>

      {/* thumbnail — lit product photo feel */}
      <div
        className="relative h-[66px] w-full overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 30% 25%, ${accent}14 0%, #0a0a0a 70%)`,
        }}
      >
        <Thumb />
        {/* subtle specular at top */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/[0.04] to-transparent" />
        {/* bottom fade into card body */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
      </div>

      {/* info */}
      <div className="flex flex-col gap-[3px] px-[6px] pb-[6px] pt-[3px]">
        <span className="truncate text-[8px] font-medium leading-none text-white/55">{name}</span>
        <span className="text-[11px] font-black leading-none" style={{ color: accent, textShadow: `0 0 8px ${accent}60` }}>
          {price}
        </span>
        <button
          className="mt-[2px] w-full rounded-full py-[4px] text-[7.5px] font-black uppercase tracking-wider text-black shadow-md"
          style={{ background: accent, boxShadow: `0 2px 8px ${accent}50` }}
          aria-label={`Shop ${name}`}
        >
          Shop
        </button>
      </div>
    </div>
  );
}

// ─── Vinyl spinning disc ──────────────────────────────────────────────────────

function SpinDisc(): ReactElement {
  return (
    <div className="animate-spin" style={{ animationDuration: "3.6s" }}>
      <div
        className="relative flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/15 shadow-lg"
        style={{
          background:
            "conic-gradient(from 0deg, #2a2a2a 0%,#111 25%,#222 50%,#0f0f0f 75%,#2a2a2a 100%)",
        }}
      >
        {/* label */}
        <div
          className="absolute h-[13px] w-[13px] rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 30%, #333, #0d0d0d)",
            boxShadow: "0 0 4px rgba(0,0,0,0.8)",
          }}
        />
        {/* spindle */}
        <div className="absolute h-[3px] w-[3px] rounded-full bg-white/40" />
      </div>
    </div>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STORY_FILLS = [1, 0.55, 0, 0, 0] as const;

// ─── Main component ───────────────────────────────────────────────────────────

export default function StreetTikTok(): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-black font-sans">

      {/* ══ CINEMATIC VIDEO BACKGROUND ══ */}
      <div className="pointer-events-none absolute inset-0 z-0">

        {/* base scene: dark studio floor gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(175deg,#090c08 0%,#0a0a0a 30%,#080b08 55%,#060606 100%)",
          }}
        />

        {/* backdrop wall texture — subtle dark gradient bands */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 60% 30%, #0e1208 0%, transparent 65%)",
          }}
        />

        {/* neon green floor bloom (key light from below-left) */}
        <div
          className="absolute"
          style={{
            bottom: "-40px",
            left: "-30px",
            width: "240px",
            height: "260px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(57,255,20,0.22) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        {/* secondary green spill */}
        <div
          className="absolute"
          style={{
            bottom: "60px",
            left: "10px",
            width: "140px",
            height: "160px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(57,255,20,0.10) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* fuchsia/magenta rim from upper-right (hair light) */}
        <div
          className="absolute"
          style={{
            top: "-20px",
            right: "-30px",
            width: "200px",
            height: "220px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(224,64,251,0.18) 0%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
        {/* faint deep blue fill — center */}
        <div
          className="absolute"
          style={{
            top: "15%",
            left: "20%",
            width: "180px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,40,80,0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* figure container — fills full height, slightly right of center */}
        <div
          className="absolute inset-x-0"
          style={{ top: "4%", bottom: "24%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "72%", maxWidth: "240px", height: "100%" }}>
            <HeroFigure />
          </div>
        </div>

        {/* depth haze layers — mid */}
        <div
          className="absolute"
          style={{
            top: "20%",
            left: "-10%",
            width: "60%",
            height: "35%",
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(57,255,20,0.04) 0%, transparent 70%)",
            filter: "blur(18px)",
          }}
        />

        {/* subtle horizontal neon scan line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "42%",
            height: "1px",
            background:
              "linear-gradient(90deg,transparent 0%,rgba(57,255,20,0.14) 30%,rgba(57,255,20,0.10) 70%,transparent 100%)",
          }}
        />

        {/* CRT scanlines — very subtle */}
        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.9) 3px,rgba(255,255,255,0.9) 4px)",
          }}
        />

        {/* grain noise simulation — tiny dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Ccircle cx='1' cy='1' r='0.5' fill='white'/%3E%3C/svg%3E\")",
            backgroundSize: "4px 4px",
          }}
        />

        {/* TOP VIGNETTE — lets overlays read on any content */}
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: "160px",
            background:
              "linear-gradient(180deg,rgba(0,0,0,0.82) 0%,rgba(0,0,0,0.45) 55%,transparent 100%)",
          }}
        />

        {/* BOTTOM VIGNETTE — heavy so shelf is legible */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "290px",
            background:
              "linear-gradient(0deg,rgba(0,0,0,0.97) 0%,rgba(0,0,0,0.85) 40%,rgba(0,0,0,0.50) 70%,transparent 100%)",
          }}
        />

        {/* lateral vignettes */}
        <div
          className="absolute inset-y-0 left-0 w-8"
          style={{
            background:
              "linear-gradient(90deg,rgba(0,0,0,0.45) 0%,transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-8"
          style={{
            background:
              "linear-gradient(270deg,rgba(0,0,0,0.45) 0%,transparent 100%)",
          }}
        />
      </div>

      {/* ══ TOP HUD ══ */}
      <div className="relative z-10 px-3 pt-[10px]">
        {/* story progress segments */}
        <div className="mb-[8px] flex gap-[3.5px]">
          {STORY_FILLS.map((fill, i) => (
            <StoryBar key={i} fill={fill} />
          ))}
        </div>

        {/* Following / For You / Explore tabs */}
        <div className="flex items-center justify-center gap-6">
          <span className="text-[11px] font-semibold tracking-wide text-white/40">Following</span>
          <span className="relative text-[13px] font-black tracking-wider text-white drop-shadow-lg">
            For You
            <span
              className="absolute -bottom-[5px] left-1/2 h-[2.5px] w-[22px] -translate-x-1/2 rounded-full bg-white"
              style={{ boxShadow: "0 0 6px rgba(255,255,255,0.7)" }}
            />
          </span>
          <span className="text-[11px] font-semibold tracking-wide text-white/40">Explore</span>
        </div>
      </div>

      {/* ══ FLEX SPACER ══ */}
      <div className="relative z-10 flex-1" />

      {/* ══ RIGHT ACTION RAIL ══ */}
      <div
        className="absolute z-20 flex flex-col items-center gap-[13px]"
        style={{ bottom: "178px", right: "8px" }}
      >
        {/* avatar + follow badge */}
        <div className="relative mb-1">
          <div
            className="h-[42px] w-[42px] overflow-hidden rounded-full border-[2px] border-white shadow-xl"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #3de88a, #1aaf5a 50%, #0d6636)",
              boxShadow: "0 2px 12px rgba(57,255,20,0.35)",
            }}
          >
            {/* silhouette */}
            <div className="flex h-full w-full flex-col items-center justify-end pb-0">
              <div
                className="h-[14px] w-[14px] rounded-full"
                style={{ background: "rgba(255,255,255,0.25)", marginBottom: "2px" }}
              />
              <div
                className="h-[18px] w-[28px] rounded-t-full"
                style={{ background: "rgba(255,255,255,0.18)" }}
              />
            </div>
          </div>
          {/* + follow button */}
          <div
            className="absolute -bottom-[10px] left-1/2 -translate-x-1/2"
          >
            <div
              className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#fe2c55] shadow-lg"
              style={{ boxShadow: "0 2px 8px rgba(254,44,85,0.6)" }}
            >
              <Plus size={10} strokeWidth={3} className="text-white" />
            </div>
          </div>
        </div>

        {/* Heart */}
        <RailBtn label="12.4k">
          <Heart size={18} strokeWidth={0} fill="#fe2c55" className="text-[#fe2c55]" />
        </RailBtn>

        {/* Comment */}
        <RailBtn label="388">
          <MessageCircle size={18} strokeWidth={1.8} className="text-white" />
        </RailBtn>

        {/* Bookmark/Save */}
        <RailBtn label="Save">
          <Bookmark size={18} strokeWidth={1.8} className="text-white" />
        </RailBtn>

        {/* Share */}
        <RailBtn label="Share">
          <Share2 size={18} strokeWidth={1.8} className="text-white" />
        </RailBtn>

        {/* spinning music vinyl */}
        <SpinDisc />
      </div>

      {/* ══ BOTTOM OVERLAY STACK ══ */}
      <div className="relative z-10 w-full">

        {/* creator info — left column, right-padded for rail */}
        <div className="mb-[7px] px-[12px] pr-[54px]">

          {/* handle + tag */}
          <div className="mb-[4px] flex items-center gap-[6px]">
            <span
              className="text-[13.5px] font-black leading-none text-white drop-shadow-lg"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
            >
              @northline
            </span>
            <span
              className="rounded px-[5px] py-[1.5px] text-[7px] font-black uppercase tracking-wider text-[#39ff14]"
              style={{
                background: "rgba(57,255,20,0.12)",
                border: "1px solid rgba(57,255,20,0.3)",
              }}
            >
              STREETWEAR
            </span>
          </div>

          {/* caption */}
          <p
            className="mb-[6px] text-[10.5px] font-medium leading-snug text-white/90 drop-shadow"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
          >
            new drop just landed &#x1F525; limited 200 pcs only
          </p>

          {/* featured product anchor pill */}
          <div className="mb-[6px] inline-flex">
            <div
              className="flex items-center gap-[5px] rounded-full px-[9px] py-[5px]"
              style={{
                background: "rgba(0,0,0,0.65)",
                border: "1px solid rgba(57,255,20,0.35)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 10px rgba(57,255,20,0.15)",
              }}
            >
              <ShoppingCart size={9} strokeWidth={2.2} className="shrink-0 text-[#39ff14]" />
              <span className="text-[9px] font-semibold text-white">Shadow Cargo Tee</span>
              <span className="text-[9px] font-black text-[#39ff14]" style={{ textShadow: "0 0 6px rgba(57,255,20,0.6)" }}>$48</span>
              <ChevronRight size={8} strokeWidth={2.5} className="shrink-0 text-[#39ff14]/70" />
            </div>
          </div>

          {/* sound ticker */}
          <div className="flex items-center gap-[5px]">
            <Music2 size={9} strokeWidth={2} className="shrink-0 animate-pulse text-white/50" />
            <span className="truncate text-[9px] text-white/45">
              &#9834;&nbsp;original sound &#8212; northline
            </span>
          </div>
        </div>

        {/* ── PRODUCTS IN THIS VIDEO shelf ── */}
        <div
          className="mx-[6px] mb-[8px] overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(160deg,rgba(14,14,14,0.96) 0%,rgba(8,8,8,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 -4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* shelf header row */}
          <div className="flex items-center justify-between px-[12px] pb-[6px] pt-[9px]">
            <div className="flex items-center gap-[5px]">
              <ShoppingCart size={10} strokeWidth={2.3} className="text-[#39ff14]" />
              <span className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-white/55">
                Products in this video
              </span>
            </div>
            {/* cart pill with item count */}
            <button
              className="flex items-center gap-[4px] rounded-full px-[9px] py-[4px]"
              style={{
                background: "linear-gradient(135deg,#ffe033,#ffb800)",
                boxShadow: "0 2px 8px rgba(255,184,0,0.45)",
              }}
              aria-label="Open cart"
            >
              <ShoppingCart size={9} strokeWidth={2.5} className="text-black" />
              <span className="text-[8.5px] font-black text-black">3</span>
            </button>
          </div>

          {/* product cards row */}
          <div className="flex justify-between gap-[5px] px-[7px] pb-[9px]">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
