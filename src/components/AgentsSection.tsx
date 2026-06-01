"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Images,
  MessageSquareQuote,
  LayoutDashboard,
  Wand2,
  Palette,
  Leaf,
  Activity,
  TrendingUp,
  Target,
  LayoutGrid,
  Boxes,
  Tag,
  CircleDollarSign,
  Clock,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import TiltCard from "./TiltCard";

type Agent = {
  name: string;
  role: string;
  img: string;
  quote: string;
  skills: { icon: LucideIcon; label: string }[];
};

// Roster left→right as shown in the group image. John & Emilia are grounded in
// the Figma (John "The Optimizer" card; Emilia "The Taylor" generating the
// sustainability storefront in the demo); Donna & Danny extend the workforce.
const AGENTS: Agent[] = [
  {
    name: "Emilia",
    role: "The Taylor",
    img: "/figma/agent-emilia.png",
    quote:
      "“I generate a full shopping experience aligned to each visitor’s intent — not just a landing page.”",
    skills: [
      { icon: Wand2, label: "Full storefront generation" },
      { icon: Palette, label: "Brand-aligned styling" },
      { icon: Leaf, label: "Theme & collection framing" },
    ],
  },
  {
    name: "Donna",
    role: "The Analyst",
    img: "/figma/agent-donna.png",
    quote:
      "“I read every signal in real time so the workforce always knows what to build next.”",
    skills: [
      { icon: Activity, label: "Real-time cohort analysis" },
      { icon: TrendingUp, label: "Conversion tracking" },
      { icon: Target, label: "Signal-based targeting" },
    ],
  },
  {
    name: "Danny",
    role: "The Merchandiser",
    img: "/figma/agent-danny.png",
    quote:
      "“I curate and rank products for every visitor, always within your margin and stock rules.”",
    skills: [
      { icon: LayoutGrid, label: "Dynamic product curation" },
      { icon: Boxes, label: "Inventory-aware ranking" },
      { icon: Tag, label: "Promo & discount logic" },
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

export default function AgentsSection() {
  const [selected, setSelected] = useState(3); // John (matches the Figma card)
  const agent = AGENTS[selected];

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

      {/* Selectable roster */}
      <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {AGENTS.map((a, i) => (
          <button
            key={a.name}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            className={`flex items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 transition-colors ${
              selected === i
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
                selected === i ? "ring-primary" : "ring-white/10"
              }`}
            />
            <span className="flex flex-col items-start leading-tight">
              <span className="font-inter text-sm font-medium text-white">{a.name}</span>
              <span className="font-inter text-xs text-muted">{a.role}</span>
            </span>
          </button>
        ))}
      </Reveal>

      <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-2">
        {/* Left: agent group image */}
        <TiltCard className="overflow-hidden rounded-3xl border border-primary/30 bg-white/[0.02]">
          <Image
            src="/figma/agents-group.png"
            alt="Four AI agents — Emilia, Donna, Danny and John — collaborating at a table"
            width={1120}
            height={626}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 92vw, 560px"
          />
        </TiltCard>

        {/* Right: selected agent detail (swaps on roster click) */}
        <div className="flex flex-col gap-6 rounded-3xl border border-primary/30 bg-white/[0.05] p-6">
          <div className="flex items-start gap-4">
            <Image
              key={agent.img}
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
