import { HomeHeroSection } from "@/components/sections/home-hero";
import { HomeFeaturedWork } from "@/components/sections/home-featured-work";
import { HomeFeaturedVideos } from "@/components/sections/home-featured-videos";
import { HomeCtaSection } from "@/components/sections/home-cta";
import { getFeaturedPortfolioItems, getFeaturedVideos } from "@/lib/db";

export default async function Home() {
  const [featuredWork, featuredVideos] = await Promise.all([
    getFeaturedPortfolioItems(),
    getFeaturedVideos(),
  ]);

  return (
    <main className="flex-1">
      <HomeHeroSection />
      <HomeFeaturedWork items={featuredWork} />
      <HomeFeaturedVideos videos={featuredVideos} />
      <HomeCtaSection />
    </main>
  );
}
