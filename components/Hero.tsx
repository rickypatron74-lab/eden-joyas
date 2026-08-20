import Link from "next/link";
import { HERO_IMAGE } from "@/lib/images";

export function Hero() {
  return (
    <section id="top" style={{ position: "relative", minHeight: "clamp(560px,80vh,840px)", display: "flex", alignItems: "center", overflow: "hidden", background: "var(--deep)" }}>
      {/* Imagen del hero — candidata LCP (fetchPriority alto, sin lazy) */}
      <img src={HERO_IMAGE} alt="Manilla EDEN tejida a mano en oro 18k" fetchPriority="high" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg,rgba(42,36,32,.78) 0%,rgba(42,36,32,.46) 52%,rgba(42,36,32,.12) 100%)" }} />
      <div style={{ position: "relative", maxWidth: 1180, width: "100%", margin: "0 auto", padding: "clamp(48px,8vw,110px) clamp(20px,5vw,64px)" }}>
        <div style={{ maxWidth: "15ch" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: ".3em", textTransform: "uppercase", color: "var(--cream)", fontWeight: 600, opacity: 0.85 }}>
            <span style={{ width: 26, height: 1, background: "var(--gold-soft)" }} />EDEN Joyas
          </span>
          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(46px,7vw,96px)", lineHeight: 0.98, letterSpacing: "-.02em", margin: "22px 0 0", color: "var(--cream)" }}>El lujo de llevarlo.</h1>
          <p style={{ fontSize: "clamp(17px,1.5vw,21px)", lineHeight: 1.6, color: "rgba(250,248,245,.88)", margin: "26px 0 0" }}>Manillas tejidas a mano en Oro 18K.</p>
          <div style={{ marginTop: 38 }}>
            <Link href="/#coleccion" className="btn-cream" style={{ display: "inline-flex", alignItems: "center", padding: "18px 40px", background: "var(--cream)", color: "var(--ink)", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>Descubre la colección</Link>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 10, color: "rgba(250,248,245,.6)", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase" }}>
        <span>Desliza</span><span style={{ animation: "edenBob 1.6s ease-in-out infinite" }}>↓</span>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section style={{ padding: "clamp(64px,9vw,120px) 0", background: "var(--cream)" }}>
      <div data-reveal style={{ maxWidth: 780, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", textAlign: "center" }}>
        <span style={{ fontSize: 12, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>El lujo de llevarlo</span>
        <p style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(24px,3.4vw,42px)", lineHeight: 1.28, letterSpacing: "-.01em", margin: "22px 0 0", color: "var(--ink)", textWrap: "balance" }}>EDEN convierte el Oro 18K en algo cotidiano. Piezas tejidas a mano, pensadas para ser tuyas y no quitártelas nunca.</p>
      </div>
    </section>
  );
}

export function PromoBar() {
  return (
    <div style={{ background: "var(--sand)", color: "var(--ink)", textAlign: "center", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", padding: "8px 16px", borderBottom: "1px solid var(--line)" }}>
      Envío gratis desde $150.000 · Certificado de autenticidad en cada pieza
    </div>
  );
}
