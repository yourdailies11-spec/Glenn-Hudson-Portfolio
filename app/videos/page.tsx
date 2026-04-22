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
    <main className="flex-1">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-600 mb-4">
              Videos
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              Explore choreography, performances, and behind-the-scenes content.
            </p>
          </div>
          <VideoSection videos={videos} />
        </div>
      </section>
    </main>
  );
}
