import type { Metadata } from "next";
import Link from "next/link";
import { DefinitivesLandingNav } from "@/components/definitives/landing-nav";
import { getSiteSettings } from "@/lib/db";
import { siteConfig } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Definitives — Glenn Hudson",
  description:
    "Definitives Dance Company — Glenn Hudson's dance company based in London.",
};

export default async function CompanyPage() {
  const settings = await getSiteSettings();

  const founded = settings.company_founded || "2007";
  const yearsActive = settings.company_years_active || "19";
  const location = settings.company_location || siteConfig.location;

  return (
    <main className="flex-1 flex flex-col">
      {/* Company wordmark / header */}
      <div className="px-6 md:px-10 pt-16 pb-10 md:pt-20 md:pb-12 border-b border-border-subtle">
        <p className="text-[10px] font-body font-600 uppercase tracking-[0.35em] text-accent-gold mb-5">
          Glenn Hudson · Dance Company
        </p>
        <h1
          className="font-display font-600 text-text-primary leading-[0.82]"
          style={{ fontSize: "clamp(4rem, 13vw, 11rem)", letterSpacing: "-0.04em" }}
        >
          Definitives
        </h1>
        <div className="flex items-center gap-4 mt-5 flex-wrap">
          <span className="text-[11px] font-body text-text-muted tracking-wide">
            Est. {founded}
          </span>
          <span className="w-1 h-1 rounded-full bg-border-low" />
          <span className="text-[11px] font-body text-text-muted tracking-wide">
            {yearsActive} Years
          </span>
          <span className="w-1 h-1 rounded-full bg-border-low" />
          <span className="text-[11px] font-body text-text-muted tracking-wide">
            {location}
          </span>
          <span className="w-1 h-1 rounded-full bg-border-low" />
          <a
            href="https://www.defcreative.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[11px] font-body font-600 text-accent-gold hover:opacity-70 transition-opacity duration-300"
          >
            defcreative.co.uk
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="opacity-60 group-hover:opacity-100 transition-opacity">
              <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Experimental navigation rows */}
      <DefinitivesLandingNav />
    </main>
  );
}
