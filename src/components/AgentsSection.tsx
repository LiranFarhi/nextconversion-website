"use client";

import Image from "next/image";
import {
  Images,
  MessageSquareQuote,
  LayoutDashboard,
  Wand2,
  Palette,
  Activity,
  TrendingUp,
  Target,
  LayoutGrid,
  Boxes,
  CircleDollarSign,
  Clock,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import TiltCard from "./TiltCard";
import SnapRow from "./SnapRow";
import CarouselDots from "./CarouselDots";
import { useAutoAdvance } from "./useAutoAdvance";

type Agent = {
  name: string;
  role: string;
  img: string;
  quote: string;
  skills: { icon: LucideIcon; label: string }[];
};

// Roster left→right as in the group image. Quotes are taken verbatim from the
// per-agent Figma frames (Agents - John/Danny/Donna/Emilia); skills are derived
// from each quote. Role titles: John "The Optimizer" and Emilia "The Taylor"
// are named in the Figma; Donna & Danny are titled to match their stated role.
const AGENTS: Agent[] = [
  {
    name: "Emilia",
    role: "The Taylor",
    img: "/figma/agent-emilia.png",
    quote: "“I adjust your site design, UX, and merchandising in live sessions.”",
    skills: [
      { icon: Palette, label: "On-the-fly design" },
      { icon: Wand2, label: "Live UX adjustments" },
      { icon: LayoutGrid, label: "Dynamic merchandising" },
    ],
  },
  {
    name: "Donna",
    role: "The Concierge",
    img: "/figma/agent-donna.png",
    quote: "“While chatting with the user I intelligently bundle products to maximize AOV.”",
    skills: [
      { icon: MessageSquareQuote, label: "Conversational selling" },
      { icon: Boxes, label: "Smart product bundling" },
      { icon: CircleDollarSign, label: "AOV maximization" },
    ],
  },
  {
    name: "Danny",
    role: "The Analyst",
    img: "/figma/agent-danny.png",
    quote: "“I process intent signals and social trends that human teams miss.”",
    skills: [
      { icon: Activity, label: "Intent signal processing" },
      { icon: TrendingUp, label: "Social trend detection" },
      { icon: Target, label: "Audience targeting" },
    ],
  },
  {
    name: "John",
    role: "The Optimizer",
    img: "/figma/agent-john.png",
    quote:
      "“I enhance product details - generating descriptions, images and videos, copy styles to ensure your performance never drops.”",
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
  { icon: Users, value: "+29%", color: "#ff6eba", label: "Returning Users" },
];

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-3xl border border-primary/30 bg-white/[0.05] p-6">
      <div className="flex items-start gap-4">
        <Image
          src={agent.img}
          alt={`Portrait of ${agent.name}, ${agent.role}`}
          width={128}
          height={128}
          className="h-[88px] w-[88px] flex-shrink-0 rounded-3xl object-cover sm:h-[119px] sm:w-[119px]"
        />
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-display text-lg font-semibold leading-6 text-[#f4f0ff]">{agent.name}</p>
            <p className="mt-0.5 font-inter text-base leading-6 text-primary-3">{agent.role}</p>
          </div>
          <p className="font-inter text-base leading-6 text-white/90">{agent.quote}</p>
        </div>
      </div>
      <ul className="flex flex-col gap-3">
        {agent.skills.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-4 font-display text-base font-medium leading-6 text-[#f4f0ff]"
          >
            <Icon size={16} className="flex-shrink-0 text-primary" strokeWidth={2} />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AgentsSection() {
  const { index, select, ref, playing } = useAutoAdvance(AGENTS.length);

  return (
    <section ref={ref} id="agents" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
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

      {/* Selectable roster — tapping an avatar jumps to that agent */}
      <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {AGENTS.map((a, i) => (
          <button
            key={a.name}
            type="button"
            onClick={() => select(i)}
            aria-pressed={index === i}
            className={`flex items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 transition-colors ${
              index === i
                ? "border-primary bg-white/[0.06] shadow-[0_0_24px_-8px_rgba(131,79,251,0.7)]"
                : "border-white/12 bg-white/[0.03] hover:bg-white/[0.07]"
            }`}
          >
            <Image
              src={a.img}
              alt=""
              width={128}
              height={128}
              className={`h-9 w-9 rounded-full object-cover ring-1 ${
                index === i ? "ring-primary" : "ring-white/10"
              }`}
            />
            <span className="flex flex-col items-start leading-tight">
              <span className="font-inter text-sm font-medium text-white">{a.name}</span>
              <span className="font-inter text-xs text-muted">{a.role}</span>
            </span>
          </button>
        ))}
      </Reveal>

      {/* Desktop: group image + active agent detail (auto-cycles) */}
      <div className="mt-8 hidden items-stretch gap-8 lg:grid lg:grid-cols-2">
        <TiltCard className="overflow-hidden rounded-3xl border border-primary/30 bg-white/[0.02]">
          <Image
            src="/figma/agents-group.png"
            alt="Four AI agents — Emilia, Donna, Danny and John — collaborating at a table"
            width={1120}
            height={626}
            className="h-full w-full object-cover"
            sizes="560px"
          />
        </TiltCard>
        <AgentCard agent={AGENTS[index]} />
      </div>

      {/* Mobile: swipe carousel of every agent card, shown with its explanation */}
      <div className="mt-6 lg:hidden">
        <SnapRow active={index} onSelect={select} className="gap-4 px-1 pb-1" itemClassName="basis-[88%] pr-1">
          {AGENTS.map((a) => (
            <AgentCard key={a.name} agent={a} />
          ))}
        </SnapRow>
        <div className="mt-4 flex justify-center">
          <CarouselDots
            count={AGENTS.length}
            active={index}
            onSelect={select}
            dwellMs={4200}
            playing={playing}
            label="Agent"
          />
        </div>
      </div>

      {/* +10 more agents pill */}
      <Reveal className="mt-8 flex justify-center">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] py-2 pl-3 pr-4">
          <div className="flex items-center -space-x-2">
            {AGENTS.slice(0, 3).map((a) => (
              <Image
                key={a.name}
                src={a.img}
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

      {/* Impact stats */}
      <Reveal className="mt-10 rounded-3xl border border-white/10 px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {IMPACT.map(({ icon: Icon, value, color, label }) => (
            <div
              key={label}
              className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-white/[0.05] p-6"
            >
              <Icon size={16} style={{ color }} strokeWidth={2} />
              <div className="flex flex-col gap-2">
                <CountUp value={value} className="font-display text-4xl font-semibold leading-10" style={{ color }} />
                <p className="font-inter text-base leading-6 text-soft">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
