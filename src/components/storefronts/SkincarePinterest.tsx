import { Search, Home, Bell, MessageCircle, User } from "lucide-react";

// ─── Product SVG Illustrations ──────────────────────────────────────────────

/** Rosehip Facial Oil — tall amber dropper bottle */
function IllustRosehipOil() {
  return (
    <svg viewBox="0 0 80 110" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* bottle body */}
      <rect x="25" y="38" width="30" height="58" rx="8" fill="#f9c784" />
      {/* label band */}
      <rect x="25" y="56" width="30" height="22" rx="0" fill="#f6a84e" opacity="0.5" />
      {/* label text lines */}
      <rect x="30" y="61" width="20" height="2" rx="1" fill="#c2742b" opacity="0.6" />
      <rect x="32" y="66" width="16" height="1.5" rx="1" fill="#c2742b" opacity="0.4" />
      {/* dropper shoulder */}
      <rect x="31" y="30" width="18" height="10" rx="4" fill="#e89a3e" />
      {/* dropper stem */}
      <rect x="37" y="10" width="6" height="22" rx="3" fill="#e89a3e" />
      {/* dropper bulb */}
      <ellipse cx="40" cy="9" rx="5" ry="6" fill="#c2742b" opacity="0.7" />
      {/* oil drop */}
      <path d="M40 92 C37 88 34 83 37 80 C40 77 43 80 40 92Z" fill="#c2742b" opacity="0.35" />
      {/* rose decoration */}
      <circle cx="40" cy="72" r="5" fill="#f6a84e" opacity="0.5" />
      <path d="M37 72 Q40 68 43 72 Q40 76 37 72Z" fill="#c2742b" opacity="0.4" />
    </svg>
  );
}

/** Gentle Cream Cleanser — pump bottle with flat dome */
function IllustCreamCleanser() {
  return (
    <svg viewBox="0 0 80 110" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* bottle body */}
      <rect x="20" y="42" width="40" height="55" rx="10" fill="#d4ede3" />
      {/* dome top */}
      <ellipse cx="40" cy="42" rx="20" ry="8" fill="#b8ddc9" />
      {/* label */}
      <rect x="22" y="60" width="36" height="20" rx="4" fill="#a8d4bc" opacity="0.4" />
      <rect x="27" y="65" width="26" height="2" rx="1" fill="#4a9470" opacity="0.5" />
      <rect x="30" y="70" width="20" height="1.5" rx="1" fill="#4a9470" opacity="0.35" />
      {/* pump stem */}
      <rect x="37" y="18" width="6" height="26" rx="3" fill="#b8ddc9" />
      {/* pump head */}
      <rect x="30" y="14" width="22" height="7" rx="3.5" fill="#8cc4a8" />
      {/* nozzle */}
      <rect x="48" y="15" width="8" height="4" rx="2" fill="#8cc4a8" />
      {/* cream swirl */}
      <path d="M32 82 Q40 78 48 82" stroke="#4a9470" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M34 87 Q40 84 46 87" stroke="#4a9470" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

/** Barrier Repair Serum — tall thin serum bottle with glass dropper */
function IllustBarrierSerum() {
  return (
    <svg viewBox="0 0 80 120" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* bottle body — slim, tall */}
      <rect x="28" y="40" width="24" height="66" rx="6" fill="#fce5b8" />
      {/* glass highlight */}
      <rect x="30" y="44" width="5" height="50" rx="2.5" fill="white" opacity="0.35" />
      {/* label */}
      <rect x="28" y="60" width="24" height="24" rx="0" fill="#f6c46a" opacity="0.45" />
      <rect x="31" y="65" width="18" height="2" rx="1" fill="#b07e20" opacity="0.55" />
      <rect x="33" y="70" width="14" height="1.5" rx="1" fill="#b07e20" opacity="0.4" />
      {/* neck */}
      <rect x="33" y="30" width="14" height="12" rx="4" fill="#f0b840" />
      {/* dropper collar */}
      <rect x="31" y="27" width="18" height="5" rx="2.5" fill="#e09e20" />
      {/* dropper pipette */}
      <rect x="38" y="6" width="4" height="23" rx="2" fill="#e09e20" />
      {/* pipette bulb */}
      <ellipse cx="40" cy="5" rx="4.5" ry="5.5" fill="#b07e20" opacity="0.7" />
      {/* serum bead */}
      <ellipse cx="40" cy="107" rx="3" ry="4" fill="#f6c46a" opacity="0.5" />
      {/* sparkle */}
      <path d="M55 55 L57 51 L59 55 L55 57Z" fill="#e09e20" opacity="0.35" />
    </svg>
  );
}

/** Hydra Mist — fine-mist spray bottle */
function IllustHydraMist() {
  return (
    <svg viewBox="0 0 80 110" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* bottle body */}
      <rect x="24" y="35" width="32" height="62" rx="9" fill="#c7e8f5" />
      {/* bottle shoulder curve */}
      <path d="M24 50 Q24 35 40 35 Q56 35 56 50Z" fill="#a8d8ee" />
      {/* label */}
      <rect x="26" y="58" width="28" height="20" rx="4" fill="#7fc4e0" opacity="0.35" />
      <rect x="30" y="63" width="20" height="2" rx="1" fill="#2a7da0" opacity="0.5" />
      <rect x="32" y="68" width="16" height="1.5" rx="1" fill="#2a7da0" opacity="0.35" />
      {/* pump neck */}
      <rect x="35" y="22" width="10" height="15" rx="3" fill="#a8d8ee" />
      {/* sprayer head */}
      <rect x="29" y="16" width="22" height="9" rx="4" fill="#7fc4e0" />
      {/* nozzle tip */}
      <rect x="51" y="18" width="7" height="5" rx="2.5" fill="#5aabcc" />
      {/* mist particles */}
      <circle cx="62" cy="17" r="1.5" fill="#a8d8ee" opacity="0.7" />
      <circle cx="65" cy="14" r="1" fill="#a8d8ee" opacity="0.55" />
      <circle cx="67" cy="19" r="1.2" fill="#a8d8ee" opacity="0.5" />
      <circle cx="63" cy="12" r="0.8" fill="#a8d8ee" opacity="0.45" />
      <circle cx="69" cy="15" r="0.9" fill="#a8d8ee" opacity="0.4" />
      {/* water drop decoration */}
      <path d="M40 80 C38 76 35 72 38 69 C41 66 44 69 40 80Z" fill="#2a7da0" opacity="0.25" />
    </svg>
  );
}

/** Clay Mask — wide low cosmetic jar */
function IllustClayMask() {
  return (
    <svg viewBox="0 0 90 90" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* jar body */}
      <rect x="15" y="38" width="60" height="40" rx="10" fill="#e8c9b0" />
      {/* jar lid */}
      <rect x="15" y="28" width="60" height="14" rx="8" fill="#d4a882" />
      {/* lid highlight */}
      <rect x="18" y="30" width="14" height="4" rx="2" fill="white" opacity="0.3" />
      {/* label on jar */}
      <rect x="18" y="46" width="54" height="22" rx="6" fill="#c8a882" opacity="0.35" />
      <rect x="25" y="52" width="40" height="2.5" rx="1.25" fill="#7a5230" opacity="0.5" />
      <rect x="29" y="57" width="32" height="2" rx="1" fill="#7a5230" opacity="0.35" />
      {/* clay texture dots */}
      <circle cx="28" cy="68" r="2" fill="#c8a882" opacity="0.4" />
      <circle cx="40" cy="71" r="1.5" fill="#c8a882" opacity="0.35" />
      <circle cx="52" cy="68" r="2" fill="#c8a882" opacity="0.4" />
      <circle cx="63" cy="71" r="1.5" fill="#c8a882" opacity="0.3" />
      {/* spatula */}
      <rect x="64" y="20" width="6" height="30" rx="3" fill="#d4a882" opacity="0.6" transform="rotate(20 64 20)" />
    </svg>
  );
}

/** Idea pin — botanical leaf cluster illustration */
function IllustLeafCluster({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className="h-full w-auto" aria-hidden="true">
      {/* center large leaf */}
      <path d="M45 72 C36 58 30 36 45 16 C60 36 54 58 45 72Z" fill={color} opacity="0.45" />
      <line x1="45" y1="70" x2="45" y2="24" stroke={color} strokeWidth="1.2" opacity="0.5" />
      {/* vein lines */}
      <path d="M45 40 Q50 38 54 42" stroke={color} strokeWidth="0.8" opacity="0.35" />
      <path d="M45 50 Q50 48 55 52" stroke={color} strokeWidth="0.8" opacity="0.35" />
      <path d="M45 40 Q40 38 36 42" stroke={color} strokeWidth="0.8" opacity="0.35" />
      <path d="M45 50 Q40 48 35 52" stroke={color} strokeWidth="0.8" opacity="0.35" />
      {/* left small leaf */}
      <path d="M26 68 C20 56 20 42 30 32 C38 42 36 56 26 68Z" fill={color} opacity="0.3" transform="rotate(-18 26 68)" />
      {/* right small leaf */}
      <path d="M64 68 C70 56 70 42 60 32 C52 42 54 56 64 68Z" fill={color} opacity="0.3" transform="rotate(18 64 68)" />
      {/* small dot berries */}
      <circle cx="22" cy="30" r="3.5" fill={color} opacity="0.4" />
      <circle cx="68" cy="30" r="3.5" fill={color} opacity="0.4" />
      <circle cx="45" cy="14" r="2.5" fill={color} opacity="0.5" />
    </svg>
  );
}

// ─── Pin data types ──────────────────────────────────────────────────────────

type ProductPin = {
  kind: "product";
  caption: string;
  price: string;
  bg: string;
  tallImg: boolean;
  illustration: React.ReactNode;
};

type IdeaPin = {
  kind: "idea";
  caption: string;
  sub: string;
  bg: string;
  leafColor: string;
  tallImg: boolean;
};

type Pin = ProductPin | IdeaPin;

// ─── Pin definitions ─────────────────────────────────────────────────────────

const colA: Pin[] = [
  {
    kind: "product",
    caption: "Rosehip Facial Oil",
    price: "$38",
    bg: "bg-amber-50",
    tallImg: true,
    illustration: <IllustRosehipOil />,
  },
  {
    kind: "idea",
    caption: "Your 3-step PM Routine",
    sub: "Cleanse · Serum · Oil",
    bg: "bg-emerald-50",
    leafColor: "#4a9470",
    tallImg: false,
  },
  {
    kind: "product",
    caption: "Barrier Repair Serum",
    price: "$44",
    bg: "bg-yellow-50",
    tallImg: true,
    illustration: <IllustBarrierSerum />,
  },
];

const colB: Pin[] = [
  {
    kind: "product",
    caption: "Hydra Mist",
    price: "$22",
    bg: "bg-sky-50",
    tallImg: false,
    illustration: <IllustHydraMist />,
  },
  {
    kind: "product",
    caption: "Gentle Cream Cleanser",
    price: "$26",
    bg: "bg-teal-50",
    tallImg: true,
    illustration: <IllustCreamCleanser />,
  },
  {
    kind: "idea",
    caption: "Glow Ingredients",
    sub: "Niacinamide · Vitamin C · Rosehip",
    bg: "bg-rose-50",
    leafColor: "#c2742b",
    tallImg: false,
  },
  {
    kind: "product",
    caption: "Clay Mask",
    price: "$30",
    bg: "bg-orange-50",
    tallImg: false,
    illustration: <IllustClayMask />,
  },
];

// ─── Pin card ────────────────────────────────────────────────────────────────

function PinCard({ pin }: { pin: Pin }) {
  const imgHeight = pin.tallImg ? "h-40" : "h-28";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-100">
      {/* Image area */}
      <div
        className={`relative flex ${imgHeight} w-full items-center justify-center overflow-hidden ${pin.bg}`}
      >
        {/* Product / idea illustration */}
        <div className="flex h-full w-full items-center justify-center p-3">
          {pin.kind === "product" ? (
            pin.illustration
          ) : (
            <IllustLeafCluster color={pin.leafColor} />
          )}
        </div>

        {/* Save pill */}
        <span className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-0.5 text-[7px] font-bold leading-tight text-white shadow">
          Save
        </span>

        {/* Price badge for products */}
        {pin.kind === "product" && (
          <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-bold text-stone-700 shadow-sm">
            {pin.price}
          </span>
        )}
      </div>

      {/* Caption */}
      <div className="px-2.5 py-2">
        <p className="truncate text-[10px] font-semibold leading-snug text-stone-700">
          {pin.caption}
        </p>
        {pin.kind === "idea" && (
          <p className="mt-0.5 truncate text-[8px] leading-tight text-stone-400">{pin.sub}</p>
        )}
        {pin.kind === "product" && (
          <p className="mt-0.5 text-[8px] font-medium text-stone-400">FLORA</p>
        )}
      </div>
    </div>
  );
}

// ─── Root component ──────────────────────────────────────────────────────────

export default function SkincarePinterest() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-stone-50 font-sans">

      {/* Top bar */}
      <header className="flex shrink-0 items-center gap-2 border-b border-stone-100 bg-white/95 px-3 py-2">
        <div className="flex flex-1 items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5">
          <Search size={10} strokeWidth={2} className="shrink-0 text-stone-400" />
          <span className="truncate text-[9px] text-stone-400">organic skincare</span>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-stone-400">
          <Home size={12} strokeWidth={1.8} />
          <Bell size={12} strokeWidth={1.8} />
          <MessageCircle size={12} strokeWidth={1.8} />
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100">
            <User size={9} strokeWidth={1.8} className="text-rose-500" />
          </span>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex shrink-0 items-center gap-4 border-b border-stone-100 bg-white/80 px-4 py-1.5">
        <span className="border-b-2 border-stone-700 pb-0.5 text-[9px] font-bold text-stone-800">
          For you
        </span>
        <span className="text-[9px] font-medium text-stone-400">Boards</span>
      </div>

      {/* Board subtitle */}
      <div className="flex shrink-0 items-center justify-between px-3 pb-1 pt-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] font-semibold tracking-widest text-emerald-700">FLORA</span>
          <span className="text-[8px] text-stone-400">· clean beauty picks</span>
        </div>
        <span className="text-[8px] text-stone-400">42 pins</span>
      </div>

      {/* Masonry board */}
      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
        <div className="flex gap-2">

          {/* Column A */}
          <div className="flex flex-1 flex-col gap-2">
            {colA.map((pin) => (
              <PinCard key={pin.caption} pin={pin} />
            ))}
          </div>

          {/* Column B — staggered by padding */}
          <div className="flex flex-1 flex-col gap-2 pt-4">
            {colB.map((pin) => (
              <PinCard key={pin.caption} pin={pin} />
            ))}
          </div>

        </div>

        <p className="mt-3 text-center text-[7px] text-stone-300">
          &#x2736;&nbsp; Discovered through FLORA inspiration
        </p>
      </div>

    </div>
  );
}
