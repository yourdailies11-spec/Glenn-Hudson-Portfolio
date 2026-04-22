export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export const services: Service[] = [
  {
    id: "choreography",
    title: "Choreography",
    description:
      "Custom choreography creation for performances, productions, campaigns, and events. From concept through to final composition.",
    icon: "Zap",
    features: [
      "Original compositions",
      "Concept development",
      "Dancer collaboration",
      "Style flexibility",
    ],
  },
  {
    id: "artistic-direction",
    title: "Artistic Direction",
    description:
      "Lead the creative vision for your project. Comprehensive artistic direction including movement language, aesthetic, and performer development.",
    icon: "Eye",
    features: [
      "Creative leadership",
      "Aesthetic vision",
      "Team direction",
      "Quality assurance",
    ],
  },
  {
    id: "creative-direction",
    title: "Creative Direction",
    description:
      "Broader creative strategy and execution for campaigns, brands, and live experiences. Movement as a core creative element.",
    icon: "Lightbulb",
    features: [
      "Campaign strategy",
      "Brand integration",
      "Experience design",
      "Concept refinement",
    ],
  },
  {
    id: "workshops",
    title: "Workshops & Training",
    description:
      "Intensive workshops and training sessions on contemporary choreography, movement coaching, and creative development for individuals and teams.",
    icon: "Users",
    features: [
      "Technique training",
      "Creative exploration",
      "Customizable curriculum",
      "Group or individual sessions",
    ],
  },
  {
    id: "movement-coaching",
    title: "Movement Coaching",
    description:
      "One-on-one and group coaching for dancers, performers, and creatives. Technique refinement, confidence building, and performance development.",
    icon: "Heart",
    features: [
      "Personalized training",
      "Performance coaching",
      "Injury prevention",
      "Creative growth",
    ],
  },
  {
    id: "performance-development",
    title: "Performance Development",
    description:
      "Develop and refine performances from initial concept through to final presentation. Includes choreography, rehearsal direction, and staging.",
    icon: "Star",
    features: [
      "Concept to stage",
      "Rehearsal direction",
      "Staging design",
      "Technical integration",
    ],
  },
];
