// ─────────────────────────────────────────────────────────────
// Imágenes — FUENTE ÚNICA de referencias.
// Sustituir por assets propios optimizados (WebP/AVIF) en /public/images.
// Hoy: 1 asset propio + 2 placeholders externos temporales, reutilizados
// en ciclo (A/B/local1) en las 9 fichas de producto — por eso solo se ven
// 3 fotos distintas en todo el sitio.
//
// ESPECIFICACIÓN DE FORMATO POR SLOT (FASE 4 — preparación editorial)
// Todos los contenedores usan aspect-ratio fijo (salvo los full-bleed) +
// object-fit:cover + object-position explícito: cualquier foto que respete
// el ratio indicado se puede reemplazar sin tocar layout ni componentes.
//
//  HERO (Hero.tsx)              full-bleed, sin ratio fijo (min-height
//                                clamp 560–840px, ancho 100%). Horizontal,
//                                mín. 2400×1600px. Foco centro/derecha —
//                                el texto y el degradado oscuro ocupan la
//                                izquierda.
//  COLECCIÓN (ProductCard)      4:5 retrato. Catálogo, fondo neutro,
//                                pieza centrada. 1 foto por producto.
//  PDP (ProductDetail)          principal 1:1 + 3 miniaturas 1:1
//                                (product.gallery ya tiene 3 slots por
//                                producto): 1) plano general 2) detalle/
//                                textura del tejido 3) puesta (lifestyle).
//  AURA / SIEMPRE (Iconics)     4:5 retrato, editorial/inmersiva, foco en
//                                el dije de Oro 18K. Toma dedicada por
//                                pieza, distinta de su foto de catálogo.
//  HISTORIA (Story.tsx)         5:6 retrato, esquinas inferiores muy
//                                redondeadas. Marca/proceso (artesanía),
//                                no un plano de producto.
//  COLECCIÓN PERMANENTE         full-bleed horizontal, sin ratio fijo
//  (Sections.tsx)                (min-height clamp 380–560px). Lifestyle/
//                                mood, foco vertical ajustable.
//  INSTAGRAM (IG_POSTS)         1:1 cuadrado × 6. Estilo UGC/lifestyle.
//  OPEN GRAPH (metadata)        recomendado 1200×630 (1.91:1) dedicado —
//                                hoy usa manilla-1.jpg cuadrada (736×736),
//                                que Facebook/WhatsApp/X recortan.
//
//  Formato de archivo objetivo: WebP (fallback JPG), sRGB, calidad ~80.
// ─────────────────────────────────────────────────────────────
export const IMAGES = {
  local1: "/images/manilla-1.jpg",
  // Placeholders temporales (CDN externo) — reemplazar por fotografía propia.
  extA: "https://www.virzua.com/cdn/shop/files/pulserade7nudosparaparejasdeoro18k.jpg?width=1600",
  extB: "https://www.virzua.com/cdn/shop/files/Pulsera_3_Oros_Tejida_Balines_en_18k.webp?width=1600",
} as const;

// Imagen del hero (candidata a LCP: se marca priority en el componente).
export const HERO_IMAGE = IMAGES.extA;
