import { Search, Home, Plus, Bookmark, Bell } from "lucide-react";

// ─── Inline SVG product illustrations ────────────────────────────────────────

function IllustRosehipOil() {
  return (
    <svg viewBox="0 0 64 112" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* dropper bulb */}
      <ellipse cx="32" cy="9" rx="6" ry="8" fill="#c97b3a" opacity="0.82" />
      {/* bulb highlight */}
      <ellipse cx="29" cy="7" rx="2" ry="3" fill="white" opacity="0.28" />
      {/* stem */}
      <rect x="30" y="16" width="4" height="20" rx="2" fill="#d48c42" />
      {/* collar */}
      <rect x="22" y="34" width="20" height="6" rx="3" fill="#b8762e" />
      {/* neck */}
      <rect x="25" y="39" width="14" height="8" rx="4" fill="#d48c42" />
      {/* body */}
      <rect x="18" y="46" width="28" height="54" rx="10" fill="#f5c77e" />
      {/* body sheen */}
      <rect x="20" y="50" width="7" height="42" rx="3.5" fill="white" opacity="0.26" />
      {/* label background */}
      <rect x="20" y="62" width="24" height="26" rx="5" fill="#e8a84a" opacity="0.38" />
      {/* rose motif */}
      <circle cx="32" cy="70" r="5" fill="#e07860" opacity="0.35" />
      <path d="M32 65 C29 68 27 72 32 75 C37 72 35 68 32 65Z" fill="#c05840" opacity="0.28" />
      {/* label lines */}
      <rect x="24" y="78" width="16" height="1.8" rx="0.9" fill="#8a5010" opacity="0.48" />
      <rect x="26" y="82" width="12" height="1.4" rx="0.7" fill="#8a5010" opacity="0.32" />
      {/* price tag dot */}
      <circle cx="32" cy="96" r="2.5" fill="#d48c42" opacity="0.22" />
    </svg>
  );
}

function IllustBarrierSerum() {
  return (
    <svg viewBox="0 0 54 118" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* pipette bulb */}
      <ellipse cx="27" cy="8" rx="5" ry="7" fill="#a07818" opacity="0.78" />
      <ellipse cx="25" cy="6" rx="1.8" ry="2.6" fill="white" opacity="0.28" />
      {/* stem */}
      <rect x="25" y="14" width="4" height="22" rx="2" fill="#c09020" />
      {/* collar */}
      <rect x="19" y="34" width="16" height="5" rx="2.5" fill="#a07818" />
      {/* neck */}
      <rect x="21" y="38" width="12" height="8" rx="4" fill="#c09020" />
      {/* slender body */}
      <rect x="16" y="45" width="22" height="64" rx="8" fill="#fdedc0" />
      {/* sheen */}
      <rect x="18" y="49" width="5" height="52" rx="2.5" fill="white" opacity="0.30" />
      {/* label band */}
      <rect x="17" y="62" width="20" height="28" rx="4" fill="#f6d060" opacity="0.36" />
      {/* sparkle */}
      <path d="M33 55 L34 51 L35 55 L31 53 L35 53Z" fill="#f6d060" opacity="0.65" />
      {/* label lines */}
      <rect x="20" y="67" width="14" height="1.8" rx="0.9" fill="#7a5c08" opacity="0.52" />
      <rect x="21" y="71" width="12" height="1.4" rx="0.7" fill="#7a5c08" opacity="0.36" />
      <rect x="22" y="75" width="10" height="1.2" rx="0.6" fill="#7a5c08" opacity="0.26" />
      {/* serum droplet at base */}
      <ellipse cx="27" cy="112" rx="3" ry="4.5" fill="#f6d060" opacity="0.42" />
      <path d="M27 108 L24 112 L30 112Z" fill="#f6d060" opacity="0.28" />
    </svg>
  );
}

function IllustCreamCleanser() {
  return (
    <svg viewBox="0 0 78 108" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* pump nozzle tube */}
      <rect x="36" y="8" width="6" height="6" rx="2" fill="#6aab8e" />
      <rect x="36" y="14" width="6" height="22" rx="3" fill="#8cc4a8" />
      {/* pump head */}
      <rect x="26" y="12" width="26" height="9" rx="4.5" fill="#7abbaa" />
      {/* tube body */}
      <rect x="16" y="35" width="46" height="64" rx="14" fill="#d2ede2" />
      {/* dome top */}
      <ellipse cx="39" cy="35" rx="23" ry="10" fill="#b8ddc9" />
      {/* sheen */}
      <rect x="18" y="40" width="9" height="50" rx="4.5" fill="white" opacity="0.27" />
      {/* label patch */}
      <rect x="20" y="54" width="38" height="30" rx="7" fill="#a8d4bc" opacity="0.36" />
      {/* leaf mark */}
      <path d="M39 60 C34 65 34 74 39 78 C44 74 44 65 39 60Z" fill="#3d8f62" opacity="0.28" />
      <line x1="39" y1="78" x2="39" y2="62" stroke="#3d8f62" strokeWidth="0.9" opacity="0.32" />
      {/* label lines */}
      <rect x="26" y="68" width="26" height="2" rx="1" fill="#2e7a52" opacity="0.46" />
      <rect x="28" y="73" width="22" height="1.5" rx="0.75" fill="#2e7a52" opacity="0.32" />
      {/* cream swirl */}
      <path d="M22 94 Q39 89 56 94" stroke="#2e7a52" strokeWidth="1.4" strokeLinecap="round" opacity="0.28" />
    </svg>
  );
}

function IllustTonerMist() {
  return (
    <svg viewBox="0 0 68 114" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* body */}
      <rect x="16" y="38" width="32" height="68" rx="12" fill="#bde4f4" />
      {/* shoulder curve */}
      <path d="M16 55 Q16 38 32 38 Q48 38 48 55Z" fill="#9dd0eb" />
      {/* sheen */}
      <rect x="18" y="42" width="7" height="56" rx="3.5" fill="white" opacity="0.26" />
      {/* pump neck */}
      <rect x="28" y="22" width="8" height="18" rx="3" fill="#9dd0eb" />
      {/* sprayer head */}
      <rect x="20" y="16" width="22" height="10" rx="5" fill="#7fc4e0" />
      {/* nozzle */}
      <rect x="42" y="18.5" width="10" height="5" rx="2.5" fill="#5aabcc" />
      {/* mist dots */}
      <circle cx="56" cy="18" r="2" fill="#9dd0eb" opacity="0.72" />
      <circle cx="60" cy="14" r="1.4" fill="#9dd0eb" opacity="0.55" />
      <circle cx="62" cy="22" r="1.6" fill="#9dd0eb" opacity="0.50" />
      <circle cx="58" cy="10" r="1" fill="#9dd0eb" opacity="0.42" />
      <circle cx="64" cy="17" r="0.8" fill="#9dd0eb" opacity="0.36" />
      {/* label */}
      <rect x="18" y="60" width="28" height="26" rx="6" fill="#70b8d8" opacity="0.30" />
      {/* wave mark */}
      <path d="M22 70 Q28 67 34 70 Q40 73 46 70" stroke="#0c6080" strokeWidth="1.2" strokeLinecap="round" opacity="0.40" />
      <path d="M22 76 Q28 73 34 76 Q40 79 46 76" stroke="#0c6080" strokeWidth="1" strokeLinecap="round" opacity="0.30" />
      {/* label lines */}
      <rect x="23" y="82" width="18" height="1.5" rx="0.75" fill="#0c6080" opacity="0.42" />
    </svg>
  );
}

function IllustClayMask() {
  return (
    <svg viewBox="0 0 88 82" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* jar body */}
      <rect x="10" y="38" width="68" height="38" rx="13" fill="#e6c8ae" />
      {/* body sheen */}
      <rect x="12" y="42" width="11" height="28" rx="5.5" fill="white" opacity="0.22" />
      {/* lid */}
      <rect x="10" y="26" width="68" height="15" rx="10" fill="#d2a880" />
      {/* lid sheen */}
      <rect x="13" y="28" width="16" height="6" rx="3" fill="white" opacity="0.26" />
      {/* lid rim */}
      <rect x="10" y="38" width="68" height="4" rx="0" fill="#c09060" opacity="0.38" />
      {/* label */}
      <rect x="15" y="46" width="58" height="22" rx="7" fill="#c8a882" opacity="0.30" />
      {/* clay swirl motif */}
      <path d="M30 54 Q44 50 58 54 Q44 58 30 54Z" fill="#9a7040" opacity="0.22" />
      {/* label lines */}
      <rect x="24" y="58" width="40" height="2" rx="1" fill="#5a3a18" opacity="0.44" />
      <rect x="28" y="63" width="32" height="1.6" rx="0.8" fill="#5a3a18" opacity="0.30" />
      {/* texture dots */}
      <circle cx="20" cy="70" r="2" fill="#c8a882" opacity="0.38" />
      <circle cx="36" cy="73" r="1.6" fill="#c8a882" opacity="0.32" />
      <circle cx="52" cy="70" r="2" fill="#c8a882" opacity="0.36" />
      <circle cx="68" cy="73" r="1.6" fill="#c8a882" opacity="0.28" />
    </svg>
  );
}

// ─── Idea pin botanical motifs ────────────────────────────────────────────────

function MotifLeaf({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* central stem */}
      <line x1="45" y1="78" x2="45" y2="18" stroke={color} strokeWidth="1.4" opacity="0.52" />
      {/* main leaf */}
      <path d="M45 76 C37 60 30 38 45 16 C60 38 53 60 45 76Z" fill={color} opacity="0.34" />
      {/* left veins */}
      <path d="M45 38 Q39 36 33 40" stroke={color} strokeWidth="0.9" opacity="0.38" />
      <path d="M45 50 Q38 48 31 52" stroke={color} strokeWidth="0.9" opacity="0.38" />
      <path d="M45 62 Q38 60 33 64" stroke={color} strokeWidth="0.9" opacity="0.30" />
      {/* right veins */}
      <path d="M45 38 Q51 36 57 40" stroke={color} strokeWidth="0.9" opacity="0.38" />
      <path d="M45 50 Q52 48 59 52" stroke={color} strokeWidth="0.9" opacity="0.38" />
      <path d="M45 62 Q52 60 57 64" stroke={color} strokeWidth="0.9" opacity="0.30" />
      {/* side sprigs */}
      <path d="M22 72 C16 58 20 42 30 34 C36 44 32 60 22 72Z" fill={color} opacity="0.22" transform="rotate(-18 22 72)" />
      <path d="M68 72 C74 58 70 42 60 34 C54 44 58 60 68 72Z" fill={color} opacity="0.22" transform="rotate(18 68 72)" />
      {/* berries */}
      <circle cx="18" cy="24" r="4" fill={color} opacity="0.36" />
      <circle cx="72" cy="24" r="4" fill={color} opacity="0.36" />
      <circle cx="45" cy="13" r="3" fill={color} opacity="0.46" />
    </svg>
  );
}

function MotifFlower({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* petals — cardinal */}
      <ellipse cx="45" cy="20" rx="7" ry="14" fill={color} opacity="0.34" />
      <ellipse cx="45" cy="70" rx="7" ry="14" fill={color} opacity="0.34" />
      <ellipse cx="20" cy="45" rx="14" ry="7" fill={color} opacity="0.34" />
      <ellipse cx="70" cy="45" rx="14" ry="7" fill={color} opacity="0.34" />
      {/* petals — diagonal */}
      <ellipse cx="24" cy="24" rx="6" ry="11" fill={color} opacity="0.24" transform="rotate(-45 24 24)" />
      <ellipse cx="66" cy="24" rx="6" ry="11" fill={color} opacity="0.24" transform="rotate(45 66 24)" />
      <ellipse cx="24" cy="66" rx="6" ry="11" fill={color} opacity="0.24" transform="rotate(45 24 66)" />
      <ellipse cx="66" cy="66" rx="6" ry="11" fill={color} opacity="0.24" transform="rotate(-45 66 66)" />
      {/* center */}
      <circle cx="45" cy="45" r="12" fill={color} opacity="0.52" />
      <circle cx="45" cy="45" r="6.5" fill="white" opacity="0.58" />
      <circle cx="45" cy="45" r="3" fill={color} opacity="0.60" />
      {/* pollen dots */}
      <circle cx="42" cy="41" r="1.2" fill="white" opacity="0.5" />
      <circle cx="48" cy="41" r="1.2" fill="white" opacity="0.5" />
      <circle cx="45" cy="49" r="1.2" fill="white" opacity="0.5" />
    </svg>
  );
}

// ─── Save button overlay ──────────────────────────────────────────────────────

function SaveBadge() {
  return (
    <span
      aria-label="Save"
      className="absolute right-2 top-2 rounded-full bg-red-500 px-2.5 py-[5px] text-[8.5px] font-bold leading-none tracking-wide text-white shadow-md"
    >
      Save
    </span>
  );
}

// ─── Product price badge ──────────────────────────────────────────────────────

function PriceBadge({ price }: { price: string }) {
  return (
    <span className="absolute bottom-2 left-2 rounded-full bg-white/92 px-2.5 py-1 text-[8px] font-bold text-stone-700 shadow-sm">
      {price}
    </span>
  );
}

// ─── Idea tag badge ───────────────────────────────────────────────────────────

function IdeaBadge() {
  return (
    <span className="absolute bottom-2 left-2 rounded-full bg-stone-900/70 px-2.5 py-1 text-[7.5px] font-semibold text-white shadow-sm">
      Idea Pin
    </span>
  );
}

// ─── Pin types ────────────────────────────────────────────────────────────────

type ProductPinData = {
  kind: "product";
  name: string;
  price: string;
  tagline: string;
  bg: string;
  imgH: number;
  Illust: () => React.JSX.Element;
};

type IdeaPinData = {
  kind: "idea";
  title: string;
  sub: string;
  bg: string;
  imgH: number;
  motif: "leaf" | "flower";
  motifColor: string;
  pills: string[];
};

type PinData = ProductPinData | IdeaPinData;

// ─── Individual pin card ──────────────────────────────────────────────────────

function PinCard({ pin }: { pin: PinData }) {
  const imageStyle = { height: `${pin.imgH}px` };

  return (
    <div className="relative flex flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_1px_6px_rgba(0,0,0,0.10)]">
      {/* image zone */}
      <div className={`relative flex w-full items-center justify-center overflow-hidden ${pin.bg}`} style={imageStyle}>
        <div className="flex h-full w-full items-center justify-center p-3">
          {pin.kind === "product" ? (
            <pin.Illust />
          ) : pin.motif === "leaf" ? (
            <MotifLeaf color={pin.motifColor} />
          ) : (
            <MotifFlower color={pin.motifColor} />
          )}
        </div>
        <SaveBadge />
        {pin.kind === "product" && <PriceBadge price={pin.price} />}
        {pin.kind === "idea" && <IdeaBadge />}
      </div>

      {/* caption */}
      <div className="px-2.5 pb-2.5 pt-2">
        <p className="truncate text-[10px] font-semibold leading-tight text-stone-800">
          {pin.kind === "product" ? pin.name : pin.title}
        </p>
        {pin.kind === "product" && (
          <p className="mt-0.5 truncate text-[8px] leading-snug text-stone-400">{pin.tagline}</p>
        )}
        {pin.kind === "idea" && (
          <>
            <p className="mt-0.5 truncate text-[8px] leading-snug text-stone-400">{pin.sub}</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {pin.pills.map((p) => (
                <span key={p} className="rounded-full bg-stone-100 px-1.5 py-0.5 text-[6.5px] font-medium text-stone-500">
                  {p}
                </span>
              ))}
            </div>
          </>
        )}
        {pin.kind === "product" && (
          <div className="mt-1 flex items-center gap-1">
            <span className="text-[7px] font-semibold tracking-[0.14em] text-emerald-700">FLORA</span>
            <span className="text-[7px] text-stone-300">·</span>
            <span className="text-[7px] text-stone-400">clean beauty</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Pin data — column A (left) ───────────────────────────────────────────────

const colA: PinData[] = [
  {
    kind: "product",
    name: "Rosehip Facial Oil",
    price: "$38",
    tagline: "Regenerating · Vitamin A",
    bg: "bg-amber-50",
    imgH: 130,
    Illust: IllustRosehipOil,
  },
  {
    kind: "idea",
    title: "AM / PM Routine",
    sub: "Cleanse · Mist · Serum · Oil",
    bg: "bg-[#eef5ec]",
    imgH: 96,
    motif: "leaf",
    motifColor: "#4a8040",
    pills: ["AM", "PM", "5 steps"],
  },
  {
    kind: "product",
    name: "Barrier Repair Serum",
    price: "$44",
    tagline: "Ceramide · Niacinamide",
    bg: "bg-[#fdf8ec]",
    imgH: 120,
    Illust: IllustBarrierSerum,
  },
  {
    kind: "product",
    name: "Pore Refining Toner",
    price: "$22",
    tagline: "AHA · Rose Water",
    bg: "bg-sky-50",
    imgH: 90,
    Illust: IllustTonerMist,
  },
];

// ─── Pin data — column B (right, staggered) ───────────────────────────────────

const colB: PinData[] = [
  {
    kind: "product",
    name: "Gentle Cream Cleanser",
    price: "$26",
    tagline: "Sensitive skin · Fragrance-free",
    bg: "bg-[#e8f4ee]",
    imgH: 118,
    Illust: IllustCreamCleanser,
  },
  {
    kind: "idea",
    title: "Glow Ingredients",
    sub: "Hero actives for radiance",
    bg: "bg-rose-50",
    imgH: 100,
    motif: "flower",
    motifColor: "#b86868",
    pills: ["Vit C", "Rosehip", "Niacinamide"],
  },
  {
    kind: "product",
    name: "Detox Clay Mask",
    price: "$30",
    tagline: "Kaolin · Bentonite",
    bg: "bg-[#f5ede4]",
    imgH: 88,
    Illust: IllustClayMask,
  },
];

// ─── Filter tab ───────────────────────────────────────────────────────────────

function FilterTab({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      className={`shrink-0 cursor-default select-none rounded-full px-3 py-[5px] text-[9px] font-semibold leading-none transition-colors ${
        active
          ? "bg-stone-800 text-white"
          : "bg-stone-100 text-stone-500 hover:bg-stone-200"
      }`}
    >
      {label}
    </span>
  );
}

// ─── Nav item ─────────────────────────────────────────────────────────────────

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-0.5 ${active ? "text-red-500" : "text-stone-400"}`}>
      {icon}
      <span className="text-[7px] font-medium leading-none tracking-wide">{label}</span>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function SkincarePinterest() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f8f6f3] font-sans">

      {/* ── Header ── */}
      <header className="z-10 shrink-0 bg-white/95 px-3 pb-2.5 pt-3 shadow-[0_1px_0_rgba(0,0,0,0.07)]" style={{ backdropFilter: "blur(8px)" }}>

        {/* Brand row */}
        <div className="mb-2.5 flex items-center justify-between">
          {/* Wordmark */}
          <div className="flex items-center gap-1.5">
            {/* Pinterest-style P mark, recolored for Flora */}
            <svg viewBox="0 0 22 22" fill="none" className="h-5 w-5" aria-hidden="true">
              <circle cx="11" cy="11" r="11" fill="#4a7048" />
              <text x="11" y="15.5" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="white" fontWeight="700">F</text>
            </svg>
            <span className="text-[13px] font-semibold tracking-[0.18em] text-stone-700" style={{ fontFamily: "Georgia, serif" }}>FLORA</span>
            <span className="ml-0.5 rounded-full bg-[#eef5ec] px-2 py-0.5 text-[7px] font-semibold tracking-wide text-emerald-700">clean beauty</span>
          </div>
          {/* Avatar + bell */}
          <div className="flex items-center gap-2">
            <Bell size={14} strokeWidth={1.8} className="text-stone-400" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 ring-2 ring-rose-200">
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                <circle cx="10" cy="7.5" r="3.8" fill="#c07878" />
                <path d="M3 19 C3 13.5 17 13.5 17 19" stroke="#c07878" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>

        {/* Search pill */}
        <div className="flex items-center gap-2 rounded-full bg-stone-100 px-3.5 py-2.5">
          <Search size={11} strokeWidth={2.5} className="shrink-0 text-stone-400" />
          <span className="flex-1 text-[10px] text-stone-400">organic skincare</span>
          {/* camera lens icon */}
          <svg viewBox="0 0 18 18" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
            <rect x="1" y="4" width="16" height="12" rx="3.5" stroke="#a3a3a3" strokeWidth="1.4" />
            <circle cx="9" cy="10" r="3" stroke="#a3a3a3" strokeWidth="1.4" />
            <path d="M6 4 L7.5 1.5 L10.5 1.5 L12 4" stroke="#a3a3a3" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Filter tabs */}
        <div className="mt-2.5 flex items-center gap-1.5 overflow-x-hidden">
          <FilterTab label="For you" active={true} />
          <FilterTab label="Skincare" active={false} />
          <FilterTab label="Routines" active={false} />
          <FilterTab label="Ingredients" active={false} />
          <FilterTab label="Trending" active={false} />
        </div>

      </header>

      {/* ── Masonry board ── */}
      <div className="min-h-0 flex-1 overflow-hidden px-2 pt-2.5 pb-1">
        <div className="flex gap-2">

          {/* Column A */}
          <div className="flex flex-1 flex-col gap-2">
            {colA.map((pin) => (
              <PinCard key={pin.kind === "product" ? pin.name : pin.title} pin={pin} />
            ))}
          </div>

          {/* Column B — offset top for stagger */}
          <div className="flex flex-1 flex-col gap-2 pt-6">
            {colB.map((pin) => (
              <PinCard key={pin.kind === "product" ? pin.name : pin.title} pin={pin} />
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom nav ── */}
      <nav className="shrink-0 border-t border-stone-100 bg-white/95 px-2 pb-2 pt-2" style={{ backdropFilter: "blur(8px)" }}>
        <div className="flex items-center justify-around">
          <NavItem
            icon={<Home size={17} strokeWidth={1.8} />}
            label="Home"
            active={true}
          />
          <NavItem
            icon={<Search size={17} strokeWidth={1.8} />}
            label="Search"
            active={false}
          />
          <NavItem
            icon={
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 shadow-sm">
                <Plus size={14} strokeWidth={2.8} className="text-white" />
              </span>
            }
            label="Create"
            active={false}
          />
          <NavItem
            icon={<Bookmark size={17} strokeWidth={1.8} />}
            label="Saved"
            active={false}
          />
          <NavItem
            icon={
              <svg viewBox="0 0 18 18" fill="none" className="h-[17px] w-[17px]" aria-hidden="true">
                <circle cx="9" cy="9" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="9" cy="9" r="1.8" fill="currentColor" />
              </svg>
            }
            label="Profile"
            active={false}
          />
        </div>
      </nav>

    </div>
  );
}
