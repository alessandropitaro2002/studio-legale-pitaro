import "./globals.css";

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
        url: "/og-image.png",
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
    images: ["/og-image.jpg"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.studiolegalepitaro.it/",
  name: "Studio Legale Giuseppe Pitaro",
  alternateName: "Studio Legale Pitaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
