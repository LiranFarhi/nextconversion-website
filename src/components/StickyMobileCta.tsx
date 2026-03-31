"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCta({
  onBookDemo,
}: {
  onBookDemo: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const cta = document.getElementById("cta");
    if (!hero) return;

    let heroOut = false;
    let ctaIn = false;

    const update = () => setVisible(heroOut && !ctaIn);

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        heroOut = !entry.isIntersecting;
        update();
      },
      { threshold: 0 }
    );

    const ctaObs = new IntersectionObserver(
      ([entry]) => {
        ctaIn = entry.isIntersecting;
        update();
      },
      { threshold: 0 }
    );

    heroObs.observe(hero);
    if (cta) ctaObs.observe(cta);

    return () => {
      heroObs.disconnect();
      ctaObs.disconnect();
    };
  }, []);

  return (
    <div
      className={`sticky-cta-mobile md:hidden ${visible ? "visible" : ""}`}
    >
      <button
        onClick={onBookDemo}
        className="btn-primary w-full rounded-xl bg-primary px-6 py-3 text-white font-semibold text-sm"
      >
        Book a Demo
      </button>
    </div>
  );
}
