"use client";

import { usePathname } from "next/navigation";
import useFetch from "@/lib/useFetch";
import React from "react";
import WhyUs from "@/components/sections/WhyUs";
import CallbackForm from "@/components/CallbackForm";
import Faqs from "@/components/sections/Faqs";
import { calculateDiscountPercentage, roundUp } from "@/lib/utils";

const PackageName = () => {
  const pathname = usePathname();
  const packageName = decodeURIComponent(
    pathname.split("/").pop()
  ).toLowerCase();
  const { data, loading, error } = useFetch("/data.json");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const packageData = data?.find(
    (pkg) => pkg.name.toLowerCase() === packageName
  );
  if (!packageData) return <p>Package was not found</p>;

  const { originalPrice, discountedPrice } = packageData;

  return (
    <>
      <div className="flex flex-col p-5 md:flex-row md:gap-8">
        {/* Left Section */}
        <div className="w-full md:w-[70%]">
          <div className="mb-4 border rounded-lg shadow-md ">
            <div className="px-1 bg-primary">
              <h1 className="mb-2 text-3xl font-bold text-white">
                {packageData.name}
              </h1>
            </div>
            <div className="px-4">
              <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <i className="mr-3 text-xl fa-solid fa-genderless text-primary-500"></i>
                  <p className="text-gray-700">Gender For: Male, Female</p>
                </div>
                <div className="flex items-center mb-2 md:mb-0">
                  <i className="mr-3 text-xl fa-solid fa-clock text-primary"></i>
                  <p className="text-gray-700">Report TAT: Same day</p>
                </div>
                <div className="flex items-center mb-2 md:mb-0">
                  <i className="mr-3 text-xl fa-solid fa-moon text-primary"></i>
                  <p className="text-gray-700">Overnight: Fasting Required</p>
                </div>
                <div className="flex items-center mb-2 md:mb-0">
                  <i className="mr-3 text-xl fa-solid fa-flask text-primary"></i>
                  <div>
                    <p className="text-gray-700">Sample Type: 2ML WB EDT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center w-full rounded md:w-max boder bg-gradient-to-r to-primary from-red-300">
            <i className="m-2 text-xl text-white fa-solid fa-house-medical"></i>
            <p className="m-2 font-medium text-white">
              Home Collection Available
            </p>
          </div> */}
          <div className="bg-white border rounded-lg shadow-md">
            <div className="flex items-center px-1 mb-2 bg-primary">
              <i className="m-2 text-xl text-white fa-solid fa-list-check"></i>
              <p className="text-lg font-bold text-white">
                Parameters Included: {packageData.parameters}
              </p>
            </div>
            <div className="px-4">
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
          <div className="p-1 mt-1 bg-white border rounded-lg shadow-md">
            <p className="p-2 mb-2 font-semibold text-primary">
              Purpose:{" "}
              <span className="text-black">{packageData.faqs.purpose}</span>
            </p>
            <p className="p-2 mb-2 font-semibold text-primary">
              Importance:{" "}
              <span className="text-black">{packageData.faqs.importance}</span>
            </p>
            <p className="p-2 mb-2 font-semibold text-primary">
              Who Should Get Tested:{" "}
              <span className="text-black">
                {packageData.faqs.whoShouldGetTested}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap">
            <CallbackForm layout="landscape" showFAQ={false} />
          </div>
          <div className="bg-white border rounded-lg shadow-md ">
            <Faqs />
          </div>
          <WhyUs />
        </div>
        {/* Right Section */}
        <div className="w-full md:w-[30%] items-center">
          <div className="text-center bg-white border rounded-lg shadow-md">
            <p className="py-2 font-bold text-white rounded-t-lg bg-primary">
              Instant Callback Now
            </p>
            <div className="p-4">
              <p className="mb-2 text-xl font-semibold">Exclusive Offer</p>
              <div className="flex items-center justify-center">
                <p className="mr-2 text-gray-500">
                  {roundUp(
                    calculateDiscountPercentage(originalPrice, discountedPrice)
                  )}
                  % off
                </p>
                <p className="mr-2 text-gray-500 line-through">
                  ₹{originalPrice}
                </p>
                <p className="text-xl font-bold text-DiagnosGreen">
                  ₹{discountedPrice}
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
