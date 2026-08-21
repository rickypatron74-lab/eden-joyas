import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PromoBar } from "@/components/Hero";
import { Footer } from "@/components/Sections";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsApp, InstagramFloat } from "@/components/Chrome";
import { ProductDetail } from "@/components/ProductDetail";
import { PRODUCTS, getProduct, fmt } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const p = getProduct(params.id);
  if (!p) return { title: "Producto no encontrado" };
  return {
    title: p.name,
    description: `${p.name} — ${p.longDesc} ${fmt(p.priceNum)}.`,
    alternates: { canonical: `/producto/${p.id}` },
    openGraph: {
      title: `${p.name} · EDEN Joyas`,
      description: p.longDesc,
      images: [{ url: p.gallery[0], alt: `${p.name} — manilla EDEN en oro 18k` }],
    },
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) notFound();
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDesc,
    image: product.gallery[0],
    sku: product.id,
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      price: product.priceNum,
      availability: "https://schema.org/InStock",
      url: `https://edenjoyas.com/producto/${product.id}`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Nav />
      <PromoBar />
      <ProductDetail product={product} related={related} />
      <Footer />
      <InstagramFloat />
      <WhatsApp />
      <CartDrawer />
    </>
  );
}
