"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/michael_cardillo_resume.pdf" },
  { label: "GitHub", href: "https://github.com/mcardillo55" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${
        scrolled ? "shadow-md backdrop-blur-sm" : ""
      }`}
      style={{ backgroundColor: scrolled ? "color-mix(in srgb, var(--color-bg) 95%, transparent)" : "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-24">
        <a href="#top">
          <Image
            src="/images/name_logo.jpg"
            alt="Michael Cardillo"
            width={241}
            height={108}
            className="h-20 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isExternal =
              link.href.startsWith("http") || link.href.endsWith(".pdf");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={link.href.startsWith("#") ? () => setMenuOpen(false) : undefined}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="relative px-3 py-2 text-xl font-bold transition-colors font-heading group"
                style={{ color: "var(--color-nav)" }}
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ backgroundColor: "var(--color-accent)" }} />
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded text-white"
          style={{ backgroundColor: "var(--color-primary)" }}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden" style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
          {navLinks.map((link) => {
            const isExternal =
              link.href.startsWith("http") || link.href.endsWith(".pdf");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="nav-link-mobile block px-4 py-3 text-right text-xl font-bold transition-colors font-heading"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
