import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Цэнгэлийн манлай — Сэтгэл санааны амгалан",
  description:
    "Дотоод тодорхой байдал, сэтгэлийн тэнцвэр, биеийн эрүүл мэндийн аялал. Сэтгэлээ ариусгаж, бодлоо цэгцэлж, биеэ эрүүл болгоорой.",
  keywords: [
    "бясалгал",
    "хувийн хөгжил",
    "эрүүл мэнд",
    "дотоод амгалан",
    "оюун тодорхой байдал",
    "биеийн эрч хүч",
  ],
  openGraph: {
    title: "Цэнгэлийн манлайд хүрэх",
    description: "Сэтгэл, бодол, биеийн тэнцвэртэй үед амгалан эхэлдэг.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-warm-50 font-sans text-warm-900 antialiased">
        {children}
      </body>
    </html>
  );
}
