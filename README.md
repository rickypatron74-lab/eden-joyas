# EDEN Joyas — Next.js

Migración del diseño aprobado (Claude Design) a una app real en **Next.js 14 (App Router) + React 18 + TypeScript**. Fidelidad visual 1:1 con el DC original.

## Requisitos
- Node 18.17+ (o 20+)

## Puesta en marcha
```bash
cd eden-next
npm install       # instala next, react, typescript (no había node_modules en el diseño)
npm run dev       # http://localhost:3000
npm run build     # build de producción
npm run typecheck # tsc --noEmit
npm run lint      # next lint (configura eslint al primer run)
```

## Estructura
```
app/
  layout.tsx            Metadata/SEO, fuentes (Cormorant + Figtree), CartProvider, reveal
  page.tsx              Home: ensambla todas las secciones
  producto/[id]/page.tsx  PDP con ruta real + generateStaticParams + metadata
  not-found.tsx
  globals.css           Tokens (paleta cálida), resets, hover, reveal, drawer, responsive
components/
  Nav, Hero (Hero/Manifesto/PromoBar), Collection, ProductCard,
  Iconics (AURA/SIEMPRE), Story (Historia/Materiales),
  Sections (Banner/Opiniones/Instagram/Faq/FinalCta/Footer),
  Chrome (StickyCta/WhatsApp), CartProvider, CartDrawer, ProductDetail, RevealController
lib/
  products.ts           FUENTE ÚNICA de datos (9 piezas, tiers, iconics, FAQ, testimonios)
  images.ts             FUENTE ÚNICA de imágenes (1 asset propio + 2 placeholders externos)
public/images/          manilla-1.jpg (asset propio)
```

## Decisiones
- **Routing real**: el hash `#producto=` del DC se reemplazó por `/producto/[id]` (SSG).
- **Carrito**: contexto React + `localStorage` (`eden-cart-v1`), igual que el diseño. Sin Shopify aún.
- **Estilos inline** con CSS vars (portados del DC) + utilidades de `:hover` en `globals.css`.
- **Datos e imágenes centralizados** para sustituir fácilmente por assets propios / CMS / Shopify.

## Pendiente (fuera de alcance de esta pasada)
- Sustituir placeholders externos (`lib/images.ts`) por fotografía propia WebP/AVIF y migrar `<img>` a `next/image`.
- Checkout real / pagos (Sistecrédito, PSE) — hoy "Finalizar compra" es enlace demo.
- Shopify (Storefront/cart), analytics, dominio, deployment.
- `alt` definitivos por foto y datos de reseñas reales.

## Nota de verificación
Este código se generó en el entorno de diseño (sin Node), por lo que **`build`/`typecheck`/`lint` deben ejecutarse en Claude Code**. El código está tipado en strict; revisar el primer `typecheck` tras `npm install`.
