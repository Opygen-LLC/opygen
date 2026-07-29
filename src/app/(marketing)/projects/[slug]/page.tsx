import type { Metadata } from "next";
import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";
import ProjectHeroImage from "@/src/components/marketing/ProjectHeroImage";
import { projects } from "@/src/data/projects";
import { SITE_CONFIG, generateBreadcrumbSchema } from "@/src/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { marketingButton, marketingButtonOnDark } from "@/lib/marketing-button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = `${project.project_name} — Case Study | ${SITE_CONFIG.name}`;
  const description =
    project.project_description ||
    ("description" in project ? String(project.description) : "") ||
    `${project.project_name} built by ${SITE_CONFIG.name}.`;
  const url = `${SITE_CONFIG.url}/projects/${project.slug}`;

  return {
    title,
    description,
    keywords: [
      project.project_name,
      project.project_type,
      ...(project.tech_stack || []),
      "Opygen Case Study",
      "Software Development Company",
      "Custom Software Development Bangladesh",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.project_name }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const descriptionText =
    project.project_description ||
    ("description" in project ? String(project.description) : "");

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.project_name,
    applicationCategory: project.project_type === "SaaS" ? "BusinessApplication" : "WebApplication",
    operatingSystem: "Web",
    description: descriptionText,
    image: project.image,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: project.project_name, url: `/projects/${project.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([projectSchema, breadcrumbSchema]),
        }}
      />
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#F7F7F4] font-space-grotesk text-[#111111] selection:bg-[#FFD6C7]">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-24">
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
            className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-[#D9FF5B]/60 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-8 h-[28rem] w-[28rem] rounded-full bg-[#FFD6C7]/70 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <div className="max-w-2xl">
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#626262] transition-colors hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F24202]"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Back to Portfolio
              </Link>

              <div className="mt-10 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-[#111111] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(17,17,17,0.12)]">
                  {project.project_type}
                </span>
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#555555] shadow-[0_10px_24px_rgba(17,17,17,0.05)]">
                  CASE STUDY
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-[3.5rem] font-semibold leading-[0.91] tracking-[-0.075em] sm:text-7xl lg:text-[5.85rem]">
                {project.project_name}
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-[#626262] sm:text-lg sm:leading-8">
                {descriptionText}
              </p>
            </div>

            <ProjectHeroImage
              image={project.image}
              projectName={project.project_name}
              projectType={project.project_type}
              duration={project.duration}
            />
          </div>
        </section>

        {/* Tech Stack & Quick Info Bar */}
        <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
          <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_22px_60px_rgba(17,17,17,0.07)] md:grid-cols-[1.25fr_0.9fr_auto] md:items-stretch">
            <div className="flex items-center gap-4 border-b border-black/10 p-5 sm:p-6 md:border-b-0 md:border-r">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F4] text-[#F24202]">
                <Briefcase className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#858585]">
                  Tech Stack
                </p>
                <p className="mt-1 truncate text-sm font-semibold text-[#222222] sm:text-base">
                  {project.tech_stack?.slice(0, 3).join(", ")}
                  {project.tech_stack?.length > 3 ? "..." : ""}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-black/10 p-5 sm:p-6 md:border-b-0 md:border-r">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F7F4] text-[#F24202]">
                <Calendar className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#858585]">
                  Timeline
                </p>
                <p className="mt-1 text-sm font-semibold text-[#222222] sm:text-base">
                  {project.duration}
                </p>
              </div>
            </div>

            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className={marketingButton("group min-h-auto px-5 py-3")}
              >
                Visit Live Site
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_16px_40px_rgba(17,17,17,0.05)] sm:p-10">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#FFD6C7]/60 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F24202]" />
                  <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#111111] sm:text-3xl">
                    The Challenge
                  </h2>
                </div>
                <div className="mt-9 space-y-6">
                  {project.real_challenges?.map((challenge, index) => (
                    <p
                      key={index}
                      className="border-l-2 border-[#F24202]/25 pl-5 text-[15px] font-medium leading-7 text-[#626262] sm:text-base"
                    >
                      {challenge}
                    </p>
                  ))}
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] bg-[#111111] p-7 text-white shadow-[0_18px_50px_rgba(17,17,17,0.18)] sm:p-10">
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#D9FF5B]/25 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D9FF5B]" />
                  <h2 className="text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                    Our Solution
                  </h2>
                </div>
                <div className="mt-9 space-y-6">
                  {(project.solutions_implemented || project.technical_solutions)?.map(
                    (solution, index) => (
                      <p
                        key={index}
                        className="border-l-2 border-[#D9FF5B]/35 pl-5 text-[15px] font-medium leading-7 text-white/70 sm:text-base"
                      >
                        {solution}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Results / Key Features */}
        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2.25rem] bg-[#111111] p-7 shadow-[0_30px_70px_rgba(17,17,17,0.2)] sm:p-10 lg:rounded-[3rem] lg:p-16">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#F24202]/60 blur-3xl" />
            <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#D9FF5B]/35 blur-3xl" />

            <div className="relative grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                  <Sparkles className="h-3.5 w-3.5 text-[#D9FF5B]" aria-hidden="true" />
                  Measurable Impact
                </div>
                <h2 className="mt-6 text-4xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-5xl">
                  The Results
                </h2>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {project.key_features?.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D9FF5B] text-[#111111]">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium leading-6 text-white/82">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-7 text-center backdrop-blur-sm sm:p-9">
                <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.055em] text-white">
                  Ready to achieve similar results?
                </h3>
                <p className="mx-auto mt-5 max-w-md text-base leading-7 text-white/70">
                  Let&apos;s discuss how we can transform your digital presence and drive real growth.
                </p>
                <Link
                  href="/#contact"
                  className={marketingButtonOnDark("group mt-8")}
                >
                  Start Your Project
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
