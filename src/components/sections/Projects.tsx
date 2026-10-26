import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[rgba(163,169,186,0.12)] bg-[#090B12] section-padding"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 size-[420px] rounded-full bg-[#9B7BFF]/[0.08] blur-[140px]"
      />

      <div className="container relative">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#9B7BFF] uppercase">
              Curated Showcase
            </p>

            <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#F4F5FA] sm:text-4xl md:text-5xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#A3A9BA] sm:text-base sm:leading-8">
              Real-world web applications built with modern tools. Each project
              represents a practical step in turning concepts into clean, functional code.
            </p>
          </div>

          <a
            href="https://github.com/md-rakib-hasan1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#55D6FF] transition-colors hover:text-white"
          >
            <span>Explore all repos on GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Project Showcase Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <article
                key={project.slug}
                className="glass-card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9B7BFF]/40"
              >
                {/* Visual Preview */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-[#111522]">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#090B12]/80 via-transparent to-black/25 pointer-events-none"
                  />

                  {/* Project Tag & Number */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#D5DBE8] backdrop-blur-md border border-white/10 uppercase">
                      Project {project.number}
                    </span>

                    <span className="rounded-md bg-[#9B7BFF]/20 px-2.5 py-1 text-[11px] font-semibold text-[#D5DBE8] backdrop-blur-md border border-[#9B7BFF]/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[#F4F5FA] group-hover:text-[#55D6FF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-6 text-[#A3A9BA]">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-[#D5DBE8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="mt-7 flex flex-wrap items-center gap-2.5 pt-5 border-t border-[rgba(163,169,186,0.12)]">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex flex-1 min-w-[110px] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#7B58EE] px-3.5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#9B7BFF]/20 transition-all hover:brightness-110"
                    >
                      <Info size={14} />
                      View Details
                    </Link>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#55D6FF]/30 bg-[#55D6FF]/10 px-3.5 py-2.5 text-xs font-semibold text-[#55D6FF] transition-all hover:bg-[#55D6FF]/20"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <span>Live</span>
                      <ExternalLink size={13} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-[#A3A9BA] transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
                      aria-label={`View GitHub source code of ${project.title}`}
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer info note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6C7488]">
            Click &ldquo;View Details&rdquo; on any project to see architecture, real development challenges, and future roadmaps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
