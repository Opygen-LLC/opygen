"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  PlayCircle,
  Star,
  Flag,
  Check,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Calendar,
  Users,
} from "lucide-react";

const bullets = [
  "Build your branded booking page in minutes — share the link anywhere.",
  "Auto-dispatch jobs to staff — they see it instantly on their phones.",
  "Invoices generated and emailed automatically on every booking.",
  "Track revenue, net profit, and expenses in real time.",
];

const stats = [
  {
    icon: Smartphone,
    value: "160k+",
    label: "Downloads",
    sub: "iOS & Android app",
    highlight: false,
  },
  {
    icon: PlayCircle,
    value: "100k+",
    label: "Active Users",
    sub: "99.99% Uptime",
    highlight: true,
  },
  {
    icon: Star,
    value: "99%",
    label: "Client Satisfaction",
    sub: "4.9/5 Average rating",
    highlight: false,
  },
  {
    icon: Flag,
    value: "104",
    label: "Counties",
    sub: "Global operations",
    highlight: false,
  },
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="bg-[#FAFAFA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ══════════════════════════════
            TOP — Left text + Right visual card
        ══════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1A7A5E]"></span>
              <span className="text-xs font-semibold text-[#1A7A5E] tracking-wide">
                Feature Showcase
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              The CRM Built for{" "}
              <span className="text-[#1A7A5E]">Cleaning Businesses</span>
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 mt-4 text-base leading-relaxed max-w-md">
              Opygen Clean gives cleaning agency owners a complete operating
              system — from online bookings to automated invoicing to real-time
              staff management.
            </p>

            {/* Bullet checkmarks */}
            <ul className="mt-7 space-y-3.5">
              {bullets.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-lg bg-emerald-100/80 text-[#1A7A5E] flex items-center justify-center mt-0.5 border border-emerald-200/60">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-gray-700 leading-relaxed pt-0.5">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — Visual Card with clean rounded-xl */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
              <div
                className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#0b3d2e] to-[#1A7A5E] p-6 text-white"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src="/feature-image.jpg"
                  alt="Cleaning agency team using Opygen Clean CRM"
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                    const fb = img.nextElementSibling as HTMLElement;
                    if (fb) fb.style.display = "flex";
                  }}
                />

                {/* Clean Fallback Graphic */}
                <div
                  className="absolute inset-0 flex flex-col justify-between p-6 text-white"
                  style={{ display: "none" }}
                >
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                        <Sparkles size={14} className="text-emerald-300" />
                      </div>
                      <span className="text-xs font-semibold">Opygen Clean CRM</span>
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-white/15 border border-white/20">
                      Live Dashboard
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 my-auto">
                    <div className="bg-white/10 border border-white/15 rounded-lg p-3">
                      <p className="text-[11px] text-emerald-200 flex items-center gap-1.5 mb-1">
                        <Calendar size={12} /> Today's Jobs
                      </p>
                      <p className="text-lg font-bold">24 Cleans</p>
                    </div>

                    <div className="bg-white/10 border border-white/15 rounded-lg p-3">
                      <p className="text-[11px] text-emerald-200 flex items-center gap-1.5 mb-1">
                        <Users size={12} /> Active Staff
                      </p>
                      <p className="text-lg font-bold">12 Staff</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-emerald-200/80">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={12} /> Stripe Payments
                    </span>
                    <span className="font-mono text-[10px]">v2.4</span>
                  </div>
                </div>

                {/* Clean Floating Badge Top Right */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-md border border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1A7A5E] text-white flex items-center justify-center shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium leading-none">Weekly Revenue</p>
                    <p className="text-xs font-bold text-gray-900 mt-0.5">$4,280.00</p>
                    <p className="text-[10px] font-semibold text-[#1A7A5E] mt-0.5">+18% ↑</p>
                  </div>
                </div>

                {/* Clean Floating Badge Bottom Left */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-md border border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#1A7A5E] flex items-center justify-center shrink-0 border border-emerald-200">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium leading-none">New Booking</p>
                    <p className="text-xs font-bold text-gray-900 mt-0.5">Alice B. — Deep Clean</p>
                    <p className="text-[10px] font-semibold text-[#1A7A5E] mt-0.5">Paid $150 via Stripe ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════
            BOTTOM — Clean 4 Stat Cards (rounded-lg)
        ══════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className={`rounded-lg p-5 flex flex-col justify-between transition-all cursor-default ${
                  stat.highlight
                    ? "bg-[#1A7A5E] text-white shadow-md border border-emerald-700"
                    : "bg-white text-gray-900 border border-gray-200 shadow-sm hover:border-[#1A7A5E]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      stat.highlight
                        ? "bg-white/15 text-white border border-white/20"
                        : "bg-emerald-50 text-[#1A7A5E] border border-emerald-100"
                    }`}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {stat.highlight && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-white/20 text-white">
                      Featured
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-3xl font-extrabold tracking-tight leading-none mb-1">
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      stat.highlight ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {stat.label}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      stat.highlight ? "text-emerald-100" : "text-gray-500"
                    }`}
                  >
                    {stat.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}