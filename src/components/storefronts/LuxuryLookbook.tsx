export default function LuxuryLookbook() {
  const looks = [
    {
      id: "02",
      name: "Cashmere Wrap",
      price: "€1,240",
      bg: "linear-gradient(160deg, #c8c4bd 0%, #8a8880 40%, #4a4845 100%)",
    },
    {
      id: "03",
      name: "Belted Camel Coat",
      price: "€1,090",
      bg: "linear-gradient(160deg, #d6cfc4 0%, #a89880 40%, #5c4e3a 100%)",
    },
    {
      id: "04",
      name: "Silk-Lined Overcoat",
      price: "€1,460",
      bg: "linear-gradient(160deg, #bdbbb8 0%, #7a7874 40%, #3a3836 100%)",
    },
  ];

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f5f3ef]">
      {/* Header */}
      <header className="flex shrink-0 flex-col items-center px-5 pt-5 pb-0">
        <p
          className="text-[10px] font-light tracking-[0.35em] text-[#1a1a1a]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          MAISON NOIR
        </p>
        <div className="mt-2 h-px w-full bg-[#1a1a1a]/20" />
        <nav className="mt-1.5 flex gap-3">
          {["COLLECTION", "ATELIER", "APPOINTMENT"].map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="text-[8px] font-light tracking-[0.2em] text-[#1a1a1a]/60">
                {item}
              </span>
              {i < 2 && (
                <span className="text-[8px] text-[#1a1a1a]/30">&middot;</span>
              )}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero editorial image block */}
      <div className="relative mx-4 mt-4 shrink-0 overflow-hidden" style={{ aspectRatio: "16/10" }}>
        {/* Duotone greyscale gradient block evoking a fashion photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(175deg, #e8e4de 0%, #b0aca6 20%, #6a6660 55%, #2a2826 85%, #0f0e0c 100%)",
          }}
        />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)",
          }}
        />
        {/* Figure silhouette hint */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "38%",
            height: "90%",
            background:
              "linear-gradient(180deg, #1a1816 0%, #0e0d0b 100%)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 78% 8%, 82% 30%, 78% 55%, 80% 70%, 76% 85%, 70% 95%, 62% 100%, 38% 100%, 30% 95%, 24% 85%, 20% 70%, 22% 55%, 18% 30%, 22% 8%)",
            opacity: 0.75,
          }}
        />
        {/* Belt accent */}
        <div
          className="absolute"
          style={{
            left: "33%",
            right: "33%",
            top: "44%",
            height: "2px",
            background: "rgba(245,243,239,0.25)",
          }}
        />
        {/* Overlaid captions */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-3 pb-3">
          <div>
            <p
              className="text-[8px] font-light tracking-[0.3em] text-[#f5f3ef]/70"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Autumn Collection &mdash; Coats
            </p>
            <p
              className="mt-0.5 text-[10px] font-light tracking-[0.25em] text-[#f5f3ef]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              LOOK 01
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-[8px] font-light tracking-[0.2em] text-[#f5f3ef]/60"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              The Wool Trench
            </p>
            <p
              className="text-[9px] font-light tracking-[0.15em] text-[#f5f3ef]/80"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              &euro;890
            </p>
          </div>
        </div>
      </div>

      {/* Section label */}
      <div className="mx-4 mt-4 flex items-center gap-3 shrink-0">
        <div className="h-px flex-1 bg-[#1a1a1a]/15" />
        <p
          className="text-[8px] font-light tracking-[0.3em] text-[#1a1a1a]/50"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          THE COLLECTION
        </p>
        <div className="h-px flex-1 bg-[#1a1a1a]/15" />
      </div>

      {/* Looks row */}
      <div className="mx-4 mt-3 flex flex-1 gap-2.5 overflow-hidden">
        {looks.map((look) => (
          <div key={look.id} className="flex flex-1 flex-col overflow-hidden">
            {/* Tall faked image block */}
            <div
              className="relative flex-1 overflow-hidden"
              style={{ background: look.bg, minHeight: 0 }}
            >
              {/* Subtle figure silhouette in each look */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-40"
                style={{
                  width: "45%",
                  height: "85%",
                  background: "rgba(15,14,12,0.8)",
                  clipPath:
                    "polygon(28% 0%, 72% 0%, 80% 10%, 82% 30%, 76% 55%, 78% 72%, 74% 88%, 68% 98%, 60% 100%, 40% 100%, 32% 98%, 26% 88%, 22% 72%, 24% 55%, 18% 30%, 20% 10%)",
                }}
              />
              {/* Look number */}
              <p
                className="absolute top-2 left-0 right-0 text-center text-[8px] font-light tracking-[0.25em] text-[#f5f3ef]/60"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                LOOK {look.id}
              </p>
            </div>

            {/* Caption */}
            <div className="shrink-0 bg-[#f5f3ef] py-2">
              <p
                className="text-[7.5px] font-light leading-tight tracking-[0.18em] text-[#1a1a1a]/70 text-center"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {look.name.toUpperCase()}
              </p>
              <p
                className="mt-0.5 text-[8px] font-light tracking-[0.1em] text-[#1a1a1a] text-center"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {look.price}
              </p>
              {/* Hairline CTA */}
              <div className="mt-1.5 flex justify-center">
                <button
                  type="button"
                  className="border-b border-[#1a1a1a]/30 pb-px text-[7px] font-light tracking-[0.2em] text-[#1a1a1a]/60 hover:border-[#1a1a1a]/60 hover:text-[#1a1a1a]/80 transition-colors"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  ENQUIRE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="shrink-0 px-4 pt-2 pb-4">
        <div className="h-px w-full bg-[#1a1a1a]/15" />
        <p
          className="mt-2 text-center text-[8px] font-light tracking-[0.2em] text-[#1a1a1a]/45"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Complimentary shipping &amp; returns &mdash; Personal styling
        </p>
      </footer>
    </div>
  );
}
