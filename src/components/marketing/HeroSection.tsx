"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
    "logoipsum",
    "LOGOIPSUM",
    "logoipsum",
    "Logoipsum",
    "logoipsum",
    "logoipsum",
    "logoipsum",
    "Logoipsum",
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen text-black">
            {/* Dot texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative mx-auto max-w-7xl border-x border-dashed border-gray-300 pt-5">
                {/* Main grid */}
                <div className="grid grid-cols-1 min-h-[calc(100vh-5rem)] pt-10 lg:grid-cols-2 lg:items-start px-5">

                    {/* LEFT col */}
                    <div className="flex flex-col justify-between pb-10 lg:pt-6 lg:pb-16 lg:pr-16 lg:border-r lg:border-dashed lg:border-gray-300">
                        <div>
                            {/* Availability badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-600 backdrop-blur-sm"
                            >
                                <span className="size-1.5 rounded-full bg-green-500" />
                                2 slots available this month
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="mb-6 text-[clamp(2.4rem,6vw,5.5rem)] font-black leading-[0.92] tracking-tight text-black"
                            >
                                All The Design
                                <br />
                                You Need.{" "}
                                <span className="text-gray-400">One</span>
                                <br />
                                <span className="text-gray-400">Monthly Rate.</span>
                            </motion.h1>

                            {/* Subheading */}
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="mb-8 max-w-sm text-[13.5px] leading-relaxed text-gray-500"
                            >
                                A design subscription for startups and founders who need
                                senior-level work, fast – without the cost of a full-time hire.
                            </motion.p>

                            {/* CTA buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="mb-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3"
                            >
                                <Link
                                    href="#contact"
                                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[13px] font-bold text-white transition hover:bg-zinc-800 active:scale-95"
                                >
                                    Book an intro call
                                    <Phone className="size-3.5" />
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/60 px-6 py-3 text-[13px] font-bold text-black transition hover:bg-white active:scale-95"
                                >
                                    View Pricing
                                    <ArrowUpRight className="size-3.5" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Social proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="flex items-center gap-4"
                        >
                            <div className="flex -space-x-2 shrink-0">
                                {[
                                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
                                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
                                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
                                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
                                ].map((src, i) => (
                                    <div
                                        key={i}
                                        className="relative size-8 sm:size-9 overflow-hidden rounded-full border-2 border-white"
                                    >
                                        <Image
                                            src={src}
                                            alt="Client"
                                            fill
                                            sizes="36px"
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-0.5 text-amber-400">
                                    {"★★★★★".split("").map((s, i) => (
                                        <span key={i} className="text-sm">{s}</span>
                                    ))}
                                </div>
                                <p className="text-[12px] font-bold text-black">
                                    Trusted by 100+ businesses
                                </p>
                                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                                    They hit their targets — you&apos;re next.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT col — desktop only */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:flex lg:items-start lg:pl-16 lg:pt-6 lg:pb-16"
                    >
                        <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&q=80&auto=format&fit=crop"
                                alt="Design hero"
                                fill
                                sizes="50vw"
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                <Link
                                    href="#projects"
                                    className="flex items-center gap-2 rounded-full bg-black/90 px-5 py-2.5 text-[12px] font-bold text-white backdrop-blur-sm transition hover:bg-black"
                                >
                                    View all projects
                                    <ArrowUpRight className="size-3.5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile hero image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="block lg:hidden pb-10"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&q=80&auto=format&fit=crop"
                                alt="Design hero"
                                fill
                                sizes="100vw"
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                <Link
                                    href="#projects"
                                    className="flex items-center gap-2 rounded-full bg-black/90 px-5 py-2.5 text-[12px] font-bold text-white"
                                >
                                    View all projects
                                    <ArrowUpRight className="size-3.5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Partner logos strip */}
            <div className="border-y border-dashed border-gray-300">
                <div className="mx-auto max-w-7xl">
                    {/* Desktop: 8 cols in one row */}
                    <div className="hidden lg:grid lg:grid-cols-8">
                        {partners.map((partner, i) => (
                            <div
                                key={i}
                                className="flex h-16 items-center gap-2 px-4 xl:px-6 text-[10px] xl:text-[11px] font-black uppercase tracking-widest text-gray-300 border-r border-dashed border-gray-300 first:border-l"
                            >
                                <span className="size-3 xl:size-3.5 rounded-full border border-gray-300 shrink-0" />
                                <span className="truncate">{partner}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tablet: 4 cols × 2 rows */}
                    <div className="hidden sm:grid lg:hidden grid-cols-4">
                        {partners.map((partner, i) => (
                            <div
                                key={i}
                                className="flex h-14 items-center gap-2 px-5 text-[10px] font-black uppercase tracking-widest text-gray-300 border-r border-dashed border-gray-300 first:border-l border-b last:border-b-0 [&:nth-child(4)]:border-b [&:nth-child(5)]:border-b-0 [&:nth-child(n+5)]:border-b-0"
                            >
                                <span className="size-3 rounded-full border border-gray-300 shrink-0" />
                                <span className="truncate">{partner}</span>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: 2 cols × 4 rows */}
                    <div className="grid grid-cols-2 sm:hidden">
                        {partners.map((partner, i) => (
                            <div
                                key={i}
                                className="flex h-12 items-center gap-2 px-4 text-[10px] font-black uppercase tracking-widest text-gray-300 border-r border-dashed border-gray-300 odd:border-l border-b last:border-b-0 [&:nth-last-child(2)]:border-b-0"
                            >
                                <span className="size-3 rounded-full border border-gray-300 shrink-0" />
                                <span className="truncate">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}