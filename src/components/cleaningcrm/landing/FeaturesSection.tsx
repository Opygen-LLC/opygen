"use client";

import { motion } from "framer-motion";
import { Calendar, Map, CreditCard, Users, ArrowUpRight } from "lucide-react";

const features = [
  { 
    title: "Autonomous Dispatch", 
    desc: "Eliminate manual routing. Our engine calculates optimal transit paths to maximize crew efficiency and reduce fuel overhead instantly.", 
    icon: Map 
  },
  { 
    title: "Recurring Logic", 
    desc: "Industrial-grade scheduling. Set complex patterns—weekly, fortnightly, or custom offsets—and let the system handle the consistency.", 
    icon: Calendar 
  },
  { 
    title: "Unified Payouts", 
    desc: "Bridge the gap between job completion and cash flow. Automated invoicing via SMS and Email ensures your capital is never locked up.", 
    icon: CreditCard 
  },
  { 
    title: "Titan Portals", 
    desc: "Empower your field agents with high-fidelity checklists and live job updates. Total transparency from the front door to the final sweep.", 
    icon: Users 
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white font-sora antialiased overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Block */}
        <div className="mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-12 bg-[#1A7A5E]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A7A5E]">Capabilities</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-[#0A0A0A] tracking-tighter uppercase leading-[0.85]">
            Engineered for <br />
            <span className="text-slate-300 font-light italic">Scale.</span>
          </h2>
        </div>

        {/* Feature Grid: Sharp-Edge Border Logic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-10 flex flex-col items-start border-r border-b border-slate-100 transition-colors duration-500 hover:bg-slate-50/50 relative"
            >
              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#1A7A5E] transition-all duration-500 group-hover:w-full" />
              
              {/* Icon & Index */}
              <div className="w-full flex justify-between items-start mb-12">
                <f.icon className="size-6 text-[#0A0A0A] stroke-[1.5]" />
                <span className="text-[10px] font-black text-slate-200 tracking-widest">0{i + 1}</span>
              </div>

              {/* Text Content */}
              <div className="space-y-4 flex-grow">
                <h3 className="font-black uppercase tracking-widest text-sm text-[#0A0A0A] flex items-center gap-2">
                  {f.title}
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-all text-[#1A7A5E]" />
                </h3>
                <p className="text-[13px] text-[#6B6B6B] leading-[1.8] font-medium max-w-[240px]">
                  {f.desc}
                </p>
              </div>

              {/* Bottom Decorative Element */}
              <div className="mt-12 size-1 bg-slate-100 group-hover:bg-[#1A7A5E] transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}