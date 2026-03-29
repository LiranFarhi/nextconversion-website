"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ─── 8 Demographic Personas ───────────────────────────────────────────────────

interface Persona {
  id: string;
  demo: string;
  intent: string;
  gradient: string;
  products: string[];
  pronoun: string;
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
  },
  {
    id: "vintage",
    demo: "30M · Mobile",
    intent: "Vintage Accessories",
    gradient: "from-cyan-500 to-blue-600",
    products: [
      "from-cyan-200 to-blue-300",
      "from-blue-100 to-cyan-200",
      "from-sky-200 to-blue-300",
      "from-cyan-100 to-blue-200",
    ],
    pronoun: "him",
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
  },
];

// ─── Persona Media Slot ───────────────────────────────────────────────────────
// Renders a CDN image or a muted looping video (.mp4), falling back to a
// gradient placeholder while the API call is in-flight or unavailable.

function PersonaMediaSlot({
  url,
  gradient,
  isVideo,
}: {
  url?: string;
  gradient: string;
  isVideo?: boolean;
}) {
  if (!url) {
    return <div className={`aspect-square rounded-lg bg-gradient-to-b ${gradient}`} />;
  }
  if (isVideo) {
    return (
      <video
        src={url}
        autoPlay
        muted
        loop
        playsInline
        className="aspect-square rounded-lg object-cover w-full"
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
      className="aspect-square rounded-lg object-cover w-full"
    />
  );
}

// ─── Persona Card ─────────────────────────────────────────────────────────────

function PersonaCard({
  persona,
  cdnImages,
}: {
  persona: Persona;
  cdnImages?: string[];
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white w-full">
      {/* Gradient header band */}
      <div className={`bg-gradient-to-r ${persona.gradient} px-3 py-3`}>
        <span className="bg-white/25 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
          {persona.demo}
        </span>
        <p className="text-white text-[10px] font-bold mt-1.5 uppercase tracking-wider leading-tight">
          {persona.intent}
        </p>
      </div>
      {/* 2×2 product grid — real CDN images when available, gradients as fallback */}
      <div className="bg-white p-2 grid grid-cols-2 gap-1.5">
        {persona.products.map((g, i) => {
          const url = cdnImages?.[i];
          const isVideo = typeof url === "string" && (url.endsWith(".mp4") || url.includes(".mp4?"));
          return (
            <PersonaMediaSlot key={i} url={url} gradient={g} isVideo={isVideo} />
          );
        })}
      </div>
      {/* Personalized badge */}
      <div className="bg-gray-50 px-3 py-2 border-t border-gray-100">
        <span className="text-[10px] text-primary font-semibold">
          ✓ Personalized for {persona.pronoun}
        </span>
      </div>
    </div>
  );
}

// ─── 3-Card Persona Carousel ──────────────────────────────────────────────────

function PersonaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  // Map of personaId → up to 4 CDN image/video URLs from the landing-server.
  // Populated asynchronously; gradients show until the fetch resolves.
  const [cdnImages, setCdnImages] = useState<Record<string, string[]>>({});

  // Fetch persona-specific CDN images once on mount.
  useEffect(() => {
    fetch("/api/persona-products")
      .then((r) => r.ok ? r.json() : {})
      .then((data: Record<string, string[]>) => setCdnImages(data))
      .catch(() => {}); // silent — gradient fallback stays visible
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

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3-card display */}
      <div className="flex items-center justify-center gap-2 overflow-hidden">
        {([-1, 0, 1] as const).map((offset) => {
          const idx = (activeIndex + offset + personas.length) % personas.length;
          const isCenter = offset === 0;
          const persona = personas[idx];
          return (
            <motion.div
              key={`${idx}-${offset}`}
              animate={{
                scale: isCenter ? 1 : 0.88,
                opacity: isCenter ? 1 : 0.45,
                filter: isCenter ? "blur(0px)" : "blur(3px)",
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`flex-shrink-0 w-[160px] sm:w-[180px] ${isCenter ? "" : "pointer-events-none"}`}
            >
              <PersonaCard
                persona={persona}
                cdnImages={cdnImages[persona.id]}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/30 transition-all shadow-sm"
          aria-label="Previous persona"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-xs font-medium text-muted tabular-nums">
          {activeIndex + 1} / {personas.length}
        </span>
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

          {/* Headline — staggered word-by-word reveal */}
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
              className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
            >
              Stop sending laser-focused ad traffic to one-size-fits-all websites.
              NextConversion is the agent-led engine that turns every click into a
              personalized, real-time micro-storefront that optimizes itself 24/7.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6, ease: "easeOut" }}
            >
              <motion.button
                onClick={onBookDemo}
                className="btn-primary rounded-xl bg-primary px-8 py-4 text-white font-semibold text-base animate-pulse-glow inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Deploy Your E-Commerce AI Agentic Work Force
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button
                onClick={onBookDemo}
                className="btn-secondary rounded-xl border border-border px-8 py-4 text-foreground font-semibold text-base bg-white"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Book a Demo
              </motion.button>
            </motion.div>
          </div>

          {/* Split screen: Legacy vs Adaptive */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
          >
            {/* Left: Legacy */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <h3 className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Legacy Website — One page for everyone
                </h3>
              </div>
              <LegacySite />
            </div>

            {/* Right: 8-persona carousel */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Endless Curated Storefronts
                </h3>
              </div>
              <PersonaCarousel />
            </div>
          </motion.div>

          {/* Early access note */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <p className="text-xs text-muted">
              Limited spots for launch cohort &middot; No credit card required
            </p>
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