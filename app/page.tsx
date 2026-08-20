import { Nav } from "@/components/Nav";
import { PromoBar, Hero, Manifesto } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Iconics } from "@/components/Iconics";
import { Historia, Materiales } from "@/components/Story";
import { PermanentBanner, Opiniones, Instagram, Faq, FinalCta, Footer } from "@/components/Sections";
import { CartDrawer } from "@/components/CartDrawer";
import { StickyCta, WhatsApp } from "@/components/Chrome";

export default function HomePage() {
  return (
    <>
      <Nav />
      <PromoBar />
      <Hero />
      <Manifesto />
      <Collection />
      <Iconics />
      <Historia />
      <PermanentBanner />
      <Materiales />
      <Opiniones />
      <Instagram />
      <Faq />
      <FinalCta />
      <Footer />
      <WhatsApp />
      <StickyCta />
      <CartDrawer />
    </>
  );
}
