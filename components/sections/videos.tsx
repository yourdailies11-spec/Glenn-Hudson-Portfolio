"use client";

import { useState } from "react";
import type { Video } from "@/lib/db";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { X } from "lucide-react";

const thumbnailUrl = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const embedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1`;

export function VideoSection({ videos }: { videos: Video[] }) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      {videos.length > 0 ? (
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle">
            {videos.map((video) => (
              <StaggerItem key={video.id}>
                <button
                  onClick={() => setActiveVideoId(video.video_id)}
                  className="w-full text-left group bg-bg-primary hover:bg-bg-secondary transition-colors duration-500"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={thumbnailUrl(video.video_id)}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 border border-text-primary/40 group-hover:border-accent-gold flex items-center justify-center transition-colors duration-300">
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
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 text-[11px] font-body font-500 text-text-primary/70 tracking-wider">
                        {video.duration}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-600 text-text-primary group-hover:text-accent-gold transition-colors duration-300 line-clamp-2 mb-2">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-sm font-body text-text-muted line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    )}
                  </div>
                </button>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      ) : (
        <div className="text-center py-24 border border-border-subtle">
          <p className="font-body text-text-muted text-base">
            No videos yet — check back soon.
          </p>
        </div>
      )}

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
