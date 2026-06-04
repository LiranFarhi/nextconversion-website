import type { ReactElement } from "react";
import Image from "next/image";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    graphic: "/strategy/enforcement.webp",
    alt: "Stock, Margin and Discount policy documents passing a policy check",
    title: "Strict Enforcement",
    desc: "Inventory and discount policies are baked into the agent's logic.",
  },
  {
    graphic: "/strategy/brand.webp",
    alt: "Emilia working through a brand-voice, design and approval checklist",
    title: "Brand Alignment",
    desc: "Approval workflows ensure the AI operates within your specific brand voice and business constraints and goals.",
  },
  {
    graphic: "/strategy/integration.webp",
    alt: "Shopify, Google Analytics and BigCommerce feeding into NextConversion",
    title: "Plug-and-play",
    desc: "Sit on top of your existing stack (Shopify, BigCommerce, Google Analytics) without a migration headache.",
  },
];

export default function SafetySection(): ReactElement {
  return (
    <section id="safety" className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-28">
      <SectionHeading
        title={
          <>
            Strategy stays with you.
            <br />
            Safety and scale are on us.
          </>
        }
        subtitle="Your brand guidelines are paramount. Our agents operate strictly within your established boundaries, always."
      />

      <div className="mt-8 grid gap-6 sm:mt-14 lg:grid-cols-3">
        {PILLARS.map((p, i) => (
          <TiltCard key={p.title} delay={i * 120} className="card flex flex-col p-7">
            <div className="relative mx-auto aspect-[385/269] w-full max-w-[360px]">
              <Image
                src={p.graphic}
                alt={p.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-contain"
              />
            </div>
            <Pillar title={p.title} desc={p.desc} />
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

function Pillar({ title, desc }: { title: string; desc: string }): ReactElement {
  return (
    <div className="mt-7 flex flex-col items-center text-center">
      <h3 className="font-display text-[28px] font-normal leading-tight text-white">{title}</h3>
      <p className="mt-3 font-inter text-base leading-relaxed text-muted">{desc}</p>
    </div>
  );
}
