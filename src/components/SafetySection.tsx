import type { ReactElement } from "react";
import Image from "next/image";
import { Check, Boxes } from "lucide-react";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";
import Logo from "./Logo";

export default function SafetySection(): ReactElement {
  return (
    <section id="safety" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
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

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <TiltCard className="card flex flex-col p-7">
          <EnforcementVisual />
          <Pillar
            title="Strict Enforcement"
            desc="Inventory and discount policies are baked into the agent's logic."
          />
        </TiltCard>

        <TiltCard delay={120} className="card flex flex-col p-7">
          <BrandVisual />
          <Pillar
            title="Brand Alignment"
            desc="Approval workflows ensure the AI operates within your specific brand voice and business constraints and goals."
          />
        </TiltCard>

        <TiltCard delay={240} className="card flex flex-col p-7">
          <IntegrationVisual />
          <Pillar
            title="Plug-and-play"
            desc="Sit on top of your existing stack (Shopify, BigCommerce, Google Analytics) without a migration headache."
          />
        </TiltCard>
      </div>
    </section>
  );
}

/* ---- Visual 1: overlapping policy documents with connecting flow line ---- */
function EnforcementVisual(): ReactElement {
  // Three policy rules shown in Figma: Stock, Discount, Margin
  const docs = [
    { label: "Stock", rot: "-rotate-[8deg]", x: "-translate-x-[68px]", z: "z-10" },
    { label: "Discount", rot: "rotate-[8deg]", x: "translate-x-[68px]", z: "z-20" },
    { label: "Margin Policy", rot: "rotate-0", x: "translate-x-0", z: "z-30" },
  ];
  return (
    <div className="relative grid h-[220px] place-items-center">
      {/* Policy Check badge */}
      <span className="absolute left-1/2 top-2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-green/30 bg-green/10 px-3 py-1 font-inter text-xs text-green">
        <span className="h-1.5 w-1.5 rounded-full bg-green" />
        Policy Check
      </span>

      {/* Connecting flow line — SVG that visually links the 3 rule cards */}
      <svg
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 280 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal connector spanning all three cards at mid-height */}
        <line
          x1="70"
          y1="130"
          x2="210"
          y2="130"
          stroke="rgba(131,79,251,0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        {/* Left tick down to Stock card */}
        <line
          x1="70"
          y1="130"
          x2="70"
          y2="155"
          stroke="rgba(131,79,251,0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        {/* Center tick — not needed, line passes through centre card */}
        {/* Right tick down to Discount card */}
        <line
          x1="210"
          y1="130"
          x2="210"
          y2="155"
          stroke="rgba(131,79,251,0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        {/* Small dot nodes at each junction */}
        <circle cx="70"  cy="130" r="3" fill="rgba(131,79,251,0.6)" />
        <circle cx="140" cy="130" r="3" fill="rgba(131,79,251,0.6)" />
        <circle cx="210" cy="130" r="3" fill="rgba(131,79,251,0.6)" />
      </svg>

      {/* Agent fact strip — Emilia confirming policies are within bounds */}
      <AgentFact />

      {docs.map((d) => (
        <div
          key={d.label}
          className={`absolute mt-6 flex h-[150px] w-[118px] flex-col rounded-2xl border border-border-strong bg-surface-card p-3 shadow-xl ${d.rot} ${d.x} ${d.z}`}
        >
          {/* Document icon row */}
          <svg
            viewBox="0 0 16 16"
            width={16}
            height={16}
            fill="none"
            className="text-primary-3"
            aria-hidden
          >
            <rect x="2" y="1" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <line x1="5" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <line x1="5" y1="7.5" x2="10" y2="7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <line x1="5" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span className="mt-2 font-inter text-xs text-white/80">{d.label}</span>
          <div className="mt-2 space-y-1.5">
            <span className="block h-1 w-full rounded bg-white/10" />
            <span className="block h-1 w-3/4 rounded bg-white/10" />
            <span className="block h-1 w-5/6 rounded bg-white/10" />
          </div>
          <span className="mt-auto grid h-6 w-6 place-items-center self-end rounded-full bg-green/20 text-green">
            <Check size={13} />
          </span>
        </div>
      ))}
    </div>
  );
}

/* Agent fact bubble that renders below the policy check badge */
function AgentFact(): ReactElement {
  return (
    <div className="absolute bottom-0 left-1/2 z-50 flex w-[calc(100%-16px)] -translate-x-1/2 items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 backdrop-blur-sm">
      <Image
        src="/figma/agent-emilia.png"
        alt="Emilia – The Taylor"
        width={28}
        height={28}
        className="h-7 w-7 flex-shrink-0 rounded-full object-cover ring-1 ring-primary/40"
      />
      <p className="font-inter text-[10px] leading-snug text-white/80">
        <span className="font-medium text-primary-3">Emilia&nbsp;·&nbsp;</span>
        All actions are within your approved policy boundaries.
      </p>
    </div>
  );
}

/* ---- Visual 2: connected approval checklist ---- */
function BrandVisual(): ReactElement {
  const items = [
    { label: "Brand voice:", chip: "Casual" },
    { label: "Design guidelines" },
    { label: "Client Approval", pending: true },
  ];
  return (
    <div className="flex h-[220px] flex-col justify-center gap-4">
      <span className="flex w-fit items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] py-1 pl-1 pr-3">
        <Image
          src="/figma/agent-emilia.png"
          alt="Emilia"
          width={24}
          height={24}
          className="h-6 w-6 rounded-full object-cover"
        />
        <span className="font-inter text-xs text-white/80">is working…</span>
      </span>
      <ol className="relative ml-3 flex flex-col gap-3 border-l border-border-strong pl-6">
        {items.map((it) => (
          <li key={it.label} className="relative flex items-center gap-2">
            <span
              className={`absolute -left-[31px] grid h-5 w-5 place-items-center rounded-full ${
                it.pending ? "border border-border-strong bg-background" : "bg-green/20 text-green"
              }`}
            >
              {!it.pending && <Check size={12} />}
            </span>
            <span className="font-inter text-sm text-white/85">{it.label}</span>
            {it.chip && (
              <span className="rounded-md bg-primary/20 px-2 py-0.5 font-inter text-xs text-primary-3">
                {it.chip}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---- Visual 3: real brand logos connected to the engine ---- */
function IntegrationVisual(): ReactElement {
  return (
    <div className="relative flex h-[220px] flex-col items-center justify-center gap-0">
      {/* Logos row */}
      <LogosRow />
      {/* Dotted vertical connector from logos to engine */}
      <div
        aria-hidden
        className="my-3 h-8 w-px border-l border-dashed border-border-strong"
      />
      {/* Engine node */}
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-[0_0_30px_-4px_rgba(131,79,251,0.7)]">
        <Boxes size={26} />
      </span>
    </div>
  );
}

/* Logos row: Shopify · Google Analytics · BigCommerce · NextConversion */
function LogosRow(): ReactElement {
  return (
    <div className="flex items-center gap-3">
      {/* Shopify */}
      <LogoChip label="Shopify" color="#96BF48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/shopify.svg"
          alt="Shopify"
          width={20}
          height={20}
          style={{ filter: "brightness(0) invert(1)" }}
          className="h-5 w-5"
        />
      </LogoChip>

      {/* Google Analytics */}
      <LogoChip label="Google Analytics" color="#E37400">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/googleanalytics.svg"
          alt="Google Analytics"
          width={20}
          height={20}
          style={{ filter: "brightness(0) invert(1)" }}
          className="h-5 w-5"
        />
      </LogoChip>

      {/* BigCommerce */}
      <LogoChip label="BigCommerce" color="#34313F">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/bigcommerce.svg"
          alt="BigCommerce"
          width={20}
          height={20}
          style={{ filter: "brightness(0) invert(1)" }}
          className="h-5 w-5"
        />
      </LogoChip>

      {/* NextConversion mark */}
      <LogoChip label="NextConversion" color="#834ffb">
        <Logo size={20} withWordmark={false} />
      </LogoChip>
    </div>
  );
}

function LogoChip({
  label,
  color,
  children,
}: {
  label: string;
  color: string;
  children: ReactElement;
}): ReactElement {
  return (
    <span
      title={label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-border-strong bg-white/[0.06]"
      style={{ boxShadow: `0 0 0 1px ${color}22` }}
    >
      {children}
    </span>
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
