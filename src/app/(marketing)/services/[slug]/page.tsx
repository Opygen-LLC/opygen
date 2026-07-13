import Footer from "@/src/components/marketing/Footer";
import Navbar from "@/src/components/marketing/Navbar";
import { servicePages } from "@/src/data/service-pages";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const approach = [
  {
    number: "01",
    title: "Clarify the opportunity",
    description:
      "We align the work around your goals, your audience, and the decisions that will make the biggest difference.",
  },
  {
    number: "02",
    title: "Create the right system",
    description:
      "Strategy, design, and technology are shaped together so every part of the experience has a clear purpose.",
  },
  {
    number: "03",
    title: "Launch with momentum",
    description:
      "We deliver work your team can use, improve, and build on as the business keeps moving forward.",
  },
];

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicePages.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#F7F7F4] font-space-grotesk text-[#111111] selection:bg-[#FFD6C7]">
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-28">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -left-28 top-28 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: service.accentSoft }}
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-0 h-[30rem] w-[30rem] rounded-full blur-3xl"
            style={{ backgroundColor: service.accent, opacity: 0.2 }}
          />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <div className="max-w-2xl">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#626262] transition-colors hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                All Services
              </Link>

              <p
                className="mt-10 inline-flex rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#111111] shadow-[0_10px_24px_rgba(17,17,17,0.08)]"
                style={{ backgroundColor: service.accentSoft }}
              >
                {service.badge}
              </p>
              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#777777]">
                Opygen Services
              </p>
              <h1 className="mt-3 max-w-3xl text-[3.5rem] font-semibold leading-[0.91] tracking-[-0.075em] sm:text-7xl lg:text-[5.85rem]">
                {service.title}
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-[#626262] sm:text-lg sm:leading-8">
                {service.description}
              </p>
              <Link
                href="/#contact"
                className="group mt-9 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_32px_rgba(17,17,17,0.18)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]"
              >
                Start this project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-[720px] lg:justify-self-end">
              <div
                aria-hidden="true"
                className="absolute -left-5 top-[18%] hidden h-28 w-28 rounded-full border border-black/10 bg-white/65 sm:block"
              />
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-5 h-20 w-20 rounded-[1.5rem] sm:-right-7 sm:-top-7 sm:h-28 sm:w-28"
                style={{ backgroundColor: service.accent }}
              />
              <div className="relative rounded-[2rem] bg-[#111111] p-3 shadow-[0_35px_80px_rgba(17,17,17,0.22)] sm:rounded-[2.5rem] sm:p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem] bg-[#222222] sm:rounded-[1.9rem]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                      {service.badge}
                    </p>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-[#111111] shadow-lg"
                      style={{ backgroundColor: service.accentSoft }}
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <header className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:pb-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: service.accent }}>
                  What we deliver
                </p>
                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-5xl lg:text-[4rem]">
                  The work your business needs to move with confidence.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#626262] sm:text-lg sm:leading-8 lg:justify-self-end">
                A focused service designed to make the next important part of your business clearer, stronger, and easier to grow.
              </p>
            </header>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, index) => (
                <article key={feature} className="group rounded-2xl border border-black/10 bg-[#F7F7F4] p-5 transition-transform duration-200 hover:-translate-y-1 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-[#111111]"
                      style={{ backgroundColor: service.accentSoft }}
                    >
                      0{index + 1}
                    </span>
                    <CheckCircle2 className="h-5 w-5" style={{ color: service.accent }} aria-hidden="true" />
                  </div>
                  <p className="mt-12 text-xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#111111]">
                    {feature}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#111111] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-16 h-80 w-80 rounded-full blur-3xl"
            style={{ backgroundColor: service.accent, opacity: 0.55 }}
          />
          <div aria-hidden="true" className="absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-[#D9FF5B]/35 blur-3xl" />
          <div className="relative mx-auto max-w-[1400px]">
            <header className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                  <Sparkles className="h-3.5 w-3.5 text-[#D9FF5B]" aria-hidden="true" />
                  Our approach
                </p>
                <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-5xl lg:text-[4rem]">
                  The right process makes ambitious work feel possible.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 lg:justify-self-end">
                We keep the work focused from first decision to final handoff, with a shared view of what success looks like at every stage.
              </p>
            </header>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {approach.map((step) => (
                <article key={step.number} className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm sm:p-7">
                  <span className="text-sm font-semibold" style={{ color: service.accentSoft }}>
                    {step.number}
                  </span>
                  <h3 className="mt-10 text-3xl font-semibold leading-[0.98] tracking-[-0.055em]">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-7 text-white/68">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1400px]">
            <header className="flex flex-col gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F24202]">More ways we can help</p>
                <h2 className="mt-5 text-4xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-5xl">
                  Explore other services.
                </h2>
              </div>
              <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#555555] transition-colors hover:text-[#111111]">
                All Services
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </header>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group relative min-h-56 overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-[0_12px_30px_rgba(17,17,17,0.04)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl"
                    style={{ backgroundColor: related.accent, opacity: 0.2 }}
                  />
                  <div className="relative flex h-full flex-col">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#777777]">{related.badge}</p>
                    <h3 className="mt-5 text-2xl font-semibold leading-[0.98] tracking-[-0.055em]">{related.title}</h3>
                    <ArrowUpRight className="mt-auto h-5 w-5 text-[#111111] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2.25rem] bg-[#111111] px-7 py-12 text-center shadow-[0_30px_70px_rgba(17,17,17,0.2)] sm:px-10 sm:py-16 lg:rounded-[3rem] lg:py-20">
            <div
              aria-hidden="true"
              className="absolute -left-24 -top-24 h-80 w-80 rounded-full blur-3xl"
              style={{ backgroundColor: service.accent, opacity: 0.65 }}
            />
            <div aria-hidden="true" className="absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-[#D9FF5B]/35 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-[#D9FF5B]" aria-hidden="true" />
                Ready when you are
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
                Let&apos;s make {service.title.toLowerCase()} work harder for your business.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Tell us where you want to go. We&apos;ll help you find the clearest path to get there.
              </p>
              <Link
                href="/#contact"
                className="group mt-9 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#D9FF5B] px-6 py-3.5 text-sm font-semibold text-[#111111] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
