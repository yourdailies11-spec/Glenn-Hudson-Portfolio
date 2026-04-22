import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        // Dark theme palette - warm soft grays
        "bg-primary": "#1A1815",
        "bg-secondary": "#1F1B18",
        "bg-tertiary": "#26221E",
        "bg-elevated": "#2E2A26",
        "text-primary": "#F5F1E8",
        "text-secondary": "#D4CCBF",
        "text-muted": "#A39F94",
        "text-light": "#827D72",
        "accent-gold": "#B08D57",
        "border-subtle": "#302C28",
        "border-low": "#3D3935",
        "accent-teal": "#4E7A78",
      },
      spacing: {
        "section-sm": "2rem",
        "section-md": "4rem",
        "section-lg": "6rem",
        "section-xl": "8rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      transitionDuration: {
        "300": "300ms",
        "500": "500ms",
      },
    },
  },
  plugins: [],
};

export default config;
