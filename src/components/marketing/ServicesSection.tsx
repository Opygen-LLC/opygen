"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
    ArrowRight,
    BriefcaseBusiness,
    Code,
    Layout,
    Megaphone,
    Palette,
    Smartphone,
} from "lucide-react";
import { Button } from "../ui/button";

const services = [
    {
        name: "UI/UX Design",
        icon: Palette,
        accent: "#7C3AED",
        description:
            "Interface systems, user flows, and polished prototypes built for clarity and conversion.",
        categories: ["Product design", "Design systems", "Prototyping"],
    },
    {
        name: "Web Design",
        icon: Layout,
        accent: "#3A7A1A",
        description:
            "Sharp, responsive website design with strong visual hierarchy and brand consistency.",
        categories: ["Landing pages", "Corporate sites", "Responsive design"],
    },
    {
        name: "Web Development",
        icon: Code,
        accent: "#1A7A5E",
        description:
            "Fast, stable web builds for businesses that need clean architecture and easy growth.",
        categories: ["Custom", "WordPress", "Shopify"],
    },
    {
        name: "App Development",
        icon: Smartphone,
        accent: "#0E7490",
        description:
            "Product-focused mobile and web apps shaped around real workflows, launches, and scale.",
        categories: ["iOS and Android", "Web apps", "MVP builds"],
    },
    {
        name: "Digital Marketing",
        icon: Megaphone,
        accent: "#C45E10",
        description:
            "Campaign systems, content direction, and channel execution for measurable demand.",
        categories: [
            "Social media management",
            "Content planning",
            "Growth campaigns",
        ],
    },
    {
        name: "Business Consultation",
        icon: BriefcaseBusiness,
        accent: "#9333EA",
        description:
            "Strategic guidance for operations, digital systems, positioning, and growth planning.",
        categories: [
            "Strategy sessions",
            "Process planning",
            "Growth roadmaps",
        ],
    },
];

export default function ServicesSection() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 18;
            const yPos = (clientY / window.innerHeight - 0.5) * 18;

            gsap.to(".services-grid", {
                x: xPos,
                y: yPos,
                duration: 2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            id="services"
            className="relative py-32 bg-[#FAFAFA] overflow-hidden"
        >
            <div
                className="services-grid absolute inset-0 pointer-events-none opacity-[0.35]"
                style={{
                    backgroundImage: `linear-gradient(#E8E8E8 1px, transparent 1px), linear-gradient(90deg, #E8E8E8 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                    width: "110%",
                    height: "110%",
                    top: "-5%",
                    left: "-5%",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20"
                >
                    <div className="max-w-2xl">
                        <span className="label-pill mb-8">Service Stack</span>
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E8E8E8] mb-6">
                            <Target className="size-3 text-[#0A0A0A]" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6B6B] font-black">
                                Service Stack
                            </span>
                        </div> */}
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#0A0A0A] leading-[0.9]">
                            BUILD <br />
                            <span className="text-[#ADADAD]">SERVICES.</span>
                        </h2>
                    </div>
                    <p className="max-w-75 text-xs font-bold uppercase tracking-widest text-[#6B6B6B] leading-loose border-l-2 border-[#0A0A0A] pl-6">
                        Design, development, and growth support for brands
                        moving from idea to launch.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[#E8E8E8] border border-[#E8E8E8]">
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="group relative bg-white p-8 md:p-10 flex flex-col min-h-125 overflow-hidden"
                            >
                                <span className="absolute top-8 right-8 text-5xl font-black text-[#F5F5F5] group-hover:text-[#0A0A0A]/5 transition-colors duration-500">
                                    0{i + 1}
                                </span>

                                <div className="relative z-10 flex flex-col h-full">
                                    <motion.div
                                        whileHover={{ rotate: -10, scale: 1.1 }}
                                        className="size-14 flex items-center justify-center mb-10 border shadow-sm"
                                        style={{
                                            borderColor: `${service.accent}30`,
                                            backgroundColor: `${service.accent}05`,
                                        }}
                                    >
                                        <Icon
                                            className="size-6"
                                            style={{ color: service.accent }}
                                        />
                                    </motion.div>

                                    <div className="mb-auto">
                                        <h3 className="text-xl font-bold text-[#0A0A0A] tracking-tight mb-4">
                                            {service.name}
                                        </h3>
                                        <p className="text-[#6B6B6B] text-sm leading-relaxed mb-10">
                                            {service.description}
                                        </p>

                                        <div
                                            className="space-y-3 mb-12 border-l-2 pl-6"
                                            style={{
                                                borderColor: service.accent,
                                            }}
                                        >
                                            {service.categories.map(
                                                (category) => (
                                                    <motion.div
                                                        key={category}
                                                        whileHover={{ x: 5 }}
                                                        className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#ADADAD] hover:text-[#0A0A0A] cursor-default transition-colors"
                                                    >
                                                        {category}
                                                    </motion.div>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full h-14 border-[#E8E8E8] hover:border-[#0A0A0A] rounded-none font-bold uppercase tracking-widest text-[10px]"
                                    >
                                        <Link
                                            href="#contact"
                                            className="flex items-center justify-center gap-2"
                                        >
                                            Discuss Service
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
