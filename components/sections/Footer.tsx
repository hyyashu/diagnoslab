'use client'
import React from 'react';
import Image from "next/image";
import GoogleReviews from "@/components/GoogleReview";

function Footer() {
    return (

        <footer>
            <GoogleReviews />
            <div className="bg-DiagnosRed text-white">
                <div className="container mx-auto py-6 text-center">
                    <h2 className="text-2xl font-semibold">Our Presence</h2>
                    <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm">
                        {[
                            "Jamshedpur",
                            "Adityapur",
                            "Bokaro",
                            "Dhanbad",
                            "Dumka",
                            "Deoghar"
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
                    />

                    <div className="flex flex-wrap gap-4">
                        {[
                            {name: "Feedback", url:"/",icon: "fa-thin fa-comment"},
                            {name: "FAQ's", url:"/", icon: "fa-thin  fa-question-circle"},
                            {name: "Careers", url:"/careers", icon: "fa-thin fa-briefcase"},
                        ].map((link) => (
                            <div key={link.name} className="flex flex-col items-center">
                                <i className={`fa-2x md:fa-3x ${link.icon} mb-2`}></i>
                                <a key={link.name} href={link.url} className="text-sm">
                                    {link.name}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-end">
                        <h3 className="text-lg font-semibold">Connect on WhatsApp</h3>
                        <div className="mt-2 flex">

                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap justify-between border-t pt-4">
                    <div>
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <div className="mt-2 flex flex-wrap gap-4">
                            {[
                                {name: "Home", url:"/"},
                                {name: "About Us", url:"http://localhost"},
                                {name: "Blogs", url:"/blogs"},
                                {name: "Center Locator", url:"http://localhost"},
                                {name: "Contact Us", url:"/contact-us"},].map((link) => (
                                <a key={link.name} href={link.url} className="text-sm">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap justify-between border-t pt-4 text-sm">
                    <div className="flex flex-wrap gap-4">
                        {[
                            {name: "Privacy Policy", url:"/"},
                            {name: "Term of Use", url:"/"},
                            {name: "Sitemap", url:"/sitemap.xml"},
                            {name: "Notices", url:"/"},].map((link) => (
                            <a key={link.name} href={link.url}>
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div>Narayana Diagnostic & Imaging © 2024</div>
                </div>
            </div>

</footer>
)
    ;
}

export default Footer;