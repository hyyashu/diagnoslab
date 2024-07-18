import React from 'react';
import Image from "next/image";

function Header() {
    return (
<>
        <header className="flex flex-wrap justify-between px-4 pt-12 pb-3 mx-auto border-none">
            <div className="flex items-start mx-14">
                <Image
                    src="/DiagnosLabLogo.svg"
                    alt="Diagnos Lab Logo"
                    className=""
                    width={200}
                    height={24}
                    priority
                />
            </div>
            <div className="flex items-center">
                <span className="mr-3">Customer Care 84048 02201</span>
                <span className="mr-3">Upload Prescription</span>
            </div>
        </header>
</>
)
    ;
}

export default Header;