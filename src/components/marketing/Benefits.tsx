"use client";

import {
    BadgeDollarSign,
    BarChart3,
    Infinity,
    LayoutList,
    Star,
    Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    {
        number: "/01",
        icon: BadgeDollarSign,
        title: "Predictable Pricing",
        desc: "Simple pricing structure that gives you unlimited design.",
    },
    {
        number: "/02",
        icon: Zap,
        title: "Fast Turnarounds",
        desc: "Quick and reliable results to keep your business moving forward.",
    },
    {
        number: "/03",
        icon: Infinity,
        title: "Unlimited Requests",
        desc: "We'll handle them one by one – or two at a time with the Pro plan.",
    },
    {
        number: "/04",
        icon: LayoutList,
        title: "Design Portal",
        desc: "Manage tasks and updates inside a clean, organized dashboard.",
    },
    {
        number: "/05",
        icon: Star,
        title: "Top-Tier Quality",
        desc: "Built with care by a team that treats your brand like their own.",
    },
    {
        number: "/06",
        icon: BarChart3,
        title: "Problem Solving",
        desc: "We solve your brand challenges with innovative solutions.",
    },
];

export default function Benefits() {
    return (
        <section
            id="benefits"
            className="relative text-black border-b border-dashed border-gray-300"
        >
            <div className="mx-auto w-full container max-w-8xl marketing-section-container border-x border-dashed border-gray-300">

                {/* Header */}
                <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
                    <div>
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-5 inline-flex items-center rounded-full border border-black/15 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
                        >
                            / 006 / Benefits
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2.8rem,5.5vw,5rem)] font-black leading-[0.93] tracking-tight"
                        >
                            More Design,
                            <br />
                            <span className="text-black/28">Fewer Headaches.</span>
                        </motion.h2>
                    </div>

                    {/* Subtext — right-aligned on desktop */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-sm text-[13.5px] leading-relaxed text-black/50 lg:text-right"
                    >
                        Get unlimited design work for a simple monthly rate.
                        No hourly billing, no surprises – pause or cancel
                        whenever you need.
                    </motion.p>
                </div>

                {/* Benefits grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-8%" }}
                                transition={{ delay: i * 0.07, duration: 0.45 }}
                                className="group relative flex overflow-hidden rounded-2xl border border-black/8 bg-white/70 backdrop-blur-sm transition-shadow hover:shadow-md"
                            >
                                {/* Number sidebar */}
                                <div className="flex w-12 shrink-0 flex-col items-center justify-between border-r border-dashed border-black/10 py-5">
                                    <span className="text-[10px] font-black tracking-wider text-black/30">
                                        {benefit.number}
                                    </span>
                                    {/* Orange accent bar */}
                                    <div className="h-6 w-1 rounded-full bg-[#ff4d00]/60 group-hover:bg-[#ff4d00] transition-colors duration-300" />
                                </div>

                                {/* Card content */}
                                <div className="flex flex-1 flex-col p-6">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <Icon className="size-6 text-black/70" strokeWidth={1.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-2 text-[16px] font-black leading-tight tracking-tight text-black">
                                        {benefit.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[13px] leading-relaxed text-black/50">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
