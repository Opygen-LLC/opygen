"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    /*
      ── Outer wrapper: 12px margin on sides + top, 0 bottom ──
      Creates the Finseer "inset card" look — gradient section
      floats with rounded top corners away from page edge.
      Bottom is open so the dashboard image bleeds into the next section.
    */
    <div className="pt-3 px-3 bg-background">
      <section
        className="relative overflow-hidden flex flex-col rounded-t-[20px] min-h-[calc(100vh-12px)] pt-[64px]"
        style={{
          background:
            "linear-gradient(138deg, #0b3d2e 0%, #124f3a 22%, #1A7A5E 55%, #1e9268 80%, #16a566 100%)",
        }}
      >
        {/* ── Subtle grid overlay ── */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
          }}
        />

        {/* ── Radial glow behind headline ── */}
        <div
          aria-hidden
          className="absolute pointer-events-none top-0 left-1/2 -translate-x-1/2 w-[860px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 25%, rgba(255,255,255,0.09) 0%, transparent 62%)",
          }}
        />

        {/* ══════════════════════
            CENTERED HERO TEXT
        ══════════════════════ */}
        <div className="flex-1 flex flex-col items-center justify-center px-5 pt-8 pb-12 relative z-10">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 bg-white/10 border border-white/20 backdrop-blur-[10px]">
              <span className="text-[11px] font-bold tracking-[0.02em] bg-white text-[#1A7A5E] px-2.5 py-0.5 rounded-full">
                New
              </span>
              <span className="text-[13px] font-medium text-white/80 tracking-[-0.01em]">
                The Cleaning Business CRM ✨
              </span>
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-white font-bold leading-[1.07] max-w-[740px] mx-auto text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.028em] drop-shadow-[0_2px_28px_rgba(0,0,0,0.16)]"
          >
            Run Your Entire Cleaning
            <br className="hidden sm:block" />
            Business From One Place
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-5 max-w-[490px] mx-auto leading-relaxed text-[rgba(255,255,255,0.66)] text-[clamp(0.88rem,1.8vw,1.05rem)] tracking-[-0.01em]"
          >
            Manage bookings, dispatch crews, collect payments, and give clients a
            professional booking experience — all in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.60, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 mt-9"
          >
            {/* Primary */}
            <button className="flex items-center gap-2.5 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] bg-white text-[#1A7A5E] rounded-full text-[14px] font-semibold px-[26px] py-3 tracking-[-0.01em] shadow-[0_4px_24px_rgba(0,0,0,0.22)] border-none cursor-pointer">
              Get Started Free
              <span className="w-6 h-6 rounded-full bg-[#1A7A5E] text-white flex items-center justify-center text-[13px] font-bold shrink-0">
                ↗
              </span>
            </button>

            {/* Secondary */}
            <button className="flex items-center gap-2.5 transition-colors duration-200 bg-white/10 hover:bg-white/[0.17] text-white border border-white/25 rounded-full text-[14px] font-semibold px-[26px] py-3 tracking-[-0.01em] backdrop-blur-[8px] cursor-pointer">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg width="8" height="9" viewBox="0 0 8 9" fill="white">
                  <path d="M0.5 0.5L7.5 4.5L0.5 8.5V0.5Z" />
                </svg>
              </span>
              Watch Demo
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.30, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-5 mt-8"
          >
            {/* Avatars + count */}
            <div className="flex items-center gap-2.5">
              <div className="flex">
                {[
                  { init: "JD", hue: 158 },
                  { init: "AL", hue: 173 },
                  { init: "MR", hue: 143 },
                ].map(({ init, hue }, idx) => (
                  <div
                    key={init}
                    className={`w-[28px] h-[28px] rounded-full flex items-center justify-center text-[9px] font-bold text-[#0d4a38] border-2 border-white/30 relative ${idx > 0 ? "-ml-2" : ""}`}
                    style={{
                      backgroundColor: `hsl(${hue}, 44%, 83%)`,
                      zIndex: 3 - idx,
                    }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <span className="text-[13px] font-semibold text-white">
                2,400+{" "}
              </span>
              <span className="text-[13px] text-white/60">
                cleaning agencies
              </span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-4 bg-white/20" />

            {/* Stars */}
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400 text-[13px] tracking-[1px]">
                ★★★★★
              </span>
              <span className="text-[13px] font-semibold text-white">4.9</span>
              <span className="text-[13px] text-white/60">
                rating
              </span>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════
            DASHBOARD IMAGE
            ────────────────────────────────────────────────────
            HOW TO USE:
            1. Take a screenshot of your Opygen Clean admin dashboard
            2. Save it to: public/dashboard-preview.png
               (Recommended: 2200 × 1300px, PNG or WebP)
            3. Image auto-displays. Placeholder shows until added.
        ══════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.90, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto w-full max-w-[1080px] px-4"
        >
          <div className="rounded-t-2xl overflow-hidden border border-white/10 border-b-0 shadow-[0_-8px_48px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.06)]">
            {/* ── Replace src with your actual dashboard screenshot path ── */}
            <img
              src="/dashboard-preview.png"
              alt="Opygen Clean admin dashboard"
              className="w-full h-auto block max-h-[580px] object-cover object-top bg-[#f5f7f9]"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
                const fallback = img.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />

            {/* ── Placeholder until real screenshot is added ── */}
            <div
              className="h-[460px] bg-[#f5f7f9] flex-col items-center justify-center gap-3.5 relative"
              style={{ display: "none" }}
            >
              {/* Fake top bar */}
              <div className="absolute top-0 left-0 right-0 h-[46px] bg-white border-b border-[#efefef] flex items-center px-5 gap-3">
                <div className="w-[26px] h-[26px] rounded-lg bg-[#1A7A5E] shrink-0" />
                <span className="text-[13px] font-semibold text-[#111]">
                  Opygen Clean — Dashboard
                </span>
                <div className="flex-1" />
                <div className="flex items-center gap-1.5 bg-[#f3f3f3] rounded-full px-3.5 py-1 text-[11px] text-[#aaa]">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <circle cx="4.5" cy="4.5" r="3" stroke="#bbb" strokeWidth="1.2" />
                    <path
                      d="M7 7L9.5 9.5"
                      stroke="#bbb"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Search anything...
                </div>
              </div>

              {/* Placeholder body */}
              <div className="mt-[46px] text-center py-10 px-6">
                <div className="w-[52px] h-[52px] rounded-2xl bg-[#e8f5f0] flex items-center justify-center mx-auto mb-4">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="2" width="8" height="8" rx="2" fill="#1A7A5E" fillOpacity="0.70" />
                    <rect x="12" y="2" width="8" height="8" rx="2" fill="#1A7A5E" fillOpacity="0.40" />
                    <rect x="2" y="12" width="8" height="8" rx="2" fill="#1A7A5E" fillOpacity="0.40" />
                    <rect x="12" y="12" width="8" height="8" rx="2" fill="#1A7A5E" fillOpacity="0.18" />
                  </svg>
                </div>
                <p className="text-[15px] font-semibold text-[#222] mb-2">
                  Add Your Dashboard Screenshot
                </p>
                <p className="text-[12.5px] text-[#999] mb-4 leading-relaxed">
                  Save your screenshot to:
                </p>
                <code className="inline-block bg-[#efefef] text-[#555] px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-[0.01em]">
                  public/dashboard-preview.png
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}