"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { TrendingUp, CircleDollarSign, Clock, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";

type Agent = {
  name: string;
  role?: string;
  quote: string;
  x: number; // horizontal centre of the agent in the illustration (0–1)
};

// Order matches the agents in the table illustration (left → right). Quotes are
// verbatim from the per-agent Figma frames; roles only where the Figma names them.
const AGENTS: Agent[] = [
  {
    name: "Emilia",
    role: "The Taylor",
    quote: "“I adjust your site design, UX, and merchandising in live sessions.”",
    x: 0.16,
  },
  {
    name: "Donna",
    quote: "“While chatting with the user I intelligently bundle products to maximize AOV.”",
    x: 0.37,
  },
  {
    name: "Danny",
    quote: "“I process intent signals and social trends that human teams miss.”",
    x: 0.61,
  },
  {
    name: "John",
    role: "The Optimizer",
    quote:
      "“I enhance product details - generating descriptions, images and videos, copy styles to ensure your performance never drops.”",
    x: 0.83,
  },
];

const IMPACT: { icon: LucideIcon; value: string; color: string; label: string }[] = [
  { icon: TrendingUp, value: "+30%", color: "#0fdd98", label: "Conversion Rate" },
  { icon: CircleDollarSign, value: "10x", color: "#834ffb", label: "Campaigns launched per team" },
  { icon: Clock, value: "800%", color: "#009dff", label: "Faster idea-to-launch cycle time" },
];

export default function AgentsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.min(AGENTS.length - 1, Math.max(0, Math.floor(p * AGENTS.length)));
    if (i !== active) setActive(i);
  });

  const agent = AGENTS[active];

  return (
    <section id="agents" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
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

      {/* Scroll-scrubbed illustration — scrolling moves between the avatars */}
      <div ref={trackRef} className="relative mt-10 h-[280vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-6">
          <div className="relative w-full max-w-[660px] overflow-hidden rounded-3xl border border-primary/30 bg-white/[0.02]">
            <Image
              src="/figma/agents-table.png"
              alt="Emilia, Donna, Danny and John — the AI agent workforce at a table"
              width={1327}
              height={752}
              className="h-auto w-full"
              sizes="(max-width: 700px) 92vw, 660px"
              
            />

            {/* moving spotlight over the active agent */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute top-[18%] h-40 w-40 -translate-x-1/2 rounded-full bg-primary/40 blur-[55px]"
              animate={{ left: `${agent.x * 100}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
            />

            {/* name pills (30% → 100% opacity for the active one) */}
            {AGENTS.map((a, i) => (
              <span
                key={a.name}
                style={{ left: `${a.x * 100}%`, top: "5%" }}
                className={`absolute -translate-x-1/2 rounded-full border px-3 py-1 font-inter text-xs font-medium backdrop-blur-sm transition-all duration-500 ${
                  i === active
                    ? "scale-110 border-primary bg-background/70 text-white shadow-[0_0_24px_-6px_rgba(131,79,251,0.8)] opacity-100"
                    : "border-white/15 bg-background/40 text-white/70 opacity-40"
                }`}
              >
                {a.name}
              </span>
            ))}
          </div>

          {/* active agent caption (crossfades as you scroll) */}
          <div className="flex min-h-[120px] max-w-[600px] flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="font-display text-2xl font-semibold text-[#f4f0ff]">{agent.name}</p>
                {agent.role && <p className="mt-0.5 font-inter text-base text-soft">{agent.role}</p>}
                <p className="mt-3 font-inter text-base leading-relaxed text-white/90">{agent.quote}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* progress dots */}
          <div className="flex gap-2">
            {AGENTS.map((a, i) => (
              <span
                key={a.name}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-primary" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Impact stats (3 metrics, per Figma) */}
      <Reveal className="mt-10 rounded-3xl border border-white/10 px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-12">
          {IMPACT.map(({ icon: Icon, value, color, label }) => (
            <div
              key={label}
              className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-white/[0.05] p-6"
            >
              <Icon size={16} className="text-soft" strokeWidth={2} />
              <div className="flex flex-col gap-2">
                <CountUp value={value} className="font-display text-4xl font-semibold leading-10" style={{ color }} />
                <p className="font-inter text-base leading-6 text-soft">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* +10 more agents — under the metrics */}
      <Reveal className="mt-8 flex justify-center">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] py-2 pl-3 pr-4">
          <div className="flex items-center -space-x-2">
            {["emilia", "donna", "danny"].map((n) => (
              <Image
                key={n}
                src={`/figma/agent-${n}.png`}
                alt=""
                width={128}
                height={128}
                className="h-8 w-8 rounded-full border-2 border-background object-cover"
              />
            ))}
            <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-primary font-inter text-base font-semibold leading-none text-white">
              ...
            </span>
          </div>
          <span className="font-inter text-sm leading-5 text-white/80">+10 more agents ready to scale</span>
        </div>
      </Reveal>
    </section>
  );
}
