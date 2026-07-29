import type { Metadata } from "next";
import { SITE_CONFIG } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Web & Software Development Services | Custom SaaS, ERP & Automation",
  description:
    "Explore Opygen's full-stack development services: custom website design, web app development, SaaS product engineering, CRM systems, and AI business automation.",
  keywords: [
    "Web Development Services",
    "Website Design and Development Company",
    "Custom Website Development",
    "Business Website Development Services",
    "Professional Web Development Company",
    "SaaS Development Company",
    "Custom CRM Development",
    "Workflow Automation Solutions",
    "React Development Services",
    "Next.js Development Services",
    "Node.js Development Company",
    "Full Stack Web Development Services",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    title: "Web & Software Development Services | Opygen",
    description:
      "Explore Opygen's full-stack development services: custom website design, web app development, SaaS product engineering, CRM systems, and AI business automation.",
    url: `${SITE_CONFIG.url}/services`,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
