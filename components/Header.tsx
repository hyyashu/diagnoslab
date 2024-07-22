import React from 'react';
import Image from "next/image";

function Header() {
    return (<>
    <div className="flex flex-wrap justify-between px-4 pt-12 pb-1 mx-auto shadow-lg">
        <div className="flex items-start">
            <Image src="/DiagnosLabLogo.svg" alt="Diagnos Lab Logo" className="" width={150} height={24} priority/>
        </div>
        <div className="md:block content-center hidden">
            <span className="mr-3">Customer Care 84048 02201</span>
            <span className="mr-3">Upload Prescription</span>
        </div>
    </div>
</>
)
    ;
}

export default Header;