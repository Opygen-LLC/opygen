"use client";

import { motion } from "framer-motion";

/* ─── Testimonial data ─── */
const row1 = [
  {
    quote: "Our booking volume doubled in 3 months. Clients love being able to book and pay online at midnight if they want.",
    name: "Sarah Jenkins",
    role: "Owner, Sparkle & Shine",
    initials: "SJ",
    color: "#1A7A5E",
  },
  {
    quote: "Dispatching used to take me 3 hours every night. Now the system does it automatically — staff just check their portal.",
    name: "David Chen",
    role: "Director, Urban Maids",
    initials: "DC",
    color: "#0ea5e9",
  },
  {
    quote: "The automated invoices and Stripe integration mean I get paid instantly. No more chasing clients for checks.",
    name: "Maria Rodriguez",
    role: "Founder, Pristine Co",
    initials: "MR",
    color: "#f59e0b",
  },
  {
    quote: "We scaled from 5 to 20 cleaners in 6 months. Opygen handled the growth without us changing a single process.",
    name: "James Wilson",
    role: "CEO, Elite Cleaning",
    initials: "JW",
    color: "#8b5cf6",
  },
  {
    quote: "Finally a CRM that actually understands what a cleaning business needs. Setup was under 10 minutes.",
    name: "Amanda Smith",
    role: "Owner, Fresh Start",
    initials: "AS",
    color: "#ec4899",
  },
  {
    quote: "My Airbnb cleaning business runs on autopilot now. Bookings sync automatically and staff get instant notifications.",
    name: "Carlos Diaz",
    role: "Founder, QuickTurn Cleans",
    initials: "CD",
    color: "#22c55e",
  },
];

const row2 = [
  {
    quote: "Revenue tracking used to be a nightmare. Now I open the dashboard and see exactly where every dollar came from.",
    name: "Priya Kapoor",
    role: "Owner, MaidFresh",
    initials: "PK",
    color: "#1A7A5E",
  },
  {
    quote: "The booking page looks so professional. Clients trust us more because we have a real online presence now.",
    name: "Noah Reed",
    role: "Technical Consultant, CleanEdge",
    initials: "NR",
    color: "#f59e0b",
  },
  {
    quote: "I love how the staff portal keeps everyone accountable. No excuses for missed jobs — it's all logged.",
    name: "Liam Foster",
    role: "Manager, BrightSquad",
    initials: "LF",
    color: "#0ea5e9",
  },
  {
    quote: "Expense tracking is a game changer. I finally know my real profit margin after supplies and fuel.",
    name: "Aiden Brooks",
    role: "Owner, SwiftMaids",
    initials: "AB",
    color: "#8b5cf6",
  },
  {
    quote: "Client history is all in one place. When someone calls I know exactly what jobs they've had and what they paid.",
    name: "Rachel Kim",
    role: "Director, GlossyClean",
    initials: "RK",
    color: "#ec4899",
  },
  {
    quote: "Best decision I made this year was switching to Opygen. My admin time dropped by 80% in the first week.",
    name: "Tom Nguyen",
    role: "Founder, PristineGroup",
    initials: "TN",
    color: "#22c55e",
  },
];

/* ─── Single card ─── */
function TestimonialCard({
  quote, name, role, initials, color,
}: {
  quote: string; name: string; role: string; initials: string; color: string;
}) {
  return (
    <div
      className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 border border-border flex flex-col"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Stars */}
      <div className="text-yellow-400 text-base tracking-wider mb-4">★★★★★</div>

      {/* Quote */}
      <p className="text-sm text-foreground leading-relaxed flex-1 mb-5">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground leading-none">{name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Marquee row ─── */
function MarqueeRow({
  items,
  direction = "left",
  speed = 40,
}: {
  items: typeof row1;
  direction?: "left" | "right";
  speed?: number;
}) {
  /* Duplicate cards for seamless loop */
  const doubled = [...items, ...items];
  const totalCards = items.length;
  /* Each card is w-80 (320px) + gap-5 (20px) = 340px per card */
  const totalWidth = totalCards * 340;

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5"
        style={{
          width: `${totalWidth * 2}px`,
          animation: `marquee-${direction} ${(totalWidth / speed)}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main section ─── */
export default function Testimonials() {
  return (
    <>
      {/* Inject keyframe animations */}
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

      <div style={{ padding: "24px 12px", backgroundColor: "white" }}>
      <section
        id="testimonials"
        className="overflow-hidden rounded-[20px]"
        style={{ background: "linear-gradient(138deg, #0b3d2e 0%, #145c44 30%, #1A7A5E 60%, #1f9070 85%, #17a36a 100%)" }}
      >
        {/* ── Header ── */}
        <div className="py-20 px-6 text-center">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-6"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(10px)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" fill="white" fillOpacity="0.9" />
                <path
                  d="M4 7l2 2 4-4"
                  stroke="#1A7A5E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-semibold text-white tracking-wide">
                Client Testimonials
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08]"
           
          >
            What Cleaning Agency
            <br className="hidden sm:block" /> Owners Say About Us
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-base max-w-md mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Honest feedback from agency owners who trust Opygen to run
            their operations every day.
          </motion.p>
        </div>

          {/* ── Marquee rows ── */}
          <div className="py-12 flex flex-col gap-5">
            {/* Row 1 — right to left */}
            <MarqueeRow items={row1} direction="left" speed={45} />

            {/* Row 2 — left to right */}
            <MarqueeRow items={row2} direction="right" speed={40} />
          </div>

      </section>
    </div>
    </>
  );
}