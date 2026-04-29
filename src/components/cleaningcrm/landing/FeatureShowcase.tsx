"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Kanban, ReceiptText, Users, ChevronRight, CheckCircle } from "lucide-react";

const tabs = [
  { id: "booking", label: "Online Booking Page", icon: Globe },
  { id: "dispatch", label: "Jobs & Dispatch", icon: Kanban },
  { id: "finance", label: "Finance", icon: ReceiptText },
  { id: "staff", label: "Team & Staff Portal", icon: Users },
];

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("booking");

  return (
    <section id="features" className="bg-secondary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: '#1A7A5E' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 max-w-2xl text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
            Every tool your cleaning agency needs — in one place.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12 mt-16 items-start">
          
          {/* LEFT: TABS */}
          <div className="flex flex-col gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 text-sm font-medium ${
                    isActive 
                      ? "bg-background text-foreground shadow-sm border border-border" 
                      : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                  }`}
                  style={isActive ? { borderLeft: '3px solid #1A7A5E' } : { borderLeft: '3px solid transparent' }}
                >
                  <div className="flex items-center gap-3">
                    <tab.icon size={20} style={{ color: isActive ? '#1A7A5E' : 'currentColor' }} />
                    {tab.label}
                  </div>
                  {isActive && <ChevronRight size={16} className="text-muted-foreground" />}
                </button>
              );
            })}
          </div>

          {/* RIGHT: CONTENT PANEL */}
          <div className="bg-background rounded-2xl border border-border p-8 min-h-[420px]">
            <AnimatePresence mode="wait">
              {activeTab === "booking" && (
                <motion.div 
                  key="booking"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-8 items-center h-full"
                >
                  <div className="bg-[#0f0f0f] rounded-xl p-5 shadow-xl border border-white/5 w-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
                      <span className="text-xs text-white/50">Booking Page Builder</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: '#1A7A5E' }}>A</div>
                        <span className="text-sm font-semibold text-white">Acme Cleaners</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/5">
                        <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-white/30"></div><span className="text-xs text-white/60">Standard Clean</span></div>
                        <span className="text-xs font-bold text-white">$80</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/5">
                        <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-white/30"></div><span className="text-xs text-white/60">Deep Clean</span></div>
                        <span className="text-xs font-bold text-white">$150</span>
                      </div>
                      <button className="w-full mt-4 rounded-lg text-xs py-2 text-white font-medium" style={{ backgroundColor: '#1A7A5E' }}>Book & Pay via Stripe</button>
                    </div>
                    <div className="bg-white/5 rounded-lg px-3 py-2 mt-3 flex justify-between items-center">
                      <span className="font-mono text-[10px]" style={{ color: '#1A7A5E' }}>acmecleaners.opygen.com</span>
                      <span className="text-[10px] text-white/40">Copy</span>
                    </div>
                    <div className="mt-3 inline-block rounded-full px-2.5 py-1 text-[10px]" style={{ backgroundColor: 'rgba(26, 122, 94, 0.2)', color: '#1A7A5E' }}>
                      12 bookings this week
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>Your brand, your booking page.</h3>
                    <div className="space-y-4 mt-6">
                      {["Share your custom link on social or your website.", "Clients select services, see prices instantly.", "Integrated Stripe payments to capture cards upfront.", "Zero back-and-forth emails or phone calls."].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: '#1A7A5E' }} />
                          <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm font-semibold mt-8 inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer" style={{ color: '#1A7A5E' }}>
                      Try this free &rarr;
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "dispatch" && (
                <motion.div 
                  key="dispatch"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-8 items-center h-full"
                >
                  <div className="bg-[#0f0f0f] rounded-xl p-5 shadow-xl border border-white/5 w-full">
                    <span className="text-xs text-white/50 block mb-3">Job Board</span>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <div className="text-[10px] text-white/60 mb-2">Booked <span className="bg-white/10 px-1.5 py-0.5 rounded-full ml-1">2</span></div>
                        <div className="bg-white/5 rounded-lg p-2 text-[10px] text-white/70 mb-1 border border-white/5">Smith House - 9AM</div>
                        <div className="bg-white/5 rounded-lg p-2 text-[10px] text-white/70 mb-1 border border-white/5 border-dashed border-[#1A7A5E]/50">
                          <span style={{ color: '#1A7A5E' }}>Assign &rarr;</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/60 mb-2">In Progress <span className="bg-white/10 px-1.5 py-0.5 rounded-full ml-1">1</span></div>
                        <div className="bg-white/5 rounded-lg p-2 text-[10px] text-white/70 border border-white/5">Jones Apt - 11AM</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/60 mb-2">Done <span className="bg-white/10 px-1.5 py-0.5 rounded-full ml-1">3</span></div>
                        <div className="bg-white/5 rounded-lg p-2 text-[10px] text-white/40 line-through mb-1 border border-white/5">Miller Home</div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 text-[10px] text-white/50 mt-4 flex justify-between items-center">
                      <span>Assign to: Select Staff</span>
                      <span>▼</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>Drag, drop, done.</h3>
                    <div className="space-y-4 mt-6">
                      {["See all bookings in a clear kanban view.", "Drag jobs to assign them to specific cleaners.", "Track status (Booked, In Progress, Done) live.", "Automated reminders sent to clients."].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: '#1A7A5E' }} />
                          <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "finance" && (
                <motion.div 
                  key="finance"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-8 items-center h-full"
                >
                  <div className="bg-[#0f0f0f] rounded-xl p-5 shadow-xl border border-white/5 w-full">
                    <div className="text-xs text-white/50 mb-1">Net Profit This Month</div>
                    <div className="text-2xl font-bold mb-4" style={{ color: '#1A7A5E' }}>$3,840.00</div>
                    
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between items-center mb-2 border border-white/5">
                      <span className="text-[10px] text-white/70">Invoice #0042 — $240.00</span>
                      <span className="text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Paid ✓</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 flex justify-between items-center mb-4 border border-white/5">
                      <span className="text-[10px] text-white/70">Invoice #0043 — $120.00</span>
                      <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">Pending</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-white/10">
                      <span className="text-[10px] text-white/40">Expense: Cleaning Supplies</span>
                      <span className="text-[10px] text-red-400">-$45.00</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>Financial clarity, finally.</h3>
                    <div className="space-y-4 mt-6">
                      {["Auto-generate invoices when jobs complete.", "Send payment links directly via SMS/Email.", "Track expenses and monitor real net profit.", "No more chasing clients for cash."].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle size={20} weight="fill" className="shrink-0 mt-0.5" style={{ color: '#1A7A5E' }} />
                          <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "staff" && (
                <motion.div 
                  key="staff"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-8 items-center h-full"
                >
                  <div className="bg-[#0f0f0f] rounded-xl p-5 shadow-xl border border-white/5 w-full flex flex-col items-center">
                    <span className="text-[10px] text-white/30 uppercase tracking-widest mb-4">Staff Portal Preview</span>
                    
                    <div className="bg-white/5 rounded-2xl p-4 w-full max-w-[200px] border border-white/10">
                      <div className="text-xs text-white/60 mb-3">Today's Jobs (3)</div>
                      
                      <div className="bg-black/50 rounded-lg p-2.5 mb-2">
                        <div className="text-[10px] text-white/80 font-medium">9:00 AM</div>
                        <div className="text-[10px] text-white/50 mt-0.5">Johnson Residence</div>
                        <div className="flex gap-1 mt-2">
                          <div className="h-1.5 flex-1 bg-white/20 rounded-full"></div>
                          <div className="h-1.5 flex-1 bg-white/20 rounded-full"></div>
                          <div className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
                        </div>
                        <div className="text-[8px] text-right mt-1" style={{ color: '#1A7A5E' }}>Done</div>
                      </div>
                      
                      <div className="bg-black/50 rounded-lg p-2.5">
                        <div className="text-[10px] text-white/80 font-medium">1:30 PM</div>
                        <div className="text-[10px] text-white/50 mt-0.5">Smith Apartment</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>Empower your team.</h3>
                    <div className="space-y-4 mt-6">
                      {["Cleaners get a unique login to see their daily route.", "Clock-in/out tracking for accurate payroll.", "Staff can mark jobs as 'Done' from their phones.", "Limit permissions so they only see their own jobs."].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle size={20} weight="fill" className="shrink-0 mt-0.5" style={{ color: '#1A7A5E' }} />
                          <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
