"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SnapRow from "./SnapRow";
import { useAutoAdvance } from "./useAutoAdvance";

type Card = {
  label: string;
  sub: string;
  src: string;
  w: number;
  h: number;
  alt: string;
  highlight?: boolean;
};

const CARDS: Card[] = [
  {
    label: "Legacy website",
    sub: "One page for everyone",
    src: "/figma/legacy-store.png",
    w: 1024,
    h: 1004,
    alt: "A single generic storefront shown to every visitor",
  },
  {
    label: "Endless curated storefronts",
    sub: "Personalized per visitor",
    src: "/figma/curated-store.png",
    w: 1928,
    h: 1240,
    alt: "Multiple curated storefronts personalized to different visitors",
    highlight: true,
  },
];

function StoreCard({ card }: { card: Card }) {
  return (
    <div
      className={`card relative flex h-full flex-col overflow-hidden p-6 text-center sm:p-7 ${
        card.highlight ? "border-primary/40 shadow-[0_0_60px_-24px_rgba(131,79,251,0.6)]" : ""
      }`}
    >
      {card.highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-2/30 blur-[90px]"
        />
      )}
      <p className="relative font-display text-xl font-medium text-white sm:text-2xl">{card.label}</p>
      <p className="relative mb-6 mt-1 font-inter text-base text-soft">{card.sub}</p>
      <div className={`relative mt-auto overflow-hidden rounded-2xl ${card.highlight ? "" : "border border-border bg-black/30"}`}>
        <Image
          src={card.src}
          alt={card.alt}
          width={card.w}
          height={card.h}
          className="h-auto w-full"
          sizes="(max-width: 768px) 88vw, 560px"
        />
      </div>
    </div>
  );
}

export default function StorefrontComparison() {
  const { index, select, ref } = useAutoAdvance(CARDS.length);

  return (
    <section id="why" className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
      {/* Desktop: both side by side */}
      <Reveal className="hidden gap-6 md:grid md:grid-cols-2">
        {CARDS.map((c) => (
          <StoreCard key={c.label} card={c} />
        ))}
      </Reveal>

      {/* Mobile: swipe carousel with a peek of the next, auto-advancing */}
      <div ref={ref} className="md:hidden">
        <SnapRow active={index} onSelect={select} className="gap-4 px-1 pb-1" itemClassName="basis-[86%] pr-1">
          {CARDS.map((c) => (
            <StoreCard key={c.label} card={c} />
          ))}
        </SnapRow>
        <div className="mt-4 flex justify-center gap-2">
          {CARDS.map((c, i) => (
            <button
              key={c.label}
              type="button"
              aria-label={`Show ${c.label}`}
              onClick={() => select(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
