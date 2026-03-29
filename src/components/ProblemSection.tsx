"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";
import { useCountUp } from "../lib/useCountUp";

// Brand-color logo badges for the traffic funnel
function GoogleBadge() {
  return (
    <span className="font-bold text-sm leading-none">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#34A853" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#EA4335" }}>g</span>
      <span style={{ color: "#4285F4" }}>l</span>
      <span style={{ color: "#34A853" }}>e</span>
    </span>
  );
}

const channelSources = [
  { name: "Google",    badge: <GoogleBadge />,     bg: "bg-white border border-gray-200 text-gray-800" },
  { name: "ChatGPT",  badge: <span className="font-bold text-sm text-white">✦</span>, bg: "bg-[#10a37f] border border-[#0d8c6b]" },
  { name: "Meta",     badge: <span className="font-bold text-sm text-white">f</span>,  bg: "bg-[#0866ff] border border-[#0655d4]" },
  { name: "TikTok",   badge: <span className="font-bold text-sm text-white">♪</span>,  bg: "bg-black border border-gray-700" },
  { name: "Instagram",badge: <span className="font-bold text-sm text-white">◈</span>,  bg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 border border-pink-400" },
];

function AnimatedStat({ value, isVisible }: { value: number; isVisible: boolean }) {
  const count = useCountUp(value, 1400, isVisible);
  return <>{count}%</>;
}

export default function ProblemSection() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      id="problem"
      ref={ref}
      className="py-20 lg:py-28 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            You don&apos;t lack strategy.{" "}
            <span className="gradient-text">You lack bandwidth.</span>
          </h2>
          <p className="text-lg text-muted">
            Doubling down on personalization is what every brand desires. It
            always gets pushed to the next quarter, because your dev and creative
            teams are underwater — and it hurts your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Stats */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            {/* Positioning stats — the market gap */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-center">
                <p className="text-2xl font-bold text-primary mb-0.5">76%</p>
                <p className="text-xs text-muted leading-snug">of shoppers expect personalization</p>
                <p className="text-[10px] text-muted/50 mt-1">— McKinsey, 2024</p>
              </div>
              <div className="rounded-xl bg-amber-50 border border-amber-100 p-4 text-center">
                <p className="text-2xl font-bold text-amber-600 mb-0.5">96%</p>
                <p className="text-xs text-muted leading-snug">of retailers struggle to deliver it</p>
                <p className="text-[10px] text-muted/50 mt-1">— Forrester, 2024</p>
              </div>
            </div>

            {/* Stat card 1 */}
            <div className="rounded-2xl bg-surface p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-1">
                    First Impression Counts
                  </p>
                  <p className="text-3xl font-bold text-foreground mb-1">
                    <AnimatedStat value={72} isVisible={isVisible} />
                  </p>
                  <p className="text-muted text-sm">
                    of users landing on a generic homepage bounce within 10
                    seconds.
                  </p>
                  <p className="text-xs text-muted/60 mt-1">
                    Source: Industry benchmark data, 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Stat card 2 */}
            <div className="rounded-2xl bg-surface p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-1">
                    Revenue Impact
                  </p>
                  <p className="text-3xl font-bold text-foreground mb-1">
                    <AnimatedStat value={50} isVisible={isVisible} />
                  </p>
                  <p className="text-muted text-sm">
                    of potential conversions missed without proper
                    personalization.
                  </p>
                  <p className="text-xs text-muted/60 mt-1">
                    Source: McKinsey Personalization Report
                  </p>
                </div>
              </div>
            </div>

            {/* Agitation */}
            <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 p-5 border border-primary/10">
              <p className="text-sm text-foreground font-medium">
                Meanwhile, your competitors are already personalizing — and your
                best customers are one click away from their site.
              </p>
            </div>
          </div>

          {/* Right: Funnel visual */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative max-w-md mx-auto">
              {/* Funnel */}
              <div className="space-y-0">
                {/* Top: Traffic sources */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-2xl p-6 border border-primary/10 border-b-0">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    Peak Traffic Sources
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {channelSources.map((ch) => (
                      <div key={ch.name} className="flex flex-col items-center gap-1">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${ch.bg}`}
                        >
                          {ch.badge}
                        </div>
                        <span className="text-[9px] text-muted font-medium">{ch.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Funnel narrowing */}
                <div className="relative">
                  <svg
                    viewBox="0 0 400 80"
                    className="w-full"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="0,0 400,0 350,80 50,80"
                      fill="#f8f9fc"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs font-bold text-red-500 uppercase tracking-wider">
                        The Execution Gap
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gap details */}
                <div className="bg-red-50 py-4 px-6 border-x border-red-100 mx-[12.5%]">
                  <div className="space-y-2 text-xs text-red-600">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✕</span>
                      <span>Generic pages for laser-targeted ads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✕</span>
                      <span>One creative team, 47 audience segments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✕</span>
                      <span>Manual A/B tests that take weeks</span>
                    </div>
                  </div>
                </div>

                {/* Bottom: Stagnant conversions */}
                <div className="bg-gray-100 rounded-b-2xl p-6 mx-[12.5%] border border-gray-200 border-t-0 text-center">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                    Stagnant Results
                  </p>
                  <p className="text-4xl font-bold text-foreground">2-3%</p>
                  <p className="text-sm text-muted">conversion rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
