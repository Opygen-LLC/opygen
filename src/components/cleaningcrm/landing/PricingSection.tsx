"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, Shield, Crown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "STARTER",
    price: "19",
    description: "SOLO PROFESSIONAL OPS",
    features: ["3 Staff Accounts", "Manual Dispatch", "Stripe Integration", "Email Alerts"],
    highlight: false,
  },
  {
    name: "BUSINESS",
    price: "49",
    description: "SCALABLE AGENCY ENGINE",
    features: ["Unlimited Staff", "Kanban Job Board", "SMS Notifications", "Page Builder", "Automated Payouts"],
    highlight: true,
  },
  {
    name: "ENTERPRISE",
    price: "149",
    description: "MARKET TITAN INFRASTRUCTURE",
    features: ["White-label Portal", "Custom Domain", "API Access", "24/7 Support", "Multi-location"],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-white font-sora antialiased">
      <div className="container mx-auto px-6">
        
        {/* Sharp Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-slate-100 pb-12">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A7A5E] mb-4">Phase 1 / Pricing Protocol</p>
            <h2 className="text-5xl md:text-7xl font-black text-[#0A0A0A] tracking-tighter uppercase leading-[0.85]">
              Simple Tiers. <br />
              <span className="text-slate-300 font-light italic">No Friction.</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Risk Assessment</p>
            <p className="text-xl font-black text-[#1A7A5E] uppercase tracking-tighter">7-Day Free Trial Active</p>
          </div>
        </div>

        {/* Sharp Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col p-10 border-r border-b border-slate-100 transition-colors duration-300 relative ${
                plan.highlight ? "bg-slate-50/30" : "bg-white"
              }`}
            >
              {/* Highlight Bar */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 w-full h-1 bg-[#1A7A5E]" />
              )}

              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase">
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="text-[9px] font-black text-[#1A7A5E] uppercase tracking-widest bg-[#E8F5F0] px-2 py-0.5">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-sm font-bold text-[#0A0A0A] tracking-tight">{plan.description}</p>
              </div>

              {/* Price Block */}
              <div className="mb-12">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-black text-slate-400">$</span>
                  <span className="text-6xl font-black text-[#0A0A0A] tracking-tighter">{plan.price}</span>
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-widest">/mo</span>
                </div>
                <div className="inline-block mt-4 px-3 py-1 bg-[#0A0A0A] text-white text-[9px] font-black uppercase tracking-[0.2em]">
                  7 Days Free
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-5 mb-16 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="size-1 bg-[#1A7A5E]" /> {/* Square Bullet */}
                    <span className="text-[11px] font-black text-slate-600 uppercase tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Sharp CTA Button */}
              <Button 
                asChild
                className={`h-16 w-full rounded-none font-black uppercase tracking-[0.2em] transition-all border-none text-xs shadow-none ${
                  plan.highlight 
                  ? "bg-[#1A7A5E] hover:bg-[#145d48] text-white" 
                  : "bg-[#0A0A0A] hover:bg-slate-800 text-white"
                }`}
              >
                <Link href="/register" className="flex items-center justify-center gap-3">
                  Start Trial
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Sharp Quote Section */}
        <div className="mt-20 border border-slate-100 p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-[#1A7A5E] transition-colors duration-500">
          <div>
            <h4 className="text-xl font-black text-[#0A0A0A] uppercase tracking-tighter mb-1">
              Custom Quote & Estimates
            </h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Scaling beyond 100+ squads? Let's build your enterprise bridge.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="h-14 px-10 rounded-none border-[#0A0A0A] text-[#0A0A0A] font-black uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-white transition-all text-xs"
          >
            Get Estimation
          </Button>
        </div>

      </div>
    </section>
  );
}