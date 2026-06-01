import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";

const STATS = [
  {
    eyebrow: "First impression counts",
    value: "72%",
    desc: "Users landing on a generic homepage bounce within 10 seconds.",
  },
  {
    eyebrow: "Business gets hit",
    value: "50%",
    desc: "Missed conversions without proper personalization.",
  },
];

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
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

      <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {STATS.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 120}
              className="card flex flex-1 flex-col justify-center p-8 sm:p-10"
            >
              <p className="font-inter text-sm font-medium text-muted">{s.eyebrow}</p>
              <CountUp
                value={s.value}
                className="mt-3 block font-display text-6xl font-normal leading-none tracking-[-0.02em] text-coral sm:text-7xl"
              />
              <p className="mt-4 max-w-[22rem] font-inter text-base leading-relaxed text-soft/80">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="card flex items-center justify-center overflow-hidden p-6">
          <Image
            src="/figma/funnel.png"
            alt="A conversion funnel collapsing to a stagnant 2-3% conversion rate"
            width={1120}
            height={1000}
            className="mx-auto h-auto w-full max-w-[460px]"
            sizes="(max-width: 768px) 92vw, 460px"
          />
        </Reveal>
      </div>
    </section>
  );
}
