"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "../../../public/logo/Opygen.png"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("#home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const sections = navLinks
            .map((link) => {
                if (link.href.includes('#')) {
                    const id = link.href.substring(link.href.indexOf('#'));
                    try { return document.querySelector(id); } catch (e) { return null; }
                }
                return null;
            })
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio,
                    )[0];

                if (visibleSection?.target?.id) {
                    const activeHref = navLinks.find(link => link.href.endsWith(`#${visibleSection.target.id}`))?.href;
                    if (activeHref) setActive(activeHref);
                }
            },
            {
                threshold: [0.2, 0.4, 0.6, 0.8],
                rootMargin: "-20% 0px -40% 0px",
            },
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // Handle scroll for floating navbar effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <div
                    className={cn(
                        "pointer-events-auto flex w-full items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
                        isScrolled
                            ? "mt-4 h-16 max-w-5xl rounded-full bg-white/85 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-200/60 px-6 lg:px-8 w-[92%]"
                            : "mt-0 h-16 max-w-full rounded-none bg-white border-b border-transparent px-6 lg:px-8 xl:px-12 w-full"
                    )}
                >
                    <div
                        className={cn(
                            "mx-auto flex w-full items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                            isScrolled ? "max-w-full" : "max-w-[1400px]"
                        )}
                    >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Image
                            src={Logo}
                            alt="Opygen logo"
                            width={28}
                            height={28}
                            className="object-contain"
                        />
                        <span className="text-[15px] font-bold tracking-tight text-black">
                            Opygen
                        </span>
                    </Link>

                    {/* Desktop Nav — centered */}
                    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors duration-200",
                                    active === link.href
                                        ? "text-black font-semibold"
                                        : "text-gray-500 hover:text-black",
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <Link
                        href="#contact"
                        className="hidden md:flex items-center gap-1.5 rounded-full bg-black px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-zinc-800 active:scale-95 shrink-0"
                    >
                        Book a Call
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </Link>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={
                                menuOpen
                                    ? { rotate: 45, y: 7 }
                                    : { rotate: 0, y: 0 }
                            }
                            className="block h-[2px] w-5 bg-black origin-center transition-all"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block h-[2px] w-5 bg-black"
                        />
                        <motion.span
                            animate={
                                menuOpen
                                    ? { rotate: -45, y: -7 }
                                    : { rotate: 0, y: 0 }
                            }
                            className="block h-[2px] w-5 bg-black origin-center transition-all"
                        />
                    </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 z-40 bg-white flex flex-col pt-16"
                    >
                        {/* Close button top-right */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-4 right-6 text-black text-xl font-light"
                            aria-label="Close menu"
                        >
                            ✕
                        </button>

                        <nav className="flex flex-col items-center justify-center flex-1 gap-1 pb-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={cn(
                                        "w-full text-center px-6 py-3 text-[15px] transition-colors",
                                        active === link.href
                                            ? "text-black font-semibold"
                                            : "text-gray-500 hover:text-black",
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="mt-4 w-full px-6">
                                <Link
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex w-full items-center justify-center rounded-full bg-black py-3.5 text-[14px] font-semibold text-white transition hover:bg-zinc-800"
                                >
                                    Book a Call
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
