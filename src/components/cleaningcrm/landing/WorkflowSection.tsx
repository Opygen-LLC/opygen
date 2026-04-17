"use client";

import { motion } from "framer-motion";

const STEPS = [
  { 
    id: "01", 
    label: "CONFIGURATION", 
    title: "Deploy Your Terminal", 
    desc: "Set your service parameters, pricing logic, and branding. Your custom booking engine goes live in minutes." 
  },
  { 
    id: "02", 
    label: "ACQUISITION", 
    title: "Capture Every Lead", 
    desc: "Customers book and pay through your secure Stripe-integrated portal. Zero manual entry, zero friction." 
  },
  { 
    id: "03", 
    label: "EXECUTION", 
    title: "Auto-Dispatch Squads", 
    desc: "The system assigns the best squad based on location. Staff receive job checklists via the Titan Portal instantly." 
  }
];

export default function WorkflowSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100 font-sora antialiased">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Static Sidebar Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A7A5E] mb-6">The Protocol</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A] tracking-tighter uppercase leading-none">
              How You <br /> <span className="text-slate-300 font-light italic">Dominate.</span>
            </h2>
          </div>

          {/* Scrolling Steps */}
          <div className="lg:col-span-8 space-y-px bg-slate-100 border border-slate-100">
            {STEPS.map((step) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white p-10 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start group"
              >
                <span className="text-6xl font-black text-slate-100 group-hover:text-[#1A7A5E]/20 transition-colors duration-500 tracking-tighter">
                  {step.id}
                </span>
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-[#1A7A5E] tracking-[0.3em] uppercase">{step.label}</p>
                  <h3 className="text-2xl font-black text-[#0A0A0A] uppercase tracking-tighter">{step.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 leading-[1.8] max-w-xl font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}