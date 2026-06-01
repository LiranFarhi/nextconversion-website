import Image from "next/image";
import Reveal from "./Reveal";

export default function StorefrontComparison() {
  return (
    <section id="why" className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="card overflow-hidden p-6">
          <div className="mb-1 font-inter text-sm font-medium text-coral">Legacy website</div>
          <p className="mb-5 font-display text-lg text-white/90">One page for everyone</p>
          <div className="overflow-hidden rounded-xl border border-border bg-black/20">
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

        <Reveal delay={120} className="card overflow-hidden p-6">
          <div className="mb-1 font-inter text-sm font-medium text-green">Endless curated storefronts</div>
          <p className="mb-5 font-display text-lg text-white/90">Personalized per visitor</p>
          <div className="overflow-hidden rounded-xl">
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
