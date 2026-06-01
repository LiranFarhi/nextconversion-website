"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, Target, Wand2, RefreshCw, Sparkles, Search, Play, Pause } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import Parallax from "./Parallax";

const CATEGORIES = ["All", "Contemporary", "Sophisticated", "TOPS", "Bikinis"];

const OUTCOMES = [
  { value: "+200%", label: "Conversion Rate", color: "text-green" },
  { value: "+35%", label: "AOV", color: "text-primary" },
  { value: "+90%", label: "Session Duration", color: "text-cyan" },
  { value: "+29%", label: "Returning Users", color: "text-magenta" },
];

type Phase = {
  label: string;
  icon: typeof Target;
  body: string;
  subtitle?: string;
  working?: boolean;
  listLabel: string;
  items: string[];
};

const PHASES: Phase[] = [
  {
    label: "Trigger",
    icon: Target,
    body: 'A visitor lands from a "sustainable activewear" ad. The agent reads the intent signal the moment they arrive.',
    listLabel: "Signals detected:",
    items: ["Paid social — “sustainable activewear”", "First-time visitor", "High purchase intent"],
  },
  {
    label: "Evolution",
    icon: Wand2,
    body: "",
    subtitle: "Full storefront adapts to sustainability",
    working: true,
    listLabel: "Agent Actions:",
    items: ["Personalize UX layouts", "Adapts Merchandising", "Adjust messaging tone"],
  },
  {
    label: "Adaptation",
    icon: RefreshCw,
    body: "Copy, layout and merchandising keep adapting to live performance — continuously, 24/7.",
    listLabel: "Now optimizing:",
    items: ["Engagement trending up", "Bounce rate falling", "Repeat visits increasing"],
  },
];

const DWELL = 4200; // ms per phase

export default function LiveDemoSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(1); // Evolution first (matches Figma default)
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [category, setCategory] = useState("All");
  const startRef = useRef(0);

  useEffect(() => {
    if (reduce || !playing) return;
    let raf = 0;
    startRef.current = 0;
    const tick = (t: number) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = t - startRef.current;
      setProgress(Math.min(elapsed / DWELL, 1) * 100);
      if (elapsed >= DWELL) {
        startRef.current = t;
        setActive((a) => (a + 1) % PHASES.length);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, playing]);

  const selectPhase = (i: number) => {
    setActive(i);
    setProgress(0);
    startRef.current = 0;
  };

  return (
    <section id="how-it-works" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        title="Watch a Storefront Evolve in Real-Time"
        subtitle="Meet your agent workforce that deliver autonomously behind the scenes."
      />

      {/* Assistant bar + category chips (from the Figma fashion-assistant UI) */}
      <Reveal className="mx-auto mt-10 max-w-[760px]">
        <div className="flex items-center gap-3 rounded-full border border-border-strong bg-white/[0.04] px-4 py-3 backdrop-blur-sm">
          <Sparkles size={18} className="shrink-0 text-primary-3" />
          <input
            type="text"
            aria-label="Ask the fashion assistant"
            placeholder="Ask, Discover, Style — ask a question, make a request or search…"
            className="w-full bg-transparent font-inter text-sm text-white placeholder:text-muted focus:outline-none"
          />
          <button
            type="button"
            aria-label="Search"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-white transition-colors hover:bg-primary-2"
          >
            <Search size={16} />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 font-inter text-sm transition-colors ${
                category === c
                  ? "border-primary bg-primary text-white"
                  : "border-border-strong bg-white/[0.03] text-soft hover:bg-white/[0.08]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
        {/* Left: live storefront preview */}
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-primary/25 via-background-2 to-background p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 blur-[90px]"
          />
          {/* live status badge synced to the active phase */}
          <div className="relative mb-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/60 px-3 py-1.5 font-inter text-xs text-white/85 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-green" />
              Live · {PHASES[active].label}
            </span>
            <span className="rounded-full border border-white/15 bg-background/60 px-3 py-1.5 font-inter text-xs text-muted backdrop-blur">
              {category === "All" ? "Sustainability" : category}
            </span>
          </div>
          <Parallax distance={24} className="relative mx-auto w-full max-w-[420px]">
            <Image
              src="/figma/demo-storefront.png"
              alt="A phone showing an eco-friendly sportswear storefront generated in real time"
              width={2565}
              height={2565}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 92vw, 420px"
            />
          </Parallax>
        </Reveal>

        {/* Right: interactive phase timeline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="font-inter text-sm text-muted">Agent workforce, live</p>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-white/[0.03] px-3 py-1 font-inter text-xs text-soft transition-colors hover:bg-white/[0.08]"
            >
              {playing ? <Pause size={12} /> : <Play size={12} />}
              {playing ? "Pause" : "Play"}
            </button>
          </div>

          {PHASES.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.label}
                type="button"
                onClick={() => selectPhase(i)}
                className={`block w-full rounded-3xl border p-6 text-left transition-all duration-500 ${
                  isActive
                    ? "border-primary bg-white/[0.05]"
                    : "border-white/10 bg-white/[0.02] opacity-50 hover:opacity-80"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${
                      isActive ? "bg-primary text-white" : "bg-white/10 text-white/70"
                    }`}
                  >
                    <p.icon size={22} strokeWidth={1.7} />
                  </span>
                  <div>
                    <span className="font-inter text-xs uppercase tracking-[0.14em] text-primary-3">
                      Phase {i + 1}
                    </span>
                    <p className="font-display text-2xl font-semibold leading-none text-white">{p.label}</p>
                  </div>
                </div>

                {/* progress bar on the active phase */}
                {isActive && !reduce && playing && (
                  <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary-2 to-magenta"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                {/* expanded content for the active phase (min-height reserved
                    so the column doesn't resize as phases auto-cycle) */}
                {isActive && (
                  <div className="mt-4 lg:min-h-[230px]">
                    {p.subtitle && <p className="font-inter text-base text-white/90">{p.subtitle}</p>}
                    {p.body && <p className="font-inter text-base leading-relaxed text-white/90">{p.body}</p>}
                    {p.working && (
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/[0.05] px-4 py-2.5">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-magenta to-primary font-inter text-[11px] font-bold text-white">
                          E
                        </span>
                        <span className="font-inter text-sm font-semibold text-magenta">Emilia</span>
                        <span className="font-inter text-sm text-soft/60">[The Taylor]</span>
                        <span className="font-inter text-sm text-white/80">is working…</span>
                      </div>
                    )}
                    <div className="mt-5 flex flex-col gap-3">
                      <p className="font-inter text-sm text-white/60">{p.listLabel}</p>
                      {p.items.map((a) => (
                        <div key={a} className="flex items-center gap-3">
                          <Check size={16} strokeWidth={2.2} className="shrink-0 text-green" />
                          <span className="font-inter text-sm text-white/80">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Outcome stats */}
      <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-8 sm:flex sm:flex-wrap sm:items-start sm:justify-center sm:gap-12">
        {OUTCOMES.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="flex flex-col gap-2 text-center sm:text-left">
            <CountUp value={s.value} className={`font-display text-4xl font-semibold ${s.color}`} />
            <p className="font-inter text-base text-soft">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
