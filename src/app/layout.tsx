import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { SectionMarquee } from "@/components/Layout/SectionMarquee";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ppNeueBold = localFont({
  src: "./fonts/pp-neue-montreal/ppneuemontreal-bold.woff",
  variable: "--font-neue-bold",
  weight: "700",
});

const ppNeueMed = localFont({
  src: "./fonts/pp-neue-montreal/ppneuemontreal-medium.woff",
  variable: "--font-neue-med",
  weight: "700",
});

export const metadata: Metadata = {
  title: "VTIS 2024",
  description: "VTIS 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>VTIS 2024 </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VTIS 2024" />
        <meta property="og:description" content="VTIS 2024" />
        <meta property="og:url" content="https://vtis.io" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ppNeueBold.variable} ${ppNeueMed.variable} antialiased mx-auto`}
      >
        <Header />
        {children}
        <Footer />
        <SectionMarquee />
      </body>
    </html>
  );
}
