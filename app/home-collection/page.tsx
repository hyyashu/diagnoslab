"use client"
import useFetch from '../hooks/useFetch';
import Image from "next/image";

const HomeCollection = () => {
    const {data, loading, error} = useFetch('/home-collection.json');

    if (loading) return <div className="loader"></div>
    if (error) return <div>Error: {error.message}</div>;
    return (
        <>

            <div className="flex flex-wrap items-center justify-center mx-auto p-4 text-center border-2">
                <div className="border-2 rounded-lg border-DiagnosRed p-4">
                    <h1 className="text-4xl font-bold ">Get your tests done from the comfort of your home.
                        <p className="text-DiagnosGreen">Fast, Reliable and Secure!</p></h1>
                    <button className="mt-4 px-6 py-3 bg-DiagnosRed text-white rounded-full">Schedule Your Collection
                    </button>
                </div>
                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Our Home Collection Services?</h2>
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
                    <h2 className="text-2xl font-semibold mb-4">How Our Home Collection Service Works?</h2>
                    <Image
                        src="/how-it-works.png"
                        width={1024}
                        height={1024}
                        alt="hero_banner"
                        className="rounded-lg "
                    />
                </div>
                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
                    {/* Add testimonials here */}
                </div>
                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
                    {data.faq.map((faqItem: any, index: number) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-xl font-medium">{faqItem.question}</h3>
                            <p>{faqItem.answer}</p>
                        </div>
                    ))}
                </div>
                <footer className="text-center py-6">
                    <h3 className="text-xl font-bold mb-4">Ready to Book Your Home Collection?</h3>
                    <p>
                        Book your appointment <a href="/book" className="text-blue-500 underline">here</a> or call us at
                        +91 8404802201/14
                    </p>
                </footer>
            </div>
            <div></div>
        </>
    );
};

export default HomeCollection;
