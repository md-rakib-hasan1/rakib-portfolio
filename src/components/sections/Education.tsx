"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    level: "University",
    title: "Computer Science and Engineering (CSE)",
    institution: "Dhaka International University",
    location: "Satarkul, Badda, Dhaka",
    duration: "August 31, 2024 – Present",
    status: "Currently studying",
    side: "right",
  },
  {
    level: "Higher Secondary Certificate (HSC)",
    title: "Science",
    institution: "Shaheed A.H.M. Kamaruzzaman Govt. Degree College",
    location: "Rajshahi",
    board: "Rajshahi Board",
    duration: "August 2020 – December 2022",
    result: "GPA 5.00",
    side: "left",
  },
  {
    level: "Secondary School Certificate (SSC)",
    title: "Science",
    institution: "Gotegari Shahid Mamun Govt. High School and College",
    location: "Manda, Naogaon",
    board: "Rajshahi Board",
    duration: "January 2015 – March 2020",
    result: "GPA 5.00",
    side: "right",
  },
];

const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let frame = 0;

    const updateTimeline = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const timeline = timelineRef.current;
        if (!timeline) return;

        const timelineRect = timeline.getBoundingClientRect();
        const lineStart = timelineRect.top + 32;
        const lineLength = timelineRect.height - 64;
        const viewportFocus = window.innerHeight * 0.5;

        setProgress(
          lineLength > 0
            ? Math.min(1, Math.max(0, (viewportFocus - lineStart) / lineLength))
            : 0,
        );

        let closestIndex = -1;
        let closestDistance = Number.POSITIVE_INFINITY;

        cardRefs.current.forEach((card, index) => {
          if (!card) return;

          const rect = card.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;

          const distance = Math.abs(
            (rect.top + rect.bottom) / 2 - viewportFocus,
          );
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex);
      });
    };

    updateTimeline();
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#080f1d] section-padding"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[360px] rounded-full bg-blue-500/[0.08] blur-[120px]"
      />

      <div className="container relative">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#8ab8ff] uppercase">
            Academic background
          </p>

          <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#f1f5fc] sm:text-4xl md:text-5xl">
            My <span className="gradient-text">Education</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#9aaac2] sm:text-base sm:leading-8">
            My academic journey, from secondary school to my current university
            studies.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-3 top-8 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
          >
            <span
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.65)]"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {education.map((item, index) => (
            <div
              key={item.level}
              className={`relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] ${
                index > 0 ? "mt-7 sm:mt-9" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className={`z-10 col-start-1 row-start-1 mt-7 flex size-6 items-center justify-center rounded-full border transition-colors duration-300 md:col-start-2 md:justify-self-center ${
                  activeIndex === index
                    ? "border-emerald-300 bg-emerald-400/15 shadow-[0_0_18px_rgba(16,185,129,0.45)]"
                    : "border-[#8ab8ff]/50 bg-[#0a1322] shadow-[0_0_18px_rgba(57,135,255,0.25)]"
                }`}
              >
                <span
                  className={`size-2 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? "bg-emerald-300" : "bg-[#8ab8ff]"
                  }`}
                />
              </span>

              <article
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={`glass-card group relative col-start-2 row-start-1 overflow-hidden p-5 transition-all duration-300 hover:border-blue-300/25 hover:bg-[#12233b]/70 sm:p-7 ${
                  item.side === "left"
                    ? "md:col-start-1"
                    : "md:col-start-3"
                }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-blue-500/[0.07] blur-3xl"
                />

                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/[0.08] px-3 py-1.5 text-xs font-semibold text-[#a9ceff]">
                      <GraduationCap size={15} />
                      {item.level}
                    </span>
                    {item.result && (
                      <span className="rounded-full border border-emerald-300/15 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-300">
                        {item.result}
                      </span>
                    )}
                    {item.status && (
                      <span className="rounded-full border border-blue-300/15 bg-blue-400/[0.07] px-3 py-1.5 text-xs font-semibold text-[#a9ceff]">
                        {item.status}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-snug text-[#f1f5fc] sm:text-xl">
                    {item.institution}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#c5d7ef]">
                    {item.title}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#91a3bd]">
                    <span>{item.location}</span>
                    {item.board && <span>{item.board}</span>}
                  </div>

                  <p className="mt-4 border-t border-white/[0.07] pt-4 text-sm font-medium text-[#8ab8ff]">
                    {item.duration}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
