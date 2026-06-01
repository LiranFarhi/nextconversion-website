import Image from "next/image";
import { Sparkles, FlaskConical, Activity } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const JOHN_SKILLS = [
  { icon: Sparkles, label: "Creative assets generation" },
  { icon: FlaskConical, label: "A/B Tested copy styles" },
  { icon: Activity, label: "Performance monitoring" },
];

const ROSTER = [
  { name: "John", role: "The Optimizer" },
  { name: "Danny", role: "The Merchandiser" },
  { name: "Donna", role: "The Analyst" },
  { name: "Emilia", role: "The Taylor" },
];

const IMPACT = [
  { value: "+30%", label: "Conversion Rate" },
  { value: "10x", label: "Campaigns launched per team" },
  { value: "800%", label: "Faster idea-to-launch cycle time" },
  { value: "+29%", label: "Returning Users" },
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
        subtitle="Meet your agent workforce that deliver autonomously behind the scenes."
      />

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
        <Reveal className="card overflow-hidden">
          <Image
            src="/figma/agents-group.png"
            alt="Four AI agents — Emilia, Donna, Danny and John — collaborating at a table"
            width={1120}
            height={626}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 92vw, 560px"
          />
        </Reveal>

        {/* Highlighted agent: John */}
        <Reveal delay={120} className="card flex flex-col justify-center p-7 sm:p-9">
          <div className="flex items-center gap-4">
            <Image
              src="/figma/agent-john.png"
              alt="Portrait of John, the Optimizer agent"
              width={238}
              height={238}
              className="h-16 w-16 rounded-2xl object-cover"
            />
            <div>
              <p className="font-display text-xl font-semibold text-white">John</p>
              <p className="font-inter text-sm text-primary-3">The Optimizer</p>
            </div>
          </div>

          <p className="mt-6 font-inter text-base italic text-white/80">
            &ldquo;I enhance product details — generating descriptions, images and videos, copy styles to
            ensure your performance never drops.&rdquo;
          </p>

          <ul className="mt-7 flex flex-col gap-3">
            {JOHN_SKILLS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 font-inter text-sm text-white/85">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary-3">
                  <Icon size={16} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Roster + scale note */}
      <Reveal className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {ROSTER.map((a) => (
          <div
            key={a.name}
            className="flex items-center gap-2 rounded-full border border-border bg-white/[0.03] py-2 pl-3 pr-4"
          >
            <span className="h-2 w-2 rounded-full bg-green" />
            <span className="font-inter text-sm font-medium text-white">{a.name}</span>
            <span className="font-inter text-sm text-muted">{a.role}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 rounded-full border border-dashed border-border-strong px-4 py-2 font-inter text-sm text-muted">
          +10 more agents ready to scale
        </div>
      </Reveal>

      {/* Impact stats */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {IMPACT.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="card px-5 py-7 text-center">
            <p className="gradient-text font-display text-4xl font-semibold">{s.value}</p>
            <p className="mt-2 font-inter text-sm text-white/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
