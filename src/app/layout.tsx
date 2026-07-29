import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import {
  SITE_CONFIG,
  SEO_KEYWORDS,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateCTOPersonSchema,
} from "@/src/lib/seo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Software Development & Business Automation Solutions`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SEO_KEYWORDS,
  authors: [
    { name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    { name: `${SITE_CONFIG.founder.name} (${SITE_CONFIG.founder.handle})`, url: SITE_CONFIG.founder.url },
  ],
  creator: `${SITE_CONFIG.founder.name} (${SITE_CONFIG.founder.handle})`,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.founder.handle,
    images: [SITE_CONFIG.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const ctoSchema = generateCTOPersonSchema();

  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([orgSchema, websiteSchema, ctoSchema]),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased marketing-selection`}>
        {children}
      </body>
    </html>
  );
}
