// src/app/layout.tsx
import { Inter, Host_Grotesk, Sora } from "next/font/google";
import "../globals.css";

// Inter for clean UI/Body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

// Add ${sora.variable} to your html/body className

// Host Grotesk for that sharp, industrial "display" look
const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}  ${sora.className}`}>
      <body >{children}</body>
    </html>
  );
}