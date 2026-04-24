"use client";

import { siteConfig } from "@/data/site-content";
import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function AboutSection({
  intro,
  bio,
  skills,
  photos = [],
}: {
  intro: string;
  bio: string;
  skills: string[];
  photos?: (string | null)[];
}) {
  return (
    <div className="space-y-20 md:space-y-28">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
      {/* Heading column */}
      <AnimatedElement type="slide-up" className="md:col-span-1">
        <div className="flex items-center gap-5 mb-6">
          <span className="block w-8 h-px bg-accent-gold" />
          <span className="text-[11px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold">
            About
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-600 text-text-primary leading-tight">
          {siteConfig.about.title}
        </h2>
      </AnimatedElement>

      {/* Content column */}
      <div className="md:col-span-2 space-y-10">
        <AnimatedElement type="fade-in">
          <p className="text-xl font-body text-text-secondary leading-relaxed">
            {intro}
          </p>
        </AnimatedElement>

        <AnimatedElement type="fade-in">
          <p className="text-base font-body text-text-muted leading-relaxed">
            {bio}
          </p>
        </AnimatedElement>

        {skills.length > 0 && (
          <AnimatedElement type="fade-in">
            <div className="pt-4 border-t border-border-subtle">
              <p className="text-[11px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-8">
                Skills
              </p>
              <StaggerContainer>
                <ul className="space-y-4">
                  {skills.map((item, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-start gap-4">
                        <span className="block w-1 h-1 rounded-full bg-accent-gold mt-2.5 flex-shrink-0" />
                        <span className="font-body text-base text-text-secondary leading-relaxed">
                          {item}
                        </span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </div>
          </AnimatedElement>
        )}
      </div>
    </div>

    {/* Photo frames */}
    <AnimatedElement type="fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {[
          { label: "On Stage", index: 0 },
          { label: "In Studio", index: 1 },
          { label: "At Work", index: 2 },
        ].map((frame) => {
          const url = photos[frame.index];
          return (
            <div key={frame.label} className="group relative aspect-[4/5] bg-bg-secondary border border-border-subtle overflow-hidden">
              {/* Photo */}
              {url ? (
                <img
                  src={url}
                  alt={frame.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-border-low">
                    <rect x="3" y="7" width="26" height="20" rx="1" stroke="currentColor" strokeWidth="1" />
                    <circle cx="11" cy="14" r="3" stroke="currentColor" strokeWidth="1" />
                    <path d="M3 24l7-6 5 5 4-4 10 9" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <span className="text-[10px] font-body uppercase tracking-[0.22em] text-text-light">
                    {frame.label}
                  </span>
                </div>
              )}
              {/* Frame overlay — always visible */}
              <div className="absolute inset-3 border border-border-low/60 pointer-events-none z-10" />
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-gold/50 z-10" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-gold/50 z-10" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-gold/50 z-10" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-gold/50 z-10" />
              {/* Label strip at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-20">
                <p className="text-[9px] font-body uppercase tracking-[0.22em] text-text-light/80">
                  {frame.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedElement>
    </div>
  );
}
