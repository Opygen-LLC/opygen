"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Logo from "../../../public/logo/Opygen.png";

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
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/opygen/",
    icon: LinkedinLogo,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/opygentech/",
    icon: InstagramLogo,
  },
  { label: "Twitter", href: "https://x.com/opygentech", icon: TwitterLogo },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#171717] px-5 pb-6 pt-16 text-white sm:px-8 sm:pb-8 sm:pt-20 lg:px-12 lg:pt-24">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#F24202]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-44 left-0 h-80 w-80 rounded-full bg-[#D9FF5B]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-12 lg:gap-8 lg:pb-16">
          <div className="lg:col-span-5 lg:pr-12">
            <Link
              href="#home"
              className="group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9FF5B]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 shadow-[0_10px_22px_rgba(0,0,0,0.16)]">
                <Image
                  src={Logo}
                  alt="Opygen Logo"
                  width={27}
                  height={27}
                  className="object-contain"
                />
              </span>
              <span className="text-2xl font-semibold tracking-[-0.05em] text-white">
                Opygen
              </span>
            </Link>

            <p className="mt-7 max-w-sm text-[15px] leading-7 text-white/60">
              <strong className="font-semibold text-white">
                Digital Oxygen for Business
              </strong>
              <br />
              We build future-ready websites, apps, and SaaS platforms that
              empower your business to grow, scale, and lead.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:col-start-7 lg:gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                Navigation
              </p>
              <ul className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-[15px] font-medium text-white/65 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9FF5B]"
                    >
                      <span className="h-px w-0 bg-[#D9FF5B] transition-all duration-200 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                Contact Us
              </p>
              <a
                href="mailto:opygen.info@gmail.com"
                className="mt-6 inline-flex items-center gap-2 border-b border-white/20 pb-1 text-[15px] font-medium text-white/75 transition-colors duration-200 hover:border-[#D9FF5B] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9FF5B]"
              >
                opygen.info@gmail.com
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                Follow Us
              </p>
              <div className="mt-5 flex items-center gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-white/75 transition-colors duration-200 hover:border-[#D9FF5B] hover:bg-[#D9FF5B] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9FF5B]"
                    >
                      <Icon className="h-[18px] w-[18px]" weight="fill" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-b border-white/15 py-12 sm:py-14 lg:py-16">
          <p className="select-none text-center text-[clamp(4.2rem,14.6vw,13.5rem)] font-semibold leading-[0.73] tracking-[-0.095em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)] sm:[-webkit-text-stroke:2px_rgba(255,255,255,0.45)]">
            OPYGEN
          </p>
          <div
            aria-hidden="true"
            className="absolute inset-x-[13%] bottom-[19%] h-px bg-gradient-to-r from-transparent via-[#D9FF5B]/60 to-transparent"
          />
        </div>

        <div className="flex flex-col gap-5 pt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Â© OPYGEN 2026. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {resourceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9FF5B]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
