import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { RevealController } from "@/components/RevealController";

// Autohospedadas por Next.js (sin request externo a fonts.googleapis.com,
// sin bloquear el render). Mismas familias y pesos que antes.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

const SITE = "https://edenjoyas.com"; // TODO: dominio real

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "EDEN Joyas — El lujo de llevarlo",
    template: "%s · EDEN Joyas",
  },
  description:
    "Manillas tejidas a mano en Oro 18K. EDEN convierte el oro en algo cotidiano: piezas de moda contemporánea, hechas a mano en Colombia.",
  keywords: ["manillas oro 18k", "joyas", "moda", "tejidas a mano", "EDEN Joyas"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "EDEN Joyas",
    title: "EDEN Joyas — El lujo de llevarlo",
    description: "Manillas tejidas a mano en Oro 18K.",
    images: [{ url: "/images/manilla-1.jpg", width: 736, height: 736, alt: "Manilla EDEN en oro 18k" }],
  },
  twitter: { card: "summary_large_image", title: "EDEN Joyas — El lujo de llevarlo", description: "Manillas tejidas a mano en Oro 18K." },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#faf8f5" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${figtree.variable}`}>
      <body>
        <CartProvider>
          <RevealController />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
