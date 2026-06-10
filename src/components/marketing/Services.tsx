"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Bell,
    CheckCircle2,
    Layers,
    Wind,
    Zap,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const services = [
    {
        number: "001",
        category: "Brand Identity",
        name: "Identities That Get Noticed",
        slug: "cleaningcrm",
        status: "Live",
        icon: Wind,
        description:
            "Logos, visual systems, and brand guidelines built to give your startup a voice that scales.",
        tags: [
            "Brand Strategy",
            "Logo Design",
            "Art Direction",
            "Color Systems",
            "Brand Strategy",
        ],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop",
    },
    {
        number: "002",
        category: "Web Design",
        name: "Design That Moves Users",
        slug: null,
        status: "Soon",
        icon: Zap,
        description:
            "From landing pages to full product UI – we design digital experiences that convert visitors.",
        tags: [
            "UI/UX Design",
            "Prototyping",
            "Design Systems",
            "Rebranding",
            "UI/UX Design",
            "Proto...",
        ],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop",
    },
    {
        number: "003",
        category: "Motion & 3D",
        name: "Visuals That Stop the Scroll",
        slug: null,
        status: "Soon",
        icon: Layers,
        description:
            "Animated explainers, product reveals, and 3D assets that make your brand impossible to ignore.",
        tags: [
            "Motion Design",
            "3D Rendering",
            "Video Editing",
            "After Effects",
            "Lottie",
        ],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&q=80&auto=format&fit=crop",
    },
    {
        number: "004",
        category: "Conversion Design",
        name: "Pages Built to Convert",
        slug: null,
        status: "Soon",
        icon: Layers,
        description:
            "High-impact landing pages, pricing pages, and funnels designed to turn traffic into revenue.",
        tags: [
            "Landing Pages",
            "A/B Testing",
            "Copywriting",
            "CRO",
            "Funnel Design",
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = cardRefs.current.map((card, i) => {
            if (!card) return null;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveIndex(i);
                },
                { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
            );
            obs.observe(card);
            return obs;
        });
        return () => observers.forEach((obs) => obs?.disconnect());
    }, []);

    return (
        <section
            id="services"
            className="relative text-black border-b border-dashed border-gray-300"
        >
            <div className="mx-auto container max-w-8xl marketing-section-container border-x border-dashed border-gray-300">
                {/* Section header */}
                <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_400px] lg:items-end">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50"
                        >
                            / 002 / Services
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-[clamp(2.8rem,5.5vw,5rem)] font-black leading-[0.93] tracking-tight"
                        >
                            One Subscription,
                            <br />
                            <span className="text-black/35">
                                Every Discipline.
                            </span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-sm text-[13.5px] leading-relaxed text-black/55 lg:text-right"
                    >
                        We combine strategy, speed, and skill to deliver
                        exceptional design – every time.
                    </motion.p>
                </div>

                {/* Sticky scroll layout */}
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-6"
                >
                    {/* LEFT: scrolling service cards */}
                    <div className="flex flex-col gap-4">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.number}
                                    ref={(el) => {
                                        cardRefs.current[i] = el;
                                    }}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.05,
                                    }}
                                    className="overflow-hidden rounded-2xl border border-black/8 bg-white/80 backdrop-blur-sm"
                                >
                                    {/* Card top: badge + title + desc */}
                                    <div className="p-6 pb-5">
                                        <div className="mb-4 inline-flex items-center rounded-full border border-black/12 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">
                                            {service.number} /{" "}
                                            {service.category}
                                        </div>
                                        <h3 className="mb-2 text-[1.35rem] font-black leading-tight tracking-tight">
                                            {service.name}
                                        </h3>
                                        <p className="text-[13px] leading-relaxed text-black/55">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Mobile image — only visible below lg */}
                                    <div className="relative mx-4 mb-4 aspect-[16/9] overflow-hidden rounded-xl lg:hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            sizes="100vw"
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>

                                    {/* What's included */}
                                    <div className="border-t border-dashed border-black/10 px-6 py-4">
                                        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-black/40">
                                            What&apos;s included
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag, t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full border border-black/12 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black/55"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Scroll progress bar (active service) */}
                                    {activeIndex === i && (
                                        <motion.div
                                            layoutId="active-bar"
                                            className="h-0.5 bg-green-500"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT: sticky image panel — desktop only */}
                    <div className="sticky top-24 hidden h-[calc(100vh-8rem)] max-h-[700px] overflow-hidden rounded-2xl lg:block">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.number}
                                animate={{
                                    opacity: activeIndex === i ? 1 : 0,
                                    scale: activeIndex === i ? 1 : 1.04,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    sizes="50vw"
                                    className="object-cover"
                                    unoptimized
                                />
                                {/* subtle dark overlay at top */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
