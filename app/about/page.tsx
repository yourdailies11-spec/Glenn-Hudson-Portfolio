import { AboutSection } from "@/components/sections/about";
import { getSiteSettings } from "@/lib/db";
import { siteConfig } from "@/data/site-content";

export const metadata = {
  title: "About — Glenn Hudson",
  description:
    "Learn more about Glenn Hudson, choreographer and artistic director based in London.",
};

export default async function AboutPage() {
  const settings = await getSiteSettings();

  const intro = settings.about_intro || siteConfig.about.intro;
  const bio = settings.about_bio || siteConfig.about.bio;
  const skills = settings.skills
    ? settings.skills.split("\n").map((s) => s.trim()).filter(Boolean)
    : [];
  const photos = [
    settings.about_photo_1 || null,
    settings.about_photo_2 || null,
    settings.about_photo_3 || null,
  ];

  return (
    <main className="flex-1 pt-[68px]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-28 md:pb-36">
        <AboutSection intro={intro} bio={bio} skills={skills} photos={photos} />
      </div>
    </main>
  );
}
