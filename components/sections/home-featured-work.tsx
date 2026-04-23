"use client";

import type { PortfolioItem } from "@/lib/db";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { AnimatedElement } from "@/components/ui/motion";
import Link from "next/link";

export function HomeFeaturedWork({ items }: { items: PortfolioItem[] }) {
  return (
    <section className="py-28 md:py-36 px-6 md:px-10 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedElement type="fade-in">
          <div className="flex items-center justify-between mb-20">
            <div className="flex items-center gap-6">
              <span className="block w-10 h-px bg-accent-gold" />
              <span className="text-[11px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold">
                Selected Works
              </span>
            </div>
            <Link
              href="/work"
              className="group flex items-center gap-3 text-[11px] font-body font-500 uppercase tracking-[0.2em] text-text-light hover:text-text-primary transition-colors duration-300"
            >
              All Work
              <span className="block h-px bg-current w-5 group-hover:w-8 transition-all duration-300 ease-out" />
            </Link>
          </div>
        </AnimatedElement>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle">
            {items.map((item, i) => (
              <StaggerItem key={item.id}>
                <div className="group bg-bg-primary hover:bg-bg-secondary transition-colors duration-500 cursor-pointer">
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden bg-bg-tertiary relative">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 border border-border-low opacity-30" />
                      </div>
                    )}
                    {/* Number overlay */}
                    <div className="absolute top-5 left-5">
                      <span className="text-[11px] font-body font-500 text-text-light/60 tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-7">
                    <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-3">
                      {item.category.replace(/-/g, " ")} &middot; {item.year}
                    </p>
                    <h3 className="text-2xl font-display font-600 leading-snug text-text-primary group-hover:text-accent-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
