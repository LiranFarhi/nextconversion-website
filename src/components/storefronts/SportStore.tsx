import { Search, User, ShoppingCart, Heart, Truck, RotateCcw, Leaf, Plus } from "lucide-react";

/* ── Garment SVG illustrations ── */
function LeggingsSVG() {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-auto drop-shadow-sm">
      {/* Waistband */}
      <rect x="18" y="10" width="44" height="8" rx="4" fill="#6b6b8a" opacity="0.9"/>
      {/* Left leg */}
      <path d="M18 18 L28 18 L22 92 L10 92 Z" fill="#7c7c9e" rx="3"/>
      {/* Right leg */}
      <path d="M52 18 L62 18 L70 92 L58 92 Z" fill="#7c7c9e"/>
      {/* Center panel */}
      <path d="M28 18 L52 18 L52 55 L40 60 L28 55 Z" fill="#8888b0"/>
      {/* Seam lines */}
      <line x1="40" y1="60" x2="40" y2="92" stroke="#9999bb" strokeWidth="1.5" strokeDasharray="3,2"/>
      <line x1="28" y1="18" x2="22" y2="92" stroke="#9999bb" strokeWidth="0.8" opacity="0.5"/>
      <line x1="52" y1="18" x2="58" y2="92" stroke="#9999bb" strokeWidth="0.8" opacity="0.5"/>
      {/* Ankle bands */}
      <rect x="7" y="88" width="16" height="5" rx="2.5" fill="#6b6b8a" opacity="0.9"/>
      <rect x="55" y="88" width="16" height="5" rx="2.5" fill="#6b6b8a" opacity="0.9"/>
    </svg>
  );
}

function BraSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-auto drop-shadow-sm">
      {/* Straps */}
      <path d="M26 18 Q22 10 28 8 Q32 6 34 14" stroke="#b08fa0" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M54 18 Q58 10 52 8 Q48 6 46 14" stroke="#b08fa0" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Band across top */}
      <path d="M24 18 Q40 14 56 18" stroke="#c4a0b4" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Left cup */}
      <path d="M18 30 Q24 18 40 20 Q30 26 28 38 Q22 38 18 30 Z" fill="#c4a0b4" opacity="0.95"/>
      {/* Right cup */}
      <path d="M62 30 Q56 18 40 20 Q50 26 52 38 Q58 38 62 30 Z" fill="#c4a0b4" opacity="0.95"/>
      {/* Center gore */}
      <path d="M38 20 Q40 24 42 20" stroke="#b08fa0" strokeWidth="1.5" fill="none"/>
      {/* Underbust band */}
      <path d="M18 30 Q40 42 62 30 Q62 44 40 48 Q18 44 18 30 Z" fill="#b897aa" opacity="0.9"/>
      {/* Back clasp hint */}
      <rect x="37" y="44" width="6" height="4" rx="2" fill="#a08090" opacity="0.8"/>
      {/* Mesh texture dots */}
      <circle cx="30" cy="27" r="1" fill="white" opacity="0.3"/>
      <circle cx="35" cy="30" r="1" fill="white" opacity="0.3"/>
      <circle cx="50" cy="27" r="1" fill="white" opacity="0.3"/>
      <circle cx="45" cy="30" r="1" fill="white" opacity="0.3"/>
    </svg>
  );
}

function JacketSVG() {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-auto drop-shadow-sm">
      {/* Body */}
      <path d="M22 28 L14 38 L14 88 L66 88 L66 38 L58 28 Z" fill="#6b7c6e" opacity="0.9"/>
      {/* Left sleeve */}
      <path d="M22 28 L8 34 L8 62 L18 62 L22 36 Z" fill="#5e7060" opacity="0.95"/>
      {/* Right sleeve */}
      <path d="M58 28 L72 34 L72 62 L62 62 L58 36 Z" fill="#5e7060" opacity="0.95"/>
      {/* Collar/hood area */}
      <path d="M28 20 L32 14 L40 12 L48 14 L52 20 L58 28 L22 28 Z" fill="#5e7060"/>
      {/* Hood */}
      <path d="M30 20 Q30 8 40 8 Q50 8 50 20 Z" fill="#7a8f7d" opacity="0.8"/>
      {/* Zip line */}
      <line x1="40" y1="28" x2="40" y2="88" stroke="#90a890" strokeWidth="1.5"/>
      {/* Zip pull */}
      <rect x="37" y="38" width="6" height="3" rx="1.5" fill="#c8d8c8" opacity="0.9"/>
      {/* Left pocket */}
      <path d="M20 62 Q22 58 28 60 L28 72 Q22 72 20 68 Z" fill="#5e7060" stroke="#4a5e4c" strokeWidth="0.8"/>
      {/* Right pocket */}
      <path d="M60 62 Q58 58 52 60 L52 72 Q58 72 60 68 Z" fill="#5e7060" stroke="#4a5e4c" strokeWidth="0.8"/>
      {/* Cuffs */}
      <rect x="6" y="60" width="14" height="5" rx="2.5" fill="#4a5e4c" opacity="0.9"/>
      <rect x="60" y="60" width="14" height="5" rx="2.5" fill="#4a5e4c" opacity="0.9"/>
      {/* Hem band */}
      <rect x="14" y="84" width="52" height="6" rx="3" fill="#4a5e4c" opacity="0.9"/>
    </svg>
  );
}

function TeeSVG() {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-auto drop-shadow-sm">
      {/* Body */}
      <path d="M24 26 L18 82 L62 82 L56 26 Z" fill="#9e9e8e" opacity="0.9"/>
      {/* Left sleeve */}
      <path d="M24 26 L10 24 L8 44 L22 44 Z" fill="#8e8e7e" opacity="0.95"/>
      {/* Right sleeve */}
      <path d="M56 26 L70 24 L72 44 L58 44 Z" fill="#8e8e7e" opacity="0.95"/>
      {/* Neckline */}
      <path d="M28 22 Q40 16 52 22 Q48 28 40 28 Q32 28 28 22 Z" fill="#b8b8a4" opacity="0.9"/>
      {/* Shoulder seams */}
      <line x1="24" y1="26" x2="22" y2="44" stroke="#b4b4a0" strokeWidth="0.8" opacity="0.6"/>
      <line x1="56" y1="26" x2="58" y2="44" stroke="#b4b4a0" strokeWidth="0.8" opacity="0.6"/>
      {/* Center seam / texture hint */}
      <line x1="40" y1="28" x2="40" y2="82" stroke="#b4b4a0" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.4"/>
      {/* Small logo mark */}
      <circle cx="34" cy="38" r="3" stroke="#b4b4a0" strokeWidth="1" fill="none" opacity="0.7"/>
      <path d="M33 38 L35 37 L35 39 Z" fill="#b4b4a0" opacity="0.7"/>
      {/* Hem */}
      <path d="M18 78 Q40 84 62 78 L62 82 L18 82 Z" fill="#8a8a7a" opacity="0.8"/>
    </svg>
  );
}

function ShortsSVG() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-auto drop-shadow-sm">
      {/* Waistband */}
      <rect x="16" y="10" width="48" height="9" rx="4.5" fill="#5a6e82" opacity="0.95"/>
      {/* Left leg */}
      <path d="M16 19 L28 19 L26 70 L12 70 Q10 60 12 50 Z" fill="#6e84a0" opacity="0.9"/>
      {/* Right leg */}
      <path d="M64 19 L52 19 L54 70 L68 70 Q70 60 68 50 Z" fill="#6e84a0" opacity="0.9"/>
      {/* Center panel */}
      <path d="M28 19 L52 19 L52 42 L40 46 L28 42 Z" fill="#7a92b0"/>
      {/* Inseam */}
      <line x1="40" y1="46" x2="40" y2="70" stroke="#8aA2c0" strokeWidth="1.5" strokeDasharray="3,2"/>
      {/* Side stripes */}
      <line x1="18" y1="22" x2="15" y2="68" stroke="#4a6070" strokeWidth="2" opacity="0.6"/>
      <line x1="62" y1="22" x2="65" y2="68" stroke="#4a6070" strokeWidth="2" opacity="0.6"/>
      {/* Drawstring */}
      <line x1="32" y1="14" x2="36" y2="19" stroke="#9ab0c8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="48" y1="14" x2="44" y2="19" stroke="#9ab0c8" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="32" cy="13" r="1.5" fill="#9ab0c8"/>
      <circle cx="48" cy="13" r="1.5" fill="#9ab0c8"/>
      {/* Leg hem */}
      <path d="M10 67 Q19 72 27 70" stroke="#5a6e82" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M53 70 Q61 72 70 67" stroke="#5a6e82" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function TankSVG() {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-auto drop-shadow-sm">
      {/* Body */}
      <path d="M26 22 L20 88 L60 88 L54 22 Z" fill="#a89878" opacity="0.9"/>
      {/* Left strap */}
      <path d="M28 14 Q26 8 32 6 Q36 4 36 14 Z" fill="#b8a888" opacity="0.95"/>
      {/* Right strap */}
      <path d="M52 14 Q54 8 48 6 Q44 4 44 14 Z" fill="#b8a888" opacity="0.95"/>
      {/* Neckline scoop */}
      <path d="M28 14 Q40 20 52 14 Q50 24 40 26 Q30 24 28 14 Z" fill="#c0b090" opacity="0.85"/>
      {/* Armhole left */}
      <path d="M26 22 Q20 26 20 36 L24 36 Q24 28 28 24 Z" fill="#9a8868" opacity="0.9"/>
      {/* Armhole right */}
      <path d="M54 22 Q60 26 60 36 L56 36 Q56 28 52 24 Z" fill="#9a8868" opacity="0.9"/>
      {/* Drape / flow lines */}
      <line x1="36" y1="26" x2="34" y2="88" stroke="#c0b090" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.5"/>
      <line x1="44" y1="26" x2="46" y2="88" stroke="#c0b090" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.5"/>
      {/* Hem curve */}
      <path d="M20 84 Q40 92 60 84 L60 88 L20 88 Z" fill="#90806a" opacity="0.8"/>
      {/* Cropped hint band */}
      <rect x="20" y="60" width="40" height="4" rx="2" fill="#9a8868" opacity="0.5"/>
    </svg>
  );
}

/* ── Product data ── */
const products = [
  {
    name: "Seamless Leggings",
    price: "$98",
    bg: "bg-[#e8e6f0]",
    tag: "Bestseller",
    tagColor: "bg-lime-400 text-stone-800",
    swatches: ["#7c7c9e", "#4a4a6a", "#a09880"],
    illustration: <LeggingsSVG />,
  },
  {
    name: "Sculpt Bra",
    price: "$64",
    bg: "bg-[#f0e8ec]",
    tag: "New",
    tagColor: "bg-violet-400 text-white",
    swatches: ["#c4a0b4", "#8a6878", "#d4c0b0"],
    illustration: <BraSVG />,
  },
  {
    name: "Featherlight Jacket",
    price: "$145",
    bg: "bg-[#e6ede8]",
    tag: null,
    tagColor: "",
    swatches: ["#5e7060", "#3a4a3c", "#8a9a7a"],
    illustration: <JacketSVG />,
  },
  {
    name: "Performance Tee",
    price: "$52",
    bg: "bg-[#eeede8]",
    tag: null,
    tagColor: "",
    swatches: ["#9e9e8e", "#6a6a5a", "#cac8b8"],
    illustration: <TeeSVG />,
  },
  {
    name: "Train Shorts",
    price: "$58",
    bg: "bg-[#e6eaf0]",
    tag: "New",
    tagColor: "bg-violet-400 text-white",
    swatches: ["#6e84a0", "#3a4e62", "#9ab0c8"],
    illustration: <ShortsSVG />,
  },
  {
    name: "Flow Tank",
    price: "$46",
    bg: "bg-[#f0ece4]",
    tag: null,
    tagColor: "",
    swatches: ["#a89878", "#6a5c40", "#d0c0a0"],
    illustration: <TankSVG />,
  },
];

const trustItems = [
  { icon: <Truck size={10} strokeWidth={1.8} />, label: "Free ship $75+" },
  { icon: <RotateCcw size={10} strokeWidth={1.8} />, label: "30-day returns" },
  { icon: <Leaf size={10} strokeWidth={1.8} />, label: "Carbon neutral" },
];

export default function SportStore() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-stone-50 font-sans">

      {/* ── Sticky Top Nav ── */}
      <header className="z-20 flex flex-shrink-0 items-center justify-between border-b border-stone-200 bg-white/95 px-3 py-2 backdrop-blur-sm">
        <span className="text-[13px] font-black tracking-[0.2em] text-stone-800">
          AERIS
        </span>
        <nav className="flex items-center gap-2.5">
          {["Women", "Collections", "New", "Sale"].map((link) => (
            <span
              key={link}
              className={`text-[9px] font-medium tracking-wide ${
                link === "New"
                  ? "text-lime-600 underline underline-offset-2"
                  : "text-stone-400"
              }`}
            >
              {link}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-stone-500">
          <Search size={12} strokeWidth={1.8} />
          <User size={12} strokeWidth={1.8} />
          <span className="relative">
            <ShoppingCart size={12} strokeWidth={1.8} />
            <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-lime-500 text-[7px] font-bold leading-none text-white">
              2
            </span>
          </span>
        </div>
      </header>

      {/* ── Hero Strip ── */}
      <section className="relative flex flex-shrink-0 items-center overflow-hidden bg-gradient-to-r from-stone-100 to-stone-200" style={{ minHeight: "22%", maxHeight: "26%" }}>
        {/* Decorative arcs */}
        <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full border-[18px] border-stone-300/40" />
        <div className="absolute -right-2 top-4 h-20 w-20 rounded-full border-[10px] border-lime-400/20" />

        <div className="relative z-10 flex flex-col justify-center px-4 py-3">
          <span className="mb-1 inline-flex w-fit items-center rounded-full bg-lime-400 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-stone-800">
            Summer &#8217;26
          </span>
          <h1 className="text-[20px] font-black leading-tight tracking-tight text-stone-800">
            Move with<br />Intention
          </h1>
          <p className="mt-1 text-[9px] font-medium text-stone-500 leading-relaxed">
            Premium activewear for<br />women who demand more.
          </p>
          <button className="mt-2 w-fit rounded-full bg-stone-800 px-4 py-1.5 text-[8px] font-bold uppercase tracking-widest text-white shadow-sm">
            Shop New In
          </button>
        </div>

        {/* Mini product peek — three stacked pill shapes */}
        <div className="absolute right-3 bottom-0 flex items-end gap-1.5 opacity-80">
          <div className="h-16 w-8 rounded-t-full bg-[#e8e6f0] border border-stone-200/60 shadow-sm" />
          <div className="h-20 w-8 rounded-t-full bg-[#e6ede8] border border-stone-200/60 shadow-sm" />
          <div className="h-14 w-8 rounded-t-full bg-[#f0e8ec] border border-stone-200/60 shadow-sm" />
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div className="flex flex-shrink-0 items-center justify-around border-b border-stone-100 bg-stone-100/60 px-2 py-1">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-1 text-stone-500">
            <span className="text-lime-600">{item.icon}</span>
            <span className="text-[8px] font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* ── Section Header ── */}
      <div className="flex flex-shrink-0 items-center justify-between px-3 pb-1 pt-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-stone-700">
          New Arrivals
        </span>
        <span className="text-[8px] font-semibold text-lime-600">
          View all &rsaquo;
        </span>
      </div>

      {/* ── Product Grid ── */}
      <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-3">
        <div className="grid grid-cols-2 gap-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm"
            >
              {/* Garment illustration tile */}
              <div className={`relative flex aspect-[3/4] w-full items-center justify-center ${product.bg}`}>
                {product.illustration}

                {/* Tag badge */}
                {product.tag && (
                  <span
                    className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[7px] font-bold tracking-wide shadow-sm ${product.tagColor}`}
                  >
                    {product.tag}
                  </span>
                )}

                {/* Heart */}
                <button className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/80 text-stone-400 shadow-sm backdrop-blur-sm">
                  <Heart size={9} strokeWidth={1.8} />
                </button>
              </div>

              {/* Card footer */}
              <div className="px-2 py-2">
                {/* Color swatches */}
                <div className="mb-1.5 flex items-center gap-1">
                  {product.swatches.map((color) => (
                    <span
                      key={color}
                      className="h-2.5 w-2.5 rounded-full border border-white shadow-sm ring-1 ring-stone-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between gap-1">
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-[9px] font-semibold leading-tight text-stone-800">
                      {product.name}
                    </span>
                    <span className="text-[9px] font-bold text-stone-500 leading-tight">
                      {product.price}
                    </span>
                  </div>
                  <button className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-stone-800 text-white shadow-sm">
                    <Plus size={9} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Member CTA ── */}
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-gradient-to-r from-stone-800 to-zinc-700 px-4 py-3">
          <div>
            <p className="text-[8px] font-black uppercase tracking-widest text-lime-400">
              Member Exclusive
            </p>
            <p className="mt-0.5 text-[10px] font-bold leading-tight text-white">
              20% off your first order
            </p>
          </div>
          <button className="rounded-full bg-lime-400 px-3 py-1.5 text-[8px] font-bold uppercase tracking-wider text-stone-800 shadow-sm">
            Join Free
          </button>
        </div>
      </div>
    </div>
  );
}
