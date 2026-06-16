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
        title: "Our Commitment to Security",
        content: (
            <p>
                At Opygen, security is at the core of our technical
                architecture. We understand that cleaning businesses trust us
                with sensitive client data, financials, and staff schedules. We
                take that responsibility seriously and implement multi-layered
                security measures to protect your information.
            </p>
        ),
    },
    {
        id: "s2",
        number: "/02",
        title: "Data Encryption",
        content: (
            <div className="space-y-4">
                {[
                    {
                        label: "In Transit",
                        text: "All data transmitted between your browser and Opygen servers is encrypted using modern TLS (Transport Layer Security) protocols. This ensures that your information cannot be intercepted by unauthorized parties.",
                    },
                    {
                        label: "At Rest",
                        text: "Sensitive data stored in our databases is encrypted at rest using industry-standard AES-256 encryption. This provides an additional layer of protection for your business and client data.",
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
        title: "Data Storage & Infrastructure",
        content: (
            <p>
                Opygen is hosted on AWS (Amazon Web Services), which provides
                enterprise-grade physical and network security. Our
                infrastructure leverages best-in-class security controls
                provided by AWS, and we perform regular automated backups to
                ensure data durability and rapid recovery.
            </p>
        ),
    },
    {
        id: "s4",
        number: "/04",
        title: "Payment Security",
        content: (
            <p>
                All financial transactions on Opygen are processed by Stripe, a
                PCI-DSS Level 1 compliant payment processor. Opygen never stores
                raw credit card numbers or highly sensitive financial data on
                its own servers, significantly reducing your compliance burden
                and risk.
            </p>
        ),
    },
    {
        id: "s5",
        number: "/05",
        title: "Access Controls",
        content: (
            <BulletList
                items={[
                    <>
                        <strong className="font-black text-black/75">
                            Role-Based Access Control (RBAC):
                        </strong>{" "}
                        Our platform enforces strict role-based access. Super
                        Admins, Business Owners, and Staff members see only the
                        data required for their specific roles.
                    </>,
                    <>
                        <strong className="font-black text-black/75">
                            Password Hashing:
                        </strong>{" "}
                        User passwords are securely hashed using bcrypt before
                        being stored.
                    </>,
                    <>
                        <strong className="font-black text-black/75">
                            Two-Factor Authentication (2FA):
                        </strong>{" "}
                        Support for 2FA is available for administrative accounts
                        to provide an extra layer of login security.
                    </>,
                ]}
            />
        ),
    },
    {
        id: "s6",
        number: "/06",
        title: "Security Testing & Monitoring",
        content: (
            <p>
                We perform regular internal vulnerability assessments and plan
                for annual third-party penetration testing as we grow. Our
                systems are monitored 24/7 for unusual activity or potential
                security threats.
            </p>
        ),
    },
    {
        id: "s7",
        number: "/07",
        title: "Incident Response",
        content: (
            <p>
                In the event of a verified data breach that impacts personal
                information, Opygen is committed to notifying all affected users
                within 72 hours of discovery, detailing the nature of the breach
                and the steps taken to mitigate its impact.
            </p>
        ),
    },
    {
        id: "s8",
        number: "/08",
        title: "Responsible Disclosure",
        content: (
            <p>
                If you are a security researcher and have discovered a potential
                vulnerability in Opygen, we encourage you to report it to us
                responsibly at{" "}
                <a
                    href="mailto:security@opygen.com"
                    className="text-black underline underline-offset-4 decoration-[1px] hover:text-black/60 transition-colors"
                >
                    security@opygen.com
                </a>
                . We take all reports seriously and will work with you to
                address confirmed issues.
            </p>
        ),
    },
    {
        id: "s9",
        number: "/09",
        title: "Contact Us",
        content: (
            <p>
                For any security-related inquiries, please reach out to our
                security team at{" "}
                <a
                    href="mailto:security@opygen.com"
                    className="text-black underline underline-offset-4 decoration-[1px] hover:text-black/60 transition-colors"
                >
                    security@opygen.com
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
                                    layoutId="toc-security-indicator"
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

export default function Security() {
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
                                Security
                                <br />
                                <span className="text-black/22">Overview.</span>
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
                                        href="/terms-of-service"
                                        className="text-[10px] font-black uppercase tracking-[0.18em] text-black/40 border border-black/12 rounded-full px-4 py-1.5 hover:border-black/30 hover:text-black transition-all duration-150"
                                    >
                                        Terms of Service →
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
