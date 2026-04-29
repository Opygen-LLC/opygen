"use client";

import NavBar from "@/src/components/cleaningcrm/landing/NavBar";
import HeroSection from "@/src/components/cleaningcrm/landing/HeroSection";
import SocialProofBar from "@/src/components/cleaningcrm/landing/SocialProofBar";
import ProblemSolution from "@/src/components/cleaningcrm/landing/ProblemSolution";
import FeatureShowcase from "@/src/components/cleaningcrm/landing/FeatureShowcase";
import WhoItsFor from "@/src/components/cleaningcrm/landing/WhoItsFor";
import Testimonials from "@/src/components/cleaningcrm/landing/Testimonials";
import HowItWorks from "@/src/components/cleaningcrm/landing/HowItWorks";
import PricingSection from "@/src/components/cleaningcrm/landing/PricingSection";
import FaqSection from "@/src/components/cleaningcrm/landing/FaqSection";
import FinalCta from "@/src/components/cleaningcrm/landing/FinalCta";
import Footer from "@/src/components/cleaningcrm/landing/Footer";

export default function CleaningCRMLandingPage() {
  return (
    <div className="relative overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSolution />
      <FeatureShowcase />
      <WhoItsFor />
      <Testimonials />
      <HowItWorks />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </div>
  );
}