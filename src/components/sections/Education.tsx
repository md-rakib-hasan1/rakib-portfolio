import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

interface EducationItem {
  level: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  result?: string;
  status?: string;
  current?: boolean;
  board?: string;
  highlights?: string[];
}

const educationList: EducationItem[] = [
  {
    level: "Undergraduate Degree",
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    institution: "Dhaka International University",
    location: "Satarkul, Badda, Dhaka",
    duration: "August 2024 – Present (Expected May 2028)",
    status: "Currently Pursuing · 5th Semester",
    current: true,
    highlights: [
      "Rigorous core curriculum in algorithms, data structures, and software engineering",
      "Building practical academic projects alongside structured web development",
    ],
  },
  {
    level: "Higher Secondary Certificate (HSC)",
    degree: "Science",
    institution: "Shaheed A.H.M. Kamaruzzaman Govt. Degree College",
    location: "Rajshahi",
    board: "Rajshahi Board",
    duration: "August 2020 – December 2022",
    result: "GPA 5.00 / 5.00",
    current: false,
    highlights: [
      "Higher Mathematics, Physics, Chemistry, and Information Technology",
      "Achieved maximum GPA result in Higher Secondary education",
    ],
  },
  {
    level: "Secondary School Certificate (SSC)",
    degree: "Science",
    institution: "Gotegari Shahid Mamun Govt. High School and College",
    location: "Manda, Naogaon",
    board: "Rajshahi Board",
    duration: "January 2015 – March 2020",
    result: "GPA 5.00 / 5.00",
    current: false,
    highlights: [
      "Secondary education foundation in natural sciences and general mathematics",
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
            My formal academic path in Computer Science and Engineering, backed by
            a consistent foundation in science and mathematics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educationList.map((item) => (
            <article
              key={item.institution}
              className={`glass-card relative overflow-hidden p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                item.current
                  ? "border-[#9B7BFF]/35 shadow-[0_12px_32px_-12px_rgba(155,123,255,0.18)] bg-gradient-to-br from-[#111522] via-[#111522] to-[#161C2E]"
                  : ""
              }`}
            >
              {item.current && (
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-48 rounded-full bg-[#9B7BFF]/15 blur-3xl pointer-events-none"
                />
              )}

              <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                {/* Main Information */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        item.current
                          ? "bg-gradient-to-r from-[#9B7BFF]/20 to-[#55D6FF]/15 text-[#55D6FF] border border-[#9B7BFF]/40"
                          : "bg-white/[0.04] text-[#D5DBE8] border border-white/[0.08]"
                      }`}
                    >
                      <GraduationCap size={14} />
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

                  <h3 className="text-xl font-bold text-[#F4F5FA] sm:text-2xl">
                    {item.institution}
                  </h3>

                  <p className="text-base font-medium text-[#D5DBE8]">
                    {item.degree}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#A3A9BA]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#9B7BFF]" />
                      {item.location}
                    </span>

                    {item.board && (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-[#A3A9BA]" />
                        {item.board}
                      </span>
                    )}
                  </div>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="pt-2 space-y-1.5 text-xs sm:text-sm text-[#A3A9BA]">
                      {item.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1.5 size-1.5 rounded-full bg-[#9B7BFF] shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Duration Badge */}
                <div className="shrink-0 pt-1">
                  <div className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-[#A3A9BA]">
                    <Calendar size={13} className="text-[#55D6FF]" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
