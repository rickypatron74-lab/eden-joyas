"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PRODUCTS, fmt, type Product } from "@/lib/products";

export const RECENTLY_VIEWED_KEY = "eden-recently-viewed";

export function RecentlyViewed() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENTLY_VIEWED_KEY);
      const ids: string[] = raw ? JSON.parse(raw) : [];
      setItems(ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean) as Product[]);
    } catch {}
  }, []);

  if (items.length === 0) return null;

  return (
    <section style={{ padding: "0 0 clamp(56px,8vw,96px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Vistos recientemente</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "clamp(16px,2vw,24px)", marginTop: 18 }}>
          {items.map((p) => (
            <Link key={p.id} href={`/producto/${p.id}`} style={{ display: "flex", flexDirection: "column", color: "var(--ink)" }}>
              <div className="eden-zoom" style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/5", background: "var(--sand)" }}>
                <img decoding="async" src={p.gallery[0]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} loading="lazy" />
              </div>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 17, margin: "10px 0 0" }}>{p.name}</span>
              <span style={{ fontSize: 14, color: "var(--muted)", marginTop: 2 }}>{fmt(p.priceNum)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
