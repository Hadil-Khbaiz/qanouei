import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "QANOUEI",
  description: "Beauty, Fashion & Style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F8F5F0] text-[#171512]">

        <CartProvider>

          <Header />

          {children}

          <Footer />

        </CartProvider>

      </body>
    </html>
  );
}