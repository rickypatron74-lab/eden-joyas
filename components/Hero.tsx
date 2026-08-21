import Link from "next/link";
import { HERO_IMAGE, HERO_IMAGE_MOBILE } from "@/lib/images";

export function Hero() {
  return (
    <section id="top" style={{ position: "relative", minHeight: "clamp(560px,80vh,840px)", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--deep)" }}>
      {/* Preload solo de la imagen hero (candidata a LCP) — Next.js hoistea este <link> al <head>. */}
      <link rel="preload" as="image" href={HERO_IMAGE.src} fetchPriority="high" />
      {/* Imagen del hero — protagonista absoluta. Full-bleed, sin aspect-ratio fijo: cubre cualquier foto editorial horizontal o vertical sin tocar layout. <picture> permite una foto y un foco distintos en mobile (art direction) editables desde lib/images.ts. */}
      <picture>
        <source media="(max-width: 820px)" srcSet={HERO_IMAGE_MOBILE.src} />
        <img src={HERO_IMAGE.src} alt="Manilla EDEN tejida a mano en oro 18k" fetchPriority="high" className="hero-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: HERO_IMAGE.position }} />
      </picture>
      {/* Degradado solo en el tercio inferior — libera el resto de la imagen para que respire */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(42,36,32,0) 42%,rgba(42,36,32,.68) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1180, width: "100%", margin: "0 auto", padding: "clamp(32px,6vw,64px) clamp(20px,5vw,64px) clamp(52px,7vw,84px)" }}>
        <span className="hero-in hero-in-1" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: ".3em", textTransform: "uppercase", color: "var(--cream)", fontWeight: 600 }}>
          <span style={{ width: 26, height: 1, background: "var(--gold-soft)" }} />EDEN Joyas
        </span>
        <h1 className="hero-in hero-in-2" style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(40px,6.5vw,84px)", lineHeight: 1.03, letterSpacing: "-.02em", margin: "14px 0 0", color: "var(--cream)", maxWidth: "18ch" }}>El lujo de llevarlo.</h1>
        <div className="hero-in hero-in-3" style={{ marginTop: 30 }}>
          <Link href="/#coleccion" className="btn-cream" style={{ display: "inline-flex", alignItems: "center", padding: "18px 40px", background: "var(--cream)", color: "var(--ink)", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>Descubrir colección</Link>
        </div>
      </div>
      <div className="hero-edge" aria-hidden="true" />
    </section>
  );
}

export function Manifesto() {
  return (
    <section style={{ padding: "clamp(80px,11vw,160px) 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", textAlign: "center" }}>
        <span data-reveal style={{ display: "inline-block", fontSize: 12, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>El lujo de llevarlo</span>
        <p data-reveal data-reveal-delay="140" style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(28px,4.4vw,50px)", lineHeight: 1.22, letterSpacing: "-.01em", margin: "26px 0 0", color: "var(--ink)", textWrap: "balance" }}>EDEN convierte el Oro 18K en algo cotidiano. Piezas tejidas a mano, pensadas para ser tuyas y no quitártelas nunca.</p>
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
