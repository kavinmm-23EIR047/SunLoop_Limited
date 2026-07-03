import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sunloop.energy"),
  title: "Sunloop Energy | AI Powered Renewable Energy",
  description:
    "Enterprise renewable energy infrastructure for solar power plants, energy storage, EV charging, and AI energy management.",
  openGraph: {
    title: "Sunloop Energy | AI Powered Renewable Energy",
    description:
      "Integrated solar, storage, EV charging, and AI energy management for future-ready infrastructure.",
    images: ["/pdf-assets/sunloop-pdf-02-1229x820.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
