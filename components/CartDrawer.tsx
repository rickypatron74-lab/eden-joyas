"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { PRODUCTS, fmt } from "@/lib/products";

export function CartDrawer() {
  const cart = useCart();
  if (!cart.open) return null;

  const resolved = cart.lines
    .map((l) => {
      const p = PRODUCTS.find((x) => x.id === l.id);
      if (!p) return null;
      return { ...l, product: p, lineTotal: fmt(p.priceNum * l.qty) };
    })
    .filter(Boolean) as { id: string; qty: number; size?: string; product: (typeof PRODUCTS)[number]; lineTotal: string }[];

  return (
    <>
      <div className="eden-drawer-backdrop" onClick={cart.closeCart} />
      <aside className="eden-drawer" aria-label="Carrito de compras">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "22px clamp(20px,4vw,28px)", borderBottom: "1px solid var(--line)" }}>
          <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 24 }}>Tu carrito ({cart.count})</span>
          <button type="button" onClick={cart.closeCart} aria-label="Cerrar" style={{ width: 40, height: 40, border: "1px solid var(--line)", borderRadius: 999, background: "transparent", cursor: "pointer", fontSize: 18, color: "var(--ink)" }}>✕</button>
        </div>

        {cart.count === 0 ? (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16, padding: 40 }}>
            <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22, color: "var(--muted)" }}>Tu carrito está vacío</div>
            <Link href="/#coleccion" onClick={cart.closeCart} className="btn-deep" style={{ display: "inline-block", padding: "15px 30px", background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase" }}>Ver la colección</Link>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflowY: "auto", padding: "8px clamp(20px,4vw,28px)" }}>
              {!cart.freeShipReached ? (
                <div style={{ background: "rgba(166,128,63,.1)", borderRadius: 14, padding: "14px 16px", margin: "12px 0" }}>
                  <div style={{ fontSize: 13, color: "var(--ink)", marginBottom: 8 }}>
                    Te faltan <strong style={{ color: "var(--gold-deep)" }}>{cart.freeShipLeftText}</strong> para el envío gratis
                  </div>
                  <div style={{ height: 6, borderRadius: 999, background: "rgba(42,36,32,.1)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${cart.freeShipPct}%`, background: "var(--gold)", borderRadius: 999, transition: "width .4s" }} />
                  </div>
                </div>
              ) : (
                <div style={{ background: "rgba(122,138,94,.18)", borderRadius: 14, padding: "14px 16px", margin: "12px 0", fontSize: 13, color: "var(--ink)" }}>
                  ✓ ¡Genial! Tienes <strong>envío gratis</strong>.
                </div>
              )}

              {resolved.map((l) => (
                <div key={l.id + (l.size ?? "")} style={{ display: "grid", gridTemplateColumns: "74px 1fr auto", gap: 16, alignItems: "center", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                  <Link href={`/producto/${l.id}`} onClick={cart.closeCart} style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "1", background: "var(--sand)" }}>
                    <img src={l.product.gallery[0]} alt={l.product.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                  </Link>
                  <div>
                    <Link href={`/producto/${l.id}`} onClick={cart.closeCart} style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 18, color: "var(--ink)" }}>{l.product.name}</Link>
                    <div style={{ fontSize: 12, color: "var(--muted)", margin: "2px 0 10px" }}>{l.product.tier}{l.size ? ` · Talla ${l.size}` : ""}</div>
                    <div className="eden-qty">
                      <button type="button" onClick={() => cart.changeQty(l.id, -1, l.size)} aria-label="Menos">−</button>
                      <span style={{ minWidth: 30, textAlign: "center", fontSize: 14, fontWeight: 600 }}>{l.qty}</span>
                      <button type="button" onClick={() => cart.changeQty(l.id, 1, l.size)} aria-label="Más">+</button>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
                    <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 17 }}>{l.lineTotal}</span>
                    <button type="button" onClick={() => cart.remove(l.id, l.size)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--muted)", fontSize: 12, textDecoration: "underline" }}>Quitar</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: "20px clamp(20px,4vw,28px) calc(22px + env(safe-area-inset-bottom))", borderTop: "1px solid var(--line)", background: "var(--cream)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <span style={{ fontSize: 14, color: "var(--muted)" }}>Subtotal</span>
                <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 24 }}>{cart.subtotalText}</span>
              </div>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: "0 0 16px" }}>Envío calculado al finalizar la compra.</p>
              <a href="#" style={{ display: "block", textAlign: "center", padding: 17, background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>Finalizar compra</a>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 14, fontSize: 11, letterSpacing: ".06em", color: "var(--muted)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                <span>Pago 100% seguro · Sistecrédito · Tarjeta · PSE</span>
              </div>
              <button type="button" onClick={cart.closeCart} style={{ width: "100%", marginTop: 8, padding: 14, background: "transparent", border: "none", cursor: "pointer", color: "var(--ink)", fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase" }}>Seguir comprando</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
