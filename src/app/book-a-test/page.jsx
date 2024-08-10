"use client";
import HowitWorks from "@/components/sections/HowitWorks";
import Faqs from "@/components/sections/Faqs";
import Usp from "@/components/sections/Usp";
import HeroSection from "@/components/sections/HeroSection";
import useFetch from "@/lib/useFetch";
import TestCard from "@/components/TestCard";

const BookaTest = () => {
  const { data, loading, error } = useFetch("/dataP.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const packageData = data?.slice(0, 4) || [];
  if (packageData.length === 0) return <p>Package was not found</p>;
  return (
    <>
      <div className="flex-col md:flex justify-around">
        <HeroSection />
        <div className="flex-col flex-wrap">
          <p className="text-DiagnosGreen text-xl text-center font-bold m-3">
            Fast, Reliable and Secure!
          </p>
          <h2 className="text-DiagnosGreen text-xl text-center font-bold m-3">
            Top Booked Packages
          </h2>
          <div className="flex flex-wrap items-center">
            {packageData.map((test, index) => (
              <div
                className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                key={index}
              >
                <TestCard
                  name={test.name}
                  originalPrice={test.originalPrice}
                  discountedPrice={test.discountedPrice}
                  parameters={test.parameters}
                />
              </div>
            ))}
          </div>
          <Usp />
        </div>
        <div className="flex flex-wrap items-center justify-center my-1">
          <HowitWorks />
        </div>
        <div className="p-2">
          <div className="bg-white border rounded-lg shadow-md">
            <Faqs />
          </div>
        </div>
        <div className="flex bg-gradient-to-l to-primary from-red-400 p-2 rounded-xl items-center justify-evenly text-white mx-10">
          <a
            href="https://wa.me/918404802201?text=Hi%2C%20Can%20you%20assist%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <p className="font-bold text-lg">Connect on Whatsapp</p>
            <div className="border px-2 py-1 rounded-full bg-yellow-50 ml-2">
              <i className="fa-brands fa-whatsapp text-green-600 text-center text-5xl"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default BookaTest;
