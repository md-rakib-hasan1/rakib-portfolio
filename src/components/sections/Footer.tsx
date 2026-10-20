
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BrandMark from "@/components/layout/BrandMark";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#070d18]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[100px]"
      />

      <div className="container relative py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <Link href="#home" className="group flex w-fit items-center gap-3">
            <BrandMark className="size-11" />

            <span>
              <span className="block text-sm font-semibold text-[#f1f5fc]">
                Rakib Hasan
              </span>
              <span className="mt-1 block text-xs text-[#8194b0]">
                Frontend Developer · Learning Backend
              </span>
            </span>
          </Link>

          {/* Quick links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#91a3bd] transition-colors hover:text-[#8ab8ff]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/md-rakib-hasan1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-[#a8b6ca] transition-all hover:border-blue-300/25 hover:bg-blue-400/10 hover:text-[#8ab8ff]"
            >
              <FaGithub size={18} aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/md-rakib-hasan1"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-[#a8b6ca] transition-all hover:border-blue-300/25 hover:bg-blue-400/10 hover:text-[#8ab8ff]"
            >
              <FaLinkedin size={18} aria-hidden="true" />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex size-10 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-[#8ab8ff] transition-all hover:bg-blue-400/20"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="my-8 h-px bg-white/[0.07]" />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-[#7386a2]">
            © {new Date().getFullYear()} Rakib Hasan. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-[#7386a2]">
            Built with
            <Heart size={13} className="fill-[#3987ff] text-[#3987ff]" />
            using Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
