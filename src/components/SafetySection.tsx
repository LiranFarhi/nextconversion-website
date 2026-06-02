import type { ReactElement } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
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

/* ---- Visual 1: policy rules connected by a visible flow line ---- */
const POLICY_DOCS = [
  { label: "Stock", color: "#0fdd98" },
  { label: "Margin", color: "#834ffb" },
  { label: "Discount", color: "#14bced" },
];

function DocCard({ label, color }: { label: string; color: string }): ReactElement {
  return (
    <div className="relative flex h-[118px] w-[76px] flex-col rounded-xl border border-border-strong bg-surface-card p-2.5 shadow-lg">
      <span
        aria-hidden
        className="absolute left-1/2 top-0 h-1 w-9 -translate-x-1/2 rounded-b-full"
        style={{ background: color }}
      />
      <svg viewBox="0 0 16 16" width={14} height={14} fill="none" className="mt-1" aria-hidden style={{ color }}>
        <rect x="2" y="1" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="5" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="5" y1="7.5" x2="10" y2="7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="5" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <span className="mt-1.5 font-inter text-[11px] text-white/80">{label}</span>
      <div className="mt-1.5 space-y-1">
        <span className="block h-1 w-full rounded bg-white/10" />
        <span className="block h-1 w-3/4 rounded bg-white/10" />
      </div>
      <span className="mt-auto grid h-5 w-5 place-items-center self-end rounded-full bg-green/20 text-green">
        <Check size={11} />
      </span>
    </div>
  );
}

function EnforcementVisual(): ReactElement {
  return (
    <div className="relative flex h-[220px] flex-col items-center justify-center gap-1 pb-12">
      {/* Policy Check badge */}
      <span className="flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-3 py-1 font-inter text-xs text-green">
        <span className="h-1.5 w-1.5 rounded-full bg-green" />
        Policy Check
      </span>

      {/* Connecting flow line linking the three rules */}
      <svg viewBox="0 0 252 26" preserveAspectRatio="none" className="mt-1 h-[26px] w-[252px]" aria-hidden>
        <line x1="38" y1="6" x2="214" y2="6" stroke="rgba(131,79,251,0.5)" strokeWidth="1.5" strokeDasharray="4 3" />
        {[38, 126, 214].map((x) => (
          <g key={x}>
            <line x1={x} y1="6" x2={x} y2="24" stroke="rgba(131,79,251,0.5)" strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx={x} cy="6" r="3" fill="#834ffb" />
          </g>
        ))}
      </svg>

      {/* Policy rule cards */}
      <div className="flex items-start gap-3">
        {POLICY_DOCS.map((d) => (
          <DocCard key={d.label} label={d.label} color={d.color} />
        ))}
      </div>

      {/* Agent fact — Emilia confirming policies are within bounds */}
      <AgentFact />
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

/* ---- Visual 3: source platforms feeding data down into NextConversion ---- */
function IntegrationVisual(): ReactElement {
  return (
    <div className="relative flex h-[220px] flex-col items-center justify-center">
      {/* Source platforms (Shopify · Google Analytics · BigCommerce) */}
      <div className="flex w-[210px] items-center justify-between">
        <LogoChip label="Shopify" color="#96BF48">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/shopify.svg" alt="Shopify" width={20} height={20} style={{ filter: "brightness(0) invert(1)" }} className="h-5 w-5" />
        </LogoChip>
        <LogoChip label="Google Analytics" color="#E37400">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/googleanalytics.svg" alt="Google Analytics" width={20} height={20} style={{ filter: "brightness(0) invert(1)" }} className="h-5 w-5" />
        </LogoChip>
        <LogoChip label="BigCommerce" color="#34313F">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/bigcommerce.svg" alt="BigCommerce" width={20} height={20} style={{ filter: "brightness(0) invert(1)" }} className="h-5 w-5" />
        </LogoChip>
      </div>

      {/* Connectors converging down into NextConversion */}
      <svg viewBox="0 0 210 56" preserveAspectRatio="none" className="h-12 w-[210px]" aria-hidden>
        <defs>
          <linearGradient id="ncFlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(131,79,251,0.18)" />
            <stop offset="1" stopColor="rgba(131,79,251,0.85)" />
          </linearGradient>
        </defs>
        <path d="M22 0 C22 34 105 22 105 56" fill="none" stroke="url(#ncFlow)" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M105 0 L105 56" fill="none" stroke="url(#ncFlow)" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M188 0 C188 34 105 22 105 56" fill="none" stroke="url(#ncFlow)" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>

      {/* NextConversion — receives the data below */}
      <div className="flex items-center gap-2 rounded-2xl border border-primary/40 bg-primary/15 px-4 py-2.5 shadow-[0_0_34px_-6px_rgba(131,79,251,0.75)]">
        <Logo size={20} withWordmark={false} />
        <span className="font-display text-sm font-semibold text-white">NextConversion</span>
      </div>
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
