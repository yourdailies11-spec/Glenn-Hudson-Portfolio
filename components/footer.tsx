import { siteConfig } from "@/data/site-content";
import { Instagram, Youtube } from "lucide-react";
import { FooterScrollTop } from "@/components/footer-scroll-top";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact" },
];

export function Footer({ settings = {} }: { settings?: Record<string, string> }) {
  const instagram = settings.social_instagram || siteConfig.social.instagram;
  const youtube = settings.social_youtube || siteConfig.social.youtube;
  const email = settings.social_email || siteConfig.social.email;

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 mb-16 md:mb-20">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-600 mb-3 text-text-primary">
              {siteConfig.name}
            </h3>
            <p className="text-sm font-body text-text-muted">
              {siteConfig.location}, UK
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-text-muted hover:text-accent-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-body text-text-muted hover:text-[#E1306C] transition-colors duration-300"
            >
              <Instagram size={16} style={{ color: "#E1306C" }} />
              Instagram
            </a>
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-body text-text-muted hover:text-accent-gold transition-colors duration-300"
            >
              <Youtube size={16} />
              YouTube
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-sm font-body text-text-muted hover:text-accent-gold transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border-subtle pt-12 md:pt-16">
          <p className="text-xs font-body text-text-light mb-6 md:mb-0">
            © {siteConfig.footer.year} {siteConfig.footer.copyright}. All rights reserved.
          </p>
          <FooterScrollTop />
        </div>
      </div>
    </footer>
  );
}
