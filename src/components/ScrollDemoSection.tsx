"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

function useIsLg() {
  const [isLg, setIsLg] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsLg(mql.matches);
    setMounted(true);
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return { isLg: mounted && isLg, mounted };
}

// Product data returned by /api/gottex-demo
interface DemoProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  isVideo: boolean;
  badge?: string;
}

// Scroll calculations use a fixed step count so the section height is stable
// even while the async product fetch is in-flight.
const STEP_COUNT = 4;

interface Step {
  phase: string;
  agent: string;
  agentColor: string;
  title: string;
  description: string;
  tasks: string[];
  phoneContent: React.ReactNode;
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative mx-auto w-[260px] sm:w-[290px] md:w-[320px]"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-6 rounded-[3rem] opacity-40 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(99,102,241,0.35) 0%, rgba(236,72,153,0.18) 60%, transparent 100%)" }}
      />
      {/* Phone bezel */}
      <div className="relative rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-950 p-2.5 shadow-2xl ring-1 ring-white/10">
        {/* Side buttons */}
        <div className="absolute -left-0.5 top-20 w-1 h-8 bg-gray-700 rounded-l-sm" />
        <div className="absolute -left-0.5 top-32 w-1 h-6 bg-gray-700 rounded-l-sm" />
        <div className="absolute -right-0.5 top-24 w-1 h-10 bg-gray-700 rounded-r-sm" />
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[2rem] bg-white overflow-hidden h-[420px] sm:h-[480px] md:h-[530px] relative">
          {children}
        </div>
      </div>
      {/* Home bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-600/60 rounded-full" />
    </motion.div>
  );
}

// ─── Shared UI constants ───────────────────────────────────────────────────────

const STORE_NAME = "LUMA";
const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop&auto=format&q=80",
];
const PRODUCT_NAMES = ["Linen Midi Dress", "Cotton Wrap Top", "Tailored Blazer", "Silk Camisole"];
const PRODUCT_PRICES = ["$185", "$95", "$145", "$120"];

function StoreNav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div className={`flex items-center justify-between px-3 pt-7 pb-2 ${isDark ? "" : "border-b border-gray-100"}`}
      style={isDark ? { background: "linear-gradient(to bottom, rgba(15,17,21,0.95) 0%, rgba(15,17,21,0.8) 100%)" } : undefined}>
      <span className={`text-[11px] font-black tracking-[0.2em] uppercase ${isDark ? "text-white" : "text-gray-900"}`}>{STORE_NAME}</span>
      <div className="flex items-center gap-2">
        <svg className={`w-3.5 h-3.5 ${isDark ? "text-white/70" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <svg className={`w-3.5 h-3.5 ${isDark ? "text-white/70" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
      </div>
    </div>
  );
}

function LazyImg({ src, alt = "", className = "" }: { src: string; alt?: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} loading="lazy" decoding="async" className={className}
      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
      onLoad={(e) => { e.currentTarget.style.opacity = "1"; }}
      onError={(e) => { e.currentTarget.style.display = "none"; }} />
  );
}

// ─── Phone Screens ─────────────────────────────────────────────────────────────
// Unified LUMA storefront that evolves across 4 steps:
//   1. The Trigger  — generic store + Danny's analysis overlay
//   2. The Evolution — storefront transforms to a curated editorial experience
//   3. The Adaptation — product page with optimized content
//   4. The Upsell — smart bundle suggestion at checkout moment

function PhoneScreen1() {
  const signals = [
    { label: "Browsing",  value: "Dresses, minimalist",  conf: 94, color: "#6366f1" },
    { label: "Budget",    value: "Mid-premium · $120–$340", conf: 88, color: "#a855f7" },
    { label: "Style",     value: "Contemporary · Editorial", conf: 96, color: "#ec4899" },
    { label: "Context",   value: "Mobile · First visit",   conf: 79, color: "#3b82f6" },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Store nav */}
      <StoreNav />

      {/* Generic store content — faded / blurred to show it's being analyzed */}
      <div className="relative flex-1 overflow-hidden">
        {/* Blurred generic grid behind the overlay */}
        <div className="absolute inset-0 blur-[2px] opacity-40">
          <div className="grid grid-cols-2 gap-1.5 p-3">
            {PRODUCT_IMAGES.slice(0, 4).map((img, i) => (
              <div key={i} className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                <LazyImg src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Danny's analysis overlay */}
        <div className="absolute inset-0 flex flex-col" style={{ background: "linear-gradient(180deg, rgba(15,17,21,0.92) 0%, rgba(15,17,21,0.97) 100%)" }}>
          {/* Header */}
          <div className="px-4 pt-4 pb-3">
            <div className="flex items-center justify-between mb-3">
              <motion.span
                className="inline-flex items-center gap-1.5 bg-blue-500/15 border border-blue-400/25 rounded-full px-2.5 py-1"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-blue-300 text-[8px] font-bold tracking-widest uppercase">Analyzing</span>
              </motion.span>
              <span className="text-gray-500 text-[8px] font-medium">Danny · The Analyst</span>
            </div>
            <p className="text-white text-[12px] font-bold leading-snug">
              Visitor detected from fashion ad
            </p>
            <div className="flex gap-1.5 mt-2 flex-wrap">
              {["Female · 29", "iPhone", "High Intent"].map((tag) => (
                <span key={tag} className="bg-white/8 border border-white/10 text-white/70 text-[7px] px-2 py-0.5 rounded-full font-medium">{tag}</span>
              ))}
            </div>
          </div>

          {/* Signal cards */}
          <div className="flex-1 px-3 pb-3 space-y-1.5 overflow-hidden">
            <p className="text-[7px] font-bold uppercase tracking-widest text-gray-500 mb-1">Intent Signals</p>
            {signals.map((s, i) => (
              <div key={s.label} className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[8px] text-gray-300 font-medium">{s.label}: <span className="text-white">{s.value}</span></span>
                  <span className="text-[9px] font-black tabular-nums" style={{ color: s.color }}>{s.conf}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${s.color}60, ${s.color})` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${s.conf}%` }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}

            {/* Status */}
            <motion.div
              className="rounded-lg p-2.5 mt-1"
              style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)" }}
              animate={{ borderColor: ["rgba(99,102,241,0.1)", "rgba(99,102,241,0.35)", "rgba(99,102,241,0.1)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-1.5">
                <motion.span className="w-1.5 h-1.5 rounded-full bg-indigo-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
                <p className="text-[8px] font-bold text-indigo-300">Building personalized experience...</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen2({ products: _products }: { products: DemoProduct[] }) {
  return (
    <div className="h-full flex flex-col bg-white">
      <StoreNav />

      {/* Hero banner — curated editorial */}
      <div className="relative h-[130px] sm:h-[150px] md:h-[170px] overflow-hidden">
        <LazyImg src={PRODUCT_IMAGES[0]} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white/60 text-[7px] tracking-widest uppercase font-bold">Curated For You</p>
          <p className="text-white text-[12px] font-black mt-0.5 leading-tight">Contemporary Essentials</p>
          <div className="mt-1.5 inline-block bg-white text-[7px] font-bold text-gray-900 px-3 py-1 rounded-full">
            Explore Collection
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex gap-1.5 px-3 py-2 overflow-hidden">
        {["For You", "Dresses", "Tops", "Blazers"].map((cat, i) => (
          <span key={cat} className={`text-[7px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${i === 0 ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500"}`}>
            {cat}
          </span>
        ))}
      </div>

      {/* Product grid */}
      <div className="flex-1 px-3 pb-2 grid grid-cols-2 gap-2 overflow-hidden">
        {PRODUCT_IMAGES.map((img, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-gray-100 bg-white">
            <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
              <LazyImg src={img} className="w-full h-full object-cover" />
              {i === 0 && (
                <span className="absolute top-1.5 left-1.5 text-[6px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded">New</span>
              )}
              {i === 3 && (
                <span className="absolute top-1.5 left-1.5 text-[6px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded">Trending</span>
              )}
            </div>
            <div className="p-1.5">
              <p className="text-[7px] font-semibold text-gray-800 truncate">{PRODUCT_NAMES[i]}</p>
              <p className="text-[8px] font-bold text-gray-900 mt-0.5">{PRODUCT_PRICES[i]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Personalization indicator */}
      <div className="px-3 pb-2">
        <motion.div
          className="flex items-center justify-center gap-1.5 rounded-full py-1.5 bg-gray-900"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.span className="w-1.5 h-1.5 rounded-full bg-purple-400" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
          <span className="text-white text-[7px] font-bold tracking-wider uppercase">Tailored to Her Style</span>
        </motion.div>
      </div>
    </div>
  );
}

function PhoneScreen3({ products }: { products: DemoProduct[] }) {
  const hero = products[0];
  const heroPrice = hero?.price ? `$${hero.price}` : "$185";
  const heroName = hero?.name ?? "Linen Midi Dress";
  const heroImg = hero?.imageUrl ?? PRODUCT_IMAGES[0];
  const heroIsVideo = hero?.isVideo ?? false;

  return (
    <div className="h-full flex flex-col bg-white">
      <StoreNav variant="dark" />

      {/* Full-bleed product hero */}
      <div className="relative" style={{ height: "48%" }}>
        {heroIsVideo ? (
          <video src={heroImg} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <LazyImg src={heroImg} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Product details */}
      <div className="flex-1 px-3 pb-2 flex flex-col justify-between -mt-4 relative">
        <div>
          <div className="flex items-start justify-between mb-1.5">
            <div>
              <p className="text-[10px] font-bold text-gray-900 tracking-wide">{heroName}</p>
              <p className="text-[7px] text-gray-400 mt-0.5">Sustainable fabric · Relaxed fit</p>
            </div>
            <p className="text-sm font-black text-gray-900">{heroPrice}</p>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-2.5">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-2.5 h-2.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[7px] text-gray-400">4.9 (248)</span>
          </div>

          {/* Color + size selectors */}
          <div className="flex items-center gap-3 mb-2.5">
            <div>
              <p className="text-[6px] text-gray-400 uppercase tracking-wider mb-1">Color</p>
              <div className="flex gap-1">
                {["#d4c5b0","#1a1a1a","#f9a8d4","#c4b5fd"].map((c,i) => (
                  <div key={i} className={`w-5 h-5 rounded-full border-2 ${i===0?"border-gray-900":"border-gray-200"}`} style={{ background: c }} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-[6px] text-gray-400 uppercase tracking-wider mb-1">Size</p>
              <div className="flex gap-1">
                {["XS","S","M","L"].map((s) => (
                  <div key={s} className={`w-6 h-6 rounded flex items-center justify-center text-[7px] font-bold border ${s==="M"?"bg-gray-900 text-white border-gray-900":"border-gray-200 text-gray-500"}`}>{s}</div>
                ))}
              </div>
            </div>
          </div>

          {/* AI-optimized description badge */}
          <motion.div
            className="rounded-lg p-2 mb-2 border border-emerald-100"
            style={{ background: "rgba(16,185,129,0.04)" }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
              <span className="text-[7px] font-bold text-emerald-600 uppercase tracking-wider">AI-Optimized Content</span>
            </div>
            <p className="text-[7px] text-gray-500 leading-relaxed">Editorial photography · Lifestyle copy · Sustainability highlights</p>
          </motion.div>
        </div>

        <button className="w-full text-white text-[9px] font-black py-2.5 rounded-lg tracking-wider uppercase"
          style={{ background: "#0f1115" }}>
          Add to Cart — {heroPrice}
        </button>
      </div>
    </div>
  );
}

function PhoneScreen4({ products }: { products: DemoProduct[] }) {
  const bundleItems = [
    { idx: 0, name: products[0]?.name ?? PRODUCT_NAMES[0], price: "$185", img: products[0]?.imageUrl ?? PRODUCT_IMAGES[0], isVideo: products[0]?.isVideo },
    { idx: 2, name: products[2]?.name ?? PRODUCT_NAMES[2], price: "$145", img: products[2]?.imageUrl ?? PRODUCT_IMAGES[2], isVideo: products[2]?.isVideo },
    { idx: 3, name: products[3]?.name ?? PRODUCT_NAMES[3], price: "$120", img: products[3]?.imageUrl ?? PRODUCT_IMAGES[3], isVideo: products[3]?.isVideo },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      <StoreNav />

      {/* Cart summary header */}
      <div className="px-3 py-2 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-gray-900">Your Cart · 1 item</p>
          <p className="text-[10px] font-bold text-gray-900">$185</p>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Mini cart item */}
        <div className="px-3 py-2.5 flex items-center gap-2.5 border-b border-gray-50">
          <div className="w-12 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0">
            {bundleItems[0].isVideo ? (
              <video src={bundleItems[0].img} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            ) : (
              <LazyImg src={bundleItems[0].img} className="w-full h-full object-cover" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[8px] font-semibold text-gray-800 truncate">{bundleItems[0].name}</p>
            <p className="text-[7px] text-gray-400">Size M · Neutral</p>
          </div>
          <p className="text-[9px] font-bold text-gray-900 shrink-0">{bundleItems[0].price}</p>
        </div>

        {/* AI stylist suggestion */}
        <div className="px-3 py-3">
          <motion.div
            className="rounded-xl border border-indigo-100 p-3 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.04) 0%, rgba(168,85,247,0.04) 100%)" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center">
                <ShoppingBag className="w-2.5 h-2.5 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[8px] font-bold text-gray-800">Donna suggests a bundle</p>
                <p className="text-[6px] text-gray-400">Based on your style profile</p>
              </div>
            </div>

            {/* Bundle products */}
            <div className="flex gap-2 mb-2.5">
              {bundleItems.map((item, i) => (
                <div key={i} className="flex-1 rounded-lg overflow-hidden border border-gray-100 bg-white">
                  <div className="aspect-square relative bg-gray-50">
                    {item.isVideo ? (
                      <video src={item.img} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                    ) : (
                      <LazyImg src={item.img} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="p-1">
                    <p className="text-[6px] text-gray-600 truncate">{item.name}</p>
                    <p className="text-[7px] font-bold text-gray-900">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bundle pricing */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div>
                <p className="text-[7px] text-gray-400 line-through">$450.00</p>
                <p className="text-[10px] font-black text-gray-900">$382.50 <span className="text-[7px] font-medium text-emerald-600">Save 15%</span></p>
              </div>
              <button className="text-white text-[8px] font-bold px-3 py-1.5 rounded-lg" style={{ background: "#0f1115" }}>
                Add Bundle
              </button>
            </div>
          </motion.div>
        </div>

        {/* Session results */}
        <div className="px-3">
          <motion.div
            className="rounded-xl p-3 border border-gray-100"
            style={{ background: "linear-gradient(135deg, #f8f9fc 0%, #f3f0ff 100%)" }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <p className="text-[7px] font-bold text-indigo-600 uppercase tracking-widest mb-2">Session Results</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <p className="text-sm font-black text-indigo-600 leading-tight">+340%</p>
                <p className="text-[6px] text-gray-500 mt-0.5">ROAS</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-black text-emerald-600 leading-tight">$383</p>
                <p className="text-[6px] text-gray-500 mt-0.5">Cart value</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-black text-purple-600 leading-tight">8.2x</p>
                <p className="text-[6px] text-gray-500 mt-0.5">AOV lift</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Steps builder ─────────────────────────────────────────────────────────────
// Called inside useMemo so React nodes are created fresh when products load.

function buildSteps(products: DemoProduct[]): Step[] {
  return [
    {
      phase: "The Trigger",
      agent: "Danny",
      agentColor: "text-blue-400",
      title: "A shopper clicks an ad for premium fashion",
      description:
        "A 29-year-old shopper arrives from a fashion ad. Danny instantly maps her intent signals, browsing history, and purchase context.",
      tasks: ["Maps Intent Signals", "Forecasts Trends", "Identifies Hidden Patterns"],
      phoneContent: <PhoneScreen1 />,
    },
    {
      phase: "The Evolution",
      agent: "Emilia",
      agentColor: "text-purple-400",
      title: "A curated editorial experience generates",
      description:
        "Emilia builds a complete luxury shopping experience — editorial collection, neutral palette, tailored for the shopper's taste.",
      tasks: ["Personalizes UX Layouts", "Adapts Merchandising", "Removes Friction"],
      phoneContent: <PhoneScreen2 products={products} />,
    },
    {
      phase: "The Adaptation",
      agent: "John",
      agentColor: "text-emerald-400",
      title: "Editorial content shifts to match her world",
      description:
        "Product pages shift to an editorial theme — warm photography tones, sustainability copy, lifestyle-driven descriptions.",
      tasks: ["Iterates Creative Assets", "A/B Tests Copy Styles", "Prevents Fatigue"],
      phoneContent: <PhoneScreen3 products={products} />,
    },
    {
      phase: "The Upsell",
      agent: "Donna",
      agentColor: "text-orange-400",
      title: "Smart bundling at the right moment",
      description:
        "Donna suggests complementary pieces at the moment of highest intent — turning a $265 item into a $489 curated bundle.",
      tasks: ["Pairs Products Smartly", "Offers Dynamically", "Optimizes Carts"],
      phoneContent: <PhoneScreen4 products={products} />,
    },
  ];
}

// ─── Main section ──────────────────────────────────────────────────────────────

export default function ScrollDemoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Record<number, number[]>>({});
  const [demoProducts, setDemoProducts] = useState<DemoProduct[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const { isLg } = useIsLg();

  // Fetch real CDN product images from the landing-server proxy.
  useEffect(() => {
    fetch("/api/gottex-demo")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.products)) setDemoProducts(data.products);
      })
      .catch(() => {});
  }, []);

  // Rebuild step JSX whenever products load — STEP_COUNT stays constant.
  const stepsData = useMemo(() => buildSteps(demoProducts), [demoProducts]);

  // Auto-play: advance every 4 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveStep((s) => {
        const next = (s + 1) % STEP_COUNT;
        setCompletedTasks({});
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [isPaused]);

  // Scroll-driven navigation — all screen sizes
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, -rect.top) / (sectionHeight - window.innerHeight);
      if (scrollProgress <= 0 || scrollProgress >= 1) return;

      const stepIndex = Math.min(
        STEP_COUNT - 1,
        Math.floor(scrollProgress * STEP_COUNT)
      );

      setActiveStep(stepIndex);
      setIsPaused(true); // user is scrolling manually

      const stepProgress = (scrollProgress * STEP_COUNT) % 1;
      const taskCount = Math.floor(stepProgress * 4);
      setCompletedTasks((prev) => {
        const newTasks: number[] = [];
        for (let t = 0; t < Math.min(taskCount, 3); t++) newTasks.push(t);
        return { ...prev, [stepIndex]: newTasks };
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToStep = useCallback((i: number) => {
    setActiveStep(i);
    setCompletedTasks({});
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // resume auto-play after 8s
  }, []);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${(STEP_COUNT + 1) * 70}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section header — always visible */}
        <div className="text-center pt-6 pb-4 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-foreground">
            Watch a Storefront{" "}
            <span className="gradient-text">Evolve in Real-Time</span>
          </h2>
          <p className="text-sm text-muted mt-1">Following a shopper from ad click to purchase</p>
        </div>

        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

              {/* Left: Description + step nav */}
              <div className="lg:col-span-4 order-2 lg:order-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="inline-flex items-center gap-2 mb-4 rounded-full px-3 py-1 text-xs font-bold bg-surface border border-border">
                      <span className={stepsData[activeStep].agentColor}>{stepsData[activeStep].agent}</span>
                      <span className="text-muted">is working</span>
                    </div>
                    <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
                      {stepsData[activeStep].phase}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-foreground mb-3">
                      {stepsData[activeStep].title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {stepsData[activeStep].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Step navigation pills */}
                <div className="flex lg:grid lg:grid-cols-2 gap-2 mt-6 overflow-x-auto snap-x snap-mandatory pb-1 scrollbar-hide">
                  {stepsData.map((step, i) => {
                    const agentColors: Record<string, { bg: string; border: string; dot: string }> = {
                      "text-blue-400":    { bg: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.25)",  dot: "#3b82f6" },
                      "text-purple-400":  { bg: "rgba(168,85,247,0.08)",  border: "rgba(168,85,247,0.25)",  dot: "#a855f7" },
                      "text-emerald-400": { bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.25)",  dot: "#34d399" },
                      "text-orange-400":  { bg: "rgba(251,146,60,0.08)",  border: "rgba(251,146,60,0.25)",  dot: "#fb923c" },
                    };
                    const c = agentColors[step.agentColor] ?? agentColors["text-blue-400"];
                    const isActive = i === activeStep;
                    return (
                      <button
                        key={i}
                        onClick={() => goToStep(i)}
                        className="text-left transition-all duration-300 rounded-xl px-3.5 py-3 lg:px-3 lg:py-2.5 border snap-start shrink-0 min-w-[150px] lg:min-w-0 active:scale-95"
                        style={isActive ? { background: c.bg, borderColor: c.border } : { background: "transparent", borderColor: "transparent" }}
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <div className="w-2 h-2 lg:w-1.5 lg:h-1.5 rounded-full shrink-0" style={{ background: isActive ? c.dot : "#d1d5db" }} />
                          <p className="text-[11px] lg:text-[8px] font-black uppercase tracking-wider" style={isActive ? { color: c.dot } : { color: "#9ca3af" }}>{step.phase}</p>
                        </div>
                        <p className="text-[11px] lg:text-[9px] font-medium text-gray-500 pl-3.5 lg:pl-3">{step.agent}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Center: Phone + Terminal attached below */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center gap-3">
                <motion.div
                  className="touch-pan-y"
                  drag={isLg ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_e, info) => {
                    if (Math.abs(info.offset.x) > 50) {
                      if (info.offset.x < 0 && activeStep < STEP_COUNT - 1) {
                        goToStep(activeStep + 1);
                      } else if (info.offset.x > 0 && activeStep > 0) {
                        goToStep(activeStep - 1);
                      }
                    }
                  }}
                >
                <PhoneFrame>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.97, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.02, y: -10 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      {stepsData[activeStep].phoneContent}
                    </motion.div>
                  </AnimatePresence>
                </PhoneFrame>

                {/* Auto-play indicator */}
                <div className="flex items-center gap-2">
                  {stepsData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToStep(i)}
                      className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                      style={{ width: i === activeStep ? 28 : 14 }}
                      aria-label={`Step ${i + 1}`}
                    >
                      <div className={`absolute inset-0 rounded-full ${i <= activeStep ? "bg-primary" : "bg-gray-200"}`} />
                      {i === activeStep && !isPaused && (
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-primary/30 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 4, ease: "linear" }}
                          key={`progress-${activeStep}`}
                        />
                      )}
                    </button>
                  ))}
                </div>
                </motion.div>
              </div>

              {/* Mobile: expanded agent task panel */}
              <div className="lg:hidden order-3 rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3 w-full">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-green-400 shrink-0"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className={`text-xs font-bold ${stepsData[activeStep].agentColor}`}>{stepsData[activeStep].agent}</span>
                  <span className="text-[10px] text-muted">{stepsData[activeStep].phase}</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1.5"
                  >
                    {stepsData[activeStep].tasks.map((task, t) => {
                      const isCompleted = completedTasks[activeStep]?.includes(t) ?? false;
                      return (
                        <div
                          key={task}
                          className={`flex items-center gap-2 text-xs ${
                            isCompleted ? "text-emerald-500" : "text-gray-600"
                          }`}
                        >
                          <span className="shrink-0 text-[10px]">{isCompleted ? "✓" : "·"}</span>
                          <span>{task}</span>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Agent Activity card — desktop only */}
              <div className="lg:col-span-3 order-3 hidden lg:block">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 overflow-hidden">
                  <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-gray-100">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">Agent Activity</span>
                  </div>

                  <div className="space-y-2">
                    {stepsData.map((step, i) => {
                      const isActive = i === activeStep;
                      const isPastStep = i < activeStep;
                      const isFuture = i > activeStep;
                      const agentDotColors: Record<string, string> = {
                        "text-blue-400": "#3b82f6",
                        "text-purple-400": "#a855f7",
                        "text-emerald-400": "#34d399",
                        "text-orange-400": "#fb923c",
                      };
                      const dotColor = agentDotColors[step.agentColor] ?? "#6366f1";

                      return (
                        <motion.div
                          key={step.phase}
                          animate={{ opacity: isPastStep ? 0.45 : isFuture ? 0.2 : 1 }}
                          transition={{ duration: 0.35 }}
                          className="rounded-lg overflow-hidden"
                          style={isActive ? { background: `${dotColor}08`, borderLeft: `2px solid ${dotColor}`, paddingLeft: "6px" } : { paddingLeft: "8px" }}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: isFuture ? "#e5e7eb" : dotColor }} />
                            <span className="text-[9px] font-bold" style={{ color: isActive ? dotColor : isFuture ? "#d1d5db" : "#9ca3af" }}>{step.agent}</span>
                            <span className={`text-[8px] ${isFuture ? "text-gray-200" : "text-gray-400"}`}>· {step.phase}</span>
                          </div>
                          <div className="pl-3 space-y-0.5">
                            {step.tasks.map((task, t) => {
                              const isCompleted = isPastStep || (isActive && (completedTasks[i]?.includes(t) ?? false));
                              const isCurrentTask = isActive && t === (completedTasks[i]?.length ?? 0) && !isCompleted;
                              return (
                                <div
                                  key={task}
                                  className={`flex items-center gap-1.5 ${
                                    isFuture ? "text-gray-200" : isCompleted ? "text-emerald-500" : isActive ? "text-gray-600" : "text-gray-400"
                                  }`}
                                >
                                  <span className="shrink-0 text-[9px]">{isCompleted ? "✓" : "·"}</span>
                                  <span className="text-[9px] leading-tight">{task}</span>
                                  {isCurrentTask && (
                                    <motion.span
                                      className="w-1 h-1 rounded-full shrink-0"
                                      style={{ background: dotColor }}
                                      animate={{ opacity: [1, 0, 1] }}
                                      transition={{ duration: 0.75, repeat: Infinity }}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}