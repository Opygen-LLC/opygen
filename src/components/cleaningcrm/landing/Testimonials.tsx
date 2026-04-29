"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Opygen Clean changed everything. Our booking volume doubled because clients can just book online 24/7.",
    name: "Sarah Jenkins",
    agency: "Sparkle & Shine",
    city: "Austin, TX",
    metric: "+110% Bookings",
    initials: "SJ"
  },
  {
    quote: "Dispatching used to take me 3 hours every night. Now the system does it automatically and my staff just check their portal.",
    name: "David Chen",
    agency: "Urban Maids",
    city: "Chicago, IL",
    metric: "15 hrs saved/wk",
    initials: "DC"
  },
  {
    quote: "The automated invoices and Stripe integration mean I get paid instantly. No more chasing clients for checks.",
    name: "Maria Rodriguez",
    agency: "Pristine Co",
    city: "Miami, FL",
    metric: "$0 unpaid invoices",
    initials: "MR"
  },
  {
    quote: "We scaled from 5 to 20 cleaners in 6 months. The software handled the growth perfectly.",
    name: "James Wilson",
    agency: "Elite Cleaning",
    city: "Denver, CO",
    metric: "4x Team Growth",
    initials: "JW"
  },
  {
    quote: "Finally, a CRM that actually understands what a cleaning business needs. It's incredibly easy to use.",
    name: "Amanda Smith",
    agency: "Fresh Start",
    city: "Seattle, WA",
    metric: "10 min setup",
    initials: "AS"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#F0F7F4' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: '#1A7A5E' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
            What cleaning agency owners say.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Real results from real cleaning businesses.
          </p>
        </motion.div>

        <div className="flex gap-6 mt-14 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 no-scrollbar">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-80 bg-background rounded-2xl p-7 border border-border shadow-sm snap-center flex flex-col"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#1A7A5E' }}>
                  {t.initials}
                </div>
                <div className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: '#1A7A5E' }}>
                  {t.metric}
                </div>
              </div>
              
              <div className="text-sm mt-4 tracking-widest" style={{ color: '#1A7A5E' }}>★★★★★</div>
              
              <p className="text-sm text-foreground leading-relaxed mt-3 italic flex-1">
                "{t.quote}"
              </p>
              
              <div className="mt-5 pt-4 border-t border-border">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.agency} · {t.city}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
