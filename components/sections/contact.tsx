"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site-content";
import { AnimatedElement } from "@/components/ui/motion";
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
  { value: "workshop", label: "Workshop / Training" },
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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you. I'll be in touch within 48 hours.");
        setFormData({ name: "", email: "", projectType: "choreography", message: "" });
      } else {
        setSubmitStatus("error");
        setSubmitMessage("Something went wrong. Please try again or email directly.");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Connection error. Please try emailing directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
      {/* Form */}
      <AnimatedElement type="fade-in">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-[11px] font-body font-600 uppercase tracking-[0.18em] text-text-muted mb-3">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your name"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[11px] font-body font-600 uppercase tracking-[0.18em] text-text-muted mb-3">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your@email.com"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-[11px] font-body font-600 uppercase tracking-[0.18em] text-text-muted mb-3">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full cursor-pointer"
            >
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-[11px] font-body font-600 uppercase tracking-[0.18em] text-text-muted mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 text-[12px] font-body font-600 uppercase tracking-[0.22em] bg-accent-gold text-bg-primary hover:bg-accent-gold/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p className="text-sm font-body text-accent-gold border border-accent-gold/20 px-4 py-3">
              {submitMessage}
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-sm font-body text-text-secondary border border-border-low px-4 py-3">
              {submitMessage}
            </p>
          )}
        </form>
      </AnimatedElement>

      {/* Contact info */}
      <AnimatedElement type="fade-in">
        <div className="space-y-10 border-l border-border-subtle pl-10 md:pl-14">
          <div>
            <p className="text-[11px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-3">
              Email
            </p>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-base font-body text-text-secondary hover:text-accent-gold transition-colors duration-300"
            >
              {siteConfig.social.email}
            </a>
          </div>

          <div>
            <p className="text-[11px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-3">
              Location
            </p>
            <p className="text-base font-body text-text-secondary">
              {siteConfig.location}, UK
            </p>
          </div>

          <div>
            <p className="text-[11px] font-body font-600 uppercase tracking-[0.22em] text-accent-gold mb-5">
              Connect
            </p>
            <div className="space-y-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-body text-text-muted hover:text-text-primary transition-colors duration-300"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-body text-text-muted hover:text-text-primary transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
                YouTube
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border-subtle">
            <p className="text-sm font-body text-text-light">
              Response time: within 48 hours
            </p>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}
