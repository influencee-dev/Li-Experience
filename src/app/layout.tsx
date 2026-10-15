import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { brand } from "@/data/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | ${brand.payoff}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "LI Experience Network, la rete in franchising fondata da Liliana Del Duca che trasforma territori in esperienze autentiche: ospitalità, esperienze, benessere e cultura locale con il metodo Turismo 4.0®.",
  applicationName: brand.name,
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: brand.name,
    title: `${brand.name} | ${brand.payoff}`,
    description: "Trasformiamo territori in esperienze autentiche. Un nuovo modo di vivere, raccontare e condividere i luoghi.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2742",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
