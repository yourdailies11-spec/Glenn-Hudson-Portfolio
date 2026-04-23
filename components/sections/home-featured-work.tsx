"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/lib/db";
import { StaggerContainer, StaggerItem, AnimatedElement } from "@/components/ui/motion";
import { X } from "lucide-react";
import Link from "next/link";

const embedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1`;

export function HomeFeaturedWork({ items }: { items: PortfolioItem[] }) {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <section className="py-28 md:py-36 px-6 md:px-10 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
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
                  <div
                    className={`group bg-bg-primary hover:bg-bg-secondary transition-colors duration-500 ${item.video_id ? "cursor-pointer" : ""}`}
                    onClick={() => item.video_id && setActiveItem(item)}
                  >
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

                      <div className="absolute top-5 left-5">
                        <span className="text-[11px] font-body font-500 text-text-light/60 tracking-widest">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {item.video_id && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                          <div className="w-12 h-12 border border-text-primary/60 group-hover:border-accent-gold flex items-center justify-center transition-colors duration-300">
                            <div
                              className="w-0 h-0 ml-1"
                              style={{
                                borderTop: "7px solid transparent",
                                borderBottom: "7px solid transparent",
                                borderLeft: "12px solid currentColor",
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-7">
                      <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-3">
                        {item.category.replace(/-/g, " ")} &middot; {item.year}
                      </p>
                      <h3 className="text-2xl font-display font-600 leading-snug text-text-primary group-hover:text-accent-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.video_id && (
                        <p className="text-[10px] font-body uppercase tracking-[0.18em] text-accent-gold mt-3 flex items-center gap-2">
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
        </div>
      </section>

      {activeItem?.video_id && (
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
