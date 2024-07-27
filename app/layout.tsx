import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";
import "../public/icons/icons.css";
import "../public/fonts/fontawesome/css/all.css";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import React from "react";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Diagnos Lab",
  description: "Diagnos Lab Jamshedpur",
    icons :{
      icon: '/public/icons/DiagnosLabLogo.svg',
    }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gzaId="G-FLMYM554K8" />
      <GoogleTagManager gtmId="GTM-FLMYM554K8" />
      <body className={font.className}>
        <header>
          <Navbar />
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
