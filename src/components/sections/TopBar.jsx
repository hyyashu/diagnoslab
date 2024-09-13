"use client";
import React from "react";
import { headerLinks } from "../../constant/constant";
import PopoverExample from "../PopoverExample";

const TopBar = () => {
  return (
    <>
      <nav className="flex flex-wrap content-center bg-primary h-[2.875em] fixed left-0 right-0 top-0 w-full z-5 text-white">
        <div className="flex flex-wrap justify-start pl-4 pr-4 ml-auto mr-auto">
          <ul className="flex flex-wrap justify-center pl-4 z-[99] max-lg:hidden">
            {headerLinks.map((link) => (
              <li key={link.name} className="ml-3 mr-3">
                <a className="text-white" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-wrap justify-end hidden pl-4 pr-4 ml-auto mr-auto md:flex">
          {/* <a className="pl-4">Get a Callback</a> */}
          <PopoverExample />

          <a className="pl-4">About Us</a>
        </div>
        {/* <div className="flex items-center">
          <p>Customer Care : 8404802201</p>
        </div> */}
      </nav>
    </>
  );
};

export default TopBar;
