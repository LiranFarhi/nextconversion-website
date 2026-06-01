"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Images,
  MessageSquareQuote,
  LayoutDashboard,
  TrendingUp,
  CircleDollarSign,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";

type Agent = {
  name: string;
  role?: string;
  img: string;
  quote: string;
  x: number; // horizontal centre of the agent in the illustration (0–1)
};

// Order matches the agents in the table illustration (left → right). Quotes are
// verbatim from the per-agent Figma frames; roles only where the Figma names them.
const AGENTS: Agent[] = [
  {
    name: "Emilia",
    role: "The Taylor",
    img: "/figma/agent-emilia.png",
    quote: "“I adjust your site design, UX, and merchandising in live sessions.”",
    x: 0.16,
  },
  {
    name: "Donna",
    img: "/figma/agent-donna.png",
    quote: "“While chatting with the user I intelligently bundle products to maximize AOV.”",
    x: 0.37,
  },
  {
    name: "Danny",
    img: "/figma/agent-danny.png",
    quote: "“I process intent signals and social trends that human teams miss.”",
    x: 0.61,
  },
  {
    name: "John",
    role: "The Optimizer",
    img: "/figma/agent-john.png",
    quote:
      "“I enhance product details - generating descriptions, images and videos, copy styles to ensure your performance never drops.”",
    x: 0.83,
  },
];

// Figma skill set (icon frames gallery / square-quote / dashboard, #834ffb).
const SKILLS: { icon: LucideIcon; label: string }[] = [
  { icon: Images, label: "Creative assets generation" },
  { icon: MessageSquareQuote, label: "A/B Tested copy styles" },
  { icon: LayoutDashboard, label: "Performance monitoring" },
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

      {/* Scroll between the agents — the illustration highlights the active one
          while the detail card (right) swaps, matching the Figma. */}
      <div ref={trackRef} className="relative mt-12 h-[260vh]">
        <div className="sticky top-0 flex min-h-screen items-center">
          <div className="grid w-full items-stretch gap-6 lg:grid-cols-2">
            {/* Left: the agents-at-a-table illustration with name pills */}
            <div className="relative flex items-center overflow-hidden rounded-3xl border border-primary/30 bg-white/[0.02] p-4">
              <Image
                src="/figma/agents-table.png"
                alt="Emilia, Donna, Danny and John — the AI agent workforce at a table"
                width={1327}
                height={752}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 1024px) 92vw, 560px"
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute top-[30%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-[55px]"
                animate={{ left: `${agent.x * 100}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 22 }}
              />
              {AGENTS.map((a, i) => (
                <span
                  key={a.name}
                  style={{ left: `${a.x * 100}%`, top: "9%" }}
                  className={`absolute -translate-x-1/2 rounded-full border px-3 py-1 font-inter text-xs font-medium backdrop-blur-sm transition-all duration-500 ${
                    i === active
                      ? "scale-110 border-primary bg-background/80 text-white shadow-[0_0_24px_-6px_rgba(131,79,251,0.85)] opacity-100"
                      : "border-white/15 bg-background/40 text-white/70 opacity-30"
                  }`}
                >
                  {a.name}
                </span>
              ))}
            </div>

            {/* Right: active agent detail card (crossfades while scrolling) */}
            <div className="rounded-3xl border border-primary/30 bg-white/[0.05] p-6">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                  <div className="flex items-start gap-4">
                    <Image
                      src={agent.img}
                      alt={`Portrait of ${agent.name}`}
                      width={256}
                      height={256}
                      className="h-[88px] w-[88px] flex-shrink-0 rounded-3xl object-cover sm:h-[119px] sm:w-[119px]"
                    />
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="font-display text-lg font-medium leading-6 text-[#f4f0ff]">{agent.name}</p>
                        {agent.role && (
                          <p className="mt-0.5 font-inter text-base leading-6 text-soft">{agent.role}</p>
                        )}
                      </div>
                      <p className="font-inter text-base leading-6 text-white">{agent.quote}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {SKILLS.map(({ icon: Icon, label }) => (
                      <li
                        key={label}
                        className="flex items-center gap-4 font-inter text-base font-medium leading-6 text-[#f4f0ff]"
                      >
                        <Icon size={16} className="flex-shrink-0 text-primary" strokeWidth={2} />
                        {label}
                      </li>
                    ))}
                </ul>
              </motion.div>
            </div>
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
                width={256}
                height={256}
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
