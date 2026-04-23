"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/lib/db";
import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const portfolioCategories = [
  { value: "all", label: "All" },
  { value: "choreography", label: "Choreography" },
  { value: "direction", label: "Direction" },
  { value: "performance", label: "Performance" },
  { value: "workshop", label: "Workshops" },
  { value: "collaboration", label: "Collaborations" },
];

export function PortfolioSection({ items }: { items: PortfolioItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Category filter */}
      <AnimatedElement type="fade-in" className="mb-16">
        <div className="flex flex-wrap gap-2">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2 text-[11px] font-body font-600 uppercase tracking-[0.18em] transition-all duration-300 ${
                selectedCategory === cat.value
                  ? "bg-accent-gold text-bg-primary"
                  : "border border-border-low text-text-muted hover:border-accent-gold/40 hover:text-text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </AnimatedElement>

      <StaggerContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle">
          {filtered.map((item, i) => (
            <StaggerItem key={item.id}>
              <div className="group bg-bg-primary hover:bg-bg-secondary transition-colors duration-500 cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-bg-tertiary relative">
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
                  <div className="absolute top-5 left-5">
                    <span className="text-[11px] font-body font-500 text-text-light/60 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-3">
                    {item.category.replace(/-/g, " ")} &middot; {item.year}
                  </p>
                  <h3 className="text-2xl font-display font-600 text-text-primary group-hover:text-accent-gold transition-colors duration-300 mb-3">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm font-body text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-body uppercase tracking-wider px-3 py-1 border border-border-low text-text-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>

      {filtered.length === 0 && (
        <div className="text-center py-24 border border-border-subtle">
          <p className="font-body text-text-muted text-base">
            No work in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
