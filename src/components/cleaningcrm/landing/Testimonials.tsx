"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, X } from "lucide-react";

export type Testimonial = {
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  social: string;
};

export const testimonials: Testimonial[] = [
  {
    rating: 5.0,
    quote: "Always does great work. Been working with him for a few months now.",
    name: "Abdul Azeezk",
    role: "CEO & Founder",
    avatar:
      "https://i.ibb.co.com/Dg7Q3b38/630254154-122096639391258623-4022386655765851305-n.jpg",
    social: "facebook",
  },
  {
    rating: 4.0,
    quote: "Always does great work. Been working with him for a few months now.",
    name: "M. Brown",
    role: "Marketing Director",
    avatar:
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    social: "fiverr",
  },
  {
    rating: 5.0,
    quote:
      "Thumbs up for the entire team they are so professional I would recommend them for my next project. Exceptional delivery!",
    name: "Tongo Paul",
    role: "Head of Product",
    avatar:
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    social: "fiverr",
  },
  {
    rating: 5.0,
    quote: "Great work as always, highly reliable.",
    name: "Jesse Leigh",
    role: "CEO & Founder",
    avatar:
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    social: "fiverr",
  },
  {
    rating: 5.0,
    quote: "Excellent service delivery. I will definitely work with them again.",
    name: "Prayaas Suri",
    role: "Vedio Editor",
    avatar:
      "https://i.ibb.co.com/0jmNpWg1/401b0560-9ca6-4cc8-baaa-aef8b3a1cbc0.webp",
    social: "fiverr",
  },
  {
    rating: 5.0,
    quote:
      "Opygen was so easy to work with and gave us exactly the custom GPT we asked for. Very responsive and communication was great.",
    name: "Sophia Martinez",
    role: "CEO & Co-Founder",
    avatar:
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    social: "fiverr",
  },
];

export function SocialIcon({ social }: { social: string }) {
  switch (social.toLowerCase()) {
    case "facebook":
      return (
        <svg
          className="w-3.5 h-3.5 fill-[#1877F2]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "fiverr":
      return (
        <span className="inline-flex items-center justify-center bg-[#1DBF73] text-white text-[10px] font-black tracking-tighter px-1.5 py-0.5 rounded-sm leading-none">
          fi
        </span>
      );
    case "linkedin":
      return (
        <svg
          className="w-3.5 h-3.5 fill-[#0A66C2]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "upwork":
      return (
        <span className="inline-flex items-center justify-center bg-[#14A800] text-white text-[9px] font-bold tracking-tight px-1.5 py-0.5 rounded-sm leading-none">
          Up
        </span>
      );
    case "freelancer":
      return (
        <svg
          className="w-3.5 h-3.5 fill-[#29B2FE]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.086 4.5 9.97 10.378l2.901 3.123L22 4.5h-7.914zm-4.47 6.402L5.802 4.5H0l6.236 6.84-2.825 8.16 6.185-8.598z" />
        </svg>
      );
    case "x":
      return <X className="w-3.5 h-3.5 text-gray-900" strokeWidth={2} />;
    default:
      return null;
  }
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < fullStars
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
      <span className="ml-1 text-xs font-bold text-gray-700 font-mono">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

/* ─── Single card ─── */
function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 border border-border flex flex-col justify-between"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
    >
      {/* Stars & Social Badge */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <StarRating rating={item.rating} />
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100">
          <SocialIcon social={item.social} />
          <span className="text-[10px] font-semibold text-gray-600 capitalize">
            {item.social}
          </span>
        </div>
      </div>

      {/* Quote */}
      <p className="text-sm text-foreground leading-relaxed flex-1 mb-5 italic">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-slate-100 border border-border">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground leading-none">
            {item.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Marquee row ─── */
function MarqueeRow({
  items,
  direction = "left",
  speed = 40,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items, ...items];
  const totalCards = items.length;
  const totalWidth = totalCards * 340;

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5"
        style={{
          width: `${totalWidth * 3}px`,
          animation: `marquee-${direction} ${totalWidth / speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main section ─── */
export default function Testimonials() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <>
      {/* Inject keyframe animations */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div style={{ padding: "24px 12px", backgroundColor: "white" }}>
        <section
          id="testimonials"
          className="overflow-hidden rounded-[20px]"
          style={{
            background:
              "linear-gradient(138deg, #0b3d2e 0%, #145c44 30%, #1A7A5E 60%, #1f9070 85%, #17a36a 100%)",
          }}
        >
          {/* ── Header ── */}
          <div className="py-20 px-6 text-center">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center mb-6"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="7" fill="white" fillOpacity="0.9" />
                  <path
                    d="M4 7l2 2 4-4"
                    stroke="#1A7A5E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-semibold text-white tracking-wide">
                  Client Testimonials
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]"
            >
              What Agency Owners
              <br className="hidden sm:block" /> Say About Working With Us
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4 text-base max-w-md mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Honest feedback from founders & leaders who trust Opygen to run
              their digital operations every day.
            </motion.p>
          </div>

          {/* ── Marquee rows ── */}
          <div className="py-12 flex flex-col gap-5">
            <MarqueeRow items={row1} direction="left" speed={45} />
            <MarqueeRow items={row2} direction="right" speed={40} />
          </div>
        </section>
      </div>
    </>
  );
}