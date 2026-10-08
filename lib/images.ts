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
//  HERO (HERO_IMAGE/HERO_IMAGE_MOBILE)  full-bleed, sin ratio fijo
//                                (min-height clamp 560–840px, ancho 100%).
//                                Horizontal en desktop, mín. 2400×1600px.
//                                Vertical/más cerrada en mobile permitida
//                                (usa <picture>, foto propia por breakpoint).
//                                Foco configurable por imagen (ver `position`
//                                abajo) — el texto y el degradado ocupan la
//                                franja inferior.
//  COLECCIÓN (ProductCard)      4:5 retrato. Catálogo, fondo neutro,
//                                pieza centrada. gallery[0] por producto.
//  PDP (ProductDetail)          principal 1:1 + 3 miniaturas 1:1
//                                (product.gallery ya tiene 3 slots por
//                                producto): 1) plano general 2) detalle/
//                                textura del tejido 3) puesta (lifestyle).
//                                El hover desktop de la card usa gallery[1]
//                                como segunda imagen (misma fuente de datos,
//                                sin inventar assets nuevos).
//  AURA / SIEMPRE (Iconics)     4:5 retrato, editorial/inmersiva, foco en
//                                el dije de Oro 18K. Toma dedicada por
//                                pieza, distinta de su foto de catálogo.
//  HISTORIA (Story.tsx)         5:6 retrato, esquinas inferiores muy
//                                redondeadas. Marca/proceso (artesanía),
//                                no un plano de producto.
//  COLECCIÓN PERMANENTE         full-bleed horizontal, sin ratio fijo
//  (BANNER_IMAGE)                (min-height clamp 380–560px). Lifestyle/
//                                mood, foco configurable (ver `position`).
//  INSTAGRAM (IG_POSTS)         1:1 cuadrado × 6. Estilo UGC/lifestyle.
//  OPEN GRAPH (metadata)        recomendado 1200×630 (1.91:1) dedicado —
//                                hoy usa manilla-1.jpg cuadrada (736×736),
//                                que Facebook/WhatsApp/X recortan.
//
//  Formato de archivo objetivo: WebP (fallback JPG), sRGB, calidad ~80.
//
// CONVENCIÓN PARA FOTOGRAFÍA DE PRODUCTO (cuando llegue la definitiva)
// `lib/products.ts` ya tiene, por producto, un array `gallery` de 3 slots
// fijos — no requiere tocar ningún componente, solo reemplazar las URLs:
//   gallery[0] → producto-XX          (plano general, usado en catálogo)
//   gallery[1] → producto-XX-detail   (detalle/textura del tejido)
//   gallery[2] → producto-XX-wear     (puesta / lifestyle)
// Si se agrega una cuarta foto por producto (producto-XX-detail-2), ampliar
// el array `gallery` de ese producto en lib/products.ts — el carrusel de
// miniaturas de ProductDetail ya itera sobre `gallery` sin límite fijo.
// ─────────────────────────────────────────────────────────────
export const IMAGES = {
  local1: "/images/manilla-1.jpg",
  local2: "/images/manilla-2.jpg",
  local3: "/images/manilla-3.jpg",
  local4: "/images/manilla-pareja.avif",
  local5: "/images/aura-2.webp",
  local6: "/images/vinculo-2.png",
  // Fotografía propia (sesión María Manillas, oct-2026)
  auraGeneral: "/images/aura-general.webp",
  auraDetalle: "/images/aura-detalle.webp",
  auraPuesta: "/images/aura-puesta.webp",
  siempreGeneral: "/images/siempre-general.webp",
  historiaPoster: "/images/historia-poster.webp",
  ig1: "/images/ig-1.webp",
  ig2: "/images/ig-2.webp",
  ig3: "/images/ig-3.webp",
  ig4: "/images/ig-4.webp",
  ig5: "/images/ig-5.webp",
  ig6: "/images/ig-6.webp",
  // Placeholders temporales (CDN externo) — usados solo por el hero y la sección Historia, pendientes de fotografía propia.
  extA: "https://www.virzua.com/cdn/shop/files/pulserade7nudosparaparejasdeoro18k.jpg?width=1600",
  extB: "https://www.virzua.com/cdn/shop/files/Pulsera_3_Oros_Tejida_Balines_en_18k.webp?width=1600",
} as const;

export interface ArtDirectedImage {
  /** URL de la imagen. */
  src: string;
  /** object-position CSS — foco configurable sin tocar el componente. */
  position: string;
}

// Hero: una entrada por breakpoint. Hoy ambas apuntan al mismo placeholder
// (en resolución elevada, ?width=2400, para verse nítido en pantallas grandes
// y de alta densidad — object-fit:cover nunca distorsiona, solo recorta) —
// al llegar la fotografía definitiva, reemplazar `src` (y `position` si el
// encuadre lo requiere) de cada una por separado — Hero.tsx no cambia.
const HERO_SRC_HD = IMAGES.extA.replace("width=1600", "width=2400");
export const HERO_IMAGE: ArtDirectedImage = { src: HERO_SRC_HD, position: "center" };
export const HERO_IMAGE_MOBILE: ArtDirectedImage = { src: HERO_SRC_HD, position: "center" };

// Colección permanente (banner horizontal de Sections.tsx).
export const BANNER_IMAGE: ArtDirectedImage = { src: "/images/banner-coleccion.webp", position: "center" };
