import type { MetadataRoute } from "next";
import { newsItems } from "@/data/news";

const baseUrl = "https://thu-council.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/organization",
    "/members",
    "/news",
    "/minutes",
    "/regulations",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const newsPages = newsItems.map((item) => ({
    url: `${baseUrl}/news/${item.slug}`,
    lastModified: new Date(item.date),
  }));

  return [...staticPages, ...newsPages];
}
