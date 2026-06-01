"use client";

type Props = {
  count: number;
  active: number;
  onSelect: (i: number) => void;
  /** dwell per slide in ms — drives the active dot's fill animation */
  dwellMs?: number;
  /** whether auto-advance is currently running (fills the active dot) */
  playing?: boolean;
  label?: string;
  className?: string;
};

/** Refined carousel locator: a pill track whose active dot fills with the
 *  brand gradient in sync with the auto-advance. Generous tap targets. */
export default function CarouselDots({
  count,
  active,
  onSelect,
  dwellMs,
  playing = true,
  label = "Slide",
  className = "",
}: Props) {
  const timed = dwellMs != null && playing;

  return (
    <div
      role="tablist"
      aria-label="Carousel position"
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.05] px-1.5 py-1 backdrop-blur-sm ${className}`}
    >
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`${label} ${i + 1} of ${count}`}
            onClick={() => onSelect(i)}
            className="group grid place-items-center px-1.5 py-2"
          >
            <span
              className={`relative h-1.5 overflow-hidden rounded-full transition-[width,background-color] duration-300 ease-out ${
                isActive ? "w-7 bg-white/15" : "w-1.5 bg-white/30 group-hover:bg-white/60"
              }`}
            >
              {isActive &&
                (timed ? (
                  <span
                    key={active}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-2 to-magenta"
                    style={{ animation: `dotFill ${dwellMs}ms linear forwards` }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-2 to-magenta" />
                ))}
            </span>
          </button>
        );
      })}
    </div>
  );
}
