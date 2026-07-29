import type { Metadata } from "next";
import { SITE_CONFIG } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Software Development & Business Automation Solutions`,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
