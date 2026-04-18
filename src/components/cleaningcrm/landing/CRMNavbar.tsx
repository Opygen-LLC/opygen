"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../../ui/button"; 
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu,  X, } from "lucide-react";
import { cn } from "@/lib/utils";

const OpygenLogo = () => (
  <div className="flex items-center gap-2 sm:gap-3 bg-transparent py-1">
    <svg viewBox="0 0 64 64" width="28" height="28" fill="none" className="shrink-0">
      <path d="M32 6 A26 26 0 1 1 53.5 45.5" stroke="#3ECFB2" strokeWidth="5" strokeLinecap="round" fill="none"></path>
      <path d="M32 58 A26 26 0 1 1 10.5 18.5" stroke="#000000" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.55"></path>
      <circle cx="32" cy="32" r="4" fill="#3ECFB2"></circle>
      <circle cx="53.5" cy="45.5" r="2.5" fill="#3ECFB2"></circle>
      <circle cx="10.5" cy="18.5" r="2.5" fill="#ffffff" opacity="0.3"></circle>
    </svg>
    <div className="flex flex-col justify-center text-left">
      <div className="font-sora font-extrabold text-[15px] sm:text-[17px] tracking-tight text-[#0A0A0A] leading-none">
        Opygen <span className="text-[#1A7A5E]">Clean</span>
      </div>
      <div className="text-[8px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-1 leading-none">
        Cleaning CRM
      </div>
    </div>
  </div>
);

export default function CRMNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navWidth = useTransform(scrollY, [0, 100], ["100%", "94%"]);
  const navTop = useTransform(scrollY, [0, 100], ["0px", "16px"]);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Enterprise", href: "#enterprise" },
  ];

  return (
    <>
      <motion.div
        style={{ width: navWidth, top: navTop, left: "50%", x: "-50%" }}
        className={cn(
          "fixed z-100 transition-all duration-500 antialiased font-sora",
          isScrolled || isOpen
            ? "bg-white/90 backdrop-blur-xl border border-black/5 shadow-sm rounded-2xl" 
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center">
          
          {/* 1. LEFT: Logo (Takes up 1/3 space) */}
          <div className="flex-[1] flex justify-start">
            <Link href="/cleaningcrm" className="shrink-0">
              <OpygenLogo />
            </Link>
          </div>

          {/* 2. MIDDLE: Nav Links (Takes up 1/3 space and centers content) */}
          <nav className="hidden lg:flex flex-[1] items-center justify-center gap-2">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild className="text-[13px] font-bold text-slate-600 hover:text-[#1A7A5E] rounded-full px-5 transition-colors">
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
          </nav>

          {/* 3. RIGHT: Auth Actions (Takes up 1/3 space and pushes to end) */}
          <div className="flex-[1] flex items-center justify-end gap-2 sm:gap-4">
            <Button 
              variant="ghost" 
              asChild 
              className="hidden md:inline-flex text-[13px] font-bold text-slate-700 hover:bg-slate-50 rounded-xl px-5"
            >
              <Link href="/cleaningcrm/login">Log In</Link>
            </Button>

            <Button asChild className="h-9 sm:h-10 px-5 sm:px-7 bg-[#1A7A5E] hover:bg-[#145d48] text-white rounded-xl border-none shadow-md shadow-[#1A7A5E]/20 transition-all">
              <Link href="/cleaningcrm/register" className="flex items-center gap-2 font-extrabold uppercase tracking-wider text-[11px] sm:text-[12px]">
                Join Free <ChevronRight className="size-4" />
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 ml-1"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[90] bg-white pt-28 px-8 font-sora lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Menu</p>
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="block text-4xl font-extrabold text-[#0A0A0A] tracking-tighter hover:text-[#1A7A5E]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="h-[1px] w-full bg-slate-100" />
              
              <div className="flex flex-col gap-4">
                <Button asChild variant="outline" className="h-14 rounded-2xl text-lg font-bold border-slate-200">
                  <Link href="/cleaningcrm/login" onClick={() => setIsOpen(false)}>Log In</Link>
                </Button>
                <Button asChild className="h-14 bg-[#1A7A5E] rounded-2xl text-lg font-black uppercase tracking-widest">
                  <Link href="/cleaningcrm/register" onClick={() => setIsOpen(false)}>
                    Start Free Trial
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}