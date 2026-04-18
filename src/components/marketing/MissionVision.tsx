"use client";

import { Target, TrendingUp, Layers, Zap, ShieldCheck, Cpu } from "lucide-react";

export default function MissionVision() {
  return (
    <section id="mission" className="section bg-[var(--surface)] relative overflow-hidden">
      {/* Structural Accent: Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-[var(--border)] hidden lg:block opacity-50" />

      <div className="container py-20 max-w-7xl mx-auto relative z-10">
        {/* Header Logic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="label-pill mb-6">Internal Architecture</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--carbon)] leading-[0.9]">
              Built for <span className="text-[var(--mid-gray)]">Consistency.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-[var(--mid-gray)] leading-relaxed border-l border-[var(--border)] pl-6">
            We don&apos;t build tools. We build the infrastructure that lets service companies scale without breaking.
          </p>
        </div>

        {/* Primary Mission/Vision Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[var(--border)] border border-[var(--border)] overflow-hidden shadow-sm">
          
          {/* Mission: The White Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 flex flex-col justify-center">
            <div className="size-12 bg-[var(--carbon)] flex items-center justify-center mb-8">
              <Target className="text-white size-6" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--mid-gray)] mb-4">
              Our Core Mission
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--carbon)] mb-6 leading-tight tracking-tight">
              Standardizing the <br /> 
              Service Economy.
            </h3>
            <p className="text-lg text-[var(--mid-gray)] leading-relaxed max-w-lg">
              Most service businesses fail to scale because their operations are manual and messy. 
              We provide the <strong>clean, structured engine</strong> required to turn daily chaos into predictable growth.
            </p>
          </div>

          {/* Vision: The Carbon Card */}
          <div className="lg:col-span-5 bg-[var(--carbon)] p-8 md:p-16 flex flex-col justify-center text-white">
            <div className="size-12 bg-white/10 backdrop-blur-md flex items-center justify-center mb-8">
              <TrendingUp className="text-white size-6" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-4">
              Long-term Vision
            </p>
            <h3 className="text-3xl font-bold mb-6 tracking-tight">
              The OS for <br /> Every Vertical.
            </h3>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              Starting with Cleaning CRM, we are building the universal operating system for maintenance, landscaping, and home services. One engine, infinite applications.
            </p>
          </div>
        </div>

        {/* Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-8">
          {[
            {
              icon: <Layers className="size-5" />,
              title: "Zero Noise",
              desc: "No unnecessary features. Only the high-impact tools that move the needle.",
            },
            {
              icon: <Zap className="size-5" />,
              title: "Practical First",
              desc: "Engineered for real-world service owners, not Silicon Valley tech teams.",
            },
            {
              icon: <ShieldCheck className="size-5" />,
              title: "System Stability",
              desc: "Reliable scheduling and payment architecture you can stake your reputation on.",
            },
            {
              icon: <Cpu className="size-5" />,
              title: "Operational Flow",
              desc: "We solve the logic behind your business so you can focus on the relationships.",
            },
          ].map((v, i) => (
            <div 
              key={i} 
              className="group p-8 border border-[var(--border)] bg-white hover:border-[var(--carbon)] transition-all duration-300"
            >
              <div className="text-[var(--mid-gray)] group-hover:text-[var(--carbon)] mb-6 transition-colors">
                {v.icon}
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--carbon)] mb-3">
                {v.title}
              </h4>
              <p className="text-sm text-[var(--mid-gray)] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}