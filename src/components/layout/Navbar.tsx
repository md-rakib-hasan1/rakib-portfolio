
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = 120;
        const atPageBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2;

        if (atPageBottom) {
          setActiveSection("contact");
          return;
        }

        let current = "home";
        for (const link of navLinks) {
          const section = document.querySelector<HTMLElement>(link.href);
          if (section && section.getBoundingClientRect().top <= marker) {
            current = link.href.slice(1);
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
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#080f1d]/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="container flex h-[76px] items-center justify-between"
      >
        <Link
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3987ff] to-[#164aab] text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105">
            RH
          </span>

          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-[#f1f5fc]">
              Rakib Hasan
            </span>
            <span className="text-xs text-[#8ba2c2]">
              Developer Portfolio
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-[#0a1423]/90 p-1.5 shadow-inner shadow-black/20 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                activeSection === link.href.slice(1) ? "location" : undefined
              }
              className={`rounded-full border px-3 py-2 text-sm transition-colors ${
                activeSection === link.href.slice(1)
                  ? "border-[#8ab8ff]/20 bg-gradient-to-r from-[#3987ff]/20 to-[#8ab8ff]/10 font-semibold text-[#4FC1FF] shadow-[0_0_16px_rgba(57,135,255,0.12)]"
                  : "border-transparent text-[#a8b6ca] hover:bg-white/[0.04] hover:text-[#d5e2f5]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-[#3987ff]/40 bg-[#3987ff]/10 px-5 py-2.5 text-sm font-medium text-[#c4dcff] transition-all hover:border-[#3987ff] hover:bg-[#3987ff]/20 md:inline-flex"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
          className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-[#f1f5fc] transition-colors hover:bg-white/5 md:hidden"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.08] bg-[#0b1525] px-5 py-4 md:hidden"
        >
          <div className="container flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={
                  activeSection === link.href.slice(1) ? "location" : undefined
                }
                className={`rounded-lg px-3 py-3 text-sm transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "bg-[#3987ff]/15 font-semibold text-[#8ab8ff]"
                    : "text-[#c2cee0] hover:bg-[#3987ff]/10 hover:text-[#8ab8ff]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#3987ff] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2875ed]"
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
