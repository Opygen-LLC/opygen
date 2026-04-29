"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  index: string;
  title: string;
  content: React.ReactNode;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const LAST_UPDATED = "April 19, 2026";
const EFFECTIVE_DATE = "April 19, 2026";

// ─── Section Data ─────────────────────────────────────────────────────────────

const sections: Section[] = [
  {
    id: "acceptance",
    index: "01",
    title: "Acceptance of Terms",
    content: (
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          These Terms of Service (&quot;Terms&quot;) constitute a legally
          binding agreement between you (&quot;User,&quot; &quot;Business
          Client,&quot; or &quot;you&quot;) and Opygen Operational Systems
          (&quot;Opygen,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), governing your access to and use of the Cleaning CRM
          platform and all related services (collectively, the
          &quot;Platform&quot;).
        </p>
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          By registering for an account, clicking &quot;Get Started,&quot; or
          otherwise accessing or using the Platform, you confirm that you have
          read, understood, and agree to be bound by these Terms. If you do not
          agree, you must not access or use the Platform.
        </p>
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          If you are accepting these Terms on behalf of a company or other legal
          entity, you represent and warrant that you have the authority to bind
          that entity to these Terms.
        </p>
      </div>
    ),
  },
  {
    id: "eligibility",
    index: "02",
    title: "Eligibility & Account Registration",
    content: (
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          To use the Platform, you must meet all of the following requirements:
        </p>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Eligibility Requirements
          </h4>
          <ul className="space-y-2">
            {[
              "Be at least 18 years of age",
              "Be a legitimate business owner or authorized representative of a business entity",
              "Provide accurate, current, and complete registration information",
              "Have the legal capacity to enter into binding contracts in your jurisdiction",
              "Not be prohibited from using the Platform under applicable law",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Account Security
          </h4>
          <ul className="space-y-2">
            {[
              "You are solely responsible for maintaining the confidentiality of your login credentials",
              "You are responsible for all activity that occurs under your account",
              "You must notify us immediately at hello@opygen.com if you suspect unauthorized access",
              "Opygen is not liable for any loss resulting from unauthorized use of your account",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "platform-services",
    index: "03",
    title: "Platform & Services",
    content: (
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          The Opygen Cleaning CRM Platform provides tools for cleaning
          businesses to manage their operations. Subject to your subscription
          plan and these Terms, we grant you a limited, non-exclusive,
          non-transferable, revocable license to access and use the Platform.
        </p>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Core Features Included
          </h4>
          <ul className="space-y-2">
            {[
              "Job scheduling, dispatching, and recurring booking management",
              "Client records and service history management",
              "Team management and role-based access control",
              "Invoicing, payment tracking, and billing automation",
              "Reporting and operational analytics dashboard",
              "Notification and communication tools",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          Opygen reserves the right to modify, suspend, or discontinue any
          feature or aspect of the Platform at any time. We will provide
          reasonable notice of material changes where possible. We target 99.9%
          uptime but do not guarantee uninterrupted availability.
        </p>
      </div>
    ),
  },
  {
    id: "subscription-billing",
    index: "04",
    title: "Subscription & Billing",
    content: (
      <div className="space-y-4">
        <div className="bg-[#0a0a0a] p-5">
          <span className="block text-[10px] font-bold tracking-[0.14em] uppercase text-[#6b6b6b] mb-2">
            Billing Notice
          </span>
          <p className="text-[14px] text-[#e8e8e8] leading-relaxed">
            All subscription fees are charged in advance. By providing payment
            information, you authorize Opygen to charge you on a recurring basis
            according to your selected plan.
          </p>
        </div>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Payment Terms
          </h4>
          <ul className="space-y-2">
            {[
              "Subscription fees are billed at the start of each billing cycle (monthly or annually)",
              "All fees are non-refundable unless explicitly stated otherwise in writing",
              "Failed payments will result in a grace period of 7 days before account suspension",
              "Accounts suspended for non-payment will have data retained for 30 days",
              "Prices are subject to change with 30 days advance written notice",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Refund Policy
          </h4>
          <ul className="space-y-2">
            {[
              "Monthly subscriptions: no refunds for partial months",
              "Annual subscriptions: refunds may be considered within 14 days of initial purchase, at Opygen's discretion",
              "Refund requests must be submitted to hello@opygen.com with your account details",
              "No refunds are issued for accounts terminated due to Terms violations",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "acceptable-use",
    index: "05",
    title: "Acceptable Use Policy",
    content: (
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          You agree to use the Platform only for lawful business purposes and in
          accordance with these Terms. The following actions are strictly
          prohibited:
        </p>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Prohibited Actions
          </h4>
          <ul className="space-y-2">
            {[
              "Using the Platform for any unlawful purpose or in violation of any applicable laws",
              "Attempting to gain unauthorized access to any part of the Platform or its infrastructure",
              "Reverse engineering, decompiling, or disassembling any part of the Platform",
              "Reselling, sublicensing, or providing third-party access to the Platform without written consent",
              "Uploading or transmitting malicious code, viruses, or harmful data",
              "Collecting or harvesting user data from the Platform without authorization",
              "Impersonating any person or entity or misrepresenting your affiliation",
              "Interfering with or disrupting the integrity or performance of the Platform",
              "Using the Platform to send spam, unsolicited communications, or abusive messages",
              "Storing or transmitting any content that is illegal, defamatory, or infringes third-party rights",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          Opygen reserves the right to investigate suspected violations and may
          suspend or terminate your account without notice if we determine a
          violation has occurred.
        </p>
      </div>
    ),
  },
  {
    id: "data-ownership",
    index: "06",
    title: "Data Ownership",
    content: (
      <div className="space-y-4">
        <div className="bg-[#0a0a0a] p-5">
          <span className="block text-[10px] font-bold tracking-[0.14em] uppercase text-[#6b6b6b] mb-2">
            Your Data Commitment
          </span>
          <p className="text-[14px] text-[#e8e8e8] leading-relaxed">
            You own your data. Opygen does not claim ownership of any data,
            content, or information you submit to the Platform. Your business
            data belongs to you.
          </p>
        </div>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Your Data Rights
          </h4>
          <ul className="space-y-2">
            {[
              "You retain full ownership of all client records, job data, and business information you input",
              "You may export your data in CSV or JSON format at any time through the Platform",
              "Upon account termination, your data is retained for 30 days and then permanently deleted",
              "Opygen does not sell, share, or monetize your business data",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Opygen&apos;s Limited License
          </h4>
          <p className="text-[14px] text-[#2a2a2a] leading-relaxed">
            By submitting data to the Platform, you grant Opygen a limited,
            non-exclusive license to process and store your data solely for the
            purpose of providing the Platform services to you. This license
            terminates when you delete the data or close your account.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    index: "07",
    title: "Intellectual Property",
    content: (
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          The Platform, including all software, code, design, logos, trademarks,
          text, graphics, and other content created by Opygen, is the exclusive
          property of Opygen Operational Systems and is protected by applicable
          intellectual property laws.
        </p>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            What You May Not Do
          </h4>
          <ul className="space-y-2">
            {[
              "Copy, reproduce, or redistribute any part of the Platform or its content",
              "Use Opygen's brand name, logo, or trademarks without written permission",
              "Create derivative works based on the Platform's software or design",
              "Scrape, frame, or mirror any part of the Platform",
              "Remove or alter any proprietary notices or labels on the Platform",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          Any feedback, suggestions, or ideas you submit to us may be used by
          Opygen without obligation or compensation to you.
        </p>
      </div>
    ),
  },
  {
    id: "liability",
    index: "08",
    title: "Limitation of Liability",
    content: (
      <div className="space-y-4">
        <div className="bg-[#0a0a0a] p-5">
          <span className="block text-[10px] font-bold tracking-[0.14em] uppercase text-[#6b6b6b] mb-2">
            Important Legal Notice
          </span>
          <p className="text-[14px] text-[#e8e8e8] leading-relaxed">
            The Platform is provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, either express or
            implied, including but not limited to warranties of merchantability,
            fitness for a particular purpose, or non-infringement.
          </p>
        </div>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Opygen Is Not Liable For
          </h4>
          <ul className="space-y-2">
            {[
              "Loss of revenue, profits, or business opportunities resulting from Platform downtime or errors",
              "Data loss due to events outside our reasonable control",
              "Damages resulting from unauthorized access to your account",
              "Actions or content of third-party services integrated with the Platform",
              "Indirect, incidental, special, consequential, or punitive damages of any kind",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Liability Cap
          </h4>
          <p className="text-[14px] text-[#2a2a2a] leading-relaxed">
            To the maximum extent permitted by applicable law, Opygen&apos;s
            total cumulative liability to you for any claims arising from or
            related to these Terms or the Platform shall not exceed the total
            amount paid by you to Opygen in the three (3) months immediately
            preceding the event giving rise to the claim.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "termination",
    index: "09",
    title: "Termination",
    content: (
      <div className="space-y-4">
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Termination by You
          </h4>
          <ul className="space-y-2">
            {[
              "You may cancel your account at any time through the Platform settings or by emailing hello@opygen.com",
              "Cancellation takes effect at the end of your current billing cycle",
              "You retain access to the Platform until the end of the paid period",
              "Export your data before cancellation — data is deleted 30 days after account closure",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Termination by Opygen
          </h4>
          <ul className="space-y-2">
            {[
              "We may suspend or terminate your account immediately for material breach of these Terms",
              "We may terminate accounts with 30 days notice for any other reason",
              "Upon termination for cause, no refunds will be issued",
              "We will attempt to notify you via your registered email before termination where feasible",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          Sections relating to data ownership, intellectual property, limitation
          of liability, and governing law shall survive any termination of these
          Terms.
        </p>
      </div>
    ),
  },
  {
    id: "governing-law",
    index: "10",
    title: "Governing Law & Disputes",
    content: (
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          These Terms shall be governed by and construed in accordance with the
          laws of Bangladesh, without regard to its conflict of law provisions.
        </p>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#0a0a0a] mb-3">
            Dispute Resolution Process
          </h4>
          <ul className="space-y-2">
            {[
              "Step 1 — Informal Resolution: Contact us at hello@opygen.com. We will attempt to resolve the dispute within 30 days.",
              "Step 2 — Mediation: If informal resolution fails, both parties agree to attempt mediation before pursuing legal action.",
              "Step 3 — Jurisdiction: Any unresolved disputes shall be subject to the exclusive jurisdiction of the competent courts of Dhaka, Bangladesh.",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          If any provision of these Terms is found to be unenforceable, the
          remaining provisions will continue in full force and effect.
        </p>
      </div>
    ),
  },
  {
    id: "changes",
    index: "11",
    title: "Changes to These Terms",
    content: (
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          We reserve the right to modify these Terms at any time. When we make
          material changes, we will notify you through:
        </p>
        <div className="border border-[#e8e8e8] border-l-[3px] border-l-[#0a0a0a] bg-[#f6f6f6] p-5">
          <ul className="space-y-2">
            {[
              "A prominent notice displayed on the Platform dashboard",
              "An email to the primary account holder at least 14 days before changes take effect",
              "An updated 'Last Updated' date at the top of this page",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] text-[#2a2a2a] leading-relaxed flex items-start gap-3 border-b border-[#e8e8e8] pb-2 last:border-none last:pb-0"
              >
                <span className="text-[#6b6b6b] text-[12px] mt-0.5 shrink-0">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          Your continued use of the Platform after the effective date of the
          revised Terms constitutes your acceptance. If you do not agree to the
          revised Terms, you must stop using the Platform and cancel your
          account before the effective date.
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    index: "12",
    title: "Contact Us",
    content: (
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-[#2a2a2a]">
          If you have any questions, concerns, or requests regarding these Terms
          of Service, please reach out to us:
        </p>
        <div className="border border-[#e8e8e8] overflow-hidden">
          {[
            { label: "Entity", value: "Opygen Operational Systems" },
            { label: "Email", value: "hello@opygen.com", isLink: true },
            { label: "Location", value: "Dhaka, Bangladesh" },
            {
              label: "Response Time",
              value: "Within 24 hours for general inquiries",
            },
          ].map((row, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-5 py-4 border-b border-[#e8e8e8] last:border-none"
            >
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#6b6b6b] min-w-[110px] pt-0.5 shrink-0">
                {row.label}
              </span>
              {row.isLink ? (
                <a
                  href={`mailto:${row.value}`}
                  className="text-[14px] text-[#0a0a0a] font-semibold underline underline-offset-2 hover:text-[#6b6b6b] transition-colors"
                >
                  {row.value}
                </a>
              ) : (
                <span className="text-[14px] text-[#2a2a2a]">{row.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState<string>("acceptance");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      for (const section of sections) {
        const el = sectionRefs.current[section.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] antialiased font-sans">
      {/* ── Progress Bar ── */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#0a0a0a] z-[100] transition-[width] duration-100"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-[#e8e8e8] bg-white/95 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#0a0a0a] no-underline"
          >
            Opygen{" "}
            <span className="text-[#6b6b6b] font-normal">
              / Terms of Service
            </span>
          </Link>
          <span className="text-[11px] text-[#6b6b6b] tracking-[0.06em] uppercase">
            Effective {EFFECTIVE_DATE}
          </span>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 border-b border-[#e8e8e8]">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#e8e8e8] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] block" />
          <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#6b6b6b]">
            Legal Documentation
          </span>
        </div>

        <h1 className="text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.03em] leading-[1.0] text-[#0a0a0a] mb-6">
          Terms of <br />
          <span className="text-[#6b6b6b]">Service</span>
        </h1>

        <div className="flex flex-wrap gap-8 mb-6">
          {[
            { label: "Last Updated", value: LAST_UPDATED },
            { label: "Effective Date", value: EFFECTIVE_DATE },
            { label: "Version", value: "v1.0" },
            { label: "Jurisdiction", value: "Bangladesh" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#6b6b6b]">
                {item.label}
              </span>
              <span className="text-[13px] font-semibold text-[#0a0a0a]">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 border border-[#e8e8e8] px-4 py-2 text-[10px] font-bold tracking-[0.1em] uppercase text-[#6b6b6b]">
          <span>📋</span>
          <span>
            Binding agreement — please read carefully before using the platform
          </span>
        </div>
      </div>

      {/* ── Body Layout ── */}
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[240px_1fr]">
        {/* ── Sidebar Nav (desktop) ── */}
        <nav
          className="hidden lg:block sticky top-[80px] self-start py-12 border-r border-[#e8e8e8] pr-0"
          aria-label="Terms sections"
        >
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#6b6b6b] mb-5 pr-6">
            Contents
          </p>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              aria-current={activeSection === s.id ? "true" : undefined}
              className={[
                "flex items-center gap-3 w-full text-left pr-6 py-2.5 border-r-2 transition-all duration-200",
                activeSection === s.id
                  ? "border-r-[#0a0a0a]"
                  : "border-r-transparent",
              ].join(" ")}
            >
              <span
                className={[
                  "text-[10px] font-bold tracking-[0.08em] min-w-[22px] transition-colors duration-200 font-[tabular-nums]",
                  activeSection === s.id ? "text-[#0a0a0a]" : "text-[#e8e8e8]",
                ].join(" ")}
              >
                {s.index}
              </span>
              <span
                className={[
                  "text-[12px] transition-colors duration-200 tracking-[-0.01em]",
                  activeSection === s.id
                    ? "text-[#0a0a0a] font-semibold"
                    : "text-[#6b6b6b] font-medium",
                ].join(" ")}
              >
                {s.title}
              </span>
            </button>
          ))}
        </nav>

        {/* ── Main Content ── */}
        <main className="py-12 lg:pl-16">
          {/* Mobile TOC */}
          <div className="lg:hidden bg-[#f6f6f6] border border-[#e8e8e8] p-5 mb-10">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#6b6b6b] mb-3">
              Contents
            </p>
            <div className="flex flex-col">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="flex items-center gap-3 text-left py-2 border-b border-[#e8e8e8] last:border-none"
                >
                  <span className="text-[10px] font-bold text-[#6b6b6b] min-w-[22px]">
                    {s.index}
                  </span>
                  <span className="text-[13px] font-medium text-[#0a0a0a]">
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sections */}
          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              ref={(el) => {
                sectionRefs.current[s.id] = el;
              }}
              className="pb-[72px] border-b border-[#e8e8e8] mb-[72px] last:border-none last:mb-0 animate-[fadeUp_0.6s_cubic-bezier(0.16,1,0.3,1)_both]"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[11px] font-bold tracking-[0.1em] text-[#e8e8e8] min-w-[24px] tabular-nums">
                  {s.index}
                </span>
                <h2 className="text-[clamp(20px,2.5vw,28px)] font-bold tracking-[-0.025em] text-[#0a0a0a] m-0">
                  {s.title}
                </h2>
              </div>
              {s.content}
            </section>
          ))}
        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-[#e8e8e8] max-w-[1280px] mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[12px] text-[#6b6b6b]">
          © 2026 Opygen Operational Systems · Dhaka, Bangladesh ·{" "}
          <a
            href="mailto:hello@opygen.com"
            className="hover:text-[#0a0a0a] transition-colors"
          >
            hello@opygen.com
          </a>
        </p>
        <div className="flex gap-6">
          <a
            href="/privacypolicy"
            className="text-[12px] text-[#6b6b6b] no-underline font-medium hover:text-[#0a0a0a] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/termsofservice"
            className="text-[12px] text-[#0a0a0a] no-underline font-bold"
          >
            Terms of Service
          </a>
          <Link
            href="/"
            className="text-[12px] text-[#6b6b6b] no-underline font-medium hover:text-[#0a0a0a] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </footer>

      {/* ── Keyframe for fade-up animation ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
