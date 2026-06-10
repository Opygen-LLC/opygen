import React from "react";
import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";

export default function TermsOfService() {
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
              Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                By accessing or using Opygen, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the platform. These terms govern your access to and use of the Opygen CRM and related services.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                2. Description of Service
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Opygen is a high-performance CRM designed specifically for cleaning businesses. The platform provides tools for client management, online booking, payment processing, staff management, and business analytics. The platform supports three primary user roles:
              </p>
              <ul className="space-y-4 list-none text-[#6B6B6B] font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Super Admin:</strong> Manages platform-wide operations and business accounts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Admin / Business Owner:</strong> Manages their specific cleaning company and settings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Staff / Field Worker:</strong> Views and manages assigned jobs and schedules.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                3. Account Registration
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                To use Opygen, you must register for an account. You agree to provide accurate, current, and complete information. You are responsible for safeguarding your password and for all activities that occur under your account. You must be at least 18 years of age to use the service.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                4. Subscription Plans and Billing
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Opygen is a subscription-based service with the following plans:
              </p>
              <ul className="space-y-4 list-none text-[#6B6B6B] font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Starter:</strong> $19/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Growth:</strong> $49/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Pro:</strong> $99/month</span>
                </li>
              </ul>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Billing occurs monthly and automatically renews unless cancelled. We reserve the right to change prices with at least 14 days' notice via email.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                5. Cancellation Policy
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                You can cancel your Opygen subscription at any time through your account settings. Upon cancellation, you will continue to have access to the platform until the end of your current billing period. No refunds are provided for unused time (please see our Refund Policy).
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                6. Acceptable Use
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                You agree not to use Opygen for any illegal activities, or in any way that violates the rights of others. Unauthorized access, reverse engineering, scraping, or interfering with the platform's security is strictly prohibited.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                7. User Content
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                You retain ownership of all data you enter into Opygen ("User Content"). By using the service, you grant Opygen a limited, worldwide, non-exclusive license to use, host, and process your User Content solely for the purpose of providing and improving the platform.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                8. Intellectual Property
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Opygen and its original content, features, and functionality are and will remain the exclusive property of Opygen. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                9. Third-Party Services
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Our service integrates with third-party providers such as Stripe (payments), AWS (hosting), and transactional email services. Your use of these services is subject to their respective terms and conditions.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                10. Limitation of Liability
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Opygen is provided on an "as-is" and "as-available" basis. We do not guarantee 100% uptime, though we aim for a best-effort 99.9% availability. To the maximum extent permitted by law, Opygen's liability is limited to the fees paid by you in the 12 months preceding the claim.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                11. Governing Law
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                These Terms shall be governed and construed in accordance with the laws of our primary jurisdiction, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                12. Contact Us
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@opygen.com" className="text-[#0A0A0A] underline decoration-px underline-offset-4">legal@opygen.com</a>.
              </p>
            </section>
          </div>

          {/* Footer Link */}
          <div className="mt-20 pt-10 border-t border-[#E8E8E8]">
            <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Opygen Operational Systems • 
              <span className="ml-2">
                Review our <a href="/privacy-policy" className="hover:text-[#0A0A0A] transition-colors">Privacy Policy</a>
              </span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
