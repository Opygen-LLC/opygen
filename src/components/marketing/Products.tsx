"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Clock,
  LucideIcon,
  Zap,
  Sparkles,
  Layers2,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import LogoClean from "../../../public/logo/Opygen Clean.png";

type Product = {
  number: string;
  status: "Live" | "Soon";
  icon: LucideIcon | StaticImageData;
  name: string;
  tagline: string;
  slug: string | null;
  description: string;
  features: string[];
  badge: string;
};

const products: Product[] = [
  {
    number: "01",
    status: "Live",
    icon: LogoClean,
    name: "Opygen Clean",
    tagline: "Cleaning Service CRM",
    slug: "/cleaningcrm",
    description:
      "End-to-end operations platform for cleaning business owners. Generate instant quotes, schedule recurring jobs, manage staff teams, and monitor financial analytics in one place.",
    features: [
      "Instant quote & estimate generator",
      "Staff management & shift scheduling",
      "Financial insights & expense tracking",
      "Recurring bookings & job management",
    ],
    badge: "Available Now",
  },
  {
    number: "02",
    status: "Soon",
    icon: Zap,
    name: "Opygen Fix",
    tagline: "Maintenance & Facility CRM",
    slug: null,
    description:
      "Work order management system for property managers and maintenance crews. Track equipment assets, assign work orders, and keep property owners updated in real time.",
    features: [
      "Technician mobile work order app",
      "Equipment & asset history logs",
      "Automated preventive maintenance alerts",
      "Real-time work order status timeline",
    ],
    badge: "Q2 2027",
  },
  {
    number: "03",
    status: "Soon",
    icon: Layers2,
    name: "Opygen Grow",
    tagline: "Lawn & Landscaping CRM",
    slug: null,
    description:
      "Route optimization and crew management suite built for lawn care operators. Manage seasonal contracts, crew capacity, and equipment logs from one central hub.",
    features: [
      "Smart route optimization engine",
      "Crew capacity & shift planner",
      "Equipment & fleet maintenance logs",
      "Seasonal contract & recurring billing",
    ],
    badge: "Q3 2027",
  },
];

function isStaticImage(
  icon: LucideIcon | StaticImageData
): icon is StaticImageData {
  return typeof (icon as StaticImageData).src === "string";
}

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="relative overflow-hidden bg-[#F7F7F4] py-16 sm:py-24 lg:py-32 font-space-grotesk border-t border-black/10 text-gray-900"
    >
      {/* Background Soft Glow Orbs */}
      <div aria-hidden="true" className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-[#FFD6C7]/60 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-[#D9FF5B]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 shadow-2xs mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 text-gray-900" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
              Our Products
            </span>
          </motion.div>

          <motion.h2
            id="products-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 leading-tight mb-4"
          >
            Vertical Software, <br className="hidden sm:block" /> Built to Operate.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Purpose-built CRMs engineered specifically for service operators. Built around real field workflows.
          </motion.p>
        </div>

        {/* CLEAN 3-COLUMN CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {products.map((product, i) => {
            const isLive = product.status === "Live";
            const isImage = isStaticImage(product.icon);

            return (
              <motion.div
                key={product.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.35 }}
                className="flex flex-col justify-between rounded-3xl border border-black/10 bg-white p-7 sm:p-8 shadow-xs hover:border-black/30 transition-all"
              >
                {/* Top Section */}
                <div>
                  
                  {/* Icon & Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7F7F4] border border-black/10 shadow-2xs">
                      {isImage ? (
                        <Image
                          src={product.icon as StaticImageData}
                          alt={product.name}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      ) : (
                        (() => {
                          const IconComponent = product.icon as LucideIcon;
                          return <IconComponent className="h-6 w-6 text-gray-900" />;
                        })()
                      )}
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider border ${
                        isLive
                          ? "bg-black/5 text-gray-900 border-black/10"
                          : "bg-black/5 text-gray-500 border-black/10"
                      }`}
                    >
                      {!isLive && <Clock className="h-3 w-3 text-gray-500" />}
                      {isLive ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          {product.badge}
                        </span>
                      ) : (
                        `Coming ${product.badge}`
                      )}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                    Product /{product.number} • {product.tagline}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3 tracking-tight">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-gray-600 font-medium mb-6">
                    {product.description}
                  </p>

                  {/* Included Features */}
                  <div className="border-t border-black/5 pt-5 mb-8 space-y-2.5">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-3">
                      Included Capabilities
                    </p>
                    {product.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-4 border-t border-black/10">
                  {isLive ? (
                    <Link
                      href={product.slug!}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#111111] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#222222] transition-all cursor-pointer"
                    >
                      <span>Open {product.name}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-100 border border-black/10 px-6 py-3.5 text-xs font-bold text-gray-400 cursor-not-allowed"
                    >
                      <span>Join Waitlist</span>
                      <Bell className="h-4 w-4" />
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
