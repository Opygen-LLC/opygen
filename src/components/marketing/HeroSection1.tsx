import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

const capabilities = ["Brand strategy", "Digital products", "Web development"];

export default function HeroSection1() {
  return (
    <section
      id="home"
      aria-labelledby="agency-hero-title"
      className="relative isolate overflow-hidden bg-[#F7F7F4] px-5 py-20 text-[#111111] sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#E5FF9B]/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 h-[30rem] w-[30rem] rounded-full bg-[#FFD6C7]/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[0.93fr_1.07fr] lg:gap-12 xl:gap-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4B4B4B] shadow-[0_10px_30px_rgba(17,17,17,0.05)] backdrop-blur-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D9FF5B] text-black">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
            </span>
            Independent digital studio
          </p>

          <h1
            id="agency-hero-title"
            className="mt-7 max-w-[760px] text-[3.35rem] font-semibold leading-[0.93] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[5.35rem] xl:text-[6.25rem]"
          >
            Built to make your{" "}
            <span className="relative inline-block whitespace-nowrap text-[#F24202]">
              next move
              <span className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-[#FFD6C7] sm:h-3" />
            </span>{" "}
            impossible to ignore.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-[#626262] sm:text-lg sm:leading-8">
            Opygen partners with ambitious teams to shape distinct brands, build
            useful digital products, and create websites that turn attention into
            momentum.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_32px_rgba(17,17,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F24202] hover:shadow-[0_20px_36px_rgba(242,66,2,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]"
            >
              Start a project
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#projects"
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#222222] transition duration-300 hover:border-black/25 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Explore our work
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F7F7F4] bg-[#151515] text-[10px] font-bold text-white">O</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F7F7F4] bg-[#FFBEA6] text-[10px] font-bold text-[#111111]">Y</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F7F7F4] bg-[#D9FF5B] text-[10px] font-bold text-[#111111]">G</span>
              </div>
              <p className="text-sm leading-5 text-[#626262]">
                A focused senior team, from first sketch to launch.
              </p>
            </div>
            <p className="flex items-center gap-2 text-sm font-medium text-[#3F3F3F]">
              <Check className="h-4 w-4 text-[#F24202]" aria-hidden="true" />
              Strategy-led, never templated
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[660px] lg:mx-0 lg:justify-self-end">
          <div
            aria-hidden="true"
            className="absolute -left-6 top-[16%] hidden h-28 w-28 rounded-full border border-black/10 bg-white/70 sm:block lg:-left-12"
          />
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-7 h-24 w-24 rounded-[2rem] bg-[#D9FF5B] sm:-right-10 sm:-top-10 sm:h-32 sm:w-32"
          />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#151515] p-3 shadow-[0_38px_85px_rgba(17,17,17,0.24)] sm:rounded-[2.5rem] sm:p-4">
            <div className="relative min-h-[450px] overflow-hidden rounded-[1.45rem] bg-[#202020] p-5 text-white sm:min-h-[530px] sm:rounded-[1.9rem] sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -right-28 top-16 h-72 w-72 rounded-full bg-[#F24202] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#D9FF5B]/80 blur-3xl"
              />

              <div className="relative flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
                <span>Opygen / 2026</span>
                <span className="flex items-center gap-2 text-[#D9FF5B]">
                  <span className="h-2 w-2 rounded-full bg-[#D9FF5B]" />
                  Available worldwide
                </span>
              </div>

              <div className="relative mt-8 flex flex-col justify-between gap-8 sm:mt-10">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">Creative direction + technology</p>
                  <p className="mt-4 max-w-md text-5xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-6xl">
                    More signal.<br />
                    Less noise.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1.25fr_0.75fr]">
                  <div className="rounded-2xl border border-white/15 bg-white/[0.09] p-4 backdrop-blur-sm sm:p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Digital presence</p>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D9FF5B] text-black">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-12 flex items-end justify-between gap-4 sm:mt-16">
                      <p className="text-2xl font-semibold tracking-[-0.05em]">Designed<br />to convert.</p>
                      <div className="flex h-14 w-14 items-end gap-1 rounded-2xl bg-[#F24202] p-2" aria-hidden="true">
                        <span className="h-[35%] flex-1 rounded-full bg-white/70" />
                        <span className="h-[70%] flex-1 rounded-full bg-white/80" />
                        <span className="h-full flex-1 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex min-h-44 flex-col justify-between rounded-2xl bg-[#D9FF5B] p-4 text-[#111111] sm:p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em]">Selected focus</span>
                    <div>
                      <p className="text-4xl font-semibold tracking-[-0.07em]">01 / 03</p>
                      <p className="mt-1 text-xs font-medium leading-5 text-black/65">Ideas given shape, systems and speed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-2 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-[0_16px_40px_rgba(17,17,17,0.14)] sm:-left-10 sm:px-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#858585]">Our approach</p>
            <p className="mt-1 text-xs font-semibold text-[#222222]">Clear thinking. Bold execution.</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-[1400px] flex-wrap gap-x-5 gap-y-3 border-t border-black/10 pt-5 sm:mt-20">
        {capabilities.map((capability, index) => (
          <span key={capability} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666666]">
            <span className="text-[#F24202]">0{index + 1}</span>
            {capability}
          </span>
        ))}
      </div>
    </section>
  );
}
