"use client";
import React from "react";
import useFetch from "@/lib/useFetch";
import TestCard from "@/components/TestCard";
import PopoverExample from "@/components/PopoverExample";

const Packages = () => {
  const { data, loading, error } = useFetch("/data.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="p-10 text-xl font-bold bg-primary">
        A Test Menu designed for you health
      </div>
      <h1 className="p-5 m-5 text-xl text-center bg-red-50 md:">
        Most Booked Health Packages
      </h1>
      <div className="flex flex-wrap items-center">
        {data.map((test, index) => (
          <div className="w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4" key={index}>
            <TestCard
              cardType={"tests"}
              name={test.name}
              originalPrice={test.originalPrice}
              discountedPrice={test.discountedPrice}
              parameters={test.parameters}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
