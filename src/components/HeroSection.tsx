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
  | "deals";     // CozyFit · Outerwear

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
      tagline: "Pure \u00b7 Natural \u00b7 Yours",
      badge: "Certified Organic",
      layout: "botanical",
      dark: false,
      ctaLabel: "Discover Your Routine",
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
      tagline: "Handcrafted Pieces",
      badge: "Artisan Made",
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

// ─── Storefront Variants ──────────────────────────────────────────────────────

function PersonaStorefront({
  persona,
  cdnImages,
}: {
  persona: Persona;
  cdnImages?: string[];
}) {
  const { theme } = persona;

  const slot = (i: number, cls?: string) => {
    const url = cdnImages?.[i];
    const isVid = !!url && (url.endsWith(".mp4") || url.includes(".mp4?"));
    return (
      <PersonaMediaSlot
        key={i}
        url={url}
        gradient={persona.products[i] ?? "from-gray-200 to-gray-300"}
        isVideo={isVid}
        className={cls ?? "aspect-square rounded-lg"}
      />
    );
  };

  // ── ATHLETIC ──────────────────────────────────────────────────────────────
  if (theme.layout === "athletic") {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 w-full">
        <div className={`${theme.headerClass} px-3 py-2.5`}>
          <p className="text-white font-black text-[11px] tracking-[0.25em] uppercase">{theme.store}</p>
          <p className="text-white/70 text-[7px] tracking-widest uppercase mt-0.5">{theme.tagline}</p>
          <div className="flex gap-1 mt-1.5">
            <span className="inline-flex items-center gap-0.5 bg-white/20 text-white text-[6px] font-bold px-1.5 py-0.5 rounded-full">
              <Zap className="w-2.5 h-2.5" />Performance
            </span>
            <span className="inline-flex items-center gap-0.5 bg-white/20 text-white text-[6px] font-bold px-1.5 py-0.5 rounded-full">
              <Leaf className="w-2.5 h-2.5" />Eco
            </span>
          </div>
        </div>
        <div className="bg-white p-2 grid grid-cols-2 gap-1.5">
          {slot(0)}{slot(1)}{slot(2)}{slot(3)}
        </div>
        <div className="bg-white px-3 py-2 border-t border-gray-100">
          <span className="text-[8px] font-bold tracking-wider" style={{ color: theme.accentHex }}>
            {theme.ctaLabel} →
          </span>
        </div>
      </div>
    );
  }

  // ── OUTDOOR ───────────────────────────────────────────────────────────────
  if (theme.layout === "outdoor") {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 w-full">
        <div className={`${theme.headerClass} px-3 py-2.5`}>
          <div className="flex items-center gap-1.5 mb-0.5">
            <Mountain className="w-3.5 h-3.5 text-white/80" strokeWidth={1.75} />
            <p className="text-white font-bold text-[11px] tracking-wider">{theme.store}</p>
          </div>
          <p className="text-white/80 text-[7px]">{theme.tagline}</p>
          <span className="inline-block mt-1 bg-white/15 text-white text-[6px] font-semibold px-1.5 py-0.5 rounded">
            {theme.badge}
          </span>
        </div>
        <div className="bg-white p-2 space-y-1.5">
          <div className="w-full">{slot(0, "aspect-[4/3] rounded-lg w-full")}</div>
          <div className="grid grid-cols-2 gap-1.5">
            {slot(1)}{slot(2)}
          </div>
        </div>
        <div className="bg-white px-3 py-2 border-t border-gray-100">
          <span className="text-[8px] font-semibold" style={{ color: theme.accentHex }}>{theme.ctaLabel} →</span>
        </div>
      </div>
    );
  }

  // ── EDITORIAL ─────────────────────────────────────────────────────────────
  if (theme.layout === "editorial") {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg border border-amber-200 w-full">
        <div className={`${theme.headerClass} px-3 py-3 text-center border-b border-amber-200`}>
          <p className="font-bold text-[11px] tracking-[0.35em] text-amber-900 uppercase">{theme.store}</p>
          <div className="w-8 h-px bg-amber-400 mx-auto my-1" />
          <p className="text-[7px] text-amber-700 tracking-widest uppercase">{theme.tagline}</p>
        </div>
        <div className="bg-white p-2 flex gap-2">
          <div className="w-14 flex-shrink-0">{slot(0, "aspect-[3/4] rounded-md w-full")}</div>
          <div className="flex-1 flex flex-col justify-center min-w-0">
            <span className="text-[6px] text-amber-600 font-bold tracking-widest uppercase">{theme.badge}</span>
            <p className="text-[8px] font-bold text-gray-800 leading-tight mt-0.5 truncate">Heritage Coat</p>
            <p className="text-[9px] font-black text-gray-900 mt-1">$890</p>
            <div className="w-full h-px bg-amber-200 mt-1.5" />
            <p className="text-[6px] text-gray-400 mt-1">Merino · Italy</p>
          </div>
        </div>
        <div className="bg-amber-50 px-3 py-2 border-t border-amber-100 text-center">
          <span className="text-[8px] italic text-amber-700">{theme.ctaLabel} →</span>
        </div>
      </div>
    );
  }

  // ── HYPE ──────────────────────────────────────────────────────────────────
  if (theme.layout === "hype") {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800 w-full">
        <div className={`${theme.headerClass} px-3 py-2.5`}>
          <p className="text-white font-black text-[18px] tracking-tight leading-none">{theme.store}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <motion.span
              className="inline-flex items-center gap-0.5 bg-rose-600 text-white text-[7px] font-bold px-1.5 py-0.5 rounded"
              animate={{ opacity: [1, 0.55, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Flame className="w-2.5 h-2.5" strokeWidth={1.75} />
              Live Now
            </motion.span>
            <span className="text-gray-500 text-[6px] tracking-widest uppercase">Limited Supply</span>
          </div>
        </div>
        <div className="bg-gray-950 p-2 space-y-1.5">
          {[0, 1].map((i) => (
            <div key={i} className="relative rounded overflow-hidden">
              {slot(i, "aspect-[5/2] rounded w-full")}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-1.5 pb-1">
                <p className="text-white text-[7px] font-bold">Drop #{i + 1}</p>
                <p className="text-gray-300 text-[6px]">$149</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-950 px-3 py-2">
          <div className="bg-rose-600 text-white text-[8px] font-bold text-center py-1 rounded">
            {theme.ctaLabel}
          </div>
        </div>
      </div>
    );
  }

  // ── BOTANICAL ─────────────────────────────────────────────────────────────
  if (theme.layout === "botanical") {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg border border-green-100 w-full">
        <div className={`${theme.headerClass} px-3 py-3 border-b border-green-100`}>
          <p className="font-light text-[11px] tracking-[0.25em] text-green-700">{theme.store}</p>
          <p className="text-[7px] text-gray-400 mt-0.5">{theme.tagline}</p>
          <span className="inline-flex items-center gap-0.5 mt-1.5 bg-green-50 border border-green-200 text-green-700 text-[6px] font-semibold px-1.5 py-0.5 rounded-full">
            <Leaf className="w-2.5 h-2.5" strokeWidth={1.75} />{theme.badge}
          </span>
        </div>
        <div className="bg-green-50/30 p-2">
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-0.5">
                {slot(i, "aspect-[2/3] rounded-lg w-full")}
                <p className="text-[6px] text-gray-400 text-center leading-tight">Serum {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white px-3 py-2 border-t border-green-100 text-center">
          <span className="text-[8px] italic text-green-700">{theme.ctaLabel}</span>
        </div>
      </div>
    );
  }

  // ── VINTAGE ───────────────────────────────────────────────────────────────
  if (theme.layout === "vintage") {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg border border-stone-200 w-full">
        <div className={`${theme.headerClass} px-3 py-2.5`}>
          <p className="font-bold text-[11px] tracking-[0.3em] text-stone-700 uppercase">{theme.store}</p>
          <p className="text-[7px] text-stone-500 italic mt-0.5">{theme.tagline}</p>
          <div className="flex items-center gap-1 mt-1.5">
            <div className="h-px flex-1 bg-stone-400/50" />
            <span className="text-[6px] text-stone-500 tracking-wider">Est. 1972</span>
            <div className="h-px flex-1 bg-stone-400/50" />
          </div>
        </div>
        <div className="bg-amber-50/30 p-2 grid grid-cols-2 gap-2">
          {persona.products.map((g, i) => {
            const url = cdnImages?.[i];
            const isVid = !!url && (url.endsWith(".mp4") || url.includes(".mp4?"));
            return (
              <div key={i} className="border-2 border-white shadow">
                <PersonaMediaSlot url={url} gradient={g} isVideo={isVid} className="aspect-square rounded-none w-full" />
              </div>
            );
          })}
        </div>
        <div className="bg-amber-50/50 px-3 py-2 border-t border-stone-200 text-center">
          <span className="text-[8px] text-stone-600">{theme.ctaLabel} →</span>
        </div>
      </div>
    );
  }

  // ── ARTISAN ───────────────────────────────────────────────────────────────
  if (theme.layout === "artisan") {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg border border-purple-900 w-full">
        <div className={`${theme.headerClass} px-3 py-2.5`}>
          <p className="text-[11px] tracking-[0.35em] text-white/90 uppercase pb-1 border-b border-fuchsia-700/40">
            {theme.store}
          </p>
          <p className="text-[7px] text-fuchsia-300/70 mt-1">{theme.tagline}</p>
          <span className="inline-block mt-1 bg-fuchsia-900/60 border border-fuchsia-700/40 text-fuchsia-300 text-[6px] font-semibold px-1.5 py-0.5 rounded">
            {theme.badge}
          </span>
        </div>
        <div className="bg-gray-950 p-2 grid grid-cols-2 gap-2">
          {persona.products.map((g, i) => {
            const url = cdnImages?.[i];
            const isVid = !!url && (url.endsWith(".mp4") || url.includes(".mp4?"));
            return (
              <PersonaMediaSlot
                key={i}
                url={url}
                gradient={g}
                isVideo={isVid}
                className="aspect-square rounded-full w-full"
              />
            );
          })}
        </div>
        <div className="bg-gray-950 px-3 py-2">
          <div className="border text-[8px] text-center py-1 rounded" style={{ borderColor: "#a855f7", color: "#e879f9" }}>
            {theme.ctaLabel}
          </div>
        </div>
      </div>
    );
  }

  // ── DEALS ─────────────────────────────────────────────────────────────────
  // (also the default / outerwear)
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 w-full">
      <div className={theme.headerClass}>
        <div className="bg-green-500 text-white text-[7px] font-bold text-center py-1 tracking-wider uppercase">
          {theme.badge}
        </div>
        <div className="px-3 py-2">
          <p className="text-white font-bold text-[11px] tracking-wider">{theme.store}</p>
          <p className="text-white/80 text-[7px] mt-0.5">{theme.tagline}</p>
        </div>
      </div>
      <div className="bg-white p-2 grid grid-cols-2 gap-1.5">
        {persona.products.map((g, i) => {
          const url = cdnImages?.[i];
          const isVid = !!url && (url.endsWith(".mp4") || url.includes(".mp4?"));
          return (
            <div key={i} className="relative">
              <PersonaMediaSlot url={url} gradient={g} isVideo={isVid} />
              <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[5px] font-bold px-1 py-0.5 rounded-sm">
                -{20 + i * 5}%
              </span>
            </div>
          );
        })}
      </div>
      <div className="bg-white px-3 py-2 border-t border-gray-100">
        <div className="bg-green-500 text-white text-[8px] font-bold text-center py-1 rounded">
          {theme.ctaLabel}
        </div>
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

      {/* Navigation arrows only — no count */}
      <div className="flex items-center justify-end gap-2 mt-3">
        <button
          onClick={prev}
          className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all shadow-sm"
          aria-label="Previous persona"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all shadow-sm"
          aria-label="Next persona"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Segment label below the card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="mt-3 flex items-center gap-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse flex-shrink-0" />
          <p className="text-xs text-primary font-medium">
            {persona.demo} &middot; {persona.intent}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Legacy Site Mockup ───────────────────────────────────────────────────────

function LegacySite() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 h-full">
      <div className="bg-gray-50 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="flex-1 mx-2 bg-white rounded px-2 py-0.5 text-[9px] text-gray-400 font-mono border border-gray-200">
          yourstore.com
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 px-3 py-6 text-center">
        <div className="w-32 h-3 rounded bg-gray-400/60 mx-auto mb-2" />
        <div className="w-44 h-2.5 rounded bg-gray-400/40 mx-auto mb-3" />
        <div className="w-20 h-6 rounded bg-gray-400 mx-auto" />
      </div>
      <div className="p-3 grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-1.5">
            <div className="aspect-square rounded bg-gray-100" />
            <div className="w-full h-1.5 rounded bg-gray-200" />
            <div className="w-2/3 h-1.5 rounded bg-gray-100" />
          </div>
        ))}
      </div>
      <div className="mx-3 mb-3 px-2 py-1.5 rounded-lg bg-red-50 border border-red-100 text-center">
        <span className="text-[10px] text-red-500 font-medium">Same layout for every visitor</span>
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
          </div>

          {/* Split screen: Legacy vs Adaptive */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <h3 className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Legacy Website — One page for everyone
                </h3>
              </div>
              <LegacySite />
              <div className="mt-3 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                <p className="text-xs text-muted">Same layout for every visitor</p>
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
