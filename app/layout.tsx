import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Diagnos Lab",
  description: "Diagnos Lab Jamshedpur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <GoogleAnalytics gaId="G-FLMYM554K8" />
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
