'use client'
import { usePathname } from 'next/navigation';
import useFetch from "@/hooks/useFetch"
import { FC } from 'react';


interface Package {
    name: string;
    originalPrice: number;
    discountedPrice: number;
    parameters: number;
    testDescriptions: { [key: string]: string };
    faqs: {
        purpose: string;
        importance: string;
        whoShouldGetTested: string;
    };
}

const PackageName: FC = () => {
    const pathname = usePathname();
    console.log(pathname);
    const packageName = decodeURIComponent((pathname.split('/').pop()) as string).toLowerCase();


    const { data, loading, error } = useFetch<Package[]>('/data.json');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>
    const packageData = data?.find((pkg: Package) => pkg.name.toLowerCase() === packageName);
    if (!packageData) return <p>Package was not found</p>;
    return (
        <>
        <div className="flex flex-col md:flex-row md:h-full m-5 gap-4">
            <div className="flex flex-wrap w-[15%]">
                <div className="flex flex-wrap bg-DiagnosGreen w-full border rounded-lg p-2">
                    <a className="bg-DiagnosGreen text-white  p-2">Package Overview</a>
                </div>
            </div>
            <div className="w-full md:w-[70%]">
                <div className="flex-col flex-wrap w-full border rounded-lg p-2">
                    <h1 className="text-xl font-bold">{packageData.name}</h1>
                    <div className="flex flex-wrap text-xs text-DiagnosGreen  justify-between">
                        <p>Gender For : Male,Female</p>
                        <p>Report Tat : Same day</p>
                        <p>Over Night : Fasting Required</p>
                        <p>Sample Type : 2ML WB EDT</p>
                    </div>
                </div>
                <div className="flex-col flex-wrap w-full items-center border rounded-lg p-2 my-3">
                    <h1 className="text-xl font-bold">Test Overview</h1>
                    <div className="flex flex-wrap w-full justify-center">
                        <div>Gender For : Male,Female</div>
                    </div>
                </div>
                <div className="flex flex-wrap w-full items-center text-center border rounded-lg p-2">
                    <h4 className="text-xl font-bold">Test Parameters {packageData.parameters}</h4>
                    {/*<div className="flex flex-wrap w-full">*/}
                    {/*    {packageData.parameters.map((param: string, index: number) =>*/}
                    {/*        (<p key={index} className="m-1 p-1 border-DiagnosRed border text-xs rounded">{param}</p>))}*/}
                    {/*</div>*/}
                </div>
                <div className="flex flex-wrap w-full border rounded-lg p-2 my-3">
                <p className="border rounded p-2 text-DiagnosRed">Purpose:
                    <span className="text-DiagnosGreen"> {packageData.faqs.purpose}</span></p>
                <p className="border rounded p-2 text-DiagnosRed">Importance:
                    <span className="text-DiagnosGreen"> {packageData.faqs.importance}</span></p>
                <p className="border rounded p-2 text-DiagnosRed">Who Should Get Tested:
                    <span className="text-DiagnosGreen"> {packageData.faqs.whoShouldGetTested}</span></p>
                </div>
                <div className="flex flex-wrap w-full border rounded-lg p-2 my-3">
                    <ul>
                        {Object.entries(packageData.testDescriptions).map(([ques, ans,], index) => (
                            <li key={index}>
                                <strong>{ques}</strong>: {ans}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/*Left Section*/}
            <div className="w-full md:w-[30%]">
                <div className="text-center w-full border rounded pb-2">
                    <p className="font-bold bg-DiagnosRed text-white">Book Now</p>
                    <p className="p-3">Schedule a blood test or health checkup and have the convenience of being tested in the comfort of your own home.</p>
                    <div className="flex-col flex-wrap w-full">
                        <p>Exclusive Offer</p>
                        <div className="flex flex-wrap justify-evenly">
                            <p className="line-through">₹{packageData.originalPrice}</p>
                            <p className="text-DiagnosGreen text-xl font-bold">₹{packageData.discountedPrice}</p>
                        </div>
                        <button className="p-2 bg-DiagnosRed text-white rounded-full">Get Instant Callback Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PackageName;
