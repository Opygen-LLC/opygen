"use client";

import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import Products from "@/src/components/marketing/Products";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Megaphone,
  Settings,
  Cloud,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    icon: Monitor,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    description:
      "Modern websites built to convert visitors into leads and booked calls.",
    list: [
      "Business websites",
      "Landing pages",
      "Booking-focused pages",
      "SEO-friendly structure",
      "Fast-loading frontend",
      "Mobile responsive design",
    ],
    cta: "Build My Website",
  },
  {
    title: "App Development",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    description:
      "Custom web and mobile apps for business operations, client portals, and dashboards.",
    list: [
      "Client portals",
      "Admin dashboards",
      "Booking apps",
      "Internal tools",
      "Custom CRM systems",
      "Mobile-first interfaces",
    ],
    cta: "Start an App Project",
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    description:
      "Marketing systems designed to bring qualified leads and improve conversions.",
    list: [
      "Meta ads",
      "Google ads",
      "Landing pages",
      "Lead funnels",
      "Content strategy",
      "Conversion tracking",
      "Retargeting setup",
    ],
    cta: "Grow My Business",
  },
  {
    title: "Automation & CRM Systems",
    icon: Settings,
    color: "text-green-500",
    bg: "bg-green-500/10",
    description:
      "Automations that save time, reduce manual work, and keep business operations organized.",
    list: [
      "Lead automation",
      "Appointment reminders",
      "CRM setup",
      "Workflow automation",
      "Payment flow setup",
      "Staff and client systems",
    ],
    cta: "Automate My Business",
  },
  {
    title: "SaaS Product Development",
    icon: Cloud,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    description:
      "We design and build SaaS products from idea to MVP, launch, and growth.",
    list: [
      "Product strategy",
      "MVP development",
      "Subscription systems",
      "Dashboard design",
      "User roles",
      "Admin panels",
    ],
    cta: "Build My SaaS",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 lg:pt-40 min-h-screen bg-white font-space-grotesk overflow-hidden">
        {/* Company Overview Hero */}
        <section className="relative px-6 lg:px-8 max-w-[1400px] mx-auto mb-32">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-900 text-[13px] font-bold tracking-wide shadow-sm"
            >
              Digital Oxygen for Business 🚀
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]"
            >
              We turn ideas into <br />
              <span className="text-blue-600 font-serif italic font-normal">
                impactful
              </span>{" "}
              digital products.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium space-y-6 text-left max-w-3xl mx-auto"
            >
              <p>
                At Opygen, we empower businesses with the digital foundation
                they need to grow, scale, and lead in a competitive world. From
                building high-performance websites and mobile applications to
                developing scalable SaaS platforms.
              </p>
              <p>
                Our expertise goes beyond development. We combine strategy,
                marketing, and design to create seamless digital experiences
                that not only look great but also drive real results. Whether
                you&apos;re a startup aiming to launch or an established
                business looking to innovate, Opygen acts as your digital growth
                partner.
              </p>
              <p className="font-bold text-gray-900 text-center text-2xl pt-4">
                We believe every business deserves the right{" "}
                <span className="text-blue-600">“digital oxygen”</span> to
                thrive—and that&apos;s exactly what we deliver.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Existing Products CRM Section */}
        <Products />
      </main>
      <Footer />
    </>
  );
}
