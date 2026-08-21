import type { Product } from "@/lib/products";

export function ProductReviews({ product }: { product: Product }) {
  const reviews = product.reviews ?? [];
  const waText = encodeURIComponent(`Hola, quiero compartir mi experiencia con ${product.name} 🙂`);

  return (
    <div style={{ marginTop: "clamp(48px,6vw,72px)" }}>
      <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(24px,3vw,32px)", margin: "0 0 20px" }}>Reseñas</h2>

      {reviews.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {reviews.map((r, i) => (
            <figure key={i} style={{ margin: 0, background: "var(--sand)", borderRadius: 18, padding: "22px 24px" }}>
              <div style={{ color: "var(--gold)", letterSpacing: "3px", fontSize: 13, marginBottom: 10 }}>★★★★★</div>
              <blockquote style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink)" }}>“{r.quote}”</blockquote>
              <figcaption style={{ marginTop: 12, fontSize: 12.5, color: "var(--muted)" }}>{r.name}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div style={{ background: "var(--sand)", borderRadius: 18, padding: "28px 26px", textAlign: "center" }}>
          <p style={{ margin: "0 0 16px", fontSize: 14.5, color: "var(--muted)" }}>Aún no hay reseñas para {product.name}. Sé la primera en compartir tu experiencia.</p>
          <a
            href={`https://wa.me/573000000000?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-deep"
            style={{ display: "inline-flex", padding: "13px 28px", background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 12.5, letterSpacing: ".1em", textTransform: "uppercase" }}
          >
            Dejar una reseña
          </a>
        </div>
      )}
    </div>
  );
}
