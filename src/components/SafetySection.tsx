"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Eye, ShieldCheck, Rocket } from "lucide-react";
import { FadeUp, StaggerParent, StaggerChild } from "./motion-primitives";

const platforms = [
  { name: "Shopify", color: "bg-green-100 text-green-700" },
  { name: "BigCommerce", color: "bg-blue-100 text-blue-700" },
  { name: "Headless", color: "bg-purple-100 text-purple-700" },
  { name: "Custom", color: "bg-gray-100 text-gray-700" },
];

const VOICE_OPTIONS = ["Premium", "Casual", "Playful"] as const;

function StrictEnforcementControl() {
  const [margin, setMargin] = useState(35);
  const pct = margin; // 10–60 range

  return (
    <div className="rounded-xl bg-surface p-4 border border-border">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted">Minimum Margin</span>
        <span className="text-xs font-bold text-primary">{margin}%</span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full mb-3">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-150"
          style={{ width: `${((pct - 10) / 50) * 100}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm transition-all duration-150"
          style={{ left: `calc(${((pct - 10) / 50) * 100}% - 8px)` }}
        />
      </div>
      <input
        type="range"
        min={10}
        max={60}
        value={margin}
        onChange={(e) => setMargin(Number(e.target.value))}
        className="w-full opacity-0 absolute cursor-pointer"
        style={{ marginTop: "-22px", height: "20px" }}
        aria-label="Minimum margin percentage"
      />
      <p className="text-[10px] text-muted">Agents never go below this margin floor</p>
    </div>
  );
}

function BrandAlignmentControl() {
  const [voice, setVoice] = useState<typeof VOICE_OPTIONS[number]>("Premium");

  return (
    <div className="rounded-xl bg-surface p-4 border border-border">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted">Brand Voice</span>
        <span className="text-xs font-bold text-primary">{voice}</span>
      </div>
      <div className="flex gap-1.5">
        {VOICE_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => setVoice(opt)}
            className={`text-[10px] px-2.5 py-1 rounded-full font-medium transition-all duration-200 ${
              opt === voice
                ? "bg-primary text-white shadow-sm"
                : "bg-gray-100 text-muted hover:bg-gray-200"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function PlugPlayControl() {
  const [autoPublish, setAutoPublish] = useState(false);

  return (
    <div className="rounded-xl bg-surface p-4 border border-border">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted">Auto-publish</span>
        <span className={`text-xs font-bold transition-colors ${autoPublish ? "text-success" : "text-primary"}`}>
          {autoPublish ? "Enabled" : "Manual review"}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setAutoPublish(!autoPublish)}
          className={`relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            autoPublish ? "bg-success" : "bg-gray-200"
          }`}
          role="switch"
          aria-checked={autoPublish}
          aria-label="Toggle auto-publish"
        >
          <motion.div
            className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"
            animate={{ left: autoPublish ? "calc(100% - 18px)" : "2px" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        <span className="text-[10px] text-muted">
          {autoPublish ? "Changes go live automatically" : "You approve before publishing"}
        </span>
      </div>
    </div>
  );
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Strict Enforcement",
    description:
      "Margin and discount policies are baked into the agent's logic.",
    control: <StrictEnforcementControl />,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: "Brand Alignment",
    description:
      "Approval workflows ensure the AI operates within your specific brand voice and business constraints and goals.",
    control: <BrandAlignmentControl />,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: "Plug & Play",
    description:
      "Sit on top of your existing stack (Shopify, BigCommerce) without a migration headache.",
    control: <PlugPlayControl />,
  },
];

function DashboardBg() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none overflow-hidden">
      <div className="w-[800px] h-[500px] border-2 border-foreground rounded-xl flex gap-4 p-6">
        {/* Left panel — data rows */}
        <div className="flex-1 border border-foreground rounded-lg p-4 flex flex-col gap-3">
          {[60, 40, 80, 30, 55].map((w, i) => (
            <div key={i} className="h-2 bg-foreground rounded" style={{ width: `${w}%` }} />
          ))}
        </div>
        {/* Center panel — bar chart */}
        <div className="flex-1 border border-foreground rounded-lg p-4 flex items-end gap-2 justify-center">
          {[60, 80, 45, 90, 55, 70].map((h, i) => (
            <div key={i} className="w-7 bg-foreground rounded-t" style={{ height: `${h}%` }} />
          ))}
        </div>
        {/* Right panel — metrics + pie */}
        <div className="w-44 border border-foreground rounded-lg p-4 flex flex-col gap-3">
          {[40, 70, 55, 35].map((w, i) => (
            <div key={i} className="h-2 bg-foreground rounded" style={{ width: `${w}%` }} />
          ))}
          <div className="w-14 h-14 rounded-full border-[5px] border-foreground mx-auto mt-2" />
        </div>
      </div>
    </div>
  );
}

export default function SafetySection() {
  return (
    <section id="safety" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <DashboardBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Strategy stays with you.{" "}
            <span className="gradient-text">Safety and scale are on us.</span>
          </h2>
          <p className="text-lg text-muted">
            Your brand rules are sacred. Our agents operate within your
            guardrails — always.
          </p>
        </FadeUp>

        {/* Features with interactive controls */}
        <StaggerParent className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <StaggerChild key={feature.title}>
              <motion.div
                className="rounded-2xl bg-white p-8 border border-border shadow-sm h-full"
                whileHover={{ y: -4, boxShadow: "0 12px 40px -8px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                {feature.control}
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>

        {/* Approval workflow */}
        <FadeUp delay={0.15} className="max-w-3xl mx-auto mb-12">
          <div className="rounded-2xl bg-white p-6 border border-border shadow-sm">
            <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-4 text-center">
              How changes go live
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
              {[
                { label: "Agent Suggests", Icon: Bot,         bg: "bg-blue-50",    icon: "text-blue-600"   },
                { label: "You Review",     Icon: Eye,         bg: "bg-amber-50",   icon: "text-amber-600"  },
                { label: "You Approve",    Icon: ShieldCheck, bg: "bg-green-50",   icon: "text-green-600"  },
                { label: "It Goes Live",   Icon: Rocket,      bg: "bg-primary/8",  icon: "text-primary"    },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-4 sm:flex-1">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center mb-1.5`}>
                      <step.Icon className={`w-5 h-5 ${step.icon}`} strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-medium text-foreground">
                      {step.label}
                    </span>
                  </div>
                  {i < 3 && (
                    <div className="hidden sm:block flex-1 h-px bg-border mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Platform integrations */}
        <FadeUp delay={0.2} className="text-center">
          <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
            Works with your existing stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((p) => (
              <motion.span
                key={p.name}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ${p.color}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {p.name}
              </motion.span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
