"use client";

import { AnimatedElement } from "@/components/ui/motion";
import Link from "next/link";

export function HomeCtaSection() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <AnimatedElement type="slide-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
            {/* Left — headline */}
            <div className="max-w-2xl">
              <p className="text-[11px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold mb-8 flex items-center gap-4">
                <span className="block w-8 h-px bg-accent-gold" />
                Start a Conversation
              </p>
              <h2
                className="font-display font-600 text-text-primary leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
              >
                Ready to create something extraordinary?
              </h2>
            </div>

            {/* Right — CTA */}
            <div className="flex-shrink-0 flex flex-col gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-[12px] font-body font-600 uppercase tracking-[0.22em] text-bg-primary bg-accent-gold hover:bg-accent-gold/80 px-8 py-4 transition-colors duration-300"
              >
                Get in Touch
                <span className="block h-px bg-current w-5 group-hover:w-8 transition-all duration-300 ease-out" />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-4 text-[12px] font-body font-600 uppercase tracking-[0.22em] text-text-muted hover:text-text-primary transition-colors duration-300"
              >
                Explore Work
                <span className="block h-px bg-current w-5 group-hover:w-8 transition-all duration-300 ease-out" />
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
