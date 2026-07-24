"use client";

import { useRef } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { marketingButton } from "@/lib/marketing-button";
import { servicePages, ServicePage } from "@/src/data/service-pages";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ServiceCardProps {
  service: ServicePage;
  i: number;
  total: number;
  progress: MotionValue<number>;
}

function ServiceCard({ service, i, total, progress }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track individual card scroll for subtle inner image scale
  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(cardScroll, [0, 1], [1.2, 1]);

  // Target scale for card depth as upper cards slide over it
  const targetScale = 1 - (total - i) * 0.025;
  const startRange = i / total;
  const scale = useTransform(progress, [startRange, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full max-w-[1140px] mx-auto mb-10 origin-top"
      style={{
        top: `calc(90px + ${i * 20}px)`,
        zIndex: i + 10,
      }}
    >
      <motion.div
        style={{ scale }}
        className="group relative flex flex-col w-full rounded-2xl md:rounded-3xl bg-white border border-gray-100/90 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.09)] transition-shadow duration-500 overflow-hidden"
      >
        {/* Subtle accent background glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 0% 0%, ${service.accentSoft}60 0%, transparent 65%)`,
          }}
        />

        <div className="relative flex flex-col md:flex-row gap-6 lg:gap-10 p-4 md:p-6 lg:p-7">
          {/* Left: Image Area */}
          <div className="w-full md:w-[46%] bg-[#F8F9FA] rounded-xl md:rounded-2xl overflow-hidden relative h-[220px] sm:h-[260px] md:h-[340px] flex-shrink-0 group/image">
            <motion.div
              className="w-full h-full relative overflow-hidden"
              style={{ scale: imageScale }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                unoptimized
                className="object-cover"
              />
            </motion.div>

            {/* Floating badge over image */}
            <div className="absolute top-5 left-5 md:top-6 md:left-6 z-10">
              <div
                className="backdrop-blur-md bg-white/90 border text-gray-900 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-2xs transition-colors duration-300"
                style={{ borderColor: `${service.accent}35` }}
              >
                {service.badge}
              </div>
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="w-full md:w-[54%] py-2 md:py-3 pr-2 lg:pr-6 flex flex-col justify-center">
            <div className="mb-4">
              <h3 className="text-[24px] lg:text-[30px] font-bold text-gray-900 leading-[1.15] mb-2.5 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[14px] lg:text-[15.5px] leading-relaxed max-w-[98%]">
                {service.shortDesc}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-5">
              {service.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5 group/feature">
                  <div
                    className="flex items-center justify-center w-5 h-5 rounded-full transition-colors duration-300 shrink-0 mt-0.5 shadow-2xs"
                    style={{ backgroundColor: service.accentSoft || "#EFF6FF" }}
                  >
                    <Check
                      className="w-3 h-3 transition-colors duration-300"
                      style={{ color: service.accent || "#2563EB" }}
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-[13.5px] font-semibold text-gray-700 group-hover/feature:text-gray-900 transition-colors duration-300 leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`/services/${service.slug}`}
                className={marketingButton("group/btn inline-flex items-center gap-2")}
              >
                <span>{service.button}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white font-space-grotesk pt-16 lg:pt-24 pb-24"
    >
      {/* Header */}
      <div className="w-full px-4 mb-14">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 mb-6 leading-tight"
          >
            What we build <br className="hidden sm:block md:hidden" /> for
            businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[17px] md:text-lg text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            From websites to apps, marketing, and automation, Opygen helps
            service businesses create the digital foundation they need to grow.
          </motion.p>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-20">
        {servicePages.map((service, i) => (
          <ServiceCard
            key={service.slug}
            service={service}
            i={i}
            total={servicePages.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}



