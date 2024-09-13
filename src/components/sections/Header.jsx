"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <>
      <div className="flex flex-wrap justify-between px-4 pt-12 pb-1 mx-auto shadow-lg">
        {/* Logo */}
        <div className="flex ">
          <Link href="/" passHref>
            <Image
              src="/DiagnosLabLogo.svg"
              alt="Diagnos Lab Logo"
              width={150}
              height={24}
              priority
            />
          </Link>
        </div>
        {/* Menu Icon (for mobile) */}
        <div className="flex items-center md:hidden">
          <MobileMenu />
        </div>
        {/* Contact Info (hidden on mobile) */}
        <div className="items-center hidden md:flex">
          <i className="mr-1 fa-light fa-mobile fa-xl"></i>
          <p className="text-xl font-semibold text">8404802201</p>
        </div>
      </div>
    </>
  );
}

export default Header;
