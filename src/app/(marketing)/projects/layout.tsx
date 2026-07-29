import type { Metadata } from "next";
import { SITE_CONFIG } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Case Studies & Featured Projects | Custom SaaS & Web Apps",
  description:
    "Explore Opygen's portfolio of custom software development, real estate portals, dental clinic SaaS, architectural design platforms, and business automation apps.",
  keywords: [
    "Software Case Studies",
    "Web Application Portfolio",
    "SaaS Projects",
    "Custom ERP Case Studies",
    "Real Estate Software Development",
    "Dental Clinic CRM",
    "Opygen Portfolio",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/projects`,
  },
  openGraph: {
    title: "Case Studies & Featured Projects | Opygen",
    description:
      "Explore Opygen's portfolio of custom software development, real estate portals, dental clinic SaaS, architectural design platforms, and business automation apps.",
    url: `${SITE_CONFIG.url}/projects`,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
