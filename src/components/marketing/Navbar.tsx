"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[120] transition-all duration-300 border-b",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-[#E8E8E8] py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className=" max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* 1. Logo (Left) */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group shrink-0 relative z-[130]"
            onClick={() => setMenuOpen(false)}
          >
            <OpygenMark />
            <div className="flex flex-col ">
              <span className="text-2xl font-bold tracking-tighter  text-[#0A0A0A]">
                Opygen
              </span>
              <span className="text-[10px] uppercase  tracking-[0.2em] text-[#6B6B6B] font-bold">
                Base System
              </span>
            </div>
          </Link>

          {/* 2. Desktop Navigation (Center) */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 3. Actions (Right) */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
               <Button variant="ghost" asChild className="text-[11px] font-bold uppercase tracking-widest">
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button asChild size="sm" className="bg-[#0A0A0A] text-white hover:bg-[#1A1A1A] rounded-none px-6">
                <Link href="/get-started" className="flex items-center gap-2">
                  Get started
                  <ChevronRight className="size-3" />
                </Link>
              </Button>
            </div>

            {/* Mobile Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative z-[130] text-[#0A0A0A] hover:bg-transparent"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-[110] md:hidden transition-all duration-500 ease-in-out",
          menuOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-10">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-4xl font-bold tracking-tighter text-[#0A0A0A] transition-all duration-500",
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <div className="h-px bg-[#E8E8E8] w-full" />
            <div className="grid grid-cols-1 gap-3">
              <Button asChild size="lg" className="w-full bg-[#0A0A0A] text-white py-8 rounded-none text-xs uppercase tracking-[0.2em] font-bold">
                <Link href="/get-started">Get started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full py-8 border-[#E8E8E8] rounded-none text-xs uppercase tracking-[0.2em] font-bold">
                <Link href="/signin">Sign in</Link>
              </Button>
            </div>
            <p className="text-center text-[10px] uppercase tracking-widest text-[#6B6B6B] font-bold pt-4">
              Operational Engine v1.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function OpygenMark() {
  return (
    <div className="relative size-8 group-hover:rotate-12 transition-transform duration-500">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 6 A26 26 0 1 1 53.5 45.5" stroke="currentColor" strokeWidth="6" strokeLinecap="square" className="text-[#0A0A0A]" />
        <path d="M32 58 A26 26 0 1 1 10.5 18.5" stroke="currentColor" strokeWidth="6" strokeLinecap="square" className="text-[#0A0A0A]" />
        <rect x="28" y="28" width="8" height="8" fill="currentColor" className="text-[#0A0A0A]" />
      </svg>
    </div>
  );
}