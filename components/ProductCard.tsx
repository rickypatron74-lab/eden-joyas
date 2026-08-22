import Link from "next/link";
import type { Product } from "@/lib/products";
import { fmt } from "@/lib/products";
import { WishlistButton } from "./WishlistButton";

export function ProductCard({ product }: { product: Product }) {
  const secondImage = product.gallery[1];
  return (
    <div className="card-lift" style={{ display: "flex", flexDirection: "column" }}>
      <Link href={`/producto/${product.id}`} className="card-hover-swap" style={{ position: "relative", borderRadius: 22, overflow: "hidden", aspectRatio: "3/4", background: "var(--sand)", display: "block" }}>
        <img src={product.gallery[0]} alt={`${product.name} — manilla EDEN en oro 18k`} className="img-primary" loading="lazy" />
        {secondImage && <img src={secondImage} alt="" className="img-secondary" loading="lazy" aria-hidden="true" />}
        {product.special && (
          <span style={{ position: "absolute", top: 12, left: 12, background: "var(--deep)", color: "var(--gold-soft)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", padding: "6px 12px", borderRadius: 999 }}>✦ Dije Oro 18K</span>
        )}
        <WishlistButton id={product.id} style={{ position: "absolute", top: 10, right: 10 }} />
      </Link>
      {product.featured && (
        <span style={{ display: "block", marginTop: 16, fontSize: 10.5, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold-deep)", fontWeight: 600 }}>Bestseller</span>
      )}
      <Link href={`/producto/${product.id}`} style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 23, lineHeight: 1.1, color: "var(--ink)", margin: `${product.featured ? 6 : 16}px 0 0` }}>{product.name}</Link>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8 }}>
        <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 22, color: "var(--ink)" }}>{fmt(product.priceNum)}</span>
      </div>
      <span style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 5 }}>Oro 18K · Hecho a mano</span>
      <Link href={`/producto/${product.id}`} className="btn-deep" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 16, padding: "16px 20px", background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>Ver pieza</Link>
    </div>
  );
}
