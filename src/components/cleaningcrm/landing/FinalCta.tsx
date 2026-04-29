"use client";

import { motion } from "framer-motion";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28" style={{ backgroundColor: '#1A7A5E' }}>
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      ></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3 blur-2xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-white/60 uppercase tracking-widest text-xs font-semibold mb-4">
            Get Started
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
            Ready to run your cleaning agency on autopilot?
          </h2>
          <p className="text-white/70 text-xl mt-5 max-w-2xl mx-auto leading-relaxed">
            Join 2,400+ cleaning teams already using Opygen.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <button className="bg-white rounded-full px-8 py-4 text-sm font-semibold hover:bg-white/90 transition-colors" style={{ color: '#1A7A5E' }}>
              Start 7-Day Free Trial
            </button>
            <button className="border border-white/30 rounded-full px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Watch 2-min Demo
            </button>
          </div>
          
          <p className="text-sm text-white/50 mt-6">
            No credit card · Cancel anytime · Live in 10 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
