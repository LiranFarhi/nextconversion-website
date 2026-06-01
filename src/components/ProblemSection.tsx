import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STATS = [
  {
    eyebrow: "First impression counts",
    value: "72%",
    color: "text-coral",
    desc: "Users landing on a generic homepage bounce within 10 seconds.",
  },
  {
    eyebrow: "Business gets hit",
    value: "50%",
    color: "text-coral",
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

      <div className="mt-14 grid items-center gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 100} className="card p-6">
              <p className="font-inter text-sm text-muted">{s.eyebrow}</p>
              <p className={`mt-2 font-display text-5xl font-semibold ${s.color}`}>{s.value}</p>
              <p className="mt-3 font-inter text-sm text-white/70">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="card overflow-hidden p-4">
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
