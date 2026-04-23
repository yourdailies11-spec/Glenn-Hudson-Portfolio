"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Video } from "@/lib/db";

const thumbnailUrl = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

const embedUrl = (id: string, startSeconds?: number | null) =>
  `https://www.youtube.com/embed/${id}?autoplay=1${startSeconds ? `&start=${startSeconds}` : ""}`;

const SLIDE_DURATION = 6000;

export function HomeVideoSlideshow({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % videos.length);
  }, [videos.length]);

  const prev = () => setCurrent((i) => (i - 1 + videos.length) % videos.length);

  // Auto-advance when lightbox is closed
  useEffect(() => {
    if (activeVideo || videos.length <= 1) return;
    const timer = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [current, activeVideo, next, videos.length]);

  if (!videos.length) return null;

  const video = videos[current];

  return (
    <>
      <section className="border-t border-border-subtle bg-bg-secondary">
        {/* Section label */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="block w-8 h-px bg-accent-gold" />
            <span className="text-[11px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold">
              Watch
            </span>
          </div>
          {videos.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous video"
                className="w-9 h-9 border border-border-low flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent-gold/40 transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next video"
                className="w-9 h-9 border border-border-low flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent-gold/40 transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Slide */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
          <AnimatePresence mode="wait">
            <motion.button
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveVideo(video)}
              className="w-full text-left group relative focus:outline-none"
            >
              {/* Thumbnail */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
                <img
                  src={thumbnailUrl(video.video_id)}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-text-primary/50 group-hover:border-accent-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <div
                      className="w-0 h-0 ml-1 text-text-primary"
                      style={{
                        borderTop: "10px solid transparent",
                        borderBottom: "10px solid transparent",
                        borderLeft: "18px solid currentColor",
                      }}
                    />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-2">
                    {video.duration && `${video.duration}  ·  `}Video
                  </p>
                  <h3
                    className="font-display font-600 text-text-primary leading-tight"
                    style={{ fontSize: "clamp(1.25rem, 3vw, 2.25rem)" }}
                  >
                    {video.title}
                  </h3>
                </div>

                {/* Progress bar */}
                {!activeVideo && videos.length > 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-border-subtle overflow-hidden">
                    <motion.div
                      key={current}
                      className="h-full bg-accent-gold origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                    />
                  </div>
                )}
              </div>

              {/* Dot indicators */}
              {videos.length > 1 && (
                <div className="flex items-center gap-2 mt-4">
                  {videos.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrent(i);
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-px transition-all duration-300 ${
                        i === current
                          ? "w-8 bg-accent-gold"
                          : "w-4 bg-border-low hover:bg-text-light"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.button>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          <button
            aria-label="Close video"
            className="absolute top-6 right-6 w-10 h-10 border border-text-primary/20 flex items-center justify-center text-text-primary/60 hover:text-text-primary hover:border-text-primary/60 transition-all duration-200"
            onClick={() => setActiveVideo(null)}
          >
            <X size={18} />
          </button>
          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={embedUrl(activeVideo.video_id, activeVideo.start_seconds)}
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
