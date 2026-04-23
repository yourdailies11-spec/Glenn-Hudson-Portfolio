"use client";

import { useState } from "react";
import type { Video } from "@/lib/db";
import { StaggerContainer, StaggerItem, AnimatedElement } from "@/components/ui/motion";
import { X } from "lucide-react";
import Link from "next/link";

const thumbnailUrl = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const embedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1`;

export function HomeFeaturedVideos({ videos }: { videos: Video[] }) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      <section className="py-28 md:py-36 px-6 md:px-10 border-t border-border-subtle bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <AnimatedElement type="fade-in">
            <div className="flex items-center justify-between mb-20">
              <div className="flex items-center gap-6">
                <span className="block w-10 h-px bg-accent-gold" />
                <span className="text-[11px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold">
                  Featured Videos
                </span>
              </div>
              <Link
                href="/videos"
                className="group flex items-center gap-3 text-[11px] font-body font-500 uppercase tracking-[0.2em] text-text-light hover:text-text-primary transition-colors duration-300"
              >
                All Videos
                <span className="block h-px bg-current w-5 group-hover:w-8 transition-all duration-300 ease-out" />
              </Link>
            </div>
          </AnimatedElement>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle">
              {videos.map((video) => (
                <StaggerItem key={video.id}>
                  <button
                    onClick={() => setActiveVideoId(video.video_id)}
                    className="w-full text-left group bg-bg-secondary hover:bg-bg-tertiary transition-colors duration-500"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={thumbnailUrl(video.video_id)}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                        {/* Play button */}
                        <div className="w-14 h-14 border border-text-primary/40 group-hover:border-accent-gold flex items-center justify-center transition-colors duration-400">
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
                      {video.duration && (
                        <div className="absolute bottom-4 right-4 text-[11px] font-body font-500 text-text-primary/70 tracking-wider">
                          {video.duration}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-7">
                      <h3 className="text-xl font-display font-600 text-text-primary group-hover:text-accent-gold transition-colors duration-300 line-clamp-2 mb-2">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="text-sm font-body text-text-light line-clamp-2 leading-relaxed">
                          {video.description}
                        </p>
                      )}
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Lightbox */}
      {activeVideoId && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setActiveVideoId(null)}
        >
          <button
            aria-label="Close video"
            className="absolute top-6 right-6 w-10 h-10 border border-text-primary/20 flex items-center justify-center text-text-primary/60 hover:text-text-primary hover:border-text-primary/60 transition-all duration-200"
            onClick={() => setActiveVideoId(null)}
          >
            <X size={18} />
          </button>
          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={embedUrl(activeVideoId)}
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
