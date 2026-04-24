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
    <main className="flex-1 pt-[68px]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-28 md:pb-36">
        {/* Page header */}
        <div className="mb-20">
          <div className="flex items-center gap-5 mb-6">
            <span className="block w-8 h-px bg-accent-gold" />
            <span className="text-[11px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold">
              Portfolio
            </span>
          </div>
          <h1
            className="font-display font-600 text-text-primary leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Work
          </h1>
          <p className="text-base font-body text-text-muted max-w-xl leading-relaxed">
            Choreographic works, artistic direction, performances, and
            collaborative projects.
          </p>
        </div>

        <PortfolioSection items={items} />
      </div>
    </main>
  );
}
