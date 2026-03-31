"use client";

import { useState } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-5 sm:p-8 shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h3 className="text-2xl font-bold font-display text-foreground mb-2">
              Book a Demo
            </h3>
            <p className="text-muted text-sm mb-6">
              Share your details and we&apos;ll build a personalized demo app for your brand.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Work email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-foreground placeholder-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="you@company.com"
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Your name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-foreground placeholder-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-foreground mb-1">
                  Brand website <span className="text-red-400">*</span>
                </label>
                <input
                  id="website"
                  type="url"
                  required
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-foreground placeholder-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="https://yourstore.com"
                />
                <p className="text-xs text-muted mt-1">
                  We&apos;ll build a custom demo app for your brand using this URL
                </p>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-1">
                  Anything else? <span className="text-muted font-normal">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-border px-4 py-3 text-foreground placeholder-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your biggest personalization challenge, current stack, or anything else..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full rounded-lg bg-primary px-6 py-3.5 text-white font-semibold inline-flex items-center justify-center gap-2"
              >
                Request My Custom Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p className="text-xs text-muted text-center">
                Limited spots &middot; No credit card required
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">You&apos;re on the list!</h3>
            <p className="text-muted">
              We&apos;ll reach out soon with a personalized demo built specifically for{" "}
              {website ? <span className="font-medium text-foreground">{website}</span> : "your brand"}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
