"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Check, Sparkles, Clock, ShieldCheck, Code2, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type ServiceOption = {
  id: string;
  name: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  timeline: string;
};

type ScaleOption = {
  id: string;
  name: string;
  desc: string;
  multiplier: number;
  badge: string;
  complexity: number;
};

type FeatureAddon = {
  id: string;
  name: string;
  price: number;
  category: string;
};

const serviceOptions: ServiceOption[] = [
  { id: "web-dev", name: "Website Development", category: "Web", minPrice: 600, maxPrice: 1200, timeline: "1 - 2 Weeks" },
  { id: "app-dev", name: "Mobile & Web App", category: "Mobile & Web", minPrice: 1400, maxPrice: 2800, timeline: "2 - 4 Weeks" },
  { id: "saas", name: "SaaS Product MVP", category: "Product MVP", minPrice: 2000, maxPrice: 3800, timeline: "3 - 5 Weeks" },
  { id: "crm", name: "CRM & Automation", category: "Business Logic", minPrice: 800, maxPrice: 1600, timeline: "1 - 2 Weeks" },
];

const scaleOptions: ScaleOption[] = [
  { id: "mvp", name: "Startup MVP", desc: "Core features & fast launch", multiplier: 1, badge: "Fast Track", complexity: 40 },
  { id: "growth", name: "Growth Scale", desc: "Custom animations, CMS & SEO", multiplier: 1.3, badge: "Most Popular", complexity: 70 },
  { id: "enterprise", name: "Enterprise Custom", desc: "High concurrency & multi-tenant", multiplier: 1.8, badge: "Maximum Power", complexity: 95 },
];

const featureAddons: FeatureAddon[] = [
  { id: "cms", name: "Headless CMS (Sanity / Payload)", category: "Content", price: 150 },
  { id: "auth-pay", name: "Auth & Stripe Payment Suite", category: "Payments", price: 250 },
  { id: "seo", name: "Advanced Technical SEO & Speed", category: "Growth", price: 150 },
  { id: "maintenance", name: "Ongoing SLA & Priority Support", category: "Support", price: 200 },
];

export default function ProjectEstimator() {
  const [activeTab, setActiveTab] = useState<"service" | "scale" | "addons">("service");
  const [selectedService, setSelectedService] = useState<ServiceOption>(serviceOptions[0]);
  const [selectedScale, setSelectedScale] = useState<ScaleOption>(scaleOptions[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["cms", "auth-pay"]);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const featureTotal = featureAddons
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.price, 0);

  const estimatedMin = Math.round((selectedService.minPrice * selectedScale.multiplier) + featureTotal);
  const estimatedMax = Math.round((selectedService.maxPrice * selectedScale.multiplier) + featureTotal);

  return (
    <section
      id="estimator"
      aria-labelledby="estimator-title"
      className="relative overflow-hidden bg-[#F7F7F4] px-5 py-14 text-[#111111] sm:px-8 sm:py-18 lg:px-12 lg:py-24 font-space-grotesk border-y border-black/10"
    >
      {/* Background Glow Orbs */}
      <div aria-hidden="true" className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#FFD6C7]/50 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#D9FF5B]/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1340px]">
        
        {/* Top Header */}
        <header className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 shadow-2xs">
            <Calculator className="h-3.5 w-3.5 text-[#F24202]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">
              Instant Scope & Price Range Estimator
            </span>
          </div>
          <h2 id="estimator-title" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[44px] leading-tight">
            Calculate your project budget range.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-lg mx-auto font-medium leading-relaxed">
            Select your requirements below to calculate a transparent price range & timeline estimation.
          </p>
        </header>

        {/* Unified Dashboard Container */}
        <div className="mt-10 sm:mt-12 rounded-3xl border-2 border-black/10 bg-white p-5 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.05)]">
          
          {/* Step Segmented Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-5">
            <div className="flex items-center gap-2 bg-[#F4F4F0] p-1.5 rounded-2xl border border-black/10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab("service")}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "service" ? "bg-[#111111] text-white shadow-md" : "text-gray-700 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                <Code2 className="h-3.5 w-3.5" />
                01. Service Domain
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("scale")}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "scale" ? "bg-[#111111] text-white shadow-md" : "text-gray-700 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                02. Scope Scale
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("addons")}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "addons" ? "bg-[#111111] text-white shadow-md" : "text-gray-700 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                03. Add-ons ({selectedFeatures.length})
              </button>
            </div>

            <div className="hidden md:flex items-center gap-4 text-xs font-bold text-gray-700">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#F24202]" />
                Est: <strong className="text-gray-900">{selectedService.timeline}</strong>
              </span>
              <span className="h-3 w-px bg-black/10" />
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                100% IP Guarantee
              </span>
            </div>
          </div>

          {/* Equal Height Workspace Grid */}
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
            
            {/* Left Column Container */}
            <div className="flex flex-col justify-between min-h-[380px]">
              
              <div>
                {activeTab === "service" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Step 01 — Choose Target Service</p>
                      <span className="text-xs font-semibold text-[#F24202]">{selectedService.name} Selected</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((svc) => {
                        const isSelected = selectedService.id === svc.id;
                        return (
                          <motion.div
                            key={svc.id}
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            onClick={() => setSelectedService(svc)}
                            className={`group relative p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#111111] bg-[#111111] text-white shadow-lg"
                                : "border-black/10 bg-[#F9F9F6] text-gray-900 hover:border-black/30 hover:bg-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                                isSelected ? "bg-[#D9FF5B] text-black" : "bg-black/5 text-gray-700"
                              }`}>
                                {svc.category}
                              </span>
                              {isSelected && <CheckCircle2 className="h-4 w-4 text-[#D9FF5B]" />}
                            </div>
                            <h4 className="mt-3 text-base font-bold tracking-tight">{svc.name}</h4>
                            <div className="mt-2 flex items-center justify-between">
                              <span className={`text-xs font-extrabold ${isSelected ? "text-[#D9FF5B]" : "text-[#F24202]"}`}>
                                ${svc.minPrice.toLocaleString()} – ${svc.maxPrice.toLocaleString()}
                              </span>
                              <span className={`text-[11px] font-medium ${isSelected ? "text-gray-300" : "text-gray-500"}`}>
                                {svc.timeline}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {activeTab === "scale" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Step 02 — Choose Scope Scale & Complexity</p>
                      <span className="text-xs font-semibold text-[#F24202]">{selectedScale.name} Selected</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {scaleOptions.map((sc) => {
                        const isSelected = selectedScale.id === sc.id;
                        return (
                          <motion.div
                            key={sc.id}
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            onClick={() => setSelectedScale(sc)}
                            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? "border-[#111111] bg-[#111111] text-white shadow-lg"
                                : "border-black/10 bg-[#F9F9F6] text-gray-900 hover:border-black/30 hover:bg-white"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                                  isSelected ? "bg-[#D9FF5B] text-black" : "bg-black/5 text-gray-700"
                                }`}>
                                  {sc.badge}
                                </span>
                                {isSelected && <CheckCircle2 className="h-4 w-4 text-[#D9FF5B]" />}
                              </div>
                              <h4 className="mt-3 text-base font-bold tracking-tight">{sc.name}</h4>
                              <p className={`mt-1.5 text-xs font-medium leading-relaxed ${isSelected ? "text-gray-300" : "text-gray-500"}`}>
                                {sc.desc}
                              </p>
                            </div>
                            <span className={`text-xs font-bold mt-4 ${isSelected ? "text-[#D9FF5B]" : "text-gray-900"}`}>
                              Multiplier: {sc.multiplier}x
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {activeTab === "addons" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Step 03 — Select Capability Add-ons</p>
                      <span className="text-xs font-semibold text-[#F24202]">{selectedFeatures.length} Add-ons Active</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {featureAddons.map((feat) => {
                        const isSelected = selectedFeatures.includes(feat.id);
                        return (
                          <motion.div
                            key={feat.id}
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            onClick={() => toggleFeature(feat.id)}
                            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "border-[#111111] bg-[#111111] text-white shadow-lg"
                                : "border-black/10 bg-[#F9F9F6] text-gray-900 hover:border-black/30 hover:bg-white"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                  isSelected ? "bg-[#D9FF5B] text-black" : "bg-black/5 text-gray-700"
                                }`}>
                                  {feat.category}
                                </span>
                                <span className={`text-xs font-extrabold ${isSelected ? "text-[#D9FF5B]" : "text-[#F24202]"}`}>
                                  +${feat.price}
                                </span>
                              </div>
                              <h4 className="mt-1.5 text-xs font-bold leading-tight">{feat.name}</h4>
                            </div>
                            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 ml-2 ${
                              isSelected ? "bg-[#D9FF5B] border-[#D9FF5B] text-black" : "border-black/20 bg-white"
                            }`}>
                              {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Bottom Step Control Navigation Bar */}
              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                {activeTab === "service" && (
                  <>
                    <span className="text-xs font-semibold text-gray-500">Step 1 of 3</span>
                    <button
                      type="button"
                      onClick={() => setActiveTab("scale")}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#111111] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#222222] transition-colors cursor-pointer"
                    >
                      Next: Scope Scale &rarr;
                    </button>
                  </>
                )}

                {activeTab === "scale" && (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveTab("service")}
                      className="text-xs font-bold text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("addons")}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#111111] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#222222] transition-colors cursor-pointer"
                    >
                      Next: Add-ons &rarr;
                    </button>
                  </>
                )}

                {activeTab === "addons" && (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveTab("scale")}
                      className="text-xs font-bold text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      &larr; Back
                    </button>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Ready for Estimate Range
                    </span>
                  </>
                )}
              </div>

            </div>

            {/* Right Side: High-Impact Realtime Summary Box */}
            <div className="rounded-2xl bg-[#111111] text-white p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden border-2 border-[#111111] flex flex-col justify-between">
              <div aria-hidden="true" className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-[#D9FF5B]/20 blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between border-b border-white/15 pb-3.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">Live Budget Range Deck</span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#D9FF5B]">
                    <Sparkles className="h-3.5 w-3.5 text-[#D9FF5B]" />
                    Verified Range
                  </span>
                </div>

                {/* Scope Complexity Gauge */}
                <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-gray-300">Complexity Index</span>
                    <span className="text-[#D9FF5B]">{selectedScale.complexity}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-[#D9FF5B] rounded-full transition-all duration-500"
                      style={{ width: `${selectedScale.complexity}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 font-medium">Service Domain:</span>
                    <span className="font-bold text-white text-right">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 font-medium">Tier Scale:</span>
                    <span className="font-bold text-white text-right">{selectedScale.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 font-medium">Production Time:</span>
                    <span className="font-bold text-[#D9FF5B] text-right">{selectedService.timeline}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400 font-medium">Selected Add-ons:</span>
                    <span className="font-bold text-white text-right">{selectedFeatures.length} Active</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/15 pt-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">Estimated Investment Range</p>
                  <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      ${estimatedMin.toLocaleString()}
                    </span>
                    <span className="text-xl sm:text-2xl text-[#D9FF5B] font-extrabold">– ${estimatedMax.toLocaleString()}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-gray-400 font-medium leading-relaxed">
                    Includes full source code, IP transfer, deployment & support.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F24202] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#ff5517]"
                >
                  Book Project with this Scope Range
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
