import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const OUTCOMES = [
  { value: "+200%", label: "Conversion Rate" },
  { value: "+35%", label: "AOV" },
  { value: "+90%", label: "Session Duration" },
  { value: "+29%", label: "Returning Users" },
];

const PHASES = [
  {
    phase: "Phase 1",
    title: "Intent captured",
    desc: "A visitor arrives from a “sustainable activewear” ad. The agent reads the signal instantly.",
    done: true,
  },
  {
    phase: "Phase 2",
    title: "Emilia builds the storefront",
    desc: "A full shopping experience is generated around sustainability — hero, categories and bestsellers.",
    done: true,
    active: true,
  },
  {
    phase: "Phase 3",
    title: "Continuous optimization",
    desc: "Copy, layout and merchandising keep adapting to live performance, 24/7.",
    done: false,
  },
];

export default function LiveDemoSection() {
  return (
    <section id="how-it-works" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        title="Watch a Storefront Evolve in Real-Time"
        subtitle="Meet your agent workforce that deliver autonomously behind the scenes."
      />

      <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
        <Reveal className="relative">
          <Image
            src="/figma/demo-storefront.png"
            alt="A phone showing an eco-friendly sportswear storefront generated in real time"
            width={2565}
            height={2565}
            className="mx-auto h-auto w-full max-w-[460px]"
            sizes="(max-width: 1024px) 92vw, 460px"
          />
        </Reveal>

        <div className="flex flex-col gap-4">
          {PHASES.map((p, i) => (
            <Reveal
              key={p.phase}
              delay={i * 100}
              className={`card p-6 ${p.active ? "ring-1 ring-primary/40" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-primary-3">
                  {p.phase}
                </span>
                {p.done ? (
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-green/15 text-green">
                    <Check size={14} />
                  </span>
                ) : (
                  <span className="h-6 w-6 rounded-full border border-border-strong" />
                )}
              </div>
              <p className="mt-3 font-display text-lg font-semibold text-white">{p.title}</p>
              <p className="mt-2 font-inter text-sm text-white/70">{p.desc}</p>
              {p.active && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1.5 font-inter text-xs text-white/80">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-magenta" />
                  Emilia <span className="text-muted">[The Taylor]</span> is working…
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {/* Outcomes */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {OUTCOMES.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="card px-5 py-7 text-center">
            <p className="gradient-text font-display text-4xl font-semibold">{s.value}</p>
            <p className="mt-2 font-inter text-sm text-white/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
