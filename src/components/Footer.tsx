export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold tracking-tight">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-primary-2 via-magenta to-yellow text-[11px] font-bold text-background">
            N
          </span>
          NextConversion
        </a>

        <p className="order-last font-inter text-sm text-muted sm:order-none">
          © 2026 NextConversion. All Rights Reserved.
        </p>

        <nav className="flex items-center gap-6">
          <a href="#" className="font-inter text-sm text-white/75 transition-colors hover:text-white">
            Terms &amp; Conditions
          </a>
          <a href="#" className="font-inter text-sm text-white/75 transition-colors hover:text-white">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}
