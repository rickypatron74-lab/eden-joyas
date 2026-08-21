import Link from "next/link";
import type { Product } from "@/lib/products";
import { fmt, cuotaFor } from "@/lib/products";
import { WishlistButton } from "./WishlistButton";

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
        <WishlistButton id={product.id} style={{ position: "absolute", top: 10, right: 10 }} />
      </Link>
      <Link href={`/producto/${product.id}`} style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 23, lineHeight: 1.1, color: "var(--ink)", margin: "16px 0 0" }}>{product.name}</Link>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8 }}>
        <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 21, color: "var(--ink)" }}>{fmt(product.priceNum)}</span>
        <span style={{ fontSize: 11.5, color: "var(--gold-deep)" }}>o {cuotaFor(product.priceNum)}</span>
      </div>
      <Link href={`/producto/${product.id}`} className="btn-deep" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 16, padding: "16px 20px", background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>Ver pieza</Link>
    </div>
  );
}
