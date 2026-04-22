"use client";

import { useState } from "react";
import type { Video } from "@/lib/db";
import { thumbnailUrl, embedUrl } from "@/lib/db";
import {
  AnimatedElement,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { Container } from "@/components/ui/container";
import { Play, X } from "lucide-react";

export function VideoSection({ videos }: { videos: Video[] }) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      <section id="videos" className="py-32 md:py-40 bg-white">
        <Container>
          <AnimatedElement type="slide-up" className="mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-600">
                Videos
              </h2>
              <p className="text-lg font-body text-muted max-w-2xl leading-relaxed">
                Featured videos showcasing choreography, performances, and
                behind-the-scenes content.
              </p>
            </div>
          </AnimatedElement>

          {videos.length > 0 ? (
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <StaggerItem key={video.id}>
                    <VideoCard
                      video={video}
                      onPlay={() => setActiveVideoId(video.video_id)}
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          ) : (
            <div className="text-center py-24">
              <p className="font-body text-muted text-lg">
                No videos yet — check back soon.
              </p>
            </div>
          )}
        </Container>
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

function VideoCard({
  video,
  onPlay,
}: {
  video: Video;
  onPlay: () => void;
}) {
  return (
    <button onClick={onPlay} className="w-full text-left group cursor-pointer">
      <div className="mb-6 overflow-hidden relative aspect-video border border-black/5 group-hover:border-accent-warm/20 transition-all duration-500">
        <img
          src={thumbnailUrl(video.video_id)}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-all duration-500">
          <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
            <Play size={28} className="text-black ml-1" fill="currentColor" />
          </div>
        </div>
        {video.duration && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-body px-3 py-1.5 group-hover:bg-accent-warm transition-all duration-300">
            {video.duration}
          </div>
        )}
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-display font-600 line-clamp-2 group-hover:text-accent-warm transition-colors duration-300">
          {video.title}
        </h3>
        <p className="text-base font-body text-muted line-clamp-2 leading-relaxed">
          {video.description}
        </p>
      </div>
    </button>
  );
}
