import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics} from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
      <GoogleAnalytics gaId="G-FLMYM554K8" />
      <GoogleTagManager gtmId="GTM-FLMYM554K8" />
      <Navbar/>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
