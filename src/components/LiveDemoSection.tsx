"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
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
    <div className="mt-4 flex items-center gap-3">
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/20">
        <Image
          src={agent.img}
          alt={agent.name}
          fill
          sizes="36px"
          className="object-cover"
        />
      </div>
      <div>
        <span className="font-inter text-sm font-semibold leading-tight text-[#834ffb]">
          {agent.name}
        </span>
        <span className="ml-1.5 font-inter text-sm font-normal text-white/50">
          {agent.role} is working&hellip;
        </span>
      </div>
    </div>
  );
}

function ActionChecklist({ actions }: { actions: string[] }): ReactElement {
  return (
    <div className="mt-4">
      <p className="mb-2.5 font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
        Agent Actions:
      </p>
      <div className="flex flex-col gap-2">
        {actions.map((action) => (
          <div key={action} className="flex items-center gap-2.5">
            <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0fdd98]/15">
              <Check size={10} strokeWidth={2.5} className="text-[#0fdd98]" />
            </span>
            <span className="font-inter text-sm leading-snug text-white/80">
              {action}
            </span>
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
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      aria-label={`Select ${phase.title} phase`}
      className={[
        "w-full rounded-2xl border text-left transition-all duration-300",
        isActive
          ? "border-[#834ffb]/50 bg-white/[0.07] px-5 py-4 shadow-[0_0_24px_0_rgba(131,79,251,0.18)]"
          : "border-white/[0.08] bg-white/[0.03] px-5 py-3.5 hover:bg-white/[0.05]",
      ].join(" ")}
    >
      {/* Eyebrow + title row */}
      <div className="flex items-center gap-3">
        <span
          className={[
            "font-inter text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors",
            isActive ? "text-[#834ffb]" : "text-white/30",
          ].join(" ")}
        >
          {phase.label}
        </span>
        <span
          className={[
            "font-display text-base font-semibold transition-colors",
            isActive ? "text-white" : "text-white/50",
          ].join(" ")}
        >
          {phase.title}
        </span>
      </div>

      {/* Expanded content — only when active */}
      {isActive && (
        <div>
          {phase.body && (
            <p className="mt-3 font-inter text-sm leading-relaxed text-white/70">
              {phase.body}
            </p>
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
        {/* LEFT — single phone with purple radial glow */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(131,79,251,0.55) 0%, rgba(131,79,251,0.18) 40%, transparent 70%)",
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
        <div className="mx-auto mt-5 max-w-sm rounded-2xl border border-[#834ffb]/40 bg-white/[0.06] px-5 py-5 shadow-[0_0_24px_0_rgba(131,79,251,0.15)]">
          <div className="flex items-center gap-3">
            <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.15em] text-[#834ffb]">
              {activePhase.label}
            </span>
            <span className="font-display text-lg font-semibold text-white">
              {activePhase.title}
            </span>
          </div>
          {activePhase.body && (
            <p className="mt-3 font-inter text-sm leading-relaxed text-white/70">
              {activePhase.body}
            </p>
          )}
          <AgentRow agent={activePhase.agent} />
          {activePhase.actions && (
            <ActionChecklist actions={activePhase.actions} />
          )}
        </div>
      </div>
    </section>
  );
}
