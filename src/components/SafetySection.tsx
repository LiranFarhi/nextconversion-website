import { Check, Boxes, FileText, BarChart3, ShoppingBag } from "lucide-react";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";

export default function SafetySection() {
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

/* ---- Visual 1: overlapping policy documents ---- */
function EnforcementVisual() {
  const docs = [
    { label: "Stock", rot: "-rotate-[8deg]", x: "-translate-x-[68px]", z: "z-10" },
    { label: "Discount", rot: "rotate-[8deg]", x: "translate-x-[68px]", z: "z-20" },
    { label: "Margin", rot: "rotate-0", x: "translate-x-0", z: "z-30" },
  ];
  return (
    <div className="relative grid h-[220px] place-items-center">
      <span className="absolute left-1/2 top-2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-green/30 bg-green/10 px-3 py-1 font-inter text-xs text-green">
        <span className="h-1.5 w-1.5 rounded-full bg-green" />
        Policy Check
      </span>
      {docs.map((d) => (
        <div
          key={d.label}
          className={`absolute mt-6 flex h-[150px] w-[118px] flex-col rounded-2xl border border-border-strong bg-surface-card p-3 shadow-xl ${d.rot} ${d.x} ${d.z}`}
        >
          <FileText size={16} className="text-primary-3" />
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

/* ---- Visual 2: connected approval checklist ---- */
function BrandVisual() {
  const items = [
    { label: "Brand voice:", chip: "Casual" },
    { label: "Design guidelines" },
    { label: "Client Approval", pending: true },
  ];
  return (
    <div className="flex h-[220px] flex-col justify-center gap-4">
      <span className="flex w-fit items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] py-1 pl-1 pr-3">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-magenta to-primary font-inter text-[10px] font-bold text-white">
          E
        </span>
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

/* ---- Visual 3: integration logos connected to the engine ---- */
function IntegrationVisual() {
  const logos = [
    { icon: ShoppingBag, color: "text-green", bg: "bg-green/15" },
    { icon: BarChart3, color: "text-yellow", bg: "bg-yellow/15" },
    { icon: ShoppingBag, color: "text-cyan", bg: "bg-cyan/15" },
  ];
  return (
    <div className="relative grid h-[220px] place-items-center">
      <div className="flex gap-5">
        {logos.map((l, i) => (
          <span key={i} className={`grid h-12 w-12 place-items-center rounded-xl border border-border ${l.bg} ${l.color}`}>
            <l.icon size={22} />
          </span>
        ))}
      </div>
      {/* dotted connectors */}
      <div aria-hidden className="my-4 h-10 w-px border-l border-dashed border-border-strong" />
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-[0_0_30px_-4px_rgba(131,79,251,0.7)]">
        <Boxes size={26} />
      </span>
    </div>
  );
}

function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mt-7 flex flex-col items-center text-center">
      <h3 className="font-display text-[28px] font-normal leading-tight text-white">{title}</h3>
      <p className="mt-3 font-inter text-base leading-relaxed text-muted">{desc}</p>
    </div>
  );
}
