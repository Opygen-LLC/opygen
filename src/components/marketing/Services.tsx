"use client";

import Image from "next/image";
import {
    Bell,
    CheckCircle2,
    Layers,
    Wind,
    Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const services = [
    {
        number: "001",
        category: "Website Design",
        name: "Websites That Build Trust",
        slug: "website-design",
        status: "Active",
        icon: Wind,
        description:
            "Modern, user-focused website designs that strengthen your brand, engage visitors, and drive conversions.",
        tags: [
            "UI/UX Design",
            "Landing Pages",
            "Corporate Websites",
            "Wireframing",
            "Responsive Design",
        ],
        image: "/images/services/web-design.jpg",
    },
    {
        number: "002",
        category: "Web Development",
        name: "Fast, Secure & Scalable Platforms",
        slug: "web-development",
        status: "Active",
        icon: Zap,
        description:
            "Custom websites and web applications built with modern technologies to ensure performance, security, and growth.",
        tags: [
            "Next.js",
            "React",
            "Node.js",
            "API Development",
            "CMS Solutions",
        ],
        image: "/images/services/web-development.jpg",
    },
    {
        number: "003",
        category: "App Development",
        name: "Mobile Experiences Users Love",
        slug: "app-development",
        status: "Active",
        icon: Layers,
        description:
            "Cross-platform and native mobile applications designed to help businesses connect with customers anywhere.",
        tags: [
            "iOS Apps",
            "Android Apps",
            "Flutter",
            "React Native",
            "Backend Systems",
        ],
        image: "/images/services/app-development.jpg",
    },
    {
        number: "004",
        category: "Digital Marketing",
        name: "Growth Driven Marketing",
        slug: "digital-marketing",
        status: "Active",
        icon: Bell,
        description:
            "Data-driven marketing strategies that increase visibility, generate leads, and grow revenue.",
        tags: [
            "SEO",
            "Social Media",
            "Google Ads",
            "Content Marketing",
            "Analytics",
        ],
        image: "/images/services/digital-marketing.jpg",
    },
    {
        number: "005",
        category: "Graphic Design",
        name: "Creative Assets That Stand Out",
        slug: "graphic-design",
        status: "Active",
        icon: CheckCircle2,
        description:
            "Professional visual designs that strengthen your brand identity across digital and print platforms.",
        tags: [
            "Brand Identity",
            "Logo Design",
            "Social Media Graphics",
            "Print Design",
            "Marketing Materials",
        ],
        image: "/images/services/graphic-design.jpg",
    },
    {
        number: "006",
        category: "Consulting",
        name: "Strategic Guidance For Growth",
        slug: "consulting",
        status: "Active",
        icon: Layers,
        description:
            "Technology and business consulting to help companies make smarter decisions, improve processes, and scale efficiently.",
        tags: [
            "Business Strategy",
            "Technology Consulting",
            "Digital Transformation",
            "Process Optimization",
            "Growth Planning",
        ],
        image: "/images/services/consulting.jpg",
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
                            Strategy, Design &
                            <br />
                            <span className="text-black/35">
                                Development Under One Roof.
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
                        We help businesses grow through strategic consulting,
                        website design, web development, mobile applications,
                        digital marketing, and creative branding solutions.
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
                                            Key Services
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
