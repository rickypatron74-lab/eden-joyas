import { IMAGES } from "./images";

// ─────────────────────────────────────────────────────────────
// FUENTE ÚNICA de datos de producto.
// Precios y nombres exactos. AURA y SIEMPRE llevan dije de Oro 18K.
// ─────────────────────────────────────────────────────────────

export type Tier = "ESSENTIAL" | "SIGNATURE" | "PRIVÉ";

export interface Product {
  id: string;
  tier: Tier;
  name: string;
  priceNum: number;
  desc: string;
  longDesc: string;
  gallery: string[];
  religious?: boolean; // línea "Fe y protección": va en su propia categoría, fuera de los tiers
  special?: boolean; // pieza icónica con dije de Oro 18K
  dije?: boolean;
  featured?: boolean; // bestseller real — marcar manualmente, nunca inferir
  reviews?: { name: string; quote: string }[]; // reseñas reales de clientas — vacío hasta tener contenido real
}

export const FREE_SHIP = 250000;
export const SHIPPING_COST = 18000;

const { auraGeneral, auraDetalle, auraPuesta, ig1, ig2, ig3, ig4, ig5, ig6 } = IMAGES;

export const PRODUCTS: Product[] = [
  { id: "semilla", tier: "ESSENTIAL", name: "Semilla", priceNum: 89900, desc: "Tejido beige con balines de oro 18k.", longDesc: "Tejido a mano en tono beige con pequeños balines de oro 18k. La más discreta de la colección: se lleva todos los días y combina con todo.", gallery: ["/images/semilla-1.webp", "/images/semilla-2.webp", "/images/semilla-3.webp"] },
  { id: "esencia", tier: "ESSENTIAL", name: "Esencia", priceNum: 89900, featured: true, desc: "Tejido beige con balín diamantado.", longDesc: "Tejido a mano en tono beige con un balín de oro 18k diamantado que atrapa la luz. Sobria, delicada, para llevar sola o en capas.", gallery: ["/images/esencia-1.webp", "/images/esencia-2.webp", "/images/esencia-3.webp"] },
  { id: "alma", tier: "ESSENTIAL", name: "Alma", priceNum: 89900, desc: "Hilo rojo fino con balín de oro.", longDesc: "Hilo rojo fino, ligero y ajustable, con un balín de oro 18k al centro. Minimalista y con carácter, para llevar sola o sumada a tus capas.", gallery: ["/images/alma-1.webp", "/images/alma-2.webp"] },
  { id: "bendita", tier: "SIGNATURE", religious: true, name: "Bendita", priceNum: 259900, desc: "Cordón rojo con medalla de la Virgen de Guadalupe.", longDesc: "Cordón tejido a mano en rojo con una medalla de la Virgen de Guadalupe en oro 18k. Bendita que se lleva puesta, todos los días.", gallery: [auraPuesta] },
  { id: "refugio", tier: "SIGNATURE", religious: true, name: "Refugio", priceNum: 329900, special: true, dije: true, desc: "Cordón rojo con medalla de San Benito.", longDesc: "Pieza icónica: cordón tejido en rojo con balines de oro 18k y medalla de San Benito en Oro 18K. Protección que se lleva puesta, todos los días.", gallery: [auraGeneral, auraDetalle] },
  { id: "gracia", tier: "SIGNATURE", religious: true, name: "Gracia", priceNum: 379900, desc: "Cuarzo morado con cruz de oro.", longDesc: "Cuentas de cuarzo morado con una cruz de oro, hecha a mano, para llevar sola o en capas.", gallery: ["/images/pulso-1.webp", "/images/pulso-2.webp", "/images/pulso-3.webp"] },
  { id: "milagrosa", tier: "SIGNATURE", religious: true, name: "Milagrosa", priceNum: 415900, desc: "Cordón rojo con medalla milagrosa.", longDesc: "Cordón tejido a mano en rojo con la medalla milagrosa en oro 18k. Para llevar la fe puesta, todos los días.", gallery: ["/images/vertice-1.webp", "/images/vertice-2.webp", "/images/vertice-3.webp"] },
  { id: "eterna", tier: "PRIVÉ", name: "Eterna", priceNum: 479900, desc: "Lujo accesible que no caduca.", longDesc: "Colección Privé: la máxima expresión de EDEN, tejida a mano en oro 18k.", gallery: ["/images/eterna-1.webp"] },
  { id: "siempre", tier: "PRIVÉ", name: "Siempre", priceNum: 549900, special: true, dije: true, desc: "Espiral en hilo borgoña con dije de Oro 18K.", longDesc: "Pieza emocional, hecha para regalar: espiral premium en hilo borgoña, balines de 6 × 5 mm y dije de Oro 18K.", gallery: ["/images/siempre-1.webp"] },
  { id: "origen", tier: "PRIVÉ", name: "Origen", priceNum: 474900, desc: "Donde empieza todo EDEN.", longDesc: "El origen de EDEN: la pieza más completa de la colección, tejida a mano en oro 18k.", gallery: ["/images/origen-1.webp", "/images/origen-2.webp", "/images/origen-3.webp"] },
];

export const TIER_META: Record<Tier, string> = {
  ESSENTIAL: "La puerta de entrada.",
  SIGNATURE: "El corazón de la colección.",
  "PRIVÉ": "La máxima expresión.",
};

export const TIER_ORDER: Tier[] = ["ESSENTIAL", "SIGNATURE", "PRIVÉ"];

export interface IconicMeta {
  badge: string;
  concept: string;
  materials: string[];
}
export const ICONIC_META: Record<string, IconicMeta> = {
  refugio: { badge: "Dije Oro 18K", concept: "Protección que se lleva puesta. La pieza que te acompaña cada día.", materials: ["Cordón", "Rojo", "Medalla San Benito", "Dije Oro 18K"] },
  siempre: { badge: "Dije Oro 18K", concept: "Emocional y sofisticada. Hecha para regalar y para recordar.", materials: ["Espiral premium", "Hilo borgoña", "Dije Oro 18K"] },
  bendita: { badge: "Medalla", concept: "Bendita: la que se lleva puesta. Para los días en que quieres ir acompañada.", materials: ["Cordón", "Rojo", "Medalla Virgen de Guadalupe"] },
  milagrosa: { badge: "Medalla", concept: "La fe en forma de joya. Para quien lleva la medalla milagrosa siempre cerca.", materials: ["Cordón", "Rojo", "Medalla milagrosa en oro 18k"] },
  gracia: { badge: "Cruz de oro", concept: "Fe en forma de joya. Para llevar sola o sumada a tus capas.", materials: ["Cuarzo morado", "Cruz de oro"] },
};
export const ICONIC_IDS = ["refugio", "bendita", "gracia"] as const;

export const TESTIMONIALS = [
  { quote: "La llevo todos los días desde hace meses y sigue impecable. Elegante, cómoda y combina con todo.", name: "Valentina R.", meta: "Medellín · compra verificada" },
  { quote: "Pedí dos como regalo y el empaque es una joya en sí mismo. Elegante sin ser ostentoso.", name: "Daniela M.", meta: "Bogotá · compra verificada" },
  { quote: "Buscaba oro 18k real a un precio honesto y por fin lo encontré. Calidad de lujo, trato cercano.", name: "Carolina T.", meta: "Cali · compra verificada" },
];

export const FAQS = [
  { q: "¿El oro es realmente 18k?", a: "Sí. Cada manilla se teje con balines de oro de 18 quilates y viene con certificado de autenticidad." },
  { q: "¿Cómo sé mi talla?", a: "Mide tu muñeca con una cinta o un hilo y consúltalo en nuestra guía; también ajustamos a medida sin costo." },
  { q: "¿Cuánto tarda el envío?", a: "Despachamos en 24–48 h con envío asegurado a todo el país y seguimiento en todo momento." },
  { q: "¿Tienen garantía?", a: "Sí: garantizamos que el oro es 18k real. Cada pieza viene con su certificado de autenticidad." },
  { q: "¿Cómo cuido mi manilla?", a: "Evita perfumes y cloro directos y guárdala en su bolsa. Un paño suave devuelve el brillo del oro." },
];

export const IG_POSTS = [
  { id: "1", img: ig1 }, { id: "2", img: ig2 }, { id: "3", img: ig3 },
  { id: "4", img: ig4 }, { id: "5", img: ig5 }, { id: "6", img: ig6 },
];

// Helpers
export const fmt = (n: number): string => "$" + n.toLocaleString("es-CO");
export const getProduct = (id: string): Product | undefined => PRODUCTS.find((p) => p.id === id);
