"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import { WishlistButton } from "./WishlistButton";
import { ProductReviews } from "./ProductReviews";
import { RECENTLY_VIEWED_KEY } from "./RecentlyViewed";
import { fmt, type Product } from "@/lib/products";

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const cart = useCart();
  const [gi, setGi] = useState(0);
  const [qty, setQty] = useState(1);
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENTLY_VIEWED_KEY);
      const ids: string[] = raw ? JSON.parse(raw) : [];
      const next = [product.id, ...ids.filter((id) => id !== product.id)].slice(0, 6);
      localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(next));
    } catch {}
  }, [product.id]);

  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setZoomOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomOpen]);

  return (
    <section style={{ padding: "clamp(24px,4vw,44px) 0 clamp(64px,9vw,110px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <Link href="/#coleccion" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--muted)", fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", padding: "0 0 clamp(24px,3vw,36px)" }}>← Volver a la colección</Link>

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: "clamp(36px,5vw,72px)", alignItems: "start" }}>
          <div>
            {/* Imagen principal PDP — 1:1 fijo. product.gallery[0..2]: 1) plano general, 2) detalle/textura, 3) puesta (lifestyle). Click para ampliar (zoom). */}
            <div className="eden-wash" style={{ position: "relative", borderRadius: 26, overflow: "hidden", aspectRatio: "1", background: "var(--sand)", boxShadow: "0 30px 64px -34px rgba(42,36,32,.38)", cursor: "zoom-in" }} onClick={() => setZoomOpen(true)}>
              <img decoding="async" src={product.gallery[gi] || product.gallery[0]} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              <WishlistButton id={product.id} style={{ position: "absolute", top: 14, right: 14 }} />
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
              {product.gallery.map((src, i) => (
                <button key={i} type="button" onClick={() => setGi(i)} style={{ flex: 1, aspectRatio: "1", borderRadius: 14, overflow: "hidden", border: `2px solid ${i === gi ? "var(--deep)" : "var(--line)"}`, background: "var(--sand)", cursor: "pointer", padding: 0 }}>
                  <img decoding="async" src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>EDEN · Oro 18k</span>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(34px,4.4vw,52px)", lineHeight: 1.04, letterSpacing: "-.01em", margin: "12px 0 0" }}>{product.name}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14 }}>
              <span style={{ color: "var(--gold)", letterSpacing: "3px", fontSize: 14 }}>★★★★★</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>Tejida a mano · Oro 18K</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 20 }}>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 34, color: "var(--ink)" }}>{fmt(product.priceNum)}</span>
              {product.special && (
                <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gold-deep)", background: "rgba(166,128,63,.12)", padding: "5px 11px", borderRadius: 999 }}>✦ Dije Oro 18K</span>
              )}
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", margin: "22px 0 0", maxWidth: "46ch" }}>{product.longDesc}</p>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 28 }}>
              <div className="eden-qty">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Menos">−</button>
                <span style={{ minWidth: 34, textAlign: "center", fontSize: 16, fontWeight: 600 }}>{qty}</span>
                <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Más">+</button>
              </div>
              <button type="button" disabled={product.soldOut} onClick={() => cart.add(product.id, qty)} className="btn-deep" style={{ flex: 1, minWidth: 200, padding: "17px 34px", background: "var(--deep)", color: "var(--cream)", border: "none", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", cursor: product.soldOut ? "not-allowed" : "pointer", opacity: product.soldOut ? 0.55 : 1 }}>{product.soldOut ? "Agotado" : "Añadir al carrito"}</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 14, marginTop: 30, paddingTop: 26, borderTop: "1px solid var(--line)", fontSize: 13, color: "var(--muted)" }}>
              <span>✦ Certificado de autenticidad 18k</span>
              <span>✦ Envío asegurado 24–48 h</span>
              <span>✦ Garantía del oro</span>
              <span>✦ Cambios sin complicaciones</span>
            </div>
          </div>
        </div>

        <ProductReviews product={product} />

        <div style={{ marginTop: "clamp(64px,9vw,110px)" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.05, margin: "0 0 clamp(28px,4vw,44px)" }}>También te puede gustar</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "clamp(20px,2.4vw,32px)" }}>
            {related.map((r) => (
              <Link key={r.id} href={`/producto/${r.id}`} style={{ display: "flex", flexDirection: "column", color: "var(--ink)" }}>
                <div className="eden-zoom" style={{ borderRadius: 22, overflow: "hidden", aspectRatio: "4/5", background: "var(--sand)" }}>
                  <img decoding="async" src={r.gallery[0]} alt={r.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} loading="lazy" />
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 21, margin: "14px 0 0" }}>{r.name}</h3>
                <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 18, color: "var(--ink)", marginTop: 6 }}>{fmt(r.priceNum)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="eden-sticky-cta" style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 55, alignItems: "center", gap: 12, padding: "12px 16px calc(12px + env(safe-area-inset-bottom))", background: "rgba(250,248,245,.94)", backdropFilter: "blur(14px)", borderTop: "1px solid var(--line)" }}>
        <div style={{ lineHeight: 1.1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: "var(--muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{product.name}</div>
          <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 20, color: "var(--ink)" }}>{fmt(product.priceNum)}</div>
        </div>
        <button type="button" disabled={product.soldOut} onClick={() => cart.add(product.id, qty)} className="btn-deep" style={{ flex: 1, textAlign: "center", padding: 15, background: "var(--deep)", color: "var(--cream)", border: "none", borderRadius: 999, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", cursor: product.soldOut ? "not-allowed" : "pointer", opacity: product.soldOut ? 0.55 : 1 }}>{product.soldOut ? "Agotado" : "Añadir al carrito"}</button>
      </div>

      {zoomOpen && (
        <div onClick={() => setZoomOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 80, background: "rgba(42,36,32,.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, cursor: "zoom-out" }}>
          <img decoding="async" src={product.gallery[gi] || product.gallery[0]} alt={product.name} style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain", borderRadius: 8 }} />
          <button type="button" onClick={() => setZoomOpen(false)} aria-label="Cerrar" style={{ position: "absolute", top: 20, right: 20, width: 44, height: 44, borderRadius: 999, border: "1px solid rgba(250,248,245,.4)", background: "rgba(250,248,245,.1)", color: "var(--cream)", fontSize: 18, cursor: "pointer" }}>✕</button>
        </div>
      )}
    </section>
  );
}
