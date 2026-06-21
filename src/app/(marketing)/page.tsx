import ContactSection from "@/src/components/marketing/ContactSection";
import HeroSection from "@/src/components/marketing/HeroSection";
import Services from "@/src/components/marketing/Services";
import Process from "@/src/components/marketing/Process";
import TeamSection from "@/src/components/marketing/TeamSection";
import Benefits from "../../components/marketing/Benefits";
import Reviews from "../../components/marketing/Reviews";
import WhyUs from "@/src/components/marketing/WhyUs";
import Products from "../../components/marketing/Products";
import Projects from "../../components/marketing/Projects";

export default function HomePage() {
    return (
        <>
            <main>
                <HeroSection />
                <WhyUs />
                <Services />
                <Products />
                <Projects />
                <Process />
                <Benefits />
                <Reviews />
                <TeamSection />
                <ContactSection />
            </main>
        </>
    );
}
