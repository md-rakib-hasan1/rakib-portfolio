import {
  Code2,
  Database,
  Globe,
  Layers,
  Palette,
  Terminal,
  Wrench,
  Sparkles,
} from "lucide-react";
import {
  SiCss,
  SiDaisyui,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

interface SkillItem {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  color?: string;
  note?: string;
}

interface SkillCategory {
  title: string;
  badge: "Working With" | "Currently Learning" | "Foundational";
  description: string;
  icon: typeof Globe;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    badge: "Working With",
    description: "Building interactive, accessible, and fast client-side applications",
    icon: Globe,
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#264DE4" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React 19", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js (App Router)", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    title: "Styling & UI Systems",
    badge: "Working With",
    description: "Crafting responsive layouts and polished design tokens",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS v4", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#1AD1A5" },
      { name: "Responsive UI", icon: Layers, color: "#9B7BFF" },
      { name: "CSS Variables", icon: Code2, color: "#55D6FF" },
    ],
  },
  {
    title: "Backend & Database",
    badge: "Currently Learning",
    description: "Expanding into full-stack server logic, storage, and API design",
    icon: Database,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "RESTful APIs", icon: Globe, color: "#55D6FF" },
      { name: "Better Auth", icon: Sparkles, color: "#9B7BFF" },
    ],
  },
  {
    title: "Programming Foundations",
    badge: "Foundational",
    description: "Core computer science principles and algorithms from university",
    icon: Terminal,
    skills: [
      { name: "C Programming", icon: Terminal, color: "#A3A9BA" },
      { name: "Java", icon: Code2, color: "#EA2D2E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Data Structures", icon: Layers, color: "#9B7BFF" },
      { name: "OOP Principles", icon: Code2, color: "#55D6FF" },
    ],
  },
  {
    title: "Tools & Workflow",
    badge: "Working With",
    description: "Version control, developer tooling, and modern deployment",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: Code2, color: "#007ACC" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
    ],
  },
];

const badgeStyles = {
  "Working With":
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "Currently Learning":
    "bg-[#9B7BFF]/15 text-[#9B7BFF] border-[#9B7BFF]/35",
  Foundational:
    "bg-[#55D6FF]/10 text-[#55D6FF] border-[#55D6FF]/30",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-[rgba(163,169,186,0.12)] bg-[#0B0F19] section-padding"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 size-[380px] rounded-full bg-[#55D6FF]/[0.08] blur-[140px]"
      />

      <div className="container relative">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#55D6FF] uppercase">
            Technical Stack
          </p>

          <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#F4F5FA] sm:text-4xl md:text-5xl">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#A3A9BA] sm:text-base sm:leading-8">
            Technologies I actively use in personal projects alongside those I am
            currently learning on my path to full-stack development.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const HeaderIcon = category.icon;

            return (
              <article
                key={category.title}
                className="glass-card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#9B7BFF] transition-colors group-hover:bg-[#9B7BFF]/15 group-hover:text-white">
                      <HeaderIcon size={19} />
                    </span>

                    <div>
                      <h3 className="font-semibold text-[#F4F5FA] text-base">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#A3A9BA]">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${
                      badgeStyles[category.badge]
                    }`}
                  >
                    {category.badge}
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-[rgba(163,169,186,0.12)] bg-[#111522] px-3 py-1.5 text-xs font-medium text-[#D5DBE8] transition-all hover:border-[#9B7BFF]/40 hover:bg-[#9B7BFF]/10 hover:text-white"
                      >
                        <SkillIcon
                          aria-hidden="true"
                          size={14}
                          style={{ color: skill.color || "#9B7BFF" }}
                        />
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-xs leading-6 text-[#6C7488]">
          Technologies verified through working projects and coursework · No fabricated metrics or inflated ratings
        </p>
      </div>
    </section>
  );
};

export default Skills;
