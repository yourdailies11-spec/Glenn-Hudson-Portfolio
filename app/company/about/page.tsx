import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Definitives — Glenn Hudson",
  description:
    "Definitives Dance Company — vision, history, and 19 years of movement led by Glenn Hudson.",
};

export default function CompanyAboutPage() {
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
          <p className="text-base font-body text-text-muted max-w-xl leading-relaxed">
            Definitives is Glenn Hudson&apos;s dance company, founded in 2007 and based in London.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h2
              className="font-display font-600 text-text-primary"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}
            >
              Vision
            </h2>
            <p className="font-body text-text-secondary leading-relaxed">
              For 19 years, Definitives has been creating work that challenges the boundaries
              between contemporary dance, theatre, and visual art. Founded by Glenn Hudson in
              2007, the company has built a reputation for bold, imaginative productions that
              speak to universal human experience.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              The company&apos;s name reflects a commitment to work that is definitive — clear
              in its intent, precise in its execution, and lasting in its impact.
            </p>
          </div>

          <div className="space-y-6">
            <h2
              className="font-display font-600 text-text-primary"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}
            >
              History
            </h2>
            <p className="font-body text-text-secondary leading-relaxed">
              Established in 2007, Definitives began as a small ensemble dedicated to
              developing new choreographic work. Over nearly two decades the company has
              grown into one of the UK&apos;s distinctive voices in contemporary dance,
              touring nationally and internationally.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-subtle">
              <div>
                <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-2">
                  Founded
                </p>
                <p className="font-display font-600 text-text-primary text-3xl">2007</p>
              </div>
              <div>
                <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-2">
                  Years
                </p>
                <p className="font-display font-600 text-text-primary text-3xl">19</p>
              </div>
              <div>
                <p className="text-[10px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-2">
                  Based
                </p>
                <p className="font-display font-600 text-text-primary text-3xl">London</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
