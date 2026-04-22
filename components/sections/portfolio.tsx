"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/lib/db";
import {
  AnimatedElement,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { Container } from "@/components/ui/container";

const portfolioCategories = [
  { value: "all", label: "All Work" },
  { value: "choreography", label: "Choreography" },
  { value: "direction", label: "Direction" },
  { value: "performance", label: "Performance" },
  { value: "workshop", label: "Workshops" },
  { value: "collaboration", label: "Collaborations" },
];

export function PortfolioSection({ items }: { items: PortfolioItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="py-32 md:py-40 bg-cream">
      <Container>
        <AnimatedElement type="slide-up" className="mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-600">
              Work
            </h2>
            <p className="text-lg font-body text-muted max-w-2xl leading-relaxed">
              A selection of recent projects spanning choreography, direction,
              performance, and collaborations.
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement type="fade-in" delay={0.2} className="mb-20">
          <div className="flex flex-wrap gap-2.5">
            {portfolioCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-5 py-2.5 text-sm font-body font-500 transition-all duration-500 ease-out ${
                  selectedCategory === category.value
                    ? "bg-black text-white"
                    : "border border-black/20 text-text-base hover:border-black/40"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </AnimatedElement>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {filtered.map((item) => (
              <StaggerItem key={item.id}>
                <PortfolioCard item={item} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-muted text-lg">
              No work in this category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const borderColors: Record<string, string> = {
    choreography: "group-hover:border-blue-300",
    direction: "group-hover:border-purple-300",
    performance: "group-hover:border-pink-300",
    workshop: "group-hover:border-green-300",
    collaboration: "group-hover:border-orange-300",
  };

  const borderColor = borderColors[item.category] ?? "group-hover:border-gray-300";

  return (
    <div
      className={`group cursor-pointer border border-black/5 transition-all duration-500 ease-out ${borderColor}`}
    >
      <div className="aspect-[4/5] overflow-hidden bg-bg-tertiary">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center opacity-20">
              <div className="w-12 h-12 border-2 border-current rounded-full mx-auto" />
            </div>
          </div>
        )}
      </div>

      <div className="p-8 space-y-6">
        <div>
          <h3 className="text-2xl font-display font-600 mb-2 group-hover:text-accent-warm transition-colors duration-500">
            {item.title}
          </h3>
          <p className="text-sm font-body text-text-light capitalize">
            {item.category.replace("-", " ")} • {item.year}
          </p>
        </div>
        <p className="text-base font-body text-muted leading-relaxed">
          {item.description}
        </p>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-body px-3 py-1.5 bg-black/3 text-text-muted transition-colors duration-500 group-hover:bg-accent-warm/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
