import Link from "next/link";
import { HERO_IMAGE } from "@/lib/images";

export function Hero() {
  return (
    <section id="top" style={{ position: "relative", minHeight: "clamp(560px,80vh,840px)", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--deep)" }}>
      {/* Video de fondo — respaldo con la imagen estática si el navegador no soporta video o el usuario prefiere menos movimiento (prefers-reduced-motion). */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_IMAGE.src}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <img
        src={HERO_IMAGE.src}
        alt="Manilla EDEN tejida a mano en oro 18k"
        className="hero-poster-fallback"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: HERO_IMAGE.position }}
      />
      {/* Degradado solo en el tercio inferior — libera el resto de la imagen para que respire */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(42,36,32,0) 42%,rgba(42,36,32,.68) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1180, width: "100%", margin: "0 auto", padding: "clamp(32px,6vw,64px) clamp(20px,5vw,64px) clamp(52px,7vw,84px)" }}>
        <span className="hero-in hero-in-1" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: ".3em", textTransform: "uppercase", color: "var(--cream)", fontWeight: 600 }}>
          <span style={{ width: 26, height: 1, background: "var(--gold-soft)" }} />EDEN Joyas
        </span>
        <h1 className="hero-in hero-in-2" style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(40px,6.5vw,84px)", lineHeight: 1.03, letterSpacing: "-.02em", margin: "14px 0 0", color: "var(--cream)", maxWidth: "18ch" }}>La libertad de llevarlo.</h1>
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
    <section style={{ padding: "clamp(44px,6vw,84px) 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)", textAlign: "center" }}>
        <span data-reveal style={{ display: "inline-block", fontSize: 12, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>La libertad de llevarlo</span>
        <p data-reveal data-reveal-delay="140" style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: "clamp(30px,5vw,56px)", lineHeight: 1.1, letterSpacing: "-.015em", margin: "26px 0 0", color: "var(--ink)", textWrap: "balance" }}>El oro que se usa. No el que se guarda.</p>
        <p data-reveal data-reveal-delay="240" style={{ marginTop: 30, fontSize: 14.5, color: "var(--muted)", letterSpacing: ".01em" }}>
          Sin boda ni herencia · Sin vender por gramos · Desde $150.000
        </p>
      </div>
    </section>
  );
}

export function PromoBar() {
  return (
    <div style={{ background: "var(--sand)", color: "var(--ink)", textAlign: "center", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", padding: "8px 16px", borderBottom: "1px solid var(--line)" }}>
      Oro 18k real desde $150.000 · Envío gratis · Certificado de autenticidad
    </div>
  );
}
