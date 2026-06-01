import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Music,
  Plus,
  ShoppingBag,
} from "lucide-react";

export default function StreetTikTok() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-black font-sans">
      {/* ── Full-bleed video stand-in ── */}
      <div className="absolute inset-0 z-0">
        {/* Moody base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-neutral-900 to-black" />
        {/* Neon green glow bottom-left */}
        <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
        {/* Subtle pink glow top-right */}
        <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-fuchsia-600/15 blur-3xl" />
        {/* Big abstract shape — oversized T graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <svg viewBox="0 0 200 240" className="h-4/5 w-4/5" fill="none">
            {/* T-shirt silhouette */}
            <path
              d="M60 30 L20 60 L40 70 L40 200 L160 200 L160 70 L180 60 L140 30 L120 50 Q100 60 80 50 Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
        {/* Scan-line texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 4px)",
          }}
        />
      </div>

      {/* ── TOP: progress bars + tabs ── */}
      <div className="relative z-10 px-2 pt-2">
        {/* Progress segments */}
        <div className="mb-1.5 flex gap-[3px]">
          {[0.55, 0, 0, 0, 0].map((fill, i) => (
            <div
              key={i}
              className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/25"
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

        {/* Following / For You tabs */}
        <div className="flex items-center justify-center gap-5 pb-1">
          <span className="text-[11px] font-medium text-white/50">Following</span>
          <span className="relative text-[11px] font-bold text-white">
            For You
            <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-white" />
          </span>
        </div>
      </div>

      {/* ── MAIN CONTENT AREA (fills remaining space) ── */}
      <div className="relative z-10 flex flex-1 items-end overflow-hidden">
        {/* ── BOTTOM-LEFT overlay ── */}
        <div className="flex flex-1 flex-col gap-1.5 pb-3 pl-3 pr-14">
          {/* Handle */}
          <span className="text-[13px] font-black text-white drop-shadow-md">
            @northline
          </span>

          {/* Caption */}
          <p className="text-[11px] font-medium leading-snug text-white/90 drop-shadow">
            new drop just landed 🔥 limited 200 pcs
          </p>

          {/* Shoppable product pill */}
          <div className="mt-0.5 flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full border border-green-400/60 bg-black/60 px-3 py-1 backdrop-blur-sm">
              <ShoppingBag size={10} strokeWidth={2} className="text-green-400" />
              <span className="text-[10px] font-semibold text-white">
                Shadow Cargo Tee
              </span>
              <span className="text-[10px] font-black text-green-400">$48</span>
            </div>
            <button className="rounded-full bg-green-400 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black shadow-lg">
              Shop now
            </button>
          </div>

          {/* Music ticker */}
          <div className="flex items-center gap-1.5 overflow-hidden">
            <Music size={9} strokeWidth={2} className="flex-shrink-0 animate-pulse text-white/70" />
            <span className="truncate text-[10px] text-white/60">
              &#9834;&nbsp;original sound - northline
            </span>
          </div>
        </div>

        {/* ── RIGHT ACTION RAIL ── */}
        <div className="flex flex-col items-center gap-4 pb-3 pr-2">
          {/* Avatar with + follow badge */}
          <div className="relative">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-green-400 via-teal-500 to-cyan-700">
              {/* Abstract face silhouette */}
              <div className="flex h-full w-full items-end justify-center">
                <div className="mb-0 h-7 w-6 rounded-t-full bg-white/30" />
              </div>
            </div>
            {/* + badge */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-400 shadow-md">
                <Plus size={8} strokeWidth={3} className="text-black" />
              </div>
            </div>
          </div>

          {/* Like */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Heart size={18} strokeWidth={2} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold text-white/80">12.4k</span>
          </div>

          {/* Comment */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <MessageCircle size={18} strokeWidth={2} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold text-white/80">388</span>
          </div>

          {/* Bookmark / Save */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Bookmark size={18} strokeWidth={2} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold text-white/80">Save</span>
          </div>

          {/* Share */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Share2 size={18} strokeWidth={2} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold text-white/80">Share</span>
          </div>

          {/* Spinning disc music icon */}
          <div className="flex h-8 w-8 animate-spin items-center justify-center rounded-full border-2 border-white/30 bg-gradient-to-br from-neutral-700 to-neutral-900" style={{ animationDuration: "4s" }}>
            <Music size={12} strokeWidth={2} className="text-white/80" />
          </div>
        </div>
      </div>

    </div>
  );
}
