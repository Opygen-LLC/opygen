"use client";

import { motion } from "framer-motion";

const niches = [
  { emoji: "🏠", label: "Residential Cleaning", desc: "For solo cleaners and small teams doing regular home cleans." },
  { emoji: "🏢", label: "Commercial Cleaning", desc: "Manage contracts, offices, and larger recurring jobs." },
  { emoji: "✨", label: "Deep Cleaning", desc: "Specialized one-off jobs with higher margins." },
  { emoji: "📦", label: "Move In/Out", desc: "Coordinate with realtors and manage tight deadlines." },
  { emoji: "🧽", label: "Post-Construction", desc: "Heavy-duty jobs requiring specific crew assignments." },
  { emoji: "🛏️", label: "Airbnb Turnovers", desc: "Sync with calendars for automated scheduling." },
  { emoji: "🧼", label: "Window Cleaning", desc: "Route optimization for field-heavy service days." },
  { emoji: "🧹", label: "Maid Services", desc: "Manage large fleets of dispatched staff easily." }
];

export default function WhoItsFor() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest justify-center w-full" style={{ color: '#1A7A5E' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
            Who We Serve
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
            Built for every type of cleaning business.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {niches.map((niche, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-secondary border border-border rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 hover:border-[#1A7A5E] hover:shadow-md"
            >
              <div className="text-3xl mb-3">{niche.emoji}</div>
              <h3 className="text-sm font-semibold text-foreground">{niche.label}</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {niche.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
