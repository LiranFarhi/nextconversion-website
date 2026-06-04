"use client";

import { useEffect, useState } from "react";
import BookDemoButton from "./BookDemoButton";

/** Persistent bottom "Book a Demo" bar on mobile — appears after the hero. */
export default function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Hide the bar over the final CTA section + footer (it repeats the CTA there).
    const cta = document.querySelector("#book-demo");
    const footer = document.querySelector("footer");
    const update = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const vh = window.innerHeight;
      const inEndZone = [cta, footer].some((el) => {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        // true once the element has scrolled up into the lower part of the viewport
        return r.top < vh * 0.85;
      });
      setShow(pastHero && !inEndZone);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-border bg-background/90 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
        <BookDemoButton variant="solid" className="w-full justify-center py-3.5" />
      </div>
    </div>
  );
}
