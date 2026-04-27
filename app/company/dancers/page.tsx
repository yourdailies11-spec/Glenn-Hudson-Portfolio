import type { Metadata } from "next";
import { getCompanyDancers } from "@/lib/db";

export const metadata: Metadata = {
  title: "Dancers — Definitives — Glenn Hudson",
  description: "The ensemble and resident artists of Definitives Dance Company.",
};

export default async function CompanyDancersPage() {
  const dancers = await getCompanyDancers();

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
            Dancers
          </h1>
          <p className="text-base font-body text-text-muted max-w-xl leading-relaxed">
            The ensemble and resident artists who bring Definitives to life.
          </p>
        </div>

        {dancers.length === 0 ? (
          <p className="font-body text-text-light italic">
            No dancers yet — add rows to the <code>company_dancers</code> table in Supabase.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border-subtle">
            {dancers.map((dancer) => (
              <div
                key={dancer.id}
                className="bg-bg-primary aspect-[3/4] relative overflow-hidden group"
              >
                {dancer.photo_url ? (
                  <img
                    src={dancer.photo_url}
                    alt={dancer.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 bg-bg-secondary flex items-center justify-center">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 60 60"
                      fill="none"
                      className="text-border-low"
                    >
                      <circle cx="30" cy="22" r="12" stroke="currentColor" strokeWidth="1.5" />
                      <path
                        d="M6 54c0-13.255 10.745-24 24-24s24 10.745 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-primary/90 to-transparent p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[11px] font-body font-600 text-text-primary uppercase tracking-[0.18em]">
                    {dancer.name}
                  </p>
                  {dancer.role && (
                    <p className="text-[10px] font-body text-text-light mt-1">{dancer.role}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
