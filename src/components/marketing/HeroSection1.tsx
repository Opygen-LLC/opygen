"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const capabilities = ["Brand Strategy", "Digital Products", "Web Development", "UI/UX Design", "CRM Automation"];

const rotatingTexts = [
  "next big move",
  "digital product",
  "brand identity",
  "SaaS platform",
];

export default function HeroSection1() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="agency-hero-title"
      className="relative isolate overflow-hidden bg-[#F7F7F4] px-5 py-20 text-[#111111] sm:px-8 sm:py-24 lg:px-12 lg:py-32 font-space-grotesk"
    >
      {/* Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />

      {/* Ambient Gradient Glow Orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
        className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#E5FF9B]/70 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
        className="absolute -right-24 top-0 h-[30rem] w-[30rem] rounded-full bg-[#FFD6C7]/70 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-16">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Studio Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B4B4B] shadow-[0_10px_30px_rgba(17,17,17,0.05)] backdrop-blur-sm"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D9FF5B] text-black">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
            </span>
            <span>Independent Digital Studio</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#F24202] animate-pulse ml-1" />
          </motion.div>

          {/* Headline with Smooth Rotating Text */}
          <motion.h1
            id="agency-hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-4xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.4rem]"
          >
            Built to make your{" "}
            <span className="relative inline-block text-[#F24202]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="inline-block whitespace-normal sm:whitespace-nowrap"
                >
                  {rotatingTexts[textIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-[#FFD6C7] sm:h-3.5 pointer-events-none" />
            </span>{" "}
            impossible to ignore.
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base font-medium leading-7 text-[#555555] sm:text-base sm:leading-7"
          >
            Opygen partners with ambitious teams to shape distinct brands, build
            high-converting digital products, and engineer websites that transform attention into measurable growth.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#111111] px-6.5 py-3.5 text-sm font-bold text-white shadow-[0_18px_32px_rgba(17,17,17,0.18)] transition duration-300 hover:bg-[#F24202] hover:shadow-[0_20px_36px_rgba(242,66,2,0.24)]"
              >
                Start a project
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-black/15 bg-white/80 px-6.5 py-3.5 text-sm font-bold text-[#222222] shadow-2xs transition duration-300 hover:border-black/30 hover:bg-white"
              >
                Explore our work
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Team & Value Props Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden" aria-hidden="true">
                <div className="relative h-8 w-8 rounded-full border-2 border-[#F7F7F4] overflow-hidden shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Senior Engineering Lead"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative h-8 w-8 rounded-full border-2 border-[#F7F7F4] overflow-hidden shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Creative Lead"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative h-8 w-8 rounded-full border-2 border-[#F7F7F4] overflow-hidden shadow-xs">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                    alt="Tech Lead"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <p className="text-xs font-semibold leading-5 text-[#555555]">
                Senior engineering & creative leads.
              </p>
            </div>
            <p className="flex items-center gap-2 text-xs font-bold text-[#222222]">
              <Check className="h-4 w-4 text-[#F24202]" aria-hidden="true" />
              Strategy-led, never templated
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column / Interactive Hero Showcase Deck */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:justify-self-end"
        >
          {/* Floating Decorative Orbs */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
            className="absolute -right-4 -top-5 h-20 w-20 rounded-[1.5rem] bg-[#D9FF5B] sm:-right-8 sm:-top-8 sm:h-24 sm:w-24 pointer-events-none shadow-md"
          />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#151515] p-3 shadow-[0_30px_70px_rgba(17,17,17,0.2)] sm:rounded-[2.2rem] sm:p-3.5">
            <div className="relative min-h-[380px] overflow-hidden rounded-[1.5rem] bg-[#1E1E1E] p-5 text-white sm:min-h-[440px] sm:rounded-[1.75rem] sm:p-6 flex flex-col justify-between">
              {/* Internal Glows */}
              <div
                aria-hidden="true"
                className="absolute -right-24 top-12 h-60 w-60 rounded-full bg-[#F24202]/80 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-16 h-60 w-60 rounded-full bg-[#D9FF5B]/70 blur-3xl pointer-events-none"
              />

              <div className="relative flex items-center justify-between border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
                <span className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-[#D9FF5B]" />
                  Opygen / Studio
                </span>
                <span className="flex items-center gap-2 text-[#D9FF5B]">
                  <span className="h-2 w-2 rounded-full bg-[#D9FF5B] animate-pulse" />
                  Available Q3/Q4 2026
                </span>
              </div>

              <div className="relative my-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Creative Direction + Technology</p>
                <p className="mt-3 max-w-xs text-3xl font-bold leading-[0.95] tracking-tight sm:text-4xl">
                  More signal.<br />
                  Less noise.
                </p>
              </div>

              <div className="relative grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <motion.div 
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="rounded-xl border border-white/15 bg-white/[0.09] p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.14]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">Digital Presence</p>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9FF5B] text-black shadow-xs">
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8 flex items-end justify-between gap-3 sm:mt-10">
                    <p className="text-xl font-bold tracking-tight">Designed<br />to convert.</p>
                    <div className="flex h-11 w-11 items-end gap-1 rounded-xl bg-[#F24202] p-1.5 shadow-sm" aria-hidden="true">
                      <span className="h-[35%] flex-1 rounded-full bg-white/70" />
                      <span className="h-[70%] flex-1 rounded-full bg-white/80" />
                      <span className="h-full flex-1 rounded-full bg-white" />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="flex min-h-36 flex-col justify-between rounded-xl bg-[#D9FF5B] p-3.5 text-[#111111] transition-all duration-300 shadow-md"
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/70">Growth Velocity</span>
                  <div>
                    <p className="text-3xl font-extrabold tracking-tight">+320%</p>
                    <p className="mt-1 text-[11px] font-semibold leading-4 text-black/75">Ideas given shape & speed.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="absolute -bottom-5 -left-2 rounded-lg border border-black/10 bg-white/95 backdrop-blur-sm px-3.5 py-2.5 shadow-[0_14px_30px_rgba(17,17,17,0.12)] sm:-left-6 sm:px-4"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#F24202]" />
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#858585]">Our Philosophy</p>
            </div>
            <p className="mt-0.5 text-xs font-bold text-[#222222]">Clear thinking. Bold execution.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Capability Ticker */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative mx-auto mt-16 flex max-w-[1400px] flex-wrap gap-x-6 gap-y-3 border-t border-black/10 pt-6 sm:mt-20"
      >
        {capabilities.map((capability, index) => (
          <span key={capability} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#555555]">
            <span className="text-[#F24202]">0{index + 1}</span>
            {capability}
          </span>
        ))}
      </motion.div>
    </section>
  );
}


