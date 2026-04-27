import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — Definitives — Glenn Hudson",
  description:
    "News, announcements, and updates from Definitives Dance Company.",
};

const newsItems = [
  {
    date: "April 2026",
    title: "News Item Title",
    excerpt:
      "An update or announcement from Definitives Dance Company. This content can be managed through the admin panel.",
  },
  {
    date: "February 2026",
    title: "News Item Title",
    excerpt:
      "An update or announcement from Definitives Dance Company. This content can be managed through the admin panel.",
  },
  {
    date: "November 2025",
    title: "News Item Title",
    excerpt:
      "An update or announcement from Definitives Dance Company. This content can be managed through the admin panel.",
  },
  {
    date: "September 2025",
    title: "News Item Title",
    excerpt:
      "An update or announcement from Definitives Dance Company. This content can be managed through the admin panel.",
  },
];

export default function CompanyNewsPage() {
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
            News &amp; Updates
          </h1>
          <p className="text-base font-body text-text-muted max-w-xl leading-relaxed">
            Announcements, press coverage, and company updates.
          </p>
        </div>

        <div className="divide-y divide-border-subtle">
          {newsItems.map((item, i) => (
            <div key={i} className="py-10 group cursor-pointer">
              <p className="text-[10px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold mb-4">
                {item.date}
              </p>
              <h3
                className="font-display font-600 text-text-primary mb-4 group-hover:text-accent-gold transition-colors duration-200"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>
              <p className="font-body text-text-muted text-sm max-w-2xl leading-relaxed">
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
