"use client";
import HowitWorks from "@/components/sections/HowitWorks";
import Faqs from "@/components/sections/Faqs";
import Usp from "@/components/sections/Usp";
import HeroSection from "@/components/sections/HeroSection";
import useFetch from "@/lib/useFetch";
import TestCard from "@/components/TestCard";
import PopularTests from "@/components/sections/PopularTests";
import Whatsapp from "@/components/Whatsapp";

const BookaTest = () => {
  const { data, loading, error } = useFetch("/dataP.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const packageData = data?.slice(0, 4) || [];
  if (packageData.length === 0) return <p>Package was not found</p>;
  return (
    <>
      <div className="flex-col justify-around md:flex">
        <HeroSection />
        <div className="flex-col flex-wrap">
          <p className="m-3 text-xl font-bold text-center text-DiagnosGreen">
            Fast, Reliable and Secure!
          </p>
          <h2 className="m-3 text-xl font-bold text-center text-DiagnosGreen">
            Top Booked Packages
          </h2>
          <div className="flex flex-wrap items-center">
            {packageData.map((test, index) => (
              <div
                className="w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4"
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
          <PopularTests />
          <div className="bg-white border rounded-lg shadow-md">
            <Faqs />
          </div>
        </div>
        <Whatsapp />
      </div>
    </>
  );
};

export default BookaTest;
