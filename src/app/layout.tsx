import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Wait - Oficiální web české crossover kapely",
  description: "Wait Official page by create next app",
  icons: {
    icon:['/favicon.ico?v=5'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>  
        {children}
      </body>
    </html>
  );
}
