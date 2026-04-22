"use client";

import { siteConfig } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/motion";
import Image from "next/image";

export function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pb-24 flex items-center bg-cream overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Content */}
          <div className="space-y-10 md:space-y-12">
            <AnimatedElement type="slide-up" delay={0.1}>
              <div className="space-y-6">
                <p className="text-xs font-body font-600 text-accent-warm uppercase tracking-[0.15em]">
                  Choreographer & Artistic Director
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-600 leading-tight">
                  {siteConfig.hero.title}
                </h1>
              </div>
            </AnimatedElement>

            <AnimatedElement type="fade-in" delay={0.25}>
              <p className="text-lg md:text-xl font-body text-muted leading-relaxed max-w-xl">
                {siteConfig.hero.description}
              </p>
            </AnimatedElement>

            <AnimatedElement type="slide-up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <Button variant="primary" size="lg" onClick={scrollToWork}>
                  {siteConfig.hero.cta1}
                </Button>
                <Button variant="secondary" size="lg" onClick={scrollToContact}>
                  {siteConfig.hero.cta2}
                </Button>
              </div>
            </AnimatedElement>
          </div>

          {/* Image */}
          <AnimatedElement type="slide-in-left" delay={0.3}>
            <div className="relative aspect-[3/4] -mt-8 md:-mt-12">
              <div className="absolute inset-0 bg-gradient-to-b from-accent-warm/8 to-transparent opacity-60 pointer-events-none z-10" />
              <Image
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop"
                alt="Glenn Hudson - Choreographer"
                width={600}
                height={800}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
