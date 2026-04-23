"use client";

import { ArrowUp } from "lucide-react";

export function FooterScrollTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-2.5 text-sm font-body text-text-muted hover:text-accent-gold transition-colors duration-300"
      aria-label="Scroll to top"
    >
      Back to top
      <ArrowUp size={16} />
    </button>
  );
}
