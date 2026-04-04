import "./globals.css";

export const metadata = {
  title: "Studio Legale Giuseppe Pitaro",
  description: "Studio Legale Giuseppe Pitaro - Catanzaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}