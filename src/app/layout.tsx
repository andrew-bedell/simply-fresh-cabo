import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simply Fresh Cabo | Fresh Organic Produce Delivered Weekly",
  description:
    "The freshest organic produce in Cabo, delivered to your doorstep once a week. Hydroponically grown, 100% pesticide-free, locally harvested.",
  metadataBase: new URL("https://simply-fresh-cabo.vercel.app"),
  openGraph: {
    title: "Simply Fresh Cabo | Fresh Organic Produce Delivered Weekly",
    description:
      "The freshest organic produce in Cabo, delivered to your doorstep once a week. Hydroponically grown, 100% pesticide-free.",
    images: [{ url: "/og", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simply Fresh Cabo | Fresh Organic Produce Delivered Weekly",
    description:
      "The freshest organic produce in Cabo, delivered to your doorstep once a week.",
    images: ["/og"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-body">{children}</body>
    </html>
  );
}
