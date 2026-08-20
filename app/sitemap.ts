import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

const SITE = "https://edenjoyas.com"; // TODO: dominio real

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
