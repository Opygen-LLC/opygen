import type { Metadata } from "next";
import { Syne } from "next/font/google";

export const metadata: Metadata = {
  title: "Opygen — Operations Engine",
  description:
    "Opygen helps service businesses run better, grow faster, and stay consistent. One platform for scheduling, clients, payments, and team management.",
};

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <><div className={`${syne.variable} ${syne.className} antialiased`}>{children}</div></>;
}