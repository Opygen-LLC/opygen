"use client";

import Link from "next/link";
import Logo from "../../../public/logo/Opygen.png";
import Image from "next/image";
import {
    InstagramLogo,
    LinkedinLogo,
    TwitterLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
];

const resourceLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
];

const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/opygen/", icon: LinkedinLogo },
    { label: "Instagram", href: "https://www.instagram.com/opygentech/", icon: InstagramLogo },
    { label: "Twitter", href: "https://x.com/opygentech", icon: TwitterLogo },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#F9FAFB] text-black pt-24 font-space-grotesk">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-20">
                    
                    {/* Brand */}
                    <div className="lg:col-span-5 flex flex-col gap-6 pr-0 lg:pr-12">
                        <Link href="#home" className="flex items-center gap-4 group w-fit">
                           <div className="bg-white p-2 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 border border-gray-200 shadow-sm">
                               <Image src={Logo} alt="Opygen Logo" width={40} height={40} className="object-contain" />
                           </div>
                           <span className="text-3xl font-black tracking-tight text-black transition-colors group-hover:text-gray-600">Opygen</span>
                        </Link>
                        <p className="text-[15px] leading-relaxed text-gray-500 max-w-sm mt-2">
                            <strong className="text-black">Digital Oxygen for Business</strong><br/>
                            We build future-ready websites, apps, and SaaS platforms that empower your business to grow, scale, and lead.
                        </p>
                    </div>

                    <div className="lg:col-span-1 hidden lg:block"></div>

                    {/* Navigation */}
                    <div className="lg:col-span-3">
                        <p className="mb-8 text-[13px] font-bold uppercase tracking-widest text-gray-400">
                            Navigation
                        </p>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[16px] font-medium text-gray-600 transition-all hover:text-black hover:translate-x-2 inline-flex items-center gap-3 group"
                                    >
                                        <span className="w-0 h-[2px] bg-black transition-all group-hover:w-4"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div className="lg:col-span-3">
                        <p className="mb-8 text-[13px] font-bold uppercase tracking-widest text-gray-400">
                            Contact Us
                        </p>
                        <div className="space-y-4 mb-12">
                            <a href="mailto:opygen.info@gmail.com" className="inline-block text-[16px] font-medium text-gray-600 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1">
                                opygen.info@gmail.com
                            </a>
                        </div>

                        <p className="mb-6 text-[13px] font-bold uppercase tracking-widest text-gray-400">
                            Follow Us
                        </p>
                        <div className="flex items-center gap-3">
                            {socials.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex size-11 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 transition-all hover:bg-black hover:border-black hover:text-white hover:scale-110 shadow-sm"
                                    >
                                        <Icon className="size-5" weight="fill" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Big Text & Bottom bar */}
                <div className="pt-16 pb-8 flex flex-col items-center">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1,
                                }
                            }
                        }}
                        className="w-full flex justify-center overflow-hidden mb-16 pb-8"
                    >
                        {"OPYGEN".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { y: "100%", opacity: 0, rotateZ: 10 },
                                    visible: { 
                                        y: "0%", 
                                        opacity: 1,
                                        rotateZ: 0,
                                        transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 }
                                    }
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "200% 50%"]
                                }}
                                transition={{
                                    backgroundPosition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }}
                                whileHover={{ 
                                    y: -15, 
                                    scale: 1.05, 
                                    rotateZ: Math.random() > 0.5 ? 5 : -5,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                className="inline-block font-black tracking-tighter select-none cursor-pointer"
                                style={{
                                    fontSize: "clamp(4.5rem, 15vw, 18rem)",
                                    lineHeight: 0.8,
                                    backgroundImage: "linear-gradient(90deg, #111111 0%, #1D745C 25%, #10b981 50%, #1D745C 75%, #111111 100%)",
                                    backgroundSize: "200% auto",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent",
                                    WebkitTextStroke: "2px rgba(17, 17, 17, 0.9)", // This ensures the letter shapes are always clearly visible
                                    paddingRight: index === 5 ? "0" : "0.5vw", // Slight kerning adjustment
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>

                    <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 pt-8">
                        <p className="text-[13px] font-bold tracking-widest text-gray-400 uppercase">
                            © OPYGEN 2026. ALL RIGHTS RESERVED.
                        </p>
                        <div className="flex items-center gap-8">
                            {resourceLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-[13px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-wider"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
