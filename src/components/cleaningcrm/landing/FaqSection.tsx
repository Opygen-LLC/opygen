"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "How do I create an account here?",
    a: "Creating an account is simple. Click the 'Sign Up' button, enter your email and password, verify your email address, and you're ready to go. The whole process takes less than 2 minutes."
  },
  {
    q: "Is my financial data kept secure?",
    a: "Absolutely. We use bank-level 256-bit SSL encryption to protect all your data. Your financial information is never shared with third parties and is stored on secure, encrypted servers."
  },
  {
    q: "Can I track expenses and income easily?",
    a: "Yes, add your income and expenses anytime to keep your budget updated and organised. Yes, add your income and expenses anytime to keep your budget updated and organised."
  },
  {
    q: "Does this app support multiple currencies?",
    a: "Some benefits of using SaaS include cost-effectiveness, scalability, accessibility from anywhere with an internet connection, automatic updates, and reduced IT overhead."
  },
  {
    q: "Is there a subscription or monthly fee?",
    a: "We offer both free and premium plans. The free plan covers basic features, while our premium plans unlock advanced analytics, unlimited transactions, and priority support."
  },
  {
    q: "How can I upgrade to premium plan?",
    a: "You can upgrade anytime from your account settings. Go to Settings → Billing → Upgrade Plan and choose the plan that best fits your needs."
  },
  {
    q: "Can I set monthly spending limits here?",
    a: "Yes! You can set custom spending limits for each category. We'll notify you when you're approaching or have exceeded your set limits."
  },
  {
    q: "Does it provide financial insights or reports?",
    a: "Yes, we provide detailed financial reports including spending trends, income vs expense comparisons, category breakdowns, and monthly summaries to help you make informed decisions."
  },
  {
    q: "Can I connect my bank accounts securely?",
    a: "Yes, we support secure bank connections through trusted financial data providers. Your login credentials are never stored on our servers."
  },
  {
    q: "Is there a feature for financial goals?",
    a: "Absolutely! You can set savings goals, track your progress, and get personalized tips to help you reach your financial targets faster."
  }
];

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([2, 3]));

  const toggle = (i: number) => {
    setOpenIndices(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  // Split into two columns
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  const FaqItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
    const isOpen = openIndices.has(index);
    return (
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <button
          className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
          onClick={() => toggle(index)}
        >
          <span className="text-sm font-semibold text-gray-900 pr-4 leading-snug">
            {faq.q}
          </span>
          <span className="shrink-0 text-gray-500">
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            <MessageCircle size={13} />
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            We help to keep track of your expense and incomes. It shows the flow of records
            over a specific period of time. Such as weekly, monthly or yearly.
          </p>
        </div>

        {/* Two-column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {leftFaqs.map((faq, i) => (
              <FaqItem key={i * 2} faq={faq} index={i * 2} />
            ))}
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-4">
            {rightFaqs.map((faq, i) => (
              <FaqItem key={i * 2 + 1} faq={faq} index={i * 2 + 1} />
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-6 bg-gray-50 rounded-2xl border border-gray-200 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">You have different questions?</h3>
            <p className="text-sm text-gray-500 mt-1">Our team will answer all your questions. We ensure a quick response.</p>
          </div>
          <button className="shrink-0 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors duration-200">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}