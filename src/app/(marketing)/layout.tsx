import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opygen — Operations Engine",
  description:
    "Opygen helps service businesses run better, grow faster, and stay consistent. One platform for scheduling, clients, payments, and team management.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
