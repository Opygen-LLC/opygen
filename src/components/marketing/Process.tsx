"use client";

import Link from "next/link";
import { ArrowUpRight, CirclePlus, List, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
    {
        number: "/01",
        icon: CirclePlus,
        title: "Consult",
        description:
            "Tell us about your business, goals, and requirements. We analyze your needs and recommend the best digital solutions for your growth.",
    },
    {
        number: "/02",
        icon: List,
        title: "Build",
        description:
            "Our team designs and develops your website, mobile app, branding assets, or marketing strategy with a focus on quality, performance, and results.",
    },
    {
        number: "/03",
        icon: CheckCheck,
        title: "Launch",
        description:
            "We deliver, deploy, and support your project. From websites and apps to digital marketing campaigns, we help you grow with confidence.",
    },
];

export default function Process() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % steps.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="process"
            className="relative text-black border-b border-dashed border-gray-300"
        >
            <div className="mx-auto container max-w-8xl marketing-section-container border-x border-dashed border-gray-300">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
                    {/* LEFT — sticky on desktop */}
                    <div className="lg:sticky lg:top-28">
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6 inline-flex items-center rounded-full border border-black/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50"
                        >
                            / 005 / Process
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="mb-6 text-[clamp(2.8rem,5.5vw,5rem)] font-black leading-[0.93] tracking-tight"
                        >
                            Getting Design
                            <br />
                            <span className="text-black/35">Done, Better.</span>
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mb-8 max-w-xs text-[13.5px] leading-relaxed text-black/55"
                        >
                            A workflow built for shipping speed – subscribe,
                            request, receive. No calls, no scoping rounds, no
                            surprises.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.18 }}
                        >
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2.5 text-[13px] font-black text-black transition hover:opacity-60"
                            >
                                Let&apos;s Talk
                                <span className="flex size-8 items-center justify-center rounded-full bg-black text-white">
                                    <ArrowUpRight className="size-3.5" />
                                </span>
                            </Link>
                        </motion.div>

                        {/* Step dots indicator — desktop */}
                        <div className="mt-12 hidden items-center gap-2 lg:flex">
                            {steps.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className="group flex items-center gap-2"
                                    aria-label={`Go to step ${i + 1}`}
                                >
                                    <motion.div
                                        animate={{
                                            width: active === i ? 24 : 6,
                                            backgroundColor:
                                                active === i
                                                    ? "#000"
                                                    : "#00000033",
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease: "easeInOut",
                                        }}
                                        className="h-1.5 rounded-full"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — step cards */}
                    <div className="flex flex-col gap-3">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            const isActive = active === i;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: i * 0.08,
                                        duration: 0.45,
                                    }}
                                    onClick={() => setActive(i)}
                                    className="flex cursor-pointer gap-0 overflow-hidden rounded-2xl"
                                >
                                    {/* Number sidebar */}
                                    <motion.div
                                        animate={{
                                            backgroundColor: isActive
                                                ? "#1a1a1a"
                                                : "#e2e2e2",
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="flex w-14 shrink-0 flex-col items-center justify-between py-5 px-2"
                                    >
                                        <motion.span
                                            animate={{
                                                color: isActive
                                                    ? "rgba(255,255,255,0.7)"
                                                    : "rgba(0,0,0,0.4)",
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="text-[10px] font-black tracking-wider"
                                        >
                                            {step.number}
                                        </motion.span>

                                        <motion.div
                                            animate={{
                                                backgroundColor: isActive
                                                    ? "#ff4d00"
                                                    : "#ff4d0055",
                                            }}
                                            className="h-5 w-1 rounded-full"
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>

                                    {/* Card body */}
                                    <motion.div
                                        animate={{
                                            backgroundColor: isActive
                                                ? "#111111"
                                                : "#e8e8e8",
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="flex flex-1 flex-col justify-between p-6"
                                    >
                                        {/* Icon */}
                                        <motion.div
                                            animate={{
                                                color: isActive
                                                    ? "rgba(255,255,255,0.9)"
                                                    : "rgba(0,0,0,0.7)",
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="mb-8"
                                        >
                                            <Icon
                                                className="size-6"
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>

                                        {/* Title + Description */}
                                        <div>
                                            <motion.h3
                                                animate={{
                                                    color: isActive
                                                        ? "#ffffff"
                                                        : "#111111",
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="mb-2 text-2xl font-black tracking-tight"
                                            >
                                                {step.title}
                                            </motion.h3>

                                            {/* Description — clip opacity only, no height animation */}
                                            <motion.p
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    color: isActive
                                                        ? "rgba(255,255,255,0.6)"
                                                        : "rgba(0,0,0,0.5)",
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="text-[13.5px] leading-relaxed"
                                                style={{
                                                    visibility: isActive
                                                        ? "visible"
                                                        : "hidden",
                                                    position: isActive
                                                        ? "relative"
                                                        : "absolute",
                                                    pointerEvents: "none",
                                                }}
                                            >
                                                {step.description}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* Mobile dots */}
                        <div className="mt-2 flex items-center justify-center gap-2 lg:hidden">
                            {steps.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    aria-label={`Go to step ${i + 1}`}
                                >
                                    <motion.div
                                        animate={{
                                            width: active === i ? 20 : 6,
                                            backgroundColor:
                                                active === i
                                                    ? "#000"
                                                    : "#00000033",
                                        }}
                                        transition={{ duration: 0.35 }}
                                        className="h-1.5 rounded-full"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
