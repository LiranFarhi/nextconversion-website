import { Search, Home, Bell, MessageCircle, User } from "lucide-react";

// --- Pin data ---
type Pin =
  | { kind: "product"; caption: string; price: string; gradient: string; accent: string; height: string }
  | { kind: "idea"; caption: string; sub: string; gradient: string; accent: string; height: string };

const colA: Pin[] = [
  {
    kind: "product",
    caption: "Rosehip Facial Oil",
    price: "$38",
    gradient: "from-rose-100 via-pink-50 to-rose-200",
    accent: "bg-rose-300",
    height: "h-36",
  },
  {
    kind: "idea",
    caption: "AM / PM Routine",
    sub: "Morning glow · Evening repair",
    gradient: "from-sage-100 via-green-50 to-emerald-100",
    accent: "bg-emerald-200",
    height: "h-28",
  },
  {
    kind: "product",
    caption: "Barrier Repair Serum",
    price: "$44",
    gradient: "from-amber-50 via-yellow-50 to-orange-100",
    accent: "bg-amber-200",
    height: "h-40",
  },
];

const colB: Pin[] = [
  {
    kind: "idea",
    caption: "Glow Ingredients",
    sub: "Niacinamide · Vitamin C · Rosehip",
    gradient: "from-pink-50 via-rose-50 to-fuchsia-100",
    accent: "bg-pink-200",
    height: "h-32",
  },
  {
    kind: "product",
    caption: "Gentle Cream Cleanser",
    price: "$26",
    gradient: "from-green-50 via-teal-50 to-emerald-100",
    accent: "bg-teal-200",
    height: "h-36",
  },
  {
    kind: "idea",
    caption: "Calm Your Skin Barrier",
    sub: "Ceramides · Oat · Centella",
    gradient: "from-stone-100 via-amber-50 to-rose-50",
    accent: "bg-rose-200",
    height: "h-28",
  },
];

// --- Small botanical SVG decoration ---
function LeafDeco({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 C6 6 4 14 12 22 C20 14 18 6 12 2Z"
        fill="currentColor"
        opacity="0.25"
      />
      <line x1="12" y1="22" x2="12" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

// --- Individual Pin card ---
function PinCard({ pin }: { pin: Pin }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Image block */}
      <div
        className={`relative w-full bg-gradient-to-br ${pin.gradient} flex items-end justify-center ${pin.height}`}
      >
        {/* Decorative leaf */}
        <LeafDeco className="absolute left-3 top-3 h-8 w-8 text-green-600" />
        {/* Second leaf rotated */}
        <LeafDeco className="absolute right-4 bottom-4 h-5 w-5 rotate-45 text-rose-400" />
        {/* Accent circle */}
        <div
          className={`absolute top-2 right-8 h-6 w-6 rounded-full opacity-40 ${pin.accent}`}
        />
        <div className={`absolute bottom-4 left-8 h-4 w-4 rounded-full opacity-30 ${pin.accent}`} />

        {/* Save button — always visible for the "hover" look on this static mockup */}
        <span className="absolute top-2 right-2 rounded-full bg-red-500 px-2 py-0.5 text-[8px] font-bold text-white shadow-sm">
          Save
        </span>
      </div>

      {/* Caption */}
      <div className="px-2.5 py-1.5">
        <p className="truncate text-[10px] font-semibold leading-snug text-stone-700">
          {pin.caption}
        </p>
        {pin.kind === "product" ? (
          <p className="text-[9px] font-bold text-stone-500">{pin.price}</p>
        ) : (
          <p className="truncate text-[8px] text-stone-400 leading-tight">{pin.sub}</p>
        )}
      </div>
    </div>
  );
}

// --- Root component ---
export default function SkincarePinterest() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-stone-50 font-sans">

      {/* ── Top Bar ── */}
      <header className="flex items-center gap-2 border-b border-stone-200 bg-white/95 px-3 py-2">
        {/* Search pill */}
        <div className="flex flex-1 items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5">
          <Search size={10} strokeWidth={2} className="shrink-0 text-stone-400" />
          <span className="truncate text-[9px] text-stone-400">organic skincare</span>
        </div>

        {/* Nav icons */}
        <div className="flex items-center gap-2 text-stone-500">
          <Home size={12} strokeWidth={1.8} />
          <Bell size={12} strokeWidth={1.8} />
          <MessageCircle size={12} strokeWidth={1.8} />
          {/* Avatar circle */}
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-200">
            <User size={9} strokeWidth={1.8} className="text-rose-600" />
          </span>
        </div>
      </header>

      {/* ── Tabs ── */}
      <div className="flex items-center gap-3 border-b border-stone-100 bg-white/80 px-4 py-1.5">
        <span className="border-b-2 border-stone-800 pb-0.5 text-[9px] font-bold text-stone-800">
          For you
        </span>
        <span className="text-[9px] font-medium text-stone-400">Boards</span>
      </div>

      {/* ── Board header ── */}
      <div className="flex items-center justify-between px-3 pb-1 pt-2">
        <div className="flex items-center gap-1.5">
          <LeafDeco className="h-4 w-4 text-emerald-600" />
          <span className="text-[9px] font-semibold tracking-wide text-stone-600">
            FLORA · clean beauty picks
          </span>
        </div>
        <span className="text-[8px] text-stone-400">42 pins</span>
      </div>

      {/* ── Masonry board (2 flex columns) ── */}
      <div className="flex-1 overflow-y-auto px-2 pb-3">
        <div className="flex gap-2">

          {/* Column A */}
          <div className="flex flex-1 flex-col gap-2">
            {colA.map((pin) => (
              <PinCard key={pin.caption} pin={pin} />
            ))}
          </div>

          {/* Column B — starts half a card lower visually because first card is shorter */}
          <div className="flex flex-1 flex-col gap-2 pt-5">
            {colB.map((pin) => (
              <PinCard key={pin.caption} pin={pin} />
            ))}
          </div>

        </div>

        {/* ── Soft footer note ── */}
        <p className="mt-3 text-center text-[8px] text-stone-300">
          ✦ &nbsp; Discovered through inspiration pins
        </p>
      </div>
    </div>
  );
}
