import type { ReactElement } from "react";
import { Flame, ShoppingCart, Zap } from "lucide-react";

/* ─── Inline SVG product illustrations ─── */

function EarbudsIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Case base */}
      <rect x="10" y="30" width="80" height="52" rx="16" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2.5"/>
      {/* Case lid */}
      <rect x="10" y="30" width="80" height="18" rx="16" fill="#818cf8" stroke="#6366f1" strokeWidth="2.5"/>
      {/* Hinge line */}
      <line x1="10" y1="48" x2="90" y2="48" stroke="#6366f1" strokeWidth="1.5"/>
      {/* Left earbud body */}
      <ellipse cx="34" cy="66" rx="14" ry="14" fill="#4f46e5" stroke="#3730a3" strokeWidth="2"/>
      <ellipse cx="34" cy="66" rx="7" ry="7" fill="#818cf8"/>
      <ellipse cx="34" cy="66" rx="3" ry="3" fill="#c7d2fe"/>
      {/* Right earbud body */}
      <ellipse cx="66" cy="66" rx="14" ry="14" fill="#4f46e5" stroke="#3730a3" strokeWidth="2"/>
      <ellipse cx="66" cy="66" rx="7" ry="7" fill="#818cf8"/>
      <ellipse cx="66" cy="66" rx="3" ry="3" fill="#c7d2fe"/>
      {/* LED charging dot */}
      <circle cx="50" cy="76" r="3.5" fill="#22d3ee" stroke="#0891b2" strokeWidth="1"/>
      {/* Left sound arc */}
      <path d="M16 58 Q8 66 16 74" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M12 54 Q2 66 12 78" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Right sound arc */}
      <path d="M84 58 Q92 66 84 74" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M88 54 Q98 66 88 78" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function HoodieIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Main body */}
      <path d="M22 46 L14 92 H86 L78 46" fill="#f472b6" stroke="#db2777" strokeWidth="2.5"/>
      {/* Left sleeve */}
      <path d="M22 46 L8 72 L18 76 L28 54" fill="#f472b6" stroke="#db2777" strokeWidth="2.5"/>
      {/* Right sleeve */}
      <path d="M78 46 L92 72 L82 76 L72 54" fill="#f472b6" stroke="#db2777" strokeWidth="2.5"/>
      {/* Hood left side */}
      <path d="M36 46 Q32 16 50 12 Q68 16 64 46" fill="#fce7f3" stroke="#db2777" strokeWidth="2.5"/>
      {/* Hood inner shadow */}
      <path d="M40 46 Q38 22 50 18 Q62 22 60 46" fill="#f9a8d4"/>
      {/* Neck hole */}
      <ellipse cx="50" cy="46" rx="13" ry="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2"/>
      {/* Kangaroo pocket */}
      <rect x="33" y="70" width="34" height="16" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
      <line x1="50" y1="70" x2="50" y2="86" stroke="#db2777" strokeWidth="1.2" strokeDasharray="2 2"/>
      {/* Drawstring left */}
      <line x1="44" y1="46" x2="40" y2="62" stroke="#be185d" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="40" cy="63.5" r="2.5" fill="#be185d"/>
      {/* Drawstring right */}
      <line x1="56" y1="46" x2="60" y2="62" stroke="#be185d" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="60" cy="63.5" r="2.5" fill="#be185d"/>
      {/* Rib waistband */}
      <rect x="14" y="88" width="72" height="6" rx="3" fill="#fda4af" stroke="#db2777" strokeWidth="1.2"/>
      {/* Sleeve cuffs */}
      <ellipse cx="13" cy="74" rx="6" ry="3.5" fill="#fda4af" stroke="#db2777" strokeWidth="1.2"/>
      <ellipse cx="87" cy="74" rx="6" ry="3.5" fill="#fda4af" stroke="#db2777" strokeWidth="1.2"/>
    </svg>
  );
}

function LEDStripIllustration(): ReactElement {
  const ledXPositions = [14, 26, 38, 50, 62, 74, 86];
  return (
    <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Reel outer */}
      <circle cx="50" cy="46" r="34" fill="#d1fae5" stroke="#10b981" strokeWidth="2.5"/>
      {/* Reel hub */}
      <circle cx="50" cy="46" r="18" fill="#ecfdf5" stroke="#10b981" strokeWidth="2"/>
      <circle cx="50" cy="46" r="6" fill="#6ee7b7" stroke="#059669" strokeWidth="1.5"/>
      {/* Reel spokes */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1={50 + 6 * Math.cos((deg * Math.PI) / 180)}
          y1={46 + 6 * Math.sin((deg * Math.PI) / 180)}
          x2={50 + 18 * Math.cos((deg * Math.PI) / 180)}
          y2={46 + 18 * Math.sin((deg * Math.PI) / 180)}
          stroke="#10b981"
          strokeWidth="1.5"
        />
      ))}
      {/* Strip on reel arcs */}
      <path d="M16 46 A34 34 0 0 1 84 46" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/>
      <path d="M20 34 A34 34 0 0 1 80 34" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round"/>
      {/* Unrolled strip at bottom */}
      <rect x="7" y="72" width="86" height="10" rx="5" fill="#1f2937" stroke="#10b981" strokeWidth="1.5"/>
      {/* LED bulbs */}
      {ledXPositions.map((x) => (
        <g key={x}>
          <circle cx={x} cy="77" r="4.5" fill="#fde68a" stroke="#f59e0b" strokeWidth="1"/>
          <circle cx={x} cy="77" r="7" fill="#fef3c7" opacity="0.35"/>
        </g>
      ))}
      {/* Color burst spots */}
      <circle cx="18" cy="16" r="5" fill="#f87171" opacity="0.9"/>
      <circle cx="30" cy="8" r="4" fill="#a78bfa" opacity="0.9"/>
      <circle cx="50" cy="6" r="5" fill="#34d399" opacity="0.9"/>
      <circle cx="70" cy="8" r="4" fill="#60a5fa" opacity="0.9"/>
      <circle cx="82" cy="16" r="5" fill="#fb923c" opacity="0.9"/>
      {/* USB plug */}
      <rect x="44" y="10" width="12" height="7" rx="2" fill="#6b7280" stroke="#374151" strokeWidth="1.5"/>
      <line x1="47" y1="10" x2="47" y2="6" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
      <line x1="53" y1="10" x2="53" y2="6" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function PhoneStandIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Stand base plate */}
      <ellipse cx="50" cy="91" rx="36" ry="7" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
      <ellipse cx="50" cy="90" rx="36" ry="5" fill="#cbd5e1"/>
      {/* Stand pole */}
      <rect x="47" y="55" width="6" height="36" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5"/>
      {/* Stand legs V-shape */}
      <path d="M50 72 L34 88" stroke="#94a3b8" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M50 72 L66 88" stroke="#94a3b8" strokeWidth="4.5" strokeLinecap="round"/>
      {/* Mount ring (gold) */}
      <circle cx="50" cy="55" r="6" fill="#fbbf24" stroke="#d97706" strokeWidth="2"/>
      <circle cx="50" cy="55" r="2.5" fill="#fef3c7"/>
      {/* Phone body */}
      <rect x="26" y="10" width="48" height="75" rx="7" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
      <rect x="29" y="14" width="42" height="63" rx="5" fill="#0f172a"/>
      {/* Phone screen - app UI */}
      <rect x="31" y="16" width="38" height="55" rx="3" fill="#1d4ed8"/>
      {/* App header bar */}
      <rect x="31" y="16" width="38" height="10" rx="3" fill="#2563eb"/>
      <rect x="33" y="19" width="20" height="4" rx="2" fill="#93c5fd" opacity="0.7"/>
      {/* App content blocks */}
      <rect x="33" y="29" width="16" height="16" rx="3" fill="#3b82f6"/>
      <rect x="52" y="29" width="16" height="16" rx="3" fill="#60a5fa"/>
      <rect x="33" y="48" width="35" height="4" rx="2" fill="#93c5fd" opacity="0.6"/>
      <rect x="33" y="55" width="25" height="4" rx="2" fill="#93c5fd" opacity="0.4"/>
      <rect x="33" y="62" width="30" height="4" rx="2" fill="#93c5fd" opacity="0.3"/>
      {/* Home indicator */}
      <rect x="42" y="79" width="16" height="3" rx="1.5" fill="#475569"/>
      {/* Camera notch */}
      <rect x="38" y="12" width="14" height="4" rx="2" fill="#1e293b"/>
      <circle cx="45" cy="14" r="1.5" fill="#334155"/>
    </svg>
  );
}

function ToteBagIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Bag main body */}
      <path d="M16 42 L10 92 H90 L84 42 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5"/>
      {/* Bag top band */}
      <rect x="16" y="36" width="68" height="12" rx="3" fill="#fde68a" stroke="#d97706" strokeWidth="2.5"/>
      {/* Left handle */}
      <path d="M30 36 Q26 10 40 8 Q54 6 50 36" fill="none" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Right handle */}
      <path d="M50 36 Q46 6 60 8 Q74 10 70 36" fill="none" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Center vertical seam */}
      <line x1="50" y1="48" x2="50" y2="90" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4 3"/>
      {/* Bottom seam */}
      <line x1="12" y1="78" x2="88" y2="78" stroke="#d97706" strokeWidth="2"/>
      {/* Logo circle on bag */}
      <circle cx="50" cy="62" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="2"/>
      {/* Big checkmark inside logo */}
      <path d="M42 62 L47 68 L60 54" stroke="#92400e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Side accent dots */}
      <circle cx="30" cy="56" r="3" fill="#f59e0b" opacity="0.7"/>
      <circle cx="70" cy="56" r="3" fill="#f59e0b" opacity="0.7"/>
      <circle cx="28" cy="70" r="2.5" fill="#f59e0b" opacity="0.5"/>
      <circle cx="72" cy="70" r="2.5" fill="#f59e0b" opacity="0.5"/>
      {/* Bottom corner gussets */}
      <path d="M10 92 L20 88 L16 92 Z" fill="#fde68a" stroke="#d97706" strokeWidth="1"/>
      <path d="M90 92 L80 88 L84 92 Z" fill="#fde68a" stroke="#d97706" strokeWidth="1"/>
    </svg>
  );
}

function BlenderIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Motor base */}
      <rect x="28" y="74" width="44" height="22" rx="8" fill="#374151" stroke="#1f2937" strokeWidth="2.5"/>
      {/* Base vents */}
      <line x1="34" y1="79" x2="34" y2="90" stroke="#4b5563" strokeWidth="1.2"/>
      <line x1="40" y1="79" x2="40" y2="90" stroke="#4b5563" strokeWidth="1.2"/>
      {/* Power button */}
      <circle cx="62" cy="85" r="8" fill="#10b981" stroke="#059669" strokeWidth="2"/>
      <circle cx="62" cy="85" r="4" fill="#34d399"/>
      <line x1="62" y1="82" x2="62" y2="85" stroke="#065f46" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Speed dial */}
      <circle cx="38" cy="85" r="6" fill="#6b7280" stroke="#374151" strokeWidth="1.5"/>
      <line x1="38" y1="79" x2="38" y2="83" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
      {/* Jar body */}
      <path d="M34 28 L26 74 H74 L66 28 Z" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="2.5"/>
      {/* Jar shoulder */}
      <path d="M34 28 Q50 22 66 28" fill="#7dd3fc" stroke="#0ea5e9" strokeWidth="2"/>
      {/* Smoothie content layers */}
      <clipPath id="jarClip">
        <path d="M34 28 L26 74 H74 L66 28 Z"/>
      </clipPath>
      <g clipPath="url(#jarClip)">
        <rect x="26" y="52" width="48" height="24" fill="#4ade80" opacity="0.85"/>
        <rect x="26" y="44" width="48" height="12" fill="#86efac" opacity="0.75"/>
        {/* Bubbles */}
        <circle cx="38" cy="58" r="4" fill="white" opacity="0.45"/>
        <circle cx="54" cy="52" r="3" fill="white" opacity="0.4"/>
        <circle cx="64" cy="60" r="3.5" fill="white" opacity="0.4"/>
      </g>
      {/* Jar lid */}
      <rect x="32" y="16" width="36" height="13" rx="4" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2"/>
      {/* Lid handle */}
      <rect x="42" y="8" width="16" height="10" rx="4" fill="#0284c7" stroke="#0369a1" strokeWidth="2"/>
      {/* Blade cross */}
      <line x1="36" y1="72" x2="64" y2="72" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="50" y1="67" x2="50" y2="77" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Deal data ─── */

interface Deal {
  title: string;
  sale: string;
  original: string;
  discount: string;
  rating: string;
  reviews: string;
  stock: number;
  bg: string;
  badgeColor: string;
  Illustration: () => ReactElement;
}

const deals: Deal[] = [
  {
    title: "Wireless Earbuds",
    sale: "$14.99",
    original: "$49.99",
    discount: "-70%",
    rating: "4.8",
    reviews: "2.1k",
    stock: 18,
    bg: "#ede9fe",
    badgeColor: "bg-red-500",
    Illustration: EarbudsIllustration,
  },
  {
    title: "Oversized Hoodie",
    sale: "$19.99",
    original: "$44.00",
    discount: "-55%",
    rating: "4.7",
    reviews: "1.4k",
    stock: 32,
    bg: "#fce7f3",
    badgeColor: "bg-orange-500",
    Illustration: HoodieIllustration,
  },
  {
    title: "LED Strip Lights",
    sale: "$8.49",
    original: "$21.00",
    discount: "-60%",
    rating: "4.9",
    reviews: "3.8k",
    stock: 9,
    bg: "#d1fae5",
    badgeColor: "bg-red-500",
    Illustration: LEDStripIllustration,
  },
  {
    title: "Phone Stand",
    sale: "$5.99",
    original: "$11.99",
    discount: "-50%",
    rating: "4.6",
    reviews: "876",
    stock: 44,
    bg: "#e2e8f0",
    badgeColor: "bg-orange-500",
    Illustration: PhoneStandIllustration,
  },
  {
    title: "Canvas Tote Bag",
    sale: "$7.99",
    original: "$14.99",
    discount: "-45%",
    rating: "4.7",
    reviews: "1.2k",
    stock: 61,
    bg: "#fef9c3",
    badgeColor: "bg-yellow-500",
    Illustration: ToteBagIllustration,
  },
  {
    title: "Mini Blender",
    sale: "$16.99",
    original: "$27.99",
    discount: "-40%",
    rating: "4.8",
    reviews: "994",
    stock: 23,
    bg: "#e0f2fe",
    badgeColor: "bg-red-500",
    Illustration: BlenderIllustration,
  },
];

const categories = ["All", "Tech", "Home", "Fashion", "Under $10"];

export default function BudgetDeals() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gray-950 font-sans">

      {/* ── Top Bar ── */}
      <header className="flex shrink-0 items-center justify-between bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[16px] font-black tracking-tight text-white drop-shadow">
            DealDrop
          </span>
          <span className="flex items-center gap-0.5 rounded-full bg-white/25 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wide text-white shadow-inner">
            <Flame size={8} strokeWidth={2.5} />
            MEGA DEALS
          </span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-0.5">
          <span className="text-[7px] font-semibold uppercase tracking-wide text-white/80 mr-1">
            Ends in
          </span>
          {["02", "14", "09"].map((seg, i) => (
            <span key={i} className="flex items-center gap-0.5">
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded bg-gray-900/80 px-0.5 text-[11px] font-black tabular-nums text-yellow-300 shadow">
                {seg}
              </span>
              {i < 2 && (
                <span className="text-[11px] font-black leading-none text-white/70 mx-0.5">
                  :
                </span>
              )}
            </span>
          ))}
        </div>
      </header>

      {/* ── Ribbon Banner ── */}
      <div className="shrink-0 overflow-hidden bg-yellow-400 py-1">
        <div className="flex whitespace-nowrap">
          <span className="animate-[marquee_14s_linear_infinite] inline-block text-[8px] font-bold uppercase tracking-widest text-gray-900 pr-8">
            🚀 FREE shipping over $25 &nbsp;·&nbsp; Extra 10% with code{" "}
            <span className="rounded bg-gray-900 px-1 py-0.5 text-yellow-300">
              SAVE10
            </span>
            &nbsp;·&nbsp; 🔥 Flash deals every hour &nbsp;·&nbsp; FREE shipping over $25
            &nbsp;·&nbsp; Extra 10% with code{" "}
            <span className="rounded bg-gray-900 px-1 py-0.5 text-yellow-300">
              SAVE10
            </span>
            &nbsp;·&nbsp; 🚀 Flash deals every hour &nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* ── Category Chips ── */}
      <div className="flex shrink-0 gap-1.5 overflow-x-auto px-3 pb-2 pt-2 scrollbar-none">
        {categories.map((cat, i) => (
          <span
            key={cat}
            className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${
              i === 0
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/40"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* ── Section header ── */}
      <div className="flex shrink-0 items-center justify-between px-3 pb-1.5">
        <div className="flex items-center gap-1">
          <Zap size={11} strokeWidth={2.5} className="text-yellow-400" />
          <span className="text-[10px] font-black uppercase tracking-wider text-white">
            Flash Deals
          </span>
        </div>
        <span className="text-[8px] font-semibold text-orange-400 cursor-pointer">
          View all ›
        </span>
      </div>

      {/* ── Deal Grid ── */}
      <div className="flex-1 overflow-y-auto px-3 pb-3">
        <div className="grid grid-cols-2 gap-2">
          {deals.map((deal) => {
            const { Illustration } = deal;
            return (
              <div
                key={deal.title}
                className="relative flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg"
              >
                {/* Product illustration tile — square aspect */}
                <div
                  className="relative w-full flex items-center justify-center p-3"
                  style={{ backgroundColor: deal.bg, aspectRatio: "1 / 1" }}
                >
                  {/* Discount badge */}
                  <span
                    className={`absolute left-0 top-0 rounded-br-xl ${deal.badgeColor} px-1.5 py-0.5 text-[10px] font-black text-white shadow z-10 leading-tight`}
                  >
                    {deal.discount}
                  </span>

                  {/* Product SVG — fills the square tile */}
                  <div className="w-full h-full">
                    <Illustration />
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-1 px-2 pb-2 pt-1.5">
                  {/* Title */}
                  <span className="truncate text-[10px] font-bold leading-tight text-gray-100">
                    {deal.title}
                  </span>

                  {/* Prices */}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[13px] font-black text-orange-400 leading-none">
                      {deal.sale}
                    </span>
                    <span className="text-[9px] font-medium text-gray-500 line-through leading-none">
                      {deal.original}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-0.5">
                    <span className="text-[9px] font-bold text-yellow-400">
                      {deal.rating} ★
                    </span>
                    <span className="text-[8px] text-gray-500">
                      ({deal.reviews})
                    </span>
                  </div>

                  {/* Stock bar */}
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-semibold text-red-400">
                        Almost gone
                      </span>
                      <span className="text-[7px] text-gray-600">
                        {deal.stock} left
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
                      <div
                        className={`h-full rounded-full ${deal.stock < 20 ? "bg-red-500" : "bg-orange-400"}`}
                        style={{ width: `${Math.min(deal.stock, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Add button */}
                  <button className="mt-0.5 flex w-full items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-1.5 text-[9px] font-black uppercase tracking-wide text-white shadow-md shadow-orange-500/30 cursor-pointer">
                    <ShoppingCart size={10} strokeWidth={2.5} />
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom promo strip ── */}
        <div className="mt-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-4 py-3 shadow-lg shadow-orange-500/20">
          <div>
            <p className="text-[8px] font-black uppercase tracking-widest text-yellow-300">
              Members Only
            </p>
            <p className="mt-0.5 text-[10px] font-black leading-tight text-white">
              Extra 10% every drop 🔥
            </p>
          </div>
          <button className="rounded-full bg-yellow-400 px-3 py-1.5 text-[8px] font-black uppercase tracking-wider text-gray-900 shadow cursor-pointer">
            Join Free
          </button>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
