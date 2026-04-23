import { ContactSection } from "@/components/sections/contact";

export const metadata = {
  title: "Contact — Glenn Hudson",
  description:
    "Get in touch with Glenn Hudson for commissions, collaborations, and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
        {/* Page header */}
        <div className="mb-20">
          <div className="flex items-center gap-5 mb-6">
            <span className="block w-8 h-px bg-accent-gold" />
            <span className="text-[11px] font-body font-600 uppercase tracking-[0.25em] text-accent-gold">
              Contact
            </span>
          </div>
          <h1
            className="font-display font-600 text-text-primary leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Get In Touch
          </h1>
          <p className="text-base font-body text-text-muted max-w-xl leading-relaxed">
            Interested in collaborating or have a project inquiry? I&apos;m always
            open to new opportunities and creative conversations.
          </p>
        </div>

        <ContactSection />
      </div>
    </main>
  );
}
