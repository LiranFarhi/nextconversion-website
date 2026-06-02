import type { ReactElement } from "react";
import Image from "next/image";
import { Search, User, ShoppingCart, Star, Truck, RotateCcw, Leaf, ChevronRight, Plus } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   STAR RATING
═══════════════════════════════════════════════════════════ */
interface StarRatingProps {
  rating: number;
  count: number;
}

function StarRating({ rating, count }: StarRatingProps): ReactElement {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={9}
            className={i <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-stone-300 fill-stone-300"}
          />
        ))}
      </div>
      <span className="text-[10px] text-stone-400 font-medium">({count})</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PRODUCT CARD
═══════════════════════════════════════════════════════════ */
interface ProductCardProps {
  name: string;
  price: string;
  compareAt: string | null;
  tag: string | null;
  tagVariant: "new" | "bestseller" | "sale";
  swatches: string[];
  rating: number;
  reviewCount: number;
  imageSrc: string;
  imageAlt: string;
}

function ProductCard({
  name,
  price,
  compareAt,
  tag,
  tagVariant,
  swatches,
  rating,
  reviewCount,
  imageSrc,
  imageAlt,
}: ProductCardProps): ReactElement {
  const tagStyle =
    tagVariant === "new"
      ? "bg-indigo-600 text-white"
      : tagVariant === "bestseller"
      ? "bg-amber-400 text-stone-900"
      : "bg-red-500 text-white";

  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl bg-white flex-1"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 6px 20px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {/* Image tile */}
      <div className="relative overflow-hidden" style={{ height: 168 }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1180px) 25vw, 280px"
          className="object-cover"
        />

        {/* Badge */}
        {tag && (
          <span
            className={`absolute top-2.5 left-2.5 rounded-full px-2.5 py-[3px] text-[9px] font-bold tracking-wider uppercase shadow-sm z-10 ${tagStyle}`}
          >
            {tag}
          </span>
        )}

        {/* Quick-add overlay */}
        <div
          className="absolute bottom-0 inset-x-0 flex items-center justify-center py-2 opacity-0 hover:opacity-100 transition-opacity z-10"
          style={{ background: "linear-gradient(to top, rgba(15,13,40,0.82), transparent)" }}
        >
          <button className="flex items-center gap-1.5 rounded-full bg-white text-stone-900 text-[10px] font-bold tracking-wide px-4 py-1.5 shadow">
            <Plus size={10} strokeWidth={2.5} /> Quick Add
          </button>
        </div>
      </div>

      {/* Info section */}
      <div className="px-3 pt-2.5 pb-3 flex flex-col gap-1.5">
        {/* Rating */}
        <StarRating rating={rating} count={reviewCount} />

        {/* Name */}
        <p className="text-[12.5px] font-semibold text-stone-800 leading-tight">{name}</p>

        {/* Price row */}
        <div className="flex items-center gap-2">
          <span className="text-[12.5px] font-bold text-stone-900">{price}</span>
          {compareAt && (
            <span className="text-[11px] text-stone-400 line-through">{compareAt}</span>
          )}
        </div>

        {/* Swatches + color count */}
        <div className="flex items-center gap-1.5 mt-0.5">
          {swatches.map((c) => (
            <span
              key={c}
              className="h-3.5 w-3.5 rounded-full"
              style={{
                backgroundColor: c,
                boxShadow: "0 0 0 1.5px white, 0 0 0 2.5px rgba(0,0,0,0.12)",
              }}
            />
          ))}
          <span className="text-[10px] text-stone-400 ml-0.5">+{swatches.length} colors</span>
        </div>

        {/* Add to cart */}
        <button
          className="mt-1 w-full rounded-lg py-1.5 text-[11px] font-bold tracking-wide text-white transition-colors hover:bg-indigo-700"
          style={{ background: "#111827" }}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATIC DATA
═══════════════════════════════════════════════════════════ */
const NAV_LINKS = ["Women", "Men", "Collections", "Sale"] as const;

interface ProductDatum {
  name: string;
  price: string;
  compareAt: string | null;
  tag: string | null;
  tagVariant: "new" | "bestseller" | "sale";
  swatches: string[];
  rating: number;
  reviewCount: number;
  imageSrc: string;
  imageAlt: string;
}

const PRODUCTS: ProductDatum[] = [
  {
    name: "Seamless Leggings",
    price: "$98",
    compareAt: null,
    tag: "Bestseller",
    tagVariant: "bestseller",
    swatches: ["#1e1b4b", "#4a4060", "#6b7280"],
    rating: 5,
    reviewCount: 312,
    imageSrc: "/products/sport/leggings.jpg",
    imageAlt: "Woman wearing black athletic leggings in a yoga pose",
  },
  {
    name: "Sculpt Bra",
    price: "$64",
    compareAt: "$80",
    tag: "New",
    tagVariant: "new",
    swatches: ["#e8a0b0", "#8a6878", "#f5f0ee"],
    rating: 4,
    reviewCount: 187,
    imageSrc: "/products/sport/bra.jpg",
    imageAlt: "Woman wearing a fuchsia sports bra during outdoor fitness event",
  },
  {
    name: "Featherlight Jacket",
    price: "$145",
    compareAt: null,
    tag: null,
    tagVariant: "new",
    swatches: ["#1e3d24", "#4a7852", "#9aaa8a"],
    rating: 5,
    reviewCount: 94,
    imageSrc: "/products/sport/jacket.jpg",
    imageAlt: "Woman sitting in a navy athletic running jacket and leggings",
  },
  {
    name: "Performance Tee",
    price: "$52",
    compareAt: "$68",
    tag: "Sale",
    tagVariant: "sale",
    swatches: ["#f5f4f0", "#6b7280", "#292524"],
    rating: 4,
    reviewCount: 228,
    imageSrc: "/products/sport/tee.jpg",
    imageAlt: "Woman in a white athletic performance tank top with print leggings",
  },
];

/* ═══════════════════════════════════════════════════════════
   ROOT COMPONENT
═══════════════════════════════════════════════════════════ */
export default function SportStore(): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f7f6f2] font-sans">

      {/* ── TOP NAV ── */}
      <header
        className="flex flex-shrink-0 items-center justify-between bg-white px-8"
        style={{
          height: 52,
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
        }}
      >
        {/* Wordmark */}
        <span
          className="select-none text-[16px] font-black tracking-[0.32em] text-stone-900"
          style={{ letterSpacing: "0.3em" }}
        >
          AERIS
        </span>

        {/* Primary nav */}
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className={`cursor-pointer text-[12.5px] font-medium tracking-wide transition-colors ${
                link === "Sale"
                  ? "font-bold text-red-500 hover:text-red-600"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {link}
              {link !== "Sale" && (
                <span className="ml-0.5 text-stone-300 text-[10px]">&#x203A;</span>
              )}
            </span>
          ))}
        </nav>

        {/* Utility icons */}
        <div className="flex items-center gap-5 text-stone-500">
          <Search size={15} strokeWidth={1.8} className="cursor-pointer transition-colors hover:text-stone-900" />
          <User size={15} strokeWidth={1.8} className="cursor-pointer transition-colors hover:text-stone-900" />
          <span className="relative cursor-pointer">
            <ShoppingCart size={15} strokeWidth={1.8} className="transition-colors hover:text-stone-900" />
            <span
              className="absolute flex items-center justify-center rounded-full bg-indigo-600 text-white text-[8px] font-bold leading-none"
              style={{ width: 14, height: 14, top: -7, right: -8 }}
            >
              3
            </span>
          </span>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative flex flex-shrink-0 overflow-hidden" style={{ height: 286 }}>
        {/* Hero photo — full bleed, right-weighted */}
        <div className="absolute inset-0">
          <Image
            src="/products/sport/hero.jpg"
            alt="Woman running outdoors in navy activewear — Aeris Summer 2026 Collection"
            fill
            sizes="1180px"
            className="object-cover object-center"
            priority
          />
          {/* Left-side editorial overlay so text reads clearly */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(247,246,242,0.98) 0%, rgba(247,246,242,0.88) 36%, rgba(247,246,242,0.45) 56%, rgba(247,246,242,0.0) 76%)",
            }}
          />
        </div>

        {/* Left editorial copy */}
        <div
          className="relative z-10 flex flex-col justify-center pl-10 pr-8"
          style={{ width: 520 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block h-px w-7 bg-indigo-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-600">
              Summer &#8217;26 Collection
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-black leading-none tracking-tight text-stone-900 mb-3"
            style={{ fontSize: 48 }}
          >
            Move with
            <br />
            <span style={{ color: "#4338ca" }}>Intention.</span>
          </h1>

          {/* Sub-copy */}
          <p className="mb-5 max-w-[260px] text-[13px] font-normal leading-relaxed text-stone-500">
            Performance activewear engineered for women who refuse to compromise&mdash;studio to street.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <button
              className="rounded-full px-6 py-2.5 text-[12px] font-bold tracking-wide text-white shadow-md transition-colors"
              style={{ background: "#111827" }}
            >
              Shop New In
            </button>
            <button className="flex items-center gap-1 text-[12px] font-semibold text-stone-500 transition-colors hover:text-indigo-600">
              View Lookbook <ChevronRight size={13} />
            </button>
          </div>

          {/* Inline trust micro-row */}
          <div className="flex items-center gap-4 mt-4">
            {[
              { icon: <Truck size={11} strokeWidth={1.8} />, label: "Free over $75" },
              { icon: <RotateCcw size={11} strokeWidth={1.8} />, label: "30-day returns" },
              { icon: <Leaf size={11} strokeWidth={1.8} />, label: "Carbon neutral" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-stone-400">
                <span className="text-indigo-400">{icon}</span>
                <span className="text-[10.5px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div
        className="flex flex-shrink-0 items-center justify-center gap-8 bg-white px-8"
        style={{
          height: 36,
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {[
          { icon: <Truck size={12} strokeWidth={1.8} />, text: "Free shipping over $75" },
          { icon: <RotateCcw size={12} strokeWidth={1.8} />, text: "Free 30-day returns" },
          { icon: <Leaf size={12} strokeWidth={1.8} />, text: "Carbon neutral shipping" },
        ].map(({ icon, text }, i) => (
          <div key={text} className="flex items-center gap-8">
            {i > 0 && <span className="h-3 w-px bg-stone-200" />}
            <div className="flex items-center gap-2 text-stone-500">
              <span className="text-indigo-500">{icon}</span>
              <span className="text-[11.5px] font-medium">{text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── SECTION HEADER ── */}
      <div className="flex flex-shrink-0 items-end justify-between px-8 pt-3.5 pb-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-0.5">
            Just Dropped
          </p>
          <h2 className="text-[18px] font-black tracking-tight text-stone-900">New Arrivals</h2>
        </div>
        <button
          className="flex items-center gap-1 rounded-full border px-4 py-1.5 text-[11px] font-semibold text-stone-600 shadow-sm transition-colors hover:border-indigo-400 hover:text-indigo-600"
          style={{ borderColor: "rgba(0,0,0,0.12)" }}
        >
          View all <ChevronRight size={12} />
        </button>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="flex flex-1 min-h-0 gap-3.5 px-8 pb-4">
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.name}
            name={p.name}
            price={p.price}
            compareAt={p.compareAt}
            tag={p.tag}
            tagVariant={p.tagVariant}
            swatches={p.swatches}
            rating={p.rating}
            reviewCount={p.reviewCount}
            imageSrc={p.imageSrc}
            imageAlt={p.imageAlt}
          />
        ))}
      </div>

      {/* ── FOOTER HINT ── */}
      <div
        className="flex flex-shrink-0 items-center justify-between px-8 bg-stone-900"
        style={{ height: 28 }}
      >
        <span className="text-[10px] font-bold tracking-[0.28em] text-white/60 uppercase">Aeris</span>
        <div className="flex items-center gap-6">
          {["About", "Sustainability", "Stockists", "Press"].map((item) => (
            <span key={item} className="text-[10px] text-white/40 hover:text-white/70 cursor-pointer transition-colors">
              {item}
            </span>
          ))}
        </div>
        <span className="text-[9px] text-white/30">&#169; 2026 Aeris. All rights reserved.</span>
      </div>

    </div>
  );
}
