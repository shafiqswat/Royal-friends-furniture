/** @format */

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Royal Friends Furniture - Premium Furniture Store in Dubai",
  description:
    "Royal Friends Furniture offers the finest quality furniture in Dubai. Located at Dragon Mart, we provide luxury home and office furniture with exceptional craftsmanship.",
  keywords:
    "furniture, Dubai, Dragon Mart, luxury furniture, home furniture, office furniture, Royal Friends Furniture",
  authors: [{ name: "Royal Friends Furniture" }],
  openGraph: {
    title: "Royal Friends Furniture - Premium Furniture Store in Dubai",
    description:
      "Royal Friends Furniture offers the finest quality furniture in Dubai. Located at Dragon Mart, we provide luxury home and office furniture with exceptional craftsmanship.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='min-h-screen'>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
