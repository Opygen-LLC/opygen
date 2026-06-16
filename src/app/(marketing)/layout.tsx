import type { Metadata } from "next";
import Navbar from "../../components/marketing/Navbar";
import Footer from "../../components/marketing/Footer";

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
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
