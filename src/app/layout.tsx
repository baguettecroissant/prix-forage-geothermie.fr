import type { Metadata } from "next";
import { Sora, Karla, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const BASE_URL = "https://www.prix-forage-geothermie.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Prix Forage Géothermie — Tarifs, Devis et Coûts 2026 | prix-forage-geothermie.fr",
    template: "%s | prix-forage-geothermie.fr",
  },
  description:
    "Estimez le prix d'un forage géothermique en 2026 : captage vertical, horizontal, tarifs par département. Comparez les devis et économisez jusqu'à 15 000€ d'aides.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Prix Forage Géothermie",
    title: "Prix Forage Géothermie — Tarifs, Devis et Coûts 2026",
    description: "Estimez le prix d'un forage géothermique en 2026 : captage vertical, horizontal, tarifs par département.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prix Forage Géothermie — Tarifs et Devis 2026",
    description: "Estimez le prix d'un forage géothermique en 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Prix Forage Géothermie",
        url: BASE_URL,
        description: "Comparateur expert des prix de forage géothermique en France.",
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Prix Forage Géothermie",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <html lang="fr" className={`${sora.variable} ${karla.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-text min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
