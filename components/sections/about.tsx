"use client";

import { siteConfig } from "@/data/site-content";
import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function AboutSection({
  intro,
  bio,
  skills,
}: {
  intro: string;
  bio: string;
  skills: string[];
}) {
  return (
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
  );
}
