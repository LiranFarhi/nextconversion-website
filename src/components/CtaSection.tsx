import BookDemoButton from "./BookDemoButton";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section id="book-demo" className="relative overflow-hidden px-5 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[600px] w-[1100px] max-w-[150vw] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(131,79,251,0.5), rgba(113,77,255,0.18) 45%, rgba(1,0,30,0) 72%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-[900px] text-center">
        <p className="gradient-text font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
          NextConversion
        </p>
        <h2 className="mx-auto mt-4 max-w-[760px] font-display text-[clamp(1.6rem,4vw,3rem)] font-normal leading-[1.1] text-white">
          An agent-first engine turning static websites into profitable, adaptive shopping experiences.
        </h2>
        <div className="mt-10 flex justify-center">
          <BookDemoButton />
        </div>
      </Reveal>
    </section>
  );
}
