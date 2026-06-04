import Image from "next/image";
import { TrendingDown, AlertTriangle } from "lucide-react";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";

const STATS = [
  {
    eyebrow: "First impression counts",
    icon: TrendingDown,
    value: "72%",
    desc: "Users landing on a generic homepage bounce within 10 seconds.",
  },
  {
    eyebrow: "Business gets hit",
    icon: AlertTriangle,
    value: "50%",
    desc: "Missed conversions without proper personalization.",
  },
];

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-28">
      <SectionHeading
        title={
          <>
            You don&rsquo;t lack strategy.
            <br />
            You lack bandwidth.
          </>
        }
        subtitle="Doubling down on personalization is what every brand desires. It always gets pushed to the next quarter, because your dev and creative teams are underwater, and it hurts your business."
      />

      <div className="mt-8 grid items-stretch gap-6 sm:mt-14 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {STATS.map((s, i) => (
            <TiltCard
              key={s.value}
              delay={i * 120}
              className="card flex flex-1 flex-col justify-center p-6"
            >
              <p className="font-inter text-sm font-medium uppercase tracking-[0.05em] text-[#ff6eba]">
                {s.eyebrow}
              </p>
              <div className="mt-2 flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-coral/20 text-coral">
                  <s.icon size={24} />
                </span>
                <CountUp
                  value={s.value}
                  className="font-display text-4xl font-semibold leading-none text-white"
                />
              </div>
              <p className="mt-2 font-inter text-base leading-relaxed text-soft/60">
                {s.desc}
              </p>
            </TiltCard>
          ))}
        </div>

        <TiltCard
          delay={120}
          className="flex items-center justify-center"
        >
          <Image
            src="/figma/funnel.png"
            alt="A conversion funnel collapsing to a stagnant 2-3% conversion rate"
            width={1120}
            height={1000}
            className="mx-auto h-auto w-full max-w-[460px]"
            sizes="(max-width: 768px) 92vw, 460px"
          />
        </TiltCard>
      </div>
    </section>
  );
}
