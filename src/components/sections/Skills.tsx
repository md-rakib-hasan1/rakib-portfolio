
import {
  Code2,
  Database,
  FingerprintPattern,
  Globe,
  KeyRound,
  Layers3,
  MonitorSmartphone,
  Palette,
  ShieldCheck,
  Wrench,
  Workflow,
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
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive user interfaces",
    icon: Globe,
    color: "#38bdf8",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    ],
  },
  {
    title: "Styling & UI",
    description: "Designing clean, modern experiences",
    icon: Palette,
    color: "#c084fc",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Responsive Design", icon: MonitorSmartphone, color: "#60a5fa" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#ffffff" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#1ad1a5" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Learning server-side development",
    icon: Database,
    color: "#4ade80",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "REST APIs", icon: Globe, color: "#fb7185" },
    ],
  },
  {
    title: "Authentication",
    description: "Exploring secure user authentication",
    icon: Layers3,
    color: "#fbbf24",
    skills: [
      { name: "Better Auth", icon: ShieldCheck, color: "#818cf8" },
      { name: "Sessions", icon: KeyRound, color: "#fbbf24" },
      { name: "OAuth", icon: FingerprintPattern, color: "#60a5fa" },
    ],
  },
  {
    title: "Programming",
    description: "Building problem-solving foundations",
    icon: Code2,
    color: "#60a5fa",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "OOP", icon: Layers3, color: "#c084fc" },
      { name: "Data Structures", icon: Workflow, color: "#fb923c" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Building and maintaining projects",
    icon: Wrench,
    color: "#fb923c",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: Code2, color: "#007acc" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "npm", icon: SiNpm, color: "#cb3837" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a1322] section-padding"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 size-[360px] rounded-full bg-blue-500/[0.08] blur-[120px]"
      />

      <div className="container relative">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#8ab8ff] uppercase">
            Technologies I work with
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#f1f5fc] sm:text-4xl md:text-5xl">
            My <span className="gradient-text">Skills</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#9aaac2] sm:text-base sm:leading-8">
            The technologies and tools I am exploring and using as I continue
            to grow as a web developer.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-[#12233b]/70"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/10 transition-colors group-hover:bg-blue-400/15"
                    style={{ color: group.color }}
                  >
                        <Icon size={21} />
                  </span>

                  <div>
                    <h3 className="font-semibold text-[#f1f5fc]">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#8194b0]">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-[#c2d0e4] transition-colors hover:border-blue-300/25 hover:bg-blue-400/[0.08] hover:text-[#dceaff]"
                      >
                        <SkillIcon
                          aria-hidden="true"
                          size={15}
                          color={skill.color}
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

        <p className="mt-8 text-center text-xs leading-6 text-[#7386a2]">
          My toolkit evolves as I learn, practice, and build new projects.
        </p>
      </div>
    </section>
  );
};

export default Skills;
