import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Music,
  Plus,
  ShoppingCart,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Shadow Cargo Tee",
    price: "$48",
    accent: "#39ff14",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="4" fill="#111" />
        {/* tee body */}
        <path d="M14 16 L8 22 L14 24 L14 40 L34 40 L34 24 L40 22 L34 16 L28 20 Q24 22 20 20 Z" fill="#1a1a1a" stroke="#39ff14" strokeWidth="1.2" />
        {/* chest graphic — bolt */}
        <path d="M26 22 L22 29 L25 29 L22 36 L28 28 L25 28 Z" fill="#39ff14" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Tactical Hoodie",
    price: "$89",
    accent: "#e040fb",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="4" fill="#111" />
        {/* hoodie body */}
        <path d="M12 18 L6 26 L14 27 L14 41 L34 41 L34 27 L42 26 L36 18 L28 22 Q24 25 20 22 Z" fill="#1a1a1a" stroke="#e040fb" strokeWidth="1.2" />
        {/* hood */}
        <path d="M20 22 Q24 14 28 22 Q26 18 24 17 Q22 18 20 22 Z" fill="#222" stroke="#e040fb" strokeWidth="1" />
        {/* pocket */}
        <rect x="18" y="32" width="12" height="5" rx="1" fill="#222" stroke="#e040fb" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Cargo Pants",
    price: "$72",
    accent: "#39ff14",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="4" fill="#111" />
        {/* waistband */}
        <rect x="12" y="10" width="24" height="5" rx="1" fill="#222" stroke="#39ff14" strokeWidth="1" />
        {/* left leg */}
        <path d="M12 15 L12 40 L21 40 L24 25 L21 15 Z" fill="#1a1a1a" stroke="#39ff14" strokeWidth="1.2" />
        {/* right leg */}
        <path d="M27 15 L36 15 L36 40 L27 40 L24 25 Z" fill="#1a1a1a" stroke="#39ff14" strokeWidth="1.2" />
        {/* cargo pocket left */}
        <rect x="13" y="22" width="7" height="6" rx="1" fill="#222" stroke="#39ff14" strokeWidth="0.8" />
        {/* cargo pocket right */}
        <rect x="28" y="22" width="7" height="6" rx="1" fill="#222" stroke="#39ff14" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Logo Cap",
    price: "$32",
    accent: "#e040fb",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect width="48" height="48" rx="4" fill="#111" />
        {/* cap dome */}
        <path d="M10 30 Q10 16 24 14 Q38 16 38 30 Z" fill="#1a1a1a" stroke="#e040fb" strokeWidth="1.2" />
        {/* brim */}
        <rect x="6" y="29" width="28" height="4" rx="2" fill="#222" stroke="#e040fb" strokeWidth="1" />
        {/* crown seam */}
        <line x1="24" y1="14" x2="24" y2="30" stroke="#e040fb" strokeWidth="0.8" strokeDasharray="2 1" />
        {/* logo */}
        <text x="24" y="26" textAnchor="middle" fill="#e040fb" fontSize="7" fontWeight="bold">N</text>
      </svg>
    ),
  },
];

export default function StreetTikTok() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-black font-sans">

      {/* ── Full-bleed video scene ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Moody base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-[#0a0a0a] to-black" />

        {/* Neon green glow bottom-left — contained */}
        <div className="absolute bottom-0 left-0 h-56 w-56 translate-y-8 -translate-x-8 rounded-full bg-green-500/25 blur-3xl" />
        {/* Fuchsia glow top-right — contained */}
        <div className="absolute right-0 top-0 h-44 w-44 -translate-y-4 translate-x-4 rounded-full bg-fuchsia-600/20 blur-3xl" />

        {/* Hero garment — large centred SVG illustration of an oversized tee worn figure */}
        <div className="absolute inset-x-0 top-[12%] flex items-start justify-center">
          <svg
            viewBox="0 0 220 280"
            fill="none"
            className="w-[68%] max-w-[240px]"
            aria-hidden="true"
          >
            {/* body silhouette */}
            <ellipse cx="110" cy="200" rx="42" ry="62" fill="#111" />
            {/* head */}
            <ellipse cx="110" cy="90" rx="28" ry="32" fill="#1c1c1c" stroke="#444" strokeWidth="1" />
            {/* hair / cap brim hint */}
            <rect x="83" y="62" width="54" height="8" rx="4" fill="#333" />
            <rect x="80" y="58" width="60" height="10" rx="5" fill="#222" stroke="#39ff14" strokeWidth="0.8" />

            {/* oversized tee — shoulder seams wide */}
            <path
              d="M52 128 L30 148 L48 156 L52 240 L168 240 L172 156 L190 148 L168 128 L148 138 Q110 148 72 138 Z"
              fill="#141414"
              stroke="#39ff14"
              strokeWidth="1.5"
            />
            {/* collar */}
            <path
              d="M86 136 Q110 144 134 136"
              stroke="#555"
              strokeWidth="1.5"
              fill="none"
            />
            {/* chest graphic: big NORTHLINE lightning bolt */}
            <path
              d="M118 158 L104 178 L112 178 L100 200 L122 174 L114 174 Z"
              fill="#39ff14"
              opacity="0.95"
            />
            {/* neon outline accent on tee hem */}
            <line x1="68" y1="240" x2="152" y2="240" stroke="#39ff14" strokeWidth="1.2" opacity="0.5" />

            {/* left arm */}
            <path d="M52 128 L36 180 L50 184 L58 156 Z" fill="#141414" stroke="#39ff14" strokeWidth="1" />
            {/* right arm */}
            <path d="M168 128 L184 180 L170 184 L162 156 Z" fill="#141414" stroke="#39ff14" strokeWidth="1" />

            {/* Subtle drop shadow / ground line */}
            <ellipse cx="110" cy="270" rx="50" ry="6" fill="#39ff14" opacity="0.08" />
          </svg>
        </div>

        {/* Scan-line texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.6) 3px, rgba(255,255,255,0.6) 4px)",
          }}
        />

        {/* Diagonal brand stripe accent */}
        <div className="absolute bottom-[28%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      </div>

      {/* ── TOP: progress bars + tabs ── */}
      <div className="relative z-10 px-2 pt-2">
        <div className="mb-1.5 flex gap-[3px]">
          {([0.62, 0, 0, 0, 0] as number[]).map((fill, i) => (
            <div
              key={i}
              className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/20"
            >
              {fill > 0 && (
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-white"
                  style={{ width: `${fill * 100}%` }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-5 pb-1">
          <span className="text-[11px] font-medium text-white/50">Following</span>
          <span className="relative text-[11px] font-bold text-white">
            For You
            <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-white" />
          </span>
        </div>
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="relative z-10 flex flex-1 flex-col justify-end overflow-hidden">

        {/* Products shelf tray */}
        <div className="mx-2 mb-2 overflow-hidden rounded-xl border border-white/10 bg-black/70 px-2 py-2 backdrop-blur-md">
          <p className="mb-1.5 text-[9px] font-bold uppercase tracking-widest text-white/50">
            Products in this video
          </p>
          <div className="flex gap-2 overflow-hidden">
            {products.map((p) => (
              <div
                key={p.id}
                className="flex flex-1 flex-col items-center gap-1 overflow-hidden rounded-lg border bg-black/60 p-1"
                style={{ borderColor: p.accent + "40" }}
              >
                <div className="h-10 w-10 overflow-hidden rounded-md">
                  {p.icon}
                </div>
                <span
                  className="w-full truncate text-center text-[8px] font-bold leading-tight"
                  style={{ color: p.accent }}
                >
                  {p.price}
                </span>
                <button
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ backgroundColor: p.accent + "22", outline: `1px solid ${p.accent}55` }}
                  aria-label={`Add ${p.name} to cart`}
                >
                  <ShoppingCart size={9} style={{ color: p.accent }} strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom overlay row: left info + right action rail */}
        <div className="flex items-end">

          {/* ── BOTTOM-LEFT overlay ── */}
          <div className="flex flex-1 flex-col gap-1 overflow-hidden pb-3 pl-3 pr-1">
            <span className="text-[13px] font-black text-white drop-shadow-md">
              @northline
            </span>
            <p className="text-[11px] font-medium leading-snug text-white/90 drop-shadow">
              new drop just landed 🔥 limited 200 pcs
            </p>

            {/* Highlighted shop pill */}
            <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
              <div className="flex items-center gap-1.5 overflow-hidden rounded-full border border-green-400/60 bg-black/70 px-2 py-1 backdrop-blur-sm">
                {/* mini tee thumbnail */}
                <span className="text-[10px]">👕</span>
                <span className="truncate text-[10px] font-semibold text-white">
                  Shadow Cargo Tee
                </span>
                <span className="shrink-0 text-[10px] font-black text-green-400">$48</span>
              </div>
              <button className="shrink-0 rounded-full bg-green-400 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-black shadow-lg">
                Shop now
              </button>
            </div>

            {/* Music ticker */}
            <div className="flex items-center gap-1.5 overflow-hidden">
              <Music size={9} strokeWidth={2} className="shrink-0 animate-pulse text-white/70" />
              <span className="truncate text-[10px] text-white/60">
                &#9834;&nbsp;original sound - northline
              </span>
            </div>
          </div>

          {/* ── RIGHT ACTION RAIL ── */}
          <div className="flex shrink-0 flex-col items-center gap-3 pb-3 pr-2">
            {/* Avatar */}
            <div className="relative">
              <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-green-400 via-teal-500 to-cyan-700">
                <div className="flex h-full w-full items-end justify-center">
                  <div className="h-6 w-5 rounded-t-full bg-white/30" />
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-400 shadow-md">
                  <Plus size={8} strokeWidth={3} className="text-black" />
                </div>
              </div>
            </div>

            {/* Like */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Heart size={16} strokeWidth={2} className="text-white" />
              </div>
              <span className="text-[9px] font-semibold text-white/80">12.4k</span>
            </div>

            {/* Comment */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <MessageCircle size={16} strokeWidth={2} className="text-white" />
              </div>
              <span className="text-[9px] font-semibold text-white/80">388</span>
            </div>

            {/* Bookmark */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Bookmark size={16} strokeWidth={2} className="text-white" />
              </div>
              <span className="text-[9px] font-semibold text-white/80">Save</span>
            </div>

            {/* Share */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Share2 size={16} strokeWidth={2} className="text-white" />
              </div>
              <span className="text-[9px] font-semibold text-white/80">Share</span>
            </div>

            {/* Spinning disc */}
            <div
              className="flex h-7 w-7 animate-spin items-center justify-center rounded-full border-2 border-white/30 bg-gradient-to-br from-neutral-700 to-neutral-900"
              style={{ animationDuration: "4s" }}
            >
              <Music size={11} strokeWidth={2} className="text-white/80" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
