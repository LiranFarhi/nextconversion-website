import Image from "next/image";
import Reveal from "./Reveal";

export default function StorefrontComparison() {
  return (
    <section id="why" className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {/* Legacy website */}
        <Reveal className="card flex flex-col overflow-hidden p-6 sm:p-7">
          <div className="mb-1 flex items-center gap-2 font-inter text-sm font-medium text-coral">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" aria-hidden />
            Legacy website
          </div>
          <p className="mb-6 font-display text-xl font-normal tracking-[-0.01em] text-white/90 sm:text-2xl">
            One page for everyone
          </p>
          <div className="mt-auto overflow-hidden rounded-2xl border border-border bg-black/30">
            <Image
              src="/figma/legacy-store.png"
              alt="A single generic storefront shown to every visitor"
              width={1024}
              height={1004}
              className="h-auto w-full"
              sizes="(max-width: 768px) 92vw, 560px"
            />
          </div>
        </Reveal>

        {/* Endless curated storefronts */}
        <Reveal delay={120} className="card relative flex flex-col overflow-hidden p-6 sm:p-7">
          {/* brand glow behind the curated mockups */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-2/30 blur-[90px]"
          />
          <div className="relative mb-1 flex items-center gap-2 font-inter text-sm font-medium text-green">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" aria-hidden />
            Endless curated storefronts
          </div>
          <p className="relative mb-6 font-display text-xl font-normal tracking-[-0.01em] text-white/90 sm:text-2xl">
            Personalized per visitor
          </p>
          <div className="relative mt-auto overflow-hidden rounded-2xl">
            <Image
              src="/figma/curated-store.png"
              alt="Multiple curated storefronts personalized to different visitors"
              width={1928}
              height={1240}
              className="h-auto w-full"
              sizes="(max-width: 768px) 92vw, 560px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
