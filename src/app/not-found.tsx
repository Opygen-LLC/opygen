"use client";

import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Home,
  Compass,
  Briefcase,
  Layers,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { marketingButton } from "@/lib/marketing-button";

const quickLinks = [
  {
    title: "Our Services",
    description: "Explore our capabilities in web, app, AI & CRM development.",
    href: "/services",
    icon: Layers,
    accent: "#F24202",
  },
  {
    title: "Selected Projects",
    description: "Check out case studies and measurable business outcomes.",
    href: "/#projects",
    icon: Briefcase,
    accent: "#1A7A5E",
  },
  {
    title: "Start a Conversation",
    description: "Ready to build? Get in touch with our engineering team.",
    href: "/#contact",
    icon: MessageSquare,
    accent: "#D9FF5B",
  },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#F7F7F4] font-space-grotesk text-[#111111] selection:bg-[#FFD6C7]">
        {/* Background Grid Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        />

        {/* Ambient Light Orbs */}
        <div
          aria-hidden="true"
          className="absolute -left-28 top-28 h-80 w-80 rounded-full bg-[#D9FF5B]/60 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 top-12 h-[30rem] w-[30rem] rounded-full bg-[#FFD6C7]/70 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#F24202]/10 blur-3xl pointer-events-none"
        />

        <section className="relative isolate px-5 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32 lg:px-12">
          <div className="mx-auto max-w-[1400px]">
            {/* Hero 404 Section */}
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F24202] shadow-[0_8px_24px_rgba(17,17,17,0.04)] backdrop-blur-sm"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Error 404 • Page Not Found
              </motion.div>

              {/* Massive 404 Numerals */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="relative mt-6 select-none"
              >
                <span className="block text-[7.5rem] font-extrabold leading-none tracking-[-0.08em] text-[#111111] sm:text-[11rem] lg:text-[14rem]">
                  404
                </span>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center text-[7.5rem] font-extrabold leading-none tracking-[-0.08em] text-[#F24202]/15 blur-lg sm:text-[11rem] lg:text-[14rem]"
                >
                  404
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="-mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#111111] sm:text-5xl lg:text-6xl"
              >
                Lost in digital space? <br className="hidden sm:block" />
                Let&apos;s get you back on track.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#626262] sm:text-lg sm:leading-8"
              >
                The page you are looking for might have been removed, renamed, or is temporarily unavailable.
              </motion.p>

              {/* Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
              >
                <Link
                  href="/"
                  className={marketingButton("group px-7 py-3.5 text-base")}
                >
                  <Home className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                  Back to Home
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3.5 text-base font-semibold text-[#111111] shadow-[0_10px_24px_rgba(17,17,17,0.05)] transition-all hover:bg-black/5 hover:border-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]"
                >
                  <Compass className="h-4 w-4 text-[#F24202] transition-transform duration-200 group-hover:rotate-45" />
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Quick Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-20 border-t border-black/10 pt-16 sm:mt-24"
            >
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F24202]">
                    Popular Destinations
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-3xl">
                    Where would you like to go?
                  </h2>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {quickLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-[0_12px_32px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(17,17,17,0.08)] hover:border-black/20"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <span
                            className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md"
                            style={{ backgroundColor: item.accent === "#D9FF5B" ? "#111111" : item.accent }}
                          >
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <ArrowUpRight className="h-5 w-5 text-black/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F24202]" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-[#111111]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#626262]">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#F24202]">
                        Visit Page
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
