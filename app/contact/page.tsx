import { ContactSection } from "@/components/sections/contact";

export const metadata = {
  title: "Contact — Glenn Hudson",
  description:
    "Get in touch with Glenn Hudson for commissions, collaborations, and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-600 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              Interested in collaborating or have a project inquiry? I'm always
              open to new opportunities and creative conversations.
            </p>
          </div>
          <ContactSection />
        </div>
      </section>
    </main>
  );
}
