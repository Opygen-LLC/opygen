"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Mail, Send, Sparkles, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import { InstagramLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  "Website Development",
  "Mobile App (iOS & Android)",
  "SaaS Product MVP",
  "CRM & Automation",
  "UI/UX & Branding",
  "Custom API Integration",
];

const budgetOptions = ["Under $1K", "$1K - $2.5K", "$2.5K - $5K", "$5K - $10K", "$10K+"];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>(["Website Development"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$1K - $2.5K");
  const [form, setForm] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        rightColRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
    console.log("Form Submitted:", {
      services: selectedServices,
      budget: selectedBudget,
      name: form.name,
      email: form.email,
      details: form.details,
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative bg-[#F7F7F4] py-16 sm:py-24 lg:py-32 font-space-grotesk overflow-hidden border-t border-black/10">
      
      {/* Background Soft Glow Orbs */}
      <div aria-hidden="true" className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-[#FFD6C7]/60 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-[#D9FF5B]/50 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <div ref={leftColRef} className="w-full lg:w-[360px] flex flex-col justify-between flex-shrink-0 lg:sticky lg:top-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 shadow-2xs mb-4">
                <MessageSquare className="h-3.5 w-3.5 text-[#F24202]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
                  Direct Contact
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
                A project with Opygen?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed mb-8">
                We build future-ready websites, apps, and SaaS platforms engineered for scale and growth.
              </p>

              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm mb-8 space-y-6">
                <div>
                  <p className="text-gray-500 text-[10px] font-extrabold tracking-wider uppercase mb-1.5">
                    Direct Email
                  </p>
                  <a
                    href="mailto:opygen.info@gmail.com"
                    className="text-base font-bold text-gray-900 hover:text-[#F24202] transition-colors break-all flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-[#F24202] shrink-0" />
                    opygen.info@gmail.com
                  </a>
                </div>

                <div className="border-t border-black/5 pt-5">
                  <p className="text-gray-500 text-[10px] font-extrabold tracking-wider uppercase mb-3">Connect</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/opygen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F7F4] border border-black/10 text-gray-900 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-2xs"
                    >
                      <LinkedinLogo weight="fill" size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/opygentech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F7F4] border border-black/10 text-gray-900 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all shadow-2xs"
                    >
                      <InstagramLogo weight="fill" size={20} />
                    </a>
                    <a
                      href="https://x.com/opygentech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F7F4] border border-black/10 text-gray-900 hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all shadow-2xs"
                    >
                      <TwitterLogo weight="fill" size={20} />
                    </a>
                  </div>
                </div>

                <div className="border-t border-black/5 pt-5 space-y-2 text-xs font-bold text-gray-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                    <span>100% IP & NDA Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#F24202]" />
                    <span>24-Hour Response Guarantee</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400">
                © OPYGEN 2026
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean White Form Container */}
          <div ref={rightColRef} className="flex-1 w-full">
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10 shadow-sm">
              
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F7F7F4] px-3.5 py-1.5 shadow-2xs mb-3">
                  <Sparkles className="h-3.5 w-3.5 text-[#F24202]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
                    Project Inquiry
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                  Tell us about your project.
                </h3>
              </div>

              {submitted ? (
                <div className="flex min-h-[350px] flex-col items-center justify-center text-center bg-[#F7F7F4] rounded-2xl p-8 border border-black/10">
                  <CheckCircle2 className="h-16 w-16 text-[#10B981] mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-600 font-medium mb-6 max-w-md">
                    Thank you! We have received your inquiry and will reach out within 24 hours with a scope proposal.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded-lg bg-[#111111] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#222222] transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-7">
                  
                  {/* Select Services */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                      Select Target Service(s)
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {servicesList.map((service) => {
                        const isActive = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                              isActive
                                ? "bg-[#111111] text-white border-[#111111] shadow-xs"
                                : "bg-[#F7F7F4] text-gray-700 border-black/10 hover:border-black/30 hover:bg-white"
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Select Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                      Target Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {budgetOptions.map((budget) => {
                        const isActive = selectedBudget === budget;
                        return (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setSelectedBudget(budget)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                              isActive
                                ? "bg-[#111111] text-white border-[#111111] shadow-xs"
                                : "bg-[#F7F7F4] text-gray-700 border-black/10 hover:border-black/30 hover:bg-white"
                            }`}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-[#F7F7F4] px-4 py-3 text-sm font-semibold text-gray-900 placeholder:text-gray-400 focus:border-[#111111] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Your Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-[#F7F7F4] px-4 py-3 text-sm font-semibold text-gray-900 placeholder:text-gray-400 focus:border-[#111111] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Details Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Project Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your project goals, timelines, or requirements..."
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="w-full rounded-xl border border-black/10 bg-[#F7F7F4] px-4 py-3 text-sm font-semibold text-gray-900 placeholder:text-gray-400 focus:border-[#111111] focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#F24202] px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all hover:bg-[#ff5517] hover:scale-[1.01] cursor-pointer"
                    >
                      <span>Send Project Inquiry</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
