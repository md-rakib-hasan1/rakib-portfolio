"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import BrandMark from "@/components/layout/BrandMark";

const navLinks = [
  { label: "Home", anchor: "#home" },
  { label: "About", anchor: "#about" },
  { label: "Journey", anchor: "#journey" },
  { label: "Education", anchor: "#education" },
  { label: "Skills", anchor: "#skills" },
  { label: "Projects", anchor: "#projects" },
  { label: "Contact", anchor: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isHomePage) return;

    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = 130;
        const atPageBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2;

        if (atPageBottom) {
          setActiveSection("contact");
          return;
        }

        let current = "home";
        for (const link of navLinks) {
          const section = document.querySelector<HTMLElement>(link.anchor);
          if (section && section.getBoundingClientRect().top <= marker) {
            current = link.anchor.slice(1);
          }
        }

        setActiveSection(current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const getHref = (anchor: string) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(163,169,186,0.14)] bg-[#090B12]/85 backdrop-blur-xl transition-all">
      <nav
        aria-label="Main navigation"
        className="container flex h-[76px] items-center justify-between"
      >
        <Link
          href={getHref("#home")}
          onClick={closeMenu}
          className="group flex items-center gap-3 focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-[#9B7BFF]"
        >
          <BrandMark className="size-10" />

          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-[#F4F5FA] transition-colors group-hover:text-[#55D6FF]">
              Rakib Hasan
            </span>
            <span className="text-xs text-[#A3A9BA]">
              Frontend Developer · Learning Backend
            </span>
          </span>
        </Link>

        {/* Desktop Navigation links */}
        <div className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-[#111522]/90 p-1.5 shadow-inner shadow-black/30 lg:flex">
          {navLinks.map((link) => {
            const isActive = isHomePage && activeSection === link.anchor.slice(1);
            return (
              <Link
                key={link.anchor}
                href={getHref(link.anchor)}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#9B7BFF]/25 to-[#55D6FF]/15 text-[#55D6FF] border border-[#9B7BFF]/35 shadow-[0_0_16px_rgba(155,123,255,0.18)]"
                    : "border border-transparent text-[#A3A9BA] hover:bg-white/[0.05] hover:text-[#F4F5FA]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(163,169,186,0.2)] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-[#D5DBE8] transition-all hover:border-[#9B7BFF]/50 hover:bg-[#9B7BFF]/10 hover:text-white"
          >
            <FileText size={14} className="text-[#9B7BFF]" />
            Resume
          </a>

          <Link
            href={getHref("#contact")}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#9B7BFF] to-[#7B58EE] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#9B7BFF]/20 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[#9B7BFF]/30"
          >
            Let&apos;s Talk
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-[#F4F5FA] transition-colors hover:bg-white/5 lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[rgba(163,169,186,0.14)] bg-[#0E121E]/95 px-5 py-4 backdrop-blur-2xl lg:hidden"
        >
          <div className="container flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.anchor.slice(1);
              return (
                <Link
                  key={link.anchor}
                  href={getHref(link.anchor)}
                  onClick={closeMenu}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-lg px-3.5 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-[#9B7BFF]/15 font-semibold text-[#55D6FF]"
                      : "text-[#A3A9BA] hover:bg-white/[0.04] hover:text-[#F4F5FA]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-3 grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.08]">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[rgba(163,169,186,0.2)] bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-[#F4F5FA]"
              >
                <FileText size={14} className="text-[#9B7BFF]" />
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[#55D6FF]/30 bg-[#55D6FF]/10 px-3 py-2.5 text-xs font-semibold text-[#55D6FF]"
              >
                Download PDF
              </a>
            </div>

            <Link
              href={getHref("#contact")}
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#7B58EE] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-[#9B7BFF]/25 transition-all hover:brightness-110"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
