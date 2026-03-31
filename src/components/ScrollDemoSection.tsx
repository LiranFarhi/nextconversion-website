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
      className="relative mx-auto w-[260px] sm:w-[280px]"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Phone bezel */}
      <div className="rounded-[2.5rem] bg-gray-900 p-2.5 shadow-2xl ring-1 ring-white/5">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[2rem] bg-white overflow-hidden h-[480px] relative">
          {children}
        </div>
      </div>
      {/* Home bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full" />
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
  return (
    <div className="rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm">
      <div className={`aspect-[3/4] relative ${imageUrl ? "" : `bg-gradient-to-b ${gradient}`}`}>
        {imageUrl && !isVideo && (
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
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
          <div className="absolute top-1.5 left-1.5 bg-white/80 text-[7px] font-bold tracking-wider text-gray-700 uppercase px-1.5 py-0.5 rounded z-10">
            {badge}
          </div>
        )}
        {!imageUrl && (
          <div className="absolute bottom-1.5 left-1.5 right-1.5 text-[7px] font-bold tracking-[0.15em] text-white/80 uppercase">
            {collection}
          </div>
        )}
      </div>
      <div className="p-1.5">
        <p className="text-[8px] font-bold tracking-widest uppercase text-gray-800 leading-tight">{name}</p>
        <p className="text-[8px] text-gray-500 mt-0.5">{price}</p>
        <div className="flex gap-0.5 mt-1">
          {["XS", "S", "M", "L"].map((s) => (
            <span
              key={s}
              className="w-3.5 h-3.5 rounded-full border border-gray-200 text-[6px] flex items-center justify-center text-gray-500"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Phone Screens ─────────────────────────────────────────────────────────────

function PhoneScreen1() {
  return (
    <div className="h-full flex flex-col">
      {/* Header — ad detection */}
      <div className="bg-gradient-to-r from-slate-800 to-indigo-900 px-4 py-5 pt-8">
        <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest mb-1">
          AD CLICK DETECTED
        </p>
        <p className="text-white text-xs font-bold leading-tight mb-1">
          &ldquo;Spring Resort Swimwear&rdquo;
        </p>
        <div className="flex gap-1.5 mt-2">
          <span className="bg-white/15 text-white/80 text-[8px] px-2 py-0.5 rounded-full">Female, 32</span>
          <span className="bg-white/15 text-white/80 text-[8px] px-2 py-0.5 rounded-full">Mobile</span>
          <span className="bg-white/15 text-white/80 text-[8px] px-2 py-0.5 rounded-full">High intent</span>
        </div>
      </div>
      {/* Signal cards */}
      <div className="flex-1 p-3 space-y-2 bg-gray-50">
        {[
          { label: "Past browsing", value: "One-piece suits, resort wear", color: "bg-blue-50 text-blue-700 border-blue-100" },
          { label: "Price sensitivity", value: "Premium ($200–$400)", color: "bg-purple-50 text-purple-700 border-purple-100" },
          { label: "Trend signal", value: "Riviera, Mediterranean resort", color: "bg-rose-50 text-rose-700 border-rose-100" },
        ].map((s) => (
          <div key={s.label} className={`rounded-lg p-2.5 border ${s.color}`}>
            <p className="text-[8px] font-bold uppercase tracking-wider opacity-70 mb-0.5">{s.label}</p>
            <p className="text-[10px] font-medium">{s.value}</p>
          </div>
        ))}
        <div className="rounded-lg bg-indigo-600 p-2.5 text-center">
          <p className="text-white text-[9px] font-bold">Danny is mapping intent signals...</p>
        </div>
      </div>
    </div>
  );
}

// Static fallback card data for PhoneScreen2 when products haven't loaded
const FALLBACK_CARDS = [
  { name: "Riviera One-Piece", price: "$285", collection: "Resort '26", gradient: "from-rose-200 to-pink-300", badge: "New" },
  { name: "Santorini Bikini",  price: "$195", collection: "Resort '26", gradient: "from-orange-100 to-amber-200", badge: undefined },
  { name: "Cannes Cover-Up",   price: "$165", collection: "New In",      gradient: "from-pink-100 to-rose-200",   badge: undefined },
  { name: "Nice Sarong",       price: "$125", collection: "Accessories", gradient: "from-orange-100 to-amber-200", badge: undefined },
];

function PhoneScreen2({ products }: { products: DemoProduct[] }) {
  return (
    <div className="h-full flex flex-col">
      {/* Gottex brand header */}
      <div className="bg-white px-3 py-2 pt-7 flex items-center justify-between border-b border-gray-100">
        <span className="text-[11px] font-bold tracking-[0.2em] text-gray-800 uppercase">Gottex</span>
        <span className="text-[8px] text-rose-500 font-semibold tracking-wider uppercase">Resort &apos;26</span>
      </div>
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-rose-50 to-coral-50 px-3 py-2.5 border-b border-rose-100/50"
        style={{ background: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)" }}>
        <p className="text-[9px] font-bold tracking-widest uppercase text-rose-400 mb-0.5">Spring Resort Collection</p>
        <p className="text-xs font-bold text-gray-800 leading-snug">Vibrant styles for the modern woman</p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="bg-rose-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full">Personalized for You</span>
          <span className="text-[8px] text-rose-400">Women 25–35</span>
        </div>
      </div>
      {/* Product grid */}
      <div className="flex-1 p-2.5 overflow-hidden">
        <div className="grid grid-cols-2 gap-2">
          {FALLBACK_CARDS.map((card, i) => (
            <GottexProductCard
              key={card.name}
              name={products[i]?.name ?? card.name}
              price={products[i]?.price ? `$${products[i].price}` : card.price}
              collection={card.collection}
              gradient={card.gradient}
              badge={products[i]?.badge ?? card.badge}
              imageUrl={products[i]?.imageUrl}
              isVideo={products[i]?.isVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneScreen3({ products }: { products: DemoProduct[] }) {
  const hero = products[0];
  return (
    <div className="h-full flex flex-col">
      {/* Brand header */}
      <div className="bg-white px-3 py-2 pt-7 flex items-center justify-between border-b border-gray-100">
        <span className="text-[11px] font-bold tracking-[0.2em] text-gray-800 uppercase">Gottex</span>
        <span className="text-[8px] text-gray-500">Resort &apos;26</span>
      </div>
      {/* Editorial product hero */}
      <div className="relative">
        <div className="h-40 relative overflow-hidden">
          {hero?.imageUrl && !hero.isVideo && (
            <img
              src={hero.imageUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {hero?.imageUrl && hero.isVideo && (
            <video
              src={hero.imageUrl}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {!hero?.imageUrl && (
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, #e11d48 0%, #9f1239 50%, #4c0519 100%)" }}
            />
          )}
          {/* Gradient overlay so text stays readable over photos */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <p className="text-white/70 text-[8px] font-bold tracking-widest uppercase mb-0.5">Riviera Collection</p>
            <p className="text-white text-sm font-bold leading-tight">
              {hero?.name ?? "RIVIERA ONE-PIECE"}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-amber-300 text-[10px]">★★★★★</span>
              <span className="text-white/60 text-[8px]">4.9</span>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-rose-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          {hero?.badge ?? "New"}
        </div>
      </div>
      {/* Product details */}
      <div className="flex-1 p-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-800">
              {hero?.name ?? "Riviera One-Piece"}
            </p>
            <p className="text-[9px] text-gray-500 mt-0.5">Sustainable fabric · Tummy support</p>
          </div>
          <p className="text-sm font-bold text-gray-900">
            {hero?.price ? `$${hero.price}` : "$285"}
          </p>
        </div>
        {/* Size selector */}
        <div>
          <p className="text-[8px] text-gray-500 mb-1 uppercase tracking-wider">Select Size</p>
          <div className="flex gap-1.5">
            {["XS", "S", "M", "L", "XL"].map((s) => (
              <div
                key={s}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-medium border transition-colors ${
                  s === "M" ? "bg-rose-600 text-white border-rose-600" : "border-gray-200 text-gray-600"
                }`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <button className="w-full bg-gray-900 text-white text-[10px] font-bold py-2 rounded-lg tracking-wider uppercase">
          Add to Cart — {hero?.price ? `$${hero.price}` : "$285"}
        </button>
      </div>
    </div>
  );
}

const BUNDLE_FALLBACKS = [
  { gradient: "from-rose-200 to-pink-300",   label: "Riviera One-Piece" },
  { gradient: "from-orange-100 to-amber-200", label: "Cannes Cover-Up" },
  { gradient: "from-amber-100 to-yellow-200", label: "Nice Sarong" },
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
            Love the Riviera One-Piece choice! I noticed you&apos;ve been browsing resort wear. Here&apos;s a bundle that completes the look:
          </p>
        </div>

        {/* Bundle suggestion */}
        <div className="rounded-xl border border-orange-200 bg-white p-2.5 shadow-sm">
          <p className="text-[9px] font-bold text-gray-800 mb-2 uppercase tracking-wider">Complete the Look</p>
          <div className="flex gap-1.5 mb-2.5">
            {BUNDLE_FALLBACKS.map((fb, i) => {
              const p = bundleProducts[i];
              return (
                <div key={i} className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 relative">
                  {p?.imageUrl && !p.isVideo && (
                    <img src={p.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  {p?.imageUrl && p.isVideo && (
                    <video src={p.imageUrl} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  {!p?.imageUrl && (
                    <div className={`absolute inset-0 bg-gradient-to-b ${fb.gradient}`} />
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

        {/* Session result */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-2.5 border border-primary/10">
          <p className="text-[9px] font-bold text-gray-800 mb-1.5">Session Results</p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-base font-bold text-primary leading-tight">+340%</p>
              <p className="text-[8px] text-muted">ROAS improvement</p>
            </div>
            <div>
              <p className="text-base font-bold text-success leading-tight">$489</p>
              <p className="text-[8px] text-muted">Cart value (was $59)</p>
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
      title: "A shopper clicks an ad for Gottex Resort Wear",
      description:
        "A 32-year-old shopper arrives from a resort wear ad. Danny instantly maps her intent signals, browsing history, and purchase context.",
      tasks: ["Maps Intent Signals", "Forecasts Trends", "Identifies Hidden Patterns"],
      phoneContent: <PhoneScreen1 />,
    },
    {
      phase: "The Evolution",
      agent: "Emilia",
      agentColor: "text-purple-400",
      title: "A full Spring Resort experience generates",
      description:
        "Emilia builds a complete luxury shopping experience — Spring Resort collection, coral palette, tailored for Women 25–35.",
      tasks: ["Personalizes UX Layouts", "Adapts Merchandising", "Removes Friction"],
      phoneContent: <PhoneScreen2 products={products} />,
    },
    {
      phase: "The Adaptation",
      agent: "John",
      agentColor: "text-emerald-400",
      title: "Editorial content shifts to match her world",
      description:
        "Product pages shift to an editorial Riviera theme — warm photography tones, sustainability copy, lifestyle-driven descriptions.",
      tasks: ["Iterates Creative Assets", "A/B Tests Copy Styles", "Prevents Fatigue"],
      phoneContent: <PhoneScreen3 products={products} />,
    },
    {
      phase: "The Upsell",
      agent: "Donna",
      agentColor: "text-orange-400",
      title: "Smart bundling at the right moment",
      description:
        "Donna suggests complementary pieces at the moment of highest intent — turning a $285 item into a $489 resort bundle.",
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
          <p className="text-sm text-muted mt-1">Following a real Gottex shopper from ad click to purchase</p>
        </div>

        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

              {/* Left: Description + step nav */}
              <div className="lg:col-span-4 order-3 lg:order-1">
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

                {/* Step navigation buttons */}
                <div className="flex items-center gap-3 mt-6">
                  {stepsData.map((step, i) => (
                    <button
                      key={i}
                      onClick={() => goToStep(i)}
                      className={`text-left transition-all duration-300 rounded-lg px-2.5 py-1.5 border ${
                        i === activeStep
                          ? "bg-primary/5 border-primary/20 text-primary"
                          : "border-transparent text-muted hover:text-foreground"
                      }`}
                    >
                      <p className="text-[9px] font-bold uppercase tracking-wider">{step.phase}</p>
                      <p className={`text-[8px] ${i === activeStep ? "text-primary/70" : "text-gray-400"}`}>{step.agent}</p>
                    </button>
                  ))}
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

              {/* Right: Terminal — compact, attached to phone visually */}
              <div className="lg:col-span-3 order-2 lg:order-3">
                <div className="bg-gray-950 rounded-xl border border-gray-800 p-3 font-mono text-[10px] overflow-hidden">
                  <div className="flex items-center gap-1.5 mb-3 pb-2.5 border-b border-gray-800">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-600 ml-1 text-[9px]">nc-agents</span>
                  </div>

                  <div className="space-y-3">
                    {stepsData.map((step, i) => {
                      const isActive = i === activeStep;
                      const isPastStep = i < activeStep;
                      const isFuture = i > activeStep;

                      return (
                        <motion.div
                          key={step.phase}
                          animate={{ opacity: isPastStep ? 0.35 : isFuture ? 0.15 : 1 }}
                          transition={{ duration: 0.35 }}
                        >
                          <div className={`mb-1 ${isFuture ? "text-gray-700" : "text-green-400"}`}>
                            <span className="text-gray-600">$</span>{" "}
                            <span className="text-[9px]">{`${step.agent}:${step.phase}`}</span>
                          </div>
                          <div className="pl-2 space-y-0.5">
                            {step.tasks.map((task, t) => {
                              const isCompleted = isPastStep || (isActive && (completedTasks[i]?.includes(t) ?? false));
                              const isCurrentTask = isActive && t === (completedTasks[i]?.length ?? 0) && !isCompleted;
                              return (
                                <div
                                  key={task}
                                  className={`flex items-center gap-1.5 ${
                                    isFuture ? "text-gray-700" : isCompleted ? "text-green-400" : isActive ? "text-gray-400" : "text-gray-600"
                                  }`}
                                >
                                  <span className="shrink-0 text-[9px]">{isCompleted ? "✓" : "›"}</span>
                                  <span className="text-[9px]">{task}</span>
                                  {isCurrentTask && (
                                    <motion.span
                                      className="text-green-400"
                                      animate={{ opacity: [1, 0, 1] }}
                                      transition={{ duration: 0.75, repeat: Infinity }}
                                    >▌</motion.span>
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