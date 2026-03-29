"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerParent, StaggerChild } from "./motion-primitives";

const founders = [
  {
    name: "Founder 1",
    role: "CEO & Co-founder",
    background: "10+ years in e-commerce personalization",
    initials: "F1",
    gradient: "from-blue-500 to-indigo-600",
    companies: [
      { name: "Google", style: "bg-blue-50 text-blue-700 border-blue-200" },
      { name: "ex-CEO", style: "bg-gray-50 text-gray-600 border-gray-200" },
    ],
  },
  {
    name: "Founder 2",
    role: "CTO & Co-founder",
    background: "Built recommendation systems at scale",
    initials: "F2",
    gradient: "from-purple-500 to-fuchsia-600",
    companies: [
      { name: "Meta AI", style: "bg-blue-50 text-blue-800 border-blue-200" },
      { name: "ex-CTO", style: "bg-gray-50 text-gray-600 border-gray-200" },
    ],
  },
];

function FounderAvatar({ gradient }: { gradient: string }) {
  return (
    <div className="relative w-16 h-16 mx-auto mb-4">
      {/* Head */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient}`} />
      {/* Eyes */}
      <div className="absolute inset-0 flex items-center justify-center gap-2 pt-1">
        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
      </div>
      {/* Shoulder hint */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-4 rounded-t-full bg-gradient-to-br ${gradient} opacity-60`}
        style={{ bottom: "-6px" }}
      />
    </div>
  );
}

export default function FounderSection() {
  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="section-divider mb-16 lg:mb-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Built by practitioners
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-4">
            We&apos;ve seen this problem from the inside.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Our founding team has spent a combined 20+ years building
            personalization and recommendation systems at the world&apos;s
            largest tech companies. We know what works — and what&apos;s been
            missing.
          </p>
        </FadeUp>

        {/* Founder cards */}
        <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {founders.map((founder) => (
            <StaggerChild key={founder.name}>
              <motion.div
                className="rounded-2xl bg-surface p-6 border border-border text-center"
                whileHover={{ y: -4, boxShadow: "0 12px 40px -8px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                <FounderAvatar gradient={founder.gradient} />
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {founder.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {founder.role}
                </p>
                <p className="text-sm text-muted mb-3">{founder.background}</p>
                {/* Pedigree badges */}
                <div className="flex gap-1.5 justify-center flex-wrap">
                  {founder.companies.map((co) => (
                    <span
                      key={co.name}
                      className={`text-[10px] px-2.5 py-0.5 rounded border font-semibold ${co.style}`}
                    >
                      {co.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>

        {/* Why now callout */}
        <FadeUp delay={0.1} className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-6 border border-primary/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold font-display text-foreground mb-1">Why now?</h4>
                <p className="text-sm text-muted leading-relaxed">
                  The cost of AI inference has dropped 90% in the last 18 months.
                  For the first time, real-time per-visitor personalization is
                  economically viable for every e-commerce brand — not just
                  enterprises with million-dollar budgets.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
