import type { ReactElement } from "react";

type Props = {
  /** pixel size of the square icon mark */
  size?: number;
  /** show the "NextConversion" wordmark next to the mark */
  withWordmark?: boolean;
  className?: string;
};

/**
 * NextConversion brand logo — a rounded-square gradient icon mark + wordmark.
 * Single source of truth used by the header and footer.
 */
export default function Logo({ size = 28, withWordmark = true, className = "" }: Props): ReactElement {
  const radius = Math.round(size * 0.32);
  const fontSize = Math.round(size * 0.52);

  return (
    <span
      className={`inline-flex items-center gap-2.5 font-display text-[18px] font-semibold tracking-[-0.01em] text-white ${className}`}
    >
      {/* Icon mark: rounded square with brand gradient + bold "N" letterform */}
      <span
        aria-hidden
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          fontSize: fontSize,
          lineHeight: 1,
        }}
        className="relative grid shrink-0 place-items-center overflow-hidden bg-gradient-to-br from-primary-2 via-magenta to-yellow font-bold text-background"
      >
        N
      </span>

      {withWordmark && <span>NextConversion</span>}
    </span>
  );
}
