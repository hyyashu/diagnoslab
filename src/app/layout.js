import "./globals.css";
import "../../public/fonts/fontawesome/css/all.css";
import "../../public/icons/icons.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";
import TopBar from "@/components/sections/TopBar";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import React from "react";
import Script from "next/script";
import GTM from "@/components/GTM";
import Toast from "@/components/Toast";
const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Diagnos Lab",
  description:
    "Diagno Labs, Jamshedpur's highest-rated and most advanced pathology lab with a 4.9-star rating on Google Reviews. ",
  icons: {
    icon: "/public/icons/DiagnosLabLogo.svg",
  },
  // canonical: "https://diagnoslab.in",
  openGraph: {
    type: "website",
    url: "https://diagnoslab.in",
    title: "Diagnos Lab",
    description: "Diagnos Lab Jamshedpur",
    images: [
      {
        url: "https://diagnoslab.in/public/icons/DiagnosLabLogo.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <GTM gtmId="GTM-WRHRJJC6" /> */}
      <GoogleTagManager gtmId="GTM-WRHRJJC6" />
      {/* <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WRHRJJC6')`,
        }}
      ></Script> */}

      <head>
        <link rel="canonical" href="https://diagnoslab.in/" key="canonical" />
      </head>
      <body className={font.className}>
        <header>
          <TopBar />
          <Header />
        </header>
        {children}
        <Toast />
        <Footer />
      </body>
    </html>
  );
}
