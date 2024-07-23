'use client'
import { usePathname } from 'next/navigation';
import useFetch from "@/app/hooks/useFetch"
import { FC } from 'react';

interface Package {
    name: string;
    originalPrice: number;
    discountedPrice: number;
    parameters: string[];
    testDescriptions: { [key: string]: string };
    faqs: {
        purpose: string;
        importance: string;
        whoShouldGetTested: string;
    };
}

const packageName: FC = () => {
    const pathname = usePathname();
    const packageName = decodeURIComponent((pathname.split('/').pop()) as string).toLowerCase();
    console.log(packageName)

    const { data, loading, error } = useFetch('/data.json');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>
    const packageData = data?.find((pkg: Package) => pkg.name.toLowerCase() === packageName);
    if (!packageData) return <p>Package was not found</p>;
    return (
        <>
        <div className="flex flex-wrap m-10 gap-4">
            <div className="flex flex-wrap w-[70%]">
                <div className="flex-col flex-wrap w-full border rounded-lg p-2">
                    <h1 className="text-xl font-bold">{packageData.name}</h1>
                    <div className="flex flex-wrap  justify-between">
                        <p>Gender For : Male,Female</p>
                        <p>Report Tat : Same day</p>
                        <p>Over Night : Fasting Required</p>
                        <p>Sample Type : 2ML WB EDT</p>
                    </div>
                </div>
                <div className="flex-col flex-wrap my-3 w-full items-center border rounded-lg p-2">
                    <h1 className="text-xl font-bold">Test Overview</h1>
                    <div className="flex flex-wrap w-full justify-center">
                        <div>Gender For : Male,Female</div>
                    </div>
                </div>
                <div className="flex flex-wrap w-full items-center text-center border rounded-lg p-2">
                    <h4 className="text-xl font-bold">Test Parameters</h4>
                    <div className="flex flex-wrap w-full">
                        {packageData.parameters.map((param: string, index: number) =>
                            (<p className="m-1 p-1 border-DiagnosRed border text-xs rounded">{param}</p>))}
                    </div>
                </div>
                <p className="border rounded p-2 text-DiagnosRed">Purpose:
                    <span className="text-DiagnosGreen"> {packageData.faqs.purpose}</span></p>
                <p className="border rounded p-2 text-DiagnosRed">Importance:
                    <span className="text-DiagnosGreen"> {packageData.faqs.importance}</span></p>
                <p className="border rounded p-2 text-DiagnosRed">Who Should Get Tested:
                    <span className="text-DiagnosGreen"> {packageData.faqs.whoShouldGetTested}</span></p>
                <h2>Test Descriptions</h2>
                <ul>
                    {Object.entries(packageData.testDescriptions).map(([q, a], index) => (
                        <li key={index}>
                            <strong>{q}</strong>: {a}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-wrap w-[25%]">
                <div className="flex-col flex-wrap w-full">
                    <p>Original Price: {packageData.originalPrice}</p>
                    <p>Discounted Price: {packageData.discountedPrice}</p>
                    <div className="text-center w-full border rounded pb-2">
                        <p className="font-bold bg-gray-300">Can't decide the test?</p>
                        <p className="p-3">Schedule a blood test or health checkup and have the convenience of being tested in the comfort of your own home.</p>
                        <button className="p-2 bg-DiagnosRed text-white rounded-full">Call Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default packageName;
