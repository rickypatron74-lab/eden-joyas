"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { useWishlist } from "./WishlistProvider";

export function Nav() {
  const cart = useCart();
  const wishlist = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", gap: 24, padding: "12px clamp(20px,5vw,64px)", background: "#1e3e3d", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(200,164,101,.22)" }}>
        <Link href="/" aria-label="Edén Joyas — inicio" style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-eden.png" alt="Edén Joyas" width={105} height={46} style={{ height: 46, width: "auto", display: "block" }} />
        </Link>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase" }}>
          <Link href="/#coleccion" style={{ color: "var(--cream)", padding: "10px 0" }}>Colección</Link>
          <Link href="/#historia" style={{ color: "var(--cream)", padding: "10px 0" }}>Historia</Link>
          <Link href="/#materiales" style={{ color: "var(--cream)", padding: "10px 0" }}>Materiales</Link>
          <Link href="/#opiniones" style={{ color: "var(--cream)", padding: "10px 0" }}>Opiniones</Link>
        </div>
        <button type="button" onClick={wishlist.openWishlist} aria-label="Favoritos" style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "transparent", border: "1px solid rgba(250,248,245,.28)", borderRadius: 999, cursor: "pointer", color: "var(--cream)" }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 20.3l8.8-8.6a5 5 0 0 0 0-7.1z" /></svg>
          {wishlist.count > 0 && (
            <span style={{ position: "absolute", top: -4, right: -4, minWidth: 19, height: 19, padding: "0 5px", background: "var(--gold-soft)", color: "#1e3e3d", borderRadius: 999, fontSize: 11, fontWeight: 600, display: "grid", placeContent: "center" }}>{wishlist.count}</span>
          )}
        </button>
        <button type="button" onClick={cart.openCart} aria-label="Carrito" style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "transparent", border: "1px solid rgba(250,248,245,.28)", borderRadius: 999, cursor: "pointer", color: "var(--cream)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
          {cart.count > 0 && (
            <span style={{ position: "absolute", top: -4, right: -4, minWidth: 19, height: 19, padding: "0 5px", background: "var(--gold-soft)", color: "#1e3e3d", borderRadius: 999, fontSize: 11, fontWeight: 600, display: "grid", placeContent: "center" }}>{cart.count}</span>
          )}
        </button>
        <button type="button" className="nav-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menú" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "transparent", border: "1px solid rgba(250,248,245,.28)", borderRadius: 999, cursor: "pointer", color: "var(--cream)", fontSize: 18 }}>☰</button>
      </nav>

      {menuOpen && (
        <div style={{ position: "sticky", top: 70, zIndex: 49, display: "flex", flexDirection: "column", gap: 4, padding: "12px clamp(20px,5vw,64px) 20px", background: "#1e3e3d", borderBottom: "1px solid rgba(200,164,101,.22)" }}>
          <Link href="/#coleccion" onClick={close} style={{ color: "var(--cream)", padding: "12px 0", fontSize: 15, letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "1px solid rgba(250,248,245,.12)" }}>Colección</Link>
          <Link href="/#historia" onClick={close} style={{ color: "var(--cream)", padding: "12px 0", fontSize: 15, letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "1px solid rgba(250,248,245,.12)" }}>Historia</Link>
          <Link href="/#materiales" onClick={close} style={{ color: "var(--cream)", padding: "12px 0", fontSize: 15, letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "1px solid rgba(250,248,245,.12)" }}>Materiales</Link>
          <Link href="/#opiniones" onClick={close} style={{ color: "var(--cream)", padding: "12px 0", fontSize: 15, letterSpacing: ".06em", textTransform: "uppercase" }}>Opiniones</Link>
          <Link href="/#coleccion" onClick={close} style={{ marginTop: 14, textAlign: "center", padding: 14, background: "var(--gold-soft)", color: "#1e3e3d", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>Comprar ahora</Link>
        </div>
      )}
    </>
  );
}
