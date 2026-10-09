import { PRODUCTS, TIER_ORDER, TIER_META, type Tier } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const TIER_ANCHOR: Record<Tier, string> = { ESSENTIAL: "essential", SIGNATURE: "signature", "PRIVÉ": "prive" };

export function Collection() {
  return (
    <section id="coleccion" style={{ padding: "clamp(20px,3vw,36px) 0 clamp(72px,10vw,130px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div data-reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto clamp(28px,4vw,44px)" }}>
          <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>La colección</span>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(34px,4.6vw,58px)", lineHeight: 1.04, letterSpacing: "-.01em", margin: "14px 0 0" }}>Tres formas de llevar EDEN</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", margin: "16px 0 0" }}>De la puerta de entrada a la máxima expresión del Oro 18K.</p>
        </div>

        {TIER_ORDER.map((tier, i) => {
          const items = PRODUCTS.filter((p) => p.tier === tier && !p.religious);
          return (
            <div key={tier} id={TIER_ANCHOR[tier]} data-reveal style={{ marginBottom: "clamp(52px,7vw,88px)", scrollMarginTop: 90 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 20, borderBottom: "1px solid var(--line)", paddingBottom: 22, marginBottom: "clamp(28px,3.6vw,44px)" }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px,2.8vw,36px)", color: "var(--gold)", lineHeight: 1 }}>{"0" + (i + 1)}</span>
                <h3 style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1, margin: 0, letterSpacing: ".02em" }}>{tier}</h3>
                <span style={{ marginLeft: "auto", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(14px,1.4vw,17px)", color: "var(--muted)", textAlign: "right" }}>{TIER_META[tier]}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "clamp(28px,3.2vw,40px)" }}>
                {items.map((p, idx) => (
                  <div key={p.id} data-reveal data-reveal-delay={idx * 70}>
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div id="fe" data-reveal style={{ marginBottom: "clamp(52px,7vw,88px)", scrollMarginTop: 90 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 20, borderBottom: "1px solid var(--line)", paddingBottom: 22, marginBottom: "clamp(28px,3.6vw,44px)" }}>
            <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px,2.8vw,36px)", color: "var(--gold)", lineHeight: 1 }}>✦</span>
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1, margin: 0, letterSpacing: ".02em" }}>FE Y PROTECCIÓN</h3>
            <span style={{ marginLeft: "auto", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(14px,1.4vw,17px)", color: "var(--muted)", textAlign: "right" }}>Para llevar la fe puesta.</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "clamp(28px,3.2vw,40px)" }}>
            {PRODUCTS.filter((p) => p.religious).map((p, idx) => (
              <div key={p.id} data-reveal data-reveal-delay={idx * 70}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
