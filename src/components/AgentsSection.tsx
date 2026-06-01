import Image from "next/image";
import {
  Images,
  MessageSquareQuote,
  LayoutDashboard,
  TrendingUp,
  CircleDollarSign,
  Clock,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const JOHN_SKILLS: { icon: LucideIcon; label: string }[] = [
  { icon: Images, label: "Creative assets generation" },
  { icon: MessageSquareQuote, label: "A/B Tested copy styles" },
  { icon: LayoutDashboard, label: "Performance monitoring" },
];

const IMPACT: { icon: LucideIcon; value: string; color: string; label: string }[] = [
  { icon: TrendingUp, value: "+30%", color: "#0fdd98", label: "Conversion Rate" },
  { icon: CircleDollarSign, value: "10x", color: "#834ffb", label: "Campaigns launched per team" },
  { icon: Clock, value: "800%", color: "#009dff", label: "Faster idea-to-launch cycle time" },
  { icon: Users, value: "+29%", color: "#ff6eba", label: "Returning Users" },
];

export default function AgentsSection() {
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

      <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
        {/* Left: agent group image */}
        <Reveal className="overflow-hidden rounded-3xl border border-primary/30 bg-white/[0.02]">
          <Image
            src="/figma/agents-group.png"
            alt="Four AI agents — Emilia, Donna, Danny and John — collaborating at a table"
            width={1120}
            height={626}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 92vw, 560px"
          />
        </Reveal>

        {/* Right: highlighted agent — John */}
        <Reveal
          delay={120}
          className="flex flex-col gap-6 rounded-3xl border border-primary/30 bg-white/[0.05] p-6"
        >
          <div className="flex items-start gap-4">
            <Image
              src="/figma/agent-john.png"
              alt="Portrait of John, the Optimizer agent"
              width={238}
              height={238}
              className="h-[119px] w-[119px] flex-shrink-0 rounded-3xl object-cover"
            />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-white/15 bg-primary/15 text-primary-3">
                  <Sparkles size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-display text-lg font-medium leading-6 text-[#f4f0ff]">John</p>
                  <p className="font-inter text-base leading-6 text-soft/60">The Optimizer</p>
                </div>
              </div>
              <p className="font-inter text-base leading-6 text-white">
                &ldquo;I enhance product details - generating descriptions, images and videos, copy
                styles to ensure your performance never drops.&rdquo;
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-3">
            {JOHN_SKILLS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 font-display text-base font-medium leading-6 text-[#f4f0ff]"
              >
                <Icon size={16} className="flex-shrink-0 text-primary" strokeWidth={2} />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* +10 more agents pill */}
      <Reveal className="mt-8 flex justify-center">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] py-2 pl-3 pr-4">
          <Sparkles size={16} className="text-primary" strokeWidth={1.5} />
          <div className="flex items-center -space-x-2">
            {["Emilia", "Donna", "Danny"].map((name) => (
              <span
                key={name}
                className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-white/10 font-display text-xs font-medium text-white"
              >
                {name[0]}
              </span>
            ))}
            <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-primary font-inter text-base font-semibold leading-none text-white">
              ...
            </span>
          </div>
          <span className="font-inter text-sm leading-5 text-white/80">
            +10 more agents ready to scale
          </span>
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
                <p className="font-display text-4xl font-semibold leading-10" style={{ color }}>
                  {value}
                </p>
                <p className="font-inter text-base leading-6 text-soft/60">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
