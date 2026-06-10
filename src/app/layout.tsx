import type { Metadata } from "next";

import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space-grotesk",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Opygen — Operations Engine",
    description:
        "Opygen helps service businesses run better, grow faster, and stay consistent.",
    keywords: [
        "CRM",
        "cleaning",
        "service business",
        "operations",
        "scheduling",
    ],
    openGraph: {
        title: "Opygen — Operations Engine",
        description: "The operating system for service-based businesses.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={spaceGrotesk.variable}
            suppressHydrationWarning
        >
            <body className={`${spaceGrotesk.className} antialiased marketing-selection`}>
                {children}
            </body>
        </html>
    );
}
