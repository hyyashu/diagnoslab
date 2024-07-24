import React from 'react';

const Services = () => {
    return (
        <>
            <div className="flex flex-col bg-DiagnosRed text-center text-white mb-2 p-2">
                <h2 className="text-2xl font-semibold">Why Us?</h2>
                <div className="flex flex-wrap justify-between gap-1 p-10">
                    {[
                        {faq: "15 years of trust of 20L+ patients", icon: ""},
                        {faq: "Home Collection starts at 6 AM by qualified technicians", icon: ""},
                        {faq: "Same day reporting with 100% accuracy", icon: ""},
                        {faq: "Most trusted pathology lab by doctors", icon: ""}
                    ].map((item, index) => (
                        <div key={index} className="md:w-[20%] text-pretty">
                            <p className="" key={index}>{item.faq}</p></div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Services;
