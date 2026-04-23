export const siteConfig = {
  name: "Glenn Hudson",
  title: "Glenn Hudson | Choreographer & Artistic Director",
  description:
    "London-based choreographer and artistic director. Movement creative for performance, production, and direction.",
  tagline: "London-based choreographer, artistic director",
  profilePhoto: null as string | null, // Set to Supabase Storage URL when available
  location: "London",
  year: new Date().getFullYear(),

  // Social links
  social: {
    instagram: "https://www.instagram.com/therealglennhudson/",
    youtube: "https://www.youtube.com/@Definitives07",
    email: "hello@glennhudson.com", // TODO: Update with actual email
  },

  // SEO & Open Graph
  seo: {
    keywords:
      "choreographer, artistic director, movement, creative direction, London",
    ogImage: "/og-image.jpg",
    twitterHandle: "@glennhudson", // TODO: Add Twitter/X handle if available
  },

  // Navigation
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Videos", href: "#videos" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero section
  hero: {
    title: "Glenn Hudson",
    subtitle: "Choreographer, Artistic Director",
    description:
      "Crafting purposeful movement for stage, screen, and creative collaboration. Specializing in contemporary choreography, artistic direction, and transformative creative direction.",
    cta1: "View Work",
    cta2: "Get In Touch",
  },

  // About section
  about: {
    title: "About",
    intro:
      "Glenn Hudson is a choreographer and artistic director based in London, bringing a distinctive vision to movement-based creative projects.",
    bio: "With over a decades of experience in dance, theatrical production, and commercial creative direction, Glenn specializes in translating conceptual ideas into compelling physical narratives. His work spans theatrical productions, commercial campaigns, music videos, live performances, and bespoke creative direction for high-profile clients and collaborators.",
    expertise: [
      "Contemporary choreography",
      "Artistic direction and creative leadership",
      "Movement for film and commercial production",
      "Performance development and coaching",
      "Workshop facilitation and teaching",
    ],
  },

  // Footer
  footer: {
    copyright: "Glenn Hudson",
    year: new Date().getFullYear(),
  },
};
