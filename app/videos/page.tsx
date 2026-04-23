import { VideoSection } from "@/components/sections/videos";
import { getVideos } from "@/lib/db";

export const metadata = {
  title: "Videos — Glenn Hudson",
  description:
    "Watch Glenn Hudson's choreographic works, performances, and creative projects on video.",
};

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <main className="flex-1 pt-[68px]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-28 md:pb-36">
        {/* Page header */}
        <div className="mb-20">
          <div className="flex items-center gap-5 mb-6">
            <span className="block w-8 h-px bg-accent-gold" />
            <span className="text-[11px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold">
              Videos
            </span>
          </div>
          <h1
            className="font-display font-600 text-text-primary leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Videos
          </h1>
          <p className="text-base font-body text-text-muted max-w-xl leading-relaxed">
            Choreography, performances, and behind-the-scenes content.
          </p>
        </div>

        <VideoSection videos={videos} />
      </div>
    </main>
  );
}
