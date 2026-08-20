import Link from "next/link";
import type { Product } from "@/lib/products";
import { fmt, cuotaFor } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const secondImage = product.gallery[1];
  return (
    <div className="card-lift" style={{ display: "flex", flexDirection: "column" }}>
      <Link href={`/producto/${product.id}`} className="card-hover-swap" style={{ position: "relative", borderRadius: 22, overflow: "hidden", aspectRatio: "4/5", background: "var(--sand)", display: "block" }}>
        <img src={product.gallery[0]} alt={`${product.name} — manilla EDEN en oro 18k`} className="img-primary" loading="lazy" />
        {secondImage && <img src={secondImage} alt="" className="img-secondary" loading="lazy" aria-hidden="true" />}
        {product.special && (
          <span style={{ position: "absolute", top: 12, left: 12, background: "var(--deep)", color: "var(--gold-soft)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", padding: "6px 12px", borderRadius: 999 }}>✦ Dije Oro 18K</span>
        )}
      </Link>
      <Link href={`/producto/${product.id}`} style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 23, lineHeight: 1.1, color: "var(--ink)", margin: "16px 0 0" }}>{product.name}</Link>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: 10 }}>
        <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 20, color: "var(--ink)" }}>{fmt(product.priceNum)}</span>
        <Link href={`/producto/${product.id}`} className="btn-deep" style={{ display: "inline-flex", alignItems: "center", padding: "11px 20px", background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase" }}>Ver pieza</Link>
      </div>
      <span style={{ fontSize: 11, color: "var(--gold-deep)", marginTop: 5 }}>o {cuotaFor(product.priceNum)}</span>
    </div>
  );
}
