import Link from "next/link";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BrandMark from "@/components/layout/BrandMark";

const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(163,169,186,0.12)] bg-[#07090F]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-36 w-3/4 -translate-x-1/2 rounded-full bg-[#9B7BFF]/[0.05] blur-[110px]"
      />

      <div className="container relative py-12 sm:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <Link href="/#home" className="group flex w-fit items-center gap-3">
            <BrandMark className="size-10" />

            <div>
              <span className="block text-sm font-bold text-[#F4F5FA] group-hover:text-[#55D6FF] transition-colors">
                Rakib Hasan
              </span>
              <span className="mt-0.5 block text-xs text-[#A3A9BA]">
                Frontend Developer · Learning Backend
              </span>
            </div>
          </Link>

          {/* Quick Nav Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#A3A9BA] transition-colors hover:text-[#55D6FF]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social and Back to top */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/md-rakib-hasan1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rakib Hasan GitHub"
              className="flex size-9 items-center justify-center rounded-xl border border-white/10 text-[#A3A9BA] transition-all hover:border-[#9B7BFF]/40 hover:bg-[#9B7BFF]/10 hover:text-white"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://linkedin.com/in/md-rakib-hasan1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rakib Hasan LinkedIn"
              className="flex size-9 items-center justify-center rounded-xl border border-white/10 text-[#A3A9BA] transition-all hover:border-[#55D6FF]/40 hover:bg-[#55D6FF]/10 hover:text-[#55D6FF]"
            >
              <FaLinkedin size={16} />
            </a>

            <a
              href="mailto:rakibhasan98840@gmail.com"
              aria-label="Email Rakib Hasan"
              className="flex size-9 items-center justify-center rounded-xl border border-white/10 text-[#A3A9BA] transition-all hover:border-[#9B7BFF]/40 hover:bg-[#9B7BFF]/10 hover:text-[#9B7BFF]"
            >
              <Mail size={15} />
            </a>

            <a
              href="#home"
              aria-label="Scroll back to top"
              className="flex size-9 items-center justify-center rounded-xl border border-[#9B7BFF]/30 bg-[#9B7BFF]/10 text-[#9B7BFF] transition-all hover:bg-[#9B7BFF]/20 hover:text-white ml-2"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

        <div className="my-8 h-px bg-[rgba(163,169,186,0.1)]" />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left text-xs text-[#6C7488]">
          <p>© {currentYear} Rakib Hasan. Built with integrity &amp; care.</p>

          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart size={12} className="fill-[#9B7BFF] text-[#9B7BFF]" />
            <span>using Next.js 16, TypeScript &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
