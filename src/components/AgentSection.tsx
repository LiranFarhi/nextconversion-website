"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "./useInView";
import { FadeUp, StaggerParent, StaggerChild } from "./motion-primitives";
import { useCountUp } from "../lib/useCountUp";

const agents = [
  {
    name: "Danny",
    role: "The Analyst",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    accentLight: "text-blue-400",
    quote:
      "I find the buying patterns your team misses — turning raw data into real-time decisions.",
    tasks: [
      "Intent signal processing",
      "Trend forecasting",
      "Segment discovery",
    ],
    avatar: "📊",
  },
  {
    name: "Emilia",
    role: "The Tailor",
    color: "from-purple-500 to-fuchsia-600",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    accentLight: "text-purple-400",
    quote:
      "I redesign your store for each visitor in real-time — no designer needed.",
    tasks: [
      "Dynamic UX layouts",
      "Adaptive merchandising",
      "Friction removal",
    ],
    avatar: "🎨",
  },
  {
    name: "John",
    role: "The Optimizer",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-600",
    accentLight: "text-emerald-400",
    quote:
      "I keep your product pages fresh and high-performing — new copy, images, and videos generated automatically.",
    tasks: [
      "Creative asset generation",
      "A/B tested copy styles",
      "Performance monitoring",
    ],
    avatar: "⚡",
  },
  {
    name: "Donna",
    role: "The Shopping Assistant",
    color: "from-orange-500 to-red-600",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-600",
    accentLight: "text-orange-400",
    quote:
      "I guide shoppers to buy more — intelligently bundling products to maximize every cart.",
    tasks: [
      "Smart product pairing",
      "Dynamic offers",
      "Cart optimization",
    ],
    avatar: "🛍️",
  },
];

interface KpiItem {
  label: string;
  prefix: string;
  value: number;
  suffix: string;
  decimals?: number;
  icon: string;
  source: string;
}

const kpis: KpiItem[] = [
  { label: "Conversion Rate Lift", prefix: "up to ", value: 200, suffix: "%", icon: "📈", source: "Personalization benchmark" },
  { label: "AOV Lift",             prefix: "up to ", value: 35,  suffix: "%", icon: "💰", source: "Smart bundling benchmark" },
  { label: "Session Duration Lift",prefix: "up to ", value: 90,  suffix: "%", icon: "⏱️", source: "Adaptive UX benchmark" },
  { label: "Returning Users Lift", prefix: "up to ", value: 29,  suffix: "%", icon: "🔄", source: "Relevance benchmark" },
];


// ─── Agent Roundtable ──────────────────────────────────────────────────────────

const roundtableAgents = [
  {
    name: "Danny",
    role: "The Analyst",
    color: "from-blue-500 to-indigo-600",
    ringRgba: "rgba(99,102,241,0.7)",
    avatar: "📊",
    quote: "I find the patterns your team misses — turning raw data into real-time decisions.",
    tasks: ["Intent signal processing", "Trend forecasting", "Segment discovery"],
    pos: "top-12 left-1/2 -translate-x-1/2",
    tooltipDir: "below",
  },
  {
    name: "Emilia",
    role: "The Tailor",
    color: "from-purple-500 to-fuchsia-600",
    ringRgba: "rgba(168,85,247,0.7)",
    avatar: "🎨",
    quote: "I redesign your store for each visitor in real-time — no designer needed.",
    tasks: ["Dynamic UX layouts", "Adaptive merchandising", "Friction removal"],
    pos: "top-1/2 left-2 -translate-y-1/2",
    tooltipDir: "right",
  },
  {
    name: "John",
    role: "The Optimizer",
    color: "from-emerald-500 to-teal-600",
    ringRgba: "rgba(16,185,129,0.7)",
    avatar: "⚡",
    quote: "I keep your pages fresh and high-performing — generated automatically.",
    tasks: ["Creative asset generation", "A/B tested copy", "Performance monitoring"],
    pos: "top-1/2 right-2 -translate-y-1/2",
    tooltipDir: "left",
  },
  {
    name: "Donna",
    role: "The Shopping Assistant",
    color: "from-orange-500 to-red-600",
    ringRgba: "rgba(249,115,22,0.7)",
    avatar: "🛍️",
    quote: "I guide shoppers to buy more — intelligently bundling products to maximize every cart.",
    tasks: ["Smart product pairing", "Dynamic offers", "Cart optimization"],
    pos: "bottom-2 left-1/2 -translate-x-1/2",
    tooltipDir: "above",
  },
];

function AgentSeat({
  agent,
  isAnyHovered,
  isHovered,
  onEnter,
  onLeave,
}: {
  agent: typeof roundtableAgents[0];
  isAnyHovered: boolean;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const tooltipClass =
    agent.tooltipDir === "below"
      ? "top-full mt-2 left-1/2 -translate-x-1/2"
      : agent.tooltipDir === "above"
      ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
      : agent.tooltipDir === "right"
      ? "top-1/2 left-full ml-2 -translate-y-1/2"
      : "top-1/2 right-full mr-2 -translate-y-1/2";

  return (
    <div className={`absolute ${agent.pos} z-10`}>
      <motion.div
        className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center cursor-pointer shadow-lg select-none`}
        whileHover={{ scale: 1.18 }}
        animate={{
          opacity: isAnyHovered && !isHovered ? 0.4 : 1,
          boxShadow: isHovered
            ? `0 0 0 4px ${agent.ringRgba}, 0 0 24px ${agent.ringRgba}`
            : "0 4px 12px rgba(0,0,0,0.3)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        onHoverStart={onEnter}
        onHoverEnd={onLeave}
      >
        <span className="text-2xl">{agent.avatar}</span>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className={`absolute ${tooltipClass} w-40 bg-gray-900 text-white rounded-xl p-3 shadow-2xl border border-white/15 z-30 pointer-events-none`}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.18 }}
            >
              <p className="text-[10px] font-bold text-primary-light mb-1">{agent.role}</p>
              <p className="text-[9px] text-gray-300 leading-relaxed mb-2 italic">
                &ldquo;{agent.quote}&rdquo;
              </p>
              <div className="space-y-1">
                {agent.tasks.map((task) => (
                  <div key={task} className="flex items-center gap-1.5 text-[8px] text-gray-400">
                    <span className="text-success">✓</span>
                    {task}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <p className="text-[9px] text-gray-400 text-center mt-1 font-medium">{agent.name}</p>
    </div>
  );
}

function TvMonitor({ position }: { position: "left" | "right" }) {
  const barHeights = position === "left" ? [55, 80, 40, 70] : [70, 45, 90, 55];
  return (
    <div
      className={`absolute top-3 ${position === "left" ? "left-6" : "right-6"} w-[72px] h-[50px] rounded-sm bg-slate-800 border border-slate-600 overflow-hidden`}
    >
      <div className="absolute top-0 left-0 right-0 h-2 bg-slate-700 flex items-center px-1 gap-1">
        <div className="w-1 h-1 rounded-full bg-red-500/70" />
        <div className="w-1 h-1 rounded-full bg-yellow-500/70" />
        <div className="w-1 h-1 rounded-full bg-green-500/70" />
      </div>
      <div className="absolute bottom-1 left-1.5 right-1.5 flex items-end gap-0.5">
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-green-400/60 rounded-t-sm"
            animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] }}
            style={{ maxHeight: "22px" }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
          />
        ))}
      </div>
    </div>
  );
}

function CenterBarChart() {
  const heights = [45, 70, 38, 85, 55];
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-1 pb-3 px-6">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 max-w-[10px] bg-primary/60 rounded-t-sm"
          animate={{ height: [`${h * 0.25}%`, `${h}%`, `${h * 0.25}%`] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
        />
      ))}
    </div>
  );
}

function AgentRoundtable() {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto h-72 mb-4">
      {/* Shadow agents (blurred, depth illusion) */}
      <div className="absolute top-10 left-20 w-9 h-9 rounded-full bg-white/15 blur-md opacity-[0.15] pointer-events-none" />
      <div className="absolute bottom-14 right-16 w-7 h-7 rounded-full bg-white/15 blur-md opacity-[0.15] pointer-events-none" />
      <div className="absolute top-1/3 right-20 w-11 h-11 rounded-full bg-white/15 blur-md opacity-[0.12] pointer-events-none" />

      {/* TV Monitors */}
      <TvMonitor position="left" />
      <TvMonitor position="right" />

      {/* Elliptical table */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-28 rounded-[40%] bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 shadow-inner overflow-hidden">
        {/* Radial glow center */}
        <div className="absolute inset-0 rounded-[40%] bg-primary/10 blur-xl" />
        <CenterBarChart />
      </div>

      {/* Agent seats */}
      {roundtableAgents.map((agent) => (
        <AgentSeat
          key={agent.name}
          agent={agent}
          isAnyHovered={!!hoveredAgent}
          isHovered={hoveredAgent === agent.name}
          onEnter={() => setHoveredAgent(agent.name)}
          onLeave={() => setHoveredAgent(null)}
        />
      ))}
    </div>
  );
}

function KpiCard({ kpi, isInView }: { kpi: KpiItem; isInView: boolean }) {
  const count = useCountUp(kpi.value, 1600, isInView, kpi.decimals);

  return (
    <motion.div
      className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
      whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="text-2xl mb-2 block">{kpi.icon}</span>
      <p className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
        {kpi.prefix}{count}{kpi.suffix}
      </p>
      <p className="text-sm text-gray-400">{kpi.label}</p>
      <p className="text-[10px] text-gray-500 mt-1">{kpi.source}</p>
    </motion.div>
  );
}

export default function AgentSection() {
  const { ref, isVisible } = useInView(0.1);
  const [activeAgent, setActiveAgent] = useState<number | null>(null);

  return (
    <section
      id="agents"
      ref={ref}
      className="py-20 lg:py-28 bg-surface-dark text-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            Autonomous Growth.{" "}
            <span className="text-primary-light">No Headcount Required.</span>
          </h2>
          <p className="text-lg text-gray-400">
            Meet your agent workforce that delivers autonomously — replacing 3+
            FTEs while operating 24/7 without breaks, bias, or burnout.
          </p>
        </FadeUp>

        {/* Roundtable visual */}
        <FadeUp delay={0.05} className="mb-4">
          <p className="text-center text-xs text-gray-500 mb-6 uppercase tracking-widest font-medium">
            Hover an agent to see what they do
          </p>
          <AgentRoundtable />
        </FadeUp>

        {/* Agent cards */}
        <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {agents.map((agent, i) => (
            <StaggerChild key={agent.name}>
              <motion.div
                className={`
                  relative rounded-2xl p-6 cursor-pointer h-full
                  backdrop-blur-md border transition-colors duration-300
                  ${
                    activeAgent === i
                      ? "bg-white/[0.12] border-white/20 shadow-2xl shadow-primary/10"
                      : "bg-white/[0.05] border-white/[0.08] hover:bg-white/[0.1] hover:border-white/15"
                  }
                `}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                onMouseEnter={() => setActiveAgent(i)}
                onMouseLeave={() => setActiveAgent(null)}
                onClick={() => setActiveAgent(activeAgent === i ? null : i)}
              >
                {/* Gradient glow behind card on active */}
                {activeAgent === i && (
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${agent.color} opacity-[0.08] pointer-events-none`} />
                )}

                <motion.div
                  className="text-3xl mb-3"
                  animate={{ scale: activeAgent === i ? 1.15 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  {agent.avatar}
                </motion.div>

                <h3 className="text-base font-bold text-white mb-0.5">{agent.name}</h3>
                <p className={`text-xs font-medium mb-3 transition-colors ${activeAgent === i ? "text-primary-light" : "text-gray-500"}`}>
                  {agent.role}
                </p>

                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  &ldquo;{agent.quote}&rdquo;
                </p>

                {/* Tasks — expand on active */}
                <div className={`overflow-hidden transition-all duration-400 ${activeAgent === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {agent.tasks.map((task) => (
                      <div key={task} className="flex items-center gap-2 text-xs text-gray-400">
                        <svg className="w-3.5 h-3.5 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>

        {/* More agents hint */}
        <FadeUp delay={0.1} className="text-center mb-16">
          <p className="text-sm text-gray-500">
            ...and more specialist agents scaling your store as needed.
          </p>
        </FadeUp>

        {/* KPI Scorecards */}
        <FadeUp delay={0.15}>
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            What personalization technology delivers
          </p>
          <p className="text-center text-xs text-gray-500 mb-8">
            Based on industry benchmarks from McKinsey, Baymard Institute &amp; internal testing
          </p>
          <StaggerParent className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <StaggerChild key={kpi.label}>
                <KpiCard kpi={kpi} isInView={isVisible} />
              </StaggerChild>
            ))}
          </StaggerParent>
        </FadeUp>
      </div>
    </section>
  );
}
