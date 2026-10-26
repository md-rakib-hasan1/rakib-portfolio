import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  Flame,
  Home,
  Layers,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { projects, getProjectBySlug } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study & Project Details`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Rakib Hasan Portfolio`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} preview screenshot`,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find previous and next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#090B12] pt-28 pb-20 overflow-hidden">
        {/* Ambient Aurora lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-24 size-[420px] rounded-full bg-[#9B7BFF]/[0.1] blur-[150px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 size-[380px] rounded-full bg-[#55D6FF]/[0.08] blur-[140px]"
        />

        <div className="container relative space-y-12 sm:space-y-16">
          {/* Breadcrumbs & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs sm:text-sm text-[#A3A9BA]"
            >
              <Link
                href="/"
                className="flex items-center gap-1 transition-colors hover:text-[#55D6FF]"
              >
                <Home size={14} />
                <span>Home</span>
              </Link>
              <ChevronRight size={14} className="text-[#6C7488]" />
              <Link
                href="/#projects"
                className="transition-colors hover:text-[#55D6FF]"
              >
                Projects
              </Link>
              <ChevronRight size={14} className="text-[#6C7488]" />
              <span className="font-semibold text-[#F4F5FA] truncate max-w-[200px] sm:max-w-none">
                {project.title}
              </span>
            </nav>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(163,169,186,0.2)] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-[#D5DBE8] transition-all hover:border-[#9B7BFF]/50 hover:bg-[#9B7BFF]/10 hover:text-white"
            >
              <ArrowLeft size={13} />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Project Header Showcase */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-md bg-[#9B7BFF]/20 px-3 py-1 text-xs font-semibold text-[#D5DBE8] border border-[#9B7BFF]/35">
                {project.category}
              </span>
              <span className="rounded-md bg-white/[0.04] px-3 py-1 text-xs font-medium text-[#A3A9BA] border border-white/[0.08]">
                Project {project.number} of 03
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-[#F4F5FA] sm:text-4xl md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-lg font-medium text-[#55D6FF]">
                {project.tagline}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#7B58EE] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#9B7BFF]/25 transition-all hover:brightness-110"
              >
                <span>View Live Project</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[rgba(163,169,186,0.2)] bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-[#F4F5FA] transition-all hover:border-white/40 hover:bg-white/10"
              >
                <FaGithub size={16} />
                <span>Client Repository</span>
              </a>
            </div>
          </div>

          {/* Genuine Project Screenshot */}
          <div className="glass-card relative overflow-hidden rounded-2xl border border-[rgba(163,169,186,0.18)] bg-[#111522] shadow-2xl">
            <div className="relative aspect-[16/9] w-full max-h-[620px] overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} full interface preview`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1140px"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#090B12]/60 via-transparent to-transparent pointer-events-none"
              />
            </div>
          </div>

          {/* Two-Column Overview & Problem Statement */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Project Overview */}
            <div className="glass-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-[#9B7BFF]">
                <Layers size={20} />
                <h2 className="text-xl font-bold text-[#F4F5FA]">
                  Project Overview
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-7 text-[#A3A9BA]">
                {project.longDescription}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="glass-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-[#55D6FF]">
                <Flame size={20} />
                <h2 className="text-xl font-bold text-[#F4F5FA]">
                  Problem It Solves
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-7 text-[#A3A9BA]">
                {project.problemStatement}
              </p>
            </div>
          </div>

          {/* Verified Technology Stack */}
          <div className="glass-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 text-[#9B7BFF]">
              <Code2 size={20} />
              <h2 className="text-xl font-bold text-[#F4F5FA]">
                Verified Technology Stack
              </h2>
            </div>

            <p className="text-sm text-[#A3A9BA]">
              All technologies implemented directly within the application and client repository:
            </p>

            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#9B7BFF]/30 bg-[#161C2E] px-4 py-2 text-xs sm:text-sm font-semibold text-[#D5DBE8]"
                >
                  <Sparkles size={13} className="text-[#55D6FF]" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="glass-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 text-[#55D6FF]">
              <ShieldCheck size={20} />
              <h2 className="text-xl font-bold text-[#F4F5FA]">
                Key Implemented Features
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-[#55D6FF]/30"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 mt-0.5 text-[#55D6FF]"
                  />
                  <p className="text-xs sm:text-sm leading-relaxed text-[#D5DBE8]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Challenges & Solutions */}
          <div className="glass-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 text-[#9B7BFF]">
              <Lightbulb size={20} />
              <h2 className="text-xl font-bold text-[#F4F5FA]">
                Development Challenges &amp; Solutions
              </h2>
            </div>

            <p className="text-sm text-[#A3A9BA]">
              Real hurdles encountered during architecture, state modeling, and implementation:
            </p>

            <div className="space-y-5">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[rgba(163,169,186,0.12)] bg-[#111522] p-5 sm:p-6 space-y-3"
                >
                  <h3 className="text-base font-bold text-[#F4F5FA] flex items-center gap-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#9B7BFF]/20 text-xs font-bold text-[#9B7BFF]">
                      {idx + 1}
                    </span>
                    {challenge.title}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-[#A3A9BA] pl-8">
                    <p>
                      <strong className="text-[#D5DBE8]">The Challenge:</strong>{" "}
                      {challenge.description}
                    </p>
                    <p>
                      <strong className="text-[#55D6FF]">Approach &amp; Solution:</strong>{" "}
                      {challenge.solution}
                    </p>
                    <p>
                      <strong className="text-emerald-400">What I Learned:</strong>{" "}
                      {challenge.learned}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Improvements Roadmap */}
          <div className="glass-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 text-[#55D6FF]">
              <Rocket size={20} />
              <h2 className="text-xl font-bold text-[#F4F5FA]">
                Future Roadmap &amp; Improvements
              </h2>
            </div>

            <p className="text-sm text-[#A3A9BA]">
              Planned technical enhancements and product refinements:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {project.futureImprovements.map((improvement, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#55D6FF]/15 text-[10px] font-bold text-[#55D6FF] mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-[#A3A9BA]">
                    {improvement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Previous / Next Project Navigation */}
          <div className="grid gap-4 sm:grid-cols-2 pt-6 border-t border-[rgba(163,169,186,0.12)]">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="glass-card group flex items-center justify-between p-5 transition-all hover:border-[#9B7BFF]/40"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-[#6C7488] uppercase tracking-wider flex items-center gap-1.5">
                  <ArrowLeft size={12} /> Previous Project
                </span>
                <p className="font-bold text-[#F4F5FA] group-hover:text-[#55D6FF] transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="glass-card group flex items-center justify-between p-5 text-right transition-all hover:border-[#55D6FF]/40"
            >
              <div className="space-y-1 w-full">
                <span className="text-[11px] font-semibold text-[#6C7488] uppercase tracking-wider flex items-center justify-end gap-1.5">
                  Next Project <ArrowRight size={12} />
                </span>
                <p className="font-bold text-[#F4F5FA] group-hover:text-[#55D6FF] transition-colors">
                  {nextProject.title}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
