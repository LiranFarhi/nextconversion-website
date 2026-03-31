"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

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
      className="relative mx-auto w-[290px] sm:w-[320px]"
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
        <div className="rounded-[2rem] bg-white overflow-hidden h-[530px] relative">
          {children}
        </div>
      </div>
      {/* Home bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-600/60 rounded-full" />
    </motion.div>
  );
}

// ─── Gottex Product Card ───────────────────────────────────────────────────────

function GottexProductCard({
  name,
  price,
  collection,
  gradient,
  badge,
  imageUrl,
  isVideo,
}: {
  name: string;
  price: string;
  collection: string;
  gradient: string;
  badge?: string;
  imageUrl?: string;
  isVideo?: boolean;
}) {
  // Parse numeric price for strikethrough calculation
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, "")) || 39.99;
  const beforePrice = `$${(numericPrice * 1.25).toFixed(2)}`;

  return (
    <div className="rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm flex flex-col">
      <div className={`aspect-[3/4] relative bg-gradient-to-b ${gradient}`}>
        {imageUrl && !isVideo && (
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        )}
        {imageUrl && isVideo && (
          <video
            src={imageUrl}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {badge && (
          <div className="absolute top-1.5 left-1.5 text-[6px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded z-10"
            style={{ background: "#0A886F", color: "#fff" }}>
            {badge}
          </div>
        )}
        {!imageUrl && (
          <div className="absolute bottom-1.5 left-1.5 right-1.5 text-[7px] font-bold tracking-[0.15em] text-white/80 uppercase">
            {collection}
          </div>
        )}
      </div>
      <div className="p-1.5 flex flex-col gap-0.5 flex-1">
        <p className="text-[7px] font-bold text-gray-800 leading-tight line-clamp-2">{name}</p>
        {/* Star rating */}
        <div className="flex items-center gap-0.5">
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-2 h-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[6px] text-gray-400">(106)</span>
        </div>
        {/* Price */}
        <div className="flex items-center gap-1">
          <span className="text-[8px] font-black text-gray-900">{price}</span>
          <span className="text-[6px] text-gray-400 line-through">{beforePrice}</span>
        </div>
        {/* Color dots */}
        <div className="flex gap-0.5 mt-0.5">
          {["#62B1B4","#123840","#f9a8d4","#fcd34d","#d1d5db"].map((c,i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full border ${i===0?"border-gray-400":"border-transparent"}`} style={{ background: c }} />
          ))}
        </div>
        {/* Add to bag */}
        <button className="w-full mt-1 py-1 rounded text-[7px] font-bold text-white text-center"
          style={{ background: "#0A886F" }}>
          Add to Bag
        </button>
      </div>
    </div>
  );
}

// ─── Phone Screens ─────────────────────────────────────────────────────────────

function PhoneScreen1() {
  const signals = [
    { label: "Past browsing",    icon: "👗", value: "Dresses, minimalist fashion",    conf: 94, color: "#62B1B4" },
    { label: "Price sensitivity",icon: "💳", value: "Mid-premium · $120–$340",        conf: 88, color: "#a855f7" },
    { label: "Trend signal",     icon: "✦",  value: "Contemporary · Editorial",       conf: 96, color: "#ec4899" },
    { label: "Device context",   icon: "📱", value: "Mobile · High-scroll velocity",  conf: 79, color: "#6366f1" },
  ];

  return (
    <div className="h-full flex flex-col" style={{ background: "#0a0a14" }}>
      {/* Header with ambient glow */}
      <div className="relative px-4 py-3 pt-8 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d0b2e 0%, #1e1b4b 50%, #0d0b2e 100%)" }}>
        {/* Radial pulse glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.25) 0%, transparent 70%)" }}
        />
        <div className="relative flex items-center justify-between mb-2">
          <motion.span
            className="inline-flex items-center gap-1 bg-green-400/20 border border-green-400/30 rounded-full px-2 py-0.5"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-green-300 text-[7px] font-bold tracking-widest uppercase">Live Analysis</span>
          </motion.span>
          <span className="text-indigo-400/60 text-[7px] tracking-wider">Danny</span>
        </div>
        <p className="relative text-white text-[13px] font-black leading-tight mb-2">
          &ldquo;Premium Fashion Edit&rdquo;
        </p>
        <div className="relative flex gap-1.5 flex-wrap">
          {["Female · 29", "Mobile", "High intent", "First visit"].map((tag) => (
            <span key={tag} className="bg-white/8 border border-white/10 text-white/75 text-[7px] px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      {/* Confidence meters */}
      <div className="flex-1 px-3 py-2.5 space-y-2" style={{ background: "#0a0a14" }}>
        <div className="flex items-center justify-between mb-1">
          <p className="text-[7px] font-bold uppercase tracking-widest text-gray-600">Intent Signals</p>
          <span className="text-[7px] text-gray-600">4 signals mapped</span>
        </div>
        {signals.map((s, i) => (
          <div key={s.label} className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">{s.icon}</span>
                <div>
                  <div className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</div>
                  <div className="text-[8px] text-gray-200 leading-tight">{s.value}</div>
                </div>
              </div>
              <span className="text-[9px] font-black tabular-nums shrink-0" style={{ color: s.color }}>{s.conf}%</span>
            </div>
            <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${s.color}80, ${s.color})` }}
                initial={{ width: 0 }}
                animate={{ width: `${s.conf}%` }}
                transition={{ delay: i * 0.12, duration: 0.9, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}

        {/* AI generating */}
        <motion.div
          className="rounded-xl p-2.5 mt-1 relative overflow-hidden border"
          style={{ background: "rgba(18,56,64,0.4)", borderColor: "rgba(98,177,180,0.2)" }}
          animate={{ borderColor: ["rgba(98,177,180,0.15)", "rgba(98,177,180,0.5)", "rgba(98,177,180,0.15)"] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#62B1B4" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <p className="text-[9px] font-bold" style={{ color: "#62B1B4" }}>Generating personalized storefront</p>
          </div>
          <div className="flex gap-1 flex-wrap">
            {["Editorial fashion", "Dress focus", "Neutral palette", "Mobile layout"].map((tag) => (
              <span key={tag} className="text-[6.5px] rounded px-1.5 py-0.5 font-medium"
                style={{ background: "rgba(98,177,180,0.15)", color: "#62B1B4", border: "1px solid rgba(98,177,180,0.2)" }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}


const MOBILE_STOREFRONT_PRODUCTS = [
  { name: "Linen Midi Dress", price: "$185", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop&auto=format&q=80", badge: "New" },
  { name: "Cotton Wrap Top", price: "$95", img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&h=400&fit=crop&auto=format&q=80" },
  { name: "Tailored Blazer", price: "$145", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop&auto=format&q=80" },
  { name: "Silk Camisole", price: "$120", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop&auto=format&q=80", badge: "Trending" },
  { name: "Linen Midi Dress", price: "$185", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop&auto=format&q=80" },
  { name: "Cotton Wrap Top", price: "$95", img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&h=400&fit=crop&auto=format&q=80" },
];

function MobileStorefrontContent() {
  return (
    <div className="bg-white" style={{ width: "100%" }}>
      {/* Hero banner */}
      <div className="relative overflow-hidden" style={{ height: "160px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=300&fit=crop&auto=format&q=80" alt="" className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white/70 text-[7px] tracking-widest uppercase">New Collection</p>
          <p className="text-white text-[11px] font-bold mt-0.5">Contemporary Essentials</p>
          <div className="mt-1.5 inline-block bg-white text-[7px] font-bold text-stone-900 px-2.5 py-1 rounded">
            Shop Now
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex gap-1.5 px-3 py-2.5 overflow-hidden">
        {["All", "Dresses", "Tops", "Trousers", "Outerwear"].map((cat, i) => (
          <span key={cat} className={`text-[7px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${i === 0 ? "bg-stone-900 text-white" : "bg-gray-100 text-gray-600"}`}>
            {cat}
          </span>
        ))}
      </div>

      {/* Product grid */}
      <div className="px-3 pb-3 grid grid-cols-2 gap-2">
        {MOBILE_STOREFRONT_PRODUCTS.map((p, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-gray-100">
            <div className="aspect-[3/4] relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" decoding="async"
                onError={(e) => { e.currentTarget.style.display = "none"; }} />
              {p.badge && (
                <span className="absolute top-1.5 left-1.5 text-[6px] font-bold bg-stone-900 text-white px-1.5 py-0.5 rounded">
                  {p.badge}
                </span>
              )}
            </div>
            <div className="p-1.5">
              <p className="text-[7px] font-medium text-gray-800 truncate">{p.name}</p>
              <p className="text-[8px] font-bold text-gray-900 mt-0.5">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneScreen2({ products: _products }: { products: DemoProduct[] }) {
  return (
    <div className="h-full overflow-hidden relative bg-white">
      {/* Slow scroll through the CSS-built mobile storefront */}
      <motion.div
        className="absolute inset-x-0 top-0"
        animate={{ y: [0, -180, -180, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.7, 1] }}
      >
        <MobileStorefrontContent />
        {/* Repeat so scroll never hits blank space */}
        <MobileStorefrontContent />
      </motion.div>

      {/* Top teal nav bar overlay */}
      <div className="absolute top-0 inset-x-0 h-8 flex items-center justify-between px-3 z-10"
        style={{ background: "linear-gradient(to bottom, rgba(18,56,64,0.92) 0%, transparent 100%)" }}>
        <span className="text-white text-[9px] font-black tracking-widest uppercase">LUMA</span>
        <div className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <svg className="w-3 h-3 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </div>
      </div>

      {/* Bottom scrim */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, transparent 100%)" }}
      />
      {/* Floating "Curated for Her" pill */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.45 }}
      >
        <span
          className="inline-flex items-center gap-1.5 text-white text-[8px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-xl"
          style={{ background: "#123840" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
          Curated Just for Her
        </span>
      </motion.div>
    </div>
  );
}

function PhoneScreen3({ products }: { products: DemoProduct[] }) {
  const hero = products[0];
  const heroPrice = hero?.price ? `$${hero.price}` : "$265";
  const heroName = hero?.name ?? "Linen Midi Dress";

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Full-bleed hero image — 55% of screen height */}
      <div className="relative" style={{ height: "55%" }}>
        {hero?.imageUrl && !hero.isVideo && (
          <img src={hero.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
        )}
        {hero?.imageUrl && hero.isVideo && (
          <video src={hero.imageUrl} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        )}
        {!hero?.imageUrl && (
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,#fda4af 0%,#f43f5e 40%,#9f1239 75%,#4c0519 100%)" }} />
        )}
        {/* Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        {/* Top badge */}
        <div className="absolute top-8 left-3 right-3 flex items-center justify-between">
          <span className="text-white/80 text-[10px] font-bold tracking-[0.25em] uppercase">NEW IN</span>
          <span className="bg-rose-600 text-white text-[7px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            {hero?.badge ?? "New Drop"}
          </span>
        </div>
        {/* Bottom text */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white/60 text-[7px] font-bold tracking-widest uppercase mb-0.5">New Collection</p>
          <p className="text-white text-base font-black leading-tight">{heroName}</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-2.5 h-2.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-[8px]">4.9 · 248 reviews</span>
          </div>
        </div>
      </div>

      {/* Product info */}
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-[9px] font-bold tracking-widest uppercase text-gray-800">{heroName}</p>
              <p className="text-[8px] text-gray-400 mt-0.5">Sustainable fabric · Tummy support panel</p>
            </div>
            <p className="text-base font-black text-gray-900">{heroPrice}</p>
          </div>
          {/* Colour dots */}
          <div className="flex gap-1.5 mb-3">
            {["#fda4af","#f9a8d4","#c4b5fd","#6ee7b7","#fcd34d"].map((c,i) => (
              <div key={i} className={`w-4 h-4 rounded-full border-2 ${i===0?"border-gray-900 scale-110":"border-transparent"}`} style={{ background: c }} />
            ))}
          </div>
          {/* Size selector */}
          <p className="text-[7px] text-gray-400 mb-1.5 uppercase tracking-wider">Select Size</p>
          <div className="flex gap-1.5 mb-3">
            {["XS","S","M","L","XL"].map((s) => (
              <div key={s} className={`w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-bold border ${s==="M"?"bg-gray-900 text-white border-gray-900":"border-gray-200 text-gray-600"}`}>{s}</div>
            ))}
          </div>
        </div>
        <button className="w-full text-white text-[10px] font-black py-2.5 rounded-xl tracking-wider uppercase shadow-lg"
          style={{ background: "linear-gradient(135deg,#e11d48,#9f1239)" }}>
          Add to Cart — {heroPrice}
        </button>
      </div>
    </div>
  );
}

const BUNDLE_FALLBACKS = [
  { bg: "linear-gradient(160deg,#fda4af 0%,#f43f5e 60%,#9f1239 100%)", label: "Linen Midi Dress"  },
  { bg: "linear-gradient(160deg,#fcd34d 0%,#f97316 60%,#c2410c 100%)", label: "Cotton Cover-Up"   },
  { bg: "linear-gradient(160deg,#c4b5fd 0%,#a78bfa 60%,#6d28d9 100%)", label: "Silk Sarong"       },
];

function PhoneScreen4({ products }: { products: DemoProduct[] }) {
  // Pick products 0, 2, 3 for the bundle (skip index 1 to vary imagery)
  const bundleProducts = [products[0], products[2], products[3]];

  return (
    <div className="h-full flex flex-col">
      {/* Chat header */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-600 px-3 py-2.5 pt-7 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <ShoppingBag className="w-3.5 h-3.5 text-white" strokeWidth={1.75} />
        </div>
        <div>
          <p className="text-white text-[10px] font-bold">Donna — Your AI Stylist</p>
          <p className="text-white/70 text-[8px]">Here to help you look amazing</p>
        </div>
      </div>
      {/* Chat body */}
      <div className="flex-1 p-3 space-y-2.5 bg-gray-50">
        {/* Donna's message */}
        <div className="bg-white rounded-2xl rounded-tl-none p-2.5 shadow-sm max-w-[90%] border border-gray-100">
          <p className="text-[9px] text-gray-700 leading-relaxed">
            Love the Linen Midi Dress choice! I noticed you&apos;ve been browsing editorial fashion. Here&apos;s a bundle that completes the look:
          </p>
        </div>

        {/* Bundle suggestion */}
        <div className="rounded-xl border border-orange-100 bg-white p-2.5 shadow-sm">
          <p className="text-[9px] font-bold text-gray-800 mb-2 uppercase tracking-wider">Complete the Look</p>
          <div className="flex gap-1.5 mb-2.5">
            {BUNDLE_FALLBACKS.map((fb, i) => {
              const p = bundleProducts[i];
              return (
                <div key={i} className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative shadow-sm">
                  {p?.imageUrl && !p.isVideo && (
                    <img src={p.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  {p?.imageUrl && p.isVideo && (
                    <video src={p.imageUrl} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  {!p?.imageUrl && (
                    <div className="absolute inset-0" style={{ background: fb.bg }} />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex gap-0.5 mb-2 flex-wrap">
            {BUNDLE_FALLBACKS.map((fb, i) => (
              <span key={i} className="flex items-center gap-0.5">
                {i > 0 && <span className="text-[7px] text-gray-400">+</span>}
                <span className="text-[7px] text-gray-500">
                  {bundleProducts[i]?.name ?? fb.label}
                </span>
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] text-gray-400 line-through">$575.00</p>
              <p className="text-xs font-bold text-orange-600">$488.75 <span className="text-[8px] font-normal text-orange-400">Save 15%</span></p>
            </div>
            <button className="bg-orange-500 text-white text-[9px] font-bold px-3 py-1.5 rounded-lg">
              Add Bundle
            </button>
          </div>
        </div>

        {/* Session results */}
        <div className="rounded-xl p-2.5 border border-indigo-100 overflow-hidden relative"
          style={{ background: "linear-gradient(135deg,#eef2ff 0%,#faf5ff 100%)" }}>
          <p className="text-[8px] font-bold text-indigo-700 uppercase tracking-wider mb-2">✦ Session Results</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-lg p-2 shadow-sm text-center">
              <p className="text-lg font-black text-indigo-600 leading-tight">+340%</p>
              <p className="text-[7px] text-gray-500 mt-0.5">ROAS lift</p>
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm text-center">
              <p className="text-lg font-black text-emerald-600 leading-tight">$489</p>
              <p className="text-[7px] text-gray-500 mt-0.5">Cart (was $59)</p>
            </div>
          </div>
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

  // Scroll-driven navigation (works alongside auto-play)
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

  const goToStep = (i: number) => {
    setActiveStep(i);
    setCompletedTasks({});
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // resume auto-play after 8s
  };

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${(STEP_COUNT + 1) * 100}vh` }}
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
              <div className="lg:col-span-4 order-3 lg:order-1 min-w-0">
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
                <div className="grid grid-cols-2 gap-2 mt-6">
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
                        className="text-left transition-all duration-300 rounded-xl px-3 py-2 border"
                        style={isActive ? { background: c.bg, borderColor: c.border } : { background: "transparent", borderColor: "transparent" }}
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: isActive ? c.dot : "#d1d5db" }} />
                          <p className="text-[8px] font-black uppercase tracking-wider" style={isActive ? { color: c.dot } : { color: "#9ca3af" }}>{step.phase}</p>
                        </div>
                        <p className="text-[9px] font-medium text-gray-500 pl-3">{step.agent}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Center: Phone + Terminal attached below */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center gap-3">
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
              </div>

              {/* Right: Agent Activity card */}
              <div className="lg:col-span-3 order-2 lg:order-3">
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