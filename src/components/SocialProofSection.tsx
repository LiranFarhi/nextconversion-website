"use client";

import { motion } from "framer-motion";
import { StaggerParent, StaggerChild, FadeUp } from "./motion-primitives";
import { useInView } from "./useInView";
import { useCountUp } from "../lib/useCountUp";

// Styled text logo placeholders — each has a distinctive typographic personality
const logos = [
  { name: "LUXE CO.", style: "font-serif tracking-widest text-gray-700 font-bold" },
  { name: "NOVAFIT", style: "font-mono tracking-tight text-gray-600 font-black" },
  { name: "ATELIER·VII", style: "font-sans tracking-[0.25em] text-gray-600 font-medium" },
  { name: "COSTAL", style: "font-serif italic text-gray-700 font-bold" },
  { name: "MERIDIAN", style: "font-sans font-light tracking-[0.3em] text-gray-600 uppercase" },
];

interface MetricItem {
  prefix: string;
  value: number;
  suffix: string;
  decimals: number;
  label: string;
}

const metrics: MetricItem[] = [
  { prefix: "+", value: 247, suffix: "%", decimals: 0, label: "avg. CR lift" },
  { prefix: "+", value: 35,  suffix: "%", decimals: 0, label: "AOV increase" },
  { prefix: "",  value: 4.2, suffix: "x", decimals: 1, label: "ROAS improvement" },
];

const testimonials = [
  {
    quote:
      "We've been sending $50k/month in paid traffic to the same generic homepage for years. NextConversion showed us what was possible in a single demo.",
    author: "Head of Growth",
    company: "Luxury Swimwear Brand",
    metric: "3x ROAS in pilot",
    metricColor: "text-primary",
  },
  {
    quote:
      "The persona-specific storefronts aren't just a conversion trick — they make the brand feel premium for every visitor segment.",
    author: "E-commerce Director",
    company: "Multi-brand Fashion House",
    metric: "+180% CR lift",
    metricColor: "text-success",
  },
];


function MetricCounter({ metric, isInView }: { metric: MetricItem; isInView: boolean }) {
  const count = useCountUp(metric.value, 1600, isInView, metric.decimals);
  const display = metric.decimals > 0 ? count.toFixed(1) : count;

  return (
    <div className="text-center px-6">
      <p className="text-3xl sm:text-4xl font-bold font-display text-foreground">
        {metric.prefix}{display}{metric.suffix}
      </p>
      <p className="text-sm text-muted mt-1">{metric.label}</p>
    </div>
  );
}

export default function SocialProofSection() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section className="py-14 lg:py-16 bg-white border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo row */}
        <FadeUp className="mb-10">
          <p className="text-xs font-semibold text-muted uppercase tracking-widest text-center mb-6">
            Trusted by leading e-commerce brands
          </p>
          <StaggerParent className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {logos.map((logo) => (
              <StaggerChild key={logo.name}>
                <span className={`text-sm sm:text-base select-none opacity-60 hover:opacity-100 transition-opacity duration-300 ${logo.style}`}>
                  {logo.name}
                </span>
              </StaggerChild>
            ))}
          </StaggerParent>
        </FadeUp>

        {/* Divider */}
        <div className="section-divider mb-10" />

        {/* Animated metrics row */}
        <div ref={ref} className="mb-10">
          <StaggerParent className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            {metrics.map((metric) => (
              <StaggerChild key={metric.label}>
                <MetricCounter metric={metric} isInView={isVisible} />
              </StaggerChild>
            ))}
          </StaggerParent>
          <p className="text-center text-[11px] text-muted/60 mt-3">
            Based on early access partner pilots &amp; industry benchmarks (McKinsey, 2024)
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mb-10" />

        {/* Testimonial cards */}
        <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <StaggerChild key={i}>
              <motion.div
                className="rounded-2xl bg-surface p-6 border border-border relative"
                whileHover={{ y: -3, boxShadow: "0 8px 30px -6px rgba(79,70,229,0.12)" }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                {/* Gradient border accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-foreground">{t.author}</p>
                    <p className="text-[11px] text-muted">{t.company}</p>
                  </div>
                  <div className={`text-sm font-bold ${t.metricColor} bg-current/[0.08] px-3 py-1 rounded-full`}
                    style={{ backgroundColor: "rgba(79,70,229,0.07)" }}>
                    <span className={t.metricColor}>{t.metric}</span>
                  </div>
                </div>
                <p className="text-[10px] text-muted/50 mt-3">Early access partner pilot</p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
