"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "../../../public/logo/Opygen.png";
import Image from "next/image";
import {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
    TwitterLogo,
} from "@phosphor-icons/react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const resourceLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "404 Page", href: "/404" },
];

const socials = [
    { label: "Facebook", href: "https://facebook.com", icon: FacebookLogo },
    { label: "Twitter", href: "https://twitter.com", icon: TwitterLogo },
    { label: "Instagram", href: "https://instagram.com", icon: InstagramLogo },
    { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinLogo },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#e8e8e8] text-black">
            {/* Top content row */}
            <div className="mx-auto container max-w-8xl border-x border-dashed border-gray-300 !py-0">
                <div className="grid grid-cols-1 gap-10 border-b border-dashed border-gray-300 px-6 py-14 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
                    {/* Newsletter + socials */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="mb-2 text-[15px] font-black text-black">
                                Newsletter
                            </p>
                            <p className="mb-6 max-w-[220px] text-[12.5px] leading-relaxed text-black/50">
                                Stay updated with design trends, new templates,
                                and subscription insights.
                            </p>

                            {/* Email input */}
                            <form className="flex items-center gap-0 overflow-hidden rounded-full border border-black/15 bg-white/70 pr-1">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="flex-1 bg-transparent py-2.5 pl-4 text-[12px] font-semibold text-black outline-none placeholder:text-black/35"
                                />
                                <button
                                    type="submit"
                                    className="flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-[11px] font-black text-white transition hover:bg-zinc-800 cursor-pointer"
                                >
                                    Send
                                    <ArrowUpRight className="size-3" />
                                </button>
                            </form>
                        </div>

                        {/* Social icons */}
                        <div>
                            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                                /Follow us
                            </p>
                            <div className="flex items-center gap-2">
                                {socials.map((s) => {
                                    const Icon = s.icon;

                                    return (
                                        <Link
                                            key={s.label}
                                            href={s.href}
                                            aria-label={s.label}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex size-9 items-center justify-center rounded-full border border-black/12 bg-white/60 text-black/60 transition hover:border-black/30 hover:bg-white hover:text-black"
                                        >
                                            <Icon className="size-4" weight="bold" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                            /Navigation
                        </p>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[15px] font-black text-black/75 transition hover:text-black"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                            /Resources
                        </p>
                        <ul className="space-y-3">
                            {resourceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[15px] font-black text-black/75 transition hover:text-black"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                            /Contact
                        </p>
                        <ul className="space-y-3">
                            {["hello@formix.com", "+359-123-45678"].map(
                                (item) => (
                                    <li key={item}>
                                        <span className="text-[15px] font-black text-black/75">
                                            {item}
                                        </span>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>

                {/* Brand lockup */}
                <div className="overflow-hidden border-b border-dashed border-gray-300 px-6 py-7 sm:px-8 md:py-9">
                    <Link
                        href="/"
                        aria-label="Opygen home"
                        className="group flex min-w-0 items-center justify-center gap-3 sm:gap-5 md:gap-7"
                    >
                        <span className="flex size-14 shrink-0 items-center justify-center p-2.5 transition sm:size-20 sm:p-3 md:size-24 md:rounded-[1.6rem] lg:size-28">
                            <Image
                                src={Logo}
                                alt=""
                                width={96}
                                height={96}
                                className="h-full w-full object-contain"
                            />
                        </span>
                        <span
                            className="select-none whitespace-nowrap text-center font-black leading-none tracking-tight text-black"
                            style={{
                                fontSize: "clamp(4rem, 11vw, 9.5rem)",
                                lineHeight: 0.82,
                            }}
                        >
                            Opygen
                        </span>
                    </Link>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row sm:px-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                        ©{new Date().getFullYear()} Opygen. Designed by Marso
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">
                        Built with Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
