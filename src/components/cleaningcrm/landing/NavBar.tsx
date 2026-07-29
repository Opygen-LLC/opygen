"use client";

import { useState, useEffect } from "react";
import { OpygenLogo } from "../../shared/Logo";
import Link from "next/link";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home", href: "#" },
    { id: "features", label: "Features", href: "#features" },
    { id: "pricing", label: "Pricing", href: "#pricing" },
    { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      {/* ── Fixed nav — transparent at top, glassmorphic white when scrolled ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/70 py-2.5 px-4 md:px-8"
            : "pt-3 px-3 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-8 h-14 max-w-7xl mx-auto">
          {/* ── Logo ── */}
          <Link href={"/"}>
            <OpygenLogo textClass={scrolled ? "text-gray-900" : "text-white"} />
          </Link>

          {/* ── Center pill nav ── */}
          <div
            className={`hidden md:flex items-center gap-0.5 rounded-full px-1.5 py-1.5 transition-all duration-300 ${
              scrolled
                ? "bg-gray-100/90 border border-gray-200/80 shadow-inner"
                : "bg-white shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActive(link.id)}
                className={`
                  px-[18px] py-[6px] rounded-full text-[13.5px] transition-all duration-150 ease-out inline-block tracking-[-0.01em]
                  ${
                    active === link.id
                      ? "font-semibold text-white bg-[#1A7A5E] shadow-[0_1px_6px_rgba(0,0,0,0.13)]"
                      : "font-medium text-[#475467] bg-transparent hover:text-[#101828] hover:bg-black/5"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Right buttons ── */}
          <div
            className={`hidden md:flex items-center gap-1 rounded-full p-1.5 transition-all duration-300 ${
              scrolled
                ? "bg-gray-100/90 border border-gray-200/80 shadow-inner"
                : "bg-white shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
            }`}
          >
            <button className="text-[13.5px] font-semibold text-[#475467] bg-transparent hover:text-[#101828] hover:bg-black/5 rounded-full px-5 py-2 transition-all duration-150 tracking-[-0.01em]">
              Log in
            </button>
            <button className="text-[13.5px] font-semibold text-white bg-[#1A7A5E] hover:opacity-90 rounded-full px-[22px] py-2 transition-opacity shadow-[0_2px_8px_rgba(26,122,94,0.3)] tracking-[-0.01em]">
              Sign Up
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className={`md:hidden flex items-center justify-center w-[38px] h-[38px] rounded-full transition-colors ${
              scrolled
                ? "bg-gray-100 border border-gray-200 text-gray-900"
                : "bg-white/10 border border-white/20 text-white"
            }`}
            onClick={() => setMobileOpen(true)}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path
                d="M0 1h16M0 6h16M0 11h16"
                stroke={scrolled ? "#111827" : "white"}
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#0d4a38]">
          <div className="flex items-center justify-between px-6 h-[68px]">
            <span className="font-bold text-[17px] text-white">
              Opygen Clean
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center cursor-pointer"
            >
              ×
            </button>
          </div>

          <div className="px-4 py-2 flex-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActive(link.id);
                  setMobileOpen(false);
                }}
                className={`
                  block px-4 py-3.5 rounded-xl text-base font-medium mb-0.5
                  ${
                    active === link.id
                      ? "text-white bg-white/10"
                      : "text-white/70 bg-transparent hover:bg-white/5"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="px-5 pb-11 flex flex-col gap-3">
            <button className="w-full p-3.5 rounded-full text-[15px] font-semibold text-white bg-white/10 border border-white/25 cursor-pointer hover:bg-white/20 transition-colors">
              Log In
            </button>
            <button className="w-full p-3.5 rounded-full text-[15px] font-semibold text-[#1A7A5E] bg-white border-none cursor-pointer hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </>
  );
}