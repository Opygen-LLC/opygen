"use client";

import CleaningCRMNavBar from "@/src/components/cleaningcrm/landing/NavBar";
import HeroSection from "@/src/components/cleaningcrm/landing/HeroSection";
import SocialProofBar from "@/src/components/cleaningcrm/landing/SocialProofBar";
import ProblemSolution from "@/src/components/cleaningcrm/landing/PowerfulFeatures";
import FeatureShowcase from "@/src/components/cleaningcrm/landing/FeatureShowcase";
import WhoItsFor from "@/src/components/cleaningcrm/landing/UseCase";
import Testimonials from "@/src/components/cleaningcrm/landing/Testimonials";
import HowItWorks from "@/src/components/cleaningcrm/landing/HowItWorks";
import PricingSection from "@/src/components/cleaningcrm/landing/PricingSection";
import FaqSection from "@/src/components/cleaningcrm/landing/FaqSection";
import FinalCta from "@/src/components/cleaningcrm/landing/FinalCta";
import CleaningCRMFooter from "@/src/components/cleaningcrm/landing/Footer";
import PowerfulFeatures from "@/src/components/cleaningcrm/landing/PowerfulFeatures";
import UseCase from "@/src/components/cleaningcrm/landing/UseCase";

export default function CleaningCRMLandingPage() {
  return (
    <div className="relative overflow-x-hidden">
      <CleaningCRMNavBar />
      <HeroSection />
      <SocialProofBar />
      <PowerfulFeatures />
      <FeatureShowcase />
      <UseCase />
      <Testimonials />
      <HowItWorks />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <CleaningCRMFooter />
    </div>
  );
}