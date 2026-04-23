"use server";

import { cacheLife, cacheTag } from "next/cache";
import { getSupabase } from "./supabase";

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: number;
  image_url: string | null;
  featured: boolean;
  order_index: number;
  published: boolean;
}

export interface Video {
  id: string;
  video_id: string; // YouTube video ID
  title: string;
  description: string;
  duration: string;
  start_seconds: number | null; // timestamp to start playback from
  featured: boolean;
  order_index: number;
  published: boolean;
}

// ---- Portfolio ----

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("portfolio");

  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from("portfolio_items")
    .select("*")
    .eq("published", true)
    .order("order_index", { ascending: true });

  if (error) {
    console.error("getPortfolioItems error:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("portfolio");

  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from("portfolio_items")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("order_index", { ascending: true })
    .limit(3);

  if (error) {
    console.error("getFeaturedPortfolioItems error:", error.message);
    return [];
  }
  return data ?? [];
}

// ---- Videos ----

export async function getVideos(): Promise<Video[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("videos");

  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from("videos")
    .select("*")
    .eq("published", true)
    .order("order_index", { ascending: true });

  if (error) {
    console.error("getVideos error:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getFeaturedVideos(): Promise<Video[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("videos");

  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from("videos")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("order_index", { ascending: true })
    .limit(6);

  if (error) {
    console.error("getFeaturedVideos error:", error.message);
    return [];
  }
  return data ?? [];
}

