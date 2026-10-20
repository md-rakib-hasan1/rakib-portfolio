
import Link from "next/link";
import Image from "next/image";

import {
  ArrowDown,
  ArrowDownRight,
  Mail,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="watercolor-glow relative isolate overflow-hidden"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 size-[420px] rounded-full bg-blue-500/[0.12] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-[320px] rounded-full bg-sky-400/[0.08] blur-[100px]"
      />

      <div className="container grid min-h-[calc(100svh-76px)] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-24">
        {/* Introduction */}
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/[0.07] px-4 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-blue-100 sm:text-sm">
              Learning, Building & Growing
            </span>

            <Sparkles size={14} className="text-[#8ab8ff]" />
          </div>

          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-[#8ab8ff] uppercase">
            Hello, I&apos;m
          </p>

          <h1 className="max-w-3xl text-5xl leading-[1.08] font-bold tracking-[-0.045em] text-[#f1f5fc] sm:text-6xl lg:text-7xl xl:text-[84px]">
            Rakib
            <br />
            Hasan<span className="gradient-text">.</span>
          </h1>

          <h2 className="mt-6 text-xl leading-relaxed font-medium text-[#d5e2f5] sm:text-2xl">
            Aspiring Web Developer
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#9aaac2] sm:text-base sm:leading-8">
            I&apos;m a Computer Science student exploring the world of
            modern web development. I enjoy turning ideas into useful,
            thoughtful digital experiences while learning something new
            with every project.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#3987ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-[#2875ed] hover:shadow-blue-500/30"
            >
              View My Work
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-[#d5e2f5] transition-colors hover:border-blue-300/40 hover:bg-blue-400/[0.06]"
            >
              Download CV
              <ArrowDown size={16} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="text-xs tracking-wide text-[#7386a2]">
              FIND ME ON
            </span>

            <span className="h-px w-8 bg-white/10" />

            <a
              href="https://github.com/md-rakib-hasan1/"
              target="_blank"
              rel="noreferrer"
              aria-label="Rakib Hasan on GitHub"
              className="rounded-full border border-white/10 p-3 text-[#a8b6ca] transition-all hover:border-blue-300/30 hover:bg-blue-400/10 hover:text-[#8ab8ff]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-[18px] fill-current"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.48 11.48 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/md-rakib-hasan1/"
              target="_blank"
              rel="noreferrer"
              aria-label="Rakib Hasan on LinkedIn"
              className="rounded-full border border-white/10 p-3 text-[#a8b6ca] transition-all hover:border-blue-300/30 hover:bg-blue-400/10 hover:text-[#8ab8ff]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-[18px] fill-current"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31ZM5.36 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.58V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>

            <a
              href="mailto:rakibhasan98840@gmail.com"
              aria-label="Email Rakib Hasan"
              className="rounded-full border border-white/10 p-3 text-[#a8b6ca] transition-all hover:border-blue-300/30 hover:bg-blue-400/10 hover:text-[#8ab8ff]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Custom visual — no photo required yet */}
        <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center py-8 lg:ml-auto lg:py-0">
          <div
            aria-hidden="true"
            className="absolute size-[280px] rounded-full bg-blue-500/15 blur-[75px] sm:size-[360px]"
          />

          <div className="relative aspect-square w-full max-w-[380px]">
            {/* Decorative orbital rings */}
            <div className="absolute inset-[7%] rounded-full border border-blue-300/10" />
            <div className="absolute inset-[15%] rounded-full border border-dashed border-blue-300/15" />

            <div className="absolute inset-[23%] overflow-hidden rounded-full border border-blue-300/20 shadow-[0_0_100px_rgba(57,135,255,0.14)]">
              <Image
                src="/assets/Professional%20Tech%20Workspace%20Portrait.png"
                alt="Rakib Hasan"
                fill
                sizes="(max-width: 640px) 205px, 205px"
                className="object-cover object-[center_25%]"
                priority
              />
            </div>

            {/* Learning cards orbit around the photo while staying upright. */}
            <div className="hero-card-orbit absolute inset-0">
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="hero-card-counter-orbit rounded-2xl border border-blue-200/15 bg-[#0d192b]/95 px-3 py-2.5 shadow-xl shadow-black/20 backdrop-blur-xl sm:px-4 sm:py-3">
                  <p className="text-[10px] tracking-wider text-[#8ba2c2] uppercase">
                    Currently learning
                  </p>
                  <p className="mt-1 whitespace-nowrap text-xs font-semibold text-[#f1f5fc] sm:text-sm">
                    Node.js + Express.js
                  </p>
                </div>
              </div>

              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                <div className="hero-card-counter-orbit rounded-2xl border border-blue-200/15 bg-[#0d192b]/95 px-3 py-2.5 shadow-xl shadow-black/20 backdrop-blur-xl sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-[#8ab8ff]">
                      <Sparkles size={15} />
                    </span>
                    <div>
                      <p className="whitespace-nowrap text-xs font-semibold text-[#f1f5fc]">
                        Always Learning
                      </p>
                      <p className="mt-1 whitespace-nowrap text-[10px] text-[#8ba2c2]">
                        One project at a time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small decorative accents */}
            <span className="absolute right-[17%] top-[12%] size-2 rounded-full bg-[#8ab8ff] shadow-[0_0_18px_rgba(138,184,255,0.9)]" />
            <span className="absolute bottom-[12%] left-[16%] size-1.5 rounded-full bg-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
