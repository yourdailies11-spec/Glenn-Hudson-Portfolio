export interface MockVideo {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  videoUrl: string;
  publishedAt: string;
  duration: string;
}

/**
 * Mock video data for development and fallback
 * TODO: Replace with real YouTube API integration when YOUTUBE_PLAYLIST_ID and YOUTUBE_API_KEY are configured
 * See lib/youtube.ts for YouTube API integration setup
 */
export const mockVideos: MockVideo[] = [
  {
    id: "mock-1",
    title: "Urban Motion: Contemporary Choreography Showcase",
    description:
      "Large-scale contemporary piece exploring themes of movement and identity in urban spaces.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    publishedAt: "2024-03-15T00:00:00Z",
    duration: "4:32",
  },
  {
    id: "mock-2",
    title: "Movement for Creative Direction - Behind the Scenes",
    description:
      "A glimpse into the process of creating movement language for commercial and brand campaigns.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    publishedAt: "2024-02-28T00:00:00Z",
    duration: "6:15",
  },
  {
    id: "mock-3",
    title: "Choreography Workshop: Foundations",
    description:
      "Introduction to contemporary choreography principles and creative movement exploration.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    publishedAt: "2024-02-10T00:00:00Z",
    duration: "8:42",
  },
  {
    id: "mock-4",
    title: "Performance Development: Rehearsal Process",
    description:
      "Exploring the rehearsal and development process from concept to final performance.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    publishedAt: "2024-01-20T00:00:00Z",
    duration: "5:28",
  },
  {
    id: "mock-5",
    title: "Kinetic Theatre: Full Production",
    description:
      "Experimental theatre production combining dance with live visual projection and immersive design.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    publishedAt: "2023-12-05T00:00:00Z",
    duration: "12:15",
  },
  {
    id: "mock-6",
    title: "Brand Campaign: Movement Language",
    description:
      "Designing and executing movement language for a luxury brand's global marketing campaign.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    publishedAt: "2023-11-15T00:00:00Z",
    duration: "7:01",
  },
];
