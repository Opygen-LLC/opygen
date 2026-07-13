"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const OpygenLogo = ({ dark = false }: { dark?: boolean }) => (
  <div
    className={`flex select-none items-center gap-1.5 text-2xl font-bold tracking-tight pointer-events-none ${
      dark ? "text-white" : "text-[#111111]"
    }`}
  >
    opygen
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mb-2" aria-hidden="true">
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
    </svg>
  </div>
);

const reviews = [
  {
    id: "r1",
    type: "large-light",
    quote:
      "Working with this team has been a game-changer for our business. They helped us generate quality leads consistently, and our revenue has doubled in just six months.",
    name: "Guillermo Rauch",
    role: "CEO / Vercel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
  {
    id: "r2",
    type: "normal",
    quote:
      "This agency transformed our digital presence. Within months, leads doubled, sales increased, and we finally felt confident about our marketing.",
    name: "Sarah M",
    role: "E-commerce Owner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  },
  {
    id: "r3",
    type: "normal",
    quote:
      "We saw measurable growth after their campaigns. The team knows exactly how to target audiences and maximize every marketing dollar spent.",
    name: "Priya K",
    role: "Boutique Owner",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  },
  {
    id: "r4",
    type: "normal",
    quote:
      "Creative, professional, and results-driven. They helped us build a recognizable brand and achieve consistent conversions across multiple digital channels.",
    name: "David L",
    role: "Real Estate Consultant",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  },
  {
    id: "r5",
    type: "normal",
    quote:
      "From SEO to paid ads, everything exceeded expectations. Their expertise gave us clarity, results, and a strong foundation for sustainable growth.",
    name: "Emily W",
    role: "Fitness Coach",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&q=80",
  },
  {
    id: "r6",
    type: "normal",
    quote:
      "The team brought fresh ideas and flawless execution. Our brand visibility grew faster than expected, and customer engagement reached record highs.",
    name: "James R",
    role: "SaaS Founder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
  },
  {
    id: "r7",
    type: "large-dark",
    quote:
      "I've worked with a few agencies before, but none were this transparent and proactive. Their strategy sessions alone gave us more clarity than we've had in years.",
    name: "David L",
    role: "CEO / Beskon",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
];

type Review = (typeof reviews)[number];

function ReviewCard({ review }: { review: Review }) {
  const isLargeLight = review.type === "large-light";
  const isLargeDark = review.type === "large-dark";
  const isLarge = isLargeLight || isLargeDark;

  return (
    <article
      className={`relative flex h-full min-h-[23rem] flex-col overflow-hidden rounded-[1.75rem] border p-7 shadow-[0_16px_42px_rgba(17,17,17,0.06)] sm:p-8 ${
        isLarge
          ? isLargeDark
            ? "w-[min(88vw,35rem)] border-[#111111] bg-[#111111] text-white shadow-[0_20px_50px_rgba(17,17,17,0.18)]"
            : "w-[min(88vw,35rem)] border-black/10 bg-white/90"
          : "w-[min(84vw,25rem)] border-black/10 bg-white/90"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl ${
          isLargeDark ? "bg-[#F24202]/45" : "bg-[#D9FF5B]/40"
        }`}
      />

      <div className="relative flex items-start justify-between gap-5">
        {isLargeLight && <OpygenLogo />}
        {isLargeDark && <OpygenLogo dark />}
        {!isLarge && <span className="h-7" />}
        <Quote
          className={`h-5 w-5 shrink-0 ${isLargeDark ? "text-[#D9FF5B]" : "text-[#F24202]"}`}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      <p
        className={`relative mt-10 flex-1 leading-7 ${
          isLarge
            ? "text-xl font-semibold leading-[1.35] tracking-[-0.035em] sm:text-2xl"
            : "text-[15px]"
        }`}
      >
        {review.quote}
      </p>

      <div className="relative mt-9 flex items-center justify-between gap-5 border-t border-current/10 pt-5">
        <div>
          <p className={`text-[15px] font-semibold ${isLargeDark ? "text-white" : "text-[#111111]"}`}>
            {review.name}
          </p>
          <p className={`mt-1 text-[13px] font-medium ${isLargeDark ? "text-white/65" : "text-[#626262]"}`}>
            {review.role}
          </p>
        </div>
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#F7F7F4] shadow-[0_6px_15px_rgba(17,17,17,0.12)]">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            sizes="44px"
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  duration = 48,
}: {
  items: Review[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const loop = [...items, ...items];

  return (
    <div className="group/marquee relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F7F7F4] to-transparent sm:w-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F7F7F4] to-transparent sm:w-20"
      />

      <div
        className={`flex w-max gap-5 ${
          direction === "left" ? "animate-reviews-marquee-left" : "animate-reviews-marquee-right"
        } group-hover/marquee:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((review, index) => (
          <div key={`${review.id}-${index}`} className="shrink-0">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  const rowOne = reviews.slice(0, 4);
  const rowTwo = [...reviews.slice(4), ...reviews.slice(0, 3)];

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B4B4B] shadow-[0_8px_24px_rgba(17,17,17,0.04)]">
            Testimonial
          </p>
          <h2
            id="reviews-title"
            className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-5xl lg:text-[4rem]"
          >
            Why everyone&apos;s talking <br className="hidden sm:block" /> about our service
          </h2>
          <p className="mt-6 text-base leading-7 text-[#626262]">
            Real feedback from teams we&apos;ve helped grow.
          </p>
        </header>
      </div>

      <div className="relative mt-12 space-y-5 lg:mt-16">
        <MarqueeRow items={rowOne} direction="left" duration={42} />
        <MarqueeRow items={rowTwo} direction="right" duration={48} />
      </div>

      <style jsx global>{`
        @keyframes reviews-marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes reviews-marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-reviews-marquee-left {
          animation: reviews-marquee-left 42s linear infinite;
        }

        .animate-reviews-marquee-right {
          animation: reviews-marquee-right 48s linear infinite;
        }
      `}</style>
    </section>
  );
}
