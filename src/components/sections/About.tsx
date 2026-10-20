
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Lightbulb,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Learning React, Next.js, TypeScript, and modern web tools.",
  },
  {
    icon: BookOpen,
    title: "Learning by Building",
    description: "Practicing my skills through real-world projects.",
  },
  {
    icon: Lightbulb,
    title: "Growth Mindset",
    description: "Improving step by step through practice and feedback.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a1322] section-padding"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 size-[360px] rounded-full bg-blue-500/[0.08] blur-[120px]"
      />

      <div className="container relative">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#8ab8ff] uppercase">
            Get to know me
          </p>

          <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#f1f5fc] sm:text-4xl md:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#9aaac2] sm:text-base sm:leading-8">
            A little about my background, what I am learning, and where I
            want to go as a developer.
          </p>
        </div>

        {/* About content */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="glass-card relative overflow-hidden p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 size-36 rounded-full bg-blue-500/10 blur-3xl"
            />

            <div className="relative">
              <span className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl border border-blue-300/15 bg-blue-400/10 text-[#8ab8ff]">
                <Code2 size={27} />
              </span>

              <h3 className="text-xl font-semibold text-[#f1f5fc] sm:text-2xl">
                Curious mind. Growing developer.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#9aaac2] sm:text-base sm:leading-8">
                I am a Computer Science and Engineering student at Dhaka
                International University, building my foundation in modern
                web development.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#9aaac2] sm:text-base sm:leading-8">
                Currently, I am focusing on React, Next.js, TypeScript, and
                creating responsive user interfaces. I enjoy learning how
                things work, solving problems, and turning what I learn into
                practical projects.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#9aaac2] sm:text-base sm:leading-8">
                My goal is to keep improving, contribute to meaningful
                projects, and grow into a capable web developer through
                consistent practice.
              </p>

              <Link
                href="#projects"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8ab8ff] transition-colors hover:text-white"
              >
                Explore my projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="glass-card group p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-[#12233b]/80 sm:p-6"
                >
                  <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-blue-300/10 bg-blue-400/[0.08] text-[#8ab8ff] transition-colors group-hover:bg-blue-400/15">
                    <Icon size={21} />
                  </span>

                  <h3 className="text-base font-semibold text-[#eaf2ff]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#91a3bd]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
