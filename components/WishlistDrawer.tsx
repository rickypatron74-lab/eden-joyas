"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { useWishlist } from "./WishlistProvider";
import { PRODUCTS, fmt } from "@/lib/products";

export function WishlistDrawer() {
  const wishlist = useWishlist();
  const cart = useCart();
  if (!wishlist.open) return null;

  const items = wishlist.ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean) as (typeof PRODUCTS)[number][];

  return (
    <>
      <div className="eden-drawer-backdrop" onClick={wishlist.closeWishlist} />
      <aside className="eden-drawer" aria-label="Favoritos">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "22px clamp(20px,4vw,28px)", borderBottom: "1px solid var(--line)" }}>
          <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 24 }}>Favoritos ({items.length})</span>
          <button type="button" onClick={wishlist.closeWishlist} aria-label="Cerrar" style={{ width: 40, height: 40, border: "1px solid var(--line)", borderRadius: 999, background: "transparent", cursor: "pointer", fontSize: 18, color: "var(--ink)" }}>✕</button>
        </div>

        {items.length === 0 ? (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16, padding: 40 }}>
            <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22, color: "var(--muted)" }}>Aún no tienes favoritos</div>
            <Link href="/#coleccion" onClick={wishlist.closeWishlist} className="btn-deep" style={{ display: "inline-block", padding: "15px 30px", background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase" }}>Ver la colección</Link>
          </div>
        ) : (
          <div style={{ flex: 1, overflowY: "auto", padding: "8px clamp(20px,4vw,28px) 24px" }}>
            {items.map((p) => (
              <div key={p.id} style={{ display: "grid", gridTemplateColumns: "74px 1fr auto", gap: 16, alignItems: "center", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                <Link href={`/producto/${p.id}`} onClick={wishlist.closeWishlist} style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "1", background: "var(--sand)" }}>
                  <img src={p.gallery[0]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                </Link>
                <div>
                  <Link href={`/producto/${p.id}`} onClick={wishlist.closeWishlist} style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 18, color: "var(--ink)" }}>{p.name}</Link>
                  <div style={{ fontSize: 14, color: "var(--muted)", margin: "2px 0 10px" }}>{fmt(p.priceNum)}</div>
                  <button type="button" onClick={() => cart.add(p.id, 1)} style={{ padding: "8px 14px", background: "var(--deep)", color: "var(--cream)", border: "none", borderRadius: 999, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", cursor: "pointer" }}>Agregar al carrito</button>
                </div>
                <button type="button" onClick={() => wishlist.toggle(p.id)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--muted)", fontSize: 12, textDecoration: "underline", alignSelf: "start" }}>Quitar</button>
              </div>
            ))}
          </div>
        )}
      </aside>
    </>
  );
}
