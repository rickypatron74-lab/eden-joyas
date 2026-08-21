"use client";

import Link from "next/link";

export function StickyCta() {
  // Sólo en el home (mobile). El layout lo incluye únicamente en la home page.
  return (
    <div className="eden-sticky-cta" style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 55, alignItems: "center", gap: 12, padding: "12px 16px calc(12px + env(safe-area-inset-bottom))", background: "rgba(250,248,245,.94)", backdropFilter: "blur(14px)", borderTop: "1px solid var(--line)" }}>
      <div style={{ lineHeight: 1.1 }}>
        <div style={{ fontSize: 11, color: "var(--muted)" }}>Desde</div>
        <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 20, color: "var(--ink)" }}>$89.900</div>
      </div>
      <Link href="/#coleccion" style={{ flex: 1, textAlign: "center", padding: 15, background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase" }}>Ver la colección</Link>
    </div>
  );
}

export function InstagramFloat() {
  return (
    <a className="eden-ig" href="https://instagram.com/edenjoyas.co" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="#fff" stroke="none" />
      </svg>
    </a>
  );
}

export function WhatsApp() {
  return (
    <a className="eden-wa" href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.42 1.31-1.96 1.36-.5.05-1.14.07-1.84-.11-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.23-5.01-4.42-.15-.2-1.19-1.58-1.19-3.01s.75-2.14 1.02-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.61-.13.25.09 1.58.75 1.85.88.27.14.45.2.51.31.07.12.07.68-.17 1.36z" /></svg>
    </a>
  );
}
