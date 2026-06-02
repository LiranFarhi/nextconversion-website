"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import DemoPhone from "./DemoPhone";

// ---------------------------------------------------------------------------
// Step data — titles and copy taken verbatim from the Figma "Use case" frames.
// Agent images come from public/figma/agent-*.png (same paths used in AgentsSection).
// ---------------------------------------------------------------------------

type Step = {
  /** Step number label shown in the UI */
  num: number;
  /** Figma frame title */
  title: string;
  /** The scenario / body copy from Figma */
  body: string;
  /** Agent shown for this step (null = no single agent, e.g. the arrival or confirmed steps) */
  agent?: {
    name: string;
    role?: string;
    img: string;
    /** tailwind text colour token */
    color: string;
  };
  /** "Agent Actions:" checklist items */
  actions?: string[];
};

const STEPS: Step[] = [
  {
    num: 1,
    title: "Visitor Arrives",
    body: "A visitor lands from a “sustainable activewear” ad — Danny reads the intent signal the moment they arrive.",
    agent: {
      name: "Danny",
      img: "/figma/agent-danny.png",
      color: "text-cyan",
    },
    actions: [
      "Processes intent signals",
      "Identifies sustainability interest",
      "Activates personalisation pipeline",
    ],
  },
  {
    num: 2,
    title: "Storefront Personalised",
    body: "Emilia generates a full shopping experience aligned specifically with 'Sustainability' — not just a landing page.",
    agent: {
      name: "Emilia",
      role: "The Taylor",
      img: "/figma/agent-emilia.png",
      color: "text-magenta",
    },
    actions: [
      "Personalize UX layouts",
      "Adapts Merchandising",
      "Adjust messaging tone",
    ],
  },
  {
    num: 3,
    title: "Collection Curated",
    body: "John enhances every product — descriptions, imagery and copy tuned so performance never drops.",
    agent: {
      name: "John",
      role: "The Optimizer",
      img: "/figma/agent-john.png",
      color: "text-green",
    },
    actions: [
      "Generates product descriptions",
      "Optimises imagery & copy",
      "A/B tests product presentation",
    ],
  },
  {
    num: 4,
    title: "Cart Assisted",
    body: "Donna chats with the visitor, intelligently bundling complementary products to lift average order value.",
    agent: {
      name: "Donna",
      img: "/figma/agent-donna.png",
      color: "text-primary-3",
    },
    actions: [
      "Engages in live chat",
      "Bundles complementary products",
      "Lifts average order value",
    ],
  },
  {
    num: 5,
    title: "Order Confirmed",
    body: "A sustainable, higher-value order — confirmed and on its way. The storefront keeps adapting for the next visitor.",
    actions: [
      "Order processed successfully",
      "Sustainable impact logged",
      "Storefront resets for next visitor",
    ],
  },
];

const DWELL_MS = 4000;

// ---------------------------------------------------------------------------
// Sub-components (module scope so they are never recreated inside the render)
// ---------------------------------------------------------------------------

function StepIndicator({ total, active, onSelect }: { total: number; active: number; onSelect: (i: number) => void }): ReactElement {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to step ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`h-1 rounded-full transition-all duration-300 ${
            i === active
              ? "w-6 bg-primary"
              : "w-1.5 bg-white/25 hover:bg-white/50"
          }`}
        />
      ))}
    </div>
  );
}

function AgentBadge({ agent }: { agent: NonNullable<Step["agent"]> }): ReactElement {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/20">
        <Image src={agent.img} alt={agent.name} fill sizes="40px" className="object-cover" />
      </div>
      <div className="flex flex-col">
        <span className={`font-inter text-sm font-semibold leading-tight ${agent.color}`}>
          {agent.name}
          {agent.role && (
            <span className="ml-1.5 font-normal text-white/50">[{agent.role}]</span>
          )}
        </span>
        <span className="font-inter text-[11px] text-white/40">Agent</span>
      </div>
    </div>
  );
}

function ActionsList({ actions }: { actions: string[] }): ReactElement {
  return (
    <div className="mt-5">
      <p className="mb-3 font-inter text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
        Agent Actions
      </p>
      <div className="flex flex-col gap-2.5">
        {actions.map((action) => (
          <div key={action} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green/15">
              <Check size={10} strokeWidth={2.5} className="text-green" />
            </span>
            <span className="font-inter text-sm leading-snug text-white/80">{action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// A single phone in the filmstrip — scaled and dimmed based on offset from active
function FilmstripPhone({
  stepIndex,
  offset,
  onClick,
}: {
  stepIndex: number;
  offset: number; // -1 | 0 | 1
  onClick?: () => void;
}): ReactElement {
  const isCenter = offset === 0;

  return (
    <div
      onClick={onClick}
      className={`relative flex-shrink-0 transition-all duration-500 ease-out ${
        isCenter ? "z-10 cursor-default" : "cursor-pointer"
      }`}
      style={{
        transform: isCenter ? "scale(1)" : "scale(0.82)",
        opacity: isCenter ? 1 : 0.4,
        filter: isCenter ? "none" : "blur(1px)",
      }}
      aria-hidden={!isCenter}
    >
      <DemoPhone step={stepIndex} />
    </div>
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

  // Observe whether the section is on screen
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.2,
    });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Subtle auto-advance when in view (no visible progress bar)
  useEffect(() => {
    if (reduce || !inView) return;
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % STEPS.length);
    }, DWELL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [reduce, inView, active]);

  const goTo = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(Math.max(0, Math.min(STEPS.length - 1, i)));
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  const step = STEPS[active];

  // Indices for the filmstrip: [prev, active, next] — clamped, not wrapping
  const prevIdx = Math.max(0, active - 1);
  const nextIdx = Math.min(STEPS.length - 1, active + 1);
  const hasPrev = active > 0;
  const hasNext = active < STEPS.length - 1;

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        title="Watch a Storefront Evolve in Real-Time"
        subtitle="Meet your agent workforce that delivers autonomously behind the scenes."
      />

      {/* ------------------------------------------------------------------ */}
      {/* DESKTOP layout: filmstrip left | info panel right                   */}
      {/* ------------------------------------------------------------------ */}
      <Reveal className="mt-14 hidden lg:flex lg:items-center lg:gap-12">
        {/* LEFT — filmstrip of 3 phones: prev · current · next */}
        <div className="relative flex flex-1 items-center justify-center gap-4">
          {/* ambient glow behind the centre phone */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-[100px]"
          />

          {/* Previous phone (only rendered when there is one) */}
          {hasPrev && (
            <FilmstripPhone stepIndex={prevIdx} offset={-1} onClick={prev} />
          )}

          {/* Active (centre) phone — always shown */}
          <FilmstripPhone stepIndex={active} offset={0} />

          {/* Next phone (only rendered when there is one) */}
          {hasNext && (
            <FilmstripPhone stepIndex={nextIdx} offset={1} onClick={next} />
          )}
        </div>

        {/* RIGHT — info panel */}
        <div className="w-[380px] shrink-0">
          {/* Step label + indicator dots */}
          <div className="flex items-center justify-between">
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-3">
              Step {step.num} of {STEPS.length}
            </span>
            <StepIndicator total={STEPS.length} active={active} onSelect={goTo} />
          </div>

          {/* Title */}
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
            {step.title}
          </h3>

          {/* Body */}
          <p className="mt-3 font-inter text-sm leading-relaxed text-white/70">{step.body}</p>

          {/* Agent badge */}
          {step.agent && (
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <AgentBadge agent={step.agent} />
            </div>
          )}

          {/* Agent Actions */}
          {step.actions && <ActionsList actions={step.actions} />}

          {/* Prev / Next nav */}
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              disabled={!hasPrev}
              aria-label="Previous step"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition-colors hover:bg-white/[0.1] disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!hasNext}
              aria-label="Next step"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition-colors hover:bg-white/[0.1] disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Reveal>

      {/* ------------------------------------------------------------------ */}
      {/* MOBILE layout: stacked phone → info card → nav                     */}
      {/* ------------------------------------------------------------------ */}
      <div className="mt-10 lg:hidden">
        {/* Filmstrip: three phones side by side — outer clips overflow */}
        <div className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-[80px]"
          />
          {/* Inner flex row, centred, with the phones scaled to fit mobile */}
          <div className="flex items-center justify-center gap-2">
            {hasPrev && (
              <div
                onClick={prev}
                className="relative shrink-0 cursor-pointer"
                style={{ transform: "scale(0.62)", transformOrigin: "center", opacity: 0.4, filter: "blur(1px)", marginRight: "-40px" }}
              >
                <DemoPhone step={prevIdx} />
              </div>
            )}

            {/* Centre — active, scaled to ~75% of the 290px design width */}
            <div
              className="relative shrink-0"
              style={{ transform: "scale(0.78)", transformOrigin: "center" }}
            >
              <DemoPhone step={active} />
            </div>

            {hasNext && (
              <div
                onClick={next}
                className="relative shrink-0 cursor-pointer"
                style={{ transform: "scale(0.62)", transformOrigin: "center", opacity: 0.4, filter: "blur(1px)", marginLeft: "-40px" }}
              >
                <DemoPhone step={nextIdx} />
              </div>
            )}
          </div>
        </div>

        {/* Info card */}
        <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="flex items-center justify-between">
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-3">
              Step {step.num} of {STEPS.length}
            </span>
            <StepIndicator total={STEPS.length} active={active} onSelect={goTo} />
          </div>
          <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-white">
            {step.title}
          </h3>
          <p className="mt-2 font-inter text-sm leading-relaxed text-white/70">{step.body}</p>

          {step.agent && (
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
              <AgentBadge agent={step.agent} />
            </div>
          )}

          {step.actions && <ActionsList actions={step.actions} />}
        </div>

        {/* Mobile nav arrows */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            disabled={!hasPrev}
            aria-label="Previous step"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition-colors hover:bg-white/[0.1] disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!hasNext}
            aria-label="Next step"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition-colors hover:bg-white/[0.1] disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
