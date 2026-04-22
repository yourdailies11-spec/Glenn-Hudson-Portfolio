"use client";

import { useState } from "react";
import type { Video } from "@/lib/db";

const thumbnailUrl = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const embedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1`;
import {
  AnimatedElement,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { Play, X } from "lucide-react";
import Link from "next/link";

export function HomeFeaturedVideos({ videos }: { videos: Video[] }) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-border-subtle bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement type="slide-up" className="mb-16">
            <div className="flex items-end justify-between gap-8 mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-600 mb-4">
                  Featured Videos
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                  Explore choreography, performances, and behind-the-scenes
                  content.
                </p>
              </div>
              <Link
                href="/videos"
                className="text-accent-gold hover:text-accent-gold/80 transition-colors duration-300 font-body whitespace-nowrap"
              >
                View all →
              </Link>
            </div>
          </AnimatedElement>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <StaggerItem key={video.id}>
                  <button
                    onClick={() => setActiveVideoId(video.video_id)}
                    className="w-full text-left group cursor-pointer"
                  >
                    <div className="mb-6 aspect-video border border-border-low group-hover:border-accent-gold/20 transition-all duration-500 relative overflow-hidden">
                      <img
                        src={thumbnailUrl(video.video_id)}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-all duration-500">
                        <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center group-hover:bg-accent-gold/20 group-hover:scale-110 transition-all duration-500">
                          <Play
                            size={32}
                            className="text-accent-gold ml-1"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                      {video.duration && (
                        <div className="absolute bottom-3 right-3 bg-black/70 text-accent-gold text-xs font-body px-3 py-1.5">
                          {video.duration}
                        </div>
                      )}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-display font-600 line-clamp-2 group-hover:text-accent-gold transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="text-base text-text-secondary line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {activeVideoId && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <button
            aria-label="Close video"
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
            onClick={() => setActiveVideoId(null)}
          >
            <X size={32} />
          </button>
          <div
            className="w-full max-w-4xl aspect-video"
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
