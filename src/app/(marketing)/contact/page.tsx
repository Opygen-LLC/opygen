import type { Metadata } from "next";
import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import ContactSection from "@/src/components/marketing/ContactSection";
import { SITE_CONFIG } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Contact Opygen — Hire Software Developers & Request a Quote",
  description:
    "Get in touch with Opygen for custom software development, SaaS products, CRM automation, or web app consulting. Request a free quote today.",
  keywords: [
    "Hire Software Development Company",
    "Request Software Development Quote",
    "Hire Software Developers",
    "Custom Software Consultation",
    "Software Development Agency Near Me",
    "Software Company Bangladesh Contact",
    "Opygen Contact",
    "Faysal Ahmed CTO Contact",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: "Contact Opygen — Hire Software Developers & Request a Quote",
    description:
      "Get in touch with Opygen for custom software development, SaaS products, CRM automation, or web app consulting. Request a free quote today.",
    url: `${SITE_CONFIG.url}/contact`,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Opygen",
    description:
      "Request a software development quote or schedule a consultation with Opygen.",
    url: `${SITE_CONFIG.url}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      email: SITE_CONFIG.contact.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales & inquiries",
        email: SITE_CONFIG.contact.email,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <Navbar />
      <main className="min-h-screen bg-[#F7F7F4] font-space-grotesk pt-24">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
