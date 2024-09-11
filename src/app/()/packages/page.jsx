'use client'
import React from "react";
import useFetch from "@/lib/useFetch";
import TestCard from "@/components/TestCard";


const Packages = () => {
  const { data, loading, error } = useFetch('/data.json');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>HeaPackages</h1>
      <div className="flex flex-wrap items-center">
        {data.map((test, index) => (
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
    </div>
  );
};

export default Packages;
