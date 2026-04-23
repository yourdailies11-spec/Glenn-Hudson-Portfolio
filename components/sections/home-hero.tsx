"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0, 0, 1], delay },
});

export function HomeHeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-[68px] px-6 md:px-10 overflow-hidden">
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center py-16">
        <motion.p
          {...fadeUp(0.15)}
          className="text-[11px] font-body font-600 text-accent-gold uppercase tracking-[0.28em] mb-10"
        >
          Choreographer &amp; Artistic Director
        </motion.p>

        <div>
          <motion.h1
            {...fadeUp(0.3)}
            className="font-display font-600 text-text-primary leading-[0.88] select-none"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 13rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Glenn
          </motion.h1>
          <motion.h1
            {...fadeUp(0.46)}
            className="font-display font-600 text-text-muted leading-[0.88] select-none"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 13rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Hudson
          </motion.h1>
        </div>

        <motion.div {...fadeUp(0.65)} className="mt-14 max-w-xs">
          <p className="text-[15px] font-body text-text-secondary leading-relaxed mb-10">
            Crafting purposeful movement for stage, screen, and creative
            collaboration — based in London.
          </p>
          <div className="flex items-center gap-10">
            <Link
              href="/work"
              className="group flex items-center gap-3 text-[11px] font-body font-600 uppercase tracking-[0.22em] text-text-primary hover:text-accent-gold transition-colors duration-300"
            >
              View Work
              <span className="block h-px bg-current w-6 group-hover:w-10 transition-all duration-400 ease-out" />
            </Link>
            <Link
              href="/contact"
              className="text-[11px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold hover:opacity-60 transition-opacity duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom metadata strip */}
      <motion.div {...fadeUp(0.85)} className="pb-10">
        <div className="w-full h-px bg-border-subtle mb-7" />
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-body font-500 uppercase tracking-[0.18em] text-text-light">
            London, UK
          </span>
          <span className="text-[11px] font-body font-500 uppercase tracking-[0.18em] text-text-light hidden sm:block">
            Stage &middot; Screen &middot; Direction
          </span>
          <span className="text-[11px] font-body font-500 uppercase tracking-[0.18em] text-text-light">
            Est. 2010
          </span>
        </div>
      </motion.div>
    </section>
  );
}
