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
  /** Optional body copy (phase 1 has description but no actions) */
  body?: string;
  /** Agent shown in this phase */
  agent: {
    name: string;
    role: string;
    img: string;
  };
  /** "Agent Actions:" checklist — undefined means no checklist (phase 1) */
  actions?: string[];
  /** Which DemoPhone step to show */
  phoneStep: number;
};

const PHASES: Phase[] = [
  {
    num: 1,
    label: "PHASE 1",
    title: "Trigger",
    icon: Zap,
    body: "Emilia generates a full shopping experience aligned specifically with “Sustainability” - not just a landing page.",
    agent: {
      name: "Emilia",
      role: "The Tailor",
      img: "/figma/agent-emilia.png",
    },
    phoneStep: 0,
  },
  {
    num: 2,
    label: "PHASE 2",
    title: "Evolution",
    icon: Layers,
    body: "Full storefront adapts to sustainability",
    agent: {
      name: "Emilia",
      role: "The Tailor",
      img: "/figma/agent-emilia.png",
    },
    actions: [
      "Personalize UX layouts",
      "Adapts Merchandising",
      "Adjust messaging tone",
    ],
    phoneStep: 1,
  },
  {
    num: 3,
    label: "PHASE 3",
    title: "Adaptation",
    icon: Wand2,
    agent: {
      name: "John",
      role: "The Optimizer",
      img: "/figma/agent-john.png",
    },
    actions: [
      "Iterates creative assets",
      "A/B test copy styles",
      "Prevent fatigue",
    ],
    phoneStep: 2,
  },
  {
    num: 4,
    label: "PHASE 4",
    title: "Upsell",
    icon: Tag,
    body: "Shopping assistant suggests complementing sets at the right moment.",
    agent: {
      name: "Donna",
      role: "The Shopping Assistant",
      img: "/figma/agent-donna.png",
    },
    actions: [
      "Pairs product smartly",
      "Offers dynamically",
      "Optimizes carts",
    ],
    phoneStep: 3,
  },
  {
    num: 5,
    label: "PHASE 5",
    title: "Result",
    icon: TrendingUp,
    body: "Optimization becomes continuous, ROAS improves, and the shopper feels the site truly “knows” her.",
    agent: {
      name: "Nova",
      role: "The Performance Optimizer",
      img: "/agents/agent-extra-1.png",
    },
    actions: [
      "Track conversion",
      "Measure engagement",
      "Update learning model",
    ],
    phoneStep: 4,
  },
];

const DWELL_MS = 4000;

// ---------------------------------------------------------------------------
// Sub-components (defined at module scope — never recreated inside render)
// ---------------------------------------------------------------------------

function AgentRow({ agent }: { agent: Phase["agent"] }): ReactElement {
  return (
    <div className="mt-3.5 flex items-center gap-2.5">
      <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-[#834ffb]/30">
        <Image src={agent.img} alt={agent.name} fill sizes="32px" className="object-cover" />
      </div>
      <p className="font-inter text-[13px] leading-tight">
        <span className="font-semibold text-[#834ffb]">{agent.name}</span>{" "}
        <span className="text-[#5b5470]">[{agent.role}]</span>{" "}
        <span className="text-[#8a8499]">is working&hellip;</span>
      </p>
    </div>
  );
}

function ActionChecklist({ actions }: { actions: string[] }): ReactElement {
  return (
    <div className="mt-3.5">
      <p className="mb-2 font-inter text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9a93ad]">
        Agent Actions:
      </p>
      <div className="flex flex-col gap-2">
        {actions.map((action) => (
          <div key={action} className="flex items-center gap-2.5">
            <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0fdd98]">
              <Check size={11} strokeWidth={3} className="text-white" />
            </span>
            <span className="font-inter text-[13px] leading-snug text-[#3a3550]">{action}</span>
          </div>
        ))}
      </div>
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
        "w-full rounded-2xl px-4 py-3.5 text-left backdrop-blur-md transition-all duration-300",
        isActive
          ? "bg-white shadow-[0_18px_50px_-20px_rgba(131,79,251,0.55)] ring-1 ring-white/60"
          : "bg-white/55 ring-1 ring-white/30 hover:bg-white/70",
      ].join(" ")}
    >
      {/* Icon + eyebrow/title row */}
      <div className="flex items-center gap-3">
        <span
          className={[
            "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors",
            isActive ? "bg-[#834ffb] text-white" : "bg-[#834ffb]/12 text-[#834ffb]",
          ].join(" ")}
        >
          <Icon size={17} strokeWidth={2} />
        </span>
        <div className="flex flex-col">
          <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9a7bf3]">
            {phase.label}
          </span>
          <span
            className={[
              "font-display text-base font-semibold leading-tight",
              isActive ? "text-[#1a1430]" : "text-[#1a1430]/55",
            ].join(" ")}
          >
            {phase.title}
          </span>
        </div>
      </div>

      {/* Expanded content — only when active */}
      {isActive && (
        <div>
          {phase.body && (
            <p className="mt-3 font-inter text-[13px] leading-relaxed text-[#3a3550]">{phase.body}</p>
          )}
          <AgentRow agent={phase.agent} />
          {phase.actions && <ActionChecklist actions={phase.actions} />}
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
      <Reveal className="mt-14 hidden lg:flex lg:items-center lg:gap-16">
        {/* LEFT — single phone with concentric purple/blue glow */}
        <div className="relative flex flex-1 items-center justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(131,79,251,0.55) 0%, rgba(96,80,255,0.5) 22%, rgba(60,90,255,0.32) 40%, rgba(40,70,230,0.16) 58%, transparent 72%)",
              filter: "blur(6px)",
            }}
          />
          <DemoPhone step={activePhase.phoneStep} />
        </div>

        {/* RIGHT — vertical phase card stack */}
        <div className="w-[400px] shrink-0 flex flex-col gap-3">
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

      {/* ------------------------------------------------------------------ */}
      {/* MOBILE layout: phone on top, active phase card below                */}
      {/* ------------------------------------------------------------------ */}
      <div className="mt-10 lg:hidden">
        {/* Phone with glow */}
        <div className="relative flex items-center justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(131,79,251,0.5) 0%, rgba(131,79,251,0.15) 45%, transparent 70%)",
            }}
          />
          <div style={{ transform: "scale(0.85)", transformOrigin: "center" }}>
            <DemoPhone step={activePhase.phoneStep} />
          </div>
        </div>

        {/* Phase tab pills */}
        <div className="mt-8 flex items-center justify-center gap-1.5 flex-wrap px-4">
          {PHASES.map((phase, i) => (
            <button
              key={phase.num}
              type="button"
              onClick={() => handleSelect(i)}
              aria-pressed={i === active}
              className={[
                "rounded-full px-3 py-1 font-inter text-[11px] font-semibold transition-all",
                i === active
                  ? "bg-[#834ffb] text-white"
                  : "bg-white/[0.06] text-white/50 hover:bg-white/[0.1]",
              ].join(" ")}
            >
              {phase.title}
            </button>
          ))}
        </div>

        {/* Active phase card */}
        <div className="mx-auto mt-5 max-w-sm">
          <PhaseCard phase={activePhase} isActive onSelect={() => {}} />
        </div>
      </div>
    </section>
  );
}
