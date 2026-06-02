import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | NextConversion",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[800px] px-5 py-20 sm:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 font-inter text-sm text-white/60 transition-colors hover:text-white"
        >
          ← Back to home
        </Link>

        <h1 className="font-display text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 font-inter text-sm text-muted">Last updated: June 2026</p>

        <div className="mt-12 space-y-10 font-inter text-[15px] leading-relaxed text-white/75">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the NextConversion platform (&ldquo;Service&rdquo;), you agree to be bound by
              these Terms &amp; Conditions. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">2. Description of Service</h2>
            <p>
              NextConversion provides an agent-first engine that transforms static websites into adaptive,
              personalized shopping experiences. Features include real-time personalization, A/B optimization,
              and autonomous conversion workflows.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all
              activities that occur under your account. You must notify us immediately of any unauthorized use
              of your account.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">4. Acceptable Use</h2>
            <p>
              You agree to use the Service only for lawful purposes and in a manner that does not infringe the
              rights of others. You may not use the Service to transmit harmful, fraudulent, or unlawful
              content.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">5. Intellectual Property</h2>
            <p>
              All content, software, and technology comprising the Service are the property of NextConversion
              and protected by applicable intellectual property laws. You may not reproduce or distribute any
              part of the Service without our written consent.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, NextConversion shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">7. Modifications</h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of the Service after
              changes are posted constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">8. Contact</h2>
            <p>
              For questions about these Terms, please contact us at{" "}
              <a
                href="mailto:legal@nextconversion.ai"
                className="text-primary transition-colors hover:text-primary-2"
              >
                legal@nextconversion.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
