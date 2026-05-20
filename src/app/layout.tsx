import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simply Fresh | Producto fresco, cosechado hoy en Cabo",
  description:
    "Canasta orgánica semanal entregada directo a tu cocina en Cabo. Cultivado en nuestras torres hidropónicas. Sin químicos, todo orgánico.",
  keywords: [
    "producto fresco",
    "Cabo San Lucas",
    "hidropónico",
    "entrega",
    "orgánico",
    "torres hidropónicas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
