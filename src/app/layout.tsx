import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "@/components/navbar/Navbar";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/newsletter/Newsletter";

export const metadata: Metadata = {
  title: "Wait | Oficiální web české crossover kapely",
  description: "Wait Official page by create next app",
  icons: {
    icon:['/favicon.ico?v=5'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <CustomCookieConsent />
        <Navbar />
        <ScrollToTopButton />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}