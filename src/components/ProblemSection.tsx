"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";
import { useCountUp } from "../lib/useCountUp";

// Brand-color logo badges — icon only, no names
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

function InstagramBadge() {
  return (
    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.2}>
      <rect x="2" y="2" width="20" height="20" rx="6" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" strokeWidth={0} />
    </svg>
  );
}

const channelSources = [
  { name: "Google",    badge: <GoogleBadge />,           bg: "bg-white border border-gray-200" },
  { name: "OpenAI",   badge: <span className="font-bold text-sm text-white">AI</span>, bg: "bg-[#1a1a1a] border border-gray-700" },
  { name: "Meta",     badge: <span className="font-bold text-sm text-white">f</span>,  bg: "bg-[#0866ff] border border-[#0655d4]" },
  { name: "TikTok",   badge: <span className="font-bold text-xs text-white tracking-tighter">TT</span>, bg: "bg-black border border-gray-700" },
  { name: "Instagram",badge: <InstagramBadge />,          bg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 border border-pink-400" },
];

function AnimatedStat({ value, isVisible }: { value: number; isVisible: boolean }) {
  const count = useCountUp(value, 1400, isVisible);
  return <>{count}%</>;
}

export default function ProblemSection() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="problem" ref={ref} className="py-12 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-8 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            You don&apos;t lack strategy.{" "}
            <span className="gradient-text">You lack bandwidth.</span>
          </h2>
          <p className="text-lg text-muted">
            Doubling down on personalization is what every brand desires. It
            always gets pushed to the next quarter, because your dev and creative
            teams are underwater — and it hurts your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Stats */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {/* 96% stat — same visual weight as the cards below */}
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-1">
                    The Personalization Gap
                  </p>
                  <p className="text-3xl font-bold text-foreground mb-1">96%</p>
                  <p className="text-muted text-sm">
                    of retailers struggle to implement personalization
                  </p>
                  <p className="text-xs text-muted/60 mt-1">— Forrester, 2024</p>
                </div>
              </div>
            </div>

            {/* Stat card 1 */}
            <div className="rounded-2xl bg-surface p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
                    of users landing on a generic homepage bounce within 10 seconds.
                  </p>
                  <p className="text-xs text-muted/60 mt-1">Source: Industry benchmark data, 2024</p>
                </div>
              </div>
            </div>

            {/* Stat card 2 */}
            <div className="rounded-2xl bg-surface p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-1">
                    Business Gets Hit
                  </p>
                  <p className="text-3xl font-bold text-foreground mb-1">
                    <AnimatedStat value={50} isVisible={isVisible} />
                  </p>
                  <p className="text-muted text-sm">
                    of potential conversions missed without proper personalization.
                  </p>
                  <p className="text-xs text-muted/60 mt-1">Source: McKinsey Personalization Report</p>
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
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative max-w-md mx-auto">
              <div className="space-y-0">
                {/* Top: Traffic sources */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-2xl p-6 border border-primary/10 border-b-0 text-center">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                    Peak Traffic Sources
                  </p>
                  <p className="text-[10px] text-muted mb-4">Social · Email · SEO · GEO</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {channelSources.map((ch) => (
                      <motion.div
                        key={ch.name}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${ch.bg}`}
                      >
                        {ch.badge}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Funnel narrowing SVG */}
                <div className="relative">
                  <svg viewBox="0 0 400 80" className="w-full" preserveAspectRatio="none">
                    <polygon points="0,0 400,0 350,80 50,80" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
                  </svg>
                </div>

                {/* Execution Gap — title + reasons in one bucket */}
                <div className="bg-red-50 py-5 px-6 border-x border-red-100 mx-[12.5%]">
                  <p className="text-xs font-bold text-red-500 uppercase tracking-wider text-center mb-3">
                    The Execution Gap
                  </p>
                  <div className="space-y-2 text-xs text-red-600">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400 shrink-0">✕</span>
                      <span>Generic pages for laser-targeted ads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400 shrink-0">✕</span>
                      <span>One creative team, 47 audience segments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400 shrink-0">✕</span>
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
