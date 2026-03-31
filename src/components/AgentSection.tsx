"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart2,
  Wand2,
  Zap,
  ShoppingBag,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "./useInView";
import { FadeUp, StaggerParent, StaggerChild } from "./motion-primitives";
import { useCountUp } from "../lib/useCountUp";

interface Agent {
  name: string;
  role: string;
  color: string;           // gradient classes
  skinTone: string;        // face skin tone hex
  hairColor: string;       // hair color hex
  quote: string;
  tasks: string[];
  Icon: LucideIcon;
}

const agents: Agent[] = [
  {
    name: "Danny",
    role: "The Analyst",
    color: "from-blue-500 to-indigo-600",
    skinTone: "#FDDCB5",
    hairColor: "#92400e",
    quote: "I process intent signals and social trends that human teams miss.",
    tasks: ["Intent signal processing", "Trend forecasting", "Segment discovery"],
    Icon: BarChart2,
  },
  {
    name: "Emilia",
    role: "The Tailor",
    color: "from-purple-500 to-fuchsia-600",
    skinTone: "#FFE4CC",
    hairColor: "#7c3aed",
    quote: "I adjust your site design, UX, and merchandising in live sessions.",
    tasks: ["Dynamic UX layouts", "Adaptive merchandising", "Friction removal"],
    Icon: Wand2,
  },
  {
    name: "John",
    role: "The Optimizer",
    color: "from-emerald-500 to-teal-600",
    skinTone: "#D4A57A",
    hairColor: "#1a1a1a",
    quote: "I enhance product details — generating descriptions, images and videos, copy styles to ensure your performance never drops.",
    tasks: ["Creative asset generation", "A/B tested copy styles", "Performance monitoring"],
    Icon: Zap,
  },
  {
    name: "Donna",
    role: "The Shopping Assistant",
    color: "from-orange-500 to-red-600",
    skinTone: "#FDDCB5",
    hairColor: "#1a1a1a",
    quote: "While chatting with the user I intelligently bundle products to maximize Average Order Value (AOV)",
    tasks: ["Smart product pairing", "Dynamic offers", "Cart optimization"],
    Icon: ShoppingBag,
  },
];

interface KpiItem {
  label: string;
  prefix: string;
  value: number;
  suffix: string;
  decimals?: number;
  Icon: LucideIcon;
  source: string;
}

const kpis: KpiItem[] = [
  { label: "Conversion Rate Lift", prefix: "up to ", value: 200, suffix: "%", Icon: TrendingUp,  source: "Personalization benchmark" },
  { label: "AOV Lift",             prefix: "up to ", value: 35,  suffix: "%", Icon: DollarSign,  source: "Smart bundling benchmark" },
  { label: "Session Duration Lift",prefix: "up to ", value: 90,  suffix: "%", Icon: Clock,       source: "Adaptive UX benchmark" },
  { label: "Returning Users Lift", prefix: "up to ", value: 29,  suffix: "%", Icon: Users,       source: "Relevance benchmark" },
];

// ─── Agent Face SVG ────────────────────────────────────────────────────────────

function AgentFace({
  skinTone,
  hairColor,
  gradient,
  size = 56,
  isActive = false,
}: {
  skinTone: string;
  hairColor: string;
  gradient: string;
  size?: number;
  isActive?: boolean;
}) {
  return (
    <motion.div
      className={`rounded-full bg-gradient-to-br ${gradient} p-0.5 flex-shrink-0`}
      style={{ width: size, height: size }}
      animate={{
        boxShadow: isActive
          ? "0 0 0 3px rgba(99,102,241,0.6), 0 0 20px rgba(99,102,241,0.3)"
          : "0 2px 8px rgba(0,0,0,0.2)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.15)" }}
      >
        <svg viewBox="0 0 40 46" width={size - 4} height={size - 4}>
          {/* Hair / top of head */}
          <ellipse cx="20" cy="13" rx="11" ry="10" fill={hairColor} />
          {/* Face */}
          <ellipse cx="20" cy="17" rx="9.5" ry="10.5" fill={skinTone} />
          {/* Eyes */}
          <circle cx="16" cy="15.5" r="1.6" fill="#1f2937" />
          <circle cx="24" cy="15.5" r="1.6" fill="#1f2937" />
          {/* Eye shine */}
          <circle cx="16.7" cy="14.8" r="0.6" fill="white" />
          <circle cx="24.7" cy="14.8" r="0.6" fill="white" />
          {/* Smile */}
          <path d="M 15.5 20.5 Q 20 25 24.5 20.5" stroke="#374151" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          {/* Neck */}
          <rect x="16.5" y="27" width="7" height="5" rx="2" fill={skinTone} />
          {/* Shoulders (body hint) */}
          <ellipse cx="20" cy="39" rx="10" ry="7" fill="rgba(255,255,255,0.25)" />
        </svg>
      </div>
    </motion.div>
  );
}

// ─── Round Table Visual ────────────────────────────────────────────────────────

const TABLE_POSITIONS = [
  { top: "8%",  left: "50%", tx: "-50%", ty: "0%",    dir: "below" as const },  // Danny — top
  { top: "50%", left: "4%",  tx: "0%",   ty: "-50%",  dir: "right" as const },  // Emilia — left
  { top: "50%", left: "96%", tx: "-100%",ty: "-50%",  dir: "left"  as const },  // John — right
  { top: "88%", left: "50%", tx: "-50%", ty: "-100%", dir: "above" as const },  // Donna — bottom
];

function RoundTable({ activeIdx }: { activeIdx: number | null }) {
  return (
    <div className="relative w-full h-[200px] sm:h-[240px]">
      {/* Table */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-24">
        {/* Table surface */}
        <div
          className="w-full h-full rounded-full border-4 border-amber-300/60 shadow-inner"
          style={{ background: "radial-gradient(ellipse at 40% 35%, #fef3c7 0%, #fde68a 60%, #f59e0b 100%)" }}
        />
        {/* Subtle data glow on table */}
        <div className="absolute inset-2 rounded-full flex items-center justify-center">
          <p className="text-[8px] font-bold text-amber-700/70 text-center leading-tight uppercase tracking-widest">
            Agent<br />Hub
          </p>
        </div>
        {/* Animated pulse on table */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-amber-400/30"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Connection lines from agents to table */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 280">
        {TABLE_POSITIONS.map((pos, i) => {
          // From agent center to table center (150, 140)
          const ax = (parseFloat(pos.left) / 100) * 300;
          const ay = (parseFloat(pos.top) / 100) * 280;
          return (
            <motion.line
              key={i}
              x1={ax} y1={ay} x2={150} y2={140}
              stroke={activeIdx === i ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.08)"}
              strokeWidth={activeIdx === i ? 2 : 1}
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -12] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          );
        })}
      </svg>

      {/* Agents */}
      {agents.map((agent, i) => {
        const pos = TABLE_POSITIONS[i];
        const isActive = activeIdx === i;
        const isAnyActive = activeIdx !== null;
        return (
          <div
            key={agent.name}
            className="absolute flex flex-col items-center"
            style={{
              top: pos.top,
              left: pos.left,
              transform: `translate(${pos.tx}, ${pos.ty})`,
            }}
          >
            <motion.div
              animate={{ opacity: isAnyActive && !isActive ? 0.35 : 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <AgentFace
                skinTone={agent.skinTone}
                hairColor={agent.hairColor}
                gradient={agent.color}
                size={52}
                isActive={isActive}
              />
              <p className="text-[9px] font-bold text-white mt-1.5 text-center leading-tight">
                {agent.name}
              </p>
              <p className="text-[8px] text-gray-500 text-center leading-tight max-w-[70px]">
                {agent.role}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// ─── KPI Card ──────────────────────────────────────────────────────────────────

function KpiCard({ kpi, isInView }: { kpi: KpiItem; isInView: boolean }) {
  const count = useCountUp(kpi.value, 1600, isInView, kpi.decimals);
  const KpiIcon = kpi.Icon;

  return (
    <motion.div
      className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
      whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
        <KpiIcon className="w-4 h-4 text-white/80" strokeWidth={1.75} />
      </div>
      <p className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
        {kpi.prefix}{count}{kpi.suffix}
      </p>
      <p className="text-sm text-gray-400">{kpi.label}</p>
      <p className="text-[10px] text-gray-500 mt-1">{kpi.source}</p>
    </motion.div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────

export default function AgentSection() {
  const { ref, isVisible } = useInView(0.1);
  const [activeAgent, setActiveAgent] = useState<number | null>(null);

  const active = activeAgent !== null ? agents[activeAgent] : null;

  return (
    <section
      id="agents"
      ref={ref}
      className="py-12 sm:py-20 lg:py-28 bg-surface-dark text-white relative overflow-hidden"
    >
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
        <FadeUp className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            Autonomous Growth.{" "}
            <span className="text-primary-light">No Headcount Required.</span>
          </h2>
          <p className="text-lg text-gray-400">
            Meet your agent workforce that delivers autonomously — 24/7 without
            breaks, bias, or burnout.
          </p>
        </FadeUp>

        {/* Main visual: roundtable + detail panel (desktop) */}
        <FadeUp delay={0.05}>
          <div className="hidden lg:grid grid-cols-2 gap-8 items-center mb-10 max-w-4xl mx-auto">
            {/* Round table */}
            <div>
              <p className="text-center text-xs text-gray-500 mb-4 uppercase tracking-widest font-medium">
                Select an agent to see what they do
              </p>
              <RoundTable activeIdx={activeAgent} />
            </div>

            {/* Detail panel — desktop */}
            <div className="min-h-[200px] flex items-center">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <AgentFace
                        skinTone={active.skinTone}
                        hairColor={active.hairColor}
                        gradient={active.color}
                        size={52}
                        isActive
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">{active.name}</h3>
                        <p className="text-sm text-gray-400">{active.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed italic mb-5">
                      &ldquo;{active.quote}&rdquo;
                    </p>
                    <div className="space-y-2">
                      {active.tasks.map((task, t) => (
                        <motion.div
                          key={task}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: t * 0.08, duration: 0.25 }}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {task}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center w-full py-8"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">
                      Select an agent card to learn what they do
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>

        {/* 4 clickable agent cards — face + name + role only */}
        <StaggerParent className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 lg:mb-16">
          {agents.map((agent, i) => (
            <StaggerChild key={agent.name}>
              <motion.button
                className={`
                  relative rounded-2xl p-5 cursor-pointer w-full text-center
                  backdrop-blur-md border transition-colors duration-300
                  ${activeAgent === i
                    ? "bg-white/[0.12] border-white/25 shadow-2xl shadow-primary/10"
                    : "bg-white/[0.05] border-white/[0.08] hover:bg-white/[0.09] hover:border-white/15"
                  }
                `}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                onClick={() => setActiveAgent(activeAgent === i ? null : i)}
              >
                {activeAgent === i && (
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${agent.color} opacity-[0.08] pointer-events-none`} />
                )}
                <div className="flex justify-center mb-3">
                  <AgentFace
                    skinTone={agent.skinTone}
                    hairColor={agent.hairColor}
                    gradient={agent.color}
                    size={56}
                    isActive={activeAgent === i}
                  />
                </div>
                <h3 className="text-sm font-bold text-white">{agent.name}</h3>
                <p className={`text-xs mt-0.5 transition-colors ${activeAgent === i ? "text-primary-light" : "text-gray-500"}`}>
                  {agent.role}
                </p>
              </motion.button>
            </StaggerChild>
          ))}
        </StaggerParent>

        {/* Mobile detail panel — appears below agent cards */}
        {active && (
          <div className="lg:hidden mb-6 max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl bg-white/[0.06] border border-white/10 p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AgentFace
                    skinTone={active.skinTone}
                    hairColor={active.hairColor}
                    gradient={active.color}
                    size={44}
                    isActive
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{active.name}</h3>
                    <p className="text-sm text-gray-400">{active.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed italic mb-4">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="space-y-1.5">
                  {active.tasks.map((task, t) => (
                    <motion.div
                      key={task}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: t * 0.08, duration: 0.25 }}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {task}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

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
          <StaggerParent className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
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
