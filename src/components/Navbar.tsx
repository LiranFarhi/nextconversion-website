"use client";

import { useState } from "react";

export default function Navbar({ onBookDemo }: { onBookDemo: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">NC</span>
            </div>
            <span className="font-bold text-lg text-foreground">
              Next<span className="text-primary">Conversion</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#problem"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Why
            </a>
            <a
              href="#agents"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Agents
            </a>
            <a
              href="#demo"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#safety"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Safety
            </a>
            <button
              onClick={onBookDemo}
              className="btn-primary rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white inline-flex items-center gap-1.5"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 -mr-2.5 text-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-3 space-y-1 animate-fade-in">
            <a
              href="#problem"
              className="block text-sm text-muted hover:text-foreground px-3 py-2.5 rounded-lg active:bg-surface"
              onClick={() => setMobileOpen(false)}
            >
              Why
            </a>
            <a
              href="#agents"
              className="block text-sm text-muted hover:text-foreground px-3 py-2.5 rounded-lg active:bg-surface"
              onClick={() => setMobileOpen(false)}
            >
              Agents
            </a>
            <a
              href="#demo"
              className="block text-sm text-muted hover:text-foreground px-3 py-2.5 rounded-lg active:bg-surface"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#safety"
              className="block text-sm text-muted hover:text-foreground px-3 py-2.5 rounded-lg active:bg-surface"
              onClick={() => setMobileOpen(false)}
            >
              Safety
            </a>
            <button
              onClick={() => {
                setMobileOpen(false);
                onBookDemo();
              }}
              className="w-full rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Book a Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
