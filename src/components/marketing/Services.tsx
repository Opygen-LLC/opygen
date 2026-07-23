"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { marketingButton } from "@/lib/marketing-button";
import { servicePages } from "@/src/data/service-pages";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    // Use requestAnimationFrame to safely defer GSAP binding until React mounts DOM nodes
    const animId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const cards = cardRefs.current.filter(
          (card): card is HTMLDivElement => card !== null
        );

        cards.forEach((card, index) => {
          // 1. Fade up from the bottom as user scrolls to each card
          gsap.fromTo(
            card,
            {
              y: 120,
              opacity: 0,
              scale: 0.95,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "top 65%",
                scrub: 0.6,
              },
            }
          );

          // 2. As the NEXT card fades up and stacks on top of this card:
          // scale down this card slightly to create a 3D stacked deck effect
          if (index < cards.length - 1) {
            const nextCard = cards[index + 1];
            const targetScale = 1 - (cards.length - index) * 0.022;

            gsap.to(card, {
              scale: targetScale,
              transformOrigin: "top center",
              ease: "power1.out",
              scrollTrigger: {
                trigger: nextCard,
                start: "top 90%",
                end: "top 120px",
                scrub: 0.6,
              },
            });
          }
        });
      }, containerRef);
    });

    return () => {
      cancelAnimationFrame(animId);
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white font-space-grotesk pt-16 lg:pt-24 pb-20 overflow-hidden"
    >
      {/* Standard Header */}
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
        {servicePages.map((service, index) => {
          return (
            <div
              key={service.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="sticky w-full mx-auto mb-8"
              style={{
                top: `calc(max(80px, 12vh) + ${index * 24}px)`,
                zIndex: index + 10,
                willChange: "transform, opacity",
              }}
            >
              <div className="group relative w-full rounded-[2.5rem] bg-white border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-blue-100 transition-all duration-500 overflow-hidden">
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative flex flex-col md:flex-row gap-6 lg:gap-10 p-3 md:p-4">
                  {/* Left: Image Area */}
                  <div className="w-full md:w-[45%] bg-[#F8F9FA] rounded-[2rem] overflow-hidden relative h-[250px] md:h-[360px] flex-shrink-0 group/image">
                    <div className="w-full h-full relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                      />

                      {/* Floating badge over image */}
                      <div className="absolute top-5 left-5 md:top-6 md:left-6 z-10">
                        <div className="backdrop-blur-md bg-white/90 border border-white/50 text-gray-900 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-2xs">
                          {service.badge}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content Area */}
                  <div className="w-full md:w-[55%] py-4 md:py-6 pr-4 lg:pr-10 flex flex-col justify-center">
                    <div className="mb-5">
                      <h3 className="text-[24px] lg:text-[30px] font-bold text-gray-900 leading-[1.1] mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-[14px] lg:text-[16px] leading-relaxed max-w-[95%]">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5 mb-4">
                      {service.features.map((feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 group/feature"
                        >
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 group-hover/feature:bg-blue-600 transition-colors duration-300 shrink-0 mt-0.5 shadow-2xs">
                            <Check
                              className="w-3 h-3 text-blue-600 group-hover/feature:text-white transition-colors duration-300"
                              strokeWidth={2.5}
                            />
                          </div>
                          <span className="text-[13.5px] font-semibold text-gray-700 group-hover/feature:text-gray-900 transition-colors duration-300 leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <a
                        href={`/services/${service.slug}`}
                        className={marketingButton("group/btn")}
                      >
                        <span>{service.button}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
