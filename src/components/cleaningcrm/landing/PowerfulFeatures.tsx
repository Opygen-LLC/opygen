"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, ReceiptText, BarChart, ChevronRight } from "lucide-react";

const cards = [
  {
    icon: Smartphone,
    title: "Staff Always In Sync",
    sub: "No calls, no group chats, no confusion. Staff see their assigned jobs the moment they're created.",
  },
  {
    icon: Globe,
    title: "Online Booking & Payments",
    sub: "Give clients a branded page to book and pay 24/7. Every booking lands in your dashboard automatically.",
    highlight: true,
  },
  {
    icon: ReceiptText,
    title: "Automated Invoicing",
    sub: "Invoice created and emailed the moment a booking is confirmed. PDF sent instantly. Chase nothing.",
  },
  {
    icon: BarChart,
    title: "Real-time Financials",
    sub: "Revenue, net profit, and expenses tracked live. See your numbers every time you log in.",
  },
];

export default function PowerfulFeatures() {
  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Header — center aligned ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-14"
        >
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="7" fill="#1A7A5E" />
              <path
                d="M4 7l2 2 4-4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-semibold text-gray-800 tracking-wide">
              Powerful Features
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-2xl leading-[1.1]">
            Everything Your Cleaning Business Needs
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 mt-5 max-w-lg text-base leading-relaxed">
            Opygen Clean replaces WhatsApp, spreadsheets, and paper rosters with
            one connected system.
          </p>
        </motion.div>

        {/* ── Card grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-[24px] p-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full cursor-default"
              >
                {/* ── Inner Box ── */}
                <div
                  className={`relative flex-1 rounded-[18px] p-7 overflow-hidden ${
                    card.highlight
                      ? "bg-gradient-to-br from-[#124f3a] to-[#1A7A5E] text-white shadow-inner"
                      : "bg-gradient-to-br from-[#f8faf9] to-[#edf2f0] text-gray-900 border border-gray-50/50"
                  }`}
                >
                  {/* Background effects */}
                  {card.highlight ? (
                    <div
                      className="absolute top-0 right-0 w-[250px] h-[250px] pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at top right, rgba(255,255,255,0.25) 0%, transparent 60%)",
                      }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-40"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: "24px 24px",
                      }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-8 relative z-10 ${
                      card.highlight
                        ? "bg-white/20 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white"
                        : "bg-[#1A7A5E] shadow-[0_4px_12px_rgba(26,122,94,0.25)] text-white"
                    }`}
                  >
                    <Icon strokeWidth={2.5} size={22} />
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10">
                    <h3 className="text-[19px] font-bold leading-snug mb-3">
                      {card.title}
                    </h3>
                    <p
                      className={`text-[14px] leading-relaxed ${
                        card.highlight ? "text-white/85" : "text-gray-500"
                      }`}
                    >
                      {card.sub}
                    </p>
                  </div>
                </div>

                {/* ── Bottom Pill Button ── */}
                <div className="pt-3 pb-1 px-1">
                  <div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full pr-3 pl-1.5 py-1.5 shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <div className="w-[26px] h-[26px] rounded-full bg-[#1A7A5E] text-white flex items-center justify-center shrink-0">
                      <ChevronRight size={14} strokeWidth={3} />
                    </div>
                    <span className="text-[13px] font-semibold text-gray-700 tracking-wide">
                      Learn more
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}