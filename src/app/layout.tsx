import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const displayFont = Space_Grotesk({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Observer — AI Product Studio",
  description:
    "Observer is a three-person AI product studio based in Istanbul. We build AI-native products that shouldn't exist yet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
