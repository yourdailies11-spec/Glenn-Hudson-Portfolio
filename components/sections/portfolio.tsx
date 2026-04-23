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

// Accepts full YouTube URLs or bare video IDs
function extractYouTubeId(url: string): string {
  const short = url.match(/youtu\.be\/([^?&\s]+)/);
  if (short) return short[1];
  const long = url.match(/[?&]v=([^&\s]+)/);
  if (long) return long[1];
  return url.trim();
}

function embedUrl(raw: string) {
  return `https://www.youtube.com/embed/${extractYouTubeId(raw)}?autoplay=1`;
}

export function PortfolioSection({ items }: { items: PortfolioItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filtered =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <>
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
                <div
                  className={`group bg-bg-primary hover:bg-bg-secondary transition-colors duration-500 ${item.video_url ? "cursor-pointer" : ""}`}
                  onClick={() => item.video_url && setActiveItem(item)}
                >
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

                    {/* Index */}
                    <div className="absolute top-5 left-5">
                      <span className="text-[11px] font-body font-500 text-text-light/60 tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Play button — only when video exists */}
                    {item.video_url && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                        <div className="w-14 h-14 border border-text-primary/60 group-hover:border-accent-gold flex items-center justify-center transition-colors duration-300">
                          <div
                            className="w-0 h-0 ml-1"
                            style={{
                              borderTop: "8px solid transparent",
                              borderBottom: "8px solid transparent",
                              borderLeft: "14px solid currentColor",
                            }}
                          />
                        </div>
                      </div>
                    )}
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
                    {item.video_url && (
                      <p className="text-[10px] font-body uppercase tracking-[0.18em] text-accent-gold mt-5 flex items-center gap-2">
                        <span className="block w-3 h-px bg-accent-gold" />
                        Watch
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

      {/* Video lightbox */}
      {activeItem?.video_url && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
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
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={embedUrl(activeItem.video_url)}
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
