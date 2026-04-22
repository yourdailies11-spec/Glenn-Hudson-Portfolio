"use client";

import { services } from "@/data/services";
import {
  AnimatedElement,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { Container } from "@/components/ui/container";
import * as Icons from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-32 md:py-40 bg-cream">
      <Container>
        {/* Header */}
        <AnimatedElement type="slide-up" className="mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-600">
              Services
            </h2>
            <p className="text-lg font-body text-muted max-w-2xl leading-relaxed">
              Professional creative services for performances, productions,
              brands, and learning.
            </p>
          </div>
        </AnimatedElement>

        {/* Services Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const IconComponent =
    (Icons[service.icon as keyof typeof Icons] as React.FC<any>) || Icons.Zap;

  return (
    <div className="group p-8 md:p-10 border border-black/8 transition-all duration-500 ease-out hover:border-accent-warm/30 hover:bg-white/80">
      {/* Icon */}
      <div className="mb-8 inline-block p-3 bg-black/5 group-hover:bg-accent-warm/15 transition-all duration-500">
        <IconComponent
          size={24}
          className="text-black/60 group-hover:text-accent-warm transition-colors duration-500"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-display font-600 mb-4 group-hover:text-accent-warm transition-colors duration-500">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-base font-body text-muted mb-8 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm font-body text-muted"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-warm mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
