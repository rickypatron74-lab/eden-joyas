import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { TESTIMONIALS, FAQS, IG_POSTS } from "@/lib/products";

export function PermanentBanner() {
  return (
    // Full-bleed horizontal, sin aspect-ratio fijo (min-height clamp 380–560px). Lifestyle/mood, foco vertical ajustable vía objectPosition.
    <section style={{ position: "relative", minHeight: "clamp(380px,58vw,560px)", display: "grid", alignItems: "end", overflow: "hidden" }}>
      <img src={IMAGES.local1} alt="Manilla EDEN tejida a mano en oro 18k" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "saturate(.95) brightness(.9)" }} loading="lazy" />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(42,36,32,.1),rgba(42,36,32,.62))" }} />
      <div style={{ position: "relative", maxWidth: 1180, width: "100%", margin: "0 auto", padding: "clamp(36px,6vw,72px) clamp(20px,5vw,64px)" }}>
        <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--cream)", opacity: 0.85, fontWeight: 600 }}>Colección permanente</span>
        <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.02, letterSpacing: "-.01em", margin: "14px 0 0", color: "var(--cream)", maxWidth: "16ch" }}>El oro que se vuelve parte de ti.</h2>
        <Link href="/#coleccion" className="btn-cream" style={{ display: "inline-flex", alignItems: "center", marginTop: 28, padding: "16px 34px", background: "var(--cream)", color: "var(--ink)", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>Ver colección</Link>
      </div>
    </section>
  );
}

export function Opiniones() {
  return (
    <section id="opiniones" style={{ background: "var(--sage)", padding: "clamp(72px,10vw,130px) 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: "clamp(40px,5vw,64px)" }}>
          <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold-deep)", fontWeight: 600 }}>Opiniones</span>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px,4.4vw,54px)", lineHeight: 1.05, margin: "14px 0 0" }}>Amadas en cada muñeca</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(18px,2vw,26px)" }}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} data-reveal style={{ margin: 0, background: "var(--cream)", borderRadius: 24, padding: "30px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ color: "var(--gold)", letterSpacing: "4px", fontSize: 15 }}>★★★★★</div>
              <blockquote style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 20, lineHeight: 1.4, margin: 0, color: "var(--ink)" }}>“{t.quote}”</blockquote>
              <figcaption style={{ marginTop: "auto", fontSize: 13, color: "var(--muted)" }}><strong style={{ color: "var(--ink)", fontWeight: 600 }}>{t.name}</strong><br />{t.meta}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Instagram() {
  return (
    <section style={{ padding: "clamp(72px,10vw,120px) 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 28 }}>
          <div>
            <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>@edenjoyas</span>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(30px,4vw,48px)", lineHeight: 1.05, margin: "12px 0 0" }}>Síguenos en Instagram</h2>
          </div>
          <a href="#" style={{ fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink)", borderBottom: "1px solid var(--gold)", paddingBottom: 4 }}>Seguir</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "clamp(10px,1.4vw,18px)" }}>
          {IG_POSTS.map((p) => (
            <div key={p.id} className="eden-wash eden-zoom" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "1", background: "var(--sand)" }}>
              <img src={p.img} alt="EDEN Joyas en Instagram" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="preguntas-frecuentes" style={{ padding: "0 0 clamp(72px,10vw,130px)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: "clamp(32px,4vw,48px)" }}>
          <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Preguntas frecuentes</span>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(30px,4vw,50px)", lineHeight: 1.05, margin: "12px 0 0" }}>Todo claro antes de comprar</h2>
        </div>
        <div>
          {FAQS.map((f, i) => (
            <details key={i} style={{ borderTop: "1px solid var(--line)", padding: "6px 0" }}>
              <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "20px 2px", fontFamily: "var(--serif)", fontSize: "clamp(19px,2vw,23px)", color: "var(--ink)" }}>
                {f.q}
                <span className="faq-plus" style={{ flex: "none", fontSize: 22, color: "var(--gold)", transition: "transform .25s", lineHeight: 1 }}>+</span>
              </summary>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--muted)", margin: "0 40px 20px 2px" }}>{f.a}</p>
            </details>
          ))}
          <div style={{ borderTop: "1px solid var(--line)" }} />
        </div>
      </div>
    </section>
  );
}

const MATCHES = [
  { tier: "ESSENTIAL", label: "Quiero algo sutil", href: "/#essential" },
  { tier: "SIGNATURE", label: "Quiero algo con presencia", href: "/#signature" },
  { tier: "PRIVÉ", label: "Quiero algo extraordinario", href: "/#prive" },
];

export function FinalCta() {
  return (
    <section style={{ padding: "0 0 clamp(64px,8vw,110px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div data-reveal style={{ position: "relative", overflow: "hidden", background: "var(--sand)", borderRadius: "clamp(28px,4vw,48px)", padding: "clamp(48px,7vw,90px) clamp(28px,5vw,72px)", textAlign: "center" }}>
          <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", background: "var(--blush)", opacity: 0.55, top: -90, right: -70 }} />
          <div style={{ position: "absolute", width: 180, height: 180, borderRadius: "50%", background: "var(--sage)", opacity: 0.5, bottom: -80, left: -50 }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(34px,5vw,66px)", lineHeight: 1.03, letterSpacing: "-.01em", margin: 0 }}>Encuentra la tuya.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", maxWidth: "46ch", margin: "18px auto 0" }}>Oro 18k tejido a mano, listo para enviarse. Elige tu manilla hoy y estrénala esta semana.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginTop: 34, textAlign: "left" }}>
              {MATCHES.map((m) => (
                <Link key={m.tier} href={m.href} className="match-option" style={{ display: "flex", flexDirection: "column", gap: 6, padding: "22px 22px", border: "1px solid var(--line)", borderRadius: 20, background: "var(--cream)" }}>
                  <span style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gold-deep)" }}>{m.tier}</span>
                  <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 19, color: "var(--ink)" }}>{m.label}</span>
                </Link>
              ))}
            </div>
            <p style={{ fontSize: 12.5, letterSpacing: ".05em", color: "var(--muted)", margin: "22px 0 0" }}>Envío asegurado · Garantía del oro 18k · Cambios sin complicaciones</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--deep)", color: "rgba(250,248,245,.7)", padding: "clamp(48px,6vw,72px) 0 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 28, letterSpacing: ".3em", paddingLeft: ".3em", color: "var(--cream)" }}>EDEN</div>
            <div style={{ fontSize: 10, letterSpacing: ".5em", paddingLeft: ".5em", marginTop: 4 }}>J O Y A S</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: "34ch", margin: "18px 0 0" }}>Manillas tejidas en oro de 18 quilates. Lujo hecho a mano, para todos los días.</p>
          </div>
          <div style={{ display: "flex", gap: "clamp(32px,6vw,80px)", flexWrap: "wrap" }}>
            <FooterCol title="Tienda" links={[["Colección", "/#coleccion"], ["Oro 18k", "/#materiales"], ["Opiniones", "/#opiniones"]]} />
            <FooterCol title="Ayuda" links={[["Preguntas frecuentes", "/#preguntas-frecuentes"], ["Envíos y garantía", "#"], ["Guía de tallas", "#"]]} />
            <FooterCol title="Síguenos" links={[["Instagram", "#"], ["WhatsApp", "https://wa.me/573000000000"], ["TikTok", "#"]]} />
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", marginTop: "clamp(36px,5vw,56px)", paddingTop: 24, borderTop: "1px solid rgba(250,248,245,.16)", fontSize: 12, letterSpacing: ".04em" }}>
          <span>© {year} EDEN Joyas. Todos los derechos reservados.</span>
          <span>Oro 18k · Hecho a mano en Colombia</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
      <span style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold-soft)", marginBottom: 2 }}>{title}</span>
      {links.map(([label, href]) => (
        <Link key={label} href={href} style={{ color: "rgba(250,248,245,.7)" }}>{label}</Link>
      ))}
    </div>
  );
}
