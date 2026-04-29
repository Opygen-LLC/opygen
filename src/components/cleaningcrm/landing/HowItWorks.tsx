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
    <section id="how-it-works" className="bg-foreground py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest justify-center w-full" style={{ color: '#1A7A5E' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-white mx-auto max-w-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
            From signup to your first paid booking — in under 10 minutes.
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            We've removed all the friction so you can focus on growing your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 mt-16 relative">
          {/* Connecting line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-px bg-white/10 hidden md:block"></div>

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
                className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white mx-auto transition-colors duration-300 ${
                  i === 0 ? "border-[#1A7A5E]" : "border-white/20"
                } border`}
                style={i === 0 ? { backgroundColor: '#1A7A5E' } : { backgroundColor: '#0a0a0a' }}
              >
                {step.num}
              </div>
              <h3 className="text-sm font-semibold text-white mt-5 leading-snug">{step.title}</h3>
              <p className="text-xs text-white/50 mt-2 leading-relaxed max-w-[200px]">
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
          className="text-center mt-14"
        >
          <button className="rounded-full px-8 py-4 font-semibold text-sm text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1A7A5E' }}>
            Start free — be live today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
