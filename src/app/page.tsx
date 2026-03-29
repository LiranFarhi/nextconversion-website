"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import AgentSection from "../components/AgentSection";
import ScrollDemoSection from "../components/ScrollDemoSection";
import SafetySection from "../components/SafetySection";
import FounderSection from "../components/FounderSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import DemoModal from "../components/DemoModal";
import SocialProofSection from "../components/SocialProofSection";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <>
      <Navbar onBookDemo={openDemo} />
      <main>
        <HeroSection onBookDemo={openDemo} />
        <SocialProofSection />
        <ProblemSection />
        <AgentSection />
        <ScrollDemoSection />
        <SafetySection />
        <FounderSection />
        <CtaSection onBookDemo={openDemo} />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </>
  );
}
