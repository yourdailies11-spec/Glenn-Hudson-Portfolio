export interface Video {
  id: string;
  videoId: string; // YouTube video ID — from youtube.com/watch?v=THIS_PART
  title: string;
  description: string;
  duration: string; // fill in manually, e.g. "4:32"
  featured?: boolean; // first 2 featured ones appear on the homepage
}

export const videos: Video[] = [
  {
    id: "1",
    videoId: "REPLACE_ME",
    title: "Urban Motion: Contemporary Choreography Showcase",
    description:
      "Large-scale contemporary piece exploring themes of movement and identity in urban spaces.",
    duration: "4:32",
    featured: true,
  },
  {
    id: "2",
    videoId: "REPLACE_ME",
    title: "Movement for Creative Direction - Behind the Scenes",
    description:
      "A glimpse into the process of creating movement language for commercial and brand campaigns.",
    duration: "6:15",
    featured: true,
  },
  {
    id: "3",
    videoId: "REPLACE_ME",
    title: "Choreography Workshop: Foundations",
    description:
      "Introduction to contemporary choreography principles and creative movement exploration.",
    duration: "8:42",
  },
  {
    id: "4",
    videoId: "REPLACE_ME",
    title: "Performance Development: Rehearsal Process",
    description:
      "Exploring the rehearsal and development process from concept to final performance.",
    duration: "5:28",
  },
  {
    id: "5",
    videoId: "REPLACE_ME",
    title: "Kinetic Theatre: Full Production",
    description:
      "Experimental theatre production combining dance with live visual projection and immersive design.",
    duration: "12:15",
  },
  {
    id: "6",
    videoId: "REPLACE_ME",
    title: "Brand Campaign: Movement Language",
    description:
      "Designing and executing movement language for a luxury brand's global marketing campaign.",
    duration: "7:01",
  },
];

export const featuredVideos = videos.filter((v) => v.featured);

export function thumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function embedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

export function watchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
