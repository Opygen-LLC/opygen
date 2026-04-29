"use client";

import Link from "next/link";

const links = {
  Products: [
    { label: "Cleaning CRM", href: "/cleaningcrm" },
    { label: "Maintenance CRM", href: "/#" },
    { label: "Landscaping CRM", href: "/#" },
  ],
  Company: [
    { label: "Mission", href: "/#mission" },
    { label: "Team", href: "/#team" },
    { label: "Contact", href: "/#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Security", href: "/security" },
    { label: "Privacy policy", href: "/privacypolicy" },
    { label: "Terms of service", href: "/termsofservice" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Identity: Spans 5 columns on desktop */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative size-8 group-hover:rotate-12 transition-transform duration-500">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 6 A26 26 0 1 1 53.5 45.5"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="square"
                  />
                  <path
                    d="M32 58 A26 26 0 1 1 10.5 18.5"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="square"
                  />
                  <rect x="28" y="28" width="8" height="8" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-tighter text-white">
                  Opygen
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6B6B] font-bold">
                  Base System
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-xs">
              The high-performance operations engine for modern service
              businesses. Engineered for growth, stability, and absolute
              consistency.
            </p>
          </div>

          {/* Link Columns: Spans 7 columns on desktop */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([group, items]) => (
              <div key={group} className="space-y-5">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6B6B6B]">
                  {group}
                </p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[13px] text-[#ADADAD] hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-[11px] text-[#6B6B6B] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Opygen Operational Systems
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[9px] uppercase tracking-tighter text-[#6B6B6B] font-black">
                Core v1.0.4-LTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}