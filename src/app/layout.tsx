import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simply Fresh Cabo | Producto fresco, cosechado hoy",
  description:
    "Canasta orgánica semanal entregada directo a tu cocina en Cabo. Cultivada en torres hidropónicas. Sin químicos, 100% orgánico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="m-body">{children}</body>
    </html>
  );
}
