import React from "react";
import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";

export default function RefundPolicy() {
  const lastUpdated = "April 2024";

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] flex flex-col font-sans relative overflow-hidden">
      {/* Brand Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: `linear-gradient(#F0F0F0 1px, transparent 1px), linear-gradient(90deg, #F0F0F0 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 70%)'
        }}
      />

      <Navbar />

      <main className="relative z-10 flex-grow pt-48 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-20 space-y-6">
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1] tracking-[-0.05em] font-sans text-[#0A0A0A]">
              Refund Policy
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#E8E8E8]" />
              <p className="text-[10px] text-[#6B6B6B] uppercase tracking-[0.2em] font-bold">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-16">
            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                1. Overview
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Opygen is a subscription-based Software as a Service (SaaS). Due to the digital nature of our product, subscription fees are generally non-refundable once the billing period has commenced.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                2. Free Trial
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                We offer a free trial period to new users so you can experience Opygen's features before committing to a paid plan. Your credit card will not be charged if you cancel your subscription before the trial period ends. Once the trial period concludes and the first billing cycle begins, the subscription is subject to our standard non-refundable policy.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                3. Monthly Subscriptions
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Opygen operates on a month-to-month basis. We do not provide refunds or credits for partial months of service, plan downgrades, or for months when your account was active but unused. If you cancel your subscription, you will maintain full access to the platform's features until the end of your current paid billing period.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                4. Annual Subscriptions
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                If we offer annual subscriptions in the future, a pro-rated refund will be available within the first 14 days of the initial annual purchase. No refunds will be issued for annual plans after the initial 14-day period has passed.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                5. Exceptions
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Opygen may, at its sole discretion, issue a refund or credit under the following exceptional circumstances:
              </p>
              <ul className="space-y-4 list-none text-[#6B6B6B] font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Billing Errors:</strong> Verified duplicate charges or clerical errors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Technical Issues:</strong> Critical technical failure that makes the service completely unusable for more than three (3) consecutive business days, provided the issue is within Opygen's control.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                6. How to Request a Refund
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                To request a refund under the exceptional circumstances listed above, please email <a href="mailto:legal@opygen.com" className="text-[#0A0A0A] underline decoration-px underline-offset-4">legal@opygen.com</a>. Please include your account email, a detailed description of the reason for the request, and any relevant transaction details. We resolve all requests within five (5) business days.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                7. Chargebacks
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                We encourage you to contact Opygen support directly to resolve any billing issues or refund requests. Initiating a chargeback with your bank without first contacting us may result in the immediate and permanent suspension of your account.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                8. Contact Us
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                If you have any questions regarding our Refund Policy, please contact us at <a href="mailto:legal@opygen.com" className="text-[#0A0A0A] underline decoration-px underline-offset-4">legal@opygen.com</a>.
              </p>
            </section>
          </div>

          {/* Footer Link */}
          <div className="mt-20 pt-10 border-t border-[#E8E8E8]">
            <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Opygen Operational Systems • 
              <span className="ml-2">
                Questions? Email us at <a href="mailto:legal@opygen.com" className="hover:text-[#0A0A0A] transition-colors">legal@opygen.com</a>
              </span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
