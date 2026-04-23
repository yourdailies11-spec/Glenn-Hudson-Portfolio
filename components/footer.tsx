"use client";

import { siteConfig } from "@/data/site-content";
import { Instagram, Youtube, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Videos", href: "/videos" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 mb-16 md:mb-20">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-600 mb-3 text-text-primary">
              {siteConfig.name}
            </h3>
            <p className="text-base font-body text-text-muted">
              {siteConfig.location}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-body text-text-muted hover:text-accent-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base font-body text-text-muted hover:text-accent-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
              Instagram
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base font-body text-text-muted hover:text-accent-gold transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={18} />
              YouTube
            </a>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="flex items-center gap-3 text-base font-body text-text-muted hover:text-accent-gold transition-colors duration-300"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border-subtle pt-12 md:pt-16">
          <p className="text-xs font-body text-text-light mb-6 md:mb-0">
            © {siteConfig.footer.year} {siteConfig.footer.copyright}. All rights
            reserved.
          </p>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2.5 text-sm font-body text-text-muted hover:text-accent-gold transition-colors duration-300"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
