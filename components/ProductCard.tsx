"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";
import { fmt } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const cart = useCart();
  return (
    <div className="card-lift" style={{ display: "flex", flexDirection: "column" }}>
      <Link href={`/producto/${product.id}`} className="eden-zoom" style={{ position: "relative", borderRadius: 22, overflow: "hidden", aspectRatio: "4/5", background: "var(--sand)", display: "block" }}>
        <img src={product.gallery[0]} alt={`${product.name} — manilla EDEN en oro 18k`} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
        {product.special && (
          <span style={{ position: "absolute", top: 12, left: 12, background: "var(--deep)", color: "var(--gold-soft)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", padding: "6px 12px", borderRadius: 999 }}>✦ Dije Oro 18K</span>
        )}
      </Link>
      <div style={{ fontSize: 10.5, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold)", margin: "16px 0 0" }}>Oro 18K</div>
      <Link href={`/producto/${product.id}`} style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 23, lineHeight: 1.1, color: "var(--ink)", margin: "5px 0 0" }}>{product.name}</Link>
      <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--muted)", margin: "7px 0 0" }}>{product.desc}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: 16 }}>
        <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 20, color: "var(--ink)" }}>{fmt(product.priceNum)}</span>
        <button type="button" onClick={() => cart.add(product.id, 1)} className="btn-deep" style={{ display: "inline-flex", alignItems: "center", padding: "11px 20px", background: "var(--deep)", color: "var(--cream)", border: "none", borderRadius: 999, fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", cursor: "pointer" }}>Añadir</button>
      </div>
    </div>
  );
}
