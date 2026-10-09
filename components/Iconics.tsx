"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { ICONIC_IDS, ICONIC_META, getProduct, fmt } from "@/lib/products";

export function Iconics() {
  const cart = useCart();
  const items = ICONIC_IDS.map((id) => {
    const p = getProduct(id)!;
    return { ...p, meta: ICONIC_META[id], materialsText: ICONIC_META[id].materials.join("  ·  ") };
  });

  return (
    <section style={{ background: "var(--cream)", padding: "clamp(48px,7vw,90px) 0 clamp(56px,8vw,110px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div data-reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto clamp(40px,5vw,64px)" }}>
          <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Las favoritas</span>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px,4.4vw,54px)", lineHeight: 1.04, letterSpacing: "-.01em", margin: "14px 0 0" }}>Elige la que va contigo</h2>
        </div>

        {items.map((it, i) => (
          <div key={it.id} data-reveal data-reveal-delay={i * 100} className="split-grid" style={{ display: "grid", gridTemplateColumns: "1.85fr 1fr", gap: "clamp(36px,5vw,80px)", alignItems: "center", marginBottom: "clamp(48px,7vw,96px)" }}>
            {/* Editorial 4:5 — idealmente una toma dedicada (no la de catálogo), con foco en el dije de Oro 18K. */}
            <figure className="split-media eden-wash eden-zoom" style={{ margin: 0, order: i % 2 === 1 ? 2 : 0, borderRadius: 28, overflow: "hidden", aspectRatio: "4/5", background: "var(--sand)", boxShadow: "0 34px 70px -34px rgba(42,36,32,.42)" }}>
              <img decoding="async" src={it.gallery[0]} alt={`${it.name} — pieza EDEN en oro 18k`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} loading="lazy" />
            </figure>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold-deep)", background: "rgba(166,128,63,.12)", padding: "6px 13px", borderRadius: 999 }}>✦ {it.meta.badge}</span>
              <h3 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(38px,5vw,64px)", lineHeight: 1, letterSpacing: "-.01em", margin: "18px 0 0" }}>{it.name}</h3>
              <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 26, color: "var(--ink)", margin: "12px 0 0" }}>{fmt(it.priceNum)}</div>
              <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--muted)", margin: "18px 0 0", maxWidth: "40ch" }}>{it.meta.concept}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 22 }}>
                <span style={{ fontSize: 12.5, letterSpacing: ".06em", color: "var(--ink)", background: "var(--sand)", padding: "9px 17px", borderRadius: 999 }}>{it.materialsText}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
                <button type="button" disabled={!!getProduct(it.id)?.soldOut} onClick={() => cart.add(it.id, 1)} className="btn-deep" style={{ display: "inline-flex", alignItems: "center", padding: "16px 32px", background: "var(--deep)", color: "var(--cream)", border: "none", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", cursor: getProduct(it.id)?.soldOut ? "not-allowed" : "pointer", opacity: getProduct(it.id)?.soldOut ? 0.55 : 1 }}>{getProduct(it.id)?.soldOut ? "Agotado" : "Añadir al carrito"}</button>
                <Link href={`/producto/${it.id}`} className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", padding: "16px 30px", background: "transparent", color: "var(--ink)", border: "1px solid var(--line)", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>Ver pieza</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
