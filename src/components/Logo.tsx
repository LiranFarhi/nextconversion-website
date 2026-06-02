type Props = {
  /** pixel size of the square icon mark */
  size?: number;
  /** show the "NextConversion" wordmark next to the mark */
  withWordmark?: boolean;
  className?: string;
};

/**
 * NextConversion brand logo — an icon mark + wordmark. Single source of truth
 * used by the header and footer.
 */
export default function Logo({ size = 28, withWordmark = true, className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-display text-[18px] font-semibold tracking-[-0.01em] text-white ${className}`}>
      <span
        aria-hidden
        style={{ width: size, height: size, borderRadius: Math.round(size * 0.32) }}
        className="relative grid shrink-0 place-items-center overflow-hidden bg-gradient-to-br from-primary-2 via-magenta to-yellow"
      >
        <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62} fill="none" aria-hidden>
          {/* abstract "conversion" arrow mark */}
          <path
            d="M6 17 L12 7 L18 17"
            stroke="#01001e"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9.5 13.5 L12 17 L14.5 13.5" stroke="#01001e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {withWordmark && <span>NextConversion</span>}
    </span>
  );
}
