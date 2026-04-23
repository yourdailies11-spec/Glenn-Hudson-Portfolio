import { AboutSection } from "@/components/sections/about";

export const metadata = {
  title: "About — Glenn Hudson",
  description:
    "Learn more about Glenn Hudson, choreographer and artistic director based in London.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <AboutSection />
      </div>
    </main>
  );
}
