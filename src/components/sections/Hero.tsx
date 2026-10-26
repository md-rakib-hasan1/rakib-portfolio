import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  Sparkles,
  Layers,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="aurora-glow relative isolate overflow-hidden pt-6"
    >
      {/* Restrained Aurora Background Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 size-[420px] rounded-full bg-[#9B7BFF]/[0.12] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 size-[360px] rounded-full bg-[#55D6FF]/[0.08] blur-[120px]"
      />

      <div className="container grid min-h-[calc(100svh-76px)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-20">
        {/* Left Column: Text & CTAs */}
        <div className="relative z-10">
          {/* Eyebrow Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full aurora-badge px-4 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#55D6FF] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[#55D6FF]" />
            </span>

            <span className="text-xs font-semibold tracking-wider text-[#D5DBE8] uppercase">
              CSE Student · Web Developer in Progress
            </span>

            <Sparkles size={14} className="text-[#9B7BFF]" />
          </div>

          {/* Name & Heading */}
          <p className="text-sm font-semibold tracking-wide text-[#9B7BFF]">
            Hi, I&apos;m Rakib Hasan.
          </p>

          <h1 className="mt-2 max-w-2xl text-4xl leading-[1.1] font-bold tracking-tight text-[#F4F5FA] sm:text-5xl lg:text-6xl">
            Building thoughtful{" "}
            <span className="gradient-text">digital experiences.</span>
          </h1>

          {/* Designation */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/[0.04] px-3.5 py-1.5 border border-white/[0.08]">
            <Layers size={16} className="text-[#55D6FF]" />
            <span className="text-base font-medium text-[#F4F5FA] sm:text-lg">
              Frontend Developer | Learning Backend
            </span>
          </div>

          {/* Supporting Text */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#A3A9BA] sm:text-base sm:leading-8">
            I&apos;m a Computer Science and Engineering student passionate about
            building useful, responsive web applications. I enjoy turning ideas
            into clean user interfaces and continuously expanding my skills
            toward full-stack development.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              href="#projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#9B7BFF] to-[#7B58EE] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#9B7BFF]/25 transition-all hover:brightness-110 hover:shadow-[#9B7BFF]/35 hover:-translate-y-0.5"
            >
              Explore My Projects
              <ArrowDown size={15} />
            </Link>

            <a
              href="/resume.pdf"
              download="Rakib_Hasan_Resume.pdf"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(163,169,186,0.24)] bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#F4F5FA] transition-all hover:border-[#55D6FF]/50 hover:bg-[#55D6FF]/10 hover:text-[#55D6FF]"
            >
              <Download size={15} className="text-[#55D6FF]" />
              Download Resume
            </a>

            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-transparent px-4 py-3 text-sm font-medium text-[#A3A9BA] transition-colors hover:text-[#F4F5FA]"
            >
              Contact Me
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-3.5 pt-6 border-t border-[rgba(163,169,186,0.12)]">
            <span className="text-xs font-semibold tracking-wider text-[#6C7488] uppercase">
              Connect:
            </span>

            <a
              href="https://github.com/md-rakib-hasan1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rakib Hasan on GitHub"
              className="flex size-9 items-center justify-center rounded-xl border border-white/10 text-[#A3A9BA] transition-all hover:border-[#9B7BFF]/40 hover:bg-[#9B7BFF]/10 hover:text-white"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://linkedin.com/in/md-rakib-hasan1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rakib Hasan on LinkedIn"
              className="flex size-9 items-center justify-center rounded-xl border border-white/10 text-[#A3A9BA] transition-all hover:border-[#55D6FF]/40 hover:bg-[#55D6FF]/10 hover:text-[#55D6FF]"
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="mailto:rakibhasan98840@gmail.com"
              aria-label="Email Rakib Hasan"
              className="flex size-9 items-center justify-center rounded-xl border border-white/10 text-[#A3A9BA] transition-all hover:border-[#9B7BFF]/40 hover:bg-[#9B7BFF]/10 hover:text-[#9B7BFF]"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Profile Photo Treatment with Midnight Aurora frame */}
        <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center py-4 lg:ml-auto">
          {/* Subtle Ambient Halo */}
          <div
            aria-hidden="true"
            className="absolute size-[300px] rounded-full bg-gradient-to-br from-[#9B7BFF]/20 to-[#55D6FF]/15 blur-[80px]"
          />

          <div className="relative aspect-square w-full max-w-[360px]">
            {/* Outer Aurora Ring */}
            <div className="absolute inset-0 rounded-3xl border border-[#9B7BFF]/20 bg-gradient-to-br from-[#9B7BFF]/10 via-transparent to-[#55D6FF]/10 p-2 shadow-2xl shadow-black/50 backdrop-blur-sm">
              {/* Photo Container */}
              <div className="relative size-full overflow-hidden rounded-2xl border border-white/10 bg-[#111522]">
                <Image
                  src="/assets/Professional%20Tech%20Workspace%20Portrait.png"
                  alt="Rakib Hasan — Frontend Developer"
                  fill
                  sizes="(max-width: 640px) 300px, 360px"
                  className="object-cover object-[center_25%] transition-transform duration-500 hover:scale-[1.02]"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#090B12]/80 via-transparent to-transparent pointer-events-none"
                />
              </div>
            </div>

            {/* Floating Info Chip 1 — Top Right */}
            <div className="absolute -top-3 -right-3 rounded-2xl border border-[#9B7BFF]/30 bg-[#111522]/95 px-3.5 py-2 shadow-xl shadow-black/40 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#9B7BFF] animate-pulse" />
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-[#A3A9BA] uppercase">
                    Learning Path
                  </p>
                  <p className="text-xs font-semibold text-[#F4F5FA]">
                    Node.js & MongoDB
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Info Chip 2 — Bottom Left */}
            <div className="absolute -bottom-3 -left-3 rounded-2xl border border-[#55D6FF]/30 bg-[#111522]/95 px-3.5 py-2 shadow-xl shadow-black/40 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-lg bg-[#55D6FF]/10 text-[#55D6FF]">
                  <Sparkles size={13} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-[#A3A9BA] uppercase">
                    Crafting UI
                  </p>
                  <p className="text-xs font-semibold text-[#F4F5FA]">
                    React · Next.js · TS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
