import type { Metadata } from "next";
import { SITE_CONFIG, generateCleaningCRMSchema } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Cleaning CRM | Business Management & Scheduling Software for Cleaning Services",
  description:
    "Automate your cleaning agency with Opygen Cleaning CRM. Online client booking, automated scheduling, staff portal, instant invoicing, and field service management.",
  keywords: [
    "Cleaning CRM",
    "Opygen Cleaning CRM",
    "Cleaning Business Management Software",
    "Cleaning Service CRM Software",
    "Cleaning Company Software",
    "Cleaning Scheduling Software",
    "Cleaning Service Management System",
    "Maid Service Management Software",
    "Cleaning CRM Platform",
    "Field Service Management Software",
    "CRM software for cleaning companies",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/cleaningcrm`,
  },
  openGraph: {
    title: "Opygen Cleaning CRM — Business Management Software for Cleaning Services",
    description:
      "Automate your cleaning agency with Opygen Cleaning CRM. Online client booking, automated scheduling, staff portal, instant invoicing, and field service management.",
    url: `${SITE_CONFIG.url}/cleaningcrm`,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: "Opygen Cleaning CRM" }],
    type: "website",
  },
};

export default function CleaningCRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const crmSchema = generateCleaningCRMSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(crmSchema),
        }}
      />
      {children}
    </>
  );
}
