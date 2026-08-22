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
  special?: boolean; // pieza icónica con dije de Oro 18K
  dije?: boolean;
  reviews?: { name: string; quote: string }[]; // reseñas reales de clientas — vacío hasta tener contenido real
}

export const FREE_SHIP = 150000;

const { local1: U, local2: A, local3: B, local4: C, local5: D } = IMAGES;

export const PRODUCTS: Product[] = [
  { id: "gancho", tier: "ESSENTIAL", name: "Gancho", priceNum: 89900, desc: "Tu entrada al universo EDEN.", longDesc: "La puerta de entrada a EDEN: tejido a mano con balines de oro 18k, pensada para no quitártela nunca.", gallery: [A, U, B] },
  { id: "esencia", tier: "ESSENTIAL", name: "Esencia", priceNum: 119900, desc: "Lo esencial, en oro 18k.", longDesc: "Lo esencial de EDEN: tejido a mano en oro 18k, sobrio y para todos los días.", gallery: [B, U, A] },
  { id: "alma", tier: "ESSENTIAL", name: "Alma", priceNum: 179900, desc: "Carácter en su forma más pura.", longDesc: "Una pieza con carácter: balines de oro 18k tejidos a mano, para llevar sola o en capas.", gallery: [U, A, B] },
  { id: "vertice", tier: "SIGNATURE", name: "Vértice", priceNum: 259900, desc: "El punto donde EDEN se define.", longDesc: "El corazón de la colección: tejido a mano en oro 18k, con la presencia justa.", gallery: [A, B, U] },
  { id: "aura", tier: "SIGNATURE", name: "Aura", priceNum: 329900, special: true, dije: true, desc: "Cordón rojo con medalla de San Benito.", longDesc: "Pieza icónica: cordón tejido en rojo con balines de oro 18k y medalla de San Benito en Oro 18K. Protección que se lleva puesta, todos los días.", gallery: [D] },
  { id: "pulso", tier: "SIGNATURE", name: "Pulso", priceNum: 379900, desc: "Ritmo y presencia en oro 18k.", longDesc: "Ritmo y presencia: tejido a mano en oro 18k, el pulso de la colección Signature.", gallery: [B, A, U] },
  { id: "eterna", tier: "PRIVÉ", name: "Eterna", priceNum: 479900, desc: "Lujo accesible que no caduca.", longDesc: "Colección Privé: la máxima expresión de EDEN, tejida a mano en oro 18k.", gallery: [A, U, B] },
  { id: "siempre", tier: "PRIVÉ", name: "Siempre", priceNum: 549900, special: true, dije: true, desc: "Espiral en hilo borgoña con cuarzo rosa.", longDesc: "Pieza emocional, hecha para regalar: espiral premium en hilo borgoña, balines de 6 × 5 mm, cuarzo rosa y dije de Oro 18K.", gallery: [B, U, A] },
  { id: "origen", tier: "PRIVÉ", name: "Origen", priceNum: 589900, desc: "Donde empieza todo EDEN.", longDesc: "El origen de EDEN: la pieza más completa de la colección, tejida a mano en oro 18k.", gallery: [U, B, A] },
  { id: "vinculo", tier: "SIGNATURE", name: "Vínculo", priceNum: 349900, special: true, dije: true, desc: "Para dos: un dije, la misma historia.", longDesc: "Pensada para parejas: balines de oro 18k tejidos a mano con dije a juego, para llevar por separado lo que los une.", gallery: [C] },
];

export const TIER_META: Record<Tier, string> = {
  ESSENTIAL: "La puerta de entrada.",
  SIGNATURE: "El corazón de la colección.",
  "PRIVÉ": "La máxima expresión.",
};

export const TIER_ORDER: Tier[] = ["ESSENTIAL", "SIGNATURE", "PRIVÉ"];

export interface IconicMeta {
  concept: string;
  materials: string[];
}
export const ICONIC_META: Record<string, IconicMeta> = {
  aura: { concept: "Protección que se lleva puesta. La pieza que te acompaña cada día.", materials: ["Cordón", "Rojo", "Medalla San Benito", "Dije Oro 18K"] },
  siempre: { concept: "Emocional y sofisticada. Hecha para regalar y para recordar.", materials: ["Espiral premium", "Hilo borgoña", "Cuarzo rosa", "Dije Oro 18K"] },
};
export const ICONIC_IDS = ["aura", "siempre"] as const;

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
  { id: "1", img: A }, { id: "2", img: B }, { id: "3", img: U },
  { id: "4", img: A }, { id: "5", img: B }, { id: "6", img: U },
];

// Helpers
export const fmt = (n: number): string => "$" + n.toLocaleString("es-CO");
export const getProduct = (id: string): Product | undefined => PRODUCTS.find((p) => p.id === id);
