/**
 * YouTube API Integration Utility
 *
 * This module handles fetching videos from a YouTube playlist using the YouTube Data API v3.
 *
 * TODO: Setup Instructions
 * 1. Get a YouTube Data API key from Google Cloud Console
 * 2. Create a YouTube playlist for Glenn Hudson's videos
 * 3. Add these environment variables to .env.local:
 *    - YOUTUBE_API_KEY=your_api_key_here
 *    - YOUTUBE_PLAYLIST_ID=your_playlist_id_here
 *
 * Once configured, the fetchYouTubeVideos function will automatically
 * pull videos from the specified playlist. Until then, mock data will be used.
 */

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  publishedAt: string;
  duration?: string;
}

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

/**
 * Fetch videos from a YouTube playlist
 * Returns mock data if API key or playlist ID is not configured
 */
export async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID;

  // If credentials are not configured, return empty array
  // (mock data will be used as fallback in components)
  if (!apiKey || !playlistId) {
    console.warn(
      "YouTube API credentials not configured. Using mock data. Set YOUTUBE_API_KEY and YOUTUBE_PLAYLIST_ID in .env.local to enable live YouTube integration.",
    );
    return [];
  }

  try {
    // Fetch playlist items
    const playlistResponse = await fetch(
      `${YOUTUBE_API_BASE}/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=50&key=${apiKey}`,
    );

    if (!playlistResponse.ok) {
      throw new Error(
        `YouTube API error: ${playlistResponse.status} ${playlistResponse.statusText}`,
      );
    }

    const playlistData = await playlistResponse.json();
    const videoIds = playlistData.items
      ?.map((item: any) => item.contentDetails.videoId)
      .join(",");

    if (!videoIds) {
      console.warn("No videos found in playlist");
      return [];
    }

    // Fetch video details (including duration and full description)
    const videosResponse = await fetch(
      `${YOUTUBE_API_BASE}/videos?part=snippet,contentDetails&id=${videoIds}&key=${apiKey}`,
    );

    if (!videosResponse.ok) {
      throw new Error(
        `YouTube API error: ${videosResponse.status} ${videosResponse.statusText}`,
      );
    }

    const videosData = await videosResponse.json();

    // Transform to our format
    const videos: YouTubeVideo[] = videosData.items?.map((video: any) => ({
      id: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail:
        video.snippet.thumbnails.high?.url ||
        video.snippet.thumbnails.default?.url,
      videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
      publishedAt: video.snippet.publishedAt,
      duration: parseDuration(video.contentDetails.duration),
    }));

    return videos || [];
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}

/**
 * Parse ISO 8601 duration format to readable string
 * e.g., PT4M32S -> 4:32
 */
function parseDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return "";

  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

/**
 * Fetch a single video's details by ID
 */
export async function fetchVideoById(
  videoId: string,
): Promise<YouTubeVideo | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    console.warn("YouTube API key not configured");
    return null;
  }

  try {
    const response = await fetch(
      `${YOUTUBE_API_BASE}/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`,
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();
    const video = data.items?.[0];

    if (!video) return null;

    return {
      id: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail:
        video.snippet.thumbnails.high?.url ||
        video.snippet.thumbnails.default?.url,
      videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
      publishedAt: video.snippet.publishedAt,
      duration: parseDuration(video.contentDetails.duration),
    };
  } catch (error) {
    console.error("Error fetching video:", error);
    return null;
  }
}
