import Link from "next/link";
import { IMAGES } from "@/lib/images";

export function Historia() {
  return (
    <section id="historia" style={{ padding: "clamp(20px,4vw,48px) 0 clamp(72px,10vw,130px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div data-reveal className="split-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "clamp(40px,6vw,88px)", alignItems: "center" }}>
          {/* Editorial 5:6 — foto de marca/proceso (artesanía), no un plano de producto. */}
          <figure className="split-media eden-wash" style={{ margin: 0, borderRadius: "30% 70% 65% 35% / 45% 40% 60% 55%", overflow: "hidden", aspectRatio: "5/6", background: "var(--blush)", boxShadow: "0 30px 64px -34px rgba(42,36,32,.38)" }}>
            <img src={IMAGES.extB} alt="Manillas EDEN tejidas a mano en oro 18k" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} loading="lazy" />
          </figure>
          <div>
            <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Nuestra historia</span>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px,4.4vw,54px)", lineHeight: 1.06, letterSpacing: "-.01em", margin: "16px 0 0" }}>Lujo que sí te puedes poner.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--muted)", margin: "24px 0 0", maxWidth: "44ch" }}>Vestir bien y llevar oro de verdad no debería ser un privilegio. Cada manilla se teje a mano, balín por balín — sin máquinas, sin prisas. Hecha para durar. Hecha para quererse.</p>
            <Link href="/#materiales" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 28, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink)", borderBottom: "1px solid var(--gold)", paddingBottom: 4 }}>Conoce el oro 18k →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const MATS = [
  { n: "01", t: "Oro 18k certificado", d: "Metal noble e hipoalergénico, con certificado de autenticidad en cada pieza." },
  { n: "02", t: "Tejido artesanal", d: "Horas de trabajo manual detrás de cada manilla. Ninguna es exactamente igual a otra." },
  { n: "03", t: "Hecho para durar", d: "Resistente al uso diario: el brillo del oro no se va con el tiempo." },
];

export function Materiales() {
  return (
    <section id="materiales" style={{ background: "#e5d2c1", color: "var(--ink)", padding: "clamp(72px,10vw,130px) 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div data-reveal className="mat-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(36px,5vw,72px)", alignItems: "start" }}>
          <div>
            <details className="oro18k-details" style={{ marginBottom: 18 }}>
              <summary className="oro18k-badge">18K</summary>
              <p className="oro18k-info">{MATS[0].d}</p>
            </details>
            <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold-deep)", fontWeight: 600 }}>Materiales</span>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px,4.4vw,56px)", lineHeight: 1.05, letterSpacing: "-.01em", margin: "16px 0 0", color: "var(--ink)" }}>Oro de 18 quilates, tejido hilo por hilo.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", margin: "24px 0 0", maxWidth: "44ch" }}>Nada de baños ni chapados. Elegimos balines de oro 18k y los tejemos a mano, uno a uno, para que tu manilla brille igual dentro de diez años.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {MATS.map((m, i) => (
              <div key={m.n} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px 24px", padding: "26px 0", borderTop: "1px solid rgba(42,36,32,.16)", borderBottom: i === MATS.length - 1 ? "1px solid rgba(42,36,32,.16)" : undefined }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: 34, color: "var(--gold-deep)", lineHeight: 1 }}>{m.n}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 22, margin: 0, color: "var(--ink)" }}>{m.t}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", margin: "8px 0 0" }}>{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
