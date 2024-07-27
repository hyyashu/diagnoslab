"use client";

import { usePathname } from "next/navigation";
import useFetch from "@/utils/useFetch";
import { FC } from "react";
import WhyUs from "@/components/sections/WhyUs";
import CallbackForm from "@/components/CallbackForm";

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
  const packageName = decodeURIComponent(
    pathname.split("/").pop() as string
  ).toLowerCase();
  const { data, loading, error } = useFetch<Package[]>("/data.json");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const packageData = data?.find(
    (pkg: Package) => pkg.name.toLowerCase() === packageName
  );
  if (!packageData) return <p>Package was not found</p>;

  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-8 p-5">
        {/* Center Section */}
        <div className="w-full md:w-[70%]">
          <div className="bg-white border rounded-lg p-4 shadow-md mb-4">
            <h1 className="text-2xl font-bold mb-2">{packageData.name}</h1>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow-md mb-4 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="flex items-center mb-2 md:mb-0">
                <i className="fa-solid fa-genderless text-blue-500 text-xl mr-3"></i>
                <p className="text-gray-700">Gender For: Male, Female</p>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <i className="fa-solid fa-clock text-blue-500 text-xl mr-3"></i>
                <p className="text-gray-700">Report TAT: Same day</p>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <i className="fa-solid fa-moon text-blue-500 text-xl mr-3"></i>
                <p className="text-gray-700">Overnight: Fasting Required</p>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <i className="fa-solid fa-flask text-blue-500 text-xl mr-3"></i>
                <div>
                  <p className="text-gray-700">Sample Type: 2ML WB EDT</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-list-check text-blue-500 text-xl mr-3"></i>
              <p className="text-xl font-bold text-gray-800">
                Parameters Included: {packageData.parameters}
              </p>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-1 shadow-md mb-4">
            <p className="  p-2 text-DiagnosRed font-semibold mb-2">
              Purpose:{" "}
              <span className="text-black">{packageData.faqs.purpose}</span>
            </p>
            <p className=" p-2 text-DiagnosRed font-semibold mb-2">
              Importance:{" "}
              <span className="text-black">{packageData.faqs.importance}</span>
            </p>
            <p className="p-2 text-DiagnosRed font-semibold mb-2">
              Who Should Get Tested:{" "}
              <span className="text-black">
                {packageData.faqs.whoShouldGetTested}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center ">
            <CallbackForm />
          </div>
          <WhyUs />
          <div className="bg-white border rounded-lg p-4 shadow-md">
            <ul className="list-disc list-inside">
              {Object.entries(packageData.testDescriptions).map(
                ([ques, ans], index) => (
                  <li key={index} className="mb-2">
                    <strong>{ques}:</strong> {ans}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-[30%] items-center">
          <div className="bg-white border rounded-lg shadow-md text-center">
            <p className="font-bold bg-DiagnosRed text-white py-2 rounded-t-lg">
              Instant Callback Now
            </p>
            <div className="p-4">
              <p className="mb-2 font-semibold text-xl">Exclusive Offer</p>
              <div className="flex justify-center items-center">
                <p className="line-through text-gray-500 mr-2">
                  ₹{packageData.originalPrice}
                </p>
                <p className="text-DiagnosGreen text-xl font-bold">
                  ₹{packageData.discountedPrice}
                </p>
              </div>
              <CallbackForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageName;
