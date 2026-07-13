"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../../../public/logo/Opygen.png";
import BookCallButton from "./BookCallButton";

type NavLink = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description: string;
  }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Cleaning CRM",
        href: "/cleaningcrm",
        description: "Run your cleaning business in one place.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "All Services",
        href: "/services",
        description: "Explore our complete capabilities.",
      },
      {
        label: "Website Development",
        href: "/services/website-development",
        description: "High-converting digital storefronts.",
      },
      {
        label: "App Development",
        href: "/services/app-development",
        description: "Custom tools built around your workflow.",
      },
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Campaigns that turn attention into growth.",
      },
      {
        label: "Automation & CRM",
        href: "/services/automation-crm",
        description: "Systems that save time and keep work moving.",
      },
      {
        label: "SaaS Development",
        href: "/services/saas-development",
        description: "From MVP to a scalable software product.",
      },
    ],
  },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        if (!link.href.includes("#")) return null;
        return document.querySelector(link.href.substring(link.href.indexOf("#")));
      })
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleSection?.target.id) return;
        const activeHref = navLinks.find((link) => link.href.endsWith(`#${visibleSection.target.id}`))?.href;
        if (activeHref) setActive(activeHref);
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 36;
      setIsScrolled(scrolled);
      if (!scrolled) setActive("/");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-5">
        <div
          className={cn(
            "pointer-events-auto flex h-[4.5rem] w-full items-center border transition-[max-width,margin,background-color,border-color,box-shadow] duration-300",
            isScrolled
              ? "mt-3 max-w-[1180px] rounded-2xl border-black/10 bg-[#FFFDF9]/90 px-4 shadow-[0_14px_38px_rgba(17,17,17,0.10)] backdrop-blur-xl sm:px-5"
              : "max-w-[1400px] border-transparent bg-transparent px-2 sm:px-3",
          )}
        >
          <div className="mx-auto flex w-full items-center justify-between">
            <Link href="/" className="group flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/90 shadow-[0_6px_15px_rgba(17,17,17,0.06)]">
                <Image src={Logo} alt="Opygen logo" width={23} height={23} className="object-contain" priority />
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.04em] text-[#111111]">Opygen</span>
            </Link>

            <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-xl border border-black/10 bg-white/65 p-1 shadow-[0_6px_20px_rgba(17,17,17,0.04)] backdrop-blur-sm md:flex">
              {navLinks.map((link) => {
                const isActive =
                  active === link.href ||
                  link.children?.some((child) => active === child.href);
                const isOpen = openDesktopMenu === link.label;
                const isServicesMenu = link.label === "Services";

                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setOpenDesktopMenu(link.label)}
                      onMouseLeave={() => setOpenDesktopMenu(null)}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDesktopMenu(isOpen ? null : link.label)}
                        onFocus={() => setOpenDesktopMenu(link.label)}
                        aria-expanded={isOpen}
                        aria-haspopup="menu"
                        className={cn(
                          "flex items-center gap-1 rounded-lg px-3.5 py-2 text-[12px] font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24202]",
                          isActive ? "bg-[#111111] text-white" : "text-[#626262] hover:bg-black/[0.04] hover:text-[#111111]",
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")}
                          aria-hidden="true"
                        />
                      </button>

                      {isOpen && (
                        <div
                          className={cn(
                            "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3",
                            isServicesMenu ? "w-[30rem]" : "w-72",
                          )}
                        >
                          <div
                            role="menu"
                            className="overflow-hidden rounded-2xl border border-black/10 bg-[#FFFDF9] shadow-[0_24px_60px_rgba(17,17,17,0.18)]"
                          >
                            <div className="border-b border-black/10 bg-white/75 px-4 py-3.5">
                              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F24202]">
                                {link.label}
                              </p>
                              <p className="mt-1 text-[12px] font-medium text-[#626262]">
                                {isServicesMenu
                                  ? "A focused team for every stage of growth."
                                  : "Purpose-built software for service teams."}
                              </p>
                            </div>

                            <div className={cn("p-2", isServicesMenu && "grid auto-rows-fr grid-cols-2 gap-1")}>
                              {link.children.map((child, index) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  role="menuitem"
                                  onClick={() => setOpenDesktopMenu(null)}
                                  className={cn(
                                    "group relative h-full rounded-xl p-3 text-left transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24202]",
                                    isServicesMenu && index === 0
                                      ? "col-span-2 mb-1 bg-[#111111] text-white shadow-[0_8px_20px_rgba(17,17,17,0.16)]"
                                      : "",
                                  )}
                                >
                                  <span className="flex items-start justify-between gap-3">
                                    <span className="min-w-0">
                                      <span
                                        className={cn(
                                          "block text-[12px] font-bold",
                                          isServicesMenu && index === 0 ? "text-white" : "text-[#111111]",
                                        )}
                                      >
                                        {child.label}
                                      </span>
                                      <span
                                        className={cn(
                                          "mt-1 block text-[10px] leading-relaxed",
                                          isServicesMenu && index === 0 ? "text-white/65" : "text-[#777777]",
                                        )}
                                      >
                                        {child.description}
                                      </span>
                                    </span>
                                    <ArrowUpRight
                                      className={cn(
                                        "mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                                        isServicesMenu && index === 0 ? "text-[#F24202]" : "text-[#A0A0A0]",
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3.5 py-2 text-[12px] font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24202]",
                      isActive ? "bg-[#111111] text-white" : "text-[#626262] hover:bg-black/[0.04] hover:text-[#111111]",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <BookCallButton className="!hidden !rounded-lg !px-4 !py-2.5 !text-[12px] !shadow-[0_8px_18px_rgba(17,17,17,0.13)] hover:!bg-[#F24202] md:!flex">
              Book a Call
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </BookCallButton>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-black/10 bg-white/75 text-[#111111] transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24202] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={cn("h-px w-4 bg-current transition-transform duration-200", menuOpen && "translate-y-[7px] rotate-45")} />
              <span className={cn("h-px w-4 bg-current transition-opacity duration-200", menuOpen && "opacity-0")} />
              <span className={cn("h-px w-4 bg-current transition-transform duration-200", menuOpen && "-translate-y-[7px] -rotate-45")} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F7F7F4] px-5 pb-6 pt-24 md:hidden">
          <div className="relative flex h-full flex-col border border-black/10 bg-white p-5 shadow-[0_24px_60px_rgba(17,17,17,0.10)]">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-[#111111] transition-colors hover:bg-[#F7F7F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24202]"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <nav aria-label="Mobile navigation" className="mt-auto flex flex-col border-y border-black/10 py-4">
              {navLinks.map((link) => {
                const isActive =
                  active === link.href ||
                  link.children?.some((child) => active === child.href);
                const isOpen = openMobileMenu === link.label;

                if (link.children) {
                  return (
                    <div key={link.label} className="border-b border-black/10 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenMobileMenu(isOpen ? null : link.label)}
                        aria-expanded={isOpen}
                        aria-controls={`${link.label.toLowerCase()}-mobile-menu`}
                        className={cn(
                          "flex w-full items-center justify-between px-1 py-4 text-left text-xl font-semibold tracking-[-0.04em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24202]",
                          isActive ? "text-[#F24202]" : "text-[#111111]",
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
                          aria-hidden="true"
                        />
                      </button>

                      {isOpen && (
                        <div id={`${link.label.toLowerCase()}-mobile-menu`} className="space-y-1 pb-3 pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setMenuOpen(false);
                                setOpenMobileMenu(null);
                              }}
                              className="flex items-start justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-base font-semibold text-[#626262] transition-colors hover:bg-black/[0.04] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24202]"
                            >
                              <span>
                                <span className="block">{child.label}</span>
                                <span className="mt-0.5 block text-xs font-medium text-[#8A8A8A]">
                                  {child.description}
                                </span>
                              </span>
                              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between border-b border-black/10 px-1 py-4 text-xl font-semibold tracking-[-0.04em] last:border-b-0",
                      isActive ? "text-[#F24202]" : "text-[#111111]",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                );
              })}
            </nav>

            <BookCallButton onClick={() => setMenuOpen(false)} className="!mt-6 !w-full !rounded-lg !py-3.5 !text-sm hover:!bg-[#F24202]">
              Book a Call
            </BookCallButton>
          </div>
        </div>
      )}
    </>
  );
}
