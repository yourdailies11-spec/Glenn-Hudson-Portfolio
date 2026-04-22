export interface PortfolioItem {
  id: string;
  title: string;
  category:
    | "choreography"
    | "direction"
    | "performance"
    | "workshop"
    | "collaboration";
  description: string;
  image?: string;
  thumbnail?: string;
  tags: string[];
  year: number;
  featured?: boolean;
  caseStudyUrl?: string;
  videoUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Urban Motion Series",
    category: "choreography",
    description:
      "Tesco Christmas TV Advertisement 2022 - Choreography and movement direction.",
    tags: ["Choreography", "TV Advert", "Tesco", "Christmas"],
    year: 2022,
    featured: true,
  },
  {
    id: "2",
    title: "ITV NYE Big Bash 2023",
    category: "Dancer/Main Role Performer",
    description:
      "I played the main character in the ITV NYE Big Bash Windrush performance as a dancer and performer.",
    tags: ["Commercial", "Direction", "International, ITV"],
    year: 2023,
    featured: true,
  },
  {
    id: "3",
    title: "Kinetic Theatre Production",
    category: "performance",
    description:
      "Movement design and performance development for an experimental theatre production, combining dance with live visual projection.",
    tags: ["Theatre", "Performance", "Installation"],
    year: 2023,
    featured: true,
  },
  {
    id: "4",
    title: "Masterclass Series",
    category: "workshop",
    description:
      "Six-week intensive workshop series on contemporary choreography technique, attended by emerging choreographers and dancers.",
    tags: ["Teaching", "Workshop", "Development"],
    year: 2024,
  },
  {
    id: "5",
    title: "Artist Collaboration",
    category: "collaboration",
    description:
      "Movement composition for an artist installation, bridging choreography with immersive visual art experience.",
    tags: ["Collaboration", "Art", "Experimental"],
    year: 2023,
  },
  {
    id: "6",
    title: "Corporate Movement Workshop",
    category: "workshop",
    description:
      "Bespoke movement workshop for corporate teams, using choreography principles for team cohesion and creative thinking.",
    tags: ["Workshop", "Corporate", "Coaching"],
    year: 2023,
  },
];

// Group by category for filtering
export const portfolioCategories = [
  { value: "all", label: "All Work" },
  { value: "choreography", label: "Choreography" },
  { value: "direction", label: "Direction" },
  { value: "performance", label: "Performance" },
  { value: "workshop", label: "Workshops" },
  { value: "collaboration", label: "Collaborations" },
];
