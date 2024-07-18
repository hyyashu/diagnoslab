import React from 'react';

const Services = () => {
    return (
        <>
            <section>
                <div className="flex flex-wrap justify-center text-center">
                    <p className="text-center mt-5">Services</p>
                </div>
                <div className="flex flex-wrap justify-center text-center gap-10 bg-white py-10">
                    <p className="bg-white m-10">Pathology Services</p>
                    <p className="bg-white m-10">Diagnostic Services</p>
                    <p className="bg-white m-10">Radiologic Services</p>
                    <p className="bg-white m-10">Corporate Wellness Program</p>
                </div>
            </section>
        </>
    );
};

export default Services;
