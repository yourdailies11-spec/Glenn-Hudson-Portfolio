import { PortfolioSection } from "@/components/sections/portfolio";
import { getPortfolioItems } from "@/lib/db";

export const metadata = {
  title: "Work — Glenn Hudson",
  description:
    "Explore Glenn Hudson's choreographic work, artistic direction, and creative projects.",
};

export default async function WorkPage() {
  const items = await getPortfolioItems();

  return (
    <main className="flex-1">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-600 mb-4">
              Work
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              Choreographic works, artistic direction, performances, and
              collaborative projects.
            </p>
          </div>
          <PortfolioSection items={items} />
        </div>
      </section>
    </main>
  );
}
