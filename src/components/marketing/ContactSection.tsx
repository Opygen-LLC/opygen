"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { InstagramLogo, TwitterLogo, DiscordLogo, LinkedinLogo } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  "Branding",
  "UX/UI",
  "Animation",
  "3D Design",
  "Identify",
  "Webflow",
];

const budgetOptions = ["2K - 10K", "10K - 50K", "More than 50K"];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>(["Animation"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("More than 50K");
  const [form, setForm] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate left column elements
      gsap.fromTo(
        leftColRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Animate right column elements
      gsap.fromTo(
        rightColRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
      
      // Animate the big send button
      gsap.fromTo(
        ".send-btn-container",
        { scale: 0, opacity: 0, rotation: -45 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative bg-white pt-24 pb-24 font-space-grotesk">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* LEFT COLUMN */}
          <div ref={leftColRef} className="w-full lg:w-[280px] flex flex-col justify-between flex-shrink-0">
            <div>
              <div className="mb-14">
                <p className="text-gray-500 text-[13px] font-bold tracking-[0.1em] uppercase mb-4">
                  Contacts
                </p>
                <a href="mailto:hey@opygen.com" className="text-[22px] font-black text-black tracking-tight hover:text-gray-600 transition-colors uppercase">
                  HEY@OPYGEN.COM
                </a>
              </div>

              <div className="mb-16 lg:mb-0">
                <p className="text-gray-500 text-[13px] font-bold tracking-[0.1em] mb-4">Follow</p>
                <div className="flex items-center gap-5">
                  <a href="#" className="text-black hover:text-gray-500 transition-colors"><InstagramLogo weight="fill" size={24} /></a>
                  <a href="#" className="text-black hover:text-gray-500 transition-colors"><TwitterLogo weight="fill" size={24} /></a>
                  <a href="#" className="text-black hover:text-gray-500 transition-colors"><DiscordLogo weight="fill" size={24} /></a>
                </div>
              </div>
            </div>

            <div className="hidden lg:block mt-auto pt-32">
              <p className="text-[12px] leading-relaxed text-black font-bold mb-6 max-w-[240px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <p className="text-[13px] font-black uppercase tracking-wider text-black">
                © OPYGEN 2024
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div ref={rightColRef} className="flex-1 w-full pb-10">
            <div className="mb-14">
              <p className="text-gray-500 text-[13px] font-bold tracking-[0.1em] uppercase mb-4">
                Hire Us
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-black leading-[1.1] tracking-tight max-w-2xl">
                A PROJECT WITH OPYGEN?
              </h2>
            </div>

            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center bg-gray-50 rounded-3xl p-10 border border-gray-100">
                <CheckCircle2 className="size-16 text-green-500 mb-6" />
                <h3 className="text-3xl font-black text-black mb-3">Message sent!</h3>
                <p className="text-gray-500 font-medium mb-8">
                  We have received your project inquiry and will be in touch shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition shadow-lg hover:shadow-xl"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-10">
                
                {/* Services */}
                <div>
                  <p className="text-gray-500 font-bold text-[15px] mb-4">Services</p>
                  <div className="flex flex-wrap gap-2.5">
                    {servicesList.map((service) => {
                      const isActive = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                            isActive
                              ? "bg-black text-white shadow-md scale-105"
                              : "bg-[#F5F5F5] text-gray-500 hover:bg-gray-200"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <p className="text-gray-500 font-bold text-[15px] mb-4">Your Budget</p>
                  <div className="flex flex-wrap gap-2.5">
                    {budgetOptions.map((budget) => {
                      const isActive = selectedBudget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                            isActive
                              ? "bg-black text-white shadow-md scale-105"
                              : "bg-[#F5F5F5] text-gray-500 hover:bg-gray-200"
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inputs Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-6">
                  {/* Name Input */}
                  <div className="relative group flex items-end gap-4 border-b border-gray-200 pb-2 transition-colors focus-within:border-black">
                     <div className="flex-1">
                      <p className="text-gray-500 font-bold text-[15px] mb-2">Your Name</p>
                      <input
                        required
                        type="text"
                        placeholder="Mohammad Reza"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent py-1 text-[16px] font-semibold text-black placeholder:text-gray-400 focus:outline-none"
                      />
                     </div>
                     <div className="w-[22px] h-[22px] rounded-full bg-gray-200 flex flex-shrink-0 items-center justify-center mb-1">
                       <div className="w-[5px] h-[5px] rounded-full bg-gray-800"></div>
                     </div>
                  </div>
                  {/* Email Input */}
                  <div className="relative group flex items-end border-b border-gray-200 pb-2 transition-colors focus-within:border-black">
                     <div className="flex-1">
                      <p className="text-gray-500 font-bold text-[15px] mb-2">Your Email</p>
                      <input
                        required
                        type="email"
                        placeholder="Mohammad Reza"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent py-1 text-[16px] font-semibold text-black placeholder:text-gray-400 focus:outline-none"
                      />
                     </div>
                  </div>
                </div>

                {/* Inputs Row 2 */}
                <div className="relative group mt-4 border-b border-gray-200 pb-2 transition-colors focus-within:border-black">
                  <p className="text-gray-500 font-bold text-[15px] mb-2">Project Details ( Optional )</p>
                  <input
                    type="text"
                    placeholder="Mohammad Rezal"
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className="w-full bg-transparent py-1 text-[16px] font-semibold text-black placeholder:text-gray-400 focus:outline-none"
                  />
                </div>

                {/* Mobile Text Block */}
                <div className="lg:hidden mt-12 mb-4">
                  <p className="text-[12px] leading-relaxed text-black font-bold mb-4 max-w-[280px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="text-[13px] font-black uppercase tracking-wider text-black">
                    © OPYGEN 2024
                  </p>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom Pink Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[12px] bg-[#F26A8D] z-0"></div>
      
      {/* Absolute Submit Button (Overlaps the bottom pink bar exactly like the image) */}
      {!submitted && (
        <div className="send-btn-container absolute bottom-0 right-[15%] lg:right-[25%] translate-y-1/2 z-20">
          <button
            type="submit"
            form="contact-form"
            className="w-36 h-36 md:w-[150px] md:h-[150px] rounded-full bg-black text-white font-bold text-[15px] tracking-wide flex items-center justify-center hover:scale-105 hover:bg-gray-900 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
          >
            Send
          </button>
        </div>
      )}
    </section>
  );
}
