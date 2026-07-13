"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Clock,
  Layers,
  LucideIcon,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { marketingButton } from "@/lib/marketing-button";
import LogoClean from "../../../public/logo/Opygen Clean.png";

type Product = {
  number: string;
  status: string;
  icon: LucideIcon | StaticImageData;
  name: string;
  tagline: string;
  slug: string | null;
  accent: string;
  description: string;
  features: string[];
  badge: string;
};

const products: Product[] = [
  {
    number: "/01",
    status: "Live",
    icon: LogoClean,
    name: "Opygen Clean",
    tagline: "Cleaning CRM",
    slug: "/cleaningcrm",
    accent: "#22c55e",
    description:
      "End-to-end operations platform for cleaning businesses. Schedule jobs, dispatch teams, send invoices, and give customers a portal — all in one place.",
    features: [
      "Recurring bookings & scheduling",
      "Team dispatch & GPS tracking",
      "Instant invoicing & payments",
      "Customer self-service portal",
    ],
    badge: "Available now",
  },
  {
    number: "/02",
    status: "Soon",
    icon: Zap,
    name: "Opygen Fix",
    tagline: "Maintenance CRM",
    slug: null,
    accent: "#f59e0b",
    description:
      "Work order management for property managers and maintenance technicians. Track assets, assign jobs, and keep clients informed automatically.",
    features: [
      "Technician mobile portal",
      "Asset & equipment history",
      "Preventive maintenance alerts",
      "Work order timeline",
    ],
    badge: "Q2 2027",
  },
  {
    number: "/03",
    status: "Soon",
    icon: Layers,
    name: "Opygen Grow",
    tagline: "Landscaping CRM",
    slug: null,
    accent: "#8b5cf6",
    description:
      "Route planning and seasonal crew management for lawn care operators. Handle contracts, equipment, and capacity all from one dashboard.",
    features: [
      "Optimized route planning",
      "Crew capacity management",
      "Equipment & fleet logs",
      "Seasonal contracts",
    ],
    badge: "Q3 2027",
  },
];

function isStaticImage(
  icon: LucideIcon | StaticImageData,
): icon is StaticImageData {
  return typeof (icon as StaticImageData).src === "string";
}

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 lg:py-32 bg-gray-50 font-space-grotesk overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-900 text-[13px] font-bold tracking-wide shadow-sm"
          >
            Our Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
          >
            Vertical Software, <br className="hidden md:block" /> Built to
            Operate.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[17px] leading-relaxed text-gray-500 font-medium max-w-2xl mx-auto"
          >
            Purpose-built CRMs for service operators. Each product is designed
            around real workflows — not generic templates.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => {
            const isLive = product.status === "Live";
            const isImage = isStaticImage(product.icon);

            return (
              <motion.div
                key={product.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative flex flex-col bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top: Identity & Badge */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 shadow-inner overflow-hidden">
                    {isImage ? (
                      <Image
                        src={product.icon as StaticImageData}
                        alt={product.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    ) : (
                      (() => {
                        const LucideIcon = product.icon as LucideIcon;
                        return (
                          <LucideIcon
                            className="size-6 text-gray-700"
                            strokeWidth={1.5}
                          />
                        );
                      })()
                    )}
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${product.accent}15`,
                      color: product.accent,
                    }}
                  >
                    {!isLive && <Clock className="size-3.5" />}
                    {isLive ? product.badge : `Coming ${product.badge}`}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8 flex-grow">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {product.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-500 font-medium">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-10">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-4">
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {product.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-3 text-[14px] font-semibold text-gray-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0"
                          style={{ color: product.accent }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  {isLive ? (
                    <Link
                      href={product.slug!}
                      className={marketingButton("w-full")}
                    >
                      <span>Open product</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={marketingButton("w-full opacity-60 cursor-not-allowed hover:bg-black")}
                      disabled
                    >
                      <span>Join waitlist</span>
                      <Bell className="h-3.5 w-3.5" />
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
