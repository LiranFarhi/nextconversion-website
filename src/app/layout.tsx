import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextConversion | Turning Static Storefronts Into Adaptive Experiences",
  description:
    "NextConversion is the agent-led engine that turns every click into a personalized, real-time micro-storefront that optimizes itself 24/7.",
  openGraph: {
    title: "NextConversion | Every Click Deserves Its Own Storefront",
    description:
      "Stop sending laser-focused ad traffic to one-size-fits-all websites. Deploy AI agents that personalize your e-commerce experience in real-time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${poppins.variable}`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
