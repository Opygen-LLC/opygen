import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Opygen — Operations Engine",
  description:
    "Opygen helps service businesses run better, grow faster, and stay consistent.",
  keywords: ["CRM", "cleaning", "service business", "operations", "scheduling"],
  openGraph: {
    title: "Opygen — Operations Engine",
    description:
      "The operating system for service-based businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      
      >
        {children}
      </body>
    </html>
  );
}