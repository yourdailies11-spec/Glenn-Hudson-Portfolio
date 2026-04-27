import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/db";

export const metadata: Metadata = {
  title: "About Definitives — Glenn Hudson",
  description:
    "Definitives Dance Company — vision, history, and years of movement led by Glenn Hudson.",
};

export default async function CompanyAboutPage() {
  const settings = await getSiteSettings();

  const founded = settings.company_founded || "2007";
  const yearsActive = settings.company_years_active || "19";
  const location = settings.company_location || "London";
  const vision = settings.company_vision || "";
  const history = settings.company_history || "";

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
            About the Company
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h2
              className="font-display font-600 text-text-primary"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}
            >
              Vision
            </h2>
            {vision ? (
              vision.split("\n").filter(Boolean).map((para, i) => (
                <p key={i} className="font-body text-text-secondary leading-relaxed">
                  {para}
                </p>
              ))
            ) : (
              <p className="font-body text-text-light leading-relaxed italic">
                Add your vision statement via Supabase — key: <code>company_vision</code>
              </p>
            )}
          </div>

          <div className="space-y-6">
            <h2
              className="font-display font-600 text-text-primary"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}
            >
              History
            </h2>
            {history ? (
              history.split("\n").filter(Boolean).map((para, i) => (
                <p key={i} className="font-body text-text-secondary leading-relaxed">
                  {para}
                </p>
              ))
            ) : (
              <p className="font-body text-text-light leading-relaxed italic">
                Add your company history via Supabase — key: <code>company_history</code>
              </p>
            )}

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-subtle">
              <div>
                <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-2">
                  Founded
                </p>
                <p className="font-display font-600 text-text-primary text-3xl">{founded}</p>
              </div>
              <div>
                <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-2">
                  Years
                </p>
                <p className="font-display font-600 text-text-primary text-3xl">{yearsActive}</p>
              </div>
              <div>
                <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-2">
                  Based
                </p>
                <p className="font-display font-600 text-text-primary text-3xl">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
