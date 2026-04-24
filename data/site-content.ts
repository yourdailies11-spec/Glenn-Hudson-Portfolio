export const siteConfig = {
  // Identity — used in SEO metadata, navbar logo, footer
  name: "Glenn Hudson",
  title: "Glenn Hudson | Choreographer & Artistic Director",
  description:
    "London-based choreographer and artistic director. Movement creative for performance, production, and direction.",
  tagline: "London-based choreographer, artistic director",
  location: "London",

  // Social fallbacks — Supabase site_settings overrides these at runtime
  social: {
    instagram: "https://www.instagram.com/therealglennhudson/",
    youtube: "https://www.youtube.com/@Definitives07",
    email: "hello@glennhudson.com",
  },

  // SEO / Open Graph
  seo: {
    keywords:
      "choreographer, artistic director, movement, creative direction, London",
    ogImage: "/og-image.jpg",
    twitterHandle: "@glennhudson",
  },

  // Hero fallback text — overridden by site_settings.hero_description in Supabase
  hero: {
    description:
      "Crafting purposeful movement for stage, screen, and creative collaboration. Specializing in contemporary choreography, artistic direction, and transformative creative direction.",
  },

  // About fallbacks — overridden by site_settings.about_intro / about_bio in Supabase
  about: {
    title: "About",
    intro:
      "Glenn Hudson is a choreographer and artistic director based in London, bringing a distinctive vision to movement-based creative projects.",
    bio: "With over a decade of experience in dance, theatrical production, and commercial creative direction, Glenn specializes in translating conceptual ideas into compelling physical narratives. His work spans theatrical productions, commercial campaigns, music videos, live performances, and bespoke creative direction for high-profile clients and collaborators.",
  },

  // Footer
  footer: {
    copyright: "Glenn Hudson",
    year: new Date().getFullYear(),
  },
};
