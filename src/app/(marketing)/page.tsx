import type { Metadata } from "next";
import ContactSection from "@/src/components/marketing/ContactSection";
import Footer from "@/src/components/marketing/Footer";
import HeroSection1 from "@/src/components/marketing/HeroSection1";
import Navbar from "@/src/components/marketing/Navbar";
import Services from "@/src/components/marketing/Services";
import Products from "@/src/components/marketing/Products";
import TeamSection from "@/src/components/marketing/TeamSection";
import Reviews from "../../components/marketing/Reviews";
import TrustedAndDetails from "@/src/components/marketing/TrustedAndDetails";
import Features from "@/src/components/marketing/Features";
import ServicesSteps from "@/src/components/marketing/ServicesSteps";
import ProjectsSection from "@/src/components/marketing/ProjectsSection";
import TechStackBar from "@/src/components/marketing/TechStackBar";
import AgencyComparison from "@/src/components/marketing/AgencyComparison";
import ProjectEstimator from "@/src/components/marketing/ProjectEstimator";
import FaqSection from "@/src/components/marketing/FaqSection";
import { SITE_CONFIG, SEO_KEYWORDS } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Software Development & Business Automation Solutions`,
  description:
    "Opygen helps businesses grow with custom software development, SaaS solutions, CRM platforms, web applications, and digital automation services.",
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Software Development & Business Automation Solutions`,
    description:
      "Opygen helps businesses grow with custom software development, SaaS solutions, CRM platforms, web applications, and digital automation services.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="marketing-page">
      <Navbar />
      <main className="w-full overflow-x-clip">
        <HeroSection1 />
        <TechStackBar />
        <TrustedAndDetails />
        <Features />
        <ServicesSteps />
        <AgencyComparison />
        <Services />
        <Products />
        <ProjectsSection />
        <ProjectEstimator />
        <Reviews />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
