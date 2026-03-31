"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Leaf, Flame, Zap } from "lucide-react";

// ─── Storefront layout variants ───────────────────────────────────────────────

type StorefrontLayout =
  | "athletic"   // APEX · Sportswear
  | "outdoor"    // TrailCo · Hiking
  | "editorial"  // MAISON · Luxury Coats
  | "hype"       // DRIP · Streetwear
  | "botanical"  // Botanica · Skincare
  | "vintage"    // Archive · Vintage
  | "artisan"    // Atelier · Jewelry
  | "deals"      // CozyFit · Outerwear
  | "resort";    // LUMA · Contemporary Fashion (Figma design)

interface PersonaTheme {
  store: string;
  tagline: string;
  badge: string;
  layout: StorefrontLayout;
  dark: boolean;
  ctaLabel: string;
  accentHex: string;
  headerClass: string;
}

// ─── 8 Demographic Personas ───────────────────────────────────────────────────

interface Persona {
  id: string;
  demo: string;
  intent: string;
  gradient: string;
  products: string[]; // fallback Tailwind gradient classes for product slots
  pronoun: string;
  theme: PersonaTheme;
}

const personas: Persona[] = [
  {
    id: "sportswear",
    demo: "34F · Mobile",
    intent: "Sophisticated Sportswear",
    gradient: "from-purple-500 to-indigo-600",
    products: [
      "from-purple-200 to-indigo-300",
      "from-indigo-100 to-purple-200",
      "from-violet-200 to-purple-300",
      "from-purple-100 to-indigo-200",
    ],
    pronoun: "her",
    theme: {
      store: "APEX",
      tagline: "Performance Redefined",
      badge: "New Collection",
      layout: "athletic",
      dark: false,
      ctaLabel: "Shop New Collection",
      accentHex: "#6366f1",
      headerClass: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
  },
  {
    id: "hiking",
    demo: "24M · Laptop",
    intent: "Sustainable Hiking Gear",
    gradient: "from-emerald-500 to-teal-600",
    products: [
      "from-emerald-200 to-teal-300",
      "from-teal-100 to-emerald-200",
      "from-green-200 to-emerald-300",
      "from-teal-200 to-green-300",
    ],
    pronoun: "him",
    theme: {
      store: "TrailCo",
      tagline: "Built for the Wild",
      badge: "Gear Drop",
      layout: "outdoor",
      dark: false,
      ctaLabel: "View Gear",
      accentHex: "#059669",
      headerClass: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
  },
  {
    id: "luxury-coats",
    demo: "52F · Tablet",
    intent: "Luxury Coats",
    gradient: "from-amber-500 to-orange-600",
    products: [
      "from-amber-200 to-orange-300",
      "from-orange-100 to-amber-200",
      "from-yellow-200 to-amber-300",
      "from-amber-100 to-orange-200",
    ],
    pronoun: "her",
    theme: {
      store: "MAISON",
      tagline: "Autumn / Winter \u201926",
      badge: "Exclusive Edit",
      layout: "editorial",
      dark: false,
      ctaLabel: "Explore the Edit",
      accentHex: "#d97706",
      headerClass: "bg-gradient-to-br from-amber-50 to-orange-100",
    },
  },
  {
    id: "streetwear",
    demo: "19M · Mobile",
    intent: "Limited-Edition Streetwear",
    gradient: "from-rose-500 to-red-600",
    products: [
      "from-rose-200 to-red-300",
      "from-red-100 to-rose-200",
      "from-pink-200 to-rose-300",
      "from-rose-100 to-red-200",
    ],
    pronoun: "him",
    theme: {
      store: "DRIP",
      tagline: "Limited Drop",
      badge: "🔥 Live Now",
      layout: "hype",
      dark: true,
      ctaLabel: "Add to Cart",
      accentHex: "#f43f5e",
      headerClass: "bg-gray-950",
    },
  },
  {
    id: "skincare",
    demo: "41F · Desktop",
    intent: "Organic Skincare",
    gradient: "from-green-500 to-lime-600",
    products: [
      "from-green-200 to-lime-300",
      "from-lime-100 to-green-200",
      "from-emerald-200 to-green-300",
      "from-green-100 to-lime-200",
    ],
    pronoun: "her",
    theme: {
      store: "Botanica",
      tagline: "Natural \u00b7 Minimal \u00b7 Yours",
      badge: "New Arrivals",
      layout: "botanical",
      dark: false,
      ctaLabel: "Shop the Collection",
      accentHex: "#16a34a",
      headerClass: "bg-white",
    },
  },
  {
    id: "vintage",
    demo: "30M · Mobile",
    intent: "Vintage Accessories",
    gradient: "from-cyan-500 to-blue-600",
    products: [
      "from-amber-200 to-stone-300",
      "from-stone-100 to-amber-200",
      "from-orange-100 to-stone-200",
      "from-amber-100 to-orange-200",
    ],
    pronoun: "him",
    theme: {
      store: "Archive",
      tagline: "Curated Finds",
      badge: "Rare Find",
      layout: "vintage",
      dark: false,
      ctaLabel: "Browse the Archive",
      accentHex: "#92400e",
      headerClass: "bg-gradient-to-br from-amber-100 to-stone-200",
    },
  },
  {
    id: "jewelry",
    demo: "61F · Desktop",
    intent: "Handcrafted Jewelry",
    gradient: "from-fuchsia-500 to-purple-600",
    products: [
      "from-fuchsia-200 to-purple-300",
      "from-purple-100 to-fuchsia-200",
      "from-pink-200 to-fuchsia-300",
      "from-fuchsia-100 to-purple-200",
    ],
    pronoun: "her",
    theme: {
      store: "Atelier",
      tagline: "Timeless Elegance",
      badge: "Curated Edit",
      layout: "artisan",
      dark: true,
      ctaLabel: "View Collection",
      accentHex: "#c026d3",
      headerClass: "bg-gradient-to-br from-purple-900 to-fuchsia-900",
    },
  },
  {
    id: "outerwear",
    demo: "28F · Mobile",
    intent: "Budget-Friendly Outerwear",
    gradient: "from-sky-500 to-indigo-600",
    products: [
      "from-sky-200 to-indigo-300",
      "from-indigo-100 to-sky-200",
      "from-blue-200 to-sky-300",
      "from-sky-100 to-indigo-200",
    ],
    pronoun: "her",
    theme: {
      store: "CozyFit",
      tagline: "Warm. Affordable.",
      badge: "Up to 40% off",
      layout: "deals",
      dark: false,
      ctaLabel: "Shop Sale Now",
      accentHex: "#0284c7",
      headerClass: "bg-gradient-to-br from-sky-500 to-indigo-600",
    },
  },
  {
    id: "resort",
    demo: "29F · iPhone Pro",
    intent: "Contemporary Fashion",
    gradient: "from-rose-400 to-pink-600",
    products: [
      "from-rose-200 to-pink-300",
      "from-pink-100 to-rose-200",
      "from-fuchsia-200 to-rose-300",
      "from-rose-100 to-pink-200",
    ],
    pronoun: "her",
    theme: {
      store: "LUMA",
      tagline: "Curated Just For You",
      badge: "New Collection",
      layout: "resort",
      dark: false,
      ctaLabel: "Shop New Collection",
      accentHex: "#f43f5e",
      headerClass: "bg-gradient-to-br from-rose-400 to-pink-600",
    },
  },
];

// ─── Media Slot ───────────────────────────────────────────────────────────────
// Renders a CDN image or video, falling back to a gradient placeholder.
// className overrides the default aspect-ratio and rounding.

function PersonaMediaSlot({
  url,
  gradient,
  isVideo,
  className = "aspect-square rounded-lg",
}: {
  url?: string;
  gradient: string;
  isVideo?: boolean;
  className?: string;
}) {
  if (!url) {
    // Support both Tailwind class fragments and raw CSS gradient strings
    if (gradient.includes("gradient(")) {
      return <div className={className} style={{ background: gradient }} />;
    }
    return <div className={`bg-gradient-to-b ${gradient} ${className}`} />;
  }
  if (isVideo) {
    return (
      <video
        src={url}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full object-cover ${className}`}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt=""
      loading="lazy"
      decoding="async"
      className={`w-full object-cover ${className}`}
    />
  );
}

// ─── Product Data ─────────────────────────────────────────────────────────────
// Studio-photography CSS technique: multi-layer radial gradients simulate
// overhead lighting + bounce fill, on top of a product-color base gradient.

interface ProductItem {
  name: string;
  price: string;
  orig?: string;
  rating: number;
  count: number;
  bg: string;       // CSS fallback gradient
  img?: string;     // Unsplash CDN URL
}

const U = (id: string) =>
  `https://images.unsplash.com/${id}?w=400&h=400&fit=crop&auto=format&q=80`;

const PERSONA_PRODUCTS: Record<string, ProductItem[]> = {
  sportswear: [
    { name: "Velocity Tee", price: "$68", rating: 4.8, count: 312, img: U("photo-1629753897877-522619845842"), bg: "radial-gradient(ellipse at 35% 15%, rgba(255,255,255,0.30) 0%, transparent 55%), linear-gradient(155deg, #6366f1 0%, #4338ca 100%)" },
    { name: "Sprint Shorts", price: "$84", rating: 4.7, count: 228, img: U("photo-1760509370911-b134eaa23d5a"), bg: "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.28) 0%, transparent 52%), linear-gradient(160deg, #818cf8 0%, #6366f1 100%)" },
    { name: "Power Sports Bra", price: "$72", rating: 4.9, count: 441, img: U("photo-1767128890940-6dfe3d9fc3db"), bg: "radial-gradient(ellipse at 38% 20%, rgba(255,255,255,0.32) 0%, transparent 55%), linear-gradient(155deg, #a78bfa 0%, #7c3aed 100%)" },
    { name: "Endurance Tights", price: "$128", rating: 4.8, count: 189, img: U("photo-1768853968758-bba45ec2f11d"), bg: "radial-gradient(ellipse at 32% 15%, rgba(255,255,255,0.18) 0%, transparent 50%), linear-gradient(160deg, #3730a3 0%, #1e1b4b 100%)" },
  ],
  hiking: [
    { name: "Summit Fleece", price: "$178", rating: 4.9, count: 534, img: U("photo-1559705899-78a92aa3d7d2"), bg: "radial-gradient(ellipse at 35% 18%, rgba(255,255,255,0.28) 0%, transparent 52%), linear-gradient(150deg, #3d6b3a 0%, #1e3a1a 100%)" },
    { name: "Trail Pants", price: "$134", rating: 4.7, count: 298, img: U("photo-1599488303987-24a54f815908"), bg: "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.22) 0%, transparent 50%), linear-gradient(155deg, #854d0e 0%, #451a03 100%)" },
    { name: "Merino Base Layer", price: "$68", rating: 4.8, count: 412, img: U("photo-1603994009510-36c4e57d7651"), bg: "radial-gradient(ellipse at 38% 20%, rgba(255,255,255,0.28) 0%, transparent 52%), linear-gradient(155deg, #0d9488 0%, #134e4a 100%)" },
    { name: "Wind Jacket", price: "$224", rating: 4.9, count: 187, img: U("photo-1604769688132-84a7d9e69c89"), bg: "radial-gradient(ellipse at 35% 18%, rgba(255,255,255,0.22) 0%, transparent 50%), linear-gradient(150deg, #475569 0%, #1e293b 100%)" },
  ],
  "luxury-coats": [
    { name: "Heritage Coat", price: "$890", rating: 4.9, count: 87, img: U("photo-1571222787436-74868e84af34"), bg: "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.38) 0%, transparent 55%), linear-gradient(160deg, #c8a830 0%, #7c5c10 100%)" },
    { name: "Cashmere Blazer", price: "$1,240", rating: 4.8, count: 63, img: U("photo-1602580170250-cdfc887a56ff"), bg: "radial-gradient(ellipse at 42% 20%, rgba(255,255,255,0.48) 0%, transparent 58%), linear-gradient(155deg, #fef3c7 0%, #fcd34d 100%)" },
    { name: "Merino Coat", price: "$1,580", rating: 4.9, count: 34, img: U("photo-1606683380103-937f9f1f49e1"), bg: "radial-gradient(ellipse at 35% 18%, rgba(255,255,255,0.28) 0%, transparent 52%), linear-gradient(155deg, #881337 0%, #4c0519 100%)" },
    { name: "Silk Wrap Dress", price: "$740", rating: 4.8, count: 52, img: U("photo-1619470149201-63960dec27cf"), bg: "radial-gradient(ellipse at 38% 20%, rgba(255,255,255,0.35) 0%, transparent 55%), linear-gradient(155deg, #7c3aed 0%, #4c1d95 100%)" },
  ],
  streetwear: [
    { name: "Box Logo Hoodie", price: "$168", rating: 4.9, count: 1204, img: U("photo-1542321103-f277f1befb3c"), bg: "radial-gradient(ellipse at 35% 15%, rgba(255,255,255,0.10) 0%, transparent 50%), linear-gradient(160deg, #374151 0%, #111827 100%)" },
    { name: "Cargo Pants", price: "$248", rating: 4.7, count: 876, img: U("photo-1542406775-ade58c52d2e4"), bg: "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.08) 0%, transparent 48%), linear-gradient(155deg, #4b5563 0%, #1f2937 100%)" },
    { name: "Collab Drop Tee", price: "$98", rating: 4.8, count: 2341, img: U("photo-1590266970809-1cf042341985"), bg: "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.14) 0%, transparent 50%), linear-gradient(155deg, #dc2626 0%, #7f1d1d 100%)" },
    { name: "Oversized Bomber", price: "$310", rating: 4.8, count: 643, img: U("photo-1611817757336-8569d5e81c19"), bg: "radial-gradient(ellipse at 38% 18%, rgba(255,255,255,0.10) 0%, transparent 48%), linear-gradient(155deg, #1f2937 0%, #0f172a 100%)" },
  ],
  skincare: [
    { name: "Linen Midi Dress", price: "$95", rating: 4.8, count: 892, img: U("photo-1549351778-5738a76408a3"), bg: "radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.48) 0%, transparent 55%), linear-gradient(155deg, #d4a8a0 0%, #a06858 100%)" },
    { name: "Cotton Wrap Blouse", price: "$68", rating: 4.7, count: 643, img: U("photo-1555233707-877052f6c928"), bg: "radial-gradient(ellipse at 38% 22%, rgba(255,255,255,0.44) 0%, transparent 55%), linear-gradient(155deg, #8fae96 0%, #4a7a52 100%)" },
    { name: "Relaxed Trousers", price: "$88", rating: 4.9, count: 1243, img: U("photo-1592645946522-1b166cfc18c0"), bg: "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.52) 0%, transparent 58%), linear-gradient(155deg, #e8d5b2 0%, #c9a87a 100%)" },
    { name: "Cashmere Pullover", price: "$145", rating: 4.8, count: 521, img: U("photo-1654883320749-449357285e54"), bg: "radial-gradient(ellipse at 38% 20%, rgba(255,255,255,0.40) 0%, transparent 55%), linear-gradient(155deg, #c4b8a8 0%, #8a7868 100%)" },
  ],
  vintage: [
    { name: "90s Denim Jacket", price: "$89", rating: 4.7, count: 234, img: U("photo-1528119981659-9ab31372d175"), bg: "radial-gradient(ellipse at 35% 18%, rgba(255,255,255,0.28) 0%, transparent 52%), linear-gradient(155deg, #5878a8 0%, #2d4070 100%)" },
    { name: "Oversized Flannel", price: "$54", rating: 4.6, count: 178, img: U("photo-1555583743-991174c11425"), bg: "radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.42) 0%, transparent 58%), linear-gradient(155deg, #e8d4a8 0%, #c4a87a 100%)" },
    { name: "Vintage Corduroy", price: "$72", rating: 4.8, count: 145, img: U("photo-1584844308532-b318efe24f74"), bg: "radial-gradient(ellipse at 38% 18%, rgba(255,255,255,0.28) 0%, transparent 52%), linear-gradient(155deg, #a0622a 0%, #6b3a18 100%)" },
    { name: "Silk Blouse", price: "$62", rating: 4.6, count: 112, img: U("photo-1602515931029-16b4a8ff505a"), bg: "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.38) 0%, transparent 55%), linear-gradient(155deg, #d4a8c0 0%, #a0688a 100%)" },
  ],
  jewelry: [
    { name: "Evening Gown", price: "$480", rating: 4.9, count: 43, img: U("photo-1499939667766-4afceb292d05"), bg: "radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.58) 0%, transparent 55%), linear-gradient(155deg, #c8a534 0%, #6b4f10 100%)" },
    { name: "Satin Blazer", price: "$310", rating: 4.8, count: 78, img: U("photo-1564624791497-06ce5d1643ec"), bg: "radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.52) 0%, transparent 55%), linear-gradient(155deg, #b8972a 0%, #7a5c10 100%)" },
    { name: "Embellished Top", price: "$195", rating: 4.7, count: 156, img: U("photo-1579726667687-01bbd35dc815"), bg: "radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.58) 0%, transparent 55%), linear-gradient(155deg, #90a8c8 0%, #5070a0 100%)" },
    { name: "Tailored Trousers", price: "$265", rating: 4.9, count: 89, img: U("photo-1594684198851-b84317b4450f"), bg: "radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.62) 0%, transparent 58%), linear-gradient(155deg, #f0ebe0 0%, #c8bea0 100%)" },
  ],
  outerwear: [
    { name: "Arctic Puffer", price: "$59", orig: "$89", rating: 4.7, count: 1243, img: U("photo-1548119661-bc6dee579fef"), bg: "radial-gradient(ellipse at 35% 18%, rgba(255,255,255,0.28) 0%, transparent 52%), linear-gradient(155deg, #3b82f6 0%, #1d4ed8 100%)" },
    { name: "Wool Coat", price: "$79", orig: "$119", rating: 4.6, count: 876, img: U("photo-1575667347408-1ccdba8d0ced"), bg: "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.22) 0%, transparent 50%), linear-gradient(155deg, #0891b2 0%, #075985 100%)" },
    { name: "Fleece Jacket", price: "$49", orig: "$69", rating: 4.8, count: 934, img: U("photo-1579188780620-0d5881449263"), bg: "radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.22) 0%, transparent 50%), linear-gradient(155deg, #94a3b8 0%, #334155 100%)" },
    { name: "Rain Parka", price: "$69", orig: "$99", rating: 4.7, count: 621, img: U("photo-1612550715339-685db2f4a547"), bg: "radial-gradient(ellipse at 38% 18%, rgba(255,255,255,0.22) 0%, transparent 50%), linear-gradient(155deg, #ef4444 0%, #991b1b 100%)" },
  ],
};

// ─── Product Card ─────────────────────────────────────────────────────────────

const StarRow = ({ rating, count, dark }: { rating: number; count: number; dark?: boolean }) => (
  <div className="flex items-center gap-0.5 mb-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} className={`w-1.5 h-1.5 ${i < Math.round(rating) ? "text-amber-400" : dark ? "text-gray-700" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span className={`text-[5px] ml-0.5 ${dark ? "text-gray-600" : "text-gray-400"}`}>({count})</span>
  </div>
);

function PCard({
  name, price, orig, rating, count, bg, img,
  dark = false, imgAspect = "aspect-square",
}: ProductItem & { dark?: boolean; imgAspect?: string }) {
  return (
    <div className={`rounded-lg overflow-hidden${dark ? "" : " shadow-sm border border-gray-100"}`}>
      <div className={`${imgAspect} w-full relative overflow-hidden`} style={img ? undefined : { background: bg }}>
        {img && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img} alt={name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
        )}
      </div>
      <div className={`px-1.5 pt-1 pb-1.5 ${dark ? "bg-gray-900" : "bg-white"}`}>
        <StarRow rating={rating} count={count} dark={dark} />
        <p className={`text-[6.5px] font-semibold leading-tight truncate ${dark ? "text-gray-200" : "text-gray-800"}`}>{name}</p>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className={`text-[7.5px] font-black ${dark ? "text-white" : "text-gray-900"}`}>{price}</span>
          {orig && <span className="text-[5.5px] text-gray-400 line-through">{orig}</span>}
        </div>
      </div>
    </div>
  );
}

// ─── Storefront Variants ──────────────────────────────────────────────────────

function PersonaStorefront({
  persona,
  cdnImages,
}: {
  persona: Persona;
  cdnImages?: string[];
}) {
  const { theme } = persona;

  // ── ATHLETIC — APEX (Nike / Lululemon aesthetic) ──────────────────────────
  if (theme.layout === "athletic") {
    const prods = PERSONA_PRODUCTS.sportswear ?? [];
    return (
      <div className="rounded-xl overflow-hidden shadow-lg w-full" style={{ border: "1px solid #312e81" }}>
        {/* Deep indigo header */}
        <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #4f46e5 100%)" }} className="px-3 py-3">
          <div className="flex items-center justify-between mb-1">
            <p className="text-white font-black text-[15px] tracking-[0.18em] uppercase">APEX</p>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.12)" }}>
                <svg className="w-2.5 h-2.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
            </div>
          </div>
          <p className="text-indigo-300 text-[6.5px] tracking-widest uppercase">Performance Redefined · FW26</p>
          <div className="flex gap-1 mt-1.5">
            <span className="inline-flex items-center gap-0.5 text-[6px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(99,102,241,0.30)", border: "1px solid rgba(165,180,252,0.35)", color: "#c7d2fe" }}>
              <Zap className="w-2 h-2" />Performance
            </span>
            <span className="inline-flex items-center gap-0.5 text-[6px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.65)" }}>
              <Leaf className="w-2 h-2" />Eco
            </span>
          </div>
        </div>
        {/* 2×2 product grid — dark surface */}
        <div style={{ background: "#06040f" }} className="p-2 grid grid-cols-2 gap-2">
          {prods.map((p, i) => <PCard key={i} {...p} dark />)}
        </div>
        {/* CTA */}
        <div style={{ background: "#4f46e5" }} className="px-3 py-2 flex items-center justify-between">
          <span className="text-white text-[8px] font-bold tracking-wider uppercase">Shop New Collection</span>
          <span className="text-indigo-200 text-[9px]">→</span>
        </div>
      </div>
    );
  }

  // ── OUTDOOR — TrailCo (Patagonia aesthetic) ───────────────────────────────
  if (theme.layout === "outdoor") {
    const prods = PERSONA_PRODUCTS.hiking ?? [];
    return (
      <div className="rounded-xl overflow-hidden shadow-lg w-full" style={{ border: "1px solid #064e3b" }}>
        <div style={{ background: "linear-gradient(155deg, #022c22 0%, #064e3b 55%, #065f46 100%)" }} className="px-3 py-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Mountain className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
            <p className="text-white font-bold text-[13px] tracking-wider">TrailCo</p>
          </div>
          <p className="text-emerald-300/80 text-[6.5px] tracking-wide">Built for the Wild · Spring 2026</p>
          <div className="flex gap-1 mt-1.5">
            <span className="text-[6px] font-semibold px-1.5 py-0.5 rounded" style={{ background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.35)", color: "#6ee7b7" }}>1% for the Planet</span>
            <span className="text-[6px] px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.55)" }}>B Corp</span>
          </div>
        </div>
        <div style={{ background: "#f5f0eb" }} className="p-2 space-y-1.5">
          <PCard {...prods[0]} imgAspect="aspect-[3/2]" />
          <div className="grid grid-cols-3 gap-1.5">
            {prods.slice(1).map((p, i) => <PCard key={i} {...p} />)}
          </div>
        </div>
        <div style={{ background: "#064e3b" }} className="px-3 py-2">
          <span className="text-emerald-100 text-[8px] font-semibold">View Gear Drop →</span>
        </div>
      </div>
    );
  }

  // ── EDITORIAL — MAISON (Loro Piana / Burberry aesthetic) ─────────────────
  if (theme.layout === "editorial") {
    const prods = PERSONA_PRODUCTS["luxury-coats"] ?? [];
    const [hero, ...rest] = prods;
    return (
      <div className="rounded-xl overflow-hidden shadow-lg w-full" style={{ border: "1px solid #c8a534" }}>
        {/* Editorial masthead */}
        <div style={{ background: "#faf6ef", borderBottom: "1px solid #e8d8b0" }} className="px-3 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-[12px] tracking-[0.42em] text-stone-800 uppercase">MAISON</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-5 h-px" style={{ background: "#c8a534" }} />
                <p className="text-[6px] text-stone-500 tracking-[0.2em] uppercase">Autumn / Winter &#39;26</p>
                <div className="w-5 h-px" style={{ background: "#c8a534" }} />
              </div>
            </div>
            <span className="text-[5.5px] text-stone-400 tracking-widest uppercase px-2 py-1 rounded" style={{ border: "1px solid #d4c4a0" }}>Est. 1924</span>
          </div>
        </div>
        {/* Hero product — featured editorial layout */}
        <div style={{ background: "#faf6ef" }} className="p-2 space-y-1.5">
          <div className="flex gap-2">
            <div className="w-16 shrink-0 rounded-sm overflow-hidden aspect-[3/4]" style={{ background: hero?.bg }} />
            <div className="flex-1 flex flex-col justify-center py-1 min-w-0">
              <span className="text-[5.5px] tracking-[0.28em] uppercase font-semibold" style={{ color: "#c8a534" }}>Exclusive Edit</span>
              <p className="text-[9px] font-bold text-stone-900 mt-0.5 leading-tight">{hero?.name}</p>
              <p className="text-[5.5px] text-stone-400 mt-0.5 tracking-wide">Italian Merino · Handcrafted</p>
              <div className="flex items-center gap-0.5 mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className="w-1.5 h-1.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
                <span className="text-[5px] text-stone-400 ml-0.5">(87)</span>
              </div>
              <p className="text-[11px] font-black text-stone-900 mt-0.5">{hero?.price}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {rest.map((p, i) => <PCard key={i} {...p} imgAspect="aspect-[3/4]" />)}
          </div>
        </div>
        <div style={{ background: "#1c1410" }} className="px-3 py-2 text-center">
          <span className="text-[7.5px] tracking-[0.28em] uppercase italic" style={{ color: "#c8a534" }}>Explore the Edit →</span>
        </div>
      </div>
    );
  }

  // ── HYPE — DRIP (Supreme / Kith aesthetic) ────────────────────────────────
  if (theme.layout === "hype") {
    const prods = PERSONA_PRODUCTS.streetwear ?? [];
    return (
      <div className="rounded-xl overflow-hidden shadow-lg w-full" style={{ border: "1px solid #374151" }}>
        <div style={{ background: "#000000" }} className="px-3 py-2.5">
          <div className="flex items-center justify-between">
            <p className="text-white font-black text-[22px] tracking-[-0.02em] leading-none">DRIP</p>
            <motion.span
              className="text-[6px] font-black px-2 py-1 rounded"
              style={{ background: "#dc2626", color: "white" }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              🔴 LIVE DROP
            </motion.span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[6px] text-gray-500 tracking-widest uppercase">Limited Supply</span>
            <span className="text-[6px] text-gray-700">·</span>
            <span className="text-[6px] text-gray-500">Ships 24h</span>
          </div>
        </div>
        <div style={{ background: "#0a0a0a" }} className="p-2 space-y-1.5">
          {prods.map((p, i) => (
            <div key={i} className="flex gap-2 rounded-lg overflow-hidden" style={{ background: "#111827" }}>
              <div className="w-14 shrink-0" style={{ background: p.bg, minHeight: "48px" }} />
              <div className="flex-1 flex flex-col justify-center py-2 pr-2">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-[5.5px] text-gray-500 tracking-widest uppercase">Drop #{i + 1}</span>
                  {i === 0 && <span className="text-[5px] font-bold px-1 py-0.5 rounded" style={{ background: "#7f1d1d", color: "#fca5a5" }}>Almost Gone</span>}
                </div>
                <p className="text-white text-[7px] font-bold leading-tight">{p.name}</p>
                <p className="text-[8px] font-black text-white mt-0.5">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "#dc2626" }} className="px-3 py-2 text-center">
          <span className="text-white text-[8px] font-black tracking-widest uppercase">Add to Cart</span>
        </div>
      </div>
    );
  }

  // ── BOTANICAL — Botanica (Aesop / La Mer aesthetic) ───────────────────────
  if (theme.layout === "botanical") {
    const prods = PERSONA_PRODUCTS.skincare ?? [];
    return (
      <div className="rounded-xl overflow-hidden shadow-lg w-full" style={{ border: "1px solid #c8b896" }}>
        <div style={{ background: "#f7f3ee", borderBottom: "1px solid #e8dcc8" }} className="px-3 py-3">
          <p className="font-light text-[12px] tracking-[0.32em] text-stone-700 uppercase">Botanica</p>
          <p className="text-[6.5px] text-stone-400 mt-0.5 tracking-wider">Pure · Natural · Rituals</p>
          <div className="flex gap-1 mt-1.5">
            <span className="inline-flex items-center gap-0.5 text-[6px] rounded-full px-1.5 py-0.5" style={{ border: "1px solid #8fad88", color: "#5a8050" }}>
              <Leaf className="w-2 h-2" strokeWidth={1.75} />Certified Organic
            </span>
            <span className="text-[6px] rounded-full px-1.5 py-0.5" style={{ border: "1px solid #d4c4a0", color: "#8a7060" }}>Cruelty-Free</span>
          </div>
        </div>
        <div style={{ background: "#faf7f2" }} className="p-2">
          <div className="grid grid-cols-3 gap-1.5">
            {prods.map((p, i) => (
              <div key={i} className="flex flex-col">
                <div className="aspect-[2/3] rounded-lg w-full" style={{ background: p.bg }} />
                <div className="pt-1">
                  <p className="text-[6px] text-stone-600 font-medium leading-tight truncate">{p.name}</p>
                  <p className="text-[7.5px] font-black text-stone-900 mt-0.5">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#e8dcc8" }} className="px-3 py-2 text-center">
          <span className="text-[8px] italic text-stone-600">Discover Your Ritual →</span>
        </div>
      </div>
    );
  }

  // ── VINTAGE — Archive (Depop / thrift aesthetic) ──────────────────────────
  if (theme.layout === "vintage") {
    const prods = PERSONA_PRODUCTS.vintage ?? [];
    return (
      <div className="rounded-xl overflow-hidden shadow-lg w-full" style={{ border: "1px solid #c4a882" }}>
        <div style={{ background: "linear-gradient(155deg, #f5ebd8 0%, #eddfc4 100%)", borderBottom: "1px solid #d4b890" }} className="px-3 py-2.5">
          <p className="font-bold text-[12px] tracking-[0.3em] text-stone-700 uppercase">Archive</p>
          <p className="text-[6.5px] text-stone-500 italic mt-0.5">Curated Secondhand Finds</p>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="h-px flex-1" style={{ background: "#c4a882" }} />
            <span className="text-[5.5px] text-stone-500 tracking-wider">Est. 1972 · 4,200+ Items</span>
            <div className="h-px flex-1" style={{ background: "#c4a882" }} />
          </div>
        </div>
        <div style={{ background: "#fdf8f0" }} className="p-2 grid grid-cols-2 gap-2">
          {prods.map((p, i) => (
            <div key={i}>
              <div className="aspect-square rounded-sm overflow-hidden" style={{ border: "2px solid white", boxShadow: "0 1px 4px rgba(0,0,0,0.10)", background: p.bg }} />
              <div className="mt-1 px-0.5">
                <p className="text-[6.5px] font-medium text-stone-700 leading-tight truncate">{p.name}</p>
                <p className="text-[8px] font-black text-stone-900 mt-0.5">{p.price}</p>
                <p className="text-[5.5px] text-stone-400">Size: M · Condition: 9/10</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "#8b6040" }} className="px-3 py-2 text-center">
          <span className="text-amber-100 text-[8px] font-semibold">Browse the Archive →</span>
        </div>
      </div>
    );
  }

  // ── ARTISAN — Atelier (Tiffany / Cartier aesthetic) ───────────────────────
  if (theme.layout === "artisan") {
    const prods = PERSONA_PRODUCTS.jewelry ?? [];
    return (
      <div className="rounded-xl overflow-hidden shadow-lg w-full" style={{ border: "1px solid #4a1d8c" }}>
        <div style={{ background: "linear-gradient(155deg, #0d0820 0%, #1a0d30 60%, #2d1050 100%)" }} className="px-3 py-2.5">
          <p className="text-[12px] tracking-[0.38em] text-white/90 uppercase" style={{ borderBottom: "1px solid rgba(168,85,247,0.30)", paddingBottom: "6px", marginBottom: "4px" }}>Atelier</p>
          <p className="text-[6.5px] tracking-wider" style={{ color: "rgba(240,171,252,0.65)" }}>Handcrafted Fine Jewelry</p>
          <span className="inline-flex items-center gap-0.5 mt-1.5 text-[6px] px-2 py-0.5 rounded" style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.30)", color: "#e879f9" }}>
            ✦ Artisan Made · Limited Pieces
          </span>
        </div>
        <div style={{ background: "#07040f" }} className="p-2 grid grid-cols-2 gap-2">
          {prods.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="aspect-square w-full rounded-full overflow-hidden" style={{ background: p.bg, border: "1px solid rgba(168,85,247,0.20)" }} />
              <div className="px-1 pt-1 pb-0.5 text-center w-full">
                <p className="text-[6px] leading-tight truncate" style={{ color: "rgba(240,171,252,0.65)" }}>{p.name}</p>
                <p className="text-[7.5px] font-bold text-white mt-0.5">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "linear-gradient(90deg, #581c87, #6b21a8)" }} className="px-3 py-2 text-center">
          <span className="text-[8px] tracking-widest" style={{ color: "#f0abfc" }}>View Collection →</span>
        </div>
      </div>
    );
  }

  // ── RESORT (LUMA — Figma design) ─────────────────────────────────────────
  if (theme.layout === "resort") {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg w-full" style={{ border: "1px solid #e4c9cd" }}>
        {/* Stacked Figma sections — hero band + product grid */}
        <div className="relative overflow-hidden" style={{ height: "252px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma-screens/hero-section.png" alt="" className="w-full block" loading="eager" decoding="async" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma-screens/products-section.png" alt="" className="w-full block bg-white" loading="eager" decoding="async" />

          {/* Deep gradient from teal → transparent so hero bleeds into products */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{ height: "80px", background: "linear-gradient(to top, rgba(255,255,255,0.97) 0%, transparent 100%)" }}
          />

          {/* Brand bar pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 flex items-center justify-between">
            <div>
              <p className="text-gray-900 text-[11px] font-black tracking-[0.22em] uppercase">LUMA</p>
              <p className="text-[7px] tracking-widest uppercase" style={{ color: theme.accentHex }}>
                {theme.badge}
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-full px-2 py-0.5" style={{ background: "rgba(18,56,64,0.12)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[7px] font-bold tracking-widest uppercase" style={{ color: "#123840" }}>Live</span>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="bg-white px-3 py-2 border-t" style={{ borderColor: "#f3dfe2" }}>
          <span className="text-[8px] font-bold tracking-wider" style={{ color: theme.accentHex }}>
            {theme.ctaLabel} →
          </span>
        </div>
      </div>
    );
  }

  // ── DEALS — CozyFit (Uniqlo sale / TJ Maxx aesthetic) ────────────────────
  const prods = PERSONA_PRODUCTS.outerwear ?? [];
  const discounts = ["33%", "34%", "29%", "30%"];
  return (
    <div className="rounded-xl overflow-hidden shadow-lg w-full" style={{ border: "1px solid #bfdbfe" }}>
      {/* Sale banner */}
      <div style={{ background: "#15803d" }} className="px-3 py-1 text-center">
        <span className="text-white text-[6.5px] font-bold tracking-widest uppercase">Up to 40% Off — Winter Clearance</span>
      </div>
      <div style={{ background: "linear-gradient(135deg, #1e40af 0%, #1d4ed8 60%, #2563eb 100%)" }} className="px-3 py-2.5">
        <p className="text-white font-bold text-[13px] tracking-wider">CozyFit</p>
        <p className="text-blue-200 text-[7px] mt-0.5">Warm. Stylish. Affordable.</p>
      </div>
      <div className="bg-white p-2 grid grid-cols-2 gap-1.5">
        {prods.map((p, i) => (
          <div key={i} className="relative">
            <PCard {...p} />
            <span className="absolute top-1 left-1 text-[5.5px] font-black text-white px-1 py-0.5 rounded" style={{ background: "#dc2626" }}>
              -{discounts[i]}
            </span>
          </div>
        ))}
      </div>
      <div style={{ background: "#15803d" }} className="px-3 py-2 text-center">
        <span className="text-white text-[8px] font-black tracking-wider uppercase">Shop Sale Now</span>
      </div>
    </div>
  );
}

// ─── 3-Card Persona Carousel ──────────────────────────────────────────────────

function PersonaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cdnImages, setCdnImages] = useState<Record<string, string[]>>({});

  useEffect(() => {
    fetch("/api/persona-products")
      .then((r) => r.ok ? r.json() : {})
      .then((data: Record<string, string[]>) => setCdnImages(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % personas.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isHovered]);

  const prev = () => setActiveIndex((i) => (i - 1 + personas.length) % personas.length);
  const next = () => setActiveIndex((i) => (i + 1) % personas.length);

  const persona = personas[activeIndex];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visitor detected header */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.3 }}
          className="mb-2.5 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-5 h-5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-success/30 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-success" />
            </div>
            <div>
              <span className="text-[9px] font-bold text-success uppercase tracking-widest">Visitor detected</span>
              <span className="mx-1.5 text-gray-300">·</span>
              <span className="text-[9px] font-semibold text-foreground">{persona.demo}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-primary/5 border border-primary/10 rounded-full px-2 py-0.5">
            <span className="text-[8px] text-primary font-medium">→ {persona.intent}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Single card — full width of the column */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <PersonaStorefront
              persona={persona}
              cdnImages={cdnImages[persona.id]}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persona dot-tabs — shows all 9 store variants */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          {personas.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(i)}
              title={`${p.theme.store} · ${p.demo}`}
              className={`transition-all duration-200 rounded-full font-bold text-[7px] flex items-center justify-center ${
                i === activeIndex
                  ? "w-5 h-5 text-white shadow-md"
                  : "w-4 h-4 bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
              style={i === activeIndex ? { backgroundColor: p.theme.accentHex } : {}}
            >
              {i === activeIndex ? p.theme.store.charAt(0) : ""}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={prev}
            className="w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all shadow-sm"
            aria-label="Previous persona"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all shadow-sm"
            aria-label="Next persona"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Legacy Site Mockup ───────────────────────────────────────────────────────

function LegacySite() {
  const products = [
    {
      price: "$29.99", label: "Classic Tee",
      bg: "radial-gradient(ellipse at 40% 22%, rgba(255,255,255,0.22) 0%, transparent 52%), linear-gradient(155deg, #d1d5db 0%, #9ca3af 100%)",
    },
    {
      price: "$44.99", label: "Denim Jacket",
      bg: "radial-gradient(ellipse at 38% 20%, rgba(255,255,255,0.18) 0%, transparent 50%), linear-gradient(155deg, #c4c9d4 0%, #8b95a8 100%)",
    },
    {
      price: "$39.99", label: "Summer Dress",
      bg: "radial-gradient(ellipse at 42% 22%, rgba(255,255,255,0.20) 0%, transparent 50%), linear-gradient(155deg, #d4cfd8 0%, #a89eb0 100%)",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 h-full flex flex-col">
      {/* Browser chrome */}
      <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <div className="flex-1 mx-2 bg-white rounded-md px-2 py-0.5 text-[9px] text-gray-400 font-mono border border-gray-200 flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
          yourstore.com
        </div>
      </div>

      {/* Nav bar */}
      <div className="bg-white px-3 py-1.5 flex items-center justify-between border-b border-gray-100 shrink-0">
        <span className="text-[10px] font-black tracking-widest text-gray-700 uppercase">STORE</span>
        <div className="flex items-center gap-2.5">
          {["Products", "Sale", "About"].map((l) => (
            <span key={l} className="text-[7px] text-gray-400">{l}</span>
          ))}
          <div className="relative">
            <div className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center">
              <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-gray-400 text-white text-[5px] flex items-center justify-center font-bold">3</div>
          </div>
        </div>
      </div>

      {/* Hero banner — generic, same for all */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 px-4 py-4 text-center shrink-0">
        <div className="inline-block bg-gray-400/50 text-white text-[6px] font-bold tracking-wider px-2 py-0.5 rounded mb-1.5 uppercase">Summer Sale</div>
        <div className="w-36 h-2.5 rounded bg-gray-400/60 mx-auto mb-1.5" />
        <div className="w-24 h-1.5 rounded bg-gray-300/80 mx-auto mb-3" />
        <div className="w-20 h-5 rounded-full bg-gray-500/70 mx-auto flex items-center justify-center">
          <span className="text-[7px] text-white/80 font-semibold uppercase tracking-wide">Shop Now</span>
        </div>
      </div>

      {/* Section label */}
      <div className="px-3 pt-2 pb-1 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-[7px] text-gray-400 uppercase tracking-widest">All Products</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
      </div>

      {/* Product grid — same 3 products, same order, no context */}
      <div className="px-3 pb-2 grid grid-cols-3 gap-2 flex-1">
        {products.map((p, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="aspect-square rounded-md border border-gray-200" style={{ background: p.bg }} />
            <div className="text-[7px] text-gray-600 font-medium leading-tight truncate">{p.label}</div>
            <div className="text-[7px] text-gray-500">{p.price}</div>
            <div className="w-full py-0.5 rounded bg-gray-200 text-center text-[6px] text-gray-500 font-medium">Add to Cart</div>
          </div>
        ))}
      </div>

      {/* Warning bar */}
      <div className="mx-3 mb-3 px-2.5 py-1.5 rounded-lg bg-red-50 border border-red-100 flex items-center gap-1.5 shrink-0">
        <span className="text-red-400 text-[9px]">⚠</span>
        <span className="text-[9px] text-red-500 font-medium">No visitor intelligence · Same for all 23K visitors</span>
      </div>
    </div>
  );
}

// ─── Headline words ───────────────────────────────────────────────────────────

const allWords = ["Turning", "Static", "Storefronts", "Into", "Endless"];
const gradientPhrase = "Self-Adaptive Experiences";

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection({ onBookDemo }: { onBookDemo: () => void }) {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyCta(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-white to-white" />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-primary font-medium">Now accepting early access partners</span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-foreground mb-5 leading-[1.1]">
              {allWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.07, duration: 0.55, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="gradient-text inline-block"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: allWords.length * 0.07, duration: 0.55, ease: "easeOut" }}
              >
                {gradientPhrase}
              </motion.span>
            </h1>

            <motion.p
              className="text-base sm:text-lg text-primary/80 font-medium max-w-2xl mx-auto mb-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              NextConversion: An agent-first engine turning static websites into
              profitable, adaptive shopping experiences.
            </motion.p>

            <motion.p
              className="text-base text-muted max-w-2xl mx-auto mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
            >
              Stop sending laser-focused ad traffic to one-size-fits-all websites.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6, ease: "easeOut" }}
            >
              <motion.button
                onClick={onBookDemo}
                className="btn-primary rounded-xl bg-primary px-10 py-4 text-white font-semibold text-base animate-pulse-glow inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Book a Demo
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <p className="text-xs text-muted">
                Limited spots for launch cohort &middot; No credit card required
              </p>
            </motion.div>

            {/* Platform compatibility strip */}
            <motion.div
              className="mt-6 pt-5 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-[10px] font-semibold text-muted uppercase tracking-widest text-center mb-3">Works with your existing stack</p>
              <div className="flex items-center justify-center gap-5 flex-wrap">
                {[
                  { name: "Shopify", color: "#96bf48" },
                  { name: "Klaviyo", color: "#1a1a1a" },
                  { name: "Meta Ads", color: "#0866ff" },
                  { name: "Google", color: "#4285F4" },
                  { name: "WooCommerce", color: "#7f54b3" },
                ].map((p) => (
                  <span key={p.name} className="text-[11px] font-bold tracking-wide" style={{ color: p.color, opacity: 0.7 }}>{p.name}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Split screen: Legacy vs Adaptive */}
          <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
          >
            {/* VS divider — desktop only */}
            <div className="hidden lg:flex absolute left-1/2 top-12 -translate-x-1/2 z-10 flex-col items-center gap-2">
              <div className="w-px h-8 bg-gradient-to-b from-transparent to-border" />
              <div className="w-8 h-8 rounded-full bg-white border-2 border-border shadow-sm flex items-center justify-center">
                <span className="text-[9px] font-black text-muted">VS</span>
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <h3 className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Legacy Website — One page for everyone
                </h3>
              </div>
              <LegacySite />
              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-red-400">📉</span>
                  <span className="text-[10px] text-muted">avg. 78% bounce · 1.2 pages/visit</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Curated Storefront — Personalized per visitor
                </h3>
              </div>
              <PersonaCarousel />
              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-success">📈</span>
                  <span className="text-[10px] text-success font-medium">avg. 32% bounce · 3.8 pages/visit</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className={`sticky-cta-mobile md:hidden ${showStickyCta ? "visible" : ""}`}>
        <button
          onClick={onBookDemo}
          className="btn-primary w-full rounded-xl bg-primary px-6 py-3 text-white font-semibold text-base inline-flex items-center justify-center gap-2"
        >
          Book a Demo
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </>
  );
}
