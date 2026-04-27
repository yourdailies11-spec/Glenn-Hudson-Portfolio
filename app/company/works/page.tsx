import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works — Definitives — Glenn Hudson",
  description:
    "Productions, commissions, and repertoire from Definitives Dance Company spanning 19 years.",
};

const works = [
  { year: "2024", title: "Production Title", category: "World Premiere" },
  { year: "2023", title: "Production Title", category: "Commission" },
  { year: "2022", title: "Production Title", category: "Touring" },
  { year: "2021", title: "Production Title", category: "Revival" },
  { year: "2019", title: "Production Title", category: "World Premiere" },
  { year: "2017", title: "Production Title", category: "Commission" },
  { year: "2015", title: "Production Title", category: "Touring" },
  { year: "2012", title: "Production Title", category: "World Premiere" },
];

export default function CompanyWorksPage() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-28 md:pb-36">
        <div className="mb-16">
          <div className="flex items-center gap-5 mb-6">
            <span className="block w-8 h-px bg-accent-gold" />
            <span className="text-[11px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold">
              Definitives
            </span>
          </div>
          <h1
            className="font-display font-600 text-text-primary leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Works
          </h1>
          <p className="text-base font-body text-text-muted max-w-xl leading-relaxed">
            Productions, commissions, and repertoire spanning 19 years.
          </p>
        </div>

        <div className="divide-y divide-border-subtle">
          {works.map((work, i) => (
            <div
              key={i}
              className="flex items-center gap-6 md:gap-10 py-6 group cursor-pointer"
            >
              <span className="text-[11px] font-body font-600 text-text-light tabular-nums w-10 shrink-0">
                {work.year}
              </span>
              <span
                className="font-display font-600 text-text-primary flex-1 group-hover:text-accent-gold transition-colors duration-200"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)", letterSpacing: "-0.01em" }}
              >
                {work.title}
              </span>
              <span className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-text-light hidden md:block">
                {work.category}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-border-low group-hover:text-accent-gold transition-colors duration-200 shrink-0"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
