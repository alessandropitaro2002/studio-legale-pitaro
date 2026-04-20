import "./globals.css";

export const metadata = {
  title: "Studio Legale Giuseppe Pitaro | Avvocato a Catanzaro",
  description:
    "Studio Legale Giuseppe Pitaro a Catanzaro. Assistenza e consulenza legale con oltre 30 anni di esperienza in diritto amministrativo, civile, del lavoro, appalti pubblici e patrocinio in Cassazione.",
  alternates: {
    canonical: "https://www.studiolegalepitaro.it",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
