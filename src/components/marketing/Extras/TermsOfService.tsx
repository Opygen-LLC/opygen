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
        title: "Acceptance of Terms",
        content: (
            <p>
                By accessing or using Opygen, you agree to comply with and be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use the platform. These terms govern your
                access to and use of the Opygen CRM and related services.
            </p>
        ),
    },
    {
        id: "s2",
        number: "/02",
        title: "Description of Service",
        content: (
            <div className="space-y-4">
                <p>
                    Opygen is a high-performance CRM designed specifically for
                    cleaning businesses. The platform provides tools for client
                    management, online booking, payment processing, staff
                    management, and business analytics. The platform supports
                    three primary user roles:
                </p>
                <BulletList
                    items={[
                        <>
                            <strong className="font-black text-black/75">
                                Super Admin:
                            </strong>{" "}
                            Manages platform-wide operations and business
                            accounts.
                        </>,
                        <>
                            <strong className="font-black text-black/75">
                                Admin / Business Owner:
                            </strong>{" "}
                            Manages their specific cleaning company and
                            settings.
                        </>,
                        <>
                            <strong className="font-black text-black/75">
                                Staff / Field Worker:
                            </strong>{" "}
                            Views and manages assigned jobs and schedules.
                        </>,
                    ]}
                />
            </div>
        ),
    },
    {
        id: "s3",
        number: "/03",
        title: "Account Registration",
        content: (
            <p>
                To use Opygen, you must register for an account. You agree to
                provide accurate, current, and complete information. You are
                responsible for safeguarding your password and for all
                activities that occur under your account. You must be at least
                18 years of age to use the service.
            </p>
        ),
    },
    {
        id: "s4",
        number: "/04",
        title: "Subscription Plans & Billing",
        content: (
            <div className="space-y-4">
                <p>
                    Opygen is a subscription-based service with the following
                    plans:
                </p>
                <BulletList
                    items={[
                        <>
                            <strong className="font-black text-black/75">
                                Starter:
                            </strong>{" "}
                            $19/month
                        </>,
                        <>
                            <strong className="font-black text-black/75">
                                Growth:
                            </strong>{" "}
                            $49/month
                        </>,
                        <>
                            <strong className="font-black text-black/75">
                                Pro:
                            </strong>{" "}
                            $99/month
                        </>,
                    ]}
                />
                <p>
                    Billing occurs monthly and automatically renews unless
                    cancelled. We reserve the right to change prices with at
                    least 14 days&apos; notice via email.
                </p>
            </div>
        ),
    },
    {
        id: "s5",
        number: "/05",
        title: "Cancellation Policy",
        content: (
            <p>
                You can cancel your Opygen subscription at any time through
                your account settings. Upon cancellation, you will continue to
                have access to the platform until the end of your current
                billing period. No refunds are provided for unused time (please
                see our Refund Policy).
            </p>
        ),
    },
    {
        id: "s6",
        number: "/06",
        title: "Acceptable Use",
        content: (
            <p>
                You agree not to use Opygen for any illegal activities, or in
                any way that violates the rights of others. Unauthorized access,
                reverse engineering, scraping, or interfering with the
                platform&apos;s security is strictly prohibited.
            </p>
        ),
    },
    {
        id: "s7",
        number: "/07",
        title: "User Content",
        content: (
            <p>
                You retain ownership of all data you enter into Opygen
                (&ldquo;User Content&rdquo;). By using the service, you grant
                Opygen a limited, worldwide, non-exclusive license to use, host,
                and process your User Content solely for the purpose of
                providing and improving the platform.
            </p>
        ),
    },
    {
        id: "s8",
        number: "/08",
        title: "Intellectual Property",
        content: (
            <p>
                Opygen and its original content, features, and functionality
                are and will remain the exclusive property of Opygen. Our
                trademarks and trade dress may not be used in connection with
                any product or service without our prior written consent.
            </p>
        ),
    },
    {
        id: "s9",
        number: "/09",
        title: "Third-Party Services",
        content: (
            <p>
                Our service integrates with third-party providers such as Stripe
                (payments), AWS (hosting), and transactional email services.
                Your use of these services is subject to their respective terms
                and conditions.
            </p>
        ),
    },
    {
        id: "s10",
        number: "/10",
        title: "Limitation of Liability",
        content: (
            <p>
                Opygen is provided on an &ldquo;as-is&rdquo; and
                &ldquo;as-available&rdquo; basis. We do not guarantee 100%
                uptime, though we aim for a best-effort 99.9% availability. To
                the maximum extent permitted by law, Opygen&apos;s liability is
                limited to the fees paid by you in the 12 months preceding the
                claim.
            </p>
        ),
    },
    {
        id: "s11",
        number: "/11",
        title: "Governing Law",
        content: (
            <p>
                These Terms shall be governed and construed in accordance with
                the laws of our primary jurisdiction, without regard to its
                conflict of law provisions.
            </p>
        ),
    },
    {
        id: "s12",
        number: "/12",
        title: "Contact Us",
        content: (
            <p>
                If you have any questions about these Terms of Service, please
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
            {/* Header — dark sidebar card */}
            <div className="flex overflow-hidden rounded-2xl mb-6">
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
                <div className="flex flex-1 items-center bg-[#111111] px-5 py-4 rounded-r-2xl">
                    <h2 className="text-[15px] font-black text-white tracking-tight">
                        {section.title}
                    </h2>
                </div>
            </div>

            {/* Body */}
            <div className="text-[13.5px] leading-[1.75] text-black/60 font-medium pl-1">
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
                                "flex w-full items-center gap-2.5 py-1.5 text-left text-[11px] font-bold transition-colors duration-150",
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
                                    layoutId="toc-tos-indicator"
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

export default function TermsOfService() {
    const [activeId, setActiveId] = useState<string>(sections[0].id);
    const observerRef = useRef<IntersectionObserver | null>(null);

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
            {/* Dot-grid texture */}
            <div
                className="pointer-events-none absolute top-0 inset-x-0 h-[360px] opacity-[0.13]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            {/* <Navbar /> */}

            <main className="relative z-10 flex-grow">
                <section className="border-b border-dashed border-gray-300">
                    <div className="mx-auto container max-w-5xl border-x border-dashed border-gray-300 p-0! pt-10!">
                        {/* ── HEADER ── */}
                        <div className="pt-16 border-b border-dashed border-gray-300">
                            {/* Eyebrow pill */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="mb-6 ml-10 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black/45"
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
                                className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.92] tracking-tight mb-8 px-10"
                            >
                                Terms of
                                <br />
                                <span className="text-black/22">Service.</span>
                            </motion.h1>

                            {/* Meta row */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.12 }}
                                className="flex items-center gap-4 border-t border-dashed border-gray-300 py-4 px-10 flex-wrap"
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
                        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] items-start pl-10">
                            {/* LEFT — sticky TOC */}
                            <div className="hidden lg:block border-r border-dashed border-gray-300 self-stretch">
                                <div className="sticky top-28 px-0 pr-6 py-10">
                                    <TableOfContents
                                        activeId={activeId}
                                        onSelect={scrollTo}
                                    />
                                </div>
                            </div>

                            {/* RIGHT — scrolling content */}
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
                                <div className="mt-12 lg:pl-12 pr-10 pt-6 border-t border-dashed border-gray-300 flex items-center justify-between gap-4 flex-wrap">
                                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/28">
                                        © {new Date().getFullYear()} Opygen
                                        Operational Systems
                                    </p>
                                    <Link
                                        href="/privacy-policy"
                                        className="text-[10px] font-black uppercase tracking-[0.18em] text-black/40 border border-black/12 rounded-full px-4 py-1.5 hover:border-black/30 hover:text-black transition-all duration-150"
                                    >
                                        Privacy Policy →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </div>
    );
}