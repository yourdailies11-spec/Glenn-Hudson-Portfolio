import { HomeHeroSection } from "@/components/sections/home-hero";
import { HomeVideoSlideshow } from "@/components/sections/home-video-slideshow";
import { HomeFeaturedWork } from "@/components/sections/home-featured-work";
import { HomeFeaturedVideos } from "@/components/sections/home-featured-videos";
import { HomeCtaSection } from "@/components/sections/home-cta";
import { getFeaturedPortfolioItems, getFeaturedVideos, getSiteSettings } from "@/lib/db";
import { siteConfig } from "@/data/site-content";

export default async function Home() {
  const [featuredWork, featuredVideos, settings] = await Promise.all([
    getFeaturedPortfolioItems(),
    getFeaturedVideos(),
    getSiteSettings(),
  ]);

  const heroDescription =
    settings.hero_description || siteConfig.hero.description;
  const profilePhoto =
    settings.profile_photo_url || siteConfig.profilePhoto || null;
  const heroVideoId = settings.hero_video_id || null;
  const instagramUrl = settings.social_instagram || siteConfig.social.instagram;

  return (
    <main className="flex-1">
      <HomeHeroSection description={heroDescription} profilePhoto={profilePhoto} heroVideoId={heroVideoId} />
      <HomeVideoSlideshow videos={featuredVideos} />
      <HomeFeaturedWork items={featuredWork} />
      <HomeFeaturedVideos videos={featuredVideos} />
      <HomeCtaSection instagram={instagramUrl} />
    </main>
  );
}
