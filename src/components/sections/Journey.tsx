import {
  Code,
  Compass,
  Cpu,
  Database,
  Globe,
  Sparkles,
} from "lucide-react";

interface JourneyMilestone {
  step: string;
  title: string;
  period: string;
  badge: string;
  icon: typeof Code;
  description: string;
  technologies: string[];
}

const milestones: JourneyMilestone[] = [
  {
    step: "01",
    title: "Foundations in C Programming",
    period: "August 2024",
    badge: "University CSE Onset",
    icon: Cpu,
    description:
      "Began my computer science journey at Dhaka International University by learning C. Developed fundamental computational thinking, algorithmic logic, pointers, and memory mechanics.",
    technologies: ["C", "Algorithms", "Data Structures", "Logic Flow"],
  },
  {
    step: "02",
    title: "Java, Python & Academic Projects",
    period: "Late 2024 – Early 2025",
    badge: "University Coursework",
    icon: Code,
    description:
      "Broadened programming breadth with Java and Python. Built university-level coursework projects, exploring Object-Oriented Programming (OOP), inheritance, encapsulation, and problem-solving patterns.",
    technologies: ["Java", "Python", "OOP", "Algorithm Analysis"],
  },
  {
    step: "03",
    title: "Practical Web Development with Programming Hero",
    period: "2025",
    badge: "Structured Training",
    icon: Compass,
    description:
      "Joined Programming Hero to transition from academic theory to tangible digital products. Immersed in modern web foundations, semantic HTML, responsive CSS layouts, and modern JavaScript (ES6+).",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Git & GitHub"],
  },
  {
    step: "04",
    title: "React, Next.js & TypeScript Milestones",
    period: "2025 – 2026",
    badge: "Frontend Specialization",
    icon: Globe,
    description:
      "Completed the frontend development path. Mastered React component architecture, Next.js App Router, strict TypeScript, and Tailwind CSS. Built and deployed live projects including Bazar Dor, FitLog, and Dev Stack Builder.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    step: "05",
    title: "Backend & Full-Stack Expansion",
    period: "Present (Active)",
    badge: "Current Milestone",
    icon: Database,
    description:
      "Actively developing server-side competencies with Node.js, Express.js, and MongoDB. Learning database modeling, RESTful API design, session management, and authentication to grow toward full-stack development.",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Better Auth"],
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-[rgba(163,169,186,0.12)] bg-[#0B0F19] section-padding"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 size-[380px] rounded-full bg-[#55D6FF]/[0.07] blur-[140px]"
      />

      <div className="container relative">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#55D6FF] uppercase">
            Evolution & Milestones
          </p>

          <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#F4F5FA] sm:text-4xl md:text-5xl">
            My Learning <span className="gradient-text">Journey</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#A3A9BA] sm:text-base sm:leading-8">
            An honest timeline of my technical growth—from introductory C programming
            in university lecture halls to building full-stack capable web applications.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative">
          {/* Vertical central guide line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-[#9B7BFF]/50 via-[#55D6FF]/30 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative grid grid-cols-[2rem_minmax(0,1fr)] gap-x-5 md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] md:gap-x-8 items-center`}
                >
                  {/* Left Column (Desktop) */}
                  <div
                    className={`${
                      isEven ? "md:text-right" : "md:order-3 md:text-left"
                    } col-start-2 row-start-1 md:col-start-auto md:row-start-auto`}
                  >
                    <article className="glass-card group p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="rounded-full bg-[#9B7BFF]/15 px-3 py-1 text-xs font-semibold text-[#9B7BFF] border border-[#9B7BFF]/30">
                          {item.badge}
                        </span>
                        <span className="text-xs text-[#A3A9BA]">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#F4F5FA] sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm leading-6 text-[#A3A9BA]">
                        {item.description}
                      </p>

                      <div
                        className={`mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(163,169,186,0.1)] ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[#D5DBE8] border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>

                  {/* Center Node (Marker) */}
                  <div className="col-start-1 row-start-1 md:col-start-2 md:row-start-auto flex items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="flex size-8 items-center justify-center rounded-full border border-[#9B7BFF]/40 bg-[#111522] shadow-[0_0_15px_rgba(155,123,255,0.35)] transition-transform group-hover:scale-110"
                    >
                      <Icon size={14} className="text-[#55D6FF]" />
                    </span>
                  </div>

                  {/* Empty Spacer Column for balance on desktop */}
                  <div
                    aria-hidden="true"
                    className={`hidden md:block ${
                      isEven ? "md:order-3" : "md:order-1"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-4 py-2 border border-white/[0.08] text-xs text-[#A3A9BA]">
            <Sparkles size={14} className="text-[#9B7BFF]" />
            Continuous growth through disciplined hands-on practice
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
