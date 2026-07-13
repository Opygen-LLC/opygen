"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { marketingButton } from "@/lib/marketing-button";

type Service = {
  title: string;
  slug: string;
  badge: string;
  desc: string;
  features: string[];
  button: string;
  image: string;
};

const services: Service[] = [
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
    <section className="relative w-full bg-white font-space-grotesk pt-16 lg:pt-24 pb-0 overflow-hidden">
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

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
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
        className="group relative w-full rounded-[2.5rem] bg-white border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-blue-100 transition-all duration-500 overflow-hidden"
      >
        {/* Subtle gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row gap-6 lg:gap-10 p-3 md:p-4">
          {/* Left: Image Area */}
          <div className="w-full md:w-[45%] bg-[#F8F9FA] rounded-[2rem] overflow-hidden relative h-[250px] md:h-[360px] flex-shrink-0 group/image">
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
                className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
              />
              {/* Sleek overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none transition-opacity duration-500 group-hover/image:opacity-80" />
              
              {/* Floating badge over image */}
              <div className="absolute top-5 left-5 md:top-6 md:left-6">
                <div className="backdrop-blur-md bg-white/90 border border-white/50 text-gray-900 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {service.badge}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content Area */}
          <div className="w-full md:w-[55%] py-4 md:py-6 pr-4 lg:pr-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-5"
            >
              <h3 className="text-[24px] lg:text-[30px] font-bold text-gray-900 leading-[1.1] mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[14px] lg:text-[16px] leading-relaxed max-w-[95%]">
                {service.desc}
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5 mb-4">
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
                  className="flex items-start gap-2.5 group/feature"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 group-hover/feature:bg-blue-600 transition-colors duration-300 shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 text-blue-600 group-hover/feature:text-white transition-colors duration-300" strokeWidth={2.5} />
                  </div>
                  <span className="text-[13.5px] font-semibold text-gray-700 group-hover/feature:text-gray-900 transition-colors duration-300 leading-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="mt-auto pt-6"
            >
              <a
                href={`/services/${service.slug}`}
                className={marketingButton("group/btn")}
              >
                <span>{service.button}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
