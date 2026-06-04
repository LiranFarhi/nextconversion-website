import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NextConversion collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-3 font-inter text-sm text-muted">Last updated: June 2026</p>

        <div className="mt-12 space-y-10 font-inter text-[15px] leading-relaxed text-white/75">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email address, and company
              details when you register or book a demo. We also collect usage data, analytics, and cookies to
              improve the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve the Service; send you
              transactional and marketing communications (with your consent); and comply with legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">3. Sharing of Information</h2>
            <p>
              We do not sell your personal data. We may share information with trusted service providers who
              assist us in operating the Service, subject to confidentiality agreements. We may also disclose
              information when required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">4. Cookies &amp; Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to analyze traffic and personalize your
              experience. You can control cookie settings through your browser preferences. Some features of
              the Service may not function correctly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">5. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to provide the
              Service. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">6. Security</h2>
            <p>
              We implement industry-standard security measures to protect your information. However, no
              transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">7. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access, correct, or delete your personal
              data, and to object to or restrict certain processing. To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@nextconversion.ai"
                className="text-primary transition-colors hover:text-primary-2"
              >
                privacy@nextconversion.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes
              by posting a notice on our website or sending an email. Continued use of the Service after
              changes take effect constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">9. Contact</h2>
            <p>
              For privacy-related questions or requests, contact us at{" "}
              <a
                href="mailto:privacy@nextconversion.ai"
                className="text-primary transition-colors hover:text-primary-2"
              >
                privacy@nextconversion.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
