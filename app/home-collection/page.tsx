"use client"
import useFetch from '@/hooks/useFetch';
import Image from "next/image";
import HowitWorks from "@/components/sections/HowitWorks";

const HomeCollection = () => {
    const {data, loading, error} = useFetch('/home-collection.json');

    if (loading) return <div className="loader"></div>
    if (error) return <div>Error: {error.message}</div>;
    return (
        <>
            <div className="flex-col flex-wrap justify-center m-3 p-4">
                <div className="flex flex-wrap">
                    <Image
                        src="/2.png"
                        width={500}
                        height={300}
                        alt="hero_banner"
                        className="rounded-lg"
                    />
                    <p className="text-DiagnosGreen text-xl font-bold m-3">Fast, Reliable and Secure!</p>
                    <button className="px-6 py-3 bg-DiagnosRed text-white rounded-full">Book your Test
                    </button>
                </div>
                <div className="flex-col flex-wrap">
                    <h2 className="text-xl font-bold mb-4 underline decoration-wavy underline-offset-8">Why Choose Our Services?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="flex items-center justify-center text-xl font-semibold">
                            <span className="mr-2 text-DiagnosGreen">✔</span>Affordable Health Tests
                        </li>
                        <li className="flex items-center justify-center text-xl font-semibold">
                            <span className="mr-2 text-DiagnosGreen">✔</span>100% Accurate Lab Reports
                        </li>
                        <li className="flex items-center justify-center text-xl font-semibold">
                            <span className="mr-2 text-DiagnosGreen">✔</span>Vacutainer Blood Collection
                        </li>
                        <li className="flex items-center justify-center text-xl font-semibold">
                            <span className="mr-2 text-DiagnosGreen">✔</span>Daily Quality Control Checks
                        </li>
                        <li className="flex items-center justify-center text-xl font-semibold">
                            <span className="mr-2 text-DiagnosGreen">✔</span>Same-Day Diagnostic Reports
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap items-center justify-center my-8">
                  <HowitWorks></HowitWorks>
                </div>
                <div className="text-center py-6">
                    <h3 className="text-xl font-bold mb-4">Ready to Book Your Home Collection?</h3>
                    <p>Book your appointment <a href="/book" className="text-blue-500 underline">here</a> or call us at +91 84048 02201/14
                    </p>
                </div>
            </div>
        </>
    );
};

export default HomeCollection;
