"use client";

import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCtaSection() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-8 border-t border-border-subtle">
      <div className="max-w-4xl mx-auto">
        <AnimatedElement type="slide-up">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-display font-600 leading-tight">
                Ready to collaborate?
              </h2>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                I'm open to commissions, collaborations, and artistic inquiries.
                Reach out to discuss your project or vision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="gap-3">
                  Start a Conversation
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="secondary" size="lg">
                  Explore Work
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
