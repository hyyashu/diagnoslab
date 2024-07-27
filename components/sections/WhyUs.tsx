import React from 'react';

const WhyUs = () => {
    return (
            <div className="flex flex-col text-center my-10 p-4 bg-gradient-to-r">
                <h2 className="text-2xl font-semibold mb-4">Why Us?</h2>
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 p-4">
                    {[
                        { faq: "15 Years of Trust with 2M+ Patients", icon: "fa-thin fa-users" },
                        { faq: "Home Collection Starts at 6 AM", icon: "fa-thin fa-house" },
                        { faq: "Same-Day Reports, 100% Accuracy", icon: "fa-thin fa-shield-check" },
                        { faq: "Top Lab Recommended by Doctors", icon: "fa-thin fa-user-md" }
                    ].map((item, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/4 text-pretty flex flex-col items-center text-black">
                            <i className={`text-DiagnosRed fa-2x md:fa-3x ${item.icon} mb-2`}></i>
                            <p className="text-sm font-semibold sm:text-base">{item.faq}</p>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default WhyUs;
