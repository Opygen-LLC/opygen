import ContactSection from "@/src/components/marketing/ContactSection";
import Footer from "@/src/components/marketing/Footer";
import HeroSection1 from "@/src/components/marketing/HeroSection1";
import Navbar from "@/src/components/marketing/Navbar";
import Services from "@/src/components/marketing/Services";
import TeamSection from "@/src/components/marketing/TeamSection";
import Reviews from "../../components/marketing/Reviews";
import TrustedAndDetails from "@/src/components/marketing/TrustedAndDetails";
import Features from "@/src/components/marketing/Features";
import ServicesSteps from "@/src/components/marketing/ServicesSteps";
import ProjectsSection from "@/src/components/marketing/ProjectsSection";

export default function HomePage() {
  return (
    <div className="marketing-page">
      <Navbar />
      <main>
        <HeroSection1 />
        <TrustedAndDetails />
        <Features />
        <ServicesSteps />
        <Services />
        <ProjectsSection />
        <Reviews />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
