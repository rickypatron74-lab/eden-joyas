import { Nav } from "@/components/Nav";
import { PromoBar, Hero, Manifesto } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Iconics } from "@/components/Iconics";
import { Historia, Materiales } from "@/components/Story";
import { Craft } from "@/components/Craft";
import { PermanentBanner, Opiniones, Instagram, Faq, FinalCta, Footer } from "@/components/Sections";
import { CartDrawer } from "@/components/CartDrawer";
import { StickyCta, WhatsApp, InstagramFloat } from "@/components/Chrome";
import { FAQS } from "@/lib/products";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <PromoBar />
      <Hero />
      <Manifesto />
      <Collection />
      <Iconics />
      <Historia />
      <Craft />
      <PermanentBanner />
      <Materiales />
      <Opiniones />
      <Instagram />
      <Faq />
      <FinalCta />
      <Footer />
      <InstagramFloat />
      <WhatsApp />
      <StickyCta />
      <CartDrawer />
    </>
  );
}
