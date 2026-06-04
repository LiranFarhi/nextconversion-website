import BookDemoButton from "./BookDemoButton";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section id="book-demo" className="relative overflow-hidden px-5 py-28 sm:py-36">
      {/* Purple gradient rising from the bottom with a soft arc, per the Figma */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 88% at 50% 121%, #9b6bff 0%, #7a40ee 18%, #5026b8 34%, #2a1568 50%, rgba(8,5,26,0) 70%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-[900px] text-center">
        <p className="gradient-text gradient-animate font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
          NextConversion
        </p>
        <h2 className="mx-auto mt-4 max-w-[760px] font-display text-[clamp(1.6rem,4vw,3rem)] font-normal leading-[1.1] text-white">
          An agent-first engine turning static websites into profitable, adaptive shopping experiences.
        </h2>
        <div className="mt-10 flex justify-center">
          <BookDemoButton variant="solid" />
        </div>
      </Reveal>
    </section>
  );
}
