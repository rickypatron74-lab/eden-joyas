"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

export function Nav() {
  const cart = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", gap: 24, padding: "16px clamp(20px,5vw,64px)", background: "rgba(250,248,245,.82)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--line)" }}>
        <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 0.9, color: "var(--ink)", marginRight: "auto" }}>
          <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 26, letterSpacing: ".32em", paddingLeft: ".32em" }}>EDEN</span>
          <span style={{ fontSize: 9.5, letterSpacing: ".52em", paddingLeft: ".52em", color: "var(--muted)", marginTop: 3 }}>J O Y A S</span>
        </Link>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase" }}>
          <Link href="/#coleccion" style={{ color: "var(--ink)", padding: "10px 0" }}>Colección</Link>
          <Link href="/#historia" style={{ color: "var(--ink)", padding: "10px 0" }}>Historia</Link>
          <Link href="/#materiales" style={{ color: "var(--ink)", padding: "10px 0" }}>Materiales</Link>
          <Link href="/#opiniones" style={{ color: "var(--ink)", padding: "10px 0" }}>Opiniones</Link>
        </div>
        <button type="button" onClick={cart.openCart} aria-label="Carrito" style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "transparent", border: "1px solid var(--line)", borderRadius: 999, cursor: "pointer", color: "var(--ink)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
          {cart.count > 0 && (
            <span style={{ position: "absolute", top: -4, right: -4, minWidth: 19, height: 19, padding: "0 5px", background: "var(--gold-deep)", color: "var(--cream)", borderRadius: 999, fontSize: 11, fontWeight: 600, display: "grid", placeContent: "center" }}>{cart.count}</span>
          )}
        </button>
        <button type="button" className="nav-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menú" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "transparent", border: "1px solid var(--line)", borderRadius: 999, cursor: "pointer", color: "var(--ink)", fontSize: 18 }}>☰</button>
      </nav>

      {menuOpen && (
        <div style={{ position: "sticky", top: 76, zIndex: 49, display: "flex", flexDirection: "column", gap: 4, padding: "12px clamp(20px,5vw,64px) 20px", background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
          <Link href="/#coleccion" onClick={close} style={{ color: "var(--ink)", padding: "12px 0", fontSize: 15, letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "1px solid var(--line)" }}>Colección</Link>
          <Link href="/#historia" onClick={close} style={{ color: "var(--ink)", padding: "12px 0", fontSize: 15, letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "1px solid var(--line)" }}>Historia</Link>
          <Link href="/#materiales" onClick={close} style={{ color: "var(--ink)", padding: "12px 0", fontSize: 15, letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "1px solid var(--line)" }}>Materiales</Link>
          <Link href="/#opiniones" onClick={close} style={{ color: "var(--ink)", padding: "12px 0", fontSize: 15, letterSpacing: ".06em", textTransform: "uppercase" }}>Opiniones</Link>
          <Link href="/#coleccion" onClick={close} style={{ marginTop: 14, textAlign: "center", padding: 14, background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>Comprar ahora</Link>
        </div>
      )}
    </>
  );
}
