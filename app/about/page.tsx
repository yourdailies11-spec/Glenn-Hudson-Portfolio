import { AboutSection } from "@/components/sections/about";

export const metadata = {
  title: "About — Glenn Hudson",
  description:
    "Learn more about Glenn Hudson, choreographer and artistic director based in London.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AboutSection />
        </div>
      </section>
    </main>
  );
}
