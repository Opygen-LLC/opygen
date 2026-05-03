"use client";

import { motion } from "framer-motion";

const agencies = [
  {
    name: "SparkClean",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#1A7A5E" />
        <path d="M9 4l1.5 3.5H14l-2.8 2 1 3.5L9 11l-3.2 2 1-3.5L4 7.5h3.5L9 4z" fill="white" />
      </svg>
    ),
  },
  {
    name: "BrightSquad",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#0ea5e9" />
        <rect x="5" y="5" width="8" height="8" rx="2" fill="white" fillOpacity="0.85" />
      </svg>
    ),
  },
  {
    name: "MaidPro",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#f59e0b" />
        <path d="M9 5v8M5 9h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "CleanEdge",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#7c3aed" />
        <path d="M6 9l2.5 2.5L13 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "SwiftMaids",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#22c55e" />
        <path d="M5 9l2.5 2.5L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "PristineGroup",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#ec4899" />
        <circle cx="9" cy="9" r="3.5" fill="white" fillOpacity="0.85" />
      </svg>
    ),
  },
];

const stats = [
  { value: "2,400+", label: "Cleaning agencies" },
  { value: "98%", label: "Client satisfaction" },
  { value: "10 min", label: "Average setup time" },
];

export default function SocialProofBar() {
  return (
    <section className="bg-background py-16 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-3xl md:text-4xl font-bold tracking-tight text-foreground"
         
        >
          Trusted By More Than{" "}
          <span style={{ color: "#1A7A5E" }}>2,400+</span>{" "}
          Cleaning Businesses
        </motion.h2>

        {/* ── Agency pill badges ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
        >
          {agencies.map((agency) => (
            <motion.div
              key={agency.name}
              variants={{
                hidden: { opacity: 0, scale: 0.92, y: 8 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary border border-border hover:border-[#1A7A5E]/30 hover:bg-[#f0f7f4] transition-all duration-200 cursor-default"
            >
              {/* Icon */}
              <span className="flex-shrink-0">{agency.icon}</span>
              {/* Name */}
              <span className="text-sm font-semibold text-foreground tracking-tight">
                {agency.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl mt-12 pt-10 border-t border-border grid grid-cols-3 divide-x divide-border"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-4">
              <span
                className="text-2xl md:text-3xl font-bold text-foreground tracking-tight"
               
              >
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-1 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}