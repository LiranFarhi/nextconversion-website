"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import Image from "next/image";
import { Check, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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
  /** Phase icon — Figma-exported SVG in /public/demo/icons */
  iconSrc: string;
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
    iconSrc: "/demo/icons/trigger.svg",
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
    iconSrc: "/demo/icons/evolution.svg",
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
    iconSrc: "/demo/icons/adaptation.svg",
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
    iconSrc: "/demo/icons/upsell.svg",
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
    iconSrc: "/demo/icons/result.svg",
    body: "A higher-intent visitor converts — ROAS climbs and the storefront keeps learning for the next click.",
    result: { value: "+200%", label: "Conversion Rate" },
    phoneStep: 4,
  },
];

// ---------------------------------------------------------------------------
// Sub-components (defined at module scope — never recreated inside render)
// ---------------------------------------------------------------------------

function AgentPill({ agent }: { agent: NonNullable<Phase["agent"]> }): ReactElement {
  return (
    <div className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-1 self-start rounded-2xl border border-white/10 bg-white/[0.05] px-2.5 py-1.5 sm:rounded-full sm:py-1.5 sm:pl-1.5 sm:pr-4">
      <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
        <Image src={agent.img} alt={agent.name} fill sizes="36px" className="object-cover object-top" />
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
  /** distance from the active card (0 = active, 1 = neighbour, ≥2 = far) */
  distance: number;
  onSelect: () => void;
};

function PhaseCard({ phase, isActive, distance, onSelect }: PhaseCardProps): ReactElement {
  // Only the current phase and its immediate neighbours stay prominent; the rest
  // fade back so the eye follows the one being viewed.
  const opacity = distance === 0 ? 1 : distance === 1 ? 0.5 : 0.12;
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      aria-label={`Select ${phase.title} phase`}
      style={{ opacity }}
      className={[
        "w-full rounded-[24px] border text-left transition-all duration-500",
        isActive
          ? "border-primary/30 bg-white/[0.05] p-4 shadow-[0_18px_50px_-26px_rgba(131,79,251,0.6)] sm:p-6"
          : "border-primary/15 bg-white/[0.03] p-3.5 hover:border-primary/30 sm:p-5",
      ].join(" ")}
    >
      {/* Bare Figma outline icon + eyebrow/title (no filled badge) */}
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={phase.iconSrc} alt="" className="h-11 w-11 shrink-0" />
        <div className="flex flex-col">
          <span className="font-inter text-[13px] uppercase tracking-[0.08em] text-primary">
            {phase.label}
          </span>
          <span className="font-display text-xl font-semibold leading-tight text-white">
            {phase.title}
          </span>
        </div>
      </div>

      {/* Expanded content — height animates open/closed (grid-rows trick) so the
          card-to-card transition is smooth instead of jumping when active flips */}
      <div
        className={[
          "grid transition-[grid-template-rows] duration-500 ease-out",
          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div
            className={[
              "flex flex-col gap-4 pt-4 transition-opacity duration-300",
              isActive ? "opacity-100 delay-100" : "opacity-0",
            ].join(" ")}
          >
            {phase.body && (
              <p className="font-inter text-[15px] leading-relaxed text-white/90">{phase.body}</p>
            )}
            {phase.agent && <AgentPill agent={phase.agent} />}
            {phase.actions && <ActionChecklist actions={phase.actions} />}
            {phase.result && <ResultMetric result={phase.result} />}
          </div>
        </div>
      </div>
    </button>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function LiveDemoSection(): ReactElement {
  const [active, setActive] = useState(0);
  // trackRef: the tall scroll track (desktop) that the sticky stage pins inside.
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const phoneColRef = useRef<HTMLDivElement>(null);
  const [phoneY, setPhoneY] = useState(0);

  // Active phase is a pure function of scroll *position* — never of the cards'
  // measured size — so it is strictly monotonic and cannot oscillate/flicker.
  // Desktop: progress through the pinned track. Mobile: the cards passing the
  // viewport centre. The card stack has a fixed height, so nothing it does can
  // change the scroll, which is what kills the old feedback loop.
  useEffect(() => {
    let raf = 0;
    const derive = () => {
      raf = 0;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      let progress = 0;
      if (desktop) {
        const track = trackRef.current;
        if (!track) return;
        const scrollable = track.offsetHeight - window.innerHeight;
        if (scrollable > 0) progress = -track.getBoundingClientRect().top / scrollable;
      } else {
        const cards = cardsRef.current;
        if (!cards) return;
        const r = cards.getBoundingClientRect();
        progress = (window.innerHeight * 0.5 - r.top) / r.height;
      }
      progress = Math.max(0, Math.min(0.99999, progress));
      const idx = Math.floor(progress * PHASES.length);
      setActive((prev) => (prev === idx ? prev : idx));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(derive);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    derive();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Slide the phone to align with the active step (mobile/tablet only).
  // Transform-based and only re-runs on phase change, so it stays smooth.
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
    const raf = requestAnimationFrame(align);
    const timers = [setTimeout(align, 250), setTimeout(align, 650)];
    window.addEventListener("resize", align);
    const ro = new ResizeObserver(align);
    if (cardsRef.current) ro.observe(cardsRef.current);
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", align);
      ro.disconnect();
    };
  }, [active]);

  // Clicking a card scrolls to that phase's slice of the track, keeping scroll
  // and selection in sync. On desktop the stage is pinned, so the reposition is
  // invisible — only the active card animates. On mobile it scrolls smoothly.
  const handleSelect = (i: number) => {
    setActive(i);
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const targetProgress = (i + 0.5) / PHASES.length;
    if (desktop) {
      const track = trackRef.current;
      if (!track) return;
      const scrollable = track.offsetHeight - window.innerHeight;
      const topDoc = track.getBoundingClientRect().top + window.scrollY;
      // Instant: the stage is pinned, so this reposition is invisible — only the
      // active card animates (no smooth fast-forward through intermediate phases).
      window.scrollTo({ top: topDoc + targetProgress * scrollable, behavior: "instant" as ScrollBehavior });
    } else {
      const cards = cardsRef.current;
      if (!cards) return;
      const r = cards.getBoundingClientRect();
      const topDoc = r.top + window.scrollY;
      window.scrollTo({
        top: topDoc - window.innerHeight * 0.5 + targetProgress * r.height,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="how-it-works" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28 lg:py-0">
      <div className="lg:pt-28">
        <SectionHeading
          title="Watch a Storefront Evolve in Real-Time"
          subtitle="Meet your agent workforce that deliver autonomously behind the scenes."
        />
      </div>

      {/* Tall track (desktop) gives the scroll distance; the stage pins inside it
          so the demo stays on screen while you scroll slowly through the phases.
          On mobile the track collapses and the section scrolls normally. */}
      <div ref={trackRef} className="relative lg:h-[300vh]">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          {/* Phone (left) and phase cards (right) */}
          <Reveal className="mt-10 flex w-full items-start gap-3 sm:mt-14 sm:gap-8 lg:mt-0 lg:items-center lg:gap-8">
            {/* Phone with concentric purple/blue glow (scaled down on small screens) */}
            <div
              ref={phoneColRef}
              className="relative flex shrink-0 items-center justify-center transition-transform duration-500 ease-out lg:min-w-0 lg:flex-1 lg:basis-0"
              style={{ transform: `translateY(${phoneY}px)` }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[420px] sm:w-[420px] lg:h-[540px] lg:w-[540px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(131,79,251,0.30) 0%, rgba(96,80,255,0.22) 24%, rgba(60,90,255,0.12) 44%, rgba(40,70,230,0.05) 60%, transparent 74%)",
                  filter: "blur(8px)",
                }}
              />
              <div className="relative z-[1] aspect-[320/720] w-[150px] sm:w-[185px] lg:w-[290px]">
                {PHASES.map((p, i) => (
                  <Image
                    key={p.num}
                    src={`/demo/step-${i + 1}.webp`}
                    alt={`Storefront preview — ${p.title}`}
                    fill
                    sizes="(max-width: 1024px) 185px, 290px"
                    priority={i === 0}
                    className="object-contain transition-opacity duration-500"
                    style={{ opacity: i === active ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>

            {/* Phase card stack — active expands. Fixed min-height so the layout
                never reflows when the active phase changes height (cards stay
                top-anchored; any slack sits harmlessly at the bottom). */}
            <div
              ref={cardsRef}
              className="flex min-h-[880px] min-w-0 flex-1 flex-col gap-2.5 sm:min-h-[800px] sm:gap-3 lg:min-h-[760px] lg:basis-0"
            >
              {PHASES.map((phase, i) => (
                <PhaseCard
                  key={phase.num}
                  phase={phase}
                  isActive={i === active}
                  distance={Math.abs(i - active)}
                  onSelect={() => handleSelect(i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
