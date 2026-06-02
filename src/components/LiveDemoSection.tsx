"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import Image from "next/image";
import { Check, Zap, Layers, Wand2, Tag, TrendingUp, type LucideIcon } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import DemoPhone from "./DemoPhone";

// ---------------------------------------------------------------------------
// Phase data — verbatim from the Figma "Use case" frames.
// ---------------------------------------------------------------------------

type Phase = {
  /** 1-based phase number */
  num: number;
  /** Eyebrow label */
  label: string;
  /** Card title */
  title: string;
  /** Phase icon */
  icon: LucideIcon;
  /** Optional body copy */
  body?: string;
  /** Agent shown in this phase (omitted on the final result step) */
  agent?: {
    name: string;
    role: string;
    img: string;
  };
  /** "Agent Actions:" checklist */
  actions?: string[];
  /** Conversion result metric shown on the final step (instead of an agent) */
  result?: { value: string; label: string };
  /** Which DemoPhone step to show */
  phoneStep: number;
};

const PHASES: Phase[] = [
  {
    num: 1,
    label: "PHASE 1",
    title: "Trigger",
    icon: Zap,
    body: "Danny reads the intent signals and social trends behind the click to trigger the right experience.",
    agent: {
      name: "Danny",
      role: "The Analyst",
      img: "/figma/agent-danny.png",
    },
    actions: ["Maps intent signals", "Trend forecasting", "Segment discovery"],
    phoneStep: 0,
  },
  {
    num: 2,
    label: "PHASE 2",
    title: "Evolution",
    icon: Layers,
    body: "Emilia builds a full storefront that adapts to sustainability — not just a landing page.",
    agent: {
      name: "Emilia",
      role: "The Tailor",
      img: "/figma/agent-emilia.png",
    },
    actions: ["Personalize UX layouts", "Adapts Merchandising", "Adjust messaging tone"],
    phoneStep: 1,
  },
  {
    num: 3,
    label: "PHASE 3",
    title: "Adaptation",
    icon: Wand2,
    body: "John enhances every product — descriptions, imagery and copy — so performance never drops.",
    agent: {
      name: "John",
      role: "The Optimizer",
      img: "/figma/agent-john.png",
    },
    actions: ["Iterates creative assets", "A/B test copy styles", "Prevent fatigue"],
    phoneStep: 2,
  },
  {
    num: 4,
    label: "PHASE 4",
    title: "Upsell",
    icon: Tag,
    body: "Donna suggests complementing sets at the right moment to lift average order value.",
    agent: {
      name: "Donna",
      role: "The Shopping Assistant",
      img: "/figma/agent-donna.png",
    },
    actions: ["Pairs product smartly", "Offers dynamically", "Optimizes carts"],
    phoneStep: 3,
  },
  {
    num: 5,
    label: "PHASE 5",
    title: "Result",
    icon: TrendingUp,
    body: "A higher-intent visitor converts — ROAS climbs and the storefront keeps learning for the next click.",
    result: { value: "+200%", label: "Conversion Rate" },
    phoneStep: 4,
  },
];

const DWELL_MS = 4000;

// ---------------------------------------------------------------------------
// Sub-components (defined at module scope — never recreated inside render)
// ---------------------------------------------------------------------------

function AgentPill({ agent }: { agent: NonNullable<Phase["agent"]> }): ReactElement {
  return (
    <div className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-1 self-start rounded-2xl border border-white/10 bg-white/[0.05] px-2.5 py-1.5 sm:rounded-full sm:py-1.5 sm:pl-1.5 sm:pr-4">
      <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full">
        <Image src={agent.img} alt={agent.name} fill sizes="24px" className="object-cover" />
      </span>
      <span className="font-inter text-[13px] leading-tight sm:text-sm">
        <span className="font-semibold text-[#ff6eba]">{agent.name}</span>{" "}
        <span className="text-soft/60">[{agent.role}]</span>{" "}
        <span className="text-white/80">is working&hellip;</span>
      </span>
    </div>
  );
}

function ActionChecklist({ actions }: { actions: string[] }): ReactElement {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="font-inter text-sm text-white/60">Agent Actions:</p>
      {actions.map((action) => (
        <div key={action} className="flex items-center gap-3">
          <Check size={16} strokeWidth={2.5} className="shrink-0 text-[#0fdd98]" />
          <span className="font-inter text-sm leading-snug text-white/80">{action}</span>
        </div>
      ))}
    </div>
  );
}

function ResultMetric({ result }: { result: { value: string; label: string } }): ReactElement {
  return (
    <div className="flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-0.5 self-start rounded-2xl border border-[#0fdd98]/30 bg-[#0fdd98]/10 px-3 py-2 sm:px-4 sm:py-2.5">
      <span className="flex items-center gap-2">
        <TrendingUp size={18} strokeWidth={2.2} className="shrink-0 text-[#0fdd98]" />
        <span className="font-display text-xl font-semibold leading-none text-[#0fdd98] sm:text-2xl">
          {result.value}
        </span>
      </span>
      <span className="font-inter text-[13px] leading-tight text-white/70 sm:text-sm">{result.label}</span>
    </div>
  );
}

type PhaseCardProps = {
  phase: Phase;
  isActive: boolean;
  onSelect: () => void;
};

function PhaseCard({ phase, isActive, onSelect }: PhaseCardProps): ReactElement {
  const Icon = phase.icon;
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      aria-label={`Select ${phase.title} phase`}
      className={[
        "w-full rounded-[24px] border text-left transition-all duration-300",
        isActive
          ? "border-primary/30 bg-white/[0.05] p-4 shadow-[0_18px_50px_-26px_rgba(131,79,251,0.6)] sm:p-6"
          : "border-primary/15 bg-white/[0.03] p-3.5 hover:border-primary/30 sm:p-5",
      ].join(" ")}
    >
      {/* Icon badge + eyebrow/title */}
      <div className="flex items-center gap-3">
        <span
          className={[
            "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors",
            isActive ? "bg-primary text-white" : "bg-white/10 text-white/70",
          ].join(" ")}
        >
          <Icon size={17} strokeWidth={2} />
        </span>
        <div className="flex flex-col">
          <span className="font-inter text-[13px] uppercase tracking-[0.08em] text-primary">
            {phase.label}
          </span>
          <span className="font-display text-xl font-semibold leading-tight text-white">
            {phase.title}
          </span>
        </div>
      </div>

      {/* Expanded content — only when active */}
      {isActive && (
        <div className="mt-4 flex flex-col gap-4">
          {phase.body && (
            <p className="font-inter text-[15px] leading-relaxed text-white/90">{phase.body}</p>
          )}
          {phase.agent && <AgentPill agent={phase.agent} />}
          {phase.actions && <ActionChecklist actions={phase.actions} />}
          {phase.result && <ResultMetric result={phase.result} />}
        </div>
      )}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function LiveDemoSection(): ReactElement {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // On small screens the phone slides down to sit next to the highlighted step
  const cardsRef = useRef<HTMLDivElement>(null);
  const phoneColRef = useRef<HTMLDivElement>(null);
  const [phoneY, setPhoneY] = useState(0);

  // Observe whether the section has entered the viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Auto-advance through phases while visible (skipped when reduce-motion is on)
  useEffect(() => {
    if (reduce || !inView) return;
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % PHASES.length);
    }, DWELL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [reduce, inView, active]);

  // Slide the phone to align with the active step (mobile/tablet only)
  useEffect(() => {
    const align = () => {
      const cards = cardsRef.current;
      const phone = phoneColRef.current;
      if (!cards || !phone) return;
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setPhoneY(0);
        return;
      }
      const card = cards.children[active] as HTMLElement | undefined;
      if (!card) return;
      const target = card.offsetTop + card.offsetHeight / 2 - phone.offsetHeight / 2;
      const max = cards.offsetHeight - phone.offsetHeight;
      setPhoneY(Math.max(0, Math.min(target, Math.max(0, max))));
    };
    const id = requestAnimationFrame(align);
    window.addEventListener("resize", align);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", align);
    };
  }, [active]);

  const handleSelect = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(i);
  };

  const activePhase = PHASES[active];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        title="Watch a Storefront Evolve in Real-Time"
        subtitle="Meet your agent workforce that deliver autonomously behind the scenes."
      />

      {/* ------------------------------------------------------------------ */}
      {/* DESKTOP layout: phone (left) | phase stack (right)                  */}
      {/* ------------------------------------------------------------------ */}
      {/* Phone (left) and phase cards (right) — side by side, centered on desktop */}
      <Reveal className="mt-10 flex items-start gap-3 sm:mt-14 sm:gap-8 lg:items-center lg:justify-center lg:gap-16">
        {/* Phone with concentric purple/blue glow (scaled down on small screens) */}
        <div
          ref={phoneColRef}
          className="relative flex shrink-0 items-center justify-center transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${phoneY}px)` }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[420px] sm:w-[420px] lg:h-[540px] lg:w-[540px]"
            style={{
              background:
                "radial-gradient(circle, rgba(131,79,251,0.55) 0%, rgba(96,80,255,0.5) 22%, rgba(60,90,255,0.32) 40%, rgba(40,70,230,0.16) 58%, transparent 72%)",
              filter: "blur(6px)",
            }}
          />
          <div className="relative z-[1] h-[313px] w-[145px] sm:h-[388px] sm:w-[180px] lg:h-[625px] lg:w-[290px]">
            <div className="origin-top-left scale-[0.5] sm:scale-[0.62] lg:scale-100">
              <DemoPhone step={activePhase.phoneStep} />
            </div>
          </div>
        </div>

        {/* Phase card stack — active expands */}
        <div ref={cardsRef} className="flex min-w-0 flex-1 flex-col gap-2.5 sm:gap-3 lg:w-[400px] lg:flex-none">
          {PHASES.map((phase, i) => (
            <PhaseCard
              key={phase.num}
              phase={phase}
              isActive={i === active}
              onSelect={() => handleSelect(i)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
