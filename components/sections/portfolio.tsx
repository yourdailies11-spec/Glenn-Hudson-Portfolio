"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/lib/db";
import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { X } from "lucide-react";

const portfolioCategories = [
  { value: "all", label: "All" },
  { value: "choreography", label: "Choreography" },
  { value: "direction", label: "Direction" },
  { value: "performance", label: "Performance" },
  { value: "workshop", label: "Workshops" },
  { value: "collaboration", label: "Collaborations" },
];

const embedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1`;

export function PortfolioSection({ items }: { items: PortfolioItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filtered =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category.toLowerCase() === selectedCategory);

  return (
    <>
      <div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((item, i) => (
              <StaggerItem key={item.id}>
                <div
                  className={`group relative aspect-square overflow-hidden bg-bg-tertiary ${item.video_id ? "cursor-pointer" : ""}`}
                  onClick={() => item.video_id && setActiveItem(item)}
                >
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-8 h-8 border border-border-low opacity-30" />
                    </div>
                  )}

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Index */}
                  <span className="absolute top-3 left-3 text-[10px] font-body font-500 text-text-light/50 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Play icon */}
                  {item.video_id && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 border border-white/60 group-hover:border-accent-gold flex items-center justify-center transition-colors duration-300">
                        <div
                          className="w-0 h-0 ml-0.5"
                          style={{
                            borderTop: "6px solid transparent",
                            borderBottom: "6px solid transparent",
                            borderLeft: "10px solid white",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Bottom text */}
                  <div className="absolute bottom-0 inset-x-0 p-3">
                    <p className="text-[9px] font-body font-600 uppercase tracking-[0.18em] text-accent-gold mb-1">
                      {item.category.replace(/-/g, " ")} &middot; {item.year}
                    </p>
                    <p className="text-sm font-display font-600 text-text-primary leading-snug line-clamp-1 group-hover:text-accent-gold transition-colors duration-300">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-[11px] font-body text-text-light/70 leading-relaxed mt-1 line-clamp-2 hidden md:block">
                        {item.description}
                      </p>
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

      {activeItem?.video_id && (
        <div
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setActiveItem(null)}
        >
          <button
            aria-label="Close video"
            className="absolute top-6 right-6 w-10 h-10 border border-text-primary/20 flex items-center justify-center text-text-primary/60 hover:text-text-primary hover:border-text-primary/60 transition-all duration-200"
            onClick={() => setActiveItem(null)}
          >
            <X size={18} />
          </button>
          <div className="absolute top-6 left-6 hidden md:block">
            <p className="text-[10px] font-body uppercase tracking-[0.22em] text-accent-gold mb-1">
              {activeItem.category.replace(/-/g, " ")} &middot; {activeItem.year}
            </p>
            <p className="text-sm font-display text-text-primary">{activeItem.title}</p>
          </div>
          <div
            className="w-full max-w-4xl aspect-video shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={embedUrl(activeItem.video_id)}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
