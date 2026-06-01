import Header from "../components/Header";
import Hero from "../components/Hero";
import StorefrontComparison from "../components/StorefrontComparison";
import PersonaStrip from "../components/PersonaStrip";
import ProblemSection from "../components/ProblemSection";
import AgentsSection from "../components/AgentsSection";
import LiveDemoSection from "../components/LiveDemoSection";
import SafetySection from "../components/SafetySection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StorefrontComparison />
        <PersonaStrip />
        <ProblemSection />
        <AgentsSection />
        <LiveDemoSection />
        <SafetySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
