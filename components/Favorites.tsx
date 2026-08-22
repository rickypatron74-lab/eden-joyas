import Link from "next/link";
import { PRODUCTS, fmt } from "@/lib/products";

export function Favorites() {
  const items = PRODUCTS.filter((p) => p.featured);
  if (items.length === 0) return null;

  return (
    <section style={{ background: "var(--cream)", padding: "clamp(24px,3.4vw,44px) 0 clamp(48px,6vw,80px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div data-reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto clamp(32px,4vw,48px)" }}>
          <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Los favoritos de EDEN</span>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.05, margin: "12px 0 0" }}>Las piezas que definen la esencia de EDEN</h2>
        </div>

        <div style={items.length === 1
          ? { maxWidth: 420, margin: "0 auto" }
          : { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(24px,3vw,36px)" }
        }>
          {items.map((p) => (
            <Link key={p.id} href={`/producto/${p.id}`} data-reveal style={{ display: "flex", flexDirection: "column", color: "var(--ink)" }}>
              <div className="eden-wash eden-zoom" style={{ position: "relative", borderRadius: 26, overflow: "hidden", aspectRatio: "4/5", background: "var(--sand)", boxShadow: "0 30px 64px -34px rgba(42,36,32,.35)" }}>
                <img src={p.gallery[0]} alt={`${p.name} — pieza favorita EDEN en oro 18k`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
              <span style={{ display: "block", marginTop: 18, fontSize: 10.5, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold-deep)", fontWeight: 600 }}>Bestseller</span>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 24, margin: "6px 0 0" }}>{p.name}</span>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 19, color: "var(--ink)", marginTop: 6 }}>{fmt(p.priceNum)}</span>
              <span style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 4 }}>Oro 18K · Hecho a mano</span>
              <span style={{ fontSize: 12.5, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink)", marginTop: 14 }}>Ver pieza →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
