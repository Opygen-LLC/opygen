// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// // ─── Types ───────────────────────────────────────────────────────────────────

// interface Section {
//   id: string;
//   index: string;
//   title: string;
//   content: React.ReactNode;
// }

// // ─── Data ────────────────────────────────────────────────────────────────────

// const LAST_UPDATED = "April 19, 2026";
// const EFFECTIVE_DATE = "April 19, 2026";

// const sections: Section[] = [
//   {
//     id: "overview",
//     index: "00",
//     title: "Overview",
//     content: (
//       <>
//         <p>
//           Opygen Operational Systems ("Opygen," "we," "us," or "our") operates
//           the Cleaning CRM platform and related services (collectively, the
//           "Platform"). This Privacy Policy explains how we collect, use,
//           disclose, and protect information about you when you access or use our
//           Platform.
//         </p>
//         <p>
//           By creating an account or using the Platform, you acknowledge that you
//           have read and understood this Privacy Policy. If you do not agree with
//           these practices, do not access or use the Platform.
//         </p>
//         <p>
//           This policy applies to two categories of users:{" "}
//           <strong>Business Clients</strong> (cleaning company owners and
//           administrators who subscribe to the Platform) and{" "}
//           <strong>End Customers</strong> (homeowners or commercial clients whose
//           data is managed within the Platform by Business Clients).
//         </p>
//       </>
//     ),
//   },
//   {
//     id: "data-collected",
//     index: "01",
//     title: "Data We Collect",
//     content: (
//       <>
//         <p>
//           We collect information in three ways: directly from you, automatically
//           through your use of the Platform, and from third-party services you
//           connect to the Platform.
//         </p>

//         <div className="policy-subsection">
//           <h4>Account & Business Data</h4>
//           <ul>
//             <li>Full name, email address, and password (hashed)</li>
//             <li>Business name, business type, and contact information</li>
//             <li>Billing address and payment method details (tokenized)</li>
//             <li>Subscription plan and transaction history</li>
//           </ul>
//         </div>

//         <div className="policy-subsection">
//           <h4>Operational Data</h4>
//           <ul>
//             <li>
//               Client records: names, addresses, service history, and scheduling
//               preferences
//             </li>
//             <li>
//               Team member profiles: names, roles, login credentials, and
//               assigned jobs
//             </li>
//             <li>
//               Job records: dispatch logs, completion status, notes, and invoices
//             </li>
//             <li>Communication logs between your team and your clients</li>
//           </ul>
//         </div>

//         <div className="policy-subsection">
//           <h4>Technical & Usage Data</h4>
//           <ul>
//             <li>IP address, browser type, and device identifiers</li>
//             <li>Pages visited, features used, and session duration</li>
//             <li>Error logs and performance diagnostics</li>
//             <li>Cookies and similar tracking technologies</li>
//           </ul>
//         </div>
//       </>
//     ),
//   },
//   {
//     id: "how-we-use",
//     index: "02",
//     title: "How We Use Your Data",
//     content: (
//       <>
//         <p>
//           We use the data we collect exclusively to operate, improve, and
//           support the Platform. We do not use your data for advertising purposes
//           and we do not sell your data to any third party.
//         </p>
//         <div className="policy-subsection">
//           <h4>Core Platform Operations</h4>
//           <ul>
//             <li>
//               Providing CRM features: scheduling, dispatching, invoicing, and
//               team management
//             </li>
//             <li>Processing payments and maintaining billing records</li>
//             <li>
//               Sending transactional notifications (job alerts, confirmations)
//             </li>
//           </ul>
//         </div>
//         <div className="policy-subsection">
//           <h4>Platform Improvement</h4>
//           <ul>
//             <li>
//               Analyzing usage patterns to improve features and performance
//             </li>
//             <li>Diagnosing technical issues and bugs</li>
//             <li>Conducting internal research and product development</li>
//           </ul>
//         </div>
//         <div className="policy-subsection">
//           <h4>Communication</h4>
//           <ul>
//             <li>Responding to support requests and inquiries</li>
//             <li>Sending important service updates and security notices</li>
//             <li>
//               Sending product updates or newsletters (you may opt out at any
//               time)
//             </li>
//           </ul>
//         </div>
//         <div className="policy-subsection">
//           <h4>Legal & Security</h4>
//           <ul>
//             <li>Detecting and preventing fraud, abuse, and security threats</li>
//             <li>Complying with applicable legal obligations</li>
//             <li>Enforcing our Terms of Service</li>
//           </ul>
//         </div>
//       </>
//     ),
//   },
//   {
//     id: "data-sharing",
//     index: "03",
//     title: "Data Sharing & Disclosure",
//     content: (
//       <>
//         <div className="policy-alert">
//           <span className="policy-alert__label">Policy Commitment</span>
//           <p>
//             Opygen does not sell, rent, or trade your personal data to any third
//             party for marketing or commercial purposes. Period.
//           </p>
//         </div>
//         <p>We may share data only in the following limited circumstances:</p>
//         <div className="policy-subsection">
//           <h4>Service Providers (Sub-processors)</h4>
//           <p>
//             We engage trusted third-party companies to help us operate the
//             Platform. These providers only access your data to perform services
//             on our behalf and are contractually obligated to protect it. This
//             includes:
//           </p>
//           <ul>
//             <li>Cloud infrastructure and hosting providers</li>
//             <li>Payment processing partners (e.g., Stripe)</li>
//             <li>Email and SMS notification services</li>
//             <li>Analytics and error-monitoring tools</li>
//           </ul>
//         </div>
//         <div className="policy-subsection">
//           <h4>Legal Requirements</h4>
//           <p>
//             We may disclose your data if required to do so by law, court order,
//             or governmental authority, or if we believe disclosure is necessary
//             to protect the rights, safety, or property of Opygen, our users, or
//             the public.
//           </p>
//         </div>
//         <div className="policy-subsection">
//           <h4>Business Transfers</h4>
//           <p>
//             In the event of a merger, acquisition, or sale of all or a portion
//             of our assets, your data may be transferred. We will notify you
//             before your data becomes subject to a different Privacy Policy.
//           </p>
//         </div>
//       </>
//     ),
//   },
//   {
//     id: "data-security",
//     index: "04",
//     title: "Data Security & Storage",
//     content: (
//       <>
//         <p>
//           Security is a core engineering principle at Opygen, not an
//           afterthought. We implement multiple layers of protection to safeguard
//           your data at rest and in transit.
//         </p>
//         <div className="policy-subsection">
//           <h4>Encryption Standards</h4>
//           <ul>
//             <li>
//               All data at rest is encrypted using <strong>AES-256</strong>{" "}
//               encryption
//             </li>
//             <li>
//               All data in transit is protected using <strong>TLS 1.3</strong>
//             </li>
//             <li>Passwords are hashed using industry-standard algorithms</li>
//             <li>Payment data is tokenized and never stored in plaintext</li>
//           </ul>
//         </div>
//         <div className="policy-subsection">
//           <h4>Access Controls</h4>
//           <ul>
//             <li>Role-based access control within your organization</li>
//             <li>
//               Opygen employee access to production data is restricted and logged
//             </li>
//             <li>Multi-factor authentication available for all accounts</li>
//           </ul>
//         </div>
//         <div className="policy-subsection">
//           <h4>Data Retention</h4>
//           <ul>
//             <li>
//               Active account data is retained for the duration of your
//               subscription
//             </li>
//             <li>
//               Upon account cancellation, data is retained for 30 days to allow
//               export, then permanently deleted
//             </li>
//             <li>
//               Billing and transaction records are retained for 7 years to comply
//               with financial regulations
//             </li>
//             <li>
//               You may request earlier deletion by contacting{" "}
//               <a href="mailto:hello@opygen.com">hello@opygen.com</a>
//             </li>
//           </ul>
//         </div>
//         <p>
//           While we implement robust security measures, no system is completely
//           immune to risk. We encourage you to use strong, unique passwords and
//           to notify us immediately if you suspect any unauthorized access to
//           your account.
//         </p>
//       </>
//     ),
//   },
//   {
//     id: "cookies",
//     index: "05",
//     title: "Cookies & Tracking",
//     content: (
//       <>
//         <p>
//           We use cookies and similar tracking technologies to operate and
//           improve the Platform. Cookies are small data files placed on your
//           device when you access the Platform.
//         </p>
//         <div className="policy-subsection">
//           <h4>Types of Cookies We Use</h4>
//           <ul>
//             <li>
//               <strong>Essential Cookies:</strong> Required for the Platform to
//               function. These include session authentication and security
//               tokens. You cannot opt out of these.
//             </li>
//             <li>
//               <strong>Functional Cookies:</strong> Remember your preferences and
//               settings (e.g., language, dashboard layout).
//             </li>
//             <li>
//               <strong>Analytics Cookies:</strong> Help us understand how the
//               Platform is used so we can improve it. These are anonymized.
//             </li>
//           </ul>
//         </div>
//         <div className="policy-subsection">
//           <h4>Managing Cookies</h4>
//           <p>
//             You can control non-essential cookies through your browser settings
//             or via the cookie preferences panel in the Platform. Note that
//             disabling certain cookies may affect Platform functionality.
//           </p>
//         </div>
//       </>
//     ),
//   },
//   {
//     id: "user-rights",
//     index: "06",
//     title: "Your Rights & Choices",
//     content: (
//       <>
//         <p>
//           Depending on your location, you may have certain rights regarding your
//           personal data. We honor these rights for all users regardless of
//           jurisdiction.
//         </p>
//         <div className="policy-subsection">
//           <h4>Rights Available to You</h4>
//           <ul>
//             <li>
//               <strong>Access:</strong> Request a copy of the personal data we
//               hold about you
//             </li>
//             <li>
//               <strong>Correction:</strong> Request correction of inaccurate or
//               incomplete data
//             </li>
//             <li>
//               <strong>Deletion:</strong> Request deletion of your personal data
//               (subject to legal retention requirements)
//             </li>
//             <li>
//               <strong>Portability:</strong> Request your data in a
//               machine-readable format (CSV or JSON)
//             </li>
//             <li>
//               <strong>Objection:</strong> Object to certain types of data
//               processing
//             </li>
//             <li>
//               <strong>Withdraw Consent:</strong> Withdraw consent for optional
//               communications at any time
//             </li>
//           </ul>
//         </div>
//         <div className="policy-subsection">
//           <h4>How to Exercise Your Rights</h4>
//           <p>
//             Submit a request to{" "}
//             <a href="mailto:hello@opygen.com">hello@opygen.com</a> with the
//             subject line "Data Rights Request." We will respond within 30 days.
//             We may need to verify your identity before processing your request.
//           </p>
//         </div>
//         <div className="policy-subsection">
//           <h4>Marketing Communications</h4>
//           <p>
//             You may opt out of marketing emails at any time by clicking
//             "Unsubscribe" in any email or by contacting us directly. You will
//             still receive essential transactional emails related to your account
//             and service.
//           </p>
//         </div>
//       </>
//     ),
//   },
//   {
//     id: "children",
//     index: "07",
//     title: "Children's Privacy",
//     content: (
//       <>
//         <p>
//           The Opygen Platform is designed for use by business professionals and
//           is not intended for, nor directed at, individuals under the age of 18.
//         </p>
//         <p>
//           We do not knowingly collect personal data from anyone under 18 years
//           of age. If we become aware that we have inadvertently collected
//           personal data from a minor, we will take immediate steps to delete
//           that information. If you believe a minor has provided us with personal
//           data, please contact us at{" "}
//           <a href="mailto:hello@opygen.com">hello@opygen.com</a>.
//         </p>
//       </>
//     ),
//   },
//   {
//     id: "changes",
//     index: "08",
//     title: "Changes to This Policy",
//     content: (
//       <>
//         <p>
//           We may update this Privacy Policy from time to time to reflect changes
//           in our practices, technology, legal requirements, or other factors. We
//           will notify you of material changes through:
//         </p>
//         <ul>
//           <li>A prominent notice on the Platform dashboard</li>
//           <li>An email to the primary account holder email address</li>
//           <li>An updated "Last Updated" date at the top of this page</li>
//         </ul>
//         <p>
//           Your continued use of the Platform after the effective date of the
//           revised policy constitutes your acceptance of the changes. If you do
//           not agree with the updated policy, you must discontinue use of the
//           Platform.
//         </p>
//       </>
//     ),
//   },
//   {
//     id: "contact",
//     index: "09",
//     title: "Contact Us",
//     content: (
//       <>
//         <p>
//           If you have any questions, concerns, or requests regarding this
//           Privacy Policy or our data practices, please contact us:
//         </p>
//         <div className="policy-contact-block">
//           <div className="policy-contact-row">
//             <span className="policy-contact-label">Entity</span>
//             <span>Opygen Operational Systems</span>
//           </div>
//           <div className="policy-contact-row">
//             <span className="policy-contact-label">Email</span>
//             <a href="mailto:hello@opygen.com">hello@opygen.com</a>
//           </div>
//           <div className="policy-contact-row">
//             <span className="policy-contact-label">Location</span>
//             <span>Dhaka, Bangladesh</span>
//           </div>
//           <div className="policy-contact-row">
//             <span className="policy-contact-label">Response Time</span>
//             <span>
//               Within 30 days for data requests; within 24 hours for general
//               inquiries
//             </span>
//           </div>
//         </div>
//       </>
//     ),
//   },
// ];

// // ─── Component ───────────────────────────────────────────────────────────────

// export default function PrivacyPolicyPage() {
//   const [activeSection, setActiveSection] = useState<string>("overview");
//   const [scrollProgress, setScrollProgress] = useState<number>(0);
//   const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

//   // Scroll progress & active section tracker
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

//       // Find active section
//       for (const section of sections) {
//         const el = sectionRefs.current[section.id];
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top <= 140) {
//             setActiveSection(section.id);
//           }
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const el = sectionRefs.current[id];
//     if (el) {
//       const top = el.getBoundingClientRect().top + window.scrollY - 100;
//       window.scrollTo({ top, behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <style>{`
//         /* ── Page Variables ── */
//         .pp-root {
//           --carbon: #0a0a0a;
//           --off-black: #1a1a1a;
//           --mid-gray: #6b6b6b;
//           --light-gray: #e8e8e8;
//           --surface: #f6f6f6;
//           --white: #ffffff;
//           --accent-green: #2d6a4f;
//           --accent-amber: #92400e;
//           font-family: "Sora", var(--font-sans, sans-serif);
//           background: var(--white);
//           color: var(--carbon);
//           -webkit-font-smoothing: antialiased;
//         }

//         /* ── Progress Bar ── */
//         .pp-progress {
//           position: fixed;
//           top: 0;
//           left: 0;
//           height: 2px;
//           background: var(--carbon);
//           z-index: 100;
//           transition: width 0.1s linear;
//         }

//         /* ── Header ── */
//         .pp-header {
//           border-bottom: 1px solid var(--light-gray);
//           padding: 20px 0;
//           position: sticky;
//           top: 0;
//           background: rgba(255,255,255,0.95);
//           backdrop-filter: blur(12px);
//           z-index: 50;
//         }
//         .pp-header-inner {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }
//         .pp-logo {
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: var(--carbon);
//           text-decoration: none;
//         }
//         .pp-logo span {
//           color: var(--mid-gray);
//           font-weight: 400;
//         }
//         .pp-header-meta {
//           font-size: 11px;
//           color: var(--mid-gray);
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//         }

//         /* ── Hero ── */
//         .pp-hero {
//           border-bottom: 1px solid var(--light-gray);
//           padding: 80px 24px 64px;
//           max-width: 1280px;
//           margin: 0 auto;
//         }
//         .pp-hero-label {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 6px 14px;
//           border: 1px solid var(--light-gray);
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: var(--mid-gray);
//           margin-bottom: 32px;
//         }
//         .pp-hero-label::before {
//           content: "";
//           width: 6px;
//           height: 6px;
//           background: var(--carbon);
//           display: block;
//           border-radius: 50%;
//         }
//         .pp-hero h1 {
//           font-size: clamp(36px, 6vw, 72px);
//           font-weight: 700;
//           letter-spacing: -0.03em;
//           line-height: 1.0;
//           margin: 0 0 24px;
//           color: var(--carbon);
//         }
//         .pp-hero h1 em {
//           font-style: normal;
//           color: var(--mid-gray);
//         }
//         .pp-hero-meta {
//           display: flex;
//           gap: 32px;
//           flex-wrap: wrap;
//         }
//         .pp-hero-meta-item {
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//         }
//         .pp-hero-meta-item label {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: var(--mid-gray);
//         }
//         .pp-hero-meta-item span {
//           font-size: 13px;
//           font-weight: 600;
//           color: var(--carbon);
//         }

//         /* ── Layout ── */
//         .pp-layout {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//           display: grid;
//           grid-template-columns: 240px 1fr;
//           gap: 0;
//           align-items: start;
//         }
//         @media (max-width: 900px) {
//           .pp-layout {
//             grid-template-columns: 1fr;
//           }
//           .pp-nav {
//             display: none;
//           }
//         }

//         /* ── Sidebar Nav ── */
//         .pp-nav {
//           position: sticky;
//           top: 80px;
//           padding: 48px 0;
//           border-right: 1px solid var(--light-gray);
//         }
//         .pp-nav-label {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: var(--mid-gray);
//           margin-bottom: 20px;
//           padding-right: 24px;
//         }
//         .pp-nav-item {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 10px 24px 10px 0;
//           cursor: pointer;
//           border: none;
//           background: none;
//           text-align: left;
//           width: 100%;
//           transition: all 0.2s ease;
//           border-right: 2px solid transparent;
//         }
//         .pp-nav-item:hover .pp-nav-title {
//           color: var(--carbon);
//         }
//         .pp-nav-item.active {
//           border-right-color: var(--carbon);
//         }
//         .pp-nav-item.active .pp-nav-index {
//           color: var(--carbon);
//         }
//         .pp-nav-item.active .pp-nav-title {
//           color: var(--carbon);
//           font-weight: 600;
//         }
//         .pp-nav-index {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           color: var(--light-gray);
//           min-width: 22px;
//           transition: color 0.2s;
//         }
//         .pp-nav-title {
//           font-size: 12px;
//           font-weight: 500;
//           color: var(--mid-gray);
//           letter-spacing: -0.01em;
//           transition: color 0.2s;
//         }

//         /* ── Content ── */
//         .pp-content {
//           padding: 48px 0 48px 64px;
//           min-height: 100vh;
//         }
//         @media (max-width: 900px) {
//           .pp-content {
//             padding: 48px 0;
//           }
//         }

//         /* ── Section ── */
//         .pp-section {
//           padding-bottom: 72px;
//           border-bottom: 1px solid var(--light-gray);
//           margin-bottom: 72px;
//           animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
//         }
//         .pp-section:last-child {
//           border-bottom: none;
//           margin-bottom: 0;
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(16px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .pp-section-header {
//           display: flex;
//           align-items: baseline;
//           gap: 16px;
//           margin-bottom: 32px;
//         }
//         .pp-section-index {
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           color: var(--light-gray);
//           min-width: 24px;
//           font-variant-numeric: tabular-nums;
//         }
//         .pp-section h2 {
//           font-size: clamp(20px, 2.5vw, 28px);
//           font-weight: 700;
//           letter-spacing: -0.025em;
//           color: var(--carbon);
//           margin: 0;
//         }

//         /* ── Body Text ── */
//         .pp-section p {
//           font-size: 15px;
//           line-height: 1.75;
//           color: #2a2a2a;
//           margin: 0 0 16px;
//         }
//         .pp-section p:last-child {
//           margin-bottom: 0;
//         }
//         .pp-section a {
//           color: var(--carbon);
//           font-weight: 600;
//           text-decoration: underline;
//           text-underline-offset: 3px;
//         }
//         .pp-section a:hover {
//           color: var(--mid-gray);
//         }
//         .pp-section ul {
//           margin: 12px 0 16px;
//           padding: 0;
//           list-style: none;
//         }
//         .pp-section ul li {
//           font-size: 15px;
//           line-height: 1.7;
//           color: #2a2a2a;
//           padding: 6px 0 6px 20px;
//           position: relative;
//           border-bottom: 1px solid var(--surface);
//         }
//         .pp-section ul li:last-child {
//           border-bottom: none;
//         }
//         .pp-section ul li::before {
//           content: "→";
//           position: absolute;
//           left: 0;
//           color: var(--mid-gray);
//           font-size: 12px;
//           top: 8px;
//         }
//         .pp-section strong {
//           font-weight: 700;
//           color: var(--carbon);
//         }

//         /* ── Subsection ── */
//         .policy-subsection {
//           background: var(--surface);
//           border: 1px solid var(--light-gray);
//           border-left: 3px solid var(--carbon);
//           padding: 20px 24px;
//           margin: 20px 0;
//         }
//         .policy-subsection h4 {
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: var(--carbon);
//           margin: 0 0 12px;
//         }
//         .policy-subsection p {
//           margin-bottom: 8px !important;
//         }
//         .policy-subsection ul {
//           margin: 8px 0 0 !important;
//         }

//         /* ── Alert ── */
//         .policy-alert {
//           background: var(--off-black);
//           color: var(--white);
//           padding: 20px 24px;
//           margin: 0 0 24px;
//           border: none;
//         }
//         .policy-alert p {
//           color: var(--light-gray) !important;
//           margin: 0 !important;
//           font-size: 14px !important;
//         }
//         .policy-alert__label {
//           display: block;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: var(--mid-gray);
//           margin-bottom: 8px;
//         }
//         .policy-alert--warning {
//           background: #1a0f00;
//           border-left: 3px solid #d97706;
//         }
//         .policy-alert--warning .policy-alert__label {
//           color: #d97706;
//         }
//         .policy-alert--warning p {
//           color: #fcd34d !important;
//         }

//         /* ── Contact Block ── */
//         .policy-contact-block {
//           border: 1px solid var(--light-gray);
//           overflow: hidden;
//           margin-top: 16px;
//         }
//         .policy-contact-row {
//           display: flex;
//           align-items: flex-start;
//           gap: 16px;
//           padding: 14px 20px;
//           border-bottom: 1px solid var(--light-gray);
//           font-size: 14px;
//         }
//         .policy-contact-row:last-child {
//           border-bottom: none;
//         }
//         .policy-contact-label {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: var(--mid-gray);
//           min-width: 110px;
//           padding-top: 2px;
//         }
//         .policy-contact-row a {
//           color: var(--carbon);
//           font-weight: 600;
//           text-decoration: underline;
//           text-underline-offset: 3px;
//         }

//         /* ── Mobile TOC ── */
//         .pp-mobile-toc {
//           display: none;
//           background: var(--surface);
//           border: 1px solid var(--light-gray);
//           padding: 16px 20px;
//           margin-bottom: 40px;
//         }
//         @media (max-width: 900px) {
//           .pp-mobile-toc {
//             display: block;
//           }
//         }
//         .pp-mobile-toc-label {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: var(--mid-gray);
//           margin-bottom: 12px;
//         }
//         .pp-mobile-toc-grid {
//           display: flex;
//           flex-direction: column;
//           gap: 2px;
//         }
//         .pp-mobile-toc-item {
//           background: none;
//           border: none;
//           text-align: left;
//           font-size: 13px;
//           font-weight: 500;
//           color: var(--carbon);
//           padding: 6px 0;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           border-bottom: 1px solid var(--light-gray);
//         }
//         .pp-mobile-toc-item:last-child { border-bottom: none; }
//         .pp-mobile-toc-item span:first-child {
//           font-size: 10px;
//           color: var(--mid-gray);
//           font-weight: 700;
//           min-width: 22px;
//         }

//         /* ── Footer ── */
//         .pp-footer {
//           border-top: 1px solid var(--light-gray);
//           padding: 40px 24px;
//           max-width: 1280px;
//           margin: 0 auto;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           flex-wrap: wrap;
//           gap: 16px;
//         }
//         .pp-footer-left {
//           font-size: 12px;
//           color: var(--mid-gray);
//         }
//         .pp-footer-right {
//           display: flex;
//           gap: 24px;
//         }
//         .pp-footer-right a {
//           font-size: 12px;
//           color: var(--mid-gray);
//           text-decoration: none;
//           font-weight: 500;
//           letter-spacing: 0.02em;
//         }
//         .pp-footer-right a:hover {
//           color: var(--carbon);
//         }
//         .pp-footer-right a.active-doc {
//           color: var(--carbon);
//           font-weight: 700;
//         }

//         /* ── Encryption Badge ── */
//         .pp-enc-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           border: 1px solid var(--light-gray);
//           padding: 6px 14px;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: var(--mid-gray);
//           margin-top: 24px;
//         }
//         .pp-enc-badge::before {
//           content: "🔒";
//           font-size: 11px;
//         }
//       `}</style>

//       <div className="pp-root">
//         {/* Progress Bar */}
//         <div
//           className="pp-progress"
//           style={{ width: `${scrollProgress}%` }}
//           role="progressbar"
//           aria-valuenow={scrollProgress}
//           aria-valuemin={0}
//           aria-valuemax={100}
//         />

//         {/* Header */}
//         <header className="pp-header">
//           <div className="pp-header-inner">
//             <Link href="/" className="pp-logo">
//               Opygen <span>/ Privacy Policy</span>
//             </Link>
//             <span className="pp-header-meta">Effective {EFFECTIVE_DATE}</span>
//           </div>
//         </header>

//         {/* Hero */}
//         <div className="pp-hero">
//           <div className="pp-hero-label">Legal Documentation</div>
//           <h1>
//             Privacy <em>&amp;</em>
//             <br />
//             Data Policy
//           </h1>
//           <div className="pp-hero-meta">
//             <div className="pp-hero-meta-item">
//               <label>Last Updated</label>
//               <span>{LAST_UPDATED}</span>
//             </div>
//             <div className="pp-hero-meta-item">
//               <label>Effective Date</label>
//               <span>{EFFECTIVE_DATE}</span>
//             </div>
//             <div className="pp-hero-meta-item">
//               <label>Version</label>
//               <span>v1.0</span>
//             </div>
//             <div className="pp-hero-meta-item">
//               <label>Encryption</label>
//               <span>AES-256</span>
//             </div>
//           </div>
//           <div className="pp-enc-badge">
//             All data protected by AES-256 encryption
//           </div>
//         </div>

//         {/* Layout */}
//         <div className="pp-layout">
//           {/* Sidebar Navigation */}
//           <nav className="pp-nav" aria-label="Policy sections">
//             <div className="pp-nav-label">Contents</div>
//             {sections.map((s) => (
//               <button
//                 key={s.id}
//                 className={`pp-nav-item ${activeSection === s.id ? "active" : ""}`}
//                 onClick={() => scrollToSection(s.id)}
//                 aria-current={activeSection === s.id ? "true" : undefined}
//               >
//                 <span className="pp-nav-index">{s.index}</span>
//                 <span className="pp-nav-title">{s.title}</span>
//               </button>
//             ))}
//           </nav>

//           {/* Main Content */}
//           <main className="pp-content">
//             {/* Mobile TOC */}
//             <div className="pp-mobile-toc" aria-label="Table of contents">
//               <div className="pp-mobile-toc-label">Contents</div>
//               <div className="pp-mobile-toc-grid">
//                 {sections.map((s) => (
//                   <button
//                     key={s.id}
//                     className="pp-mobile-toc-item"
//                     onClick={() => scrollToSection(s.id)}
//                   >
//                     <span>{s.index}</span>
//                     <span>{s.title}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Sections */}
//             {sections.map((s, i) => (
//               <section
//                 key={s.id}
//                 id={s.id}
//                 className="pp-section"
//                 ref={(el) => {
//                   sectionRefs.current[s.id] = el;
//                 }}
//                 style={{ animationDelay: `${i * 0.05}s` }}
//               >
//                 <div className="pp-section-header">
//                   <span className="pp-section-index">{s.index}</span>
//                   <h2>{s.title}</h2>
//                 </div>
//                 {s.content}
//               </section>
//             ))}
//           </main>
//         </div>

//         {/* Footer */}
//         <footer className="pp-footer">
//           <div className="pp-footer-left">
//             © 2026 Opygen Operational Systems · Dhaka, Bangladesh ·{" "}
//             <a href="mailto:hello@opygen.com">hello@opygen.com</a>
//           </div>
//           <div className="pp-footer-right">
//             <a href="/privacy-policy" className="active-doc">
//               Privacy Policy
//             </a>
//             <a href="/terms-of-service">Terms of Service</a>
//             <Link href="/">← Back to Home</Link>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

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
    id: "overview",
    index: "00",
    title: "Overview",
    content: (
      <>
        <p>
          Opygen Operational Systems (&quot;Opygen,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) operates the Cleaning CRM platform
          and related services (collectively, the &quot;Platform&quot;). This
          Privacy Policy explains how we collect, use, disclose, and protect
          information about you when you access or use our Platform.
        </p>
        <p>
          By creating an account or using the Platform, you acknowledge that you
          have read and understood this Privacy Policy. If you do not agree with
          these practices, do not access or use the Platform.
        </p>
        <p>
          This policy applies to two categories of users:{" "}
          <strong>Business Clients</strong> (cleaning company owners and
          administrators who subscribe to the Platform) and{" "}
          <strong>End Customers</strong> (homeowners or commercial clients whose
          data is managed within the Platform by Business Clients).
        </p>
      </>
    ),
  },
  {
    id: "data-collected",
    index: "01",
    title: "Data We Collect",
    content: (
      <>
        <p>
          We collect information in three ways: directly from you, automatically
          through your use of the Platform, and from third-party services you
          connect to the Platform.
        </p>
        <div className="policy-subsection">
          <h4>Account &amp; Business Data</h4>
          <ul>
            <li>Full name, email address, and password (hashed)</li>
            <li>Business name, business type, and contact information</li>
            <li>Billing address and payment method details (tokenized)</li>
            <li>Subscription plan and transaction history</li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>Operational Data</h4>
          <ul>
            <li>
              Client records: names, addresses, service history, and scheduling
              preferences
            </li>
            <li>
              Team member profiles: names, roles, login credentials, and
              assigned jobs
            </li>
            <li>
              Job records: dispatch logs, completion status, notes, and invoices
            </li>
            <li>Communication logs between your team and your clients</li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>Technical &amp; Usage Data</h4>
          <ul>
            <li>IP address, browser type, and device identifiers</li>
            <li>Pages visited, features used, and session duration</li>
            <li>Error logs and performance diagnostics</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "how-we-use",
    index: "02",
    title: "How We Use Your Data",
    content: (
      <>
        <p>
          We use the data we collect exclusively to operate, improve, and
          support the Platform. We do not use your data for advertising purposes
          and we do not sell your data to any third party.
        </p>
        <div className="policy-subsection">
          <h4>Core Platform Operations</h4>
          <ul>
            <li>
              Providing CRM features: scheduling, dispatching, invoicing, and
              team management
            </li>
            <li>Processing payments and maintaining billing records</li>
            <li>
              Sending transactional notifications (job alerts, confirmations)
            </li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>Platform Improvement</h4>
          <ul>
            <li>
              Analyzing usage patterns to improve features and performance
            </li>
            <li>Diagnosing technical issues and bugs</li>
            <li>Conducting internal research and product development</li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>Communication</h4>
          <ul>
            <li>Responding to support requests and inquiries</li>
            <li>Sending important service updates and security notices</li>
            <li>
              Sending product updates or newsletters (you may opt out at any
              time)
            </li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>Legal &amp; Security</h4>
          <ul>
            <li>Detecting and preventing fraud, abuse, and security threats</li>
            <li>Complying with applicable legal obligations</li>
            <li>Enforcing our Terms of Service</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "data-sharing",
    index: "03",
    title: "Data Sharing & Disclosure",
    content: (
      <>
        <div className="policy-alert">
          <span className="policy-alert__label">Policy Commitment</span>
          <p>
            Opygen does not sell, rent, or trade your personal data to any third
            party for marketing or commercial purposes. Period.
          </p>
        </div>
        <p>We may share data only in the following limited circumstances:</p>
        <div className="policy-subsection">
          <h4>Service Providers (Sub-processors)</h4>
          <p>
            We engage trusted third-party companies to help us operate the
            Platform. These providers only access your data to perform services
            on our behalf and are contractually obligated to protect it. This
            includes:
          </p>
          <ul>
            <li>Cloud infrastructure and hosting providers</li>
            <li>Payment processing partners (e.g., Stripe)</li>
            <li>Email and SMS notification services</li>
            <li>Analytics and error-monitoring tools</li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>Legal Requirements</h4>
          <p>
            We may disclose your data if required to do so by law, court order,
            or governmental authority, or if we believe disclosure is necessary
            to protect the rights, safety, or property of Opygen, our users, or
            the public.
          </p>
        </div>
        <div className="policy-subsection">
          <h4>Business Transfers</h4>
          <p>
            In the event of a merger, acquisition, or sale of all or a portion
            of our assets, your data may be transferred. We will notify you
            before your data becomes subject to a different Privacy Policy.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "data-security",
    index: "04",
    title: "Data Security & Storage",
    content: (
      <>
        <p>
          Security is a core engineering principle at Opygen, not an
          afterthought. We implement multiple layers of protection to safeguard
          your data at rest and in transit.
        </p>
        <div className="policy-subsection">
          <h4>Encryption Standards</h4>
          <ul>
            <li>
              All data at rest is encrypted using <strong>AES-256</strong>{" "}
              encryption
            </li>
            <li>
              All data in transit is protected using <strong>TLS 1.3</strong>
            </li>
            <li>Passwords are hashed using industry-standard algorithms</li>
            <li>Payment data is tokenized and never stored in plaintext</li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>Access Controls</h4>
          <ul>
            <li>Role-based access control within your organization</li>
            <li>
              Opygen employee access to production data is restricted and logged
            </li>
            <li>Multi-factor authentication available for all accounts</li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>Data Retention</h4>
          <ul>
            <li>
              Active account data is retained for the duration of your
              subscription
            </li>
            <li>
              Upon account cancellation, data is retained for 30 days to allow
              export, then permanently deleted
            </li>
            <li>
              Billing and transaction records are retained for 7 years to comply
              with financial regulations
            </li>
            <li>
              You may request earlier deletion by contacting{" "}
              <a href="mailto:hello@opygen.com">hello@opygen.com</a>
            </li>
          </ul>
        </div>
        <p>
          While we implement robust security measures, no system is completely
          immune to risk. We encourage you to use strong, unique passwords and
          to notify us immediately if you suspect any unauthorized access to
          your account.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    index: "05",
    title: "Cookies & Tracking",
    content: (
      <>
        <p>
          We use cookies and similar tracking technologies to operate and
          improve the Platform. Cookies are small data files placed on your
          device when you access the Platform.
        </p>
        <div className="policy-subsection">
          <h4>Types of Cookies We Use</h4>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Required for the Platform to
              function. These include session authentication and security
              tokens. You cannot opt out of these.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your preferences and
              settings (e.g., language, dashboard layout).
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how the
              Platform is used so we can improve it. These are anonymized.
            </li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>Managing Cookies</h4>
          <p>
            You can control non-essential cookies through your browser settings
            or via the cookie preferences panel in the Platform. Note that
            disabling certain cookies may affect Platform functionality.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "user-rights",
    index: "06",
    title: "Your Rights & Choices",
    content: (
      <>
        <p>
          Depending on your location, you may have certain rights regarding your
          personal data. We honor these rights for all users regardless of
          jurisdiction.
        </p>
        <div className="policy-subsection">
          <h4>Rights Available to You</h4>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of the personal data we
              hold about you
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or
              incomplete data
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal data
              (subject to legal retention requirements)
            </li>
            <li>
              <strong>Portability:</strong> Request your data in a
              machine-readable format (CSV or JSON)
            </li>
            <li>
              <strong>Objection:</strong> Object to certain types of data
              processing
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent for optional
              communications at any time
            </li>
          </ul>
        </div>
        <div className="policy-subsection">
          <h4>How to Exercise Your Rights</h4>
          <p>
            Submit a request to{" "}
            <a href="mailto:hello@opygen.com">hello@opygen.com</a> with the
            subject line &quot;Data Rights Request.&quot; We will respond within
            30 days. We may need to verify your identity before processing your
            request.
          </p>
        </div>
        <div className="policy-subsection">
          <h4>Marketing Communications</h4>
          <p>
            You may opt out of marketing emails at any time by clicking
            &quot;Unsubscribe&quot; in any email or by contacting us directly.
            You will still receive essential transactional emails related to
            your account and service.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "children",
    index: "07",
    title: "Children's Privacy",
    content: (
      <>
        <p>
          The Opygen Platform is designed for use by business professionals and
          is not intended for, nor directed at, individuals under the age of 18.
        </p>
        <p>
          We do not knowingly collect personal data from anyone under 18 years
          of age. If we become aware that we have inadvertently collected
          personal data from a minor, we will take immediate steps to delete
          that information. If you believe a minor has provided us with personal
          data, please contact us at{" "}
          <a href="mailto:hello@opygen.com">hello@opygen.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    index: "08",
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, technology, legal requirements, or other factors. We
          will notify you of material changes through:
        </p>
        <ul>
          <li>A prominent notice on the Platform dashboard</li>
          <li>An email to the primary account holder email address</li>
          <li>
            An updated &quot;Last Updated&quot; date at the top of this page
          </li>
        </ul>
        <p>
          Your continued use of the Platform after the effective date of the
          revised policy constitutes your acceptance of the changes. If you do
          not agree with the updated policy, you must discontinue use of the
          Platform.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    index: "09",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us:
        </p>
        <div className="policy-contact-block">
          <div className="policy-contact-row">
            <span className="policy-contact-label">Entity</span>
            <span>Opygen Operational Systems</span>
          </div>
          <div className="policy-contact-row">
            <span className="policy-contact-label">Email</span>
            <a href="mailto:hello@opygen.com">hello@opygen.com</a>
          </div>
          <div className="policy-contact-row">
            <span className="policy-contact-label">Location</span>
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="policy-contact-row">
            <span className="policy-contact-label">Response Time</span>
            <span>
              Within 30 days for data requests; within 24 hours for general
              inquiries
            </span>
          </div>
        </div>
      </>
    ),
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("overview");
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
    <>
      <style>{`
        .pp-root {
          --carbon: #0a0a0a;
          --off-black: #1a1a1a;
          --mid-gray: #6b6b6b;
          --light-gray: #e8e8e8;
          --surface: #f6f6f6;
          --white: #ffffff;
          font-family: "Sora", var(--font-sans, sans-serif);
          background: var(--white);
          color: var(--carbon);
          -webkit-font-smoothing: antialiased;
        }
        .pp-progress {
          position: fixed;
          top: 0; left: 0;
          height: 2px;
          background: var(--carbon);
          z-index: 100;
          transition: width 0.1s linear;
        }
        .pp-header {
          border-bottom: 1px solid var(--light-gray);
          padding: 20px 0;
          position: sticky;
          top: 0;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          z-index: 50;
        }
        .pp-header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pp-logo {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--carbon);
          text-decoration: none;
        }
        .pp-logo span { color: var(--mid-gray); font-weight: 400; }
        .pp-header-meta {
          font-size: 11px;
          color: var(--mid-gray);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .pp-hero {
          border-bottom: 1px solid var(--light-gray);
          padding: 80px 24px 64px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .pp-hero-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border: 1px solid var(--light-gray);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mid-gray);
          margin-bottom: 32px;
        }
        .pp-hero-label::before {
          content: "";
          width: 6px; height: 6px;
          background: var(--carbon);
          display: block;
          border-radius: 50%;
        }
        .pp-hero h1 {
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.0;
          margin: 0 0 24px;
          color: var(--carbon);
        }
        .pp-hero h1 em { font-style: normal; color: var(--mid-gray); }
        .pp-hero-meta { display: flex; gap: 32px; flex-wrap: wrap; }
        .pp-hero-meta-item { display: flex; flex-direction: column; gap: 4px; }
        .pp-hero-meta-item label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--mid-gray);
        }
        .pp-hero-meta-item span {
          font-size: 13px;
          font-weight: 600;
          color: var(--carbon);
        }
        .pp-layout {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 240px 1fr;
          align-items: start;
        }
        @media (max-width: 900px) {
          .pp-layout { grid-template-columns: 1fr; }
          .pp-nav { display: none; }
        }
        .pp-nav {
          position: sticky;
          top: 80px;
          padding: 48px 0;
          border-right: 1px solid var(--light-gray);
        }
        .pp-nav-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mid-gray);
          margin-bottom: 20px;
          padding-right: 24px;
        }
        .pp-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 24px 10px 0;
          cursor: pointer;
          border: none;
          background: none;
          text-align: left;
          width: 100%;
          transition: all 0.2s ease;
          border-right: 2px solid transparent;
        }
        .pp-nav-item:hover .pp-nav-title { color: var(--carbon); }
        .pp-nav-item.active { border-right-color: var(--carbon); }
        .pp-nav-item.active .pp-nav-index { color: var(--carbon); }
        .pp-nav-item.active .pp-nav-title { color: var(--carbon); font-weight: 600; }
        .pp-nav-index {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--light-gray);
          min-width: 22px;
          transition: color 0.2s;
        }
        .pp-nav-title {
          font-size: 12px;
          font-weight: 500;
          color: var(--mid-gray);
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .pp-content {
          padding: 48px 0 48px 64px;
          min-height: 100vh;
        }
        @media (max-width: 900px) {
          .pp-content { padding: 48px 0; }
        }
        .pp-section {
          padding-bottom: 72px;
          border-bottom: 1px solid var(--light-gray);
          margin-bottom: 72px;
          animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        .pp-section:last-child { border-bottom: none; margin-bottom: 0; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pp-section-header {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 32px;
        }
        .pp-section-index {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--light-gray);
          min-width: 24px;
          font-variant-numeric: tabular-nums;
        }
        .pp-section h2 {
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: var(--carbon);
          margin: 0;
        }
        .pp-section p {
          font-size: 15px;
          line-height: 1.75;
          color: #2a2a2a;
          margin: 0 0 16px;
        }
        .pp-section p:last-child { margin-bottom: 0; }
        .pp-section a {
          color: var(--carbon);
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .pp-section a:hover { color: var(--mid-gray); }
        .pp-section ul {
          margin: 12px 0 16px;
          padding: 0;
          list-style: none;
        }
        .pp-section ul li {
          font-size: 15px;
          line-height: 1.7;
          color: #2a2a2a;
          padding: 6px 0 6px 20px;
          position: relative;
          border-bottom: 1px solid var(--surface);
        }
        .pp-section ul li:last-child { border-bottom: none; }
        .pp-section ul li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--mid-gray);
          font-size: 12px;
          top: 8px;
        }
        .pp-section strong { font-weight: 700; color: var(--carbon); }
        .policy-subsection {
          background: var(--surface);
          border: 1px solid var(--light-gray);
          border-left: 3px solid var(--carbon);
          padding: 20px 24px;
          margin: 20px 0;
        }
        .policy-subsection h4 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--carbon);
          margin: 0 0 12px;
        }
        .policy-subsection p { margin-bottom: 8px !important; }
        .policy-subsection ul { margin: 8px 0 0 !important; }
        .policy-alert {
          background: var(--off-black);
          color: var(--white);
          padding: 20px 24px;
          margin: 0 0 24px;
        }
        .policy-alert p {
          color: var(--light-gray) !important;
          margin: 0 !important;
          font-size: 14px !important;
        }
        .policy-alert__label {
          display: block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mid-gray);
          margin-bottom: 8px;
        }
        .policy-contact-block {
          border: 1px solid var(--light-gray);
          overflow: hidden;
          margin-top: 16px;
        }
        .policy-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 14px 20px;
          border-bottom: 1px solid var(--light-gray);
          font-size: 14px;
          color: #2a2a2a;
        }
        .policy-contact-row:last-child { border-bottom: none; }
        .policy-contact-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--mid-gray);
          min-width: 110px;
          padding-top: 2px;
          flex-shrink: 0;
        }
        .policy-contact-row a {
          color: var(--carbon);
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .pp-mobile-toc {
          display: none;
          background: var(--surface);
          border: 1px solid var(--light-gray);
          padding: 16px 20px;
          margin-bottom: 40px;
        }
        @media (max-width: 900px) {
          .pp-mobile-toc { display: block; }
        }
        .pp-mobile-toc-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mid-gray);
          margin-bottom: 12px;
        }
        .pp-mobile-toc-grid { display: flex; flex-direction: column; gap: 2px; }
        .pp-mobile-toc-item {
          background: none;
          border: none;
          text-align: left;
          font-size: 13px;
          font-weight: 500;
          color: var(--carbon);
          padding: 6px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid var(--light-gray);
        }
        .pp-mobile-toc-item:last-child { border-bottom: none; }
        .pp-mobile-toc-item span:first-child {
          font-size: 10px;
          color: var(--mid-gray);
          font-weight: 700;
          min-width: 22px;
        }
        .pp-footer {
          border-top: 1px solid var(--light-gray);
          padding: 40px 24px;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .pp-footer-left { font-size: 12px; color: var(--mid-gray); }
        .pp-footer-left a { color: var(--mid-gray); }
        .pp-footer-left a:hover { color: var(--carbon); }
        .pp-footer-right { display: flex; gap: 24px; }
        .pp-footer-right a {
          font-size: 12px;
          color: var(--mid-gray);
          text-decoration: none;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        .pp-footer-right a:hover { color: var(--carbon); }
        .pp-footer-right a.active-doc { color: var(--carbon); font-weight: 700; }
        .pp-enc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--light-gray);
          padding: 6px 14px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--mid-gray);
          margin-top: 24px;
        }
        .pp-enc-badge::before { content: "🔒"; font-size: 11px; }
      `}</style>

      <div className="pp-root">
        {/* Progress Bar */}
        <div
          className="pp-progress"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={scrollProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />

        {/* Header */}
        <header className="pp-header">
          <div className="pp-header-inner">
            <Link href="/" className="pp-logo">
              Opygen <span>/ Privacy Policy</span>
            </Link>
            <span className="pp-header-meta">Effective {EFFECTIVE_DATE}</span>
          </div>
        </header>

        {/* Hero */}
        <div className="pp-hero">
          <div className="pp-hero-label">Legal Documentation</div>
          <h1>
            Privacy <em>&amp;</em>
            <br />
            Data Policy
          </h1>
          <div className="pp-hero-meta">
            <div className="pp-hero-meta-item">
              <label>Last Updated</label>
              <span>{LAST_UPDATED}</span>
            </div>
            <div className="pp-hero-meta-item">
              <label>Effective Date</label>
              <span>{EFFECTIVE_DATE}</span>
            </div>
            <div className="pp-hero-meta-item">
              <label>Version</label>
              <span>v1.0</span>
            </div>
            <div className="pp-hero-meta-item">
              <label>Encryption</label>
              <span>AES-256</span>
            </div>
          </div>
          <div className="pp-enc-badge">
            All data protected by AES-256 encryption
          </div>
        </div>

        {/* Layout */}
        <div className="pp-layout">
          {/* Sidebar Navigation */}
          <nav className="pp-nav" aria-label="Policy sections">
            <div className="pp-nav-label">Contents</div>
            {sections.map((s) => (
              <button
                key={s.id}
                className={`pp-nav-item${activeSection === s.id ? " active" : ""}`}
                onClick={() => scrollToSection(s.id)}
                aria-current={activeSection === s.id ? "true" : undefined}
              >
                <span className="pp-nav-index">{s.index}</span>
                <span className="pp-nav-title">{s.title}</span>
              </button>
            ))}
          </nav>

          {/* Main Content */}
          <main className="pp-content">
            {/* Mobile TOC */}
            <div className="pp-mobile-toc" aria-label="Table of contents">
              <div className="pp-mobile-toc-label">Contents</div>
              <div className="pp-mobile-toc-grid">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    className="pp-mobile-toc-item"
                    onClick={() => scrollToSection(s.id)}
                  >
                    <span>{s.index}</span>
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sections */}
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="pp-section"
                ref={(el) => {
                  sectionRefs.current[s.id] = el;
                }}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="pp-section-header">
                  <span className="pp-section-index">{s.index}</span>
                  <h2>{s.title}</h2>
                </div>
                {s.content}
              </section>
            ))}
          </main>
        </div>

        {/* Footer */}
        <footer className="pp-footer">
          <div className="pp-footer-left">
            &copy; 2026 Opygen Operational Systems &middot; Dhaka, Bangladesh
            &middot; <a href="mailto:hello@opygen.com">hello@opygen.com</a>
          </div>
          <div className="pp-footer-right">
            <a href="/privacypolicy" className="active-doc">
              Privacy Policy
            </a>
            <a href="/termsofservice">Terms of Service</a>
            <Link href="/">&#8592; Back to Home</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
