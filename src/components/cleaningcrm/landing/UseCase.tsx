"use client";

import { motion } from "framer-motion";

/* ── Bar chart bar helper ── */
function Bar({ height, active }: { height: number; active?: boolean }) {
  return (
    <div
      className="rounded-sm w-full"
      style={{
        height: `${height}px`,
        backgroundColor: active ? "#1A7A5E" : "#e0ede9",
      }}
    />
  );
}

/* ── Segmented progress bar ── */
function SegmentBar({ pct, color }: { pct: number; color: string }) {
  const total = 12;
  const filled = Math.round((pct / 100) * total);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-2 flex-1 rounded-sm"
          style={{ backgroundColor: i < filled ? color : "#e8e8e8" }}
        />
      ))}
    </div>
  );
}

const niches = [
  { emoji: "🇺🇸", label: "Residential Cleaning", sub: "Weekly home cleaning", revenue: "$9,032", pct: 76 },
  { emoji: "🇬🇧", label: "Commercial Offices", sub: "Contracts & recurring", revenue: "$6,450", pct: 58 },
  { emoji: "🇦🇺", label: "Airbnb Turnovers", sub: "Short-term rental sync", revenue: "$4,210", pct: 44 },
  { emoji: "🇨🇦", label: "Post-Construction", sub: "Builder handover cleans", revenue: "$2,678", pct: 32 },
];

const bookings = [
  { initials: "SM", color: "#1A7A5E", name: "Sarah M.", detail: "Deep Clean · Done", bar: 90 },
  { initials: "JD", color: "#f59e0b", name: "James D.", detail: "Standard · In Progress", bar: 55 },
  { initials: "AR", color: "#0ea5e9", name: "Anika R.", detail: "Move-out · Booked", bar: 20 },
];

/* ── Mini bar chart data ── */
const barData = [
  { h: 18 }, { h: 30 }, { h: 22 }, { h: 38 }, { h: 26 },
  { h: 44, active: true }, { h: 32 }, { h: 20 }, { h: 28 }, { h: 16 },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];

export default function UseCase() {
  return (
    <section id="who" className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ══════════════════════════════════
            TOP — badge + headline + CTA
        ══════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" fill="#1A7A5E" />
                <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-semibold text-foreground tracking-wide">Use Case</span>
            </div>

            {/* Headline */}
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
             
            >
              Built for Every Type of
              <br />Cleaning Business
            </h2>

            {/* Subtext */}
            <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-md">
              Whether you run a solo operation or manage 50 crews across multiple
              cities — Opygen Clean adapts to your workflow.
            </p>
          </div>

          {/* CTA */}
          <button
            className="flex items-center gap-2.5 font-semibold text-sm self-start lg:self-auto flex-shrink-0"
            style={{
              backgroundColor: "#0a0a0a",
              color: "white",
              borderRadius: "999px",
              padding: "12px 24px",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#1A7A5E"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#0a0a0a"; }}
          >
            Get Started Free
            <span
              style={{
                width: "24px", height: "24px", borderRadius: "50%",
                backgroundColor: "#1A7A5E", color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "13px", fontWeight: 700, flexShrink: 0,
                transition: "background 0.2s",
              }}
            >↗</span>
          </button>
        </motion.div>

        {/* ══════════════════════════════════
            MIDDLE ROW — 2 dashboard cards
        ══════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">

          {/* Card 1 — Bar chart (Jobs per month) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-secondary border border-border rounded-2xl p-7"
          >
            <h3 className="text-base font-bold text-foreground mb-1"
             >
              Jobs Completed
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Track completed jobs per month across your entire agency — automated and always up to date.
            </p>

            {/* Bar chart */}
            <div className="mt-2">
              <p className="text-[11px] text-muted-foreground mb-3 font-medium">Monthly Jobs</p>
              <div className="flex items-end gap-1.5 h-12">
                {barData.map((b, i) => (
                  <div key={i} className="flex-1 flex items-end">
                    <Bar height={b.h} active={b.active} />
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5 mt-1.5">
                {months.map((m) => (
                  <div key={m} className="flex-1 text-center text-[9px] text-muted-foreground">{m}</div>
                ))}
              </div>
              {/* Two group stats below */}
              <div className="flex gap-6 mt-5 pt-4 border-t border-border">
                <div>
                  <p className="text-[11px] text-muted-foreground">Residential</p>
                  <p className="text-lg font-bold text-foreground">83%</p>
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">Commercial</p>
                  <p className="text-lg font-bold text-foreground">45%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Revenue chart */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-secondary border border-border rounded-2xl p-7"
          >
            <h3 className="text-base font-bold text-foreground mb-1"
             >
              Revenue Dashboard
            </h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm leading-relaxed">
              Monitor your income, invoices, and net profit with smart tools designed for cleaning agency growth.
            </p>

            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              {["Revenue", "Invoices", "Expenses"].map((t, i) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full font-medium cursor-pointer"
                  style={
                    i === 0
                      ? { backgroundColor: "#0a0a0a", color: "white" }
                      : { backgroundColor: "#e8e8e8", color: "#6b6b6b" }
                  }
                >
                  {t}
                </span>
              ))}
              {/* Right label */}
              <span className="ml-auto text-xs text-muted-foreground flex items-center gap-1 cursor-pointer">
                Yearly ▾
              </span>
            </div>

            {/* Big number */}
            <p className="text-3xl font-bold text-foreground mb-1">
              $42,860<span className="text-lg font-normal text-muted-foreground">.00</span>
            </p>

            {/* Tooltip */}
            <div
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 mb-4 text-xs font-medium text-white"
              style={{ backgroundColor: "#1A7A5E" }}
            >
              <span className="w-2 h-2 rounded-full bg-white/50 inline-block" />
              August 2025 · $8,689.20
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-1 h-14">
              {[18, 24, 20, 30, 22, 38, 28, 52, 34, 22, 18, 26].map((h, i) => (
                <div key={i} className="flex-1 flex items-end">
                  <div
                    className="w-full rounded-sm"
                    style={{
                      height: `${h}px`,
                      backgroundColor: i === 7 ? "#1A7A5E" : "#d4e9e1",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-1 mt-1">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                <div key={m} className="flex-1 text-center text-[8px] text-muted-foreground">{m}</div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════
            BOTTOM ROW — niche list + booking UI
        ══════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-5">

          {/* Card 3 — Niche list with progress bars */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="bg-secondary border border-border rounded-2xl p-7"
          >
            <h3 className="text-base font-bold text-foreground mb-1"
             >
              Works Across Every Cleaning Niche
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Cleaning businesses worldwide rely on Opygen to manage operations,
              grow revenue, and keep teams organised.
            </p>

            <div className="flex flex-col gap-4">
              {niches.map((n, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg leading-none">{n.emoji}</span>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-none">{n.label}</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{n.sub}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-xs font-bold text-foreground">{n.revenue}</p>
                      <p className="text-[10px] text-muted-foreground">{n.pct}%</p>
                    </div>
                  </div>
                  <SegmentBar pct={n.pct} color="#1A7A5E" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 4 — Active bookings UI + headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-secondary border border-border rounded-2xl p-7 flex flex-col justify-between"
          >
            {/* Mock booking list UI */}
            <div
              className="rounded-xl border border-border p-5 bg-background mb-6"
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Active Bookings
              </p>
              <div className="flex flex-col gap-3">
                {bookings.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: b.color }}
                    >
                      {b.initials}
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-xs font-semibold text-foreground truncate">{b.name}</p>
                        <p className="text-[10px] text-muted-foreground ml-2 flex-shrink-0">{b.detail}</p>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${b.bar}%`, backgroundColor: b.color }}
                        />
                      </div>
                    </div>
                    {/* Action pill */}
                    {i === 1 && (
                      <div
                        className="flex-shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold text-white"
                        style={{ backgroundColor: "#1A7A5E" }}
                      >
                        View
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Text below */}
            <div>
              <h3
                className="text-xl font-bold text-foreground mb-2 leading-snug"
               
              >
                Real-time Job Tracking, Anywhere
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See every active booking, staff assignment, and payment status
                from one dashboard — on any device, any time.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}