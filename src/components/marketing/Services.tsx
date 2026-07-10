"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    slug: "website-development",
    badge: "Service",
    desc: "Modern websites built to convert visitors into leads and booked calls.",
    features: [
      "Business websites",
      "Landing pages",
      "Booking-focused pages",
      "SEO-friendly structure",
      "Fast-loading frontend",
      "Mobile responsive design",
    ],
    button: "Build My Website",
    image: "/services/website-development.jpeg",
  },
  {
    title: "App Development",
    slug: "app-development",
    badge: "Service",
    desc: "Custom web and mobile apps for business operations, client portals, and dashboards.",
    features: [
      "Client portals",
      "Admin dashboards",
      "Booking apps",
      "Internal tools",
      "Custom CRM systems",
      "Mobile-first interfaces",
    ],
    button: "Start an App Project",
    image: "/services/app-development.jpeg",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    badge: "Service",
    desc: "Marketing systems designed to bring qualified leads and improve conversions.",
    features: [
      "Meta ads",
      "Google ads",
      "Landing pages",
      "Lead funnels",
      "Content strategy",
      "Conversion tracking",
      "Retargeting setup",
    ],
    button: "Grow My Business",
    image: "/services/digital-marketing.jpeg",
  },
  {
    title: "Automation & CRM Systems",
    slug: "automation-crm",
    badge: "Service",
    desc: "Automations that save time, reduce manual work, and keep business operations organized.",
    features: [
      "Lead automation",
      "Appointment reminders",
      "CRM setup",
      "Workflow automation",
      "Payment flow setup",
      "Staff and client systems",
    ],
    button: "Automate My Business",
    image: "/services/custom-crm.jpeg",
  },
  {
    title: "SaaS Product Development",
    slug: "saas-development",
    badge: "Service",
    desc: "We design and build SaaS products from idea to MVP, launch, and growth.",
    features: [
      "Product strategy",
      "MVP development",
      "Subscription systems",
      "Dashboard design",
      "User roles",
      "Admin panels",
    ],
    button: "Build My SaaS",
    image: "/services/sass-development.jpeg",
  },
];

export default function Services() {
  return (
    <section className="relative w-full bg-white font-space-grotesk pt-16 lg:pt-24 pb-0">
      {/* 
        Standard Header (Non-sticky)
      */}
      <div className="w-full px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            What we build <br className="hidden sm:block md:hidden" /> for
            businesses
          </h2>
          <p className="text-[17px] md:text-lg text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            From websites to apps, marketing, and automation, Opygen helps
            service businesses create the digital foundation they need to grow.
          </p>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 mt-12 pb-16">
        {services.map((service, index) => {
          return <ServiceCard key={index} service={service} index={index} />;
        })}
      </div>
    </section>
  );
}

const ServiceCard = ({ service, index }: any) => {
  return (
    <div
      className="sticky w-full mx-auto mb-8"
      style={{
        // Pure CSS offsets for smooth stacking.
        top: `calc(max(80px, 12vh) + ${index * 24}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-[2rem] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
      >
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 p-3">
          {/* Left: Image Area */}
          <div className="w-full md:w-[45%] bg-[#F8F9FA] rounded-[1.5rem] overflow-hidden relative h-[260px] md:h-[380px] flex-shrink-0 group">
            <motion.div
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Right: Content Area */}
          <div className="w-full md:w-[55%] py-4 lg:py-6 pr-4 lg:pr-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex justify-between items-start mb-3 gap-4"
            >
              <h3 className="text-[22px] lg:text-[28px] font-bold text-gray-900 leading-[1.2]">
                {service.title}
              </h3>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-[10px] font-bold whitespace-nowrap uppercase tracking-widest mt-1">
                {service.badge}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-gray-500 text-[14px] lg:text-[15px] leading-relaxed mb-5 max-w-[90%]"
            >
              {service.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <a
                href={`/services#${service.slug}`}
                className="inline-flex items-center gap-2 text-gray-900 font-bold text-[14px] hover:text-green-600 transition-colors duration-300 mb-6 w-max group"
              >
                <span className="border-b-[2px] border-gray-900 group-hover:border-green-600 transition-colors pb-0.5">
                  {service.button}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-auto">
              {service.features.map((feature: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + idx * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-[16px] h-[16px] text-green-500 shrink-0 mt-0.5" />
                  <span className="text-[13px] font-medium text-gray-700 leading-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
