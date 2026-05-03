"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter Plan",
    tagline: "Ideal for solo cleaners getting started",
    monthlyPrice: 49,
    features: [
      "Up to 3 staff members",
      "Online booking page",
      "Stripe payment integration",
      "Basic dispatch & scheduling",
      "Email support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Business Plan",
    tagline: "Perfect for growing cleaning agencies",
    monthlyPrice: 99,
    features: [
      "Up to 15 staff members",
      "Custom domain booking page",
      "Automated SMS reminders",
      "Staff mobile portal",
      "Advanced analytics & profit tracking",
      "Priority email & chat support",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise Plan",
    tagline: "Built to scale for large operations",
    monthlyPrice: 249,
    features: [
      "Unlimited staff members",
      "Multiple locations & zones",
      "API access & white-label",
      "Dedicated account manager",
      "Custom onboarding & SLA",
      "Advanced role permissions",
    ],
    highlighted: false,
    cta: "Get Started",
  },
];

/* ── Circle checkmark icon ── */
function CheckIcon({ white }: { white?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={{ flexShrink: 0, marginTop: "1px" }}
    >
      <circle
        cx="9"
        cy="9"
        r="8.25"
        stroke={white ? "rgba(255,255,255,0.5)" : "#1A7A5E"}
        strokeWidth="1.5"
      />
      <path
        d="M5.5 9l2.5 2.5 4.5-4.5"
        stroke={white ? "white" : "#1A7A5E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  const getPrice = (base: number) =>
    annual ? Math.floor(base * 0.8) : base;

  return (
    <section id="pricing" className="bg-background py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-6"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="7" fill="#1A7A5E" />
              <path
                d="M4 7l2 2 4-4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-semibold text-foreground tracking-wide">
              Pricing Plan
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.08] max-w-2xl"
           
          >
            Explore our pricing plans
          </h2>

          {/* Subtext */}
          <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-lg">
            Start free for 7 days — no credit card needed. Pick the plan that fits
            your cleaning business and scale anytime.
          </p>

          {/* ── Toggle — pill switcher style like reference ── */}
          <div
            className="flex items-center mt-10 rounded-full p-1"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            {/* Monthly */}
            <button
              onClick={() => setAnnual(false)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                !annual
                  ? { backgroundColor: "#0a0a0a", color: "white" }
                  : { backgroundColor: "transparent", color: "#6b6b6b" }
              }
            >
              Monthly
            </button>

            {/* Yearly + save badge */}
            <button
              onClick={() => setAnnual(true)}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                annual
                  ? { backgroundColor: "#0a0a0a", color: "white" }
                  : { backgroundColor: "transparent", color: "#6b6b6b" }
              }
            >
              Yearly
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: "#22c55e", color: "white" }}
              >
                20% SAVE
              </span>
            </button>
          </div>
        </motion.div>

        {/* ── Pricing cards ── */}
        <div className="grid lg:grid-cols-3 gap-5 mt-14 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col rounded-3xl overflow-hidden"
              style={
                plan.highlighted
                  ? {
                    background:
                      "linear-gradient(160deg, #0f5c43 0%, #1A7A5E 45%, #22a876 100%)",
                  }
                  : {
                    backgroundColor: "white",
                    border: "1px solid #e8e8e8",
                  }
              }
            >
              {/* Decorative light rays on highlighted card — like reference */}
              {plan.highlighted && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 60% 0%, rgba(255,255,255,0.18) 0%, transparent 55%)",
                  }}
                />
              )}

              {/* ── Card content ── */}
              <div className="relative z-10 p-7 flex flex-col flex-1">

                {/* Plan name */}
                <h3
                  className="text-xl font-bold leading-tight"
                  style={{
                    color: plan.highlighted ? "white" : "#0a0a0a",
                  }}
                >
                  {plan.name}
                </h3>

                {/* Tagline */}
                <p
                  className="text-sm mt-1 mb-6"
                  style={{
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.65)"
                      : "#6b6b6b",
                  }}
                >
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-1">
                  <span
                    className="text-5xl font-bold tracking-tight"
                    style={{
                      color: plan.highlighted ? "white" : "#0a0a0a",
                    }}
                  >
                    ${getPrice(plan.monthlyPrice)}
                  </span>
                </div>
                <p
                  className="text-sm mb-6"
                  style={{
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.55)"
                      : "#6b6b6b",
                  }}
                >
                  {annual ? "Annual subscription" : "Monthly subscription"}
                </p>

                {/* CTA button */}
                <button
                  className="w-full py-3.5 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 mb-7"
                  style={
                    plan.highlighted
                      ? {
                        backgroundColor: "white",
                        color: "#1A7A5E",
                      }
                      : {
                        backgroundColor: "#0a0a0a",
                        color: "white",
                      }
                  }
                  onMouseEnter={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#1A7A5E";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#0a0a0a";
                    }
                  }}
                >
                  {plan.cta}
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: plan.highlighted ? "#1A7A5E" : "rgba(255,255,255,0.15)",
                      color: plan.highlighted ? "white" : "white",
                    }}
                  >
                    ↗
                  </span>
                </button>

                {/* Includes label */}
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.50)"
                      : "#9a9a9a",
                  }}
                >
                  Includes
                </p>

                {/* Feature list */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckIcon white={plan.highlighted} />
                      <span
                        className="text-sm leading-relaxed"
                        style={{
                          color: plan.highlighted
                            ? "rgba(255,255,255,0.85)"
                            : "#333",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Cancel note */}
                <p
                  className="text-xs mt-8"
                  style={{
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.38)"
                      : "#bbb",
                  }}
                >
                  You can easily cancel anytime
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-8 text-sm text-muted-foreground">
          7-day free trial on all plans · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}