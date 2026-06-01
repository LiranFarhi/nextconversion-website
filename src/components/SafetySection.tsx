import { Check, Lock, ShieldCheck, Boxes } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const POLICIES = [
  { label: "Margin", value: "Min 20%" },
  { label: "Discount", value: "Min 20%" },
  { label: "Stock", value: "Min 20%" },
  { label: "Policy Check", value: "Min 15%" },
];

const BRAND = ["Brand voice: Casual", "Design guidelines", "Client Approval"];

const STACK = ["Shopify", "BigCommerce", "Google Analytics"];

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
        {/* Strict Enforcement */}
        <Reveal className="card flex flex-col p-7">
          <div className="flex flex-col gap-2">
            {POLICIES.map((p) => (
              <div
                key={p.label}
                className="flex items-center justify-between rounded-xl border border-border bg-white/[0.02] px-4 py-2.5"
              >
                <span className="font-inter text-sm text-white/80">{p.label}</span>
                <span className="flex items-center gap-2 font-inter text-sm font-medium text-white">
                  {p.value}
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-green/15 text-green">
                    <Check size={12} />
                  </span>
                </span>
              </div>
            ))}
          </div>
          <Pillar
            icon={Lock}
            title="Strict Enforcement"
            desc="Inventory and discount policies are baked into the agent's logic."
          />
        </Reveal>

        {/* Brand Alignment */}
        <Reveal delay={120} className="card flex flex-col p-7">
          <div className="flex flex-col gap-2">
            {BRAND.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-4 py-2.5 font-inter text-sm text-white/80"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/20 text-primary-3">
                  <Check size={12} />
                </span>
                {b}
              </div>
            ))}
            <p className="mt-1 inline-flex items-center gap-2 px-1 font-inter text-xs text-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-magenta" />
              Emilia [The Taylor] is working…
            </p>
          </div>
          <Pillar
            icon={ShieldCheck}
            title="Brand Alignment"
            desc="Approval workflows ensure the AI operates within your specific brand voice and business constraints and goals."
          />
        </Reveal>

        {/* Plug-and-play */}
        <Reveal delay={240} className="card flex flex-col p-7">
          <div className="flex flex-col gap-2">
            {STACK.map((s) => (
              <div
                key={s}
                className="flex items-center justify-between rounded-xl border border-border bg-white/[0.02] px-4 py-2.5"
              >
                <span className="font-inter text-sm text-white/80">{s}</span>
                <span className="rounded-full bg-green/15 px-2 py-0.5 font-inter text-[11px] font-medium text-green">
                  Connected
                </span>
              </div>
            ))}
          </div>
          <Pillar
            icon={Boxes}
            title="Plug-and-play"
            desc="Sit on top of your existing stack (Shopify, BigCommerce, Google Analytics) without a migration headache."
          />
        </Reveal>
      </div>
    </section>
  );
}

function Pillar({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Lock;
  title: string;
  desc: string;
}) {
  return (
    <div className="mt-7 border-t border-border pt-6">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary-3">
          <Icon size={18} />
        </span>
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 font-inter text-sm text-white/70">{desc}</p>
    </div>
  );
}
