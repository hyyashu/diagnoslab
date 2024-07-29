"use client";
import React from "react";
import Image from "next/image";
import GoogleReviews from "@/components/GoogleReview";
import Presence from "./Presence";
import { footerLinks, quickLinks, policies } from "@/app/constant/constant";

function Footer() {
  return (
    <footer>
      <GoogleReviews />
      <Presence />
      <div className="bg-white text-black rounded-t-3xl p-6 shadow-lg">
        <div className="flex  flex-wrap items-center justify-between">
          <Image
            src="/DiagnosLabLogo.svg"
            alt="Diagnos Lab Logo"
            className="h-28 w-28"
            width={28}
            height={28}
          />

          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                <i className={`fa-2x md:fa-3x ${link.icon} mb-2`}></i>
                <a href={link.url} className="text-sm">
                  {link.name}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-lg font-semibold">Connect on WhatsApp</h3>
            <div className="mt-2 flex"></div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-between border-t pt-4">
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="mt-2 flex flex-wrap gap-4">
              {quickLinks.map((link) => (
                <a key={link.name} href={link.url} className="text-sm">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-between border-t pt-4 text-sm">
          <div className="flex flex-wrap gap-4">
            {policies.map((link) => (
              <a key={link.name} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
          <div>Narayana Diagnostic & Imaging © 2024</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
