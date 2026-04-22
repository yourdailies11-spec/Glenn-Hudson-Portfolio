"use client";

import { siteConfig } from "@/data/site-content";
import {
  AnimatedElement,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { Container } from "@/components/ui/container";

export function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-40 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
          {/* Heading */}
          <AnimatedElement type="slide-up" className="md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-display font-600">
              {siteConfig.about.title}
            </h2>
          </AnimatedElement>

          {/* Content */}
          <div className="md:col-span-2 space-y-12">
            <AnimatedElement type="fade-in" delay={0.2}>
              <p className="text-xl font-body text-muted leading-relaxed">
                {siteConfig.about.intro}
              </p>
            </AnimatedElement>

            <AnimatedElement type="fade-in" delay={0.3}>
              <p className="text-lg font-body text-muted leading-relaxed">
                {siteConfig.about.bio}
              </p>
            </AnimatedElement>

            {/* Expertise Areas */}
            <div className="pt-4">
              <h3 className="text-lg font-display font-600 mb-8">Expertise</h3>
              <StaggerContainer delay={0.4}>
                <ul className="space-y-5">
                  {siteConfig.about.expertise.map((item, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-start gap-4">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-warm mt-3 flex-shrink-0" />
                        <span className="font-body text-base text-muted leading-relaxed">
                          {item}
                        </span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
