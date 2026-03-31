"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./motion-primitives";

const TOTAL_SPOTS = 50;
const CLAIMED_SPOTS = 32;

function SpotsBar() {
  const pct = (CLAIMED_SPOTS / TOTAL_SPOTS) * 100;

  return (
    <div className="max-w-xs mx-auto mb-10">
      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span>{CLAIMED_SPOTS} spots claimed</span>
        <span>{TOTAL_SPOTS - CLAIMED_SPOTS} remaining</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-light to-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
        />
      </div>
    </div>
  );
}

export default function CtaSection({
  onBookDemo,
}: {
  onBookDemo: () => void;
}) {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-surface-dark text-white relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full bg-primary/20 blur-[128px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <FadeUp className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 mb-8">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm text-gray-300 font-medium">
            Launching soon — early access open
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
          NextConversion: An agent-first engine turning static websites into{" "}
          <span className="text-primary-light">
            profitable, adaptive shopping experiences.
          </span>
        </h2>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Be among the first brands to stop sending premium traffic to generic
          pages. Early access partners get hands-on onboarding and a
          personalized demo built for their store.
        </p>

        {/* Spots progress bar */}
        <SpotsBar />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
          <motion.button
            onClick={onBookDemo}
            className="rounded-xl bg-white px-8 py-4 text-foreground font-semibold text-lg hover:bg-gray-100 transition-colors animate-pulse-glow"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Book a Demo
          </motion.button>
          <a
            href="#demo"
            className="rounded-xl border border-white/20 px-8 py-4 text-white font-semibold text-lg hover:bg-white/10 transition-all"
          >
            See How It Works
          </a>
        </div>

        <p className="text-xs text-gray-500 mb-12">
          No credit card required &middot; Personalized onboarding &middot; Cancel anytime
        </p>

        {/* Platform compatibility strip */}
        <div className="mb-10 pt-6 border-t border-white/10">
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-4">Works with your existing stack</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {[
              { name: "Shopify", color: "#96bf48" },
              { name: "Klaviyo", color: "#9ca3af" },
              { name: "Meta Ads", color: "#6b7280" },
              { name: "Google Ads", color: "#9ca3af" },
              { name: "WooCommerce", color: "#a78bfa" },
            ].map((p) => (
              <span key={p.name} className="text-[12px] font-bold tracking-wide" style={{ color: p.color, opacity: 0.65 }}>{p.name}</span>
            ))}
          </div>
        </div>

        {/* Founder quote card */}
        <div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 text-left">
          <span className="absolute -top-4 left-6 text-5xl text-primary-light/25 font-serif leading-none select-none">&ldquo;</span>
          <p className="text-sm text-gray-300 leading-relaxed italic mb-4 pt-2">
            We built NextConversion because we saw the same pattern in every
            e-commerce brand: incredible ad targeting feeding into generic,
            one-size-fits-all storefronts. The technology to close that gap
            finally exists — and we&apos;re building it.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed italic mb-5">
            Our early access partners will help shape the product and get
            priority onboarding. We&apos;d love to show you what&apos;s possible.
          </p>
          <div className="flex items-center gap-3 border-t border-white/10 pt-4">
            <div className="flex gap-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">F1</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">F2</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-white">The Founders</p>
              <p className="text-[10px] text-gray-500">ex-Google &middot; ex-Meta AI</p>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
