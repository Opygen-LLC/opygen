"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do I need to put in a credit card for the free trial?",
    a: "No, you don't. You can sign up, set up your account, and test all features for 14 days completely free without entering any payment information."
  },
  {
    q: "Does Opygen process the payments?",
    a: "We integrate directly with Stripe. Payments go straight from your client's card to your Stripe account. We do not hold your funds."
  },
  {
    q: "Can I use my own domain for the booking page?",
    a: "Yes, on the Business and Enterprise plans, you can connect your custom domain (e.g., booking.yourwebsite.com) so clients stay on your brand."
  },
  {
    q: "Do my cleaners need to download an app?",
    a: "No app download is required. They get a secure link they can access from any mobile browser. It looks and acts like an app, but saves them from installing anything."
  },
  {
    q: "Can I migrate my existing clients into Opygen?",
    a: "Absolutely. You can import your existing client list via CSV. Our onboarding team is also happy to help you with the migration process at no extra cost."
  },
  {
    q: "Can I set different prices for different zip codes?",
    a: "Yes. Our advanced pricing engine allows you to set custom rules, travel fees, or distinct pricing tiers based on the client's location or zip code."
  },
  {
    q: "Is there a setup fee?",
    a: "No, there are zero setup fees. The monthly subscription is the only cost you pay us. (Stripe charges their standard processing fees for payments)."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#F0F7F4' }}>
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* LEFT */}
        <div className="lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: '#1A7A5E' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
            FAQ
          </div>
          <h2 className="text-4xl font-bold tracking-tight mt-4 text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
            Questions cleaning agency owners ask.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Everything you need to know before getting started.
          </p>
          <div className="mt-8 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Still have questions?</span>
            <a href="#" className="text-sm font-semibold hover:underline" style={{ color: '#1A7A5E' }}>Talk to us &rarr;</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-background rounded-2xl border border-border overflow-hidden">
                <div 
                  className="flex items-center justify-between p-5 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <h3 className="text-sm font-semibold text-foreground pr-8">{faq.q}</h3>
                  <Plus 
                    size={20} 
                    className="text-muted-foreground shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  />
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
