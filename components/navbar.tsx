"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site-content";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Videos", href: "/videos" },
  { label: "Definitives", href: "/company" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Main bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || pathname !== "/"
            ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link
            href="/"
            className="text-[11px] font-body font-600 text-text-primary uppercase tracking-[0.22em] hover:text-accent-gold transition-colors duration-300"
          >
            Glenn Hudson
          </Link>

          {/* Desktop links — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-body font-500 transition-colors duration-300 ${
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[12px] font-body font-600 uppercase tracking-widest px-5 py-2 border border-accent-gold/40 text-accent-gold hover:bg-accent-gold hover:text-bg-primary transition-all duration-300"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Hamburger — hidden on desktop */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px bg-text-primary transition-all duration-400 origin-center ${
                isOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-text-primary transition-all duration-300 ${
                isOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-text-primary transition-all duration-400 origin-center ${
                isOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary flex flex-col transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-12">
          <nav className="flex flex-col">
            {[...navLinks, { label: "Contact", href: "/contact" }].map(
              (link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-5 border-b border-border-subtle text-5xl font-display font-600 text-text-primary hover:text-accent-gold transition-colors duration-300"
                  style={{
                    transitionDelay: isOpen ? `${i * 60 + 100}ms` : "0ms",
                    transform: isOpen ? "none" : "translateY(12px)",
                    opacity: isOpen ? 1 : 0,
                    transition: `transform 400ms ease ${i * 60 + 100}ms, opacity 400ms ease ${i * 60 + 100}ms, color 300ms ease`,
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="mt-auto space-y-2">
            <p className="text-xs font-body text-text-light uppercase tracking-widest">
              London, UK
            </p>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-sm font-body text-accent-gold hover:opacity-70 transition-opacity"
            >
              {siteConfig.social.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
