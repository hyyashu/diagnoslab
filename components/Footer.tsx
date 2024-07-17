import React from 'react';
import Image from "next/image";

function Footer() {
    return (

        <footer>
            <div className="bg-[#e53935] text-white">
                <div className="container mx-auto py-6 text-center">
                    <h2 className="text-2xl font-semibold">Our Presence</h2>
                    <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm">
                        {[
                            "Jamshedpur",
                            "Adityapur",
                            "Ranchi",
                            "Dumka",
                            "Deoghar",
                            "Chaibasa",
                        ].map((city) => (
                            <span key={city}>{city}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white text-black rounded-t-3xl p-6 shadow-lg">

                <div className="flex flex-wrap items-center justify-between">
                    <Image
                        src="/DiagnosLabLogo.svg"
                        alt="Diagnos Lab Logo"
                        className="h-28 w-28"
                        width={28}
                        height={28}
                        priority
                    />

                    <div className="flex flex-wrap gap-4">
                        {[
                            {name: "Feedback", icon: "Feedback"},
                            {name: "FAQ's", icon: "FAQ"},
                            {name: "Careers", icon: "Careers"},
                            {name: "Franchisee", icon: "Franchisee"},
                        ].map((item) => (
                            <div key={item.name} className="flex flex-col items-center">

                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-end">
                        <h3 className="text-lg font-semibold">Subscribe to WhatsApp</h3>
                        <div className="mt-2 flex">

                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap justify-between border-t pt-4">
                    <div>
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <div className="mt-2 flex flex-wrap gap-4">
                            {["Home", "About Us", "Partner Labs", "Blogs", "Center Locator", "Contact Us"].map((link) => (
                                <a key={link} href="#" className="text-sm">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap justify-between border-t pt-4 text-sm">
                    <div className="flex flex-wrap gap-4">
                        {["Privacy Policy", "Term of Use", "CSR", " Sitemap", "Notices"].map((link) => (
                            <a key={link} href="#">
                                {link}
                            </a>
                        ))}
                    </div>
                    <div>Copyright © 2024</div>
                </div>
            </div>

</footer>
)
    ;
}

export default Footer;