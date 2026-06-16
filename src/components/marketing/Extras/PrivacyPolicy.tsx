"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PolicySection {
    id: string;
    number: string;
    title: string;
    content: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const LAST_UPDATED = "April 2024";

const sections: PolicySection[] = [
    {
        id: "s1",
        number: "/01",
        title: "Introduction",
        content: (
            <p>
                Welcome to Opygen. Opygen (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
                or &ldquo;our&rdquo;) is a SaaS CRM built specifically for
                cleaning businesses. This Privacy Policy explains how we
                collect, use, and protect your information when you use our
                platform at opygen.com. By using Opygen, you agree to the
                collection and use of information in accordance with this
                policy. This policy applies to Super Admins, Business Owners,
                and Staff members.
            </p>
        ),
    },
    {
        id: "s2",
        number: "/02",
        title: "Information We Collect",
        content: (
            <div className="space-y-4">
                {[
                    {
                        label: "Account Information",
                        text: "When you register for Opygen, we collect personal information such as your name, email address, business name, phone number, and physical address.",
                    },
                    {
                        label: "Client Data",
                        text: "As part of the service, Business Owners and Staff may enter data about their own clients, including names, service addresses, booking history, and job notes. You are responsible for ensuring you have the right to provide this data to us.",
                    },
                    {
                        label: "Payment Information",
                        text: "Payments are processed through Stripe. We do not store your raw credit card data on our servers. Stripe's use of your personal information is governed by their Privacy Policy.",
                    },
                    {
                        label: "Usage Data",
                        text: "We automatically collect information about how you interact with our platform, such as IP addresses, browser types, page views, and activity logs.",
                    },
                ].map((item) => (
                    <div key={item.label}>
                        <SubsectionTitle>{item.label}</SubsectionTitle>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: "s3",
        number: "/03",
        title: "How We Use Your Information",
        content: (
            <BulletList
                items={[
                    "To provide, maintain, and improve the Opygen CRM platform.",
                    "To facilitate online bookings, send automatic email confirmations, and generate invoice PDFs.",
                    "To manage your subscription, process payments via Stripe, and handle billing inquiries.",
                    "To ensure platform security, prevent fraud, and maintain activity logs.",
                ]}
            />
        ),
    },
    {
        id: "s4",
        number: "/04",
        title: "How We Share Your Information",
        content: (
            <div className="space-y-4">
                <p>
                    We do not sell your personal data. We only share information
                    with third-party service providers that help us operate
                    Opygen:
                </p>
                <BulletList
                    items={[
                        <>
                            <strong className="font-black text-black/75">
                                Stripe:
                            </strong>{" "}
                            For payment processing and subscription management.
                        </>,
                        <>
                            <strong className="font-black text-black/75">
                                AWS:
                            </strong>{" "}
                            For secure cloud hosting and data storage.
                        </>,
                        <>
                            <strong className="font-black text-black/75">
                                Email Service Provider:
                            </strong>{" "}
                            For sending transactional emails like booking
                            confirmations and invoices.
                        </>,
                    ]}
                />
            </div>
        ),
    },
    {
        id: "s5",
        number: "/05",
        title: "Data Retention",
        content: (
            <p>
                We retain your personal information for as long as your account
                is active or as needed to provide you with the service. We also
                retain and use your information as necessary to comply with our
                legal obligations, resolve disputes, and enforce our agreements.
            </p>
        ),
    },
    {
        id: "s6",
        number: "/06",
        title: "User Rights",
        content: (
            <p>
                You have the right to access, update, or delete the personal
                information we have on you. Whenever made possible, you can
                update your personal information directly within your account
                settings section. If you are unable to perform these actions
                yourself, please contact us at{" "}
                <a
                    href="mailto:legal@opygen.com"
                    className="text-black underline underline-offset-4 decoration-[1px] hover:text-black/60 transition-colors"
                >
                    legal@opygen.com
                </a>
                .
            </p>
        ),
    },
    {
        id: "s7",
        number: "/07",
        title: "Cookies",
        content: (
            <p>
                We use cookies to track activity on our platform and hold
                certain information to improve your experience. You can instruct
                your browser to refuse all cookies or to indicate when a cookie
                is being sent.
            </p>
        ),
    },
    {
        id: "s8",
        number: "/08",
        title: "Security",
        content: (
            <p>
                The security of your data is important to us. We use
                industry-standard encryption (TLS) for data in transit and
                AES-256 for data at rest. While we strive to use commercially
                acceptable means to protect your personal information, we cannot
                guarantee its absolute security.
            </p>
        ),
    },
    {
        id: "s9",
        number: "/09",
        title: "Children's Privacy",
        content: (
            <p>
                Opygen is not intended for use by anyone under the age of 18. We
                do not knowingly collect personally identifiable information
                from children under 18.
            </p>
        ),
    },
    {
        id: "s10",
        number: "/10",
        title: "Changes to This Policy",
        content: (
            <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &ldquo;Last Updated&rdquo; date.
            </p>
        ),
    },
    {
        id: "s11",
        number: "/11",
        title: "Contact Us",
        content: (
            <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                    href="mailto:legal@opygen.com"
                    className="text-black underline underline-offset-4 decoration-[1px] hover:text-black/60 transition-colors"
                >
                    legal@opygen.com
                </a>
                .
            </p>
        ),
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SubsectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em] text-black/55 mb-1.5">
            <span className="size-1.5 rounded-full bg-[#ff4d00] shrink-0" />
            {children}
        </p>
    );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
    return (
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className="mt-[9px] size-1.5 rounded-full bg-black/25 shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

// ─── Section Card ─────────────────────────────────────────────────────────────

function SectionCard({
    section,
    index,
    isActive,
}: {
    section: PolicySection;
    index: number;
    isActive: boolean;
}) {
    return (
        <motion.div
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: index * 0.04, duration: 0.45 }}
            className="group lg:pl-12 pr-10 py-10 border-b border-dashed border-gray-300 last:border-b-0"
        >
            {/* Header row — same dark sidebar pattern from Benefits / Process */}
            <div className="flex overflow-hidden rounded-2xl mb-6">
                {/* Sidebar */}
                <div className="flex w-12 shrink-0 flex-col items-center justify-between bg-[#1a1a1a] py-5 px-2 rounded-l-2xl">
                    <span className="text-[10px] font-black tracking-wider text-white/45 [writing-mode:vertical-rl] rotate-180">
                        {section.number}
                    </span>
                    <div
                        className={cn(
                            "h-5 w-1 rounded-full transition-colors duration-300",
                            isActive ? "bg-[#ff4d00]" : "bg-[#ff4d00]/50",
                        )}
                    />
                </div>

                {/* Title block */}
                <div className="flex flex-1 items-center bg-[#111111] px-5 py-4 rounded-r-2xl">
                    <h2 className="text-[15px] font-black text-white tracking-tight">
                        {section.title}
                    </h2>
                </div>
            </div>

            {/* Body */}
            <div className="text-[13.5px] leading-[1.75] text-black/58 font-medium pl-1">
                {section.content}
            </div>
        </motion.div>
    );
}

// ─── TOC ──────────────────────────────────────────────────────────────────────

function TableOfContents({
    activeId,
    onSelect,
}: {
    activeId: string;
    onSelect: (id: string) => void;
}) {
    return (
        <nav aria-label="Table of contents" className="sticky top-28">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                /Contents
            </p>
            <ul className="space-y-0.5">
                {sections.map((s) => (
                    <li key={s.id}>
                        <button
                            onClick={() => onSelect(s.id)}
                            className={cn(
                                "group flex w-full items-center gap-2.5 py-1.5 text-left text-[11px] font-bold transition-colors duration-150",
                                activeId === s.id
                                    ? "text-black"
                                    : "text-black/40 hover:text-black/75",
                            )}
                        >
                            <span className="text-[9px] font-black tracking-[0.1em] text-black/25 w-5 shrink-0">
                                {s.number}
                            </span>
                            <span>{s.title}</span>
                            {activeId === s.id && (
                                <motion.span
                                    layoutId="toc-indicator"
                                    className="ml-auto size-1.5 rounded-full bg-[#ff4d00] shrink-0"
                                />
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function PrivacyPolicy() {
    const [activeId, setActiveId] = useState<string>(sections[0].id);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Scroll-spy: track which section is in view
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 112;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveId(id);
    };

    return (
        <div className="min-h-screen text-black flex flex-col font-sans relative overflow-hidden">
            {/* Dot-grid texture — same as HeroSection */}
            <div
                className="pointer-events-none absolute top-0 inset-x-0 h-[360px] opacity-[0.13]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            {/* Navbar goes here — <Navbar /> */}

            <main className="relative z-10 flex-grow">
                <div className="mx-auto container max-w-5xl border-x border-dashed border-gray-300 p-0! pt-10!">
                    {/* ── HEADER ── */}
                    <div className="pt-16">
                        {/* Eyebrow — same pill pattern from all sections */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black/45 px-10 ml-10"
                        >
                            <span className="size-1.5 rounded-full bg-black/25" />
                            Legal Document
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.65,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.92] tracking-tight mb-6 px-10"
                        >
                            Privacy
                            <br />
                            <span className="text-black/22">Policy.</span>
                        </motion.h1>

                        {/* Meta row — dashed border strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12 }}
                            className="flex items-center gap-4 border-y border-dashed border-gray-300 py-4 flex-wrap px-10"
                        >
                            <span className="size-1.5 rounded-full bg-black/20 shrink-0" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                                Opygen Operational Systems
                            </span>
                            <span className="h-4 w-px bg-gray-300" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                                Last Updated: {LAST_UPDATED}
                            </span>
                            <span className="h-4 w-px bg-gray-300" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                                {sections.length} Sections
                            </span>
                        </motion.div>
                    </div>

                    {/* ── CONTENT GRID ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-0 pl-10 ">
                        {/* Left TOC — desktop only */}
                        <div className="hidden lg:block pr-10 pt-10 border-r border-dashed border-gray-300">
                            <TableOfContents
                                activeId={activeId}
                                onSelect={scrollTo}
                            />
                        </div>

                        {/* Right sections */}
                        <div className="pb-10">
                            {sections.map((section, i) => (
                                <SectionCard
                                    key={section.id}
                                    section={section}
                                    index={i}
                                    isActive={activeId === section.id}
                                />
                            ))}

                            {/* Footer strip */}
                            <div className="mt-16 lg:pl-12 pt-6 border-t border-dashed border-gray-300 flex items-center justify-between gap-4 flex-wrap pr-10">
                                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/28">
                                    © {new Date().getFullYear()} Opygen
                                    Operational Systems
                                </p>
                                <Link
                                    href="/refund-policy"
                                    className="text-[10px] font-black uppercase tracking-[0.18em] text-black/40 border border-black/12 rounded-full px-4 py-1.5 hover:border-black/30 hover:text-black transition-all duration-150"
                                >
                                    Refund Policy →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer goes here — <Footer /> */}
        </div>
    );
}
