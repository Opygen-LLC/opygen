"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  PlayCircle,
  Star,
  Flag,
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
    highlight: false,
  },
  {
    icon: PlayCircle,
    value: "100k+",
    label: "Active Users",
    highlight: true,
  },
  {
    icon: Star,
    value: "99%",
    label: "Client Satisfaction",
    highlight: false,
  },
  {
    icon: Flag,
    value: "104",
    label: "Counties",
    highlight: false,
  },
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ══════════════════════════════
            TOP — Left text + Right image
        ══════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-6">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" fill="#7e56ff" />
                <path
                  d="M4 7l2 2 4-4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-semibold text-foreground tracking-wide">
                Powerful Features
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              The CRM Built for
              <br />
              Cleaning Businesses
            </h2>

            {/* Subtext */}
            <p className="text-muted-foreground mt-5 text-base leading-relaxed max-w-md">
              Opygen Clean gives cleaning agency owners a complete operating
              system — from online bookings to automated invoicing to real-time
              staff management.
            </p>

            {/* Bullet checkmarks */}
            <ul className="mt-8 space-y-3.5">
              {bullets.map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#7e56ff" }}
                  >
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path
                        d="M1 4l3 3 6-6"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.70, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ borderRadius: "20px", aspectRatio: "4/3" }}
            >
              <img
                src="/feature-image.jpg"
                alt="Cleaning agency team using Opygen"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = "none";
                  const fb = img.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = "flex";
                }}
              />

              <div
                className="absolute inset-0 items-center justify-center flex-col gap-4"
                style={{
                  display: "none",
                  backgroundColor: "#f6f2ff",
                  borderRadius: "20px",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "#7e56ff" }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="10" r="5" fill="white" fillOpacity="0.85" />
                    <path
                      d="M4 24c0-5.5 4.5-10 10-10s10 4.5 10 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      fillOpacity="0"
                    />
                  </svg>
                </div>
                <div className="text-center px-8">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#7e56ff" }}
                  >
                    Add your team photo here
                  </p>
                  <code
                    className="text-xs text-muted-foreground bg-white px-3 py-1 rounded-lg"
                    style={{ fontFamily: "monospace" }}
                  >
                    public/feature-image.jpg
                  </code>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-5 left-5 bg-white rounded-xl px-4 py-2.5 shadow-xl border border-border z-10"
              >
                <p className="text-[10px] text-muted-foreground mb-0.5">New booking</p>
                <p className="text-sm font-bold text-foreground">
                  Alice B. — Deep Clean
                </p>
                <p className="text-[10px]" style={{ color: "#7e56ff" }}>
                  Paid · $150 via Stripe ✓
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-5 right-5 bg-white rounded-xl px-4 py-2.5 shadow-xl border border-border z-10"
              >
                <p className="text-[10px] text-muted-foreground mb-0.5">This week</p>
                <p className="text-sm font-bold text-foreground">
                  $4,280 revenue
                </p>
                <p className="text-[10px]" style={{ color: "#7e56ff" }}>
                  +18% vs last week ↑
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════
            BOTTOM — 4 stat cards
        ══════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-14"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative flex flex-col items-center justify-center text-center rounded-[24px] py-10 px-6 overflow-hidden cursor-default transition-shadow ${
                  stat.highlight
                    ? "bg-gradient-to-br from-[#805af5] to-[#6035f0] shadow-[0_8px_30px_rgba(126,86,255,0.3)] text-white"
                    : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 text-gray-900 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                }`}
              >
                {!stat.highlight && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-none opacity-[0.025] text-black">
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                      <rect x="15" y="15" width="34" height="34" rx="8" fill="currentColor" />
                      <rect x="58" y="15" width="34" height="34" rx="8" fill="currentColor" />
                      <rect x="101" y="15" width="34" height="34" rx="8" fill="currentColor" />
                      <rect x="15" y="58" width="34" height="34" rx="8" fill="currentColor" />
                      <rect x="101" y="58" width="34" height="34" rx="8" fill="currentColor" />
                      <rect x="15" y="101" width="34" height="34" rx="8" fill="currentColor" />
                      <rect x="58" y="101" width="34" height="34" rx="8" fill="currentColor" />
                      <rect x="101" y="101" width="34" height="34" rx="8" fill="currentColor" />
                    </svg>
                  </div>
                )}

                {stat.highlight && (
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                      transform: "translate(30%, -30%)",
                    }}
                  />
                )}

                <div
                  className={`w-14 h-14 rounded-[16px] flex items-center justify-center mb-6 relative z-10 ${
                    stat.highlight
                      ? "bg-white text-[#7e56ff] shadow-sm"
                      : "bg-[#7e56ff] text-white shadow-md"
                  }`}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>

                <p className="text-[28px] font-extrabold tracking-tight leading-none mb-2 relative z-10">
                  {stat.value}
                </p>

                <p
                  className={`text-[13px] font-medium relative z-10 ${
                    stat.highlight ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}