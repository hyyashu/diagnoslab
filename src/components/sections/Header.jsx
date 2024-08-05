"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
        <div className="md:hidden flex items-center">
          <MobileMenu />
        </div>
        {/* Contact Info (hidden on mobile) */}
        <div className="hidden md:flex items-center">
          <i className="fa-light fa-mobile fa-xl mr-1"></i>
          <p className="font-semibold text-xl text">8404802201</p>
        </div>
      </div>
    </>
  );
}

export default Header;
