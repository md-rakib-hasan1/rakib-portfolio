
"use client";

import { useState } from "react";
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

  const closeMenu = () => setIsOpen(false);

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

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#a8b6ca] transition-colors hover:text-[#8ab8ff]"
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
                className="rounded-lg px-3 py-3 text-sm text-[#c2cee0] transition-colors hover:bg-[#3987ff]/10 hover:text-[#8ab8ff]"
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
