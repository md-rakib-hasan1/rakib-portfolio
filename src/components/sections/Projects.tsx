
import Image from "next/image";
import {
    ArrowUpRight,
    ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        number: "01",
        title: "Bazar Dor",
        category: "Grocery Price Platform",
        description:
            "A Bengali-focused grocery platform for exploring products and viewing current and previous prices through a responsive interface.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth"],
        liveUrl: "https://bazar-dor-phi-ebon.vercel.app/",
        githubUrl: "https://github.com/md-rakib-hasan1/Bazar-Dor",
        image: "/assets/bazar-dor.png",
        featured: true,
    },
    {
        number: "02",
        title: "FitLog",
        category: "Workout Library",
        description:
            "A workout library project designed to help users explore exercises and organize their workout plans.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
        liveUrl: "https://fit-log-delta-snowy.vercel.app/",
        githubUrl: "https://github.com/md-rakib-hasan1/fit-log",
        image: "/assets/fitlog.png",
        featured: false,
    },

    {
        number: "03",
        title: "Dev Stack Builder",
        category: "Technology Stack Builder",
        description:
            "A React-based application that lets developers explore technologies and build their own tech stack by adding and removing technology cards.",
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
        ],
        liveUrl: "https://dev-stack-builder-rose.vercel.app",
        githubUrl: "https://github.com/md-rakib-hasan1/dev-stack-builder",
        image: "/assets/dev-stack-builder.png",
        featured: false,
    },

];

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden border-t border-white/[0.06] bg-[#080f1d] section-padding"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-24 size-[360px] rounded-full bg-blue-500/[0.09] blur-[120px]"
            />

            <div className="container relative">
                <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#8ab8ff] uppercase">
                            What I have been building
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[#f1f5fc] sm:text-4xl md:text-5xl">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-[#9aaac2] sm:text-base sm:leading-8">
                            A selection of projects where I practice my skills, explore
                            new technologies, and turn ideas into working applications.
                        </p>
                    </div>

                    <a
                        href="https://github.com/md-rakib-hasan1"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#b9c9df] transition-colors hover:text-[#8ab8ff]"
                    >
                        More on GitHub
                        <ArrowUpRight size={17} />
                    </a>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {projects.map((project) => {
                        return (
                            <article
                                key={project.number}
                                className="glass-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25"
                            >
                                {/* Project visual */}
                                <div className="watercolor-glow relative aspect-[2/1] overflow-hidden border-b border-white/[0.06] bg-[#0d192b]">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} project screenshot`}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"
                                    />

                                    <span className="absolute left-5 top-5 text-xs font-medium tracking-[0.2em] text-white">
                                        PROJECT {project.number}
                                    </span>

                                    <span className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-[#0d192b]/80 px-3 py-1 text-xs text-white backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Project details */}
                                <div className="flex flex-1 flex-col p-6 sm:p-8">
                                    <h3 className="text-2xl font-semibold text-[#f1f5fc]">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#9aaac2]">
                                        {project.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-blue-200/10 bg-blue-400/[0.05] px-3 py-1.5 text-xs text-[#b8c9e1]"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-5">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-[#3987ff] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2875ed]"
                                        >
                                            Live Demo
                                            <ExternalLink size={15} />
                                        </a>

                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-[#c5d2e5] transition-colors hover:border-blue-300/30 hover:bg-blue-400/[0.06]"
                                        >
                                            <FaGithub size={16} aria-hidden="true" />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-sm text-[#7386a2]">
                        I am continuously learning and adding new projects to my journey.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
