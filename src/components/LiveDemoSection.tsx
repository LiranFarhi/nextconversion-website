import Image from "next/image";
import { Check, Target, Wand2, RefreshCw } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import Parallax from "./Parallax";

const PHASE_DESC =
  'Emilia generates a full shopping experience aligned specifically with "Sustainability" - not just a landing page.';

const OUTCOMES = [
  { value: "+200%", label: "Conversion Rate", color: "text-green" },
  { value: "+35%", label: "AOV", color: "text-primary" },
  { value: "+90%", label: "Session Duration", color: "text-cyan" },
  { value: "+29%", label: "Returning Users", color: "text-magenta" },
];

const ACTIONS = ["Personalize UX layouts", "Adapts Merchandising", "Adjust messaging tone"];

function PhaseBadge({ n, icon }: { n: number; icon: React.ReactNode }) {
  return (
    <div className="flex shrink-0 items-center gap-4">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-primary font-inter text-base font-bold text-white">
        {n}
      </span>
      <span className="grid h-[60px] w-[60px] place-items-center text-white/90">{icon}</span>
    </div>
  );
}

function PhaseHeader({ n, title, icon }: { n: number; title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <PhaseBadge n={n} icon={icon} />
      <div className="flex flex-col gap-1">
        <span className="font-inter text-sm font-normal text-primary-3">phase&nbsp;&nbsp;{n}</span>
        <span className="font-display text-2xl font-semibold leading-none text-white">{title}</span>
      </div>
    </div>
  );
}

const phaseCard = "rounded-3xl border border-primary/60 bg-white/[0.05] p-8 backdrop-blur-md";

export default function LiveDemoSection() {
  return (
    <section id="how-it-works" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        title="Watch a Storefront Evolve in Real-Time"
        subtitle="Meet your agent workforce that deliver autonomously behind the scenes."
      />

      <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
        {/* Left: live storefront preview */}
        <Reveal className="flex flex-col gap-4">
          <p className="font-display text-xl font-medium text-soft">Endless curated storefronts</p>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-primary/25 via-background-2 to-background p-6">
            {/* glowing ellipse behind the phone */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 blur-[90px]"
            />
            <Parallax distance={28} className="relative mx-auto w-full max-w-[420px]">
              <Image
                src="/figma/demo-storefront.png"
                alt="A phone showing an eco-friendly sportswear storefront generated in real time"
                width={2565}
                height={2565}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 92vw, 420px"
              />
            </Parallax>
          </div>
        </Reveal>

        {/* Right: phase timeline */}
        <div className="flex flex-col gap-4">
          <p className="font-display text-xl font-medium text-soft">Agent workforce, live</p>

          {/* Phase 1 */}
          <Reveal className={phaseCard}>
            <PhaseHeader n={1} title="Trigger" icon={<Target size={32} strokeWidth={1.6} />} />
            <p className="mt-4 font-inter text-base leading-relaxed text-white/90">
              A visitor lands from a &ldquo;sustainable activewear&rdquo; ad. The agent reads the intent
              signal the moment they arrive.
            </p>
          </Reveal>

          {/* Phase 2 — active / expanded */}
          <Reveal delay={100} className={`${phaseCard} ring-1 ring-primary/40`}>
            <PhaseHeader n={2} title="Evolution" icon={<Wand2 size={32} strokeWidth={1.6} />} />
            <p className="mt-4 font-inter text-base text-white/90">
              Full storefront adapts to sustainability
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/[0.05] px-4 py-3">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-magenta to-primary font-inter text-[11px] font-bold text-white">
                E
              </span>
              <span className="font-inter text-sm font-semibold text-magenta">Emilia</span>
              <span className="font-inter text-sm text-soft/60">[The Taylor]</span>
              <span className="font-inter text-sm text-white/80">is working...</span>
            </div>

            <p className="mt-4 font-inter text-base text-white/90">{PHASE_DESC}</p>

            <div className="mt-5 flex flex-col gap-3">
              <p className="font-inter text-sm text-white/60">Agent Actions:</p>
              {ACTIONS.map((a) => (
                <div key={a} className="flex items-center gap-3">
                  <Check size={16} strokeWidth={2.2} className="shrink-0 text-green" />
                  <span className="font-inter text-sm text-white/80">{a}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Phase 3 */}
          <Reveal delay={200} className={phaseCard}>
            <PhaseHeader n={3} title="Adaptation" icon={<RefreshCw size={30} strokeWidth={1.6} />} />
            <p className="mt-4 font-inter text-base leading-relaxed text-white/90">
              Copy, layout and merchandising keep adapting to live performance — continuously, 24/7.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Outcome stats */}
      <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-8 sm:flex sm:flex-wrap sm:items-start sm:justify-center sm:gap-12">
        {OUTCOMES.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="flex flex-col gap-2 text-center sm:text-left">
            <CountUp value={s.value} className={`font-display text-4xl font-semibold ${s.color}`} />
            <p className="font-inter text-base text-soft">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
