"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    "Web Design",
    "Web Development",
    "SEO",
    "Digital Marketing",
    "Branding",
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Hero() {
    return (
        <div className="w-full bg-[#F3F4F6] p-4 md:p-6 lg:p-8 min-h-screen flex items-center justify-center font-sans">
            <section className="relative w-full max-w-7xl isolate overflow-hidden rounded-[32px] md:rounded-[48px] bg-[#F7A752] shadow-xl min-h-[720px] md:min-h-[600px] lg:h-[620px] xl:h-[680px]">
                {/* Background noise gif overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay bg-repeat z-0"
                    style={{
                        backgroundImage:
                            'url("https://themexriver.com/wp/avista/wp-content/uploads/2025/10/h1-bg-noise-1.gif")',
                    }}
                />

                {/* Top bar logo container (white curved tab) */}
                <div className="absolute top-0 left-0 z-30 h-[70px] w-[80px] md:h-[90px] md:w-[100px]">
                    <img
                        src="https://themexriver.com/wp/avista/wp-content/uploads/2025/10/h1-favicon-shape.webp"
                        alt="Logo Tab Background"
                        className="absolute inset-0 h-full w-full object-fill pointer-events-none"
                    />
                    <div className="absolute top-0 left-0 flex h-[55px] w-[65px] md:h-[75px] md:w-[85px] items-center justify-center pl-2 pt-2">
                        <img
                            src="https://themexriver.com/wp/avista/wp-content/uploads/2025/10/fevicon-1.webp"
                            alt="Avista Logo"
                            className="h-6 w-6 md:h-8 md:w-8 object-contain"
                        />
                    </div>
                </div>

                {/* Top bar notch (Available for New Projects - desktop only) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 hidden md:flex h-11 w-52 items-center justify-center">
                    <img
                        src="https://themexriver.com/wp/avista/wp-content/uploads/2025/10/h1-active-bg.webp"
                        alt="Notch Background"
                        className="absolute inset-0 h-full w-full object-fill pointer-events-none"
                    />
                    <div className="relative z-10 flex items-center gap-2 text-[10px] font-bold text-white tracking-widest uppercase pb-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF3D00] animate-pulse" />
                        Available for New Projects
                    </div>
                </div>

                {/* Top bar capsule menu & CTA (top right) */}
                <div className="absolute top-4 right-4 z-30 flex items-center bg-white rounded-full p-1.5 shadow-md border border-black/5">
                    {/* Menu button: order-2 on mobile, order-1 on desktop */}
                    <button
                        aria-label="Open menu"
                        className={cn(
                            "flex h-9 w-9 items-center justify-center transition-all",
                            "order-2 md:order-1",
                            "rounded-xl md:rounded-full bg-white md:bg-transparent border border-black/15 md:border-none shadow-sm md:shadow-none ml-2 md:ml-0 md:mr-2",
                        )}
                    >
                        <div className="flex flex-col gap-1 items-center justify-center">
                            <span className="block h-[2px] w-4 bg-black rounded-full transition-all" />
                            <span className="block h-[2px] w-4 bg-black rounded-full transition-all" />
                            <span className="block h-[2px] w-4 bg-black rounded-full transition-all md:hidden" />
                        </div>
                    </button>

                    {/* Get started button: order-1 on mobile, order-2 on desktop */}
                    <button
                        className={cn(
                            "h-9 px-5 rounded-full bg-[#FF3D00] text-xs font-semibold text-white hover:bg-[#d83400] transition-colors flex items-center justify-center",
                            "order-1 md:order-2",
                        )}
                    >
                        Get started
                    </button>
                </div>

                {/* Left marquee rail (desktop only) */}
                <div
                    className="absolute bottom-6 left-6 top-24 z-20 w-10 overflow-hidden bg-black rounded-[20px] hidden md:block"
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                    }}
                >
                    <motion.div
                        className="flex flex-col items-center pt-6"
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...navItems, ...navItems].map((item, i) => (
                            <div
                                key={`${item}-${i}`}
                                className="flex flex-col items-center gap-6 py-4"
                            >
                                <span
                                    className="whitespace-nowrap text-[11px] font-bold tracking-widest text-white uppercase"
                                    style={{ writingMode: "vertical-rl" }}
                                >
                                    {item}
                                </span>
                                <span
                                    className="text-[#FF3D00] text-sm font-black"
                                    aria-hidden
                                >
                                    *
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Watermark text (desktop only) */}
                <div className="absolute left-[72px] bottom-10 z-15 hidden md:block select-none pointer-events-none">
                    <span
                        className="block origin-bottom-left -rotate-90 whitespace-nowrap font-black tracking-tighter text-white/10 uppercase"
                        style={{
                            fontSize: "clamp(3rem, 7vw, 6.5rem)",
                            lineHeight: 1,
                        }}
                    >
                        © 2025-Avista
                    </span>
                </div>

                {/* Main Portrait (man cutout) */}
                <img
                    src="https://themexriver.com/wp/avista/wp-content/uploads/2025/10/h1-man.webp"
                    alt="Hero main portrait"
                    className={cn(
                        "absolute bottom-0 object-contain pointer-events-none z-10 select-none",
                        "left-0 h-[48%] sm:h-[53%] w-auto", // mobile positioning
                        "md:left-12 md:h-[85%] lg:h-[90%] max-h-[580px]", // desktop positioning
                    )}
                />

                {/* Right Column (Text Content) */}
                <div
                    className={cn(
                        "absolute z-20 flex flex-col items-end md:items-start text-right md:text-left",
                        "top-24 right-4 w-[60%] sm:w-[55%]", // mobile positioning
                        "md:top-28 md:right-12 lg:right-16 md:w-[45%]", // desktop positioning
                    )}
                >
                    <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-black/85 font-medium leading-relaxed max-w-[180px] sm:max-w-[220px] md:max-w-xs text-left md:text-left mb-3 md:mb-5">
                        We craft smart digital business experiences that
                        accelerate growth and boost conversions.
                    </p>
                    <h1
                        className="font-black leading-[0.95] tracking-tighter text-black uppercase"
                        style={{ fontSize: "clamp(2rem, 5.5vw, 6.5rem)" }}
                    >
                        High-quality
                        <br />
                        Work
                    </h1>
                </div>

                {/* Floating Contact Card */}
                <div
                    className={cn(
                        "absolute z-30 rounded-[28px] border border-white/50 shadow-2xl backdrop-blur-xl bg-white/75 overflow-hidden p-5 sm:p-6 text-center transition-all",
                        // Mobile layout (centered bottom)
                        "bottom-16 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] sm:max-w-[340px]",
                        // Desktop layout (floating over man's chest)
                        "md:bottom-10 md:left-[28%] lg:left-[26%] md:translate-x-0 md:w-72 lg:w-80",
                    )}
                >
                    {/* Decorative gradient color bleeds for premium glassmorphism aesthetic */}
                    <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#FF4D1C]/20 blur-2xl pointer-events-none" />
                    <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />

                    <p className="text-sm sm:text-base md:text-lg font-bold leading-snug text-black tracking-tight relative z-10">
                        Need team assistance?
                        <br />
                        Book a personalized call
                    </p>

                    <button className="mt-4 sm:mt-5 flex w-full items-center justify-between rounded-full bg-black p-1 pl-4 sm:pl-5 transition-colors hover:bg-black/90 relative z-10 cursor-pointer">
                        <span className="text-xs sm:text-sm font-semibold text-white">
                            Schedule a call
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-black border border-black/5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                className="h-4.5 w-4.5 text-black"
                                fill="currentColor"
                            >
                                <g>
                                    <circle cx="90.5" cy="50" r="4.5" />
                                    <circle cx="77" cy="50" r="4.5" />
                                    <circle cx="77" cy="63.5" r="4.5" />
                                    <circle cx="77" cy="36.5" r="4.5" />
                                    <circle cx="63.5" cy="50" r="4.5" />
                                    <circle cx="50" cy="50" r="4.5" />
                                    <circle cx="36.5" cy="50" r="4.5" />
                                    <circle cx="23" cy="50" r="4.5" />
                                    <circle cx="9.5" cy="50" r="4.5" />
                                    <circle cx="63.5" cy="77" r="4.5" />
                                    <circle cx="63.5" cy="23" r="4.5" />
                                </g>
                            </svg>
                        </div>
                    </button>

                    <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-black/50 relative z-10">
                        or email us at{" "}
                        <a
                            href="mailto:info@avista.com"
                            className="font-bold text-black/75 hover:text-black hover:underline"
                        >
                            info@avista.com
                        </a>
                    </p>
                </div>

                {/* Bottom Right "Guaranteed" Badge */}
                <div
                    className={cn(
                        "absolute z-20 flex items-center gap-2 select-none pointer-events-none",
                        "right-4 bottom-5", // mobile
                        "md:right-12 lg:right-16 md:bottom-10", // desktop
                    )}
                >
                    <span className="font-serif italic text-lg sm:text-xl md:text-2xl text-white drop-shadow-sm">
                        Guaranteed
                    </span>
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#FF3D00] shadow-sm">
                        <ShieldCheck className="h-4.5 w-4.5 text-white" />
                    </div>
                </div>

                {/* Corner Speckles Accent (desktop only) */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-4 right-4 h-24 w-24 sm:bottom-6 sm:right-6 sm:h-36 sm:w-36 hidden md:block"
                >
                    {Array.from({ length: 22 }).map((_, idx) => (
                        <span
                            key={idx}
                            className="absolute h-[3px] w-[3px] rounded-full bg-black/60"
                            style={{
                                top: `${((idx * 17) % 90) + 5}%`,
                                left: `${((idx * 23) % 90) + 5}%`,
                            }}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
