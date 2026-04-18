import ContactSection from "@/src/components/marketing/ContactSection";
import Footer from "@/src/components/marketing/Footer";
import HeroSection from "@/src/components/marketing/HeroSection";
import MissionVision from "@/src/components/marketing/MissionVision";
import Navbar from "@/src/components/marketing/Navbar";
import ProductsSection from "@/src/components/marketing/ProductsSection";
import TeamSection from "@/src/components/marketing/TeamSection";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      <MissionVision />
        <ProductsSection />
        <TeamSection />
        <ContactSection />  
      </main>
      <Footer />
    </>
  );
}