import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Sparkles,
  Terminal,
  Trophy,
} from "lucide-react";

const aboutHighlights = [
  {
    icon: GraduationCap,
    title: "CSE Student",
    description: "5th Semester B.Sc. at Dhaka International University (DIU).",
  },
  {
    icon: Terminal,
    title: "Programming Roots",
    description: "Built strong fundamentals starting with C, then Java and Python.",
  },
  {
    icon: Code2,
    title: "Modern Web Stack",
    description: "Frontend path completed with React, Next.js, and TypeScript.",
  },
  {
    icon: Sparkles,
    title: "Backend in Progress",
    description: "Actively learning Node.js, Express.js, MongoDB, and REST APIs.",
  },
  {
    icon: Trophy,
    title: "Beyond the Terminal",
    description: "Passionate about sports—especially cricket and football.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[rgba(163,169,186,0.12)] bg-[#090B12] section-padding"
    >
      {/* Ambient background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 size-[360px] rounded-full bg-[#9B7BFF]/[0.08] blur-[130px]"
      />

      <div className="container relative">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#9B7BFF] uppercase">
            Get to Know Me
          </p>

          <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#F4F5FA] sm:text-4xl md:text-5xl">
            About <span className="gradient-text">My Background</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#A3A9BA] sm:text-base sm:leading-8">
            My journey from writing my first lines of C to building modern web
            applications and expanding into backend development.
          </p>
        </div>

        {/* Two-Column Story Layout */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Narrative Story */}
          <div className="glass-card relative overflow-hidden p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 size-40 rounded-full bg-[#9B7BFF]/10 blur-3xl"
            />

            <div className="relative space-y-5 text-sm leading-7 text-[#A3A9BA] sm:text-base sm:leading-8">
              <h3 className="text-xl font-bold text-[#F4F5FA] sm:text-2xl">
                Curious by nature. Driven by practical building.
              </h3>

              <p>
                I am currently in my 5th semester of Computer Science and
                Engineering at Dhaka International University. My programming
                journey started like many CSE students—with the fundamentals of{" "}
                <span className="font-semibold text-[#F4F5FA]">C</span>, where I
                learned how memory, pointers, and problem-solving logic come
                together.
              </p>

              <p>
                As coursework progressed, I dove into{" "}
                <span className="font-semibold text-[#F4F5FA]">Java and Python</span>
                , developing university projects that helped me grasp
                object-oriented programming, data structures, and modular code
                architecture. While university theory laid the analytical
                groundwork, I was eager to create software that real people could
                interact with on the web.
              </p>

              <p>
                To bridge that gap, I enrolled in the{" "}
                <span className="font-semibold text-[#F4F5FA]">
                  Programming Hero
                </span>{" "}
                course for hands-on web development. Through disciplined
                milestones, I completed the frontend development path—mastering
                HTML5, modern CSS, JavaScript (ES6+), React, TypeScript, and
                Next.js.
              </p>

              <p>
                Today, I am actively expanding into{" "}
                <span className="font-semibold text-[#55D6FF]">
                  backend engineering
                </span>
                —learning Node.js, Express.js, MongoDB, and RESTful API design.
                I believe in honest progress: I don&apos;t have formal corporate
                experience yet, but I treat every personal and academic project
                with high engineering standards.
              </p>

              <p>
                When I am away from my keyboard, you will usually find me playing
                or watching <span className="font-semibold text-[#F4F5FA]">cricket</span>{" "}
                and <span className="font-semibold text-[#F4F5FA]">football</span>
                —sports that teach teamwork, focus under pressure, and the joy of
                healthy competition.
              </p>

              <div className="pt-4 border-t border-[rgba(163,169,186,0.12)] flex flex-wrap items-center gap-4">
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#9B7BFF] transition-colors hover:text-white"
                >
                  Explore my projects
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href="/resume.pdf"
                  download="Rakib_Hasan_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#55D6FF] transition-colors hover:text-white"
                >
                  Download my full resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {aboutHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="glass-card group p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#9B7BFF]/20 bg-[#9B7BFF]/10 text-[#9B7BFF] transition-colors group-hover:bg-[#9B7BFF]/20 group-hover:text-white">
                      <Icon size={20} />
                    </span>

                    <div>
                      <h4 className="text-base font-semibold text-[#F4F5FA]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm leading-6 text-[#A3A9BA]">
                        {item.description}
                      </p>
                    </div>
                  </div>
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
