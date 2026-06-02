import type { ReactElement } from "react";
import { Flame, ShoppingCart, Search, Home, Grid2x2, User, Tag } from "lucide-react";

/* ─────────────────────────────────────────────
   Inline SVG product illustrations
   (defined at module scope — no hooks inside)
───────────────────────────────────────────── */

function EarbudsIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Charging case body */}
      <rect x="6" y="24" width="68" height="42" rx="14" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2"/>
      {/* Case lid */}
      <rect x="6" y="24" width="68" height="15" rx="14" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2"/>
      <line x1="6" y1="39" x2="74" y2="39" stroke="#7c3aed" strokeWidth="1.2"/>
      {/* Left earbud */}
      <circle cx="27" cy="52" r="12" fill="#6d28d9" stroke="#4c1d95" strokeWidth="1.5"/>
      <circle cx="27" cy="52" r="6" fill="#8b5cf6"/>
      <circle cx="27" cy="52" r="2.5" fill="#c4b5fd"/>
      {/* Right earbud */}
      <circle cx="53" cy="52" r="12" fill="#6d28d9" stroke="#4c1d95" strokeWidth="1.5"/>
      <circle cx="53" cy="52" r="6" fill="#8b5cf6"/>
      <circle cx="53" cy="52" r="2.5" fill="#c4b5fd"/>
      {/* Charging LED */}
      <circle cx="40" cy="61" r="3" fill="#34d399" stroke="#059669" strokeWidth="1"/>
      {/* Sound waves left */}
      <path d="M11 47 Q5 52 11 57" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Sound waves right */}
      <path d="M69 47 Q75 52 69 57" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Hinge dots */}
      <circle cx="28" cy="8" r="3" fill="#a78bfa"/>
      <circle cx="40" cy="5" r="3.5" fill="#7c3aed"/>
      <circle cx="52" cy="8" r="3" fill="#a78bfa"/>
    </svg>
  );
}

function HoodieIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Body */}
      <path d="M18 38 L12 76 H68 L62 38 Z" fill="#f9a8d4" stroke="#ec4899" strokeWidth="2"/>
      {/* Left sleeve */}
      <path d="M18 38 L6 60 L15 64 L23 44 Z" fill="#f9a8d4" stroke="#ec4899" strokeWidth="2"/>
      {/* Right sleeve */}
      <path d="M62 38 L74 60 L65 64 L57 44 Z" fill="#f9a8d4" stroke="#ec4899" strokeWidth="2"/>
      {/* Hood */}
      <path d="M29 38 Q26 12 40 9 Q54 12 51 38 Z" fill="#fce7f3" stroke="#ec4899" strokeWidth="2"/>
      {/* Hood inner */}
      <path d="M33 38 Q31 18 40 15 Q49 18 47 38 Z" fill="#fbcfe8"/>
      {/* Neck */}
      <ellipse cx="40" cy="38" rx="11" ry="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
      {/* Pocket */}
      <rect x="26" y="57" width="28" height="13" rx="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.2"/>
      <line x1="40" y1="57" x2="40" y2="70" stroke="#ec4899" strokeWidth="1" strokeDasharray="2 2"/>
      {/* Drawstrings */}
      <line x1="36" y1="38" x2="33" y2="50" stroke="#be185d" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="33" cy="51.5" r="2" fill="#be185d"/>
      <line x1="44" y1="38" x2="47" y2="50" stroke="#be185d" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="47" cy="51.5" r="2" fill="#be185d"/>
      {/* Waistband */}
      <rect x="12" y="73" width="56" height="5" rx="2.5" fill="#fbcfe8" stroke="#ec4899" strokeWidth="1"/>
      {/* Cuffs */}
      <ellipse cx="10" cy="62" rx="5" ry="3" fill="#fbcfe8" stroke="#ec4899" strokeWidth="1"/>
      <ellipse cx="70" cy="62" rx="5" ry="3" fill="#fbcfe8" stroke="#ec4899" strokeWidth="1"/>
    </svg>
  );
}

function LEDStripIllustration(): ReactElement {
  const bulbs = [10, 21, 32, 43, 54, 65, 76];
  return (
    <svg viewBox="0 0 88 76" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Reel */}
      <circle cx="44" cy="36" r="30" fill="#d1fae5" stroke="#10b981" strokeWidth="2"/>
      <circle cx="44" cy="36" r="16" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5"/>
      <circle cx="44" cy="36" r="5" fill="#6ee7b7" stroke="#059669" strokeWidth="1.2"/>
      {/* Spokes */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1={44 + 5 * Math.cos((deg * Math.PI) / 180)}
          y1={36 + 5 * Math.sin((deg * Math.PI) / 180)}
          x2={44 + 16 * Math.cos((deg * Math.PI) / 180)}
          y2={36 + 16 * Math.sin((deg * Math.PI) / 180)}
          stroke="#10b981" strokeWidth="1.2"
        />
      ))}
      {/* Strip arcs on reel */}
      <path d="M14 36 A30 30 0 0 1 74 36" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round"/>
      <path d="M18 26 A30 30 0 0 1 70 26" stroke="#c084fc" strokeWidth="3" strokeLinecap="round"/>
      {/* Unrolled strip */}
      <rect x="4" y="62" width="80" height="9" rx="4.5" fill="#111827" stroke="#10b981" strokeWidth="1.2"/>
      {bulbs.map((x) => (
        <g key={x}>
          <circle cx={x} cy="66.5" r="4" fill="#fde68a" stroke="#f59e0b" strokeWidth="0.8"/>
          <circle cx={x} cy="66.5" r="6.5" fill="#fef3c7" opacity="0.3"/>
        </g>
      ))}
      {/* Color accent dots */}
      <circle cx="16" cy="10" r="4.5" fill="#f87171" opacity="0.9"/>
      <circle cx="28" cy="4" r="3.5" fill="#a78bfa" opacity="0.9"/>
      <circle cx="44" cy="3" r="4.5" fill="#34d399" opacity="0.9"/>
      <circle cx="60" cy="4" r="3.5" fill="#60a5fa" opacity="0.9"/>
      <circle cx="72" cy="10" r="4.5" fill="#fb923c" opacity="0.9"/>
    </svg>
  );
}

function PhoneStandIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Base */}
      <ellipse cx="40" cy="76" rx="30" ry="5.5" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5"/>
      <ellipse cx="40" cy="75" rx="30" ry="4" fill="#cbd5e1"/>
      {/* Pole */}
      <rect x="37" y="44" width="6" height="32" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="1.2"/>
      {/* Legs */}
      <path d="M40 60 L26 74" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"/>
      <path d="M40 60 L54 74" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"/>
      {/* Mount ring */}
      <circle cx="40" cy="44" r="5.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
      <circle cx="40" cy="44" r="2" fill="#fef3c7"/>
      {/* Phone */}
      <rect x="18" y="6" width="44" height="68" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1.8"/>
      <rect x="21" y="10" width="38" height="57" rx="4" fill="#0f172a"/>
      {/* Screen */}
      <rect x="23" y="12" width="34" height="50" rx="3" fill="#1d4ed8"/>
      {/* Header */}
      <rect x="23" y="12" width="34" height="9" rx="3" fill="#2563eb"/>
      <rect x="25" y="15" width="18" height="3" rx="1.5" fill="#93c5fd" opacity="0.7"/>
      {/* Content blocks */}
      <rect x="25" y="23" width="14" height="14" rx="2.5" fill="#3b82f6"/>
      <rect x="42" y="23" width="14" height="14" rx="2.5" fill="#60a5fa"/>
      <rect x="25" y="40" width="31" height="3" rx="1.5" fill="#93c5fd" opacity="0.55"/>
      <rect x="25" y="46" width="22" height="3" rx="1.5" fill="#93c5fd" opacity="0.4"/>
      <rect x="25" y="52" width="26" height="3" rx="1.5" fill="#93c5fd" opacity="0.3"/>
      {/* Home bar */}
      <rect x="32" y="68" width="16" height="2.5" rx="1.2" fill="#475569"/>
      {/* Notch */}
      <rect x="30" y="8" width="12" height="3.5" rx="1.8" fill="#1e293b"/>
      <circle cx="36" cy="9.8" r="1.2" fill="#334155"/>
    </svg>
  );
}

function ToteBagIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Bag body */}
      <path d="M12 34 L8 76 H72 L68 34 Z" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
      {/* Top band */}
      <rect x="12" y="29" width="56" height="10" rx="3" fill="#fde68a" stroke="#ca8a04" strokeWidth="2"/>
      {/* Left handle */}
      <path d="M24 29 Q20 8 32 6 Q44 4 40 29" fill="none" stroke="#92400e" strokeWidth="3" strokeLinecap="round"/>
      {/* Right handle */}
      <path d="M40 29 Q36 4 48 6 Q60 8 56 29" fill="none" stroke="#92400e" strokeWidth="3" strokeLinecap="round"/>
      {/* Seam */}
      <line x1="40" y1="39" x2="40" y2="75" stroke="#ca8a04" strokeWidth="1.2" strokeDasharray="3 2.5"/>
      <line x1="10" y1="63" x2="70" y2="63" stroke="#ca8a04" strokeWidth="1.5"/>
      {/* Logo circle */}
      <circle cx="40" cy="51" r="14" fill="#fbbf24" stroke="#ca8a04" strokeWidth="1.8"/>
      <path d="M33 51 L38 57 L50 44" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Accent dots */}
      <circle cx="22" cy="46" r="2.5" fill="#f59e0b" opacity="0.65"/>
      <circle cx="58" cy="46" r="2.5" fill="#f59e0b" opacity="0.65"/>
    </svg>
  );
}

function BlenderIllustration(): ReactElement {
  return (
    <svg viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Motor base */}
      <rect x="20" y="60" width="40" height="20" rx="7" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
      {/* Base vents */}
      <line x1="27" y1="65" x2="27" y2="75" stroke="#4b5563" strokeWidth="1"/>
      <line x1="33" y1="65" x2="33" y2="75" stroke="#4b5563" strokeWidth="1"/>
      {/* Power button */}
      <circle cx="54" cy="70" r="7" fill="#10b981" stroke="#059669" strokeWidth="1.8"/>
      <circle cx="54" cy="70" r="3.5" fill="#34d399"/>
      <line x1="54" y1="67.5" x2="54" y2="70" stroke="#065f46" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Speed dial */}
      <circle cx="30" cy="70" r="5.5" fill="#6b7280" stroke="#374151" strokeWidth="1.2"/>
      <line x1="30" y1="64.5" x2="30" y2="68" stroke="#e5e7eb" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Jar body */}
      <path d="M26 22 L20 60 H60 L54 22 Z" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="2"/>
      {/* Shoulder */}
      <path d="M26 22 Q40 17 54 22" fill="#7dd3fc" stroke="#0ea5e9" strokeWidth="1.8"/>
      {/* Smoothie fill */}
      <clipPath id="blJar">
        <path d="M26 22 L20 60 H60 L54 22 Z"/>
      </clipPath>
      <g clipPath="url(#blJar)">
        <rect x="20" y="42" width="40" height="20" fill="#4ade80" opacity="0.85"/>
        <rect x="20" y="36" width="40" height="10" fill="#86efac" opacity="0.7"/>
        <circle cx="30" cy="47" r="3.5" fill="white" opacity="0.4"/>
        <circle cx="44" cy="42" r="2.5" fill="white" opacity="0.35"/>
        <circle cx="52" cy="49" r="3" fill="white" opacity="0.35"/>
      </g>
      {/* Lid */}
      <rect x="24" y="12" width="32" height="11" rx="3.5" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1.8"/>
      {/* Lid handle */}
      <rect x="32" y="4" width="16" height="10" rx="3.5" fill="#0284c7" stroke="#0369a1" strokeWidth="1.8"/>
      {/* Blade */}
      <line x1="28" y1="58" x2="52" y2="58" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="40" y1="54" x2="40" y2="62" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Deal data
───────────────────────────────────────────── */

interface Deal {
  title: string;
  sale: string;
  original: string;
  discount: string;
  rating: string;
  reviews: string;
  stock: number;
  tileBg: string;
  badgeBg: string;
  Illustration: () => ReactElement;
}

const DEALS: Deal[] = [
  {
    title: "Wireless Earbuds",
    sale: "$14.99",
    original: "$49.99",
    discount: "-70%",
    rating: "4.8",
    reviews: "2.1k",
    stock: 18,
    tileBg: "#ede9fe",
    badgeBg: "#ef4444",
    Illustration: EarbudsIllustration,
  },
  {
    title: "Oversized Hoodie",
    sale: "$19.99",
    original: "$44.00",
    discount: "-55%",
    rating: "4.7",
    reviews: "1.4k",
    stock: 34,
    tileBg: "#fce7f3",
    badgeBg: "#f97316",
    Illustration: HoodieIllustration,
  },
  {
    title: "LED Strip Lights",
    sale: "$8.49",
    original: "$21.00",
    discount: "-60%",
    rating: "4.9",
    reviews: "3.8k",
    stock: 10,
    tileBg: "#d1fae5",
    badgeBg: "#ef4444",
    Illustration: LEDStripIllustration,
  },
  {
    title: "Phone Stand",
    sale: "$5.99",
    original: "$11.99",
    discount: "-50%",
    rating: "4.6",
    reviews: "876",
    stock: 46,
    tileBg: "#e2e8f0",
    badgeBg: "#f97316",
    Illustration: PhoneStandIllustration,
  },
  {
    title: "Canvas Tote",
    sale: "$7.99",
    original: "$14.99",
    discount: "-45%",
    rating: "4.7",
    reviews: "1.2k",
    stock: 63,
    tileBg: "#fef9c3",
    badgeBg: "#eab308",
    Illustration: ToteBagIllustration,
  },
  {
    title: "Mini Blender",
    sale: "$16.99",
    original: "$27.99",
    discount: "-40%",
    rating: "4.8",
    reviews: "994",
    stock: 24,
    tileBg: "#e0f2fe",
    badgeBg: "#ef4444",
    Illustration: BlenderIllustration,
  },
];

const CATEGORIES = ["All", "Tech", "Fashion", "Home", "Under $10"];

/* ─────────────────────────────────────────────
   Sub-components (module scope — no lint warn)
───────────────────────────────────────────── */

interface DealCardProps {
  deal: Deal;
}

function DealCard({ deal }: DealCardProps): ReactElement {
  const { Illustration } = deal;
  /* stock bar: cap at 70 px wide out of 100 */
  const stockPct = Math.min(deal.stock, 70);
  const lowStock = deal.stock < 25;

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-2xl shadow-md"
      style={{ backgroundColor: "#18181b" }}
    >
      {/* ── Illustration tile ── */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: deal.tileBg,
          height: "100px",
          padding: "8px",
        }}
      >
        {/* Discount badge */}
        <span
          className="absolute left-0 top-0 z-10 rounded-br-xl px-2 py-0.5 text-[10px] font-black leading-tight text-white shadow-md"
          style={{ backgroundColor: deal.badgeBg }}
        >
          {deal.discount}
        </span>

        {/* Wishlist heart */}
        <span
          className="absolute right-1.5 top-1.5 z-10 text-[11px] leading-none"
          aria-hidden="true"
        >
          🤍
        </span>

        {/* SVG illustration */}
        <div style={{ width: "76px", height: "76px" }}>
          <Illustration />
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col gap-1 px-2 pb-2 pt-1.5">
        {/* Title */}
        <p
          className="truncate font-bold leading-tight text-white"
          style={{ fontSize: "10px" }}
        >
          {deal.title}
        </p>

        {/* Prices */}
        <div className="flex items-baseline gap-1">
          <span
            className="font-black leading-none text-orange-400"
            style={{ fontSize: "13px" }}
          >
            {deal.sale}
          </span>
          <span
            className="font-medium leading-none text-zinc-500 line-through"
            style={{ fontSize: "9px" }}
          >
            {deal.original}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-0.5">
          <span
            className="font-bold text-yellow-400"
            style={{ fontSize: "9px" }}
          >
            ★ {deal.rating}
          </span>
          <span className="text-zinc-500" style={{ fontSize: "8px" }}>
            ({deal.reviews})
          </span>
        </div>

        {/* Stock urgency bar */}
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <span
              className="font-semibold"
              style={{
                fontSize: "7.5px",
                color: lowStock ? "#f87171" : "#fb923c",
              }}
            >
              {lowStock ? "🔥 Almost gone" : "Selling fast"}
            </span>
            <span className="text-zinc-600" style={{ fontSize: "7px" }}>
              {deal.stock} left
            </span>
          </div>
          <div
            className="w-full overflow-hidden rounded-full"
            style={{ height: "5px", backgroundColor: "#3f3f46" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${stockPct}%`,
                backgroundColor: lowStock ? "#ef4444" : "#f97316",
              }}
            />
          </div>
        </div>

        {/* Add to cart */}
        <button
          className="mt-0.5 flex w-full items-center justify-center gap-1 rounded-lg py-1.5 text-[8.5px] font-black uppercase tracking-wide text-white shadow-md"
          style={{
            background: "linear-gradient(90deg,#f97316,#ef4444)",
            boxShadow: "0 2px 8px rgba(249,115,22,0.35)",
          }}
          type="button"
        >
          <ShoppingCart size={9} strokeWidth={2.5} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */

export default function BudgetDeals() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden font-sans" style={{ backgroundColor: "#09090b" }}>

      {/* ══ TOP APP BAR ══ */}
      <header
        className="flex shrink-0 flex-col"
        style={{ background: "linear-gradient(135deg,#dc2626 0%,#ea580c 55%,#ca8a04 100%)" }}
      >
        {/* Row 1: brand + cart */}
        <div className="flex items-center justify-between px-3 pt-2 pb-1.5">
          {/* Wordmark + badge */}
          <div className="flex items-center gap-1.5">
            <span
              className="font-black tracking-tight text-white drop-shadow-sm"
              style={{ fontSize: "20px", letterSpacing: "-0.5px" }}
            >
              DealDrop
            </span>
            <span
              className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-black uppercase text-white"
              style={{
                fontSize: "7px",
                letterSpacing: "0.06em",
                backgroundColor: "rgba(0,0,0,0.28)",
              }}
            >
              <Flame size={7} strokeWidth={3} />
              FLASH
            </span>
          </div>

          {/* Cart icon */}
          <div className="relative">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
            >
              <ShoppingCart size={14} strokeWidth={2.5} color="white" />
            </div>
            {/* Cart badge */}
            <span
              className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full font-black text-orange-600"
              style={{ fontSize: "7px", backgroundColor: "#fef08a" }}
            >
              3
            </span>
          </div>
        </div>

        {/* Row 2: search pill */}
        <div className="px-3 pb-2">
          <div
            className="flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
          >
            <Search size={11} strokeWidth={2.5} color="#9ca3af" />
            <span className="flex-1 text-gray-400" style={{ fontSize: "10px" }}>
              Search deals&hellip;
            </span>
            <span
              className="rounded-full bg-orange-500 px-1.5 py-0.5 font-black text-white"
              style={{ fontSize: "7.5px" }}
            >
              HOT
            </span>
          </div>
        </div>
      </header>

      {/* ══ FLASH SALE BANNER ══ */}
      <div
        className="shrink-0 flex items-center justify-between px-3 py-1.5"
        style={{ backgroundColor: "#1c1917" }}
      >
        {/* Left: label */}
        <div className="flex items-center gap-1.5">
          <span className="text-base leading-none" aria-hidden="true">⚡</span>
          <div>
            <p className="font-black uppercase text-white" style={{ fontSize: "11px", letterSpacing: "0.04em" }}>
              Flash Sale
            </p>
            <p className="font-semibold text-orange-400" style={{ fontSize: "7.5px" }}>
              Ends soon
            </p>
          </div>
        </div>

        {/* Right: countdown */}
        <div className="flex items-center gap-0.5">
          {["02", "14", "09"].map((seg, i) => (
            <span key={i} className="flex items-center gap-0.5">
              <span
                className="flex items-center justify-center rounded font-black tabular-nums text-yellow-300"
                style={{
                  width: "24px",
                  height: "22px",
                  fontSize: "12px",
                  backgroundColor: "#27272a",
                  border: "1px solid #3f3f46",
                }}
              >
                {seg}
              </span>
              {i < 2 && (
                <span className="font-black text-yellow-400" style={{ fontSize: "12px" }}>
                  :
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ══ PROMO TICKER ══ */}
      <div
        className="shrink-0 overflow-hidden py-1"
        style={{ backgroundColor: "#fef08a" }}
      >
        <span
          className="inline-block whitespace-nowrap font-bold uppercase text-gray-900"
          style={{
            fontSize: "7.5px",
            letterSpacing: "0.08em",
            animation: "ddTicker 16s linear infinite",
          }}
        >
          🚀 FREE shipping over $25&nbsp;&nbsp;·&nbsp;&nbsp;Extra 10% with code&nbsp;
          <span
            className="rounded px-1 text-yellow-400"
            style={{ backgroundColor: "#111827" }}
          >
            DROP10
          </span>
          &nbsp;&nbsp;·&nbsp;&nbsp;🔥 New flash deals every hour&nbsp;&nbsp;·&nbsp;&nbsp;
          🚀 FREE shipping over $25&nbsp;&nbsp;·&nbsp;&nbsp;Extra 10% with code&nbsp;
          <span
            className="rounded px-1 text-yellow-400"
            style={{ backgroundColor: "#111827" }}
          >
            DROP10
          </span>
          &nbsp;&nbsp;·&nbsp;&nbsp;🔥 New flash deals every hour&nbsp;&nbsp;&nbsp;
        </span>
      </div>

      {/* ══ CATEGORY CHIPS ══ */}
      <div
        className="flex shrink-0 gap-1.5 overflow-x-auto px-3 pb-2 pt-2"
        style={{ scrollbarWidth: "none" }}
      >
        {CATEGORIES.map((cat, i) => (
          <span
            key={cat}
            className="shrink-0 rounded-full font-bold uppercase"
            style={{
              fontSize: "8.5px",
              letterSpacing: "0.05em",
              padding: "4px 10px",
              backgroundColor: i === 0 ? "#f97316" : "#27272a",
              color: i === 0 ? "#fff" : "#a1a1aa",
              boxShadow: i === 0 ? "0 2px 8px rgba(249,115,22,0.45)" : "none",
            }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* ══ SECTION HEADER ══ */}
      <div className="flex shrink-0 items-center justify-between px-3 pb-1">
        <div className="flex items-center gap-1">
          <Tag size={10} strokeWidth={2.5} color="#facc15" />
          <span className="font-black uppercase text-white" style={{ fontSize: "10px", letterSpacing: "0.05em" }}>
            Today&apos;s Deals
          </span>
          <span
            className="rounded-full px-1.5 py-0.5 font-black text-white"
            style={{ fontSize: "7px", backgroundColor: "#ef4444" }}
          >
            6 items
          </span>
        </div>
        <span className="cursor-pointer font-semibold text-orange-400" style={{ fontSize: "8px" }}>
          View all ›
        </span>
      </div>

      {/* ══ DEAL GRID ══ */}
      <div className="flex-1 overflow-y-auto px-3 pb-2" style={{ scrollbarWidth: "none" }}>
        <div className="grid grid-cols-2 gap-2">
          {DEALS.map((deal) => (
            <DealCard key={deal.title} deal={deal} />
          ))}
        </div>

        {/* ── Members-only promo strip ── */}
        <div
          className="mt-2.5 flex items-center justify-between rounded-2xl px-4 py-2.5 shadow-lg"
          style={{
            background: "linear-gradient(110deg,#dc2626 0%,#ea580c 100%)",
            boxShadow: "0 4px 18px rgba(220,38,38,0.3)",
          }}
        >
          <div>
            <p
              className="font-black uppercase text-yellow-300"
              style={{ fontSize: "7.5px", letterSpacing: "0.1em" }}
            >
              Members Only
            </p>
            <p className="mt-0.5 font-black leading-tight text-white" style={{ fontSize: "10px" }}>
              Extra 10% every drop 🔥
            </p>
          </div>
          <button
            className="cursor-pointer rounded-full font-black uppercase text-gray-900 shadow"
            style={{
              fontSize: "7.5px",
              padding: "5px 10px",
              backgroundColor: "#fef08a",
              letterSpacing: "0.06em",
            }}
            type="button"
          >
            Join Free
          </button>
        </div>
      </div>

      {/* ══ BOTTOM NAV ══ */}
      <nav
        className="flex shrink-0 items-center justify-around border-t py-1.5"
        style={{ backgroundColor: "#18181b", borderColor: "#3f3f46" }}
      >
        {[
          { icon: <Home size={16} strokeWidth={2} />, label: "Home", active: true },
          { icon: <Grid2x2 size={16} strokeWidth={2} />, label: "Categories", active: false },
          { icon: <ShoppingCart size={16} strokeWidth={2} />, label: "Cart", active: false },
          { icon: <User size={16} strokeWidth={2} />, label: "Me", active: false },
        ].map(({ icon, label, active }) => (
          <button
            key={label}
            type="button"
            className="flex flex-col items-center gap-0.5 cursor-pointer"
            style={{ color: active ? "#f97316" : "#71717a", minWidth: "44px" }}
          >
            {icon}
            <span
              className="font-semibold"
              style={{ fontSize: "7.5px" }}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>

      {/* ══ Keyframe for ticker ══ */}
      <style>{`
        @keyframes ddTicker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
