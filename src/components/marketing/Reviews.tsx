"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
    {
        rating: 4.9,
        quote: "Proactive, precise, and easy to work with - no hand-holding needed, just smooth collaboration from start to finish.",
        name: "Jared Kim",
        role: "Marketing Director",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
        social: "x",
    },
    {
        rating: 5.0,
        quote: "Felt like an embedded team with zero friction; communication was clear, and revisions landed perfectly on the first go.",
        name: "Maya Collins",
        role: "Head of Product",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
        social: "linkedin",
    },
    {
        rating: 4.9,
        quote: "The quality was unmatched. We submitted our request on Monday and had polished designs by Wednesday.",
        name: "Jesse Leigh",
        role: "CEO & Founder",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
        social: "x",
    },
    {
        rating: 4.9,
        quote: "We've tried other design subscriptions - none compare to Formix. Professional, reliable, and seriously creative.",
        name: "Benjamin Daul",
        role: "Head of Engineering",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
        social: "linkedin",
    },
    {
        rating: 5.0,
        quote: "Formix completely transformed the way we approach design. The turnaround time is insane and the output's always on-brand.",
        name: "Michael Joseph",
        role: "Head of Content",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&q=80",
        social: "x",
    },
    {
        rating: 5.0,
        quote: "It felt like an in-house design team. Communication was seamless, and revisions were spot on from the first pass.",
        name: "Amy Louise",
        role: "Customer Success Manager",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
        social: "linkedin",
    },
];

function XIcon() {
    return (
        <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
    return (
        <div className="w-[340px] shrink-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-black/8 bg-white/70 p-6 backdrop-blur-sm mx-2">
            {/* Top: rating + quote mark */}
            <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span className="text-[12px] font-black text-black/70">
                        {review.rating.toFixed(1)}
                    </span>
                    <span className="text-[#ff4d00] text-xs">★</span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black/30">
                        Rating
                    </span>
                </div>
                <span className="font-serif text-[3rem] font-black leading-none text-black/8 select-none">
                    &quot;
                </span>
            </div>

            {/* Quote */}
            <p className="mb-6 flex-1 text-[14px] font-semibold leading-relaxed text-black/75">
                &quot;{review.quote}&quot;
            </p>

            {/* Author card */}
            <div className="flex items-center justify-between rounded-xl border border-dashed border-black/10 bg-black/[0.03] px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="relative size-9 shrink-0 overflow-hidden rounded-full border border-black/10">
                        <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            sizes="36px"
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                    <div>
                        <p className="text-[13px] font-black leading-tight text-black">
                            {review.name}
                        </p>
                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-black/35">
                            {review.role}
                        </p>
                    </div>
                </div>
                <div className="flex size-8 items-center justify-center rounded-full border border-black/10 bg-white text-black/40">
                    {review.social === "x" ? <XIcon /> : <LinkedInIcon />}
                </div>
            </div>
        </div>
    );
}

function MarqueeRow({
    items,
    direction = "left",
    speed = 40,
}: {
    items: typeof reviews;
    direction?: "left" | "right";
    speed?: number;
}) {
    // Duplicate for seamless loop
    const doubled = [...items, ...items];
    const totalWidth = items.length * 356; // card width 340 + gap ~16

    return (
        <div className="overflow-hidden w-full">
            <div
                className="flex"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                    width: `${totalWidth * 2}px`,
                }}
            >
                {doubled.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                ))}
            </div>
        </div>
    );
}

export default function Reviews() {
    return (
        <section
            id="reviews"
            className="relative text-black border-b border-dashed border-gray-300"
        >
            <div className="mx-auto w-full container max-w-8xl marketing-section-container border-x border-dashed border-gray-300">
                {/* Header */}
                <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px] lg:items-end">
                    <div>
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-5 inline-flex items-center rounded-full border border-black/15 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45"
                        >
                            / 006 / Reviews
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-[clamp(2.8rem,5.5vw,5rem)] font-black leading-[0.93] tracking-tight"
                        >
                            Success{" "}
                            <span className="text-black/28">Stories.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-xs text-[13.5px] leading-relaxed text-black/50 lg:text-right"
                    >
                        Discover how our design subscription helps innovative
                        brands grow smarter and faster.
                    </motion.p>
                </div>

                {/* Reviews grid */}
                {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-8%" }}
                            transition={{ delay: i * 0.07, duration: 0.45 }}
                            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/8 bg-white/70 p-6 backdrop-blur-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[12px] font-black text-black/70">
                                        {review.rating.toFixed(1)}
                                    </span>
                                    <span className="text-[#ff4d00] text-xs">
                                        ★
                                    </span>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black/30">
                                        Rating
                                    </span>
                                </div>
                                <span className="font-serif text-[3rem] font-black leading-none text-black/8 select-none">
                                    &quot;
                                </span>
                            </div>

                            <p className="mb-6 flex-1 text-[14px] font-semibold leading-relaxed text-black/75">
                                &quot;{review.quote}&quot;
                            </p>

                            <div className="flex items-center justify-between rounded-xl border border-dashed border-black/10 bg-black/[0.03] px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="relative size-9 shrink-0 overflow-hidden rounded-full border border-black/10">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            fill
                                            sizes="36px"
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-black leading-tight text-black">
                                            {review.name}
                                        </p>
                                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-black/35">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex size-8 items-center justify-center rounded-full border border-black/10 bg-white text-black/40 transition hover:border-black/25 hover:text-black">
                                    {review.social === "x" ? (
                                        <XIcon />
                                    ) : (
                                        <LinkedInIcon />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div> */}

                <style>{`
                        @keyframes marquee-left {
                            0%   { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        @keyframes marquee-right {
                            0%   { transform: translateX(-50%); }
                            100% { transform: translateX(0); }
                        }
                    `}</style>

                <div className="flex flex-col gap-3 py-6">
                    {/* Row 1: left → */}
                    <MarqueeRow items={reviews} direction="left" speed={35} />
                    {/* Row 2: ← right */}
                    <MarqueeRow
                        items={[...reviews].reverse()}
                        direction="right"
                        speed={40}
                    />
                </div>
            </div>
        </section>
    );
}
