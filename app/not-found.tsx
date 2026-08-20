import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20, padding: 40 }}>
      <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 26, color: "var(--muted)" }}>Página no encontrada</span>
      <Link href="/" style={{ padding: "15px 30px", background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase" }}>Volver al inicio</Link>
    </div>
  );
}
