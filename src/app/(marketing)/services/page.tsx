"use client";

import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  title: string;
  slug: string;
  badge: string;
  desc: string;
  features: string[];
  image: string;
  accent: string;
  accentSoft: string;
};

const detailedServices: Service[] = [
  {
    title: "Website Development",
    slug: "website-development",
    badge: "Digital Storefronts",
    desc: "Modern websites built to convert visitors into leads and booked calls. We combine stunning aesthetics with high-performance engineering to create digital storefronts that rank well on search engines and drive real business results.",
    features: [
      "Custom Business Websites",
      "High-Conversion Landing Pages",
      "Booking & Scheduling Pages",
      "Advanced SEO Architecture",
      "Lightning-Fast Frontend",
      "Flawless Mobile Design",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    accent: "#F24202",
    accentSoft: "#FFD6C7",
  },
  {
    title: "App Development",
    slug: "app-development",
    badge: "Custom Solutions",
    desc: "Custom web and mobile apps designed to streamline your business operations and provide seamless experiences for your clients. We build scalable software that grows with you.",
    features: [
      "Secure Client Portals",
      "Powerful Admin Dashboards",
      "Custom Booking Apps",
      "Internal Operational Tools",
      "Bespoke CRM Systems",
      "Native-feel Mobile Interfaces",
    ],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    accent: "#6D5DFB",
    accentSoft: "#DDD9FF",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    badge: "Growth Engine",
    desc: "Data-driven marketing systems designed to bring qualified leads and aggressively improve conversions. We build comprehensive lead funnels that capture attention and turn prospects into paying customers.",
    features: [
      "Meta (Facebook/IG) Ads",
      "Google Search & Display Ads",
      "Optimized Landing Pages",
      "Automated Lead Funnels",
      "Strategic Content Planning",
      "Advanced Conversion Tracking",
    ],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80",
    accent: "#F59E0B",
    accentSoft: "#FDE9B8",
  },
  {
    title: "Automation & CRM",
    slug: "automation-crm",
    badge: "Operational Efficiency",
    desc: "Smart automations that save hours of time, eliminate manual data entry, and keep your business operations perfectly organized. We implement systems that handle the heavy lifting.",
    features: [
      "Instant Lead Follow-ups",
      "Automated Appointment Reminders",
      "Full CRM Implementation",
      "Custom Workflow Automation",
      "Seamless Payment Flows",
      "Staff & Client Syncing",
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    accent: "#1D745C",
    accentSoft: "#CDE9D8",
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    badge: "Product Engineering",
    desc: "We partner with visionary founders to design and build scalable SaaS products from initial idea to MVP, launch, and continuous growth. Focus on your market, we handle the tech.",
    features: [
      "Comprehensive Product Strategy",
      "Rapid MVP Development",
      "Robust Subscription Systems",
      "Intuitive Dashboard Design",
      "Complex User Role Management",
      "Secure Admin Panels",
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    accent: "#E95482",
    accentSoft: "#F9D3E0",
  },
];

const partnershipSteps = [
  {
    number: "01",
    title: "Find the signal",
    description:
      "We start with the business problem, the people you need to reach, and the opportunity worth pursuing.",
  },
  {
    number: "02",
    title: "Build with intent",
    description:
      "Strategy, design, and technology work together to create an experience that is useful and ready to grow.",
  },
  {
    number: "03",
    title: "Keep moving",
    description:
      "After launch, we keep improving the systems, campaigns, and product decisions that create momentum.",
  },
];

function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const isDark = index % 2 !== 0;

  return (
    <motion.section
      id={service.slug}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-28"
    >
      <div
        className={`relative overflow-hidden rounded-[2rem] p-3 shadow-[0_22px_60px_rgba(17,17,17,0.08)] sm:rounded-[2.5rem] sm:p-4 lg:p-5 ${
          isDark ? "bg-[#111111]" : "border border-black/10 bg-white"
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: service.accent, opacity: isDark ? 0.3 : 0.12 }}
        />
        <div
          className={`relative grid gap-8 rounded-[1.4rem] p-4 sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-10 ${
            isDark ? "border border-white/10 bg-white/[0.04]" : "bg-[#F7F7F4]"
          }`}
        >
          <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
            <div
              className="inline-flex rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em]"
              style={{ backgroundColor: service.accentSoft, color: "#111111" }}
            >
              {service.badge}
            </div>
            <p className={`mt-7 text-[10px] font-bold uppercase tracking-[0.16em] ${isDark ? "text-white/45" : "text-[#777777]"}`}>
              0{index + 1} / 05
            </p>
            <h2
              className={`mt-3 text-4xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-5xl lg:text-6xl ${
                isDark ? "text-white" : "text-[#111111]"
              }`}
            >
              {service.title}
            </h2>
            <p className={`mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${isDark ? "text-white/68" : "text-[#626262]"}`}>
              {service.desc}
            </p>

            <div className="mt-8 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className={`flex items-start gap-2.5 text-sm font-semibold leading-5 ${isDark ? "text-white/85" : "text-[#282828]"}`}>
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: service.accentSoft, color: "#111111" }}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className={`group mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                isDark
                  ? "bg-[#D9FF5B] text-[#111111] focus-visible:outline-white"
                  : "bg-[#111111] text-white focus-visible:outline-[#F24202]"
              }`}
            >
              Start this project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className={`relative ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-[#222222] shadow-[0_18px_44px_rgba(17,17,17,0.2)]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                  {service.badge}
                </span>
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#111111]"
                  style={{ backgroundColor: service.accentSoft }}
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#F7F7F4] font-space-grotesk text-[#111111] selection:bg-[#FFD6C7]">
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-28">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
          <div aria-hidden="true" className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#D9FF5B]/60 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-28 top-0 h-[30rem] w-[30rem] rounded-full bg-[#FFD6C7]/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B4B4B] shadow-[0_10px_24px_rgba(17,17,17,0.05)]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D9FF5B] text-[#111111]">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                </span>
                Comprehensive Expertise
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="mt-7 text-[3.5rem] font-semibold leading-[0.91] tracking-[-0.075em] sm:text-7xl lg:text-[5.85rem]"
              >
                Digital solutions for{" "}
                <span className="relative inline-block whitespace-nowrap text-[#F24202]">
                  rapid growth
                  <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-[#FFD6C7] sm:h-3" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-8 max-w-xl text-base leading-7 text-[#626262] sm:text-lg sm:leading-8"
              >
                Explore our suite of services designed to transform your operations, elevate your brand, and accelerate your digital success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href="#service-directory"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_32px_rgba(17,17,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F24202] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]"
                >
                  Explore our services
                  <ArrowDownIcon />
                </Link>
                <Link
                  href="/#contact"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#222222] transition duration-300 hover:border-black/25 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative mx-auto w-full max-w-[660px] lg:justify-self-end"
            >
              <div aria-hidden="true" className="absolute -left-5 top-[15%] hidden h-28 w-28 rounded-full border border-black/10 bg-white/65 sm:block" />
              <div aria-hidden="true" className="absolute -right-3 -top-5 h-20 w-20 rounded-[1.5rem] bg-[#F24202] sm:-right-7 sm:-top-7 sm:h-28 sm:w-28" />
              <div className="relative overflow-hidden rounded-[2rem] bg-[#111111] p-3 shadow-[0_35px_80px_rgba(17,17,17,0.22)] sm:rounded-[2.5rem] sm:p-4">
                <div className="relative overflow-hidden rounded-[1.45rem] bg-[#202020] p-5 text-white sm:rounded-[1.9rem] sm:p-7">
                  <div aria-hidden="true" className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#F24202]/70 blur-3xl" />
                  <div aria-hidden="true" className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#D9FF5B]/60 blur-3xl" />
                  <div className="relative flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
                    <span>Opygen services</span>
                    <span className="flex items-center gap-2 text-[#D9FF5B]">
                      <span className="h-2 w-2 rounded-full bg-[#D9FF5B]" />
                      Built for momentum
                    </span>
                  </div>
                  <div className="relative mt-6 space-y-2">
                    {detailedServices.map((service, index) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.07] p-3.5 backdrop-blur-sm transition-colors hover:bg-white/[0.13]"
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="text-[10px] font-bold text-[#D9FF5B]">0{index + 1}</span>
                          <span className="truncate text-sm font-semibold">{service.title}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-white/65 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="service-directory" className="scroll-mt-24 border-y border-black/10 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <header className="grid gap-7 border-b border-black/10 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F24202]">Our capabilities</p>
                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-5xl lg:text-[4rem]">
                  One team for the work that moves your business forward.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#626262] sm:text-lg sm:leading-8 lg:justify-self-end">
                Choose one focused engagement or combine the capabilities you need to create a complete growth system.
              </p>
            </header>

            <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {detailedServices.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative min-h-60 overflow-hidden rounded-2xl border border-black/10 bg-[#F7F7F4] p-5 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl"
                    style={{ backgroundColor: service.accent, opacity: 0.28 }}
                  />
                  <div className="relative flex h-full flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#777777]">0{index + 1}</span>
                    <h3 className="mt-7 text-2xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#111111]">
                      {service.title}
                    </h3>
                    <span className="mt-auto flex items-center justify-between border-t border-black/10 pt-4 text-xs font-semibold text-[#555555]">
                      {service.badge}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div aria-hidden="true" className="absolute -left-24 bottom-4 h-72 w-72 rounded-full bg-[#FFD6C7]/55 blur-3xl" />
          <div className="relative mx-auto max-w-[1400px]">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B4B4B]">How we partner</p>
                <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-5xl lg:text-[4rem]">
                  Ambitious work needs a clear way forward.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#626262] sm:text-lg sm:leading-8 lg:justify-self-end">
                We bring the right disciplines together at the right moment, so every decision connects to a bigger business outcome.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {partnershipSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_32px_rgba(17,17,17,0.04)] sm:p-7"
                >
                  <span className="text-sm font-semibold text-[#F24202]">{step.number}</span>
                  <h3 className="mt-10 text-3xl font-semibold leading-[0.98] tracking-[-0.055em]">{step.title}</h3>
                  <p className="mt-5 text-[15px] leading-7 text-[#626262]">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <div className="mx-auto max-w-[1400px] space-y-6">
            {detailedServices.map((service, index) => (
              <ServiceDetail key={service.slug} service={service} index={index} />
            ))}
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2.25rem] bg-[#111111] px-7 py-12 text-center shadow-[0_30px_70px_rgba(17,17,17,0.2)] sm:px-10 sm:py-16 lg:rounded-[3rem] lg:py-20">
            <div aria-hidden="true" className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#F24202]/60 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-[#D9FF5B]/35 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-[#D9FF5B]" aria-hidden="true" />
                Ready when you are
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build the next move your business needs.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Tell us where you want to go. We&apos;ll help you find the clearest path to get there.
              </p>
              <Link
                href="/#contact"
                className="group mt-9 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#D9FF5B] px-6 py-3.5 text-sm font-semibold text-[#111111] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ArrowDownIcon() {
  return (
    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}
