import type { Metadata } from "next";
import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Code2,
  Cpu,
  Globe,
  Rocket,
  ShieldCheck,
  Users,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { marketingButton, marketingButtonOnDark } from "@/lib/marketing-button";
import {
  SITE_CONFIG,
  TEAM_MEMBERS,
  generateCTOPersonSchema,
  generateOrganizationSchema,
} from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "About Opygen — Digital Oxygen for Business | Leadership & Team",
  description:
    "Learn about Opygen — Digital Oxygen for Business. Meet our leadership team: MD. Sidur Rahaman (CEO), MD. Faysal Mridha (CTO @faysaldev), Syed Mohiuddin (COO), and Mohibbullah Khan (CPO).",
  keywords: [
    "Digital Oxygen",
    "digital oxygen",
    "Digital Oxygen for Business",
    "digital oxygen for business",
    "Opygen",
    "opygen tech",
    "opygentech",
    "Opygen Tech",
    "Opygen Technology",
    "MD. Sidur Rahaman",
    "MD. Faysal Mridha",
    "@faysaldev",
    "faysaldev",
    "Syed Mohiuddin",
    "Mohibbullah Khan",
    "Software Development Company in Bangladesh",
    "Best Software Company in Bangladesh",
    "Opygen Team",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: "About Opygen — Digital Oxygen for Business | Leadership & Team",
    description:
      "Learn about Opygen — Digital Oxygen for Business. Meet our leadership team: MD. Sidur Rahaman (CEO), MD. Faysal Mridha (CTO @faysaldev), Syed Mohiuddin (COO), and Mohibbullah Khan (CPO).",
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
};

const values = [
  {
    icon: Code2,
    title: "Clean, Scalable Code",
    description:
      "We write production-grade TypeScript, Next.js, and Node.js built to scale from MVP to millions of concurrent users.",
  },
  {
    icon: Cpu,
    title: "Business Automation First",
    description:
      "Every line of code serves a business goal: eliminating manual tasks, boosting conversion rates, and optimizing ROI.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Reliability",
    description:
      "Strict type-checking, containerized microservices, Redis caching layers, and zero-downtime deployment pipelines.",
  },
  {
    icon: Rocket,
    title: "Rapid Execution",
    description:
      "We ship fast without cutting corners. Agile development sprints that keep your roadmap moving forward.",
  },
];

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema();
  const ctoSchema = generateCTOPersonSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgSchema, ctoSchema]),
        }}
      />
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#F7F7F4] font-space-grotesk text-[#111111] selection:bg-[#FFD6C7]">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-36 text-center sm:px-8 sm:pt-44 lg:px-12 lg:pb-28">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -left-28 top-28 h-80 w-80 rounded-full bg-[#D9FF5B]/60 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-12 h-[30rem] w-[30rem] rounded-full bg-[#FFD6C7]/70 blur-3xl pointer-events-none"
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F24202] shadow-[0_8px_24px_rgba(17,17,17,0.04)] backdrop-blur-sm mb-6">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Opygen — Digital Oxygen for Business
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.065em] text-[#111111] sm:text-6xl lg:text-[4.5rem] leading-[0.98]">
              Digital Oxygen for Business. We engineer software that drives growth.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#626262] sm:text-lg">
              Opygen (Opygen Tech) is a full-stack software development agency & technology partner. We combine strategic product engineering, high-conversion web platforms, and automated workflow solutions to act as digital oxygen for modern businesses.
            </p>
          </div>
        </section>

        {/* Complete Leadership & Co-Founders Team Grid */}
        <section id="team" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24 bg-white border-y border-black/10">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F7F7F4] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F24202] mb-3">
                <Users className="h-3.5 w-3.5 text-[#F24202]" />
                Leadership Team
              </div>
              <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Meet the Co-Founders of Opygen
              </h2>
              <p className="mt-4 text-base text-[#626262] font-medium max-w-xl mx-auto">
                The visionary minds driving Opygen&apos;s product design, technological architecture, and operational excellence.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="group relative flex flex-col justify-between rounded-3xl border border-black/10 bg-[#F7F7F4] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Member Image */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black/5 mb-5">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} at Opygen`}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-[#111111] leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F24202] mt-1 mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs leading-relaxed text-[#626262] font-medium mb-6">
                      {member.description}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-black/10 text-[#111111] hover:bg-[#F24202] hover:text-white hover:border-[#F24202] transition-all shadow-2xs"
                        title={`${member.name}'s Website`}
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-black/10 text-[#111111] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-2xs"
                        title={`${member.name}'s LinkedIn`}
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTO Spotlight Banner (@faysaldev) */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="relative rounded-[2.5rem] bg-[#111111] p-8 sm:p-12 text-white shadow-[0_25px_60px_rgba(17,17,17,0.18)] overflow-hidden">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#D9FF5B]/20 blur-3xl pointer-events-none" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#D9FF5B] mb-4">
                    <Terminal className="h-3.5 w-3.5" />
                    Engineering Leadership
                  </div>
                  <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl text-white">
                    Meet @faysaldev — Chief Technology Officer of Opygen
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/75 max-w-3xl">
                    Under the engineering leadership of Co-founder & CTO <strong className="text-white">MD. Faysal Mridha (@faysaldev)</strong>, Opygen designs enterprise tech stacks across Next.js, React, Node.js, TypeScript, and cloud automation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://faysaldev.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={marketingButtonOnDark("group text-sm font-semibold px-6 py-3.5")}
                  >
                    Visit @faysaldev Portfolio
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Principles */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24 bg-white border-t border-black/10">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F24202]">
                Our Engineering Core
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Why companies choose Opygen as their technology partner
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="rounded-3xl border border-black/10 bg-[#F7F7F4] p-7 shadow-2xs"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-black/10 text-[#F24202] mb-6">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-bold text-[#111111] mb-3">{v.title}</h3>
                    <p className="text-sm leading-6 text-[#626262] font-medium">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32 pt-16">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2.5rem] bg-[#111111] p-8 text-center text-white shadow-[0_30px_70px_rgba(17,17,17,0.2)] lg:p-16">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#F24202]/50 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-5xl">
                Ready to accelerate your business with Opygen?
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                Partner with @faysaldev and the Opygen leadership team to build custom software, web applications, or automated CRM systems.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className={marketingButtonOnDark("group px-8 py-4 text-base font-semibold")}
                >
                  Start Your Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
