import { Check, PlusSquare, Menu, Grid3x3, Tag, UserPlus, Bookmark } from "lucide-react";

const highlights = [
  { label: "New In", gradient: "from-amber-300 via-orange-400 to-rose-400" },
  { label: "Watches", gradient: "from-yellow-300 via-amber-400 to-orange-500" },
  { label: "Belts", gradient: "from-orange-300 via-amber-300 to-yellow-400" },
  { label: "Scarves", gradient: "from-rose-300 via-pink-300 to-amber-300" },
  { label: "Sale", gradient: "from-red-400 via-orange-400 to-yellow-400" },
];

const tiles = [
  { gradient: "from-amber-200 via-yellow-300 to-amber-400", price: null, shape: "sunglasses" },
  { gradient: "from-stone-300 via-amber-200 to-yellow-200", price: "$45", shape: "belt" },
  { gradient: "from-orange-200 via-amber-300 to-yellow-300", price: null, shape: "watch" },
  { gradient: "from-teal-200 via-cyan-200 to-teal-300", price: null, shape: "scarf" },
  { gradient: "from-amber-300 via-orange-300 to-rose-300", price: "$120", shape: "watch" },
  { gradient: "from-yellow-200 via-amber-200 to-orange-200", price: null, shape: "ring" },
  { gradient: "from-stone-200 via-amber-100 to-yellow-200", price: null, shape: "sunglasses" },
  { gradient: "from-orange-300 via-amber-200 to-yellow-100", price: "$45", shape: "belt" },
  { gradient: "from-teal-300 via-emerald-200 to-teal-200", price: null, shape: "scarf" },
];

type TileShape = "sunglasses" | "belt" | "watch" | "ring" | "scarf";

function TileIcon({ shape }: { shape: TileShape }) {
  if (shape === "sunglasses") {
    return (
      <svg viewBox="0 0 40 18" width="32" height="14" className="opacity-30">
        <rect x="1" y="4" width="14" height="10" rx="5" fill="none" stroke="#78350f" strokeWidth="2" />
        <rect x="25" y="4" width="14" height="10" rx="5" fill="none" stroke="#78350f" strokeWidth="2" />
        <line x1="15" y1="9" x2="25" y2="9" stroke="#78350f" strokeWidth="2" />
        <line x1="1" y1="9" x2="0" y2="12" stroke="#78350f" strokeWidth="1.5" />
        <line x1="39" y1="9" x2="40" y2="12" stroke="#78350f" strokeWidth="1.5" />
      </svg>
    );
  }
  if (shape === "belt") {
    return (
      <svg viewBox="0 0 44 14" width="36" height="11" className="opacity-30">
        <rect x="0" y="5" width="44" height="4" rx="2" fill="none" stroke="#78350f" strokeWidth="2" />
        <rect x="19" y="2" width="6" height="10" rx="1.5" fill="none" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="22" cy="7" r="1.5" fill="#78350f" />
      </svg>
    );
  }
  if (shape === "watch") {
    return (
      <svg viewBox="0 0 20 26" width="18" height="23" className="opacity-30">
        <rect x="7" y="0" width="6" height="5" rx="1" fill="none" stroke="#78350f" strokeWidth="1.5" />
        <rect x="7" y="21" width="6" height="5" rx="1" fill="none" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="10" cy="13" r="7" fill="none" stroke="#78350f" strokeWidth="2" />
        <line x1="10" y1="9" x2="10" y2="13" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="13" x2="13" y2="15" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (shape === "ring") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" className="opacity-30">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#78350f" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="5" fill="none" stroke="#78350f" strokeWidth="1.5" />
        <rect x="8" y="3" width="8" height="4" rx="1" fill="none" stroke="#78350f" strokeWidth="1.5" />
      </svg>
    );
  }
  // scarf
  return (
    <svg viewBox="0 0 36 24" width="32" height="20" className="opacity-30">
      <path d="M4 4 Q10 2 18 8 Q26 14 32 10" fill="none" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 10 Q10 8 18 14 Q26 20 32 16" fill="none" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 10 Q33 13 30 18 Q27 22 24 20" fill="none" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function VintageInstagram() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-white font-sans">

      {/* ── Top App Bar ── */}
      <header className="flex items-center justify-between border-b border-stone-100 bg-white px-3 py-2">
        <div className="w-6" />
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-bold tracking-tight text-stone-900">
            @vintage.atelier
          </span>
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sky-500">
            <Check size={8} strokeWidth={3} className="text-white" />
          </span>
        </div>
        <div className="flex items-center gap-2 text-stone-800">
          <PlusSquare size={16} strokeWidth={1.8} />
          <Menu size={16} strokeWidth={1.8} />
        </div>
      </header>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto">

        {/* ── Profile Header ── */}
        <div className="px-3 pt-3 pb-2">
          {/* Avatar + stats row */}
          <div className="flex items-center gap-3">
            {/* Avatar with story ring */}
            <div className="flex-shrink-0">
              <div className="rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 shadow-sm">
                <div className="rounded-full p-[2px] bg-white">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 flex items-center justify-center overflow-hidden">
                    {/* Abstract face silhouette */}
                    <svg viewBox="0 0 56 56" width="56" height="56">
                      <circle cx="28" cy="22" r="10" fill="#92400e" opacity="0.35" />
                      <ellipse cx="28" cy="44" rx="13" ry="9" fill="#92400e" opacity="0.25" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-1 items-center justify-around">
              {[
                { value: "142", label: "posts" },
                { value: "28.5k", label: "followers" },
                { value: "310", label: "following" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="text-[13px] font-bold text-stone-900">{stat.value}</span>
                  <span className="text-[9px] text-stone-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="mt-2">
            <p className="text-[11px] font-bold text-stone-900">Vintage Atelier</p>
            <p className="mt-0.5 text-[10px] leading-snug text-stone-700">
              Curated 70s–90s accessories
            </p>
            <p className="text-[10px] leading-snug text-stone-700">
              ships worldwide · DM to buy
            </p>
            <p className="mt-0.5 text-[10px] text-amber-700 font-medium">
              🏷 vintage.atelier/shop
            </p>
          </div>

          {/* Action buttons */}
          <div className="mt-2.5 flex items-center gap-2">
            <button className="flex-1 rounded-lg bg-stone-900 py-1.5 text-[10px] font-semibold text-white">
              Follow
            </button>
            <button className="flex-1 rounded-lg bg-stone-100 py-1.5 text-[10px] font-semibold text-stone-800">
              Message
            </button>
            <button className="flex h-7 w-8 items-center justify-center rounded-lg bg-stone-100 text-stone-800">
              <UserPlus size={13} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ── Story Highlights ── */}
        <div className="flex gap-3 overflow-x-auto px-3 pb-3 pt-1 scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-shrink-0 flex-col items-center gap-1">
              <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${h.gradient} flex items-center justify-center shadow-sm`}>
                <div className="h-12 w-12 rounded-full border-2 border-white bg-gradient-to-br from-white/30 to-transparent" />
              </div>
              <span className="text-[9px] text-stone-600 font-medium">{h.label}</span>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div className="flex border-t border-stone-100">
          <button className="flex flex-1 items-center justify-center py-2 border-b-2 border-stone-900">
            <Grid3x3 size={16} strokeWidth={1.8} className="text-stone-900" />
          </button>
          <button className="flex flex-1 items-center justify-center py-2 border-b-2 border-transparent">
            <Tag size={16} strokeWidth={1.8} className="text-stone-400" />
          </button>
          <button className="flex flex-1 items-center justify-center py-2 border-b-2 border-transparent">
            <Bookmark size={16} strokeWidth={1.8} className="text-stone-400" />
          </button>
        </div>

        {/* ── Photo Grid ── */}
        <div className="grid grid-cols-3 gap-px bg-stone-100">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`relative aspect-square bg-gradient-to-br ${tile.gradient} flex items-center justify-center overflow-hidden`}
            >
              {/* Decorative overlay blobs */}
              <div className="absolute inset-0 bg-gradient-to-tl from-black/5 to-transparent" />
              <div className="absolute top-1 right-1 h-5 w-5 rounded-full bg-white/10" />
              <div className="absolute bottom-2 left-1 h-3 w-3 rounded-full bg-black/10" />

              {/* Item shape icon */}
              <div className="relative z-10 flex items-center justify-center">
                <TileIcon shape={tile.shape as TileShape} />
              </div>

              {/* Shopping tag pill */}
              {tile.price && (
                <div className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5 rounded-full bg-white/90 px-1.5 py-0.5 shadow-sm">
                  <Tag size={7} strokeWidth={2} className="text-stone-700" />
                  <span className="text-[8px] font-bold text-stone-800">{tile.price}</span>
                </div>
              )}

              {/* Multi-item indicator on a few tiles */}
              {i === 2 && (
                <div className="absolute top-1.5 right-1.5">
                  <svg viewBox="0 0 12 12" width="10" height="10" className="opacity-80">
                    <rect x="2" y="2" width="7" height="7" rx="1.5" fill="none" stroke="white" strokeWidth="1.5" />
                    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" fill="none" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom spacer ── */}
        <div className="h-3 bg-white" />
      </div>
    </div>
  );
}
