import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { RevealController } from "@/components/RevealController";

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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Figtree:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <RevealController />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
