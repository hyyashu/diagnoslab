"use client";
import React, { useState } from "react";
import Image from "next/image";
import { headerLinks } from "@/app/constant/constant";

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
          <Image
            src="/DiagnosLabLogo.svg"
            alt="Diagnos Lab Logo"
            className=""
            width={150}
            height={24}
            priority
          />
        </div>
        {/* Menu Icon (for mobile) */}
        <div className="md:hidden flex items-center">
          <i
            className={`fa-thin fa-bars fa-2x ${
              isMenuOpen ? "text-gray-900" : "text-gray-700"
            } hover:text-gray-900 transition duration-300`}
            onClick={toggleMenu}
          ></i>
        </div>
        {/* Contact Info (hidden on mobile) */}
        <div className="hidden md:flex items-center">
          <i className="fa-light fa-mobile fa-xl mr-1"></i>
          <p className="font-semibold text-xl text">8404802201</p>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="absolute top-4 right-4">
            <i
              className="fa-thin fa-xmark fa-2x text-white cursor-pointer"
              onClick={toggleMenu}
            ></i>
          </div>
          <div className="flex flex-col items-center space-y-4 mt-8">
            {headerLinks.map((link) => (
              <a key={link.name} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
