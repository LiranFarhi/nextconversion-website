import BookDemoButton from "./BookDemoButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* Soft purple radial brand glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[720px] w-[1180px] max-w-[150vw] -translate-x-1/2 rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(closest-side, rgba(131,79,251,0.42), rgba(225,81,255,0.16) 46%, rgba(1,0,30,0) 72%)",
        }}
      />

      <div className="relative mx-auto max-w-[1000px] px-5 pb-20 pt-[72px] text-center sm:pt-[96px]">
        {/* Eyebrow badge */}
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 font-inter text-[13px] font-medium tracking-[0.01em] text-soft backdrop-blur-sm">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
          </span>
          AI-Powered E-Commerce Evolution
        </p>

        <h1 className="mx-auto mt-7 max-w-[15ch] font-display text-[clamp(2.75rem,7.2vw,5.5625rem)] font-light leading-[1.02] tracking-[-0.02em] text-white">
          Turning Static Storefronts Into{" "}
          <span className="gradient-text font-normal">Endless Self-Adaptive Experiences</span>
        </h1>

        <p className="mx-auto mt-7 max-w-[620px] font-inter text-base leading-relaxed text-soft/80 sm:text-[18px]">
          Stop directing targeted ad traffic to generic websites. NextConversion transforms each click into
          a personalized, real-time storefront that optimizes continuously.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <BookDemoButton />
          <a href="#why" className="btn-ghost">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
