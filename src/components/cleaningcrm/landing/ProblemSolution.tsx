"use client";

import { motion } from "framer-motion";
import { Smartphone, Calendar, ReceiptText, BarChart } from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    old: "Texting every cleaner",
    new: "Staff see jobs in their portal instantly",
    sub: "No calls, no group chats, no confusion."
  },
  {
    icon: Calendar,
    old: "Clients call to book manually",
    new: "Clients book and pay online via branded page",
    sub: "Your booking page works 24/7."
  },
  {
    icon: ReceiptText,
    old: "Creating invoices in Word/Excel",
    new: "Invoice created and emailed automatically",
    sub: "PDF confirmation sent the moment they pay."
  },
  {
    icon: BarChart,
    old: "No idea what profit is",
    new: "Revenue and net profit tracked in real time",
    sub: "See your numbers every time you log in."
  }
];

export default function ProblemSolution() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: '#1A7A5E' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
            The Problem
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 max-w-2xl text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
            Stop running your cleaning business on WhatsApp and spreadsheets.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            Opygen Clean replaces the chaos with one connected system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-background border border-border rounded-2xl p-6 transition-transform duration-200 group flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F0F7F4' }}>
                <item.icon size={20} style={{ color: '#1A7A5E' }} />
              </div>
              
              <div className="text-sm text-muted-foreground line-through mb-1 opacity-70">{item.old}</div>
              <div className="text-xs text-muted-foreground mb-3 opacity-50">↓</div>
              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{item.new}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {item.sub}
              </p>

              <div className="text-sm font-semibold mt-6 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#1A7A5E' }}>
                Learn more &rarr;
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
