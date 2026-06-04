import Logo from "./Logo";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8">
        {/* Top row: logo + socials */}
        <div className="flex flex-row items-center justify-between gap-6">
          <a href="#top" aria-label="NextConversion home">
            <Logo />
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/nextconversion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/[0.03] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="my-7 h-px bg-border" />

        {/* Bottom row: copyright + legal + demo link */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-inter text-sm text-muted">© 2026 NextConversion. All Rights Reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="/terms" className="font-inter text-sm text-white/75 transition-colors hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="/privacy" className="font-inter text-sm text-white/75 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a
              href="#book-demo"
              className="font-inter text-sm font-medium text-primary transition-colors hover:text-primary-2"
            >
              Book a Demo
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
