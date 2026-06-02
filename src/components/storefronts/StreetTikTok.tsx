import type { ReactElement } from "react";
import Image from "next/image";
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

// ─── Product data ─────────────────────────────────────────────────────────────

interface Product {
  id: number;
  name: string;
  price: string;
  tag: string;
  accent: string;
  imgSrc: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Graphic Tee",  price: "$48", tag: "HOT", accent: "#39ff14", imgSrc: "/products/street/tee.jpg"    },
  { id: 2, name: "Hoodie",       price: "$72", tag: "NEW", accent: "#e040fb", imgSrc: "/products/street/hoodie.jpg" },
  { id: 3, name: "Cargo Pants",  price: "$90", tag: "LTD", accent: "#39ff14", imgSrc: "/products/street/cargo.jpg"  },
];

// ─── Story progress segment ───────────────────────────────────────────────────

function StoryBar({ fill }: { fill: number }): ReactElement {
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

// ─── Right rail action button ─────────────────────────────────────────────────

function RailBtn({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}): ReactElement {
  return (
    <div className="flex flex-col items-center gap-[2px]">
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-black/50 shadow-lg backdrop-blur-sm">
        {children}
      </div>
      <span className="text-[8px] font-bold leading-none text-white/75 drop-shadow">{label}</span>
    </div>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }): ReactElement {
  const { name, price, tag, accent, imgSrc } = product;
  return (
    <div
      className="relative flex w-[88px] shrink-0 flex-col overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(160deg,#161616 0%,#0d0d0d 100%)",
        border: `1px solid ${accent}30`,
        boxShadow: `0 0 12px ${accent}18, inset 0 1px 0 rgba(255,255,255,0.04)`,
      }}
    >
      {/* badge */}
      <div
        className="absolute left-[5px] top-[5px] z-10 rounded px-[4px] py-[1.5px] text-[6.5px] font-black leading-none tracking-wide text-black"
        style={{ backgroundColor: accent, boxShadow: `0 0 6px ${accent}80` }}
      >
        {tag}
      </div>

      {/* thumbnail — real product photo */}
      <div className="relative h-[66px] w-full overflow-hidden">
        <Image
          src={imgSrc}
          alt={name}
          fill
          sizes="88px"
          className="object-cover"
        />
        {/* subtle specular at top */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-white/[0.04] to-transparent" />
        {/* bottom fade into card body */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-4 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
      </div>

      {/* info */}
      <div className="flex flex-col gap-[3px] px-[6px] pb-[6px] pt-[3px]">
        <span className="truncate text-[8px] font-medium leading-none text-white/55">{name}</span>
        <span className="text-[11px] font-black leading-none" style={{ color: accent, textShadow: `0 0 8px ${accent}60` }}>
          {price}
        </span>
        <button
          className="mt-[2px] w-full rounded-full py-[4px] text-[7.5px] font-black uppercase tracking-wider text-black shadow-md"
          style={{ background: accent, boxShadow: `0 2px 8px ${accent}50` }}
          aria-label={`Shop ${name}`}
        >
          Shop
        </button>
      </div>
    </div>
  );
}

// ─── Vinyl spinning disc ──────────────────────────────────────────────────────

function SpinDisc(): ReactElement {
  return (
    <div className="animate-spin" style={{ animationDuration: "3.6s" }}>
      <div
        className="relative flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/15 shadow-lg"
        style={{
          background:
            "conic-gradient(from 0deg, #2a2a2a 0%,#111 25%,#222 50%,#0f0f0f 75%,#2a2a2a 100%)",
        }}
      >
        {/* label */}
        <div
          className="absolute h-[13px] w-[13px] rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 30%, #333, #0d0d0d)",
            boxShadow: "0 0 4px rgba(0,0,0,0.8)",
          }}
        />
        {/* spindle */}
        <div className="absolute h-[3px] w-[3px] rounded-full bg-white/40" />
      </div>
    </div>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STORY_FILLS = [1, 0.55, 0, 0, 0] as const;

// ─── Main component ───────────────────────────────────────────────────────────

export default function StreetTikTok(): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-black font-sans">

      {/* ══ FULL-BLEED VIDEO BACKGROUND ══ */}
      <div className="pointer-events-none absolute inset-0 z-0">

        {/* Real photo — streetwear lifestyle portrait */}
        <Image
          src="/products/street/video.jpg"
          alt="Streetwear lifestyle fashion portrait"
          fill
          sizes="320px"
          className="object-cover object-top"
          priority
        />

        {/* neon green floor bloom (key light from below-left) */}
        <div
          className="absolute"
          style={{
            bottom: "-40px",
            left: "-30px",
            width: "240px",
            height: "260px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(57,255,20,0.22) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        {/* secondary green spill */}
        <div
          className="absolute"
          style={{
            bottom: "60px",
            left: "10px",
            width: "140px",
            height: "160px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(57,255,20,0.10) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* fuchsia/magenta rim from upper-right (hair light) */}
        <div
          className="absolute"
          style={{
            top: "-20px",
            right: "-30px",
            width: "200px",
            height: "220px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(224,64,251,0.18) 0%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
        {/* faint deep blue fill — center */}
        <div
          className="absolute"
          style={{
            top: "15%",
            left: "20%",
            width: "180px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,40,80,0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* subtle horizontal neon scan line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "42%",
            height: "1px",
            background:
              "linear-gradient(90deg,transparent 0%,rgba(57,255,20,0.14) 30%,rgba(57,255,20,0.10) 70%,transparent 100%)",
          }}
        />

        {/* CRT scanlines — very subtle */}
        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.9) 3px,rgba(255,255,255,0.9) 4px)",
          }}
        />

        {/* grain noise simulation — tiny dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Ccircle cx='1' cy='1' r='0.5' fill='white'/%3E%3C/svg%3E\")",
            backgroundSize: "4px 4px",
          }}
        />

        {/* TOP VIGNETTE — lets overlays read on any content */}
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: "160px",
            background:
              "linear-gradient(180deg,rgba(0,0,0,0.82) 0%,rgba(0,0,0,0.45) 55%,transparent 100%)",
          }}
        />

        {/* BOTTOM VIGNETTE — heavy so shelf is legible */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "290px",
            background:
              "linear-gradient(0deg,rgba(0,0,0,0.97) 0%,rgba(0,0,0,0.85) 40%,rgba(0,0,0,0.50) 70%,transparent 100%)",
          }}
        />

        {/* lateral vignettes */}
        <div
          className="absolute inset-y-0 left-0 w-8"
          style={{
            background:
              "linear-gradient(90deg,rgba(0,0,0,0.45) 0%,transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-8"
          style={{
            background:
              "linear-gradient(270deg,rgba(0,0,0,0.45) 0%,transparent 100%)",
          }}
        />
      </div>

      {/* ══ TOP HUD ══ */}
      <div className="relative z-10 px-3 pt-[10px]">
        {/* story progress segments */}
        <div className="mb-[8px] flex gap-[3.5px]">
          {STORY_FILLS.map((fill, i) => (
            <StoryBar key={i} fill={fill} />
          ))}
        </div>

        {/* Following / For You / Explore tabs */}
        <div className="flex items-center justify-center gap-6">
          <span className="text-[11px] font-semibold tracking-wide text-white/40">Following</span>
          <span className="relative text-[13px] font-black tracking-wider text-white drop-shadow-lg">
            For You
            <span
              className="absolute -bottom-[5px] left-1/2 h-[2.5px] w-[22px] -translate-x-1/2 rounded-full bg-white"
              style={{ boxShadow: "0 0 6px rgba(255,255,255,0.7)" }}
            />
          </span>
          <span className="text-[11px] font-semibold tracking-wide text-white/40">Explore</span>
        </div>
      </div>

      {/* ══ FLEX SPACER ══ */}
      <div className="relative z-10 flex-1" />

      {/* ══ RIGHT ACTION RAIL ══ */}
      <div
        className="absolute z-20 flex flex-col items-center gap-[13px]"
        style={{ bottom: "178px", right: "8px" }}
      >
        {/* avatar + follow badge */}
        <div className="relative mb-1">
          <div
            className="h-[42px] w-[42px] overflow-hidden rounded-full border-[2px] border-white shadow-xl"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #3de88a, #1aaf5a 50%, #0d6636)",
              boxShadow: "0 2px 12px rgba(57,255,20,0.35)",
            }}
          >
            {/* silhouette */}
            <div className="flex h-full w-full flex-col items-center justify-end pb-0">
              <div
                className="h-[14px] w-[14px] rounded-full"
                style={{ background: "rgba(255,255,255,0.25)", marginBottom: "2px" }}
              />
              <div
                className="h-[18px] w-[28px] rounded-t-full"
                style={{ background: "rgba(255,255,255,0.18)" }}
              />
            </div>
          </div>
          {/* + follow button */}
          <div
            className="absolute -bottom-[10px] left-1/2 -translate-x-1/2"
          >
            <div
              className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#fe2c55] shadow-lg"
              style={{ boxShadow: "0 2px 8px rgba(254,44,85,0.6)" }}
            >
              <Plus size={10} strokeWidth={3} className="text-white" />
            </div>
          </div>
        </div>

        {/* Heart */}
        <RailBtn label="12.4k">
          <Heart size={18} strokeWidth={0} fill="#fe2c55" className="text-[#fe2c55]" />
        </RailBtn>

        {/* Comment */}
        <RailBtn label="388">
          <MessageCircle size={18} strokeWidth={1.8} className="text-white" />
        </RailBtn>

        {/* Bookmark/Save */}
        <RailBtn label="Save">
          <Bookmark size={18} strokeWidth={1.8} className="text-white" />
        </RailBtn>

        {/* Share */}
        <RailBtn label="Share">
          <Share2 size={18} strokeWidth={1.8} className="text-white" />
        </RailBtn>

        {/* spinning music vinyl */}
        <SpinDisc />
      </div>

      {/* ══ BOTTOM OVERLAY STACK ══ */}
      <div className="relative z-10 w-full">

        {/* creator info — left column, right-padded for rail */}
        <div className="mb-[7px] px-[12px] pr-[54px]">

          {/* handle + tag */}
          <div className="mb-[4px] flex items-center gap-[6px]">
            <span
              className="text-[13.5px] font-black leading-none text-white drop-shadow-lg"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
            >
              @northline
            </span>
            <span
              className="rounded px-[5px] py-[1.5px] text-[7px] font-black uppercase tracking-wider text-[#39ff14]"
              style={{
                background: "rgba(57,255,20,0.12)",
                border: "1px solid rgba(57,255,20,0.3)",
              }}
            >
              STREETWEAR
            </span>
          </div>

          {/* caption */}
          <p
            className="mb-[6px] text-[10.5px] font-medium leading-snug text-white/90 drop-shadow"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
          >
            new drop just landed &#x1F525; limited 200 pcs only
          </p>

          {/* featured product anchor pill */}
          <div className="mb-[6px] inline-flex">
            <div
              className="flex items-center gap-[5px] rounded-full px-[9px] py-[5px]"
              style={{
                background: "rgba(0,0,0,0.65)",
                border: "1px solid rgba(57,255,20,0.35)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 10px rgba(57,255,20,0.15)",
              }}
            >
              <ShoppingCart size={9} strokeWidth={2.2} className="shrink-0 text-[#39ff14]" />
              <span className="text-[9px] font-semibold text-white">Shadow Cargo Tee</span>
              <span className="text-[9px] font-black text-[#39ff14]" style={{ textShadow: "0 0 6px rgba(57,255,20,0.6)" }}>$48</span>
              <ChevronRight size={8} strokeWidth={2.5} className="shrink-0 text-[#39ff14]/70" />
            </div>
          </div>

          {/* sound ticker */}
          <div className="flex items-center gap-[5px]">
            <Music2 size={9} strokeWidth={2} className="shrink-0 animate-pulse text-white/50" />
            <span className="truncate text-[9px] text-white/45">
              &#9834;&nbsp;original sound &#8212; northline
            </span>
          </div>
        </div>

        {/* ── PRODUCTS IN THIS VIDEO shelf ── */}
        <div
          className="mx-[6px] mb-[8px] overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(160deg,rgba(14,14,14,0.96) 0%,rgba(8,8,8,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 -4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* shelf header row */}
          <div className="flex items-center justify-between px-[12px] pb-[6px] pt-[9px]">
            <div className="flex items-center gap-[5px]">
              <ShoppingCart size={10} strokeWidth={2.3} className="text-[#39ff14]" />
              <span className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-white/55">
                Products in this video
              </span>
            </div>
            {/* cart pill with item count */}
            <button
              className="flex items-center gap-[4px] rounded-full px-[9px] py-[4px]"
              style={{
                background: "linear-gradient(135deg,#ffe033,#ffb800)",
                boxShadow: "0 2px 8px rgba(255,184,0,0.45)",
              }}
              aria-label="Open cart"
            >
              <ShoppingCart size={9} strokeWidth={2.5} className="text-black" />
              <span className="text-[8.5px] font-black text-black">3</span>
            </button>
          </div>

          {/* product cards row */}
          <div className="flex justify-between gap-[5px] px-[7px] pb-[9px]">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
