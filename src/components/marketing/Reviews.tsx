"use client";

import Image from "next/image";
import { Star, Quote, X } from "lucide-react";

export type Review = {
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  social: string;
};

export const reviews: Review[] = [
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
      <span className="ml-1 text.xs font-bold text-gray-700 font-mono">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group relative flex flex-col justify-between h-full min-h-[220px] w-[340px] md:w-[380px] rounded-3xl bg-white border border-gray-100 p-6 md:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300">
      <div className="flex items-center justify-between gap-4 mb-4">
        <StarRating rating={review.rating} />
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100">
          <SocialIcon social={review.social} />
          <span className="text-[11px] font-semibold text-gray-600 capitalize">
            {review.social}
          </span>
        </div>
      </div>

      <p className="text-[14.5px] md:text-[15.5px] leading-relaxed text-gray-700 font-medium mb-6 flex-1 italic">
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm bg-slate-100 shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900 leading-tight">
            {review.name}
          </h4>
          <p className="text-xs font-medium text-gray-500 mt-0.5">
            {review.role}
          </p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  duration = 38,
}: {
  items: Review[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const loop = [...items, ...items, ...items];

  return (
    <div className="group/marquee relative overflow-hidden w-full py-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent"
      />

      <div
        className={`flex w-max gap-6 ${
          direction === "left"
            ? "animate-reviews-marquee-left"
            : "animate-reviews-marquee-right"
        } group-hover/marquee:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((review, index) => (
          <div key={`${review.name}-${index}`} className="shrink-0">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  const rowOne = reviews.slice(0, 3);
  const rowTwo = reviews.slice(3, 6);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="relative w-full bg-white font-space-grotesk py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-4 tracking-wide uppercase shadow-2xs">
          <Quote className="w-3.5 h-3.5 text-blue-600" />
          Wall of Love & Reviews
        </div>
        <h2
          id="reviews-title"
          className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 mb-5 leading-tight"
        >
          What clients say about <br className="hidden sm:block" /> working with Opygen
        </h2>
        <p className="text-[17px] md:text-lg text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
          Real feedback from founders, product leaders, and marketing teams who trust us to deliver.
        </p>
      </div>

      <div className="relative space-y-6">
        <MarqueeRow items={rowOne} direction="left" duration={35} />
        <MarqueeRow items={rowTwo} direction="right" duration={40} />
      </div>

      <style jsx global>{`
        @keyframes reviews-marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        @keyframes reviews-marquee-right {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-reviews-marquee-left {
          animation: reviews-marquee-left 35s linear infinite;
        }

        .animate-reviews-marquee-right {
          animation: reviews-marquee-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
