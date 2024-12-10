import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/

export const metadata: Metadata = {
  title: "Wait - Oficiální web české crossover kapely",
  description: "Wait Official page by create next app",
  icons: {
    icon:['/favicon.ico?v=4'],
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
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          <link rel="icon" href="/favicon.ico?v=4" />
          <link rel="shortcut icon" href="/favicon.ico?v=4" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        {children}

      </body>
    </html>
  );
}
