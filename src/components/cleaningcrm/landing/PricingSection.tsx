"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "49",
    tagline: "Perfect for solo cleaners or small teams just starting out.",
    features: ["Up to 3 staff members", "Online booking page", "Basic dispatch & scheduling", "Stripe payment integration", "Email support", "Standard reporting"],
    cta: "Start Free Trial",
    highlighted: false
  },
  {
    name: "BUSINESS",
    price: "99",
    tagline: "Everything you need to scale a growing cleaning agency.",
    features: ["Up to 15 staff members", "Custom domain booking page", "Automated SMS reminders", "Staff mobile portal", "Advanced analytics & profit tracking", "Zapier integration", "Priority email & chat support", "Customizable checklists", "Review generation"],
    cta: "Start Free Trial",
    highlighted: true
  },
  {
    name: "ENTERPRISE",
    price: "249",
    tagline: "For large franchises and multi-location cleaning businesses.",
    features: ["Unlimited staff members", "Multiple locations/zones", "API access", "White-labeled app", "Dedicated account manager", "Custom onboarding", "SLA guarantees", "Advanced role permissions"],
    cta: "Book a Demo",
    highlighted: false
  }
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest justify-center w-full" style={{ color: '#1A7A5E' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1A7A5E' }}></div>
            Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
            Transparent pricing. No surprises.
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            14-day free trial on all plans. No credit card required.
          </p>

          <div className="flex items-center justify-center gap-3 mt-10">
            <span className={`text-sm font-medium ${!annual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <div 
              className="w-12 h-6 rounded-full relative cursor-pointer transition-colors"
              style={{ backgroundColor: annual ? '#1A7A5E' : '#e8e8e8' }}
              onClick={() => setAnnual(!annual)}
            >
              <div 
                className="w-5 h-5 rounded-full bg-white absolute top-[2px] transition-all shadow-sm"
                style={{ left: annual ? 'calc(100% - 22px)' : '2px' }}
              ></div>
            </div>
            <span className={`text-sm font-medium ${annual ? 'text-foreground' : 'text-muted-foreground'}`}>Annual</span>
            <span className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-white ml-2" style={{ backgroundColor: '#1A7A5E' }}>
              Save 20%
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mt-12 items-start max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-8 relative flex flex-col h-full transition-transform hover:-translate-y-1 ${
                plan.highlighted ? "shadow-xl border-none" : "bg-background border border-border"
              }`}
              style={plan.highlighted ? { backgroundColor: '#1A7A5E' } : {}}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1 text-xs font-bold shadow-sm" style={{ color: '#1A7A5E' }}>
                  Most Popular
                </div>
              )}
              
              <div className={`text-sm font-semibold uppercase tracking-wider ${plan.highlighted ? 'text-white/70' : 'text-muted-foreground'}`}>
                {plan.name}
              </div>
              
              <div className="mt-2 flex items-baseline gap-1">
                <span className={`text-5xl font-bold tracking-tight ${plan.highlighted ? 'text-white' : 'text-foreground'}`} style={{ fontFamily: 'Sora, sans-serif' }}>
                  ${annual ? Math.floor(parseInt(plan.price) * 0.8) : plan.price}
                </span>
                <span className={`text-xl font-normal ${plan.highlighted ? 'text-white/70' : 'text-muted-foreground'}`}>
                  /mo
                </span>
              </div>
              
              <p className={`text-sm mt-2 mb-6 ${plan.highlighted ? 'text-white/70' : 'text-muted-foreground'}`}>
                {plan.tagline}
              </p>
              
              <div className={`border-t mb-6 ${plan.highlighted ? 'border-white/20' : 'border-border'}`}></div>
              
              <div className="space-y-3 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: plan.highlighted ? '#ffffff' : '#1A7A5E' }} />
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <button 
                className={`w-full py-3 rounded-full text-sm font-semibold mt-8 transition-all ${
                  plan.highlighted 
                    ? 'bg-white hover:bg-white/90' 
                    : 'bg-transparent border border-border text-foreground hover:border-foreground'
                }`}
                style={plan.highlighted ? { color: '#1A7A5E' } : {}}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground">
          7-day free trial on all plans · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}