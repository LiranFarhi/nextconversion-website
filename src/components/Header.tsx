"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BookDemoButton from "./BookDemoButton";

const NAV = [
  { label: "Why", href: "#why" },
  { label: "Agents", href: "#agents" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Safety", href: "#safety" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(
      (el): el is Element => Boolean(el)
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-[18px] font-semibold tracking-[-0.01em] text-white"
        >
          <span className="grid h-7 w-7 place-items-center rounded-[9px] bg-gradient-to-br from-primary-2 via-magenta to-yellow text-[13px] font-bold text-background">
            N
          </span>
          NextConversion
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`font-inter text-[15px] transition-colors hover:text-white ${
                  active === item.href ? "text-white" : "text-soft/75"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <BookDemoButton variant="solid" label="Book a demo" />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/5 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-inter text-base text-soft/85 hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-3 pt-2">
              <BookDemoButton variant="solid" label="Book a demo" className="w-full justify-center" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
