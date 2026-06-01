import Image from "next/image";
import Reveal from "./Reveal";

export default function StorefrontComparison() {
  return (
    <section id="why" className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {/* Legacy website */}
        <Reveal className="card flex flex-col overflow-hidden p-6 text-center sm:p-7">
          <p className="font-display text-xl font-medium text-white sm:text-2xl">Legacy website</p>
          <p className="mb-6 mt-1 font-inter text-sm text-muted">One page for everyone</p>
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

        {/* Endless curated storefronts (highlighted) */}
        <Reveal
          delay={120}
          className="card relative flex flex-col overflow-hidden border-primary/40 p-6 text-center shadow-[0_0_60px_-24px_rgba(131,79,251,0.6)] sm:p-7"
        >
          {/* brand glow behind the curated mockups */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-2/30 blur-[90px]"
          />
          <p className="relative font-display text-xl font-medium text-white sm:text-2xl">
            Endless curated storefronts
          </p>
          <p className="relative mb-6 mt-1 font-inter text-sm text-muted">Personalized per visitor</p>
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
