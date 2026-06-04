"use client";

import { useEffect, useRef } from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import {
  Images,
  MessageSquareQuote,
  LayoutDashboard,
  TrendingUp,
  CircleDollarSign,
  Clock,
  ChevronLeft,
  ChevronRight,
  LayoutTemplate,
  Package,
  Eraser,
  Crown,
  BadgePercent,
  ShoppingCart,
  Cpu,
  MessageCircle,
  Compass,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import SnapRow from "./SnapRow";
import CarouselDots from "./CarouselDots";
import { useAutoAdvance } from "./useAutoAdvance";

type AgentSkill = { icon: LucideIcon; label: string };

type Agent = {
  name: string;
  role: string;
  img: string;
  quote: string;
  /** horizontal centre of the agent in the illustration (0–1, left→right) */
  x: number;
  skills: AgentSkill[];
};

/**
 * Order matches the agents in the illustration left → right:
 *   Emilia (0), Donna (1), Danny (2), John (3)
 *
 * Quotes, roles, and per-agent skills are verbatim / derived from the
 * corresponding Figma frames:
 *   Agents - Emilia  /  Agents - Donna  /  Agents - Danny  /  Agents - John
 *
 * Skills evidence:
 *  • John  → gallery, square-quote, dashboard icons in Figma
 *            Text confirmed in figma_texts.json (the default-active card)
 *  • Emilia → layout-fluid, boxes, eraser icons; text from the
 *             "how it works / Evolution" section: [The Taylor] agent actions
 *  • Donna  → crown, badge-percent, cart-shopping-fast icons (Figma)
 *  • Danny  → function-process, chat-arrow-grow, discover icons (Figma)
 */
const AGENTS: Agent[] = [
  {
    name: "Emilia",
    role: "The Tailor",
    img: "/figma/agent-emilia.png",
    quote: "“I adjust your site design, UX, and merchandising in live sessions.”",
    x: 0.16,
    skills: [
      { icon: LayoutTemplate, label: "Dynamic UX Layouts" },
      { icon: Package, label: "Adaptive merchandising" },
      { icon: Eraser, label: "Friction removal" },
    ],
  },
  {
    name: "Donna",
    role: "The Shopping Assistant",
    img: "/figma/agent-donna.png",
    quote:
      "“While chatting with the user I intelligently bundle products to maximize Average Order Value (AOV)”",
    x: 0.37,
    skills: [
      { icon: Crown, label: "Smart product pairing" },
      { icon: BadgePercent, label: "Dynamic offers" },
      { icon: ShoppingCart, label: "Cart optimization" },
    ],
  },
  {
    name: "Danny",
    role: "The Analyst",
    img: "/figma/agent-danny.png",
    quote: "“I process intent signals and social trends that human teams miss.”",
    x: 0.61,
    skills: [
      { icon: Cpu, label: "Intent signal processing" },
      { icon: MessageCircle, label: "Trend forecasting" },
      { icon: Compass, label: "Segment discovery" },
    ],
  },
  {
    name: "John",
    role: "The Optimizer",
    img: "/figma/agent-john.png",
    quote:
      "“I enhance product details - generating descriptions, images and videos, copy styles to ensure your performance never drops.”",
    x: 0.83,
    skills: [
      { icon: Images, label: "Creative assets generation" },
      { icon: MessageSquareQuote, label: "A/B Tested copy styles" },
      { icon: LayoutDashboard, label: "Performance monitoring" },
    ],
  },
];

const IMPACT: { icon: LucideIcon; value: string; color: string; label: string }[] = [
  { icon: TrendingUp, value: "+30%", color: "#0fdd98", label: "Conversion Rate" },
  { icon: CircleDollarSign, value: "10x", color: "#834ffb", label: "Campaigns launched per team" },
  { icon: Clock, value: "800%", color: "#009dff", label: "Faster idea-to-launch cycle time" },
];

/** Extra agent avatars shown in the "+10 more" pill — sourced from the Figma
 *  "+10 more agents" frame (imageRefs d756…, a400…, 3ca2…). */
const EXTRA_AVATARS = [
  "/agents/agent-extra-1.png",
  "/agents/agent-extra-2.png",
  "/agents/agent-extra-3.png",
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function AgentCard({ agent }: { agent: Agent }): ReactElement {
  return (
    <div
      className="flex h-full flex-col gap-6 rounded-3xl border border-primary/30 p-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(131,79,251,0.30) 0%, rgba(113,77,255,0.13) 45%, rgba(225,81,255,0.06) 100%)",
      }}
    >
      {/* Header: avatar + name/role/quote */}
      <div className="flex items-start gap-4">
        <Image
          src={agent.img}
          alt={`Portrait of ${agent.name}`}
          width={256}
          height={256}
          className="h-[88px] w-[88px] flex-shrink-0 rounded-3xl object-cover object-top sm:h-[119px] sm:w-[119px]"
        />
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-display text-lg font-normal leading-6 text-[#f4f0ff]">{agent.name}</p>
            <p className="mt-0.5 font-inter text-sm font-light leading-5 text-muted">{agent.role}</p>
          </div>
          <p className="font-inter text-sm font-light leading-6 text-white">{agent.quote}</p>
        </div>
      </div>

      {/* Skills list */}
      <ul className="flex flex-col gap-3">
        {agent.skills.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-4 font-inter text-sm font-normal leading-6 text-[#f4f0ff]"
          >
            <Icon size={16} className="flex-shrink-0 text-primary" strokeWidth={2} />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function AgentsSection(): ReactElement {
  const { index, select, ref, playing } = useAutoAdvance(AGENTS.length);
  const go = (dir: number) => select((index + dir + AGENTS.length) % AGENTS.length);
  const active = AGENTS[index];

  // ── Arrow-key navigation (desktop) ───────────────────────────────────────
  // Attach to window so the user doesn't need to focus the section first.
  // We only activate while the section is in view (ref + IntersectionObserver
  // inside useAutoAdvance already tracks this, but for key events we use a
  // separate observer so we don't break the auto-advance state).
  const sectionRef = useRef<HTMLElement | null>(null);
  const inViewRef = useRef(false);
  const indexRef = useRef(index);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { inViewRef.current = e.isIntersecting; }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!inViewRef.current) return;
      if (e.key === "ArrowRight") { e.preventDefault(); select((indexRef.current + 1) % AGENTS.length); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); select((indexRef.current - 1 + AGENTS.length) % AGENTS.length); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [select]);

  // Merge the two refs: the section element needs both the auto-advance ref
  // (callback ref) and our own ref.
  const setRef = (node: HTMLElement | null) => {
    sectionRef.current = node;
    ref(node);
  };

  return (
    <section
      ref={setRef}
      id="agents"
      className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-28"
      tabIndex={-1}
    >
      <SectionHeading
        title={
          <>
            Autonomous Growth.
            <br />
            No Headcount Required.
          </>
        }
        subtitle="Meet your agent workforce that deliver autonomously behind the scenes"
      />

      <div className="mt-8 grid items-stretch gap-6 sm:mt-12 md:grid-cols-2">
        {/* ── Left: illustration with click zones + name pills ── */}
        <div className="relative flex min-w-0 items-center justify-center">
          {/* Clip box: natural height on mobile; fills the detail-card height on
              desktop (md+) and clips the wide art's sides — no dark padding. */}
          <div className="relative w-full overflow-hidden rounded-2xl md:flex md:h-full md:items-center md:justify-center">
            {/* Full-image layer — overlays are positioned in the image's own
                coordinates, so the name pills stay locked to each agent even
                when the sides are clipped on desktop. */}
            <div className="relative w-full md:h-full md:w-auto md:shrink-0 md:aspect-[1327/534]">
              <Image
                src="/figma/agents-table-crop.jpg"
                alt="Emilia, Donna, Danny and John — the AI agent workforce at a table"
                width={1327}
                height={534}
                className="h-auto w-full md:h-full md:w-auto"
                sizes="(max-width: 1024px) 92vw, 560px"
              />

              {/* Purple spotlight that tracks the active agent */}
              <span
                aria-hidden
                style={{ left: `${active.x * 100}%` }}
                className="pointer-events-none absolute top-[38%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-[55px] transition-[left] duration-500 ease-out"
              />

              {/* Four even click areas over the illustration (Emilia→John) */}
              {AGENTS.map((a, i) => (
                <button
                  key={`zone-${a.name}`}
                  type="button"
                  onClick={() => select(i)}
                  aria-label={`Select ${a.name}`}
                  style={{ left: `${i * 25}%`, width: "25%", top: 0, bottom: 0 }}
                  className="absolute cursor-pointer bg-transparent"
                />
              ))}

              {/* Name pills — on top of the click areas via z-index */}
              {AGENTS.map((a, i) => (
                <button
                  key={a.name}
                  type="button"
                  onClick={() => select(i)}
                  aria-label={`Show ${a.name}`}
                  style={{ left: `${a.x * 100}%`, zIndex: 10 }}
                  className={`absolute top-[4%] -translate-x-1/2 rounded-full border px-3 py-0.5 font-inter text-xs font-normal leading-tight backdrop-blur-sm transition-all duration-500 sm:top-[8%] ${
                    i === index
                      ? "scale-110 border-primary bg-background/80 text-white shadow-[0_0_24px_-6px_rgba(131,79,251,0.85)] opacity-100"
                      : "border-white/15 bg-background/40 text-white/70 opacity-30 hover:opacity-70"
                  }`}
                >
                  {a.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: carousel of agent detail cards ── */}
        <div className="min-w-0">
          <SnapRow active={index} onSelect={select} className="h-full" itemClassName="h-full basis-full">
            {AGENTS.map((a) => (
              <AgentCard key={a.name} agent={a} />
            ))}
          </SnapRow>
        </div>
      </div>

      {/* ── Agent scroller — under both the illustration and the card ── */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous agent"
          className="grid h-9 w-9 place-items-center rounded-full border border-border-strong bg-white/[0.03] text-soft transition-colors hover:bg-white/[0.1]"
        >
          <ChevronLeft size={16} />
        </button>
        <CarouselDots
          count={AGENTS.length}
          active={index}
          onSelect={select}
          dwellMs={4200}
          playing={playing}
          label="Agent"
        />
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next agent"
          className="grid h-9 w-9 place-items-center rounded-full border border-border-strong bg-white/[0.03] text-soft transition-colors hover:bg-white/[0.1]"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ── Impact stats ── */}
      <Reveal className="mt-8 sm:mt-10">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6">
          {IMPACT.map(({ icon: Icon, value, color, label }) => (
            <div
              key={label}
              className="flex flex-col gap-2 rounded-2xl border border-primary/30 p-3 sm:gap-4 sm:rounded-3xl sm:p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(131,79,251,0.30) 0%, rgba(113,77,255,0.13) 45%, rgba(225,81,255,0.06) 100%)",
              }}
            >
              <Icon size={16} className="hidden text-soft sm:block" strokeWidth={2} />
              <div className="flex flex-col gap-1 sm:gap-2">
                <CountUp
                  value={value}
                  className="font-display text-2xl font-semibold leading-none sm:text-4xl sm:leading-10"
                  style={{ color }}
                />
                <p className="font-inter text-[11px] leading-tight text-soft sm:text-base sm:leading-6">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ── +10 more agents ── */}
      <Reveal className="mt-8 flex justify-center">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] py-2 pl-3 pr-4">
          <div className="flex items-center -space-x-2">
            {EXTRA_AVATARS.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={256}
                height={256}
                className="h-8 w-8 rounded-full object-cover object-top ring-1 ring-white/20"
                style={{ zIndex: EXTRA_AVATARS.length - i }}
              />
            ))}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary ring-1 ring-white/20">
              <span className="flex items-center gap-[3px]">
                <span className="h-1 w-1 rounded-full bg-white" />
                <span className="h-1 w-1 rounded-full bg-white" />
                <span className="h-1 w-1 rounded-full bg-white" />
              </span>
            </span>
          </div>
          <span className="font-inter text-sm leading-5 text-white/80">+10 more agents ready to scale</span>
        </div>
      </Reveal>
    </section>
  );
}
