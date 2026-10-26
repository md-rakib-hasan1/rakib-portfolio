import { GraduationCap, MapPin, Calendar, Award, Sparkles, BookOpen } from "lucide-react";

interface EducationItem {
  step: string;
  level: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  result?: string;
  status?: string;
  current?: boolean;
  board?: string;
  icon: typeof GraduationCap;
  highlights: string[];
}

const educationList: EducationItem[] = [
  {
    step: "01",
    level: "Undergraduate Degree",
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    institution: "Dhaka International University",
    location: "Satarkul, Badda, Dhaka",
    duration: "August 2024 – Present (Expected May 2028)",
    status: "Currently Pursuing · 5th Semester",
    current: true,
    icon: GraduationCap,
    highlights: [
      "Rigorous core curriculum in algorithms, data structures, and software engineering",
      "Building practical academic projects alongside modern web development",
    ],
  },
  {
    step: "02",
    level: "Higher Secondary Certificate (HSC)",
    degree: "Science Stream",
    institution: "Shaheed A.H.M. Kamaruzzaman Govt. Degree College",
    location: "Rajshahi, Bangladesh",
    board: "Rajshahi Board",
    duration: "August 2020 – December 2022",
    result: "GPA 5.00 / 5.00",
    current: false,
    icon: Award,
    highlights: [
      "Concentrations in Higher Mathematics, Physics, Chemistry, and Information Technology",
      "Achieved maximum GPA result (5.00) in Higher Secondary education",
    ],
  },
  {
    step: "03",
    level: "Secondary School Certificate (SSC)",
    degree: "Science Stream",
    institution: "Gotegari Shahid Mamun Govt. High School and College",
    location: "Manda, Naogaon, Bangladesh",
    board: "Rajshahi Board",
    duration: "January 2015 – March 2020",
    result: "GPA 5.00 / 5.00",
    current: false,
    icon: BookOpen,
    highlights: [
      "Secondary education foundation in natural sciences, algebra, and geometry",
      "Achieved perfect GPA 5.00 score",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-[rgba(163,169,186,0.12)] bg-[#090B12] section-padding"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-24 size-[380px] rounded-full bg-[#9B7BFF]/[0.08] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-20 size-[360px] rounded-full bg-[#55D6FF]/[0.07] blur-[130px]"
      />

      <div className="container relative">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#9B7BFF] uppercase">
            Academic Background
          </p>

          <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#F4F5FA] sm:text-4xl md:text-5xl">
            My <span className="gradient-text">Education</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#A3A9BA] sm:text-base sm:leading-8">
            My academic journey in Computer Science and Engineering, structured in an
            alternating timeline highlighting university progress and foundational achievements.
          </p>
        </div>

        {/* Alternating Timeline Roadmap */}
        <div className="relative">
          {/* Vertical central guide line (desktop) / left guide (mobile) */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-[#9B7BFF]/60 via-[#55D6FF]/40 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-12">
            {educationList.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.institution}
                  className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-x-5 md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] md:gap-x-8 items-center"
                >
                  {/* Card Column: Alternates Left / Right on Desktop */}
                  <div
                    className={`${
                      isEven ? "md:text-right" : "md:order-3 md:text-left"
                    } col-start-2 row-start-1 md:col-start-auto md:row-start-auto`}
                  >
                    <article
                      className={`glass-card group p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                        item.current
                          ? "border-[#9B7BFF]/45 shadow-[0_12px_32px_-12px_rgba(155,123,255,0.22)] bg-gradient-to-br from-[#111522] via-[#111522] to-[#171E33]"
                          : ""
                      }`}
                    >
                      {/* Top Badges */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3.5 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                            item.current
                              ? "bg-gradient-to-r from-[#9B7BFF]/25 to-[#55D6FF]/15 text-[#55D6FF] border border-[#9B7BFF]/40"
                              : "bg-white/[0.04] text-[#D5DBE8] border border-white/[0.08]"
                          }`}
                        >
                          <Icon size={13} />
                          {item.level}
                        </span>

                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            5th Semester · Current
                          </span>
                        )}

                        {item.result && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#55D6FF]/10 px-3 py-1 text-xs font-semibold text-[#55D6FF] border border-[#55D6FF]/30">
                            <Award size={13} />
                            {item.result}
                          </span>
                        )}
                      </div>

                      {/* Institution & Degree */}
                      <h3 className="text-xl font-bold text-[#F4F5FA] group-hover:text-[#55D6FF] transition-colors">
                        {item.institution}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-[#D5DBE8]">
                        {item.degree}
                      </p>

                      {/* Location & Board */}
                      <div
                        className={`mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#A3A9BA] ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={13} className="text-[#9B7BFF]" />
                          {item.location}
                        </span>

                        {item.board && (
                          <span className="inline-flex items-center gap-1.5">
                            <span className="size-1 rounded-full bg-[#A3A9BA]" />
                            {item.board}
                          </span>
                        )}
                      </div>

                      {/* Highlights */}
                      <ul
                        className={`mt-4 space-y-1.5 pt-3 border-t border-[rgba(163,169,186,0.1)] text-xs sm:text-sm text-[#A3A9BA] ${
                          isEven ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {item.highlights.map((point) => (
                          <li
                            key={point}
                            className={`flex items-start gap-2 ${
                              isEven ? "md:flex-row-reverse" : "flex-row"
                            }`}
                          >
                            <span className="mt-1.5 size-1.5 rounded-full bg-[#9B7BFF] shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Duration Tag */}
                      <div
                        className={`mt-4 flex ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-[#A3A9BA]">
                          <Calendar size={12} className="text-[#55D6FF]" />
                          {item.duration}
                        </span>
                      </div>
                    </article>
                  </div>

                  {/* Center Node (Marker) */}
                  <div className="col-start-1 row-start-1 md:col-start-2 md:row-start-auto flex items-center justify-center">
                    <span
                      aria-hidden="true"
                      className={`flex size-9 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110 ${
                        item.current
                          ? "border-[#9B7BFF] bg-[#171E33] shadow-[0_0_18px_rgba(155,123,255,0.45)] text-[#55D6FF]"
                          : "border-[#9B7BFF]/40 bg-[#111522] shadow-[0_0_14px_rgba(155,123,255,0.25)] text-[#9B7BFF]"
                      }`}
                    >
                      <Icon size={16} />
                    </span>
                  </div>

                  {/* Empty Spacer Column for Desktop Balance */}
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

        {/* Footer Sub-note */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-4 py-2 border border-white/[0.08] text-xs text-[#A3A9BA]">
            <Sparkles size={14} className="text-[#9B7BFF]" />
            Dhaka International University B.Sc. in CSE (5th Semester) · Expected Graduation May 2028
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
