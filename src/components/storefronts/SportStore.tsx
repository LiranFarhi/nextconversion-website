import { Search, User, ShoppingCart, Heart, Truck, RotateCcw, Leaf, ChevronRight } from "lucide-react";

/* ─────────────────────────────────────────────
   Garment SVG illustrations  (module scope)
───────────────────────────────────────────── */
function LeggingsSVG() {
  return (
    <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Waistband */}
      <rect x="28" y="18" width="64" height="14" rx="7" fill="#7c7ca8" />
      <rect x="28" y="18" width="64" height="6" rx="3" fill="#8f8fbc" />
      {/* Left leg */}
      <path d="M28 32 L50 32 L42 148 L16 148 Z" fill="#8080aa" />
      {/* Right leg */}
      <path d="M70 32 L92 32 L104 148 L78 148 Z" fill="#8080aa" />
      {/* Center panel */}
      <path d="M50 32 L70 32 L70 88 L60 96 L50 88 Z" fill="#9090be" />
      {/* Highlight sheen left */}
      <path d="M32 36 Q36 70 34 110" stroke="#a0a0cc" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Seam */}
      <line x1="60" y1="96" x2="60" y2="148" stroke="#a0a0cc" strokeWidth="2" strokeDasharray="5,4" opacity="0.6" />
      {/* Ankle bands */}
      <rect x="13" y="142" width="30" height="8" rx="4" fill="#6a6a90" />
      <rect x="76" y="142" width="30" height="8" rx="4" fill="#6a6a90" />
      {/* Subtle texture dots */}
      <circle cx="38" cy="60" r="1.5" fill="#b0b0d8" opacity="0.4" />
      <circle cx="38" cy="80" r="1.5" fill="#b0b0d8" opacity="0.4" />
      <circle cx="38" cy="100" r="1.5" fill="#b0b0d8" opacity="0.4" />
      <circle cx="82" cy="60" r="1.5" fill="#b0b0d8" opacity="0.4" />
      <circle cx="82" cy="80" r="1.5" fill="#b0b0d8" opacity="0.4" />
      <circle cx="82" cy="100" r="1.5" fill="#b0b0d8" opacity="0.4" />
    </svg>
  );
}

function BraSVG() {
  return (
    <svg viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Straps */}
      <path d="M42 28 Q38 14 46 10 Q52 7 54 22" stroke="#9f7fa0" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M78 28 Q82 14 74 10 Q68 7 66 22" stroke="#9f7fa0" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {/* Top band */}
      <path d="M38 30 Q60 23 82 30" stroke="#b892b8" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Left cup */}
      <path d="M24 50 Q32 28 60 30 Q44 38 40 60 Q30 62 24 50 Z" fill="#c8a0c0" />
      {/* Right cup */}
      <path d="M96 50 Q88 28 60 30 Q76 38 80 60 Q90 62 96 50 Z" fill="#c8a0c0" />
      {/* Cup highlight */}
      <path d="M34 36 Q38 32 44 34" stroke="#dcc0da" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M86 36 Q82 32 76 34" stroke="#dcc0da" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.8" />
      {/* Center gore */}
      <path d="M57 30 Q60 36 63 30" stroke="#9f7fa0" strokeWidth="2" fill="none" />
      {/* Underbust band */}
      <path d="M24 50 Q60 68 96 50 Q96 70 60 76 Q24 70 24 50 Z" fill="#b490b2" />
      {/* Clasp */}
      <rect x="56" y="72" width="8" height="5" rx="2.5" fill="#987890" />
      {/* Mesh dots */}
      <circle cx="46" cy="43" r="1.5" fill="white" opacity="0.35" />
      <circle cx="54" cy="48" r="1.5" fill="white" opacity="0.35" />
      <circle cx="74" cy="43" r="1.5" fill="white" opacity="0.35" />
      <circle cx="66" cy="48" r="1.5" fill="white" opacity="0.35" />
      <circle cx="50" cy="55" r="1.5" fill="white" opacity="0.25" />
      <circle cx="70" cy="55" r="1.5" fill="white" opacity="0.25" />
    </svg>
  );
}

function JacketSVG() {
  return (
    <svg viewBox="0 0 120 148" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <path d="M34 42 L20 58 L20 132 L100 132 L100 58 L86 42 Z" fill="#6b8c70" />
      {/* Left sleeve */}
      <path d="M34 42 L12 52 L12 94 L28 94 L34 56 Z" fill="#5e7d63" />
      {/* Right sleeve */}
      <path d="M86 42 L108 52 L108 94 L92 94 L86 56 Z" fill="#5e7d63" />
      {/* Hood */}
      <path d="M44 30 Q44 10 60 8 Q76 10 76 30 Z" fill="#7a9f80" />
      {/* Collar */}
      <path d="M40 30 L46 40 L60 36 L74 40 L80 30 L86 42 L34 42 Z" fill="#6b8c70" />
      {/* Zip */}
      <line x1="60" y1="42" x2="60" y2="132" stroke="#90b898" strokeWidth="2.5" />
      <rect x="56" y="56" width="8" height="5" rx="2.5" fill="#d0e8d0" />
      {/* Pockets */}
      <path d="M28 96 Q30 88 40 90 L40 108 Q30 108 28 100 Z" fill="#5e7d63" stroke="#4a6650" strokeWidth="1" />
      <path d="M92 96 Q90 88 80 90 L80 108 Q90 108 92 100 Z" fill="#5e7d63" stroke="#4a6650" strokeWidth="1" />
      {/* Cuffs */}
      <rect x="10" y="90" width="20" height="8" rx="4" fill="#4a6650" />
      <rect x="90" y="90" width="20" height="8" rx="4" fill="#4a6650" />
      {/* Hem */}
      <rect x="20" y="126" width="80" height="8" rx="4" fill="#4a6650" />
      {/* Chest seam */}
      <path d="M34 42 L34 132" stroke="#7aaa80" strokeWidth="0.8" opacity="0.3" />
      <path d="M86 42 L86 132" stroke="#7aaa80" strokeWidth="0.8" opacity="0.3" />
      {/* Sheen */}
      <path d="M22 62 Q26 90 24 118" stroke="#90b898" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}

function TeeSVG() {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <path d="M36 40 L26 126 L94 126 L84 40 Z" fill="#a8a898" />
      {/* Left sleeve */}
      <path d="M36 40 L14 36 L10 68 L32 70 Z" fill="#989888" />
      {/* Right sleeve */}
      <path d="M84 40 L106 36 L110 68 L88 70 Z" fill="#989888" />
      {/* Neckline */}
      <path d="M42 34 Q60 24 78 34 Q72 44 60 46 Q48 44 42 34 Z" fill="#bcbcaa" />
      {/* Fabric highlight */}
      <path d="M30 48 Q34 80 32 112" stroke="#bcbcaa" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
      {/* Shoulder seams */}
      <line x1="36" y1="40" x2="32" y2="70" stroke="#bcbcaa" strokeWidth="1" opacity="0.4" />
      <line x1="84" y1="40" x2="88" y2="70" stroke="#bcbcaa" strokeWidth="1" opacity="0.4" />
      {/* Logo mark */}
      <circle cx="52" cy="60" r="5" stroke="#c8c8b4" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M50.5 60 L53 58.5 L53 61.5 Z" fill="#c8c8b4" opacity="0.7" />
      {/* Side seams */}
      <line x1="36" y1="40" x2="26" y2="126" stroke="#bcbcaa" strokeWidth="0.8" opacity="0.3" />
      <line x1="84" y1="40" x2="94" y2="126" stroke="#bcbcaa" strokeWidth="0.8" opacity="0.3" />
      {/* Hem */}
      <path d="M26 120 Q60 130 94 120 L94 126 L26 126 Z" fill="#909080" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Hero athlete SVG  (module scope)
───────────────────────────────────────────── */
function HeroAthleteIllustration() {
  return (
    <svg viewBox="0 0 340 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background shape */}
      <ellipse cx="170" cy="300" rx="130" ry="160" fill="url(#heroGrad)" opacity="0.3" />

      {/* Floating orbs */}
      <circle cx="290" cy="80" r="36" fill="#a78bfa" opacity="0.18" />
      <circle cx="60" cy="130" r="20" fill="#c4b5fd" opacity="0.14" />
      <circle cx="310" cy="370" r="28" fill="#8b5cf6" opacity="0.12" />

      {/* Figure — minimalist athlete in motion */}
      {/* Head */}
      <circle cx="170" cy="72" r="24" fill="#f0e8df" />
      {/* Hair */}
      <path d="M148 60 Q160 44 180 46 Q196 48 194 62 Q186 52 170 50 Q154 52 148 60 Z" fill="#3a2a18" />
      {/* Neck */}
      <rect x="162" y="94" width="16" height="18" rx="8" fill="#f0e8df" />
      {/* Sports bra / top — violet */}
      <path d="M136 112 Q152 104 170 106 Q188 104 204 112 L208 148 Q188 158 170 156 Q152 158 132 148 Z" fill="#8b5cf6" />
      {/* Bra straps */}
      <path d="M155 106 L162 94" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
      <path d="M185 106 L178 94" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
      {/* Leggings — deep violet */}
      <path d="M132 148 L126 148 L118 310 L148 310 L158 220 L162 148 Z" fill="#6d28d9" />
      <path d="M208 148 L214 148 L222 310 L192 310 L182 220 L178 148 Z" fill="#6d28d9" />
      {/* Center panel leggings */}
      <path d="M162 148 L178 148 L176 220 L170 230 L164 220 Z" fill="#7c3aed" />
      {/* Left arm — extended back/up */}
      <path d="M136 112 Q110 100 90 86 Q82 80 86 74 Q90 68 98 74 Q118 90 140 108" fill="#f0e8df" />
      {/* Right arm — forward sweep */}
      <path d="M204 112 Q230 106 252 118 Q262 124 258 132 Q254 140 244 136 Q224 126 206 116" fill="#f0e8df" />
      {/* Shoes */}
      <ellipse cx="133" cy="316" rx="20" ry="8" fill="#1e1b4b" />
      <ellipse cx="207" cy="316" rx="20" ry="8" fill="#1e1b4b" />
      <rect x="113" y="308" width="40" height="10" rx="5" fill="#2e2a6b" />
      <rect x="187" y="308" width="40" height="10" rx="5" fill="#2e2a6b" />
      {/* Shoe accent */}
      <path d="M118 310 L148 310" stroke="#a78bfa" strokeWidth="2" opacity="0.7" />
      <path d="M192 310 L222 310" stroke="#a78bfa" strokeWidth="2" opacity="0.7" />
      {/* Legging seam */}
      <line x1="170" y1="230" x2="170" y2="310" stroke="#a78bfa" strokeWidth="2" strokeDasharray="5,4" opacity="0.5" />
      {/* Waistband */}
      <rect x="126" y="144" width="88" height="12" rx="6" fill="#5b21b6" />
      {/* Motion lines */}
      <path d="M72 100 Q60 106 56 120" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" strokeDasharray="4,3" />
      <path d="M256 126 Q270 128 278 140" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" strokeDasharray="4,3" />
      {/* Floating accent dots */}
      <circle cx="96" cy="168" r="4" fill="#c4b5fd" opacity="0.6" />
      <circle cx="250" cy="200" r="3" fill="#c4b5fd" opacity="0.5" />
      <circle cx="280" cy="290" r="5" fill="#a78bfa" opacity="0.35" />
      <circle cx="80" cy="260" r="3" fill="#c4b5fd" opacity="0.4" />

      {/* "Brand tag" ribbon */}
      <rect x="140" y="350" width="60" height="22" rx="11" fill="#5b21b6" opacity="0.85" />
      <text x="170" y="366" textAnchor="middle" fill="white" fontSize="9" fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="700" letterSpacing="2">AERIS</text>

      <defs>
        <radialGradient id="heroGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ddd6fe" />
          <stop offset="100%" stopColor="#ede9fe" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Sub-components  (module scope — lint safe)
───────────────────────────────────────────── */
interface ProductCardProps {
  name: string;
  price: string;
  bg: string;
  tag: string | null;
  swatches: string[];
  illustration: React.ReactNode;
}

function ProductCard({ name, price, bg, tag, swatches, illustration }: ProductCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-stone-100/80 flex-1">
      {/* Illustration tile */}
      <div className={`relative flex items-center justify-center ${bg} overflow-hidden`} style={{ height: 178 }}>
        <div className="w-24 h-32 flex items-center justify-center">
          {illustration}
        </div>

        {tag && (
          <span
            className={`absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide shadow-sm ${
              tag === "New" ? "bg-violet-500 text-white" : "bg-lime-400 text-stone-800"
            }`}
          >
            {tag}
          </span>
        )}

        <button className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-stone-400 shadow-sm backdrop-blur-sm hover:text-violet-500 transition-colors">
          <Heart size={13} strokeWidth={1.8} />
        </button>
      </div>

      {/* Card info */}
      <div className="px-3.5 pt-3 pb-3.5 flex flex-col gap-2">
        {/* Swatches */}
        <div className="flex items-center gap-1.5">
          {swatches.map((color) => (
            <span
              key={color}
              className="h-3 w-3 rounded-full border-[1.5px] border-white shadow ring-1 ring-stone-200/70"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="ml-1 text-[10px] text-stone-400 font-medium">{swatches.length} colors</span>
        </div>

        {/* Name + price */}
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="text-[13px] font-semibold text-stone-800 leading-tight">{name}</p>
            <p className="text-[12px] font-bold text-stone-500 mt-0.5">{price}</p>
          </div>
          <button className="flex-shrink-0 rounded-full bg-stone-900 text-white text-[10px] font-bold tracking-wide px-3.5 py-1.5 hover:bg-violet-600 transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Static data  (module scope)
───────────────────────────────────────────── */
const navLinks = ["Women", "Men", "Collections", "Sale"];

const products: ProductCardProps[] = [
  {
    name: "Seamless Leggings",
    price: "$98",
    bg: "bg-[#edeaf8]",
    tag: "Bestseller",
    swatches: ["#8080aa", "#4a4a70", "#a09888"],
    illustration: <LeggingsSVG />,
  },
  {
    name: "Sculpt Bra",
    price: "$64",
    bg: "bg-[#f6eef6]",
    tag: "New",
    swatches: ["#c8a0c0", "#8a6878", "#e0ccd8"],
    illustration: <BraSVG />,
  },
  {
    name: "Featherlight Jacket",
    price: "$145",
    bg: "bg-[#eaf0ec]",
    tag: null,
    swatches: ["#6b8c70", "#3e5442", "#9aaa8a"],
    illustration: <JacketSVG />,
  },
  {
    name: "Performance Tee",
    price: "$52",
    bg: "bg-[#f0efea]",
    tag: null,
    swatches: ["#a8a898", "#686858", "#d0cebe"],
    illustration: <TeeSVG />,
  },
];

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function SportStore() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#fafaf9] font-sans">

      {/* ══════════════ TOP NAV ══════════════ */}
      <header className="flex flex-shrink-0 items-center justify-between border-b border-stone-200/80 bg-white px-8 py-0" style={{ height: 54 }}>
        {/* Wordmark */}
        <span className="text-[17px] font-black tracking-[0.28em] text-stone-900 select-none">
          AERIS
        </span>

        {/* Nav links */}
        <nav className="flex items-center gap-7">
          {navLinks.map((link) => (
            <span
              key={link}
              className={`text-[13px] font-medium tracking-wide cursor-pointer transition-colors ${
                link === "Sale"
                  ? "text-violet-600 font-semibold"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {link}
            </span>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-stone-500">
          <Search size={16} strokeWidth={1.8} className="cursor-pointer hover:text-stone-900 transition-colors" />
          <User size={16} strokeWidth={1.8} className="cursor-pointer hover:text-stone-900 transition-colors" />
          <span className="relative cursor-pointer">
            <ShoppingCart size={16} strokeWidth={1.8} className="hover:text-stone-900 transition-colors" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-violet-600 text-[9px] font-bold leading-none text-white">
              2
            </span>
          </span>
        </div>
      </header>

      {/* ══════════════ HERO ══════════════ */}
      <section
        className="relative flex flex-shrink-0 overflow-hidden"
        style={{ height: 296 }}
      >
        {/* Left — editorial text */}
        <div
          className="relative flex flex-col justify-center pl-12 pr-6 z-10"
          style={{ width: 560 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-violet-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600">
              Summer &#8217;26 Collection
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[52px] font-black leading-[1.0] tracking-tight text-stone-900 mb-4">
            Move with<br />
            <span className="text-violet-600">Intention.</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-[14px] font-normal text-stone-500 leading-relaxed mb-6 max-w-xs">
            Performance activewear engineered for women who refuse to compromise&mdash;in the studio or on the street.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-stone-900 px-7 py-2.5 text-[13px] font-bold tracking-wide text-white shadow-md hover:bg-violet-700 transition-colors">
              Shop New In
            </button>
            <button className="flex items-center gap-1.5 text-[13px] font-semibold text-stone-600 hover:text-violet-600 transition-colors">
              View Lookbook <ChevronRight size={14} />
            </button>
          </div>

          {/* Trust micro-row */}
          <div className="flex items-center gap-5 mt-5">
            <div className="flex items-center gap-1.5 text-stone-400">
              <Truck size={12} strokeWidth={1.8} />
              <span className="text-[11px]">Free over $75</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-400">
              <RotateCcw size={12} strokeWidth={1.8} />
              <span className="text-[11px]">30-day returns</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-400">
              <Leaf size={12} strokeWidth={1.8} />
              <span className="text-[11px]">Carbon neutral</span>
            </div>
          </div>
        </div>

        {/* Right — hero lifestyle image block */}
        <div className="absolute right-0 top-0 bottom-0 flex items-stretch" style={{ width: 660 }}>
          {/* Gradient wash */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 35%, #c4b5fd 70%, #a78bfa 100%)",
            }}
          />
          {/* Subtle grid texture */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridPat" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#4c1d95" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPat)" />
          </svg>
          {/* Decorative circles */}
          <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-violet-300/25" />
          <div className="absolute bottom-[-30px] left-[60px] w-32 h-32 rounded-full bg-white/15" />
          {/* Athlete illustration */}
          <div className="relative z-10 flex items-center justify-center w-full h-full overflow-hidden pl-12">
            <div style={{ height: 288, width: 340 }} className="flex-shrink-0">
              <HeroAthleteIllustration />
            </div>
          </div>
          {/* Fade-left blend */}
          <div
            className="absolute inset-y-0 left-0 w-20 pointer-events-none"
            style={{ background: "linear-gradient(to right, #fafaf9, transparent)" }}
          />
        </div>
      </section>

      {/* ══════════════ TRUST BAR ══════════════ */}
      <div className="flex flex-shrink-0 items-center justify-center gap-10 border-y border-stone-200/60 bg-white px-8" style={{ height: 38 }}>
        <div className="flex items-center gap-2 text-stone-500">
          <Truck size={13} strokeWidth={1.8} className="text-violet-500" />
          <span className="text-[12px] font-medium">Free shipping over $75</span>
        </div>
        <span className="h-3 w-px bg-stone-200" />
        <div className="flex items-center gap-2 text-stone-500">
          <RotateCcw size={13} strokeWidth={1.8} className="text-violet-500" />
          <span className="text-[12px] font-medium">30-day returns</span>
        </div>
        <span className="h-3 w-px bg-stone-200" />
        <div className="flex items-center gap-2 text-stone-500">
          <Leaf size={13} strokeWidth={1.8} className="text-violet-500" />
          <span className="text-[12px] font-medium">Carbon neutral shipping</span>
        </div>
      </div>

      {/* ══════════════ NEW ARRIVALS ══════════════ */}
      <div className="flex flex-shrink-0 items-end justify-between px-8 pt-4 pb-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600 mb-0.5">
            Just Dropped
          </p>
          <h2 className="text-[20px] font-black tracking-tight text-stone-900">
            New Arrivals
          </h2>
        </div>
        <button className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-[12px] font-semibold text-stone-600 shadow-sm hover:border-violet-400 hover:text-violet-600 transition-colors">
          View all <ChevronRight size={13} />
        </button>
      </div>

      {/* ══════════════ PRODUCT GRID ══════════════ */}
      <div className="flex flex-1 min-h-0 gap-4 px-8 pb-5">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}
