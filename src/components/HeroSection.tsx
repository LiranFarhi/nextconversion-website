"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, MessageCircle, Send, Bookmark, Clock, Zap, MapPin, Truck } from "lucide-react";

// ─── Storefront layout variants ───────────────────────────────────────────────

type StorefrontLayout =
  | "instagram"    // APEX · Sportswear (Instagram aesthetic)
  | "marketplace"  // TrailCo · Hiking (Facebook Marketplace aesthetic)
  | "apple"        // MAISON · Luxury Coats (Apple.com aesthetic)
  | "netflix"      // DRIP · Streetwear (Netflix aesthetic)
  | "zara"         // Botanica · Skincare (Zara.com aesthetic)
  | "amazon"       // Archive · Vintage (Amazon.com aesthetic)
  | "artisan"      // Atelier · Jewelry (Tiffany & Co. aesthetic)
  | "deals"        // CozyFit · Outerwear (Amazon Deals aesthetic)
  | "pinterest";   // LUMA · Contemporary Fashion (Pinterest aesthetic)

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
      layout: "instagram",
      dark: false,
      ctaLabel: "Shop Now",
      accentHex: "#E1306C",
      headerClass: "bg-white",
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
      layout: "marketplace",
      dark: false,
      ctaLabel: "See All",
      accentHex: "#1877F2",
      headerClass: "bg-[#1877F2]",
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
      badge: "New",
      layout: "apple",
      dark: false,
      ctaLabel: "Shop Now",
      accentHex: "#0071E3",
      headerClass: "bg-[#f5f5f7]",
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
      tagline: "Trending Now",
      badge: "New",
      layout: "netflix",
      dark: true,
      ctaLabel: "Add to Cart",
      accentHex: "#E50914",
      headerClass: "bg-[#141414]",
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
      tagline: "New Season",
      badge: "SS26",
      layout: "zara",
      dark: false,
      ctaLabel: "View All",
      accentHex: "#000000",
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
      tagline: "Great Deals",
      badge: "Best Seller",
      layout: "amazon",
      dark: false,
      ctaLabel: "Add to Cart",
      accentHex: "#FF9900",
      headerClass: "bg-[#131921]",
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
      badge: "Made to Order",
      layout: "artisan",
      dark: true,
      ctaLabel: "Discover",
      accentHex: "#C5A572",
      headerClass: "bg-[#0C0B1E]",
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
      tagline: "Deal of the Day",
      badge: "Lightning Deal",
      layout: "deals",
      dark: false,
      ctaLabel: "See All Deals",
      accentHex: "#00A8E1",
      headerClass: "bg-[#00A8E1]",
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
      tagline: "Curated For You",
      badge: "Saved",
      layout: "pinterest",
      dark: false,
      ctaLabel: "See More Ideas",
      accentHex: "#E60023",
      headerClass: "bg-white",
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
      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }}
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

const FASHION_PRODUCTS: ProductItem[] = [
  { name: "Linen Midi Dress", price: "$185", rating: 4.9, count: 892, img: U("photo-1595777457583-95e059d581b8"), bg: "radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.48) 0%, transparent 55%), linear-gradient(155deg, #e8d5b2 0%, #c9a87a 100%)" },
  { name: "Cotton Wrap Top", price: "$95", rating: 4.8, count: 643, img: U("photo-1564257631407-4deb1f99d992"), bg: "radial-gradient(ellipse at 38% 22%, rgba(255,255,255,0.44) 0%, transparent 55%), linear-gradient(155deg, #fef3c7 0%, #fcd34d 100%)" },
  { name: "Tailored Blazer", price: "$145", rating: 4.7, count: 534, img: U("photo-1594938298603-c8148c4dae35"), bg: "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.52) 0%, transparent 58%), linear-gradient(155deg, #f5f0eb 0%, #d6cfc5 100%)" },
  { name: "Silk Camisole", price: "$120", rating: 4.8, count: 421, img: U("photo-1515886657613-9f3515b0c78f"), bg: "radial-gradient(ellipse at 38% 20%, rgba(255,255,255,0.40) 0%, transparent 55%), linear-gradient(155deg, #fce7f3 0%, #f9a8d4 100%)" },
];

const PERSONA_PRODUCTS: Record<string, ProductItem[]> = {
  sportswear: FASHION_PRODUCTS,
  hiking: FASHION_PRODUCTS,
  "luxury-coats": FASHION_PRODUCTS,
  streetwear: FASHION_PRODUCTS,
  skincare: FASHION_PRODUCTS,
  vintage: FASHION_PRODUCTS,
  jewelry: FASHION_PRODUCTS,
  outerwear: FASHION_PRODUCTS.map((p) => ({ ...p, orig: "$" + (parseInt(p.price.replace("$", "")) + 40) })),
  resort: FASHION_PRODUCTS,
};

// ─── Product Card ─────────────────────────────────────────────────────────────

const StarRow = ({ rating, count, dark }: { rating: number; count: number; dark?: boolean }) => (
  <div className="flex items-center gap-0.5 mb-1">
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} className={`w-2.5 h-2.5 ${i < Math.round(rating) ? "text-amber-400" : dark ? "text-gray-700" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span className={`text-[7px] ml-0.5 ${dark ? "text-gray-500" : "text-gray-400"}`}>({count})</span>
  </div>
);

function PCard({
  name, price, orig, rating, count, bg, img,
  dark = false, imgAspect = "aspect-square",
}: ProductItem & { dark?: boolean; imgAspect?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden transition-shadow${dark ? "" : " shadow-sm hover:shadow-md border border-gray-100"}`}>
      <div className={`${imgAspect} w-full relative overflow-hidden`} style={{ background: bg }}>
        {img && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img} alt={name} className="w-full h-full object-cover" loading="lazy" decoding="async"
            style={{ opacity: 0, transition: "opacity 0.3s ease" }}
            onLoad={(e) => { e.currentTarget.style.opacity = "1"; }}
            onError={(e) => { e.currentTarget.style.display = "none"; }} />
        )}
      </div>
      <div className={`px-2.5 pt-2 pb-2.5 ${dark ? "bg-gray-900" : "bg-white"}`}>
        <StarRow rating={rating} count={count} dark={dark} />
        <p className={`text-[8.5px] font-semibold leading-tight truncate ${dark ? "text-gray-200" : "text-gray-800"}`}>{name}</p>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className={`text-[10px] font-black ${dark ? "text-white" : "text-gray-900"}`}>{price}</span>
          {orig && <span className="text-[7px] text-gray-400 line-through">{orig}</span>}
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

  // ── INSTAGRAM — APEX (Instagram Shopping aesthetic) ────────────────────────
  if (theme.layout === "instagram") {
    const prods = PERSONA_PRODUCTS.sportswear ?? [];
    const [hero, ...rest] = prods;
    return (
      <div className="rounded-2xl overflow-hidden shadow-xl w-full bg-white" style={{ border: "1px solid #dbdbdb" }}>
        {/* Instagram-style nav bar */}
        <div className="px-3 py-2.5 flex items-center justify-between bg-white" style={{ borderBottom: "1px solid #efefef" }}>
          <p className="font-bold text-[16px] text-[#262626] italic">APEX</p>
          <div className="flex items-center gap-3">
            <Heart className="w-4 h-4 text-[#262626]" strokeWidth={1.5} />
            <Send className="w-4 h-4 text-[#262626]" strokeWidth={1.5} />
          </div>
        </div>
        {/* Stories row — rainbow gradient rings */}
        <div className="px-3 py-2.5 flex gap-2.5 bg-white" style={{ borderBottom: "1px solid #efefef" }}>
          {prods.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full p-[2px]" style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden" style={p.img ? undefined : { background: p.bg }}>
                    {p.img && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
                    )}
                  </div>
                </div>
              </div>
              <span className="text-[7px] text-[#262626] truncate w-12 text-center">{p.name.split(" ")[0]}</span>
            </div>
          ))}
        </div>
        {/* Main post image */}
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden" style={hero?.img ? undefined : { background: hero?.bg }}>
            {hero?.img && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={hero.img} alt={hero.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
            )}
          </div>
          {/* Double-tap heart overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Heart className="w-12 h-12 text-white/20" fill="white" strokeWidth={0} />
          </div>
        </div>
        {/* Engagement row */}
        <div className="px-3 py-2 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3.5">
            <Heart className="w-4 h-4 text-[#ed4956]" fill="#ed4956" strokeWidth={0} />
            <MessageCircle className="w-4 h-4 text-[#262626]" strokeWidth={1.5} />
            <Send className="w-4 h-4 text-[#262626]" strokeWidth={1.5} />
          </div>
          <Bookmark className="w-4 h-4 text-[#262626]" strokeWidth={1.5} />
        </div>
        <div className="px-3 pb-1">
          <p className="text-[9px] font-bold text-[#262626]">2,847 likes</p>
          <p className="text-[8px] text-[#262626] mt-0.5"><span className="font-bold">apex_official</span> {hero?.name} — {hero?.price}</p>
        </div>
        {/* 3-col thumbnail grid */}
        <div className="grid grid-cols-3 gap-[1px] bg-white mt-1.5">
          {rest.map((p, i) => (
            <div key={i} className="aspect-square overflow-hidden" style={p.img ? undefined : { background: p.bg }}>
              {p.img && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── MARKETPLACE — TrailCo (Facebook Marketplace aesthetic) ─────────────────
  if (theme.layout === "marketplace") {
    const prods = PERSONA_PRODUCTS.hiking ?? [];
    return (
      <div className="rounded-2xl overflow-hidden shadow-xl w-full" style={{ border: "1px solid #E4E6EB" }}>
        {/* Facebook blue header */}
        <div style={{ background: "#1877F2" }} className="px-3 py-2.5">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path d="M9 22V12h6v10" fill="rgba(255,255,255,0.3)" /></svg>
            <p className="text-white font-bold text-[14px]">Marketplace</p>
          </div>
        </div>
        {/* Search bar */}
        <div className="px-3 py-2 bg-white" style={{ borderBottom: "1px solid #E4E6EB" }}>
          <div className="flex items-center gap-2 bg-[#F0F2F5] rounded-full px-3 py-1.5">
            <Search className="w-3 h-3 text-[#65676B]" strokeWidth={2} />
            <span className="text-[9px] text-[#65676B]">Search Marketplace</span>
          </div>
        </div>
        {/* Category pills */}
        <div className="px-3 py-1.5 bg-white flex gap-1.5" style={{ borderBottom: "1px solid #E4E6EB" }}>
          {["All", "Outdoor", "Gear", "New"].map((c, i) => (
            <span key={c} className="text-[8px] px-2.5 py-1 rounded-full font-medium" style={i === 0 ? { background: "#E7F3FF", color: "#1877F2" } : { background: "#F0F2F5", color: "#050505" }}>
              {c}
            </span>
          ))}
        </div>
        {/* Product list — price-first layout */}
        <div className="bg-white p-2 space-y-1.5">
          {prods.map((p, i) => (
            <div key={i} className="flex gap-2.5 p-1.5 rounded-lg hover:bg-[#F0F2F5]">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0" style={p.img ? undefined : { background: p.bg }}>
                {p.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <p className="text-[12px] font-bold text-[#050505] leading-tight">{p.price}</p>
                <p className="text-[9px] text-[#050505] leading-tight mt-0.5 truncate">{p.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-2.5 h-2.5 text-[#65676B]" strokeWidth={2} />
                  <span className="text-[8px] text-[#65676B]">Free Shipping</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="px-3 py-2 bg-white" style={{ borderTop: "1px solid #E4E6EB" }}>
          <span className="text-[10px] font-bold" style={{ color: "#1877F2" }}>See All in Marketplace →</span>
        </div>
      </div>
    );
  }

  // ── APPLE — MAISON (Apple.com aesthetic) ──────────────────────────────────
  if (theme.layout === "apple") {
    const prods = PERSONA_PRODUCTS["luxury-coats"] ?? [];
    const [hero, ...rest] = prods;
    return (
      <div className="rounded-2xl overflow-hidden shadow-xl w-full" style={{ border: "1px solid #d2d2d7" }}>
        {/* Ultra-minimal nav */}
        <div style={{ background: "#f5f5f7" }} className="px-4 py-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-extralight tracking-[0.3em] text-[#1d1d1f] uppercase">MAISON</p>
            <div className="flex items-center gap-3">
              {["New", "Coats", "Cashmere"].map((l) => (
                <span key={l} className="text-[8px] text-[#6e6e73]">{l}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Hero product — Apple pedestal style */}
        <div style={{ background: "#ffffff" }} className="px-6 pt-6 pb-4 text-center">
          <p className="text-[8px] text-[#bf4800] font-medium uppercase tracking-wider mb-1">New</p>
          <p className="text-[18px] font-semibold text-[#1d1d1f] leading-tight">{hero?.name}</p>
          <p className="text-[10px] text-[#6e6e73] mt-1">Italian craftsmanship. Timeless design.</p>
          <p className="text-[11px] text-[#1d1d1f] font-medium mt-1.5">From {hero?.price}</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="text-[9px] font-medium" style={{ color: "#0071E3" }}>Learn more &gt;</span>
            <span className="text-[9px] font-medium" style={{ color: "#0071E3" }}>Buy &gt;</span>
          </div>
          <div className="mt-4 rounded-2xl overflow-hidden aspect-[4/3] mx-auto max-w-[200px]" style={hero?.img ? undefined : { background: hero?.bg }}>
            {hero?.img && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={hero.img} alt={hero.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
            )}
          </div>
        </div>
        {/* 3-column small product row */}
        <div style={{ background: "#f5f5f7" }} className="px-3 py-3">
          <div className="grid grid-cols-3 gap-2">
            {rest.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-2 text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-1.5" style={p.img ? undefined : { background: p.bg }}>
                  {p.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
                  )}
                </div>
                <p className="text-[7px] font-medium text-[#1d1d1f] leading-tight truncate">{p.name}</p>
                <p className="text-[7px] text-[#6e6e73] mt-0.5">From {p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── NETFLIX — DRIP (Netflix aesthetic) ─────────────────────────────────────
  if (theme.layout === "netflix") {
    const prods = PERSONA_PRODUCTS.streetwear ?? [];
    return (
      <div className="rounded-2xl overflow-hidden shadow-xl w-full" style={{ border: "1px solid #333" }}>
        {/* Netflix-style dark header */}
        <div style={{ background: "#141414" }} className="px-4 py-3">
          <div className="flex items-center justify-between">
            <p className="font-black text-[22px] tracking-tight leading-none" style={{ color: "#E50914" }}>DRIP</p>
            <div className="w-6 h-6 rounded bg-[#E50914] flex items-center justify-center">
              <span className="text-white text-[8px] font-black">N</span>
            </div>
          </div>
          <p className="text-[9px] text-[#808080] mt-1.5 tracking-wider uppercase font-medium">Trending Now</p>
        </div>
        {/* Top 4 ranked products — Netflix Top 10 style */}
        <div style={{ background: "#141414" }} className="px-3 pb-3 grid grid-cols-2 gap-2.5">
          {prods.map((p, i) => (
            <div key={i} className="relative">
              <div className="aspect-[3/4] rounded-md overflow-hidden relative" style={p.img ? undefined : { background: p.bg }}>
                {p.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {i === 0 && (
                  <div className="absolute top-1.5 left-1.5 bg-[#E50914] text-white text-[7px] font-bold px-1.5 py-0.5 rounded">
                    NEW
                  </div>
                )}
                <div className="absolute bottom-1.5 left-1.5 right-1.5">
                  <p className="text-white text-[8px] font-bold leading-tight truncate">{p.name}</p>
                  <p className="text-white/70 text-[8px] mt-0.5">{p.price}</p>
                </div>
              </div>
              {/* Large rank number */}
              <div className="absolute -bottom-1 -left-1.5" style={{ fontSize: "36px", fontWeight: 900, color: "transparent", WebkitTextStroke: "2px #E50914", lineHeight: 1 }}>
                {i + 1}
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div style={{ background: "#E50914" }} className="px-4 py-2.5 text-center">
          <span className="text-white text-[10px] font-black tracking-wider uppercase">Add to Cart</span>
        </div>
      </div>
    );
  }

  // ── ZARA — Botanica (Zara.com editorial minimalism) ───────────────────────
  if (theme.layout === "zara") {
    const prods = PERSONA_PRODUCTS.skincare ?? [];
    return (
      <div className="rounded-2xl overflow-hidden shadow-xl w-full bg-white" style={{ border: "1px solid #e5e5e5" }}>
        {/* Stark header — oversized brand name */}
        <div className="px-4 pt-5 pb-2 bg-white">
          <div className="flex items-center justify-between">
            <p className="text-[28px] font-extralight tracking-[0.5em] text-black uppercase leading-none">BOTANICA</p>
            <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
          <p className="text-[8px] text-black tracking-[0.3em] uppercase mt-2">New Season</p>
        </div>
        {/* Full-width stacked tall product images */}
        <div className="bg-white space-y-[1px]">
          {prods.slice(0, 2).map((p, i) => (
            <div key={i} className="relative">
              <div className="aspect-[3/4] w-full overflow-hidden" style={p.img ? undefined : { background: p.bg }}>
                {p.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
                )}
              </div>
              <div className="px-4 py-2 bg-white">
                <p className="text-[8px] tracking-[0.2em] text-black uppercase">{p.name}</p>
                <p className="text-[8px] text-[#666] mt-0.5">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Minimal CTA */}
        <div className="px-4 py-3 bg-white text-center" style={{ borderTop: "1px solid #e5e5e5" }}>
          <span className="text-[9px] text-black tracking-[0.2em] uppercase" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>View All</span>
        </div>
      </div>
    );
  }

  // ── AMAZON — Archive (Amazon.com aesthetic) ───────────────────────────────
  if (theme.layout === "amazon") {
    const prods = PERSONA_PRODUCTS.vintage ?? [];
    return (
      <div className="rounded-2xl overflow-hidden shadow-xl w-full" style={{ border: "1px solid #DDD" }}>
        {/* Amazon dark header with smile */}
        <div style={{ background: "#131921" }} className="px-3 py-2.5">
          <div className="flex items-center gap-1.5">
            <p className="text-white font-bold text-[16px] tracking-tight">Archive</p>
            <svg className="w-8 h-3 mt-1" viewBox="0 0 40 12"><path d="M2 8 Q20 14 38 8" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" /><path d="M34 6 L38 8 L34 10" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        {/* Delivery bar */}
        <div style={{ background: "#37475A" }} className="px-3 py-1.5 flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-white" strokeWidth={2} />
          <span className="text-[8px] text-white/80">Deliver to your location</span>
        </div>
        {/* Dense product grid */}
        <div className="bg-white p-2.5 grid grid-cols-2 gap-2">
          {prods.map((p, i) => (
            <div key={i} className="border border-[#DDD] rounded p-1.5 relative">
              {i === 0 && (
                <div className="absolute top-0 left-0 text-[7px] font-bold text-white px-2 py-0.5 rounded-br" style={{ background: "#C45500" }}>Best Seller</div>
              )}
              <div className="aspect-square rounded overflow-hidden mb-1.5" style={p.img ? undefined : { background: p.bg }}>
                {p.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
                )}
              </div>
              {/* Blue product link */}
              <p className="text-[8px] leading-tight truncate" style={{ color: "#007185" }}>{p.name}</p>
              {/* Star rating */}
              <div className="flex items-center gap-0.5 mt-0.5">
                {Array.from({ length: 5 }, (_, j) => (
                  <svg key={j} className={`w-2.5 h-2.5 ${j < Math.round(p.rating) ? "text-[#FFA41C]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
                <span className="text-[7px] text-[#007185]">({p.count})</span>
              </div>
              {/* Price */}
              <p className="text-[12px] font-bold text-[#0F1111] mt-0.5">{p.price}</p>
              {/* Prime badge */}
              <div className="flex items-center gap-1 mt-0.5">
                <Truck className="w-2.5 h-2.5 text-[#007185]" strokeWidth={2} />
                <span className="text-[7px] text-[#565959]">FREE Delivery</span>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="px-3 py-2 bg-white" style={{ borderTop: "1px solid #DDD" }}>
          <div className="rounded-full py-1.5 text-center text-[10px] font-bold text-[#0F1111]" style={{ background: "#FFD814" }}>
            Add to Cart
          </div>
        </div>
      </div>
    );
  }

  // ── ARTISAN — Atelier (Tiffany & Co. aesthetic) ───────────────────────────
  if (theme.layout === "artisan") {
    const prods = PERSONA_PRODUCTS.jewelry ?? [];
    const [first, second] = prods;
    return (
      <div className="rounded-2xl overflow-hidden shadow-xl w-full" style={{ border: "1px solid #2a2a3a" }}>
        {/* Dark luxury header with gold accents */}
        <div style={{ background: "#0C0B1E" }} className="px-4 py-4">
          <p className="text-[15px] tracking-[0.4em] text-white/90 uppercase font-light">Atelier</p>
          <div className="w-12 h-px mt-2 mb-2" style={{ background: "#C5A572" }} />
          <p className="text-[9px] tracking-[0.15em]" style={{ color: "#C5A572" }}>Fine Jewelry · Handcrafted</p>
          <span className="inline-flex items-center gap-1 mt-2.5 text-[8px] px-2.5 py-1 rounded" style={{ border: "1px solid rgba(197,165,114,0.30)", color: "#C5A572" }}>
            Made to Order · Limited Pieces
          </span>
        </div>
        {/* 2 large circular product showcases */}
        <div style={{ background: "#0C0B1E" }} className="px-6 py-4 space-y-4">
          {[first, second].filter(Boolean).map((p, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0" style={{ border: "1px solid rgba(197,165,114,0.30)", boxShadow: "0 0 20px rgba(197,165,114,0.10)" }}>
                {p.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
                ) : (
                  <div className="w-full h-full" style={{ background: p.bg }} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] tracking-wider text-white/60 uppercase">{i === 0 ? "Signature" : "Collection"}</p>
                <p className="text-[11px] font-medium text-white mt-1 leading-tight">{p.name}</p>
                <p className="text-[12px] font-bold mt-1" style={{ color: "#C5A572" }}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Gold-outlined CTA */}
        <div style={{ background: "#0C0B1E" }} className="px-4 pb-4 pt-1">
          <div className="text-center py-2 rounded" style={{ border: "1px solid #C5A572" }}>
            <span className="text-[10px] tracking-[0.2em]" style={{ color: "#C5A572" }}>Discover →</span>
          </div>
        </div>
      </div>
    );
  }

  // ── PINTEREST — LUMA (Pinterest aesthetic) ────────────────────────────────
  if (theme.layout === "pinterest") {
    const prods = PERSONA_PRODUCTS.resort ?? [];
    return (
      <div className="rounded-2xl overflow-hidden shadow-xl w-full bg-white" style={{ border: "1px solid #e0e0e0" }}>
        {/* Pinterest-style header */}
        <div className="px-3 py-2.5 flex items-center justify-between bg-white" style={{ borderBottom: "1px solid #efefef" }}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#E60023" }}>
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>
            </div>
            <p className="font-bold text-[14px] text-[#211922]">LUMA</p>
          </div>
          <Search className="w-4 h-4 text-[#767676]" strokeWidth={2} />
        </div>
        {/* Board title */}
        <div className="px-3 pt-2 pb-1 bg-white">
          <p className="text-[10px] font-bold text-[#211922]">Curated For You</p>
          <p className="text-[8px] text-[#767676] mt-0.5">4 Pins</p>
        </div>
        {/* Masonry-style 2-column layout with varied heights */}
        <div className="px-2 pb-2 bg-white">
          <div className="grid grid-cols-2 gap-2">
            {prods.map((p, i) => (
              <div key={i} className="relative" style={{ marginTop: i % 2 === 1 ? "12px" : "0" }}>
                <div className={`${i % 2 === 0 ? "aspect-[3/4]" : "aspect-square"} rounded-2xl overflow-hidden relative`} style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}>
                  {p.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
                  ) : (
                    <div className="w-full h-full" style={{ background: p.bg }} />
                  )}
                  {/* Save pin button overlay */}
                  <div className="absolute top-1.5 right-1.5">
                    <div className="rounded-full px-2.5 py-1 text-[8px] font-bold text-white" style={{ background: "#E60023" }}>
                      Save
                    </div>
                  </div>
                </div>
                <div className="px-0.5 pt-1.5">
                  <p className="text-[8px] font-medium text-[#211922] leading-tight truncate">{p.name}</p>
                  <p className="text-[8px] text-[#767676] mt-0.5">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="px-3 py-2 bg-white" style={{ borderTop: "1px solid #efefef" }}>
          <div className="rounded-full py-1.5 text-center text-[10px] font-bold text-white" style={{ background: "#E60023" }}>
            See More Ideas
          </div>
        </div>
      </div>
    );
  }

  // ── DEALS — CozyFit (Amazon Deals / Prime Day aesthetic) ─────────────────
  const prods = PERSONA_PRODUCTS.outerwear ?? [];
  const claimPcts = [72, 58, 85, 41];
  const discounts = ["33%", "34%", "29%", "30%"];
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl w-full" style={{ border: "1px solid #DDD" }}>
      {/* Prime blue header with deal badge */}
      <div style={{ background: "#00A8E1" }} className="px-3 py-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-white" fill="white" strokeWidth={0} />
            <div>
              <p className="text-white font-bold text-[13px]">Deal of the Day</p>
              <p className="text-white/80 text-[8px]">CozyFit Outerwear</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white/20 rounded px-2 py-1">
            <Clock className="w-3 h-3 text-white" strokeWidth={2} />
            <span className="text-white text-[9px] font-bold">02:14:37</span>
          </div>
        </div>
      </div>
      {/* Products with claim progress bars */}
      <div className="bg-white p-2.5 grid grid-cols-2 gap-2">
        {prods.map((p, i) => (
          <div key={i} className="border border-[#E8E8E8] rounded-lg p-1.5">
            <div className="aspect-square rounded overflow-hidden mb-1.5 relative" style={p.img ? undefined : { background: p.bg }}>
              {p.img && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
                      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }} />
              )}
              {/* Discount badge */}
              <div className="absolute top-1 left-1 text-[7px] font-bold text-white px-1.5 py-0.5 rounded" style={{ background: "#CC0C39" }}>
                -{discounts[i]}
              </div>
            </div>
            <p className="text-[8px] text-[#0F1111] font-medium leading-tight truncate">{p.name}</p>
            {/* Price row */}
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[11px] font-bold" style={{ color: "#CC0C39" }}>{p.price}</span>
              {p.orig && <span className="text-[8px] text-[#565959] line-through">{p.orig}</span>}
            </div>
            {/* Limited time deal tag */}
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[7px] font-bold text-white px-1.5 py-0.5 rounded" style={{ background: "#CC0C39" }}>Limited time deal</span>
            </div>
            {/* Claim progress bar */}
            <div className="mt-1.5">
              <div className="w-full h-1.5 rounded-full bg-[#F0F0F0] overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${claimPcts[i]}%`, background: "linear-gradient(90deg, #00A8E1, #00C9A7)" }} />
              </div>
              <p className="text-[7px] text-[#565959] mt-0.5">{claimPcts[i]}% claimed</p>
            </div>
          </div>
        ))}
      </div>
      {/* CTA */}
      <div className="px-3 py-2 bg-white" style={{ borderTop: "1px solid #DDD" }}>
        <span className="text-[10px] font-bold" style={{ color: "#00A8E1" }}>See All Deals →</span>
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
          <div className="flex items-center gap-1 bg-primary/5 border border-primary/10 rounded-full px-2 py-0.5 min-w-0 shrink">
            <span className="text-[8px] text-primary font-medium truncate max-w-[120px] sm:max-w-none">→ {persona.intent}</span>
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
        <div className="flex items-center gap-0.5 sm:gap-1.5 flex-wrap">
          {personas.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(i)}
              title={`${p.theme.store} · ${p.demo}`}
              className={`transition-all duration-200 rounded-full font-bold text-[7px] flex items-center justify-center p-1.5 sm:p-0 ${
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
            className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all shadow-sm"
            aria-label="Previous persona"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all shadow-sm"
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
      img: U("photo-1521572163474-6864f9cf17ab"),
      bg: "radial-gradient(ellipse at 40% 22%, rgba(255,255,255,0.22) 0%, transparent 52%), linear-gradient(155deg, #d1d5db 0%, #9ca3af 100%)",
    },
    {
      price: "$44.99", label: "Denim Jacket",
      img: U("photo-1551028719-00167b16eac5"),
      bg: "radial-gradient(ellipse at 38% 20%, rgba(255,255,255,0.18) 0%, transparent 50%), linear-gradient(155deg, #c4c9d4 0%, #8b95a8 100%)",
    },
    {
      price: "$39.99", label: "Summer Dress",
      img: U("photo-1595777457583-95e059d581b8"),
      bg: "radial-gradient(ellipse at 42% 22%, rgba(255,255,255,0.20) 0%, transparent 50%), linear-gradient(155deg, #d4cfd8 0%, #a89eb0 100%)",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-full flex flex-col">
      {/* Browser chrome */}
      <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <div className="flex-1 mx-2 bg-white rounded-md px-2.5 py-1 text-[9px] text-gray-400 font-mono border border-gray-200 flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
          yourstore.com
        </div>
      </div>

      {/* Nav bar */}
      <div className="bg-white px-4 py-2 flex items-center justify-between border-b border-gray-100 shrink-0">
        <span className="text-[12px] font-black tracking-widest text-gray-700 uppercase">STORE</span>
        <div className="flex items-center gap-3">
          {["Products", "Sale", "About"].map((l) => (
            <span key={l} className="text-[9px] text-gray-400">{l}</span>
          ))}
          <div className="relative">
            <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-gray-400 text-white text-[6px] flex items-center justify-center font-bold">3</div>
          </div>
        </div>
      </div>

      {/* Hero banner — generic, same for all */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 px-4 py-5 text-center shrink-0">
        <div className="inline-block bg-gray-400/50 text-white text-[8px] font-bold tracking-wider px-2.5 py-1 rounded mb-2 uppercase">Summer Sale</div>
        <div className="w-40 h-3 rounded bg-gray-400/60 mx-auto mb-2" />
        <div className="w-28 h-2 rounded bg-gray-300/80 mx-auto mb-3" />
        <div className="w-24 h-6 rounded-full bg-gray-500/70 mx-auto flex items-center justify-center">
          <span className="text-[8px] text-white/80 font-semibold uppercase tracking-wide">Shop Now</span>
        </div>
      </div>

      {/* Section label */}
      <div className="px-4 pt-3 pb-1.5 shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-[8px] text-gray-400 uppercase tracking-widest">All Products</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
      </div>

      {/* Product grid — same 3 products, same order, no context */}
      <div className="px-4 pb-3 grid grid-cols-3 gap-2.5 flex-1">
        {products.map((p, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="aspect-square rounded-lg border border-gray-200 overflow-hidden relative" style={p.img ? undefined : { background: p.bg }}>
              {p.img && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.img} alt={p.label} className="w-full h-full object-cover opacity-70 saturate-[0.3]" loading="lazy" decoding="async" />
              )}
            </div>
            <div className="text-[8.5px] text-gray-600 font-medium leading-tight truncate">{p.label}</div>
            <div className="text-[8.5px] text-gray-500">{p.price}</div>
            <div className="w-full py-1 rounded bg-gray-200 text-center text-[7px] text-gray-500 font-medium">Add to Cart</div>
          </div>
        ))}
      </div>

      {/* Warning bar */}
      <div className="mx-4 mb-3 px-3 py-2 rounded-lg bg-red-50 border border-red-100 flex items-center gap-2 shrink-0">
        <span className="text-red-400 text-[10px]">⚠</span>
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
      <section className="relative pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-white to-white" />
        <motion.div
          className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-foreground mb-5 leading-[1.1]">
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
