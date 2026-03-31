"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import AgentSection from "../components/AgentSection";
import ScrollDemoSection from "../components/ScrollDemoSection";
import SafetySection from "../components/SafetySection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import DemoModal from "../components/DemoModal";
import StickyMobileCta from "../components/StickyMobileCta";
import SectionProgress from "../components/SectionProgress";
import SiteWalkthrough from "../components/SiteWalkthrough";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <>
      <Navbar onBookDemo={openDemo} />
      <main>
        <HeroSection onBookDemo={openDemo} />
        <ProblemSection />
        <AgentSection />
        <ScrollDemoSection />
        <SafetySection />
        <CtaSection onBookDemo={openDemo} />
      </main>
      <Footer />
      <SectionProgress />
      <StickyMobileCta onBookDemo={openDemo} />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
      <SiteWalkthrough />
    </>
  );
}
