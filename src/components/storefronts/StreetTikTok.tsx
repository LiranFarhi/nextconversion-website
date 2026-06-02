import type { ReactElement } from "react";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Music2,
  Plus,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

// ─── Inline SVG product illustrations ────────────────────────────────────────

function GraphicTeeIllustration() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <rect width="48" height="48" rx="8" fill="#111" />
      {/* tee body */}
      <path
        d="M10 16 L4 23 L10 25 L10 42 L38 42 L38 25 L44 23 L38 16 L30 20 Q24 23 18 20 Z"
        fill="#181818"
        stroke="#39ff14"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* collar */}
      <path d="M18 20 Q24 25 30 20" stroke="#39ff14" strokeWidth="0.9" fill="none" opacity="0.5" />
      {/* chest bolt */}
      <path d="M27 23 L22 31 L26 31 L21 40 L31 29 L27 29 Z" fill="#39ff14" opacity="0.9" />
    </svg>
  );
}

function HoodieIllustration() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <rect width="48" height="48" rx="8" fill="#111" />
      {/* body */}
      <path
        d="M9 17 L2 28 L11 29 L11 44 L37 44 L37 29 L46 28 L39 17 L30 22 Q24 25 18 22 Z"
        fill="#181818"
        stroke="#e040fb"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* hood */}
      <path
        d="M18 22 Q24 10 30 22 Q27 16 24 15 Q21 16 18 22 Z"
        fill="#1e1e1e"
        stroke="#e040fb"
        strokeWidth="0.9"
      />
      {/* kangaroo pocket */}
      <rect x="16" y="34" width="16" height="6" rx="2" fill="#1e1e1e" stroke="#e040fb" strokeWidth="0.8" />
      {/* drawstring */}
      <circle cx="21" cy="24" r="0.9" fill="#e040fb" opacity="0.65" />
      <circle cx="27" cy="24" r="0.9" fill="#e040fb" opacity="0.65" />
    </svg>
  );
}

function CargoPantsIllustration() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-full w-full">
      <rect width="48" height="48" rx="8" fill="#111" />
      {/* waistband */}
      <rect x="10" y="7" width="28" height="5" rx="2" fill="#181818" stroke="#39ff14" strokeWidth="1.1" />
      {/* belt loop */}
      <rect x="22" y="6" width="4" height="3" rx="0.8" fill="#39ff14" opacity="0.45" />
      {/* left leg */}
      <path d="M10 12 L10 43 L22 43 L24 27 L20 12 Z" fill="#181818" stroke="#39ff14" strokeWidth="1.1" strokeLinejoin="round" />
      {/* right leg */}
      <path d="M28 12 L38 12 L38 43 L26 43 L24 27 Z" fill="#181818" stroke="#39ff14" strokeWidth="1.1" strokeLinejoin="round" />
      {/* cargo pocket L */}
      <rect x="11" y="22" width="8" height="7" rx="1.2" fill="#1e1e1e" stroke="#39ff14" strokeWidth="0.8" />
      <line x1="11" y1="25.5" x2="19" y2="25.5" stroke="#39ff14" strokeWidth="0.5" opacity="0.45" />
      {/* cargo pocket R */}
      <rect x="29" y="22" width="8" height="7" rx="1.2" fill="#1e1e1e" stroke="#39ff14" strokeWidth="0.8" />
      <line x1="29" y1="25.5" x2="37" y2="25.5" stroke="#39ff14" strokeWidth="0.5" opacity="0.45" />
    </svg>
  );
}

// ─── Background hero figure ───────────────────────────────────────────────────

function HeroFigure() {
  return (
    <svg
      viewBox="0 0 200 310"
      fill="none"
      aria-hidden="true"
      className="w-[68%] max-w-[220px] opacity-[0.88]"
    >
      {/* ground glow */}
      <ellipse cx="100" cy="303" rx="50" ry="5" fill="#39ff14" opacity="0.05" />
      {/* cargo legs */}
      <path d="M70 196 L66 302 L92 302 L100 246 L108 302 L134 302 L130 196 Z"
        fill="#121212" stroke="#39ff14" strokeWidth="1.1" strokeLinejoin="round" />
      <rect x="67" y="233" width="16" height="13" rx="1.8" fill="#181818" stroke="#39ff14" strokeWidth="0.75" />
      <rect x="117" y="233" width="16" height="13" rx="1.8" fill="#181818" stroke="#39ff14" strokeWidth="0.75" />
      {/* waistband */}
      <rect x="66" y="192" width="68" height="7" rx="2.5" fill="#1a1a1a" stroke="#39ff14" strokeWidth="0.9" />
      {/* oversized tee */}
      <path
        d="M38 128 L18 155 L40 161 L44 194 L156 194 L160 161 L182 155 L162 128 L140 140 Q100 152 60 140 Z"
        fill="#131313"
        stroke="#39ff14"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* collar */}
      <path d="M70 138 Q100 148 130 138" stroke="#3a3a3a" strokeWidth="1.3" fill="none" />
      {/* chest lightning bolt */}
      <path d="M114 160 L100 180 L108 180 L96 204 L120 176 L112 176 Z"
        fill="#39ff14" opacity="0.92" />
      {/* tee hem */}
      <line x1="60" y1="194" x2="140" y2="194" stroke="#39ff14" strokeWidth="0.9" opacity="0.35" />
      {/* left arm */}
      <path d="M38 128 L22 186 L42 190 L56 160 Z" fill="#131313" stroke="#39ff14" strokeWidth="0.9" strokeLinejoin="round" />
      {/* right arm */}
      <path d="M162 128 L178 186 L158 190 L144 160 Z" fill="#131313" stroke="#39ff14" strokeWidth="0.9" strokeLinejoin="round" />
      {/* neck */}
      <rect x="88" y="98" width="24" height="13" rx="4" fill="#1a1a1a" />
      {/* head */}
      <ellipse cx="100" cy="80" rx="26" ry="28" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.9" />
      {/* cap body */}
      <path d="M74 64 Q74 54 100 54 Q126 54 126 64 L126 74 L74 74 Z" fill="#1e1e1e" stroke="#39ff14" strokeWidth="0.8" />
      {/* cap brim */}
      <rect x="72" y="72" width="56" height="6" rx="3" fill="#181818" stroke="#39ff14" strokeWidth="0.7" />
      {/* eyes */}
      <rect x="90" y="80" width="5" height="3" rx="1" fill="#333" />
      <rect x="105" y="80" width="5" height="3" rx="1" fill="#333" />
      {/* mouth */}
      <path d="M94 92 Q100 96 106 92" stroke="#444" strokeWidth="1.1" fill="none" />
      {/* neon accent stripe on arm */}
      <line x1="30" y1="162" x2="38" y2="185" stroke="#39ff14" strokeWidth="0.6" opacity="0.3" />
    </svg>
  );
}

// ─── Product data ─────────────────────────────────────────────────────────────

interface Product {
  id: number;
  name: string;
  price: string;
  tag: string;
  accent: string;
  Illustration: () => ReactElement;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Graphic Tee", price: "$48", tag: "HOT", accent: "#39ff14", Illustration: GraphicTeeIllustration },
  { id: 2, name: "Hoodie", price: "$72", tag: "NEW", accent: "#e040fb", Illustration: HoodieIllustration },
  { id: 3, name: "Cargo Pants", price: "$90", tag: "LTD", accent: "#39ff14", Illustration: CargoPantsIllustration },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StoryBar({ fill }: { fill: number }) {
  return (
    <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/20">
      {fill > 0 && (
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-white"
          style={{ width: `${fill * 100}%` }}
        />
      )}
    </div>
  );
}

function RailAction({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-[3px]">
      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black/40 shadow backdrop-blur-sm">
        {children}
      </div>
      <span className="text-[8.5px] font-bold leading-none text-white/80 drop-shadow">{label}</span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { name, price, tag, accent, Illustration } = product;
  return (
    <div
      className="relative flex w-[88px] shrink-0 flex-col overflow-hidden rounded-xl bg-[#0e0e0e]"
      style={{ border: `1px solid ${accent}40` }}
    >
      {/* tag badge */}
      <div
        className="absolute left-1 top-1 z-10 rounded px-[4px] py-[1px] text-[7px] font-black leading-none text-black"
        style={{ backgroundColor: accent }}
      >
        {tag}
      </div>
      {/* illustration */}
      <div className="h-[68px] w-full overflow-hidden">
        <Illustration />
      </div>
      {/* info */}
      <div className="flex flex-col gap-[3px] px-[5px] pb-[5px] pt-[3px]">
        <span className="truncate text-[8px] font-semibold leading-none text-white/65">{name}</span>
        <span className="text-[10px] font-black leading-none" style={{ color: accent }}>{price}</span>
        {/* shop CTA */}
        <button
          className="mt-[2px] w-full rounded-full py-[3px] text-[7.5px] font-black uppercase tracking-wide text-black shadow"
          style={{ backgroundColor: accent }}
          aria-label={`Shop ${name}`}
        >
          Shop
        </button>
      </div>
    </div>
  );
}

// ─── Spinning disc ────────────────────────────────────────────────────────────

function SpinningDisc() {
  return (
    <div className="animate-spin" style={{ animationDuration: "4s" }}>
      <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-neutral-700 to-neutral-900 shadow-md">
        <div className="h-[9px] w-[9px] rounded-full bg-neutral-800 ring-[1.5px] ring-white/30" />
      </div>
    </div>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STORY_FILLS = [1, 0.6, 0, 0, 0];

// ─── Main component ───────────────────────────────────────────────────────────

export default function StreetTikTok() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-black font-sans">

      {/* ── Full-bleed "video" background ── */}
      <div className="absolute inset-0 z-0">
        {/* base moody gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0b0b0b] to-[#050505]" />

        {/* neon green bloom — bottom-left */}
        <div className="absolute -bottom-16 -left-12 h-72 w-72 rounded-full bg-green-500/25 blur-[60px]" />
        {/* fuchsia bloom — top-right */}
        <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-fuchsia-600/20 blur-[50px]" />
        {/* mid-center accent */}
        <div className="absolute left-1/3 top-[38%] h-40 w-40 rounded-full bg-green-400/8 blur-2xl" />
        {/* subtle upper fuchsia */}
        <div className="absolute left-0 top-1/4 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-2xl" />

        {/* hero figure centred vertically high */}
        <div className="absolute inset-x-0 top-[6%] flex justify-center">
          <HeroFigure />
        </div>

        {/* scanlines */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.8) 3px,rgba(255,255,255,0.8) 4px)",
          }}
        />

        {/* thin horizontal neon stripe */}
        <div className="absolute left-0 right-0 top-[44%] h-px bg-gradient-to-r from-transparent via-green-400/18 to-transparent" />

        {/* vignette top */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent" />
        {/* vignette bottom — heavy so shelf is readable */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
      </div>

      {/* ── TOP HUD ── */}
      <div className="relative z-10 px-3 pt-3">
        {/* story progress */}
        <div className="mb-[7px] flex gap-[4px]">
          {STORY_FILLS.map((fill, i) => (
            <StoryBar key={i} fill={fill} />
          ))}
        </div>
        {/* tabs */}
        <div className="flex items-center justify-center gap-7">
          <span className="text-[11.5px] font-semibold text-white/40">Following</span>
          <span className="relative text-[12.5px] font-black tracking-wide text-white">
            For You
            <span className="absolute -bottom-[4px] left-1/2 h-[2.5px] w-5 -translate-x-1/2 rounded-full bg-white" />
          </span>
          <span className="text-[11.5px] font-semibold text-white/40">Explore</span>
        </div>
      </div>

      {/* ── SPACER (lets background show) ── */}
      <div className="relative z-10 flex-1" />

      {/* ── RIGHT ACTION RAIL (absolutely positioned, right side, vertically centred in lower half) ── */}
      <div className="absolute bottom-[156px] right-[8px] z-20 flex flex-col items-center gap-[14px]">
        {/* avatar + follow */}
        <div className="relative mb-1">
          <div className="h-[40px] w-[40px] overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-green-400 via-teal-500 to-cyan-700 shadow-lg">
            <div className="flex h-full w-full items-end justify-center">
              <div className="h-[26px] w-[22px] rounded-t-full bg-white/20" />
            </div>
          </div>
          <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2">
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#39ff14] shadow-md">
              <Plus size={9} strokeWidth={3.2} className="text-black" />
            </div>
          </div>
        </div>

        {/* Heart */}
        <RailAction label="12.4k">
          <Heart size={17} strokeWidth={2} fill="white" className="text-white" />
        </RailAction>

        {/* Comment */}
        <RailAction label="388">
          <MessageCircle size={17} strokeWidth={2} className="text-white" />
        </RailAction>

        {/* Bookmark */}
        <RailAction label="Save">
          <Bookmark size={17} strokeWidth={2} className="text-white" />
        </RailAction>

        {/* Share */}
        <RailAction label="Share">
          <Share2 size={17} strokeWidth={2} className="text-white" />
        </RailAction>

        {/* Spinning disc */}
        <SpinningDisc />
      </div>

      {/* ── BOTTOM STACK ── */}
      <div className="relative z-10 w-full">

        {/* ── Creator info row ── */}
        <div className="mb-[6px] px-3 pr-[54px]">
          {/* handle */}
          <div className="mb-[4px] flex items-center gap-1.5">
            <span className="text-[13px] font-black leading-none text-white drop-shadow-lg">@northline</span>
            <span className="rounded bg-[#39ff14]/20 px-[5px] py-[1px] text-[7.5px] font-bold text-[#39ff14]">
              STREETWEAR
            </span>
          </div>
          {/* caption */}
          <p className="mb-[5px] text-[10.5px] font-medium leading-snug text-white/85 drop-shadow">
            new drop just landed &#x1F525; limited 200 pcs only
          </p>
          {/* featured product anchor pill */}
          <div className="mb-[5px] flex">
            <div className="flex items-center gap-1 overflow-hidden rounded-full border border-[#39ff14]/40 bg-black/60 px-[8px] py-[4px] backdrop-blur-sm">
              <ShoppingCart size={9} strokeWidth={2.2} className="shrink-0 text-[#39ff14]" />
              <span className="truncate text-[9px] font-semibold text-white">Shadow Cargo Tee</span>
              <span className="shrink-0 text-[9px] font-black text-[#39ff14]">$48</span>
              <ChevronRight size={8} strokeWidth={2.5} className="shrink-0 text-[#39ff14]/70" />
            </div>
          </div>
          {/* music line */}
          <div className="flex items-center gap-[5px]">
            <Music2 size={9} strokeWidth={2} className="shrink-0 animate-pulse text-white/55" />
            <span className="truncate text-[9px] text-white/50">
              &#9834;&nbsp;original sound &#8212; northline
            </span>
          </div>
        </div>

        {/* ── "Products in this video" shelf ── */}
        <div className="mx-[6px] mb-2 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-lg">
          {/* shelf header */}
          <div className="flex items-center justify-between px-3 pt-[8px] pb-[6px]">
            <div className="flex items-center gap-[5px]">
              <ShoppingCart size={10} strokeWidth={2.5} className="text-[#39ff14]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">
                Products in this video
              </span>
            </div>
            {/* cart pill */}
            <button
              className="flex items-center gap-1 rounded-full bg-yellow-400 px-[8px] py-[3px] shadow"
              aria-label="Open cart"
            >
              <ShoppingCart size={9} strokeWidth={2.5} className="text-black" />
              <span className="text-[8.5px] font-black text-black">3</span>
            </button>
          </div>

          {/* product cards scrollable row — all 3 visible */}
          <div className="flex justify-between gap-[5px] px-[7px] pb-[8px]">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
