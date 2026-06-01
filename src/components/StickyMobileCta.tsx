"use client";

import { useEffect, useState } from "react";
import BookDemoButton from "./BookDemoButton";

/** Persistent bottom "Book a Demo" bar on mobile — appears after the hero. */
export default function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
