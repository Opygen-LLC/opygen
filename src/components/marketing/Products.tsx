"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Bell,
    CheckCircle2,
    Clock,
    Layers,
    LucideIcon,
    Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import LogoClean from "../../../public/logo/Opygen Clean.png";

type Product = {
    number: string;
    status: string;
    icon: LucideIcon | StaticImageData;
    name: string;
    tagline: string;
    slug: string | null;
    accent: string;
    description: string;
    features: string[];
    badge: string;
};

const products: Product[] = [
    {
        number: "/01",
        status: "Live",
        icon: LogoClean,
        name: "Opygen Clean",
        tagline: "Cleaning CRM",
        slug: "/cleaningcrm",
        accent: "#22c55e",
        description:
            "End-to-end operations platform for cleaning businesses. Schedule jobs, dispatch teams, send invoices, and give customers a portal — all in one place.",
        features: [
            "Recurring bookings & scheduling",
            "Team dispatch & GPS tracking",
            "Instant invoicing & payments",
            "Customer self-service portal",
        ],
        badge: "Available now",
    },
    {
        number: "/02",
        status: "Soon",
        icon: Zap,
        name: "Opygen Fix",
        tagline: "Maintenance CRM",
        slug: null,
        accent: "#f59e0b",
        description:
            "Work order management for property managers and maintenance technicians. Track assets, assign jobs, and keep clients informed automatically.",
        features: [
            "Technician mobile portal",
            "Asset & equipment history",
            "Preventive maintenance alerts",
            "Work order timeline",
        ],
        badge: "Q2 2027",
    },
    {
        number: "/03",
        status: "Soon",
        icon: Layers,
        name: "Opygen Grow",
        tagline: "Landscaping CRM",
        slug: null,
        accent: "#8b5cf6",
        description:
            "Route planning and seasonal crew management for lawn care operators. Handle contracts, equipment, and capacity all from one dashboard.",
        features: [
            "Optimized route planning",
            "Crew capacity management",
            "Equipment & fleet logs",
            "Seasonal contracts",
        ],
        badge: "Q3 2027",
    },
];

// Type guard — StaticImageData has a `src` string property
function isStaticImage(
    icon: LucideIcon | StaticImageData,
): icon is StaticImageData {
    return typeof (icon as StaticImageData).src === "string";
}

export default function Products() {
    return (
        <section
            id="products"
            className="relative text-black border-b border-dashed border-gray-300"
        >
            <div className="container mx-auto max-w-8xl p-0! border-x border-dashed border-gray-300">
                {/* ── HEADER ── */}
                <div className="border-b border-dashed border-gray-300 px-6 py-14 sm:px-8 lg:px-10 xl:px-12 md:py-20">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-5 inline-flex items-center rounded-full border border-black/15 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
                            >
                                / 003 / Products
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="text-[clamp(2.4rem,4.5vw,4.5rem)] font-black leading-[0.9] tracking-tight"
                            >
                                Vertical Software,
                                <br />
                                <span className="text-black/25">
                                    Built to Operate.
                                </span>
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="max-w-sm text-[13.5px] leading-relaxed text-black/50 lg:text-right"
                        >
                            Purpose-built CRMs for service operators. Each
                            product is designed around real workflows — not
                            generic templates.
                        </motion.p>
                    </div>
                </div>

                {/* ── PRODUCT LIST ── */}
                <div className="divide-y divide-dashed divide-gray-300">
                    {products.map((product, i) => {
                        const isLive = product.status === "Live";
                        const isImage = isStaticImage(product.icon);

                        return (
                            <motion.div
                                key={product.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-8%" }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="group grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr_220px]"
                            >
                                {/* Number col */}
                                <div className="hidden items-start justify-center border-r border-dashed border-gray-300 pt-10 lg:flex">
                                    <span className="text-[11px] font-black tracking-widest text-black/25">
                                        {product.number}
                                    </span>
                                </div>

                                {/* Left: identity */}
                                <div className="border-b border-dashed border-gray-300 px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:border-dashed lg:border-gray-300 lg:px-8 xl:px-10">
                                    {/* Status badge */}
                                    <div className="mb-6 flex items-center gap-2">
                                        <span
                                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em]"
                                            style={{
                                                backgroundColor: `${product.accent}18`,
                                                color: product.accent,
                                            }}
                                        >
                                            <span
                                                className="size-1.5 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        product.accent,
                                                }}
                                            />
                                            {product.badge}
                                        </span>
                                    </div>

                                    {/* Icon + name */}
                                    {isLive ? (
                                        <Link
                                            href={product.slug!}
                                            className="group/identity mb-4 flex items-center gap-3 w-fit"
                                        >
                                            <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden border-black/8 transition group-hover/identity:border-black/20 group-hover/identity:shadow-sm">
                                                {isImage ? (
                                                    <Image
                                                        src={
                                                            product.icon as StaticImageData
                                                        }
                                                        alt={product.name}
                                                        width={28}
                                                        height={28}
                                                        className="object-contain"
                                                    />
                                                ) : (
                                                    (() => {
                                                        const LucideIcon =
                                                            product.icon as LucideIcon;
                                                        return (
                                                            <LucideIcon
                                                                className="size-5 text-black/70"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                            />
                                                        );
                                                    })()
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/35">
                                                    {product.tagline}
                                                </p>
                                                <h3 className="flex items-center gap-1.5 text-[1.25rem] font-black leading-tight tracking-tight text-black transition group-hover/identity:text-black/70">
                                                    {product.name}
                                                    <ArrowUpRight className="size-4 opacity-0 transition group-hover/identity:opacity-100" />
                                                </h3>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="mb-4 flex items-center gap-3">
                                            <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden border-black/8">
                                                {isImage ? (
                                                    <Image
                                                        src={
                                                            product.icon as StaticImageData
                                                        }
                                                        alt={product.name}
                                                        width={28}
                                                        height={28}
                                                        className="object-contain"
                                                    />
                                                ) : (
                                                    (() => {
                                                        const LucideIcon =
                                                            product.icon as LucideIcon;
                                                        return (
                                                            <LucideIcon
                                                                className="size-5 text-black/70"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                            />
                                                        );
                                                    })()
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/35">
                                                    {product.tagline}
                                                </p>
                                                <h3 className="text-[1.25rem] font-black leading-tight tracking-tight text-black">
                                                    {product.name}
                                                </h3>
                                            </div>
                                        </div>
                                    )}

                                    <p className="text-[13px] leading-relaxed text-black/50">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Middle: features */}
                                <div className="border-b border-dashed border-gray-300 px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:border-dashed lg:border-gray-300 lg:px-8 xl:px-10">
                                    <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                                        What&apos;s included
                                    </p>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, fi) => (
                                            <li
                                                key={fi}
                                                className="flex items-start gap-3 text-[13px] font-semibold text-black/65"
                                            >
                                                <CheckCircle2
                                                    className="mt-0.5 size-4 shrink-0"
                                                    style={{
                                                        color: product.accent,
                                                    }}
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right: CTA */}
                                <div className="flex flex-col items-start justify-between px-6 py-8 sm:px-8 lg:px-8 xl:px-10">
                                    {/* Live / coming label */}
                                    <div className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/25">
                                        {isLive ? (
                                            <>
                                                <span
                                                    className="size-1.5 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            product.accent,
                                                    }}
                                                />
                                                Live product
                                            </>
                                        ) : (
                                            <>
                                                <Clock className="size-3.5" />
                                                Coming {product.badge}
                                            </>
                                        )}
                                    </div>

                                    {/* CTA button */}
                                    {isLive ? (
                                        <Link
                                            href={product.slug!}
                                            className="group/btn flex w-full items-center justify-between rounded-2xl bg-black px-5 py-4 text-[12px] font-black text-white transition hover:bg-zinc-800 active:scale-[0.97]"
                                        >
                                            <span>Open product</span>
                                            <span className="flex size-7 items-center justify-center rounded-full bg-white/15 transition group-hover/btn:bg-white/25">
                                                <ArrowUpRight className="size-3.5" />
                                            </span>
                                        </Link>
                                    ) : (
                                        <button
                                            type="button"
                                            className="group/btn flex w-full items-center justify-between rounded-2xl border border-dashed border-black/15 bg-white/60 px-5 py-4 text-[12px] font-black text-black/60 transition hover:border-black/30 hover:bg-white hover:text-black"
                                        >
                                            <span>Join waitlist</span>
                                            <span className="flex size-7 items-center justify-center rounded-full border border-black/12 transition group-hover/btn:border-black/25">
                                                <Bell className="size-3.5" />
                                            </span>
                                        </button>
                                    )}

                                    {/* Ghost number */}
                                    <p className="mt-6 self-end text-[4rem] font-black leading-none text-black/5 select-none">
                                        {i + 1}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── BOTTOM CTA STRIP ── */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start justify-between gap-4 border-t border-dashed border-gray-300 px-6 py-7 sm:flex-row sm:items-center sm:px-8 lg:px-10 xl:px-12"
                >
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                            Custom vertical
                        </p>
                        <p className="mt-0.5 text-[15px] font-black text-black">
                            Need a product for a different service industry?
                        </p>
                    </div>
                    <Link
                        href="#contact"
                        className="flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-zinc-800 active:scale-95"
                    >
                        Let&apos;s talk
                        <ArrowUpRight className="size-3.5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
