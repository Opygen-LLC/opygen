"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Sign Up", desc: "Create your account in seconds. No credit card required to start." },
  { num: "2", title: "Set Services & Prices", desc: "Add your cleaning services, flat rates, or hourly pricing rules." },
  { num: "3", title: "Publish Booking Page", desc: "Get your custom booking link and add it to your website or social media." },
  { num: "4", title: "Clients Book & Pay", desc: "Clients select slots and pay upfront via Stripe." },
  { num: "5", title: "Assign & Clean", desc: "Assign jobs to staff. They see it in their portal and go do the work." },
];

export default function HowItWorks() {
  return (
    <div style={{ padding: "24px 12px", backgroundColor: "white" }}>
      <section 
        id="how-it-works" 
        className="relative overflow-hidden rounded-[20px] py-16 lg:py-20"
        style={{ background: 'linear-gradient(138deg, #0b3d2e 0%, #124f3a 22%, #1A7A5E 55%, #1e9268 80%, #16a566 100%)' }}
      >
        {/* Subtle grid overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
          }}
        />

        {/* Glowing orb center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px]"
          style={{ background: 'rgba(255,255,255,0.1)' }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                How It Works
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-white mx-auto max-w-3xl">
              From signup to your first paid booking — in under 10 minutes.
            </h2>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              We've removed all the friction so you can focus on growing your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 mt-12 relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-[10%] right-[10%] h-px bg-white/20 hidden md:block"></div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mx-auto transition-colors duration-300 shadow-xl ${
                    i === 0 ? "bg-white text-[#1A7A5E]" : "bg-white/10 text-white border border-white/20 backdrop-blur-md"
                  }`}
                >
                  {step.num}
                </div>
                <h3 className="text-base font-semibold text-white mt-6 leading-snug">{step.title}</h3>
                <p className="text-sm text-white/60 mt-3 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="rounded-full px-8 py-4 font-semibold text-sm transition-transform hover:scale-105 shadow-2xl" 
              style={{ backgroundColor: 'white', color: '#1A7A5E' }}>
              Start free — be live today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
