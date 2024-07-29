import "./globals.css";
import "../../public/fonts/fontawesome/css/all.css";
import "../../public/icons/icons.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";
import React from "react";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Diagnos Lab",
  description: "Diagnos Lab Jamshedpur",
  icons: {
    icon: "/public/icons/DiagnosLabLogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gzaId="G-FLMYM554K8" />
      <GoogleTagManager gtmId="GTM-FLMYM554K8" />
      <body className={font.className}>
        <header>
          <NavBar />
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
