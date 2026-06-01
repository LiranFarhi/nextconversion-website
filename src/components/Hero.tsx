import BookDemoButton from "./BookDemoButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* Soft radial brand glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12%] h-[680px] w-[1100px] max-w-[140vw] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(131,79,251,0.45), rgba(225,81,255,0.18) 45%, rgba(1,0,30,0) 72%)",
        }}
      />
      <div className="relative mx-auto max-w-[1000px] px-5 pb-16 pt-16 text-center sm:pt-24">
        <p className="font-inter text-sm text-white/80">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-green align-middle" />
          AI-Powered E-Commerce Evolution
        </p>

        <h1 className="mx-auto mt-6 max-w-[14ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02] tracking-[-0.02em]">
          Turning Static Storefronts Into Endless{" "}
          <span className="gradient-text font-normal">Self-Adaptive Experiences</span>
        </h1>

        <p className="mx-auto mt-7 max-w-[640px] font-inter text-base text-[#f5f5f5]/85 sm:text-lg">
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
