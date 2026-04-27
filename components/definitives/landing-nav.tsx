"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const sections = [
  {
    index: "01",
    label: "About",
    sub: "The Company",
    description: "Vision, history, and 19 years of movement",
    href: "/company/about",
  },
  {
    index: "02",
    label: "Works",
    sub: "Productions",
    description: "Commissions, repertoire, and touring productions",
    href: "/company/works",
  },
  {
    index: "03",
    label: "Dancers",
    sub: "The Ensemble",
    description: "Resident artists and guest collaborators",
    href: "/company/dancers",
  },
  {
    index: "04",
    label: "News",
    sub: "Updates",
    description: "Announcements, press, and upcoming events",
    href: "/company/news",
  },
];

function NavRow({
  section,
  isLast,
  delay,
}: {
  section: (typeof sections)[0];
  isLast: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative flex-1 min-h-[90px] border-t border-border-subtle overflow-hidden${
        isLast ? " border-b" : ""
      }`}
    >
      {/* Ghost index in background */}
      <motion.span
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-600 text-text-primary pointer-events-none select-none leading-none"
        style={{ fontSize: "clamp(7rem, 20vw, 18rem)", letterSpacing: "-0.06em" }}
        animate={{ opacity: hovered ? 0.05 : 0, x: hovered ? -24 : 8 }}
        transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
      >
        {section.index}
      </motion.span>

      {/* Gold sweep line */}
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 h-px bg-accent-gold pointer-events-none"
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.45, ease: [0.25, 0, 0, 1] }}
      />

      <Link href={section.href} className="absolute inset-0 flex items-center px-6 md:px-10 gap-6 md:gap-10">
        {/* Number */}
        <motion.span
          className="font-body font-600 uppercase tracking-[0.3em] shrink-0 tabular-nums"
          style={{ fontSize: "10px" }}
          animate={{ color: hovered ? "var(--accent-gold)" : "var(--text-light)" }}
          transition={{ duration: 0.25 }}
        >
          {section.index}
        </motion.span>

        {/* Section name */}
        <motion.span
          className="font-display font-600 text-text-primary leading-none"
          style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)", letterSpacing: "-0.025em" }}
          animate={{ x: hovered ? 12 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
        >
          {section.label}
        </motion.span>

        {/* Sub-label */}
        <motion.span
          className="hidden md:block font-body font-500 text-text-light"
          style={{ fontSize: "11px" }}
          animate={{ opacity: hovered ? 0.65 : 0.3, x: hovered ? 12 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
        >
          — {section.sub}
        </motion.span>

        {/* Description — large screens */}
        <motion.span
          className="hidden lg:block font-body text-text-light ml-auto mr-10 max-w-[220px] text-right leading-snug"
          style={{ fontSize: "11px" }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          {section.description}
        </motion.span>

        {/* Arrow */}
        <motion.span
          className="ml-auto lg:ml-0 shrink-0"
          animate={{
            x: hovered ? 8 : 0,
            color: hovered ? "var(--accent-gold)" : "var(--border-low)",
          }}
          transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </Link>
    </motion.div>
  );
}

export function DefinitivesLandingNav() {
  return (
    <div className="flex-1 flex flex-col">
      {sections.map((section, i) => (
        <NavRow
          key={section.href}
          section={section}
          isLast={i === sections.length - 1}
          delay={0.3 + i * 0.08}
        />
      ))}
    </div>
  );
}
