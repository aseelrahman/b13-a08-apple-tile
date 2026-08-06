import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const OutfitFont = Outfit({
  subsets: ["latin"],
});


export const metadata = {
  title: "Tessera",
  description: "Explore TileHub's curated collection of ceramic, porcelain, and mosaic tiles. Find the perfect design for your kitchen, bathroom, or floor with high-quality, affordable options.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
