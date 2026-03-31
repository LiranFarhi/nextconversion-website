"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "nc-walkthrough-seen";

interface WalkthroughStep {
  targetId: string;
  title: string;
  description: string;
}

const STEPS: WalkthroughStep[] = [
  {
    targetId: "hero",
    title: "Welcome to NextConversion",
    description:
      "We turn static storefronts into adaptive shopping experiences using AI agents. Let us show you how.",
  },
  {
    targetId: "agents",
    title: "Meet the AI Agents",
    description:
      "Four specialized agents work together 24/7 to personalize every shopper's experience in real-time.",
  },
  {
    targetId: "demo",
    title: "See It In Action",
    description:
      "Watch a storefront evolve in real-time as our agents analyze, adapt, and optimize for each visitor.",
  },
  {
    targetId: "cta",
    title: "Get Early Access",
    description:
      "Limited spots available. Book a demo and we'll build a personalized prototype for your brand.",
  },
];

export default function SiteWalkthrough() {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Only show on first visit, after a short delay
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timeout = setTimeout(() => setIsActive(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  const dismiss = useCallback(() => {
    setIsActive(false);
    localStorage.setItem(STORAGE_KEY, "true");
  }, []);

  const goNext = useCallback(() => {
    if (currentStep < STEPS.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      const target = document.getElementById(STEPS[nextStep].targetId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      dismiss();
    }
  }, [currentStep, dismiss]);

  const goBack = useCallback(() => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      const target = document.getElementById(STEPS[prevStep].targetId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentStep]);

  useEffect(() => {
    if (!isActive) return;
    const target = document.getElementById(STEPS[currentStep].targetId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [isActive, currentStep]);

  if (!isActive) return null;

  const step = STEPS[currentStep];
  const isLast = currentStep === STEPS.length - 1;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={dismiss}
      />

      {/* Tooltip card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 shadow-2xl"
          style={{ paddingBottom: "calc(24px + env(safe-area-inset-bottom, 0px))" }}
        >
          {/* Step counter */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1.5">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentStep
                      ? "w-6 bg-primary"
                      : i < currentStep
                      ? "w-3 bg-primary/40"
                      : "w-3 bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={dismiss}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Skip
            </button>
          </div>

          <h3 className="text-lg font-bold font-display text-foreground mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            {step.description}
          </p>

          {/* Navigation buttons */}
          <div className="flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={goBack}
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 active:scale-95 transition-transform"
              >
                Back
              </button>
            )}
            <button
              onClick={goNext}
              className="flex-1 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white active:scale-95 transition-transform"
            >
              {isLast ? "Get Started" : "Next"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
