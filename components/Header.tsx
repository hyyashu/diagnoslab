import React from 'react';
import Image from "next/image";

function Header() {
    return (
<>
        <header className="flex flex-wrap items-center justify-center  pt-3 pb-3 border-none">
            <div className="flex items-center mr-3">
                <Image
                    src="/DiagnosLabLogo.svg"
                    alt="Diagnos Lab Logo"
                    className=""
                    width={200}
                    height={24}
                    priority
                /></div>
            <div className="flex flex-wrap items-center">
                <span className="mr-3">📞 Customer Care 84048 02201</span>
                <span className="mr-3">📍 Jamshedpur   </span>
            </div>
        </header>
    <div>
        <nav className="flex flex-wrap justify-center bg-[#e53935] p-3">
            <a className="mr-3 ml-3 text-white" href="/">Home</a>
            <a className="mr-3 ml-3 text-white" href="/tests">Tests</a>
            <a className="mr-3 ml-3 text-white" href="/">X-Ray & Scans</a>
            <a className="mr-3 ml-3 text-white" href="/packages">Packages</a>
            <a className="mr-3 ml-3 text-white" href="/book-a-test">Book a Test</a>
            <a className="mr-3 ml-3 text-white" href="/about-us">About Us</a>
        </nav>
    </div>
</>
)
    ;
}

export default Header;