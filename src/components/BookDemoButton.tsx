import { ArrowRight } from "lucide-react";

type Props = {
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  label?: string;
};

/** The recurring "Book a Demo →" call to action. */
export default function BookDemoButton({
  href = "#book-demo",
  variant = "primary",
  className = "",
  label = "Book a Demo",
}: Props) {
  return (
    <a href={href} className={`${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`}>
      {label}
      <ArrowRight size={16} strokeWidth={2} />
    </a>
  );
}
