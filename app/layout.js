import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://www.studiolegalepitaro.it"),
  title: "Studio Legale Giuseppe Pitaro | Avvocato a Catanzaro",
  description:
    "Studio Legale Giuseppe Pitaro a Catanzaro. Assistenza e consulenza legale con oltre 30 anni di esperienza in diritto amministrativo, civile, del lavoro, appalti pubblici e patrocinio in Cassazione.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Studio Legale Giuseppe Pitaro | Avvocato a Catanzaro",
    description:
      "Assistenza e consulenza legale a Catanzaro con oltre 30 anni di esperienza.",
    url: "https://www.studiolegalepitaro.it/",
    siteName: "Studio Legale Giuseppe Pitaro",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://www.studiolegalepitaro.it/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Legale Giuseppe Pitaro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Legale Giuseppe Pitaro | Avvocato a Catanzaro",
    description:
      "Assistenza e consulenza legale a Catanzaro con oltre 30 anni di esperienza.",
    images: ["https://www.studiolegalepitaro.it/og-image.jpg"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.studiolegalepitaro.it/",
  name: "Studio Legale Giuseppe Pitaro",
  alternateName: "Studio Legale Pitaro",
};
const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.studiolegalepitaro.it/#studio-legale",
  name: "Studio Legale Giuseppe Pitaro",
  alternateName: "Studio Legale Pitaro",
  url: "https://www.studiolegalepitaro.it/",
  image: "https://www.studiolegalepitaro.it/og-image.jpg",
  telephone: "+39335286550",
  email: "segreteria@studiolegalepitaro.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Francesco Acri, 88",
    postalCode: "88100",
    addressLocality: "Catanzaro",
    addressRegion: "Calabria",
    addressCountry: "IT"
  },
  areaServed: [
    "Catanzaro",
    "Calabria",
    "Provincia di Catanzaro"
  ],
  founder: {
    "@type": "Person",
    name: "Giuseppe Pitaro",
    jobTitle: "Avvocato"
  },
  knowsAbout: [
    "Diritto amministrativo",
    "Ricorsi TAR",
    "Appalti pubblici",
    "Diritto civile",
    "Diritto del lavoro",
    "Patrocinio in Cassazione"
  ],
  sameAs: [
    "URL_PROFILO_GOOGLE_BUSINESS",
    "eventuale pagina Ordine Avvocati",
    "eventuale LinkedIn"
  ]
};
export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
