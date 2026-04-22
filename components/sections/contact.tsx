"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site-content";
import { AnimatedElement } from "@/components/ui/motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  { value: "choreography", label: "Choreography" },
  { value: "direction", label: "Artistic Direction" },
  { value: "workshop", label: "Workshop/Training" },
  { value: "collaboration", label: "Collaboration" },
  { value: "other", label: "Other" },
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "choreography",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with actual Supabase submission when configured
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you! I'll be in touch within 48 hours.");
        setFormData({
          name: "",
          email: "",
          projectType: "choreography",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          "Something went wrong. Please try again or email directly.",
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Connection error. Please try emailing directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 bg-white">
      <Container size="md">
        {/* Header */}
        <AnimatedElement type="slide-up" className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-600 mb-8">
            Get In Touch
          </h2>
          <p className="text-xl font-body text-muted mb-6 leading-relaxed">
            For bookings, collaborations, workshops, and creative enquiries.
          </p>
          <p className="text-lg font-body text-muted">
            I'm based in <span className="font-600">{siteConfig.location}</span>{" "}
            and open to opportunities locally, nationally, and internationally.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 mb-16">
          {/* Contact Form */}
          <AnimatedElement type="fade-in" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-body font-600 text-text-base mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-black/10 font-body text-base focus:outline-none focus:border-accent-warm focus:bg-white transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-body font-600 text-text-base mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-black/10 font-body text-base focus:outline-none focus:border-accent-warm focus:bg-white transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-body font-600 text-text-base mb-3"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-black/10 font-body text-base focus:outline-none focus:border-accent-warm focus:bg-white transition-all duration-300 appearance-none cursor-pointer bg-white"
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-body font-600 text-text-base mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-black/10 font-body text-base focus:outline-none focus:border-accent-warm focus:bg-white transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50/50 border border-green-200/50 text-green-800 text-sm">
                  {submitMessage}
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50/50 border border-red-200/50 text-red-800 text-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </AnimatedElement>

          {/* Contact Info */}
          <AnimatedElement type="slide-in-left" delay={0.3}>
            <div className="space-y-8 bg-cream p-8 rounded-lg">
              {/* Direct Email */}
              <div>
                <h3 className="text-sm font-body font-600 text-text-light uppercase tracking-widest mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="text-lg font-body text-accent-warm hover:text-accent-warm-hover transition-colors"
                >
                  {siteConfig.social.email}
                </a>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xs font-body font-600 text-text-light uppercase tracking-widest mb-3">
                  Location
                </h3>
                <p className="text-base font-body text-text-base">
                  {siteConfig.location}
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-body font-600 text-text-light uppercase tracking-widest mb-4">
                  Connect
                </h3>
                <div className="space-y-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base font-body text-text-base hover:text-accent-warm transition-colors group"
                  >
                    <Instagram size={20} />
                    <span className="group-hover:underline">Instagram</span>
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base font-body text-text-base hover:text-accent-warm transition-colors group"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                    <span className="group-hover:underline">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="pt-4 border-t border-light-gray">
                <p className="text-sm font-body text-text-light">
                  <span className="font-600">Response time:</span> Within 48
                  hours
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  );
}
