// ─────────────────────────────────────────────────────────────
// Imágenes — FUENTE ÚNICA de referencias.
// Sustituir por assets propios optimizados (WebP/AVIF) en /public/images.
// Hoy: 1 asset propio + 2 placeholders externos temporales.
// ─────────────────────────────────────────────────────────────
export const IMAGES = {
  local1: "/images/manilla-1.jpg",
  // Placeholders temporales (CDN externo) — reemplazar por fotografía propia.
  extA: "https://www.virzua.com/cdn/shop/files/pulserade7nudosparaparejasdeoro18k.jpg?width=1600",
  extB: "https://www.virzua.com/cdn/shop/files/Pulsera_3_Oros_Tejida_Balines_en_18k.webp?width=1600",
} as const;

// Imagen del hero (candidata a LCP: se marca priority en el componente).
export const HERO_IMAGE = IMAGES.extA;
