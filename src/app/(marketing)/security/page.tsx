import React from "react";
import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";

export default function Security() {
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
              Security
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
                1. Our Commitment to Security
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                At Opygen, security is at the core of our technical architecture. We understand that cleaning businesses trust us with sensitive client data, financials, and staff schedules. We take that responsibility seriously and implement multi-layered security measures to protect your information.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                2. Data Encryption
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0A0A0A]">In Transit</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-medium">
                  All data transmitted between your browser and Opygen servers is encrypted using modern TLS (Transport Layer Security) protocols. This ensures that your information cannot be intercepted by unauthorized parties.
                </p>
                
                <h3 className="text-lg font-bold text-[#0A0A0A]">At Rest</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-medium">
                  Sensitive data stored in our databases is encrypted at rest using industry-standard AES-256 encryption. This provides an additional layer of protection for your business and client data.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                3. Data Storage and Infrastructure
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                Opygen is hosted on AWS (Amazon Web Services), which provides enterprise-grade physical and network security. Our infrastructure leverages best-in-class security controls provided by AWS, and we perform regular automated backups to ensure data durability and rapid recovery.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                4. Payment Security
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                All financial transactions on Opygen are processed by Stripe, a PCI-DSS Level 1 compliant payment processor. Opygen never stores raw credit card numbers or highly sensitive financial data on its own servers, significantly reducing your compliance burden and risk.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                5. Access Controls
              </h2>
              <ul className="space-y-4 list-none text-[#6B6B6B] font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Role-Based Access Control (RBAC):</strong> Our platform enforces strict role-based access. Super Admins, Business Owners, and Staff members see only the data required for their specific roles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Password Hashing:</strong> User passwords are securely hashed using bcrypt before being stored.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 size-1.5 bg-[#0A0A0A] shrink-0" />
                  <span className="leading-relaxed"><strong>Two-Factor Authentication (2FA):</strong> Support for 2FA is available for administrative accounts to provide an extra layer of login security.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                6. Security Testing and Monitoring
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                We perform regular internal vulnerability assessments and plan for annual third-party penetration testing as we grow. Our systems are monitored 24/7 for unusual activity or potential security threats.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                7. Incident Response
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                In the event of a verified data breach that impacts personal information, Opygen is committed to notifying all affected users within 72 hours of discovery, detailing the nature of the breach and the steps taken to mitigate its impact.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                8. Responsible Disclosure
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                If you are a security researcher and have discovered a potential vulnerability in Opygen, we encourage you to report it to us responsibly at <a href="mailto:security@opygen.com" className="text-[#0A0A0A] underline decoration-px underline-offset-4">security@opygen.com</a>. We take all reports seriously and will work with you to address confirmed issues.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight font-sans text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-4 py-1">
                9. Contact Us
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed font-medium">
                For any security-related inquiries, please reach out to our security team at <a href="mailto:security@opygen.com" className="text-[#0A0A0A] underline decoration-px underline-offset-4">security@opygen.com</a>.
              </p>
            </section>
          </div>

          {/* Footer Link */}
          <div className="mt-20 pt-10 border-t border-[#E8E8E8]">
            <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Opygen Operational Systems • 
              <span className="ml-2">
                Report issues to <a href="mailto:security@opygen.com" className="hover:text-[#0A0A0A] transition-colors">security@opygen.com</a>
              </span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
