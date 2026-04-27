"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", href: "/company/about" },
  { label: "Works", href: "/company/works" },
  { label: "Dancers", href: "/company/dancers" },
  { label: "News", href: "/company/news" },
];

export function DefinitivesSubNav() {
  const pathname = usePathname();
  if (pathname === "/company") return null;

  return (
    <div className="border-b border-border-subtle bg-bg-secondary/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-11 flex items-center gap-6">
        <Link
          href="/company"
          className="text-[10px] font-body font-600 uppercase tracking-[0.32em] text-accent-gold shrink-0 hover:opacity-70 transition-opacity"
        >
          Definitives
        </Link>
        <span className="block w-px h-3 bg-border-low shrink-0" />
        <nav className="flex items-center gap-7 overflow-x-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] font-body font-500 uppercase tracking-[0.18em] whitespace-nowrap transition-colors duration-200 ${
                pathname === link.href
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
