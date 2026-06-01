"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Wand2, Images, MessageSquareQuote, Check, Play, Pause, type LucideIcon } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import DemoPhone from "./DemoPhone";

type Step = {
  title: string;
  icon: LucideIcon;
  agent?: { name: string; role: string; color: string };
  body: string;
};

// The 5-step storefront evolution from the Figma "Storefront - Step 1..5"
// frames, each driven by the agent whose job that stage maps to.
const STEPS: Step[] = [
  {
    title: "Arrival",
    icon: Target,
    agent: { name: "Danny", role: "The Analyst", color: "text-cyan" },
    body: "A visitor lands from a “sustainable activewear” ad — Danny reads the intent signal the moment they arrive.",
  },
  {
    title: "Personalized home",
    icon: Wand2,
    agent: { name: "Emilia", role: "The Taylor", color: "text-magenta" },
    body: "Emilia builds a full storefront around their intent — sustainable materials, ethical production, conscious design.",
  },
  {
    title: "Curated collection",
    icon: Images,
    agent: { name: "John", role: "The Optimizer", color: "text-green" },
    body: "John enhances every product — descriptions, imagery and copy tuned so performance never drops.",
  },
  {
    title: "Assisted cart",
    icon: MessageSquareQuote,
    agent: { name: "Donna", role: "The Concierge", color: "text-primary-3" },
    body: "Donna chats with the visitor, intelligently bundling complementary products to lift average order value.",
  },
  {
    title: "Confirmed",
    icon: Check,
    body: "A sustainable, higher-value order — confirmed and on its way. The storefront keeps adapting for the next visitor.",
  },
];

const OUTCOMES = [
  { value: "+200%", label: "Conversion Rate", color: "text-green" },
  { value: "+35%", label: "AOV", color: "text-primary" },
  { value: "+90%", label: "Session Duration", color: "text-cyan" },
  { value: "+29%", label: "Returning Users", color: "text-magenta" },
];

const DWELL = 3800;

export default function LiveDemoSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(true);
  const startRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // only auto-advance while the section is actually on screen
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !playing || !inView) return;
    let raf = 0;
    startRef.current = 0;
    const tick = (t: number) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = t - startRef.current;
      setProgress(Math.min(elapsed / DWELL, 1) * 100);
      if (elapsed >= DWELL) {
        startRef.current = t;
        setActive((a) => (a + 1) % STEPS.length);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, playing, inView]);

  const select = (i: number) => {
    setActive(i);
    setProgress(0);
    startRef.current = 0;
  };

  const step = STEPS[active];

  return (
    <section ref={sectionRef} id="how-it-works" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        title="Watch a Storefront Evolve in Real-Time"
        subtitle="Meet your agent workforce that deliver autonomously behind the scenes."
      />

      {/* MOBILE: phone + the active step's action shown side by side */}
      <div className="mt-12 lg:hidden">
        <div className="flex items-start gap-3">
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[70px]"
            />
            <div className="relative h-[430px] w-[200px]">
              <div className="absolute left-0 top-0 origin-top-left scale-[0.69]">
                <DemoPhone step={active} />
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1 pt-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 font-inter text-[11px] text-white/85">
              <span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-green" />
              Live · {active + 1}/{STEPS.length}
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-white">
                <step.icon size={15} strokeWidth={1.8} />
              </span>
              <span className="font-display text-base font-semibold leading-tight text-white">{step.title}</span>
            </div>
            {!reduce && playing && (
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-2 to-magenta"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
            <p className="mt-3 font-inter text-sm leading-relaxed text-white/85">{step.body}</p>
            {step.agent && (
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-inter text-xs">
                <span className={`font-medium ${step.agent.color}`}>{step.agent.name}</span>
                <span className="text-muted">{step.agent.role}</span>
              </span>
            )}
          </div>
        </div>

        {/* step dots + play / pause */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <div className="flex gap-2">
            {STEPS.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Step ${i + 1}: ${s.title}`}
                onClick={() => select(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-primary" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause" : "Play"}
            className="grid h-7 w-7 place-items-center rounded-full border border-border-strong bg-white/[0.03] text-soft"
          >
            {playing ? <Pause size={12} /> : <Play size={12} />}
          </button>
        </div>
      </div>

      {/* DESKTOP: phone | full interactive step timeline */}
      <div className="mt-14 hidden items-start gap-10 lg:grid lg:grid-cols-2">
        {/* Left: the live phone, evolving through each step */}
        <Reveal className="relative flex flex-col items-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[90px]"
          />
          <div className="relative mb-5 flex items-center gap-2 rounded-full border border-white/15 bg-background/60 px-3 py-1.5 font-inter text-xs text-white/85 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-green" />
            Live · Step {active + 1} of {STEPS.length}
            {step.agent && <span className={`font-medium ${step.agent.color}`}>· {step.agent.name}</span>}
          </div>
          <div className="relative transition-opacity duration-500">
            <DemoPhone step={active} />
          </div>
        </Reveal>

        {/* Right: interactive step timeline */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="font-inter text-sm text-muted">The journey, built live</p>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-white/[0.03] px-3 py-1 font-inter text-xs text-soft transition-colors hover:bg-white/[0.08]"
            >
              {playing ? <Pause size={12} /> : <Play size={12} />}
              {playing ? "Pause" : "Play"}
            </button>
          </div>

          {STEPS.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => select(i)}
                className={`block w-full rounded-2xl border p-5 text-left transition-all duration-500 ${
                  isActive
                    ? "border-primary bg-white/[0.05]"
                    : "border-white/10 bg-white/[0.02] opacity-50 hover:opacity-90"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                      isActive ? "bg-primary text-white" : "bg-white/10 text-white/70"
                    }`}
                  >
                    <s.icon size={18} strokeWidth={1.8} />
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-inter text-xs uppercase tracking-[0.14em] text-primary-3">
                      Step {i + 1}
                    </span>
                    <span className="font-display text-lg font-semibold leading-none text-white">{s.title}</span>
                  </div>
                </div>

                {isActive && (
                  <div className="lg:min-h-[84px]">
                    {!reduce && playing && (
                      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary-2 to-magenta"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                    <p className="mt-3 font-inter text-sm leading-relaxed text-white/85">{s.body}</p>
                    {s.agent && (
                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-inter text-xs">
                        <span className={`font-medium ${s.agent.color}`}>{s.agent.name}</span>
                        <span className="text-muted">{s.agent.role}</span>
                      </span>
                    )}
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
