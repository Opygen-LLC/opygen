"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16">
      {/* Background Accent Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10 translate-x-1/2" style={{ backgroundColor: '#1A7A5E' }} />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#1A7A5E' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center w-full py-20 relative z-10">
        
        {/* LEFT COLUMN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="flex flex-col items-start"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#1A7A5E' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
              Cleaning Business CRM
            </div>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-foreground"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Run your entire cleaning business from <br className="hidden lg:block" />
            <span style={{ color: '#1A7A5E' }}>one dashboard.</span>
          </motion.h1>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-lg text-muted-foreground mt-6 max-w-lg leading-relaxed"
          >
            Manage bookings, dispatch crews, collect payments, and give clients a professional booking experience — all in one place.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex items-center gap-3 mt-8"
          >
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-[10px] font-bold text-muted-foreground z-30">JD</div>
              <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-[10px] font-bold text-muted-foreground -ml-2 z-20">AL</div>
              <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-[10px] font-bold text-muted-foreground -ml-2 z-10">MR</div>
            </div>
            <div className="flex flex-col ml-1">
              <span className="text-sm font-semibold text-foreground">2,400+</span>
              <span className="text-[10px] text-muted-foreground leading-none">cleaning agencies</span>
            </div>
            <div className="w-px h-6 bg-border mx-2"></div>
            <div className="flex flex-col">
              <span className="text-xs tracking-widest" style={{ color: '#1A7A5E' }}>★★★★★</span>
              <span className="text-xs font-semibold text-foreground mt-0.5">4.9 rating</span>
            </div>
          </motion.div>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <button className="rounded-full px-7 py-3.5 font-semibold text-white text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1A7A5E' }}>
              Start 7-Day Free Trial
            </button>
            <button className="rounded-full px-7 py-3.5 font-semibold text-foreground text-sm border border-border bg-transparent hover:bg-secondary transition-colors">
              See How It Works
            </button>
          </motion.div>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-xs text-muted-foreground mt-4"
          >
            No credit card required · Cancel anytime · Live in 10 minutes
          </motion.p>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:ml-auto w-full max-w-md lg:max-w-none"
        >
          {/* Blob Behind */}
          <div className="absolute inset-0 rounded-3xl opacity-10 rotate-3 scale-105" style={{ backgroundColor: '#1A7A5E' }} />
          
          {/* Main Dashboard Card */}
          <div className="bg-[#0f0f0f] rounded-2xl p-6 relative z-10 shadow-2xl border border-white/10">
            
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-white/40 font-medium tracking-wide">Opygen Clean</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
            </div>

            {/* Stat Row */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Revenue This Week</div>
                <div className="text-xl font-bold text-white mb-0.5">$4,280</div>
                <div className="text-xs" style={{ color: '#1A7A5E' }}>+18% vs last week</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-white/50 mb-1">Active Bookings</div>
                <div className="text-xl font-bold text-white mb-0.5">23</div>
                <div className="text-xs text-[#F59E0B]">6 pending</div>
              </div>
            </div>

            {/* Kanban Strip */}
            <div className="mb-4">
              <div className="text-xs text-white/40 mb-2">Job Board</div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
                    <span className="text-[10px] text-white/60 uppercase tracking-wider">Booked</span>
                  </div>
                  <div className="bg-white/8 rounded-lg p-2 text-[10px] text-white/70 mb-1.5 border border-white/5">Sarah M. - Deep Clean</div>
                  <div className="bg-white/8 rounded-lg p-2 text-[10px] text-white/70 border border-white/5">John D. - Standard</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></div>
                    <span className="text-[10px] text-white/60 uppercase tracking-wider">In Progress</span>
                  </div>
                  <div className="bg-white/8 rounded-lg p-2 text-[10px] text-white/70 mb-1.5 border border-white/5">Office Co. - Weekly</div>
                  <div className="bg-white/8 rounded-lg p-2 text-[10px] text-white/70 border border-white/5">Emma W. - Move Out</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-[10px] text-white/60 uppercase tracking-wider">Done</span>
                  </div>
                  <div className="bg-white/8 rounded-lg p-2 text-[10px] text-white/40 line-through mb-1.5 border border-white/5">Mike T. - Standard</div>
                  <div className="bg-white/8 rounded-lg p-2 text-[10px] text-white/40 line-through border border-white/5">Lisa R. - Deep Clean</div>
                </div>
              </div>
            </div>

            {/* Booking Page Widget */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-white/40 mb-0.5">Your Booking Page</div>
                <div className="font-mono text-xs" style={{ color: '#1A7A5E' }}>acmecleaners.opygen.com</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full border border-green-500/20">Live ✓</div>
                <div className="text-[10px] text-white/50">3 new today</div>
              </div>
            </div>

          </div>

          {/* Floating Accent Cards */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-border z-20 hidden md:block"
          >
            <div className="text-[10px] font-semibold text-foreground flex items-center gap-1.5">
              New Booking! <span style={{ color: '#1A7A5E' }}>✓</span>
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Alice B. — Standard Clean</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-border z-20 hidden md:block"
          >
            <div className="text-[10px] text-muted-foreground flex items-center gap-1.5">
              Invoice Sent <span className="text-green-500">✓</span>
            </div>
            <div className="text-sm font-bold text-foreground mt-0.5">$240.00</div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
