"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function FinalCta() {
  return (
    <div style={{ padding: "0 12px 24px", backgroundColor: "white" }}>
      <section className="relative overflow-hidden rounded-[20px] w-full"
        style={{ background: 'linear-gradient(138deg, #0b3d2e 0%, #124f3a 22%, #1A7A5E 55%, #1e9268 80%, #16a566 100%)' }}>

        {/* Subtle square tile decorations - bottom left */}
        <div className="absolute bottom-6 left-6 opacity-30">
          <div className="grid grid-cols-2 gap-1.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-md bg-white/30"></div>
            ))}
          </div>
        </div>

        {/* Subtle square tile decorations - bottom right */}
        <div className="absolute bottom-6 right-6 opacity-20">
          <div className="grid grid-cols-2 gap-1.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-md bg-white/30"></div>
            ))}
          </div>
        </div>

        {/* Glowing orb top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-48 rounded-full blur-3xl"
          style={{ background: 'rgba(255,255,255,0.15)' }}></div>

        {/* Content */}
        <div className="relative z-10 px-8 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
              Ready to Take Control of Your Cleaning Business?
            </h2>
            <p className="text-white/70 text-sm sm:text-base mt-5 max-w-md mx-auto leading-relaxed">
              Join thousands of cleaning businesses who are booking smarter, dispatching better, and growing faster. Start your journey today.
            </p>

            {/* Email input row */}
            <div className="mt-8 flex items-center bg-white rounded-full px-4 py-2 max-w-md mx-auto shadow-lg gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <Mail size={16} className="text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none min-w-0"
              />
              <button className="shrink-0 bg-[#0d4a38] hover:bg-[#12684f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}