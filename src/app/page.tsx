import Header from "../components/Header";
import Hero from "../components/Hero";
import StorefrontComparison from "../components/StorefrontComparison";
import ProblemSection from "../components/ProblemSection";
import AgentsSection from "../components/AgentsSection";
import LiveDemoSection from "../components/LiveDemoSection";
import SafetySection from "../components/SafetySection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import AmbientOrbs from "../components/AmbientOrbs";
import DemoModal from "../components/DemoModal";
import StickyMobileCta from "../components/StickyMobileCta";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AmbientOrbs />
      <Header />
      <main className="relative z-10">
        <Hero />
        <StorefrontComparison />
        <ProblemSection />
        <AgentsSection />
        <LiveDemoSection />
        <SafetySection />
        <CtaSection />
      </main>
      <Footer />
      <DemoModal />
      <StickyMobileCta />
    </>
  );
}
