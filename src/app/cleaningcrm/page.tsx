"use client";

import CRMFooter from "@/src/components/cleaningcrm/landing/CRMFooter";
import CRMHero from "@/src/components/cleaningcrm/landing/CRMHero";
import CRMNavbar from "@/src/components/cleaningcrm/landing/CRMNavbar";
import FeaturesSection from "@/src/components/cleaningcrm/landing/FeaturesSection";
import PricingSection from "@/src/components/cleaningcrm/landing/PricingSection";
import TestimonialsSection from "@/src/components/cleaningcrm/landing/WorkflowSection";
import { motion } from "framer-motion";

export default function CleaningCRMLandingPage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Navigation */}
      <CRMNavbar />

      {/* Hero Section: The "Hook" */}
      <CRMHero />

    

      {/* Features: The "Engine" */}
      <FeaturesSection />

      {/* Pricing: The "Conversion" */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}

      {/* Footer */}
      <CRMFooter />
    </div>
  );
}