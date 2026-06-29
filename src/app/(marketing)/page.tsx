import ContactSection from "@/src/components/marketing/ContactSection";
import Footer from "@/src/components/marketing/Footer";
import HeroSection from "@/src/components/marketing/HeroSection";
import Navbar from "@/src/components/marketing/Navbar";
import Services from "@/src/components/marketing/Services";
import Process from "@/src/components/marketing/Process";
import TeamSection from "@/src/components/marketing/TeamSection";
import Benefits from "../../components/marketing/Benefits";
import Reviews from "../../components/marketing/Reviews";
import WhyUs from "@/src/components/marketing/WhyUs";
import Products from "../../components/marketing/Products";
import TrustedAndDetails from "@/src/components/marketing/TrustedAndDetails";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedAndDetails />
        {/* <WhyUs /> */}
        <Services />
        <Products />
        <Process />
        <Benefits />
        <Reviews />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
