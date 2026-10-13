import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

const SITE = "https://www.edenjoyas.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = PRODUCTS.map((p) => ({
    url: `${SITE}/producto/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [
    { url: SITE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...products,
  ];
}
