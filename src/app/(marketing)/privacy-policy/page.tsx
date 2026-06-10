import React from "react";
import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Welcome to Opygen. Opygen ("we," "us," or "our") is a SaaS CRM built specifically for cleaning businesses. 
                This Privacy Policy explains how we collect, use, and protect your information when you use our platform at opygen.com. 
                By using Opygen, you agree to the collection and use of information in accordance with this policy. This policy applies to Super Admins, Business Owners, and Staff members.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0A0A0A]">Account Information</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-medium">
                  When you register for Opygen, we collect personal information such as your name, email address, business name, phone number, and physical address.
                </p>
                
                <h3 className="text-lg font-bold text-[#0A0A0A]">Client Data</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-medium">
                  As part of the service, Business Owners and Staff may enter data about their own clients, including names, service addresses, booking history, and job notes. You are responsible for ensuring you have the right to provide this data to us.
                </p>

                <h3 className="text-lg font-bold text-[#0A0A0A]">Payment Information</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-medium">
                  Payments are processed through Stripe. We do not store your raw credit card data on our servers. Stripe's use of your personal information is governed by their Privacy Policy.
                </p>

                <h3 className="text-lg font-bold text-[#0A0A0A]">Usage Data</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-medium">
                  We automatically collect information about how you interact with our platform, such as IP addresses, browser types, page views, and activity logs.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                3. How We Use Your Information
              </h2>
              <ul className="space-y-4 list-none text-[#6B6B6B] font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed">To provide, maintain, and improve the Opygen CRM platform.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed">To facilitate online bookings, send automatic email confirmations, and generate invoice PDFs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed">To manage your subscription, process payments via Stripe, and handle billing inquiries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed">To ensure platform security, prevent fraud, and maintain activity logs.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                4. How We Share Your Information
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                We do not sell your personal data. We only share information with third-party service providers that help us operate Opygen:
              </p>
              <ul className="space-y-4 list-none text-[#6B6B6B] font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Stripe:</strong> For payment processing and subscription management.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>AWS:</strong> For secure cloud hosting and data storage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Email Service Provider:</strong> For sending transactional emails like booking confirmations and invoices.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                5. Data Retention
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                We retain your personal information for as long as your account is active or as needed to provide you with the service. We also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                6. User Rights
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                You have the right to access, update, or delete the personal information we have on you. Whenever made possible, you can update your personal information directly within your account settings section. If you are unable to perform these actions yourself, please contact us at <a href="mailto:legal@opygen.com" className="text-[#0A0A0A] underline decoration-px underline-offset-4">legal@opygen.com</a>.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                7. Cookies
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                We use cookies to track activity on our platform and hold certain information to improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                8. Security
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                The security of your data is important to us. We use industry-standard encryption (TLS) for data in transit and AES-256 for data at rest. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                9. Children's Privacy
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Opygen is not intended for use by anyone under the age of 18. We do not knowingly collect personally identifiable information from children under 18.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                10. Changes to This Policy
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                11. Contact Us
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:legal@opygen.com" className="text-[#0A0A0A] underline decoration-px underline-offset-4">legal@opygen.com</a>.
              </p>
            </section>
          </div>

          {/* Footer Link */}
          <div className="mt-20 pt-10 border-t border-[#E8E8E8]">
            <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Opygen Operational Systems • 
              <span className="ml-2">
                Visit our <a href="/terms-of-service" className="hover:text-[#0A0A0A] transition-colors">Terms of Service</a>
              </span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
