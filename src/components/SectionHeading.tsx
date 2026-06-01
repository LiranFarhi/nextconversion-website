import Reveal from "./Reveal";

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ title, subtitle, className = "" }: Props) {
  return (
    <Reveal className={`mx-auto max-w-[760px] text-center ${className}`}>
      <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.01em] text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-[620px] font-inter text-base text-soft/80">{subtitle}</p>
      )}
    </Reveal>
  );
}
