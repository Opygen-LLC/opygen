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
