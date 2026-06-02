import type { ReactElement } from "react";

type Props = {
  /** pixel size of the square icon mark */
  size?: number;
  /** show the "NextConversion" wordmark next to the mark */
  withWordmark?: boolean;
  className?: string;
};

/**
 * NextConversion brand logo — the real Figma mark (two purple blocks) + the
 * "NextConversion" wordmark. Single source of truth for header and footer.
 */
export default function Logo({ size = 26, withWordmark = true, className = "" }: Props): ReactElement {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-display text-[19px] font-semibold tracking-[-0.02em] text-white ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <rect y="13.7143" width="10.2857" height="10.2857" fill="#834FFB" />
        <path d="M24 24H23.9971L16 16.0947V8.28613H8.10059L0 0.27832V0H24V24Z" fill="#834FFB" />
      </svg>
      {withWordmark && <span>NextConversion</span>}
    </span>
  );
}
