"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section id="home" className="relative text-black">

            {/* Dot grid texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.13]"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            {/* Dashed side borders */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-8xl container -translate-x-1/2 border-x border-dashed border-gray-300" />

            <div className="relative container mx-auto max-w-8xl p-0!">

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* LEFT */}
                    <div className="flex flex-col border-b border-dashed border-gray-300 lg:border-b-0 lg:border-r lg:border-dashed lg:border-gray-300">

                        {/* Main content */}
                        <div className="flex flex-1 flex-col justify-center px-6 pb-8 pt-24 sm:px-8 lg:px-10 lg:pt-28 xl:px-12">

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-500 backdrop-blur-sm"
                            >
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                                </span>
                                2 slots available this month
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                                className="mb-5 text-[clamp(2.4rem,4.5vw,4.5rem)] font-black leading-[0.9] tracking-tight"
                            >
                                All The Design
                                <br />
                                You Need.{" "}
                                <span className="text-black/25">One</span>
                                <br />
                                <span className="text-black/25">Monthly Rate.</span>
                            </motion.h1>

                            {/* Subheading */}
                            <motion.p
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="mb-8 max-w-[320px] text-[13.5px] leading-relaxed text-black/50"
                            >
                                A design subscription for startups and founders who need
                                senior-level work, fast – without the cost of a full-time hire.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.16 }}
                                className="flex flex-col gap-2.5 sm:flex-row"
                            >
                                <Link
                                    href="#contact"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[12.5px] font-bold text-white transition hover:bg-zinc-800 active:scale-[0.97]"
                                >
                                    Book an intro call
                                    <Phone className="size-3" />
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-black/12 bg-white/80 px-6 py-3 text-[12.5px] font-bold text-black transition hover:bg-white active:scale-[0.97]"
                                >
                                    View Pricing
                                    <ArrowUpRight className="size-3" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-3 px-6 py-6 sm:px-8 lg:px-10 lg:pt-24 xl:px-12">

                        {/* Hero image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97, y: 18 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full flex-1 overflow-hidden rounded-2xl bg-gray-200 shadow-sm"
                            style={{ minHeight: "260px", aspectRatio: "4/3.8" }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&q=80&auto=format&fit=crop"
                                alt="Design work showcase"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                unoptimized
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

                            {/* Top-left badge */}
                            <div className="absolute left-3.5 top-3.5">
                                <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-md">
                                    <span className="size-1.5 rounded-full bg-green-400" />
                                    Senior-level work
                                </div>
                            </div>

                            {/* Bottom pill */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                <Link
                                    href="#projects"
                                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[11px] font-bold text-white backdrop-blur-md transition hover:bg-white/25"
                                >
                                    View all projects
                                    <ArrowUpRight className="size-3" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}