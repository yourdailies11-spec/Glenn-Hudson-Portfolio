"use client";

import { siteConfig } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/motion";
import Link from "next/link";

export function HomeHeroSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedElement type="slide-up" delay={0.1}>
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-body font-600 text-accent-gold uppercase tracking-[0.15em]">
                Choreographer & Artistic Director
              </p>
              <h1 className="text-6xl md:text-7xl font-display font-600 leading-tight">
                {siteConfig.hero.title}
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-body text-text-secondary leading-relaxed max-w-2xl">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-8">
              <Link href="/work">
                <Button variant="primary" size="lg">
                  View Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
