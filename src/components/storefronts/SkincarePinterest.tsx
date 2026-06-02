import type { ReactElement } from "react";
import Image from "next/image";
import { Search, Home, Plus, Bookmark, Bell, User } from "lucide-react";

// ─── Save button overlay ──────────────────────────────────────────────────────

function SaveBadge(): ReactElement {
  return (
    <button
      aria-label="Save"
      className="absolute right-2 top-2 rounded-full bg-[#e60023] px-3 py-[5px] text-[8.5px] font-bold leading-none tracking-wide text-white"
      style={{ boxShadow: "0 2px 6px rgba(230,0,35,0.35)" }}
    >
      Save
    </button>
  );
}

// ─── Price badge ──────────────────────────────────────────────────────────────

function PriceBadge({ price }: { price: string }): ReactElement {
  return (
    <span
      className="absolute bottom-2 left-2 rounded-full bg-white px-2.5 py-1 text-[8px] font-bold text-stone-700"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.14)" }}
    >
      {price}
    </span>
  );
}

// ─── Idea tag ─────────────────────────────────────────────────────────────────

function IdeaBadge(): ReactElement {
  return (
    <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-stone-900/72 px-2.5 py-1">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-white opacity-80" />
      <span className="text-[7.5px] font-semibold text-white">Idea Pin</span>
    </span>
  );
}

// ─── Product source line ──────────────────────────────────────────────────────

function SourceLine({ source }: { source: string }): ReactElement {
  return (
    <div className="mt-0.5 flex items-center gap-1">
      <span className="h-2 w-2 rounded-full bg-[#4a7048]" />
      <span className="text-[7px] font-medium tracking-[0.10em] text-stone-400 uppercase">{source}</span>
    </div>
  );
}

// ─── Pin data types ───────────────────────────────────────────────────────────

type ProductPin = {
  kind: "product";
  name: string;
  price: string;
  tagline: string;
  source: string;
  imgSrc: string;
  imgAlt: string;
  imgH: number;
};

type IdeaPin = {
  kind: "idea";
  title: string;
  sub: string;
  imgSrc: string;
  imgAlt: string;
  imgH: number;
};

type PinData = ProductPin | IdeaPin;

// ─── Single pin card ──────────────────────────────────────────────────────────

function PinCard({ pin }: { pin: PinData }): ReactElement {
  const isProduct = pin.kind === "product";

  return (
    <article
      className="relative flex flex-col overflow-hidden rounded-2xl bg-white"
      style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.09), 0 0 0 0.5px rgba(0,0,0,0.05)" }}
    >
      {/* Image zone */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: `${pin.imgH}px` }}
      >
        <Image
          src={pin.imgSrc}
          alt={pin.imgAlt}
          fill
          sizes="(max-width: 320px) 50vw, 160px"
          className="object-cover"
        />
        <SaveBadge />
        {isProduct && <PriceBadge price={(pin as ProductPin).price} />}
        {!isProduct && <IdeaBadge />}
      </div>

      {/* Caption */}
      <div className="px-2.5 pb-2.5 pt-1.5">
        <p className="truncate text-[10px] font-semibold leading-snug text-stone-800">
          {pin.kind === "product" ? pin.name : pin.title}
        </p>
        <p className="mt-0.5 truncate text-[8px] leading-tight text-stone-400">
          {pin.kind === "product" ? pin.tagline : pin.sub}
        </p>
        {isProduct && <SourceLine source={(pin as ProductPin).source} />}
      </div>
    </article>
  );
}

// ─── Column data ──────────────────────────────────────────────────────────────

const colA: PinData[] = [
  {
    kind: "product",
    name: "Rosehip Facial Oil",
    price: "$38",
    tagline: "Regenerating · Vitamin A & C",
    source: "FLORA",
    imgSrc: "/products/skincare/oil.jpg",
    imgAlt: "Amber glass dropper bottle of rosehip facial oil",
    imgH: 148,
  },
  {
    kind: "idea",
    title: "AM / PM Routine",
    sub: "Your 5-step clean ritual",
    imgSrc: "/products/skincare/idea-routine.jpg",
    imgAlt: "Clean skincare products lined up on a shelf for a daily routine",
    imgH: 120,
  },
  {
    kind: "product",
    name: "Gentle Cream Cleanser",
    price: "$26",
    tagline: "Sensitive skin · Fragrance-free",
    source: "FLORA",
    imgSrc: "/products/skincare/cleanser.jpg",
    imgAlt: "White pump bottle of vitamin C cream cleanser",
    imgH: 138,
  },
];

const colB: PinData[] = [
  {
    kind: "product",
    name: "Barrier Repair Serum",
    price: "$44",
    tagline: "Ceramide · Niacinamide",
    source: "FLORA",
    imgSrc: "/products/skincare/serum.jpg",
    imgAlt: "Blue dropper bottle of vitamin C super serum",
    imgH: 156,
  },
  {
    kind: "idea",
    title: "Glow Ingredients",
    sub: "Hero actives for radiance",
    imgSrc: "/products/skincare/idea-glow.jpg",
    imgAlt: "Botanical wildflowers and natural plant ingredients",
    imgH: 128,
  },
  {
    kind: "product",
    name: "Hydrating Toner Mist",
    price: "$32",
    tagline: "AHA · Rose Water · pH 5.5",
    source: "FLORA",
    imgSrc: "/products/skincare/toner.jpg",
    imgAlt: "Clear glass toner bottle with pump dispenser",
    imgH: 128,
  },
  {
    kind: "product",
    name: "Clay Mask",
    price: "$29",
    tagline: "Kaolin · Bentonite · Detox",
    source: "FLORA",
    imgSrc: "/products/skincare/mask.jpg",
    imgAlt: "White jar of moisturizing clay mask cream",
    imgH: 96,
  },
];

// ─── Filter tab ───────────────────────────────────────────────────────────────

function FilterTab({ label, active }: { label: string; active: boolean }): ReactElement {
  return (
    <span
      className={`shrink-0 select-none rounded-full px-3 py-[5px] text-[9px] font-semibold leading-none ${
        active
          ? "bg-stone-800 text-white"
          : "bg-stone-100 text-stone-500"
      }`}
    >
      {label}
    </span>
  );
}

// ─── Bottom nav item ──────────────────────────────────────────────────────────

function NavItem({ icon, label, active }: { icon: ReactElement; label: string; active: boolean }): ReactElement {
  return (
    <div className={`flex flex-col items-center gap-0.5 ${active ? "text-[#e60023]" : "text-stone-400"}`}>
      {icon}
      <span className="text-[7px] font-medium leading-none">{label}</span>
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function SkincarePinterest(): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f7f5f2] font-sans">

      {/* ── Status bar simulation ── */}
      <div className="flex shrink-0 items-center justify-between bg-white px-4 pt-2 pb-1">
        <span className="text-[9px] font-semibold text-stone-700">9:41</span>
        <div className="flex items-center gap-1.5">
          {/* Signal bars */}
          <svg viewBox="0 0 18 10" className="h-2 w-4" fill="#555" aria-hidden="true">
            <rect x="0" y="6" width="3" height="4" rx="0.5" />
            <rect x="5" y="4" width="3" height="6" rx="0.5" />
            <rect x="10" y="2" width="3" height="8" rx="0.5" />
            <rect x="15" y="0" width="3" height="10" rx="0.5" />
          </svg>
          {/* WiFi */}
          <svg viewBox="0 0 16 12" className="h-2 w-3.5" fill="none" aria-hidden="true">
            <path d="M8 10 L8 10" stroke="#555" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 7.5 Q8 5.5 11 7.5" stroke="#555" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M2.5 5 Q8 1.5 13.5 5" stroke="#555" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          </svg>
          {/* Battery */}
          <svg viewBox="0 0 22 11" className="h-2 w-5" fill="none" aria-hidden="true">
            <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="#555" strokeWidth="1" />
            <rect x="19" y="3" width="2.5" height="5" rx="1" fill="#555" opacity="0.5" />
            <rect x="1.5" y="1.5" width="14" height="8" rx="1.5" fill="#555" opacity="0.7" />
          </svg>
        </div>
      </div>

      {/* ── Header (frosted) ── */}
      <header
        className="z-10 shrink-0 bg-white/96 px-3 pb-2.5 pt-1"
        style={{ backdropFilter: "blur(12px)", boxShadow: "0 1px 0 rgba(0,0,0,0.07)" }}
      >
        {/* Brand row */}
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* FLORA logo mark */}
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #5a8858 0%, #3a6636 100%)" }}
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M10 3 C7 6 5 10 7 14 C9 18 13 18 15 14 C17 10 15 6 10 3Z" fill="white" opacity="0.90" />
                <path d="M10 3 L10 16" stroke="#3a6636" strokeWidth="1" strokeOpacity="0.40" />
              </svg>
            </div>
            <span
              className="text-[14px] font-bold tracking-[0.20em] text-stone-700"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              FLORA
            </span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[7px] font-semibold tracking-wide text-emerald-700">
              clean beauty
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Bell size={15} strokeWidth={1.7} className="text-stone-400" />
            <div
              className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full ring-2 ring-rose-200"
              style={{ background: "linear-gradient(135deg, #f5c8c8, #e8a0a0)" }}
            >
              <User size={13} strokeWidth={1.8} className="text-rose-700" />
            </div>
          </div>
        </div>

        {/* Search pill */}
        <div
          className="flex items-center gap-2.5 rounded-full bg-stone-100 px-3.5 py-2.5"
          style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)" }}
        >
          <Search size={11} strokeWidth={2.5} className="shrink-0 text-stone-400" />
          <span className="flex-1 text-[10px] text-stone-400">Search clean skincare</span>
          {/* Camera / lens icon */}
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-stone-400" aria-hidden="true">
            <rect x="1.5" y="5" width="17" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="11.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 5 L8.5 2 L11.5 2 L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="16" cy="8" r="1" fill="currentColor" />
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

      {/* ── Masonry feed ── */}
      <div className="min-h-0 flex-1 overflow-hidden px-2 pt-2.5 pb-1">
        <div className="flex gap-2">
          {/* Column A */}
          <div className="flex flex-1 flex-col gap-2">
            {colA.map((pin) => (
              <PinCard key={pin.kind === "product" ? pin.name : pin.title} pin={pin} />
            ))}
          </div>
          {/* Column B — staggered top */}
          <div className="flex flex-1 flex-col gap-2 pt-8">
            {colB.map((pin) => (
              <PinCard key={pin.kind === "product" ? pin.name : pin.title} pin={pin} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom nav ── */}
      <nav
        className="shrink-0 border-t border-stone-100 bg-white/96 px-3 pb-3 pt-2"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center justify-around">
          <NavItem
            icon={<Home size={18} strokeWidth={1.8} />}
            label="Home"
            active={true}
          />
          <NavItem
            icon={<Search size={18} strokeWidth={1.8} />}
            label="Search"
            active={false}
          />
          <NavItem
            icon={
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e60023]"
                style={{ boxShadow: "0 2px 8px rgba(230,0,35,0.35)" }}
              >
                <Plus size={16} strokeWidth={2.8} className="text-white" />
              </span>
            }
            label="Create"
            active={false}
          />
          <NavItem
            icon={<Bookmark size={18} strokeWidth={1.8} />}
            label="Saved"
            active={false}
          />
          <NavItem
            icon={<User size={18} strokeWidth={1.8} />}
            label="Profile"
            active={false}
          />
        </div>
      </nav>

    </div>
  );
}
