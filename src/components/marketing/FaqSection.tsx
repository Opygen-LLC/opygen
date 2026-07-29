"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

const faqs: FaqItem[] = [
  {
    question: "How fast can Opygen design and launch our project?",
    answer: "Most website builds and SaaS MVP Sprints are delivered in 1 to 4 weeks. We follow a strict phase-based blueprint with direct communication so there are zero agency delays or idle handoffs.",
    category: "Timeline & Velocity",
  },
  {
    question: "Do we own 100% of the source code and intellectual property?",
    answer: "Yes, 100% completely. Upon project completion and final milestone handoff, all IP rights, GitHub repositories, Figma design assets, and database credentials belong strictly to your company.",
    category: "Full Ownership",
  },
  {
    question: "What happens after our website or app goes live?",
    answer: "Every project includes a complimentary 30-day post-launch warranty period covering any bug fixes, performance monitoring, and team onboarding. We also offer ongoing SLA maintenance packages if desired.",
    category: "Support & Warranty",
  },
  {
    question: "How do you ensure our site achieves 99+ Google Speed & Lighthouse scores?",
    answer: "We build exclusively using Next.js 15 App Router, React 19, and Tailwind v4 with server-side rendering (SSR), automated image optimization, and zero unnecessary third-party script bloat.",
    category: "Engineering Speed",
  },
  {
    question: "Can you integrate with our existing CRM, Stripe, or backend APIs?",
    answer: "Absolutely. We specialize in custom API integrations, webhooks, HubSpot/GoHighLevel CRM setups, Stripe subscription billing, and Supabase/Firebase real-time backend connections.",
    category: "Integrations & APIs",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-[#F7F7F4] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32 font-space-grotesk border-t border-black/10"
    >
      {/* Background Soft Glow Orbs */}
      <div aria-hidden="true" className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#FFD6C7]/60 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-[#D9FF5B]/50 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[920px]">
        
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 shadow-2xs">
            <HelpCircle className="h-3.5 w-3.5 text-[#F24202]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
              Frequently Asked Questions
            </span>
          </div>
          <h2 id="faq-title" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[56px] leading-tight">
            Everything you need to know.
          </h2>
          <p className="mt-2 text-sm sm:text-lg text-gray-600 font-medium leading-relaxed">
            Clear answers about our engineering process, ownership guarantee, and post-launch support.
          </p>
        </header>

        {/* Clean Accordion List */}
        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-all ${
                  isOpen
                    ? "border-black/30 bg-white shadow-md"
                    : "border-black/10 bg-white hover:border-black/30 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <div className="pr-4">
                    <span className="inline-block rounded-full bg-black/5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-700 mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-black/10 transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-[#111111] text-white" : "bg-[#F7F7F4] text-gray-900"
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden px-5 sm:px-6 pb-6"
                    >
                      <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-medium border-t border-black/5 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
