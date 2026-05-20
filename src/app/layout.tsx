import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simply Fresh Cabo | Farm-Fresh Hydroponic Produce Delivery",
  description:
    "Locally grown hydroponic produce delivered fresh to your door in Cabo San Lucas. Pesticide-free, sustainably grown, and harvested daily.",
  keywords: [
    "fresh produce",
    "Cabo San Lucas",
    "hydroponic",
    "delivery",
    "organic",
    "local farm",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
