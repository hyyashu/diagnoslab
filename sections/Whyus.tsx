import React from 'react';

const Services = () => {
    return (
        <>
            <div className="bg-DiagnosRed text-white">
                <div className="container mx-auto py-6 text-center">
                    <h2 className="text-2xl font-semibold">Why Us?</h2>
                    <div className="mt-2 flex flex-wrap justify-around gap-2 text-sm">
                        {[
                            "15 years of trust of 10L+ patients",
                            "Home Collection starts at 6 AM by qualified technicians",
                            "Same day reporting with 100% accuracy",
                            "Most trusted pathology lab by doctors",
                        ].map((whyus) => (
                            <span className="" key={whyus}>{whyus}</span>
                        ))}
                    </div>
                </div>
            </div>
            {/*<div className="my-10">*/}
            {/*    <p className="text-center">Why Us</p>*/}
            {/*</div>*/}
            {/*<div className="gap-2justify-evenly  bg-white">*/}
            {/*    <span className="bg-white mr-28 ">15 years of trust of 10L+ patients</span>*/}
            {/*    <span className="bg-white m-10">Home Collection starts at 6 AM by qualified technicians</span>*/}
            {/*    <span className="bg-white m-10">Same day reporting with 100% accuracy</span>*/}
            {/*    /!*<span className="bg-white m-10"></span>*!/*/}
            {/*</div>*/}
        </>
    );
};

export default Services;
