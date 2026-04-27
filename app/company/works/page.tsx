import type { Metadata } from "next";
import { getCompanyWorks } from "@/lib/db";

export const metadata: Metadata = {
  title: "Works — Definitives — Glenn Hudson",
  description:
    "Productions, commissions, and repertoire from Definitives Dance Company.",
};

export default async function CompanyWorksPage() {
  const works = await getCompanyWorks();

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
            Productions, commissions, and repertoire.
          </p>
        </div>

        {works.length === 0 ? (
          <p className="font-body text-text-light italic">
            No works yet — add rows to the <code>company_works</code> table in Supabase.
          </p>
        ) : (
          <div className="divide-y divide-border-subtle">
            {works.map((work) => (
              <div
                key={work.id}
                className="flex items-center gap-6 md:gap-10 py-6 group"
              >
                <span className="text-[11px] font-body font-600 text-text-light tabular-nums w-10 shrink-0">
                  {work.year}
                </span>
                <div className="flex-1 min-w-0">
                  <span
                    className="font-display font-600 text-text-primary block"
                    style={{
                      fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {work.title}
                  </span>
                  {work.description && (
                    <span className="text-[12px] font-body text-text-light mt-1 block">
                      {work.description}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-text-light hidden md:block shrink-0">
                  {work.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
