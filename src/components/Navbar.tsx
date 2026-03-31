"use client";

import { useEffect, useState } from "react";

const NAV_SECTIONS = ["problem", "agents", "demo", "safety"] as const;

export default function Navbar({ onBookDemo }: { onBookDemo: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg border-b border-border/50" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
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

      </div>

      {/* Mobile menu — fixed overlay below navbar */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-white/95 backdrop-blur-lg md:hidden animate-fade-in" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
          <div className="px-4 py-3 space-y-1">
            {([
              { href: "problem", label: "Why" },
              { href: "agents", label: "Agents" },
              { href: "demo", label: "How It Works" },
              { href: "safety", label: "Safety" },
            ] as const).map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                className={`flex items-center gap-2 text-sm px-3 py-2.5 rounded-lg active:bg-surface transition-colors ${
                  activeSection === link.href
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-muted hover:text-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {activeSection === link.href && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                )}
                {link.label}
              </a>
            ))}
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
        </div>
      )}
    </nav>
  );
}
