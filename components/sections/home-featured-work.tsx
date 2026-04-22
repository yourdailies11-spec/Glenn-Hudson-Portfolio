"use client";

import type { PortfolioItem } from "@/lib/db";
import {
  AnimatedElement,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import Link from "next/link";

export function HomeFeaturedWork({ items }: { items: PortfolioItem[] }) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement type="slide-up" className="mb-16">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-600 mb-4">
                Featured Work
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                A selection of recent choreographic and directorial projects.
              </p>
            </div>
            <Link
              href="/work"
              className="text-accent-gold hover:text-accent-gold/80 transition-colors duration-300 font-body whitespace-nowrap"
            >
              View all →
            </Link>
          </div>
        </AnimatedElement>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <StaggerItem key={item.id}>
                <div className="group cursor-pointer">
                  <div className="mb-6 aspect-[4/5] bg-bg-tertiary border border-border-low group-hover:border-accent-gold/20 transition-all duration-500 overflow-hidden">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-border-low rounded-full opacity-30" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-display font-600 group-hover:text-accent-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-light capitalize">
                        {item.category.replace("-", " ")} • {item.year}
                      </p>
                    </div>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
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
