"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, MoreHorizontal, Users, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { OpygenLogo } from "../../shared/Logo";

const chartData = [
  { day: "M", revenue: 2100 },
  { day: "T", revenue: 2800 },
  { day: "W", revenue: 2400 },
  { day: "T", revenue: 3600 },
  { day: "F", revenue: 3200 },
  { day: "S", revenue: 4800 },
  { day: "S", revenue: 4200 },
];

// ✅ Properly typed cubic bezier
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CRMHero() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 bg-white font-sora antialiased overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAF9]/80 hidden lg:block -skew-x-6 translate-x-32" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            
            <motion.div {...fadeUp} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F0] border border-[#1A7A5E]/10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A7A5E]">
                  7-Day Free Trial
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0A0A0A] leading-[0.95] tracking-tighter">
                Scale Your <br />
                <span className="text-[#1A7A5E]">Empire.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 max-w-lg font-medium leading-relaxed">
                The high-performance field operating system for cleaning agencies that refuse to settle.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <Button asChild size="lg" className="h-16 px-10 w-full sm:w-auto bg-[#0A0A0A] hover:bg-slate-800 text-white rounded-full shadow-2xl group border-none">
                <Link href="/register" className="flex items-center justify-center gap-3">
                  <span className="text-sm font-bold uppercase tracking-widest">Start 7-Day Trial</span>
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 w-full max-w-md mx-auto lg:mx-0">
              {["No credit card", "Cancel anytime", "Instant setup", "24/7 Support"].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <Check className="size-4 text-[#1A7A5E]" />
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
            className="lg:col-span-7 relative w-full"
          >
            <div className="bg-white border border-slate-100 shadow-sm rounded-[40px] overflow-hidden w-full max-w-160 mx-auto">
              
              <div className="border-b border-slate-50 bg-white p-6 flex items-center justify-between">
                <OpygenLogo />
                <MoreHorizontal className="size-4 text-slate-300" />
              </div>

              <div className="p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* CHART */}
                <div className="md:col-span-7 space-y-6">
                  <div className="bg-slate-50/50 p-4 rounded-3xl border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth</p>
                      <p className="text-xs font-bold text-[#1A7A5E]">+22.4%</p>
                    </div>

                    <div className="h-35 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#1A7A5E" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#1A7A5E" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <Area type="monotone" dataKey="revenue" stroke="#1A7A5E" strokeWidth={3} fill="url(#colorRev)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* METRICS */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                      <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Revenue</p>
                      <p className="text-xl font-black text-[#0A0A0A]">$14.2k</p>
                    </div>
                    <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                      <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Squads</p>
                      <p className="text-xl font-black text-[#0A0A0A]">32</p>
                    </div>
                  </div>
                </div>

                {/* SQUADS */}
                <div className="md:col-span-5 space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Squad Status</p>

                  {[
                    { name: "Alpha Team", loc: "Downtown", color: "bg-[#1A7A5E]" },
                    { name: "Coastal Squad", loc: "Northside", color: "bg-yellow-400" },
                    { name: "West Crew", loc: "Suburbs", color: "bg-slate-200" }
                  ].map((squad, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-50 shadow-sm rounded-2xl">
                      <div className={`size-2.5 rounded-full ${squad.color}`} />
                      <div>
                        <p className="text-[11px] font-bold text-slate-800 leading-none">{squad.name}</p>
                        <div className="flex items-center gap-1 mt-1 text-slate-400">
                          <MapPin className="size-2" />
                          <p className="text-[9px] font-medium">{squad.loc}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button variant="ghost" className="w-full h-10 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#1A7A5E]">
                    View All Squads
                  </Button>
                </div>

              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -top-6 -right-4 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-3">
              <div className="size-10 rounded-xl bg-[#E8F5F0] flex items-center justify-center">
                <Users className="size-5 text-[#1A7A5E]" />
              </div>
              <div>
                <p className="text-[11px] font-black text-slate-800 leading-none">2.4k+ Teams</p>
                <p className="text-[9px] font-bold text-[#1A7A5E] mt-1">Onboarded this week</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}