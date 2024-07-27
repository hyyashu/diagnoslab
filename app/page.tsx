"use client";
import "./globals.css";
import useFetch from "@/utils/useFetch";
import TestCard from "@/components/TestCard";
import WhyUs from "@/components/sections/WhyUs";
import { Key } from "react";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const { data, loading, error } = useFetch<any>("/data.json");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const packageData = data.slice(0, 4);
  if (!packageData) return <p>Package was not found</p>;

  return (
    <main className="main">
      <Hero />
      <section className="item-center mt-5">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Most Preferred Packages</h2>
        </div>
        <div className="flex flex-wrap items-center">
          {packageData.map(
            (
              test: {
                name: string;
                originalPrice: number;
                discountedPrice: number;
                parameters: number;
              },
              index: Key | null | undefined
            ) => (
              <div
                className="p-4 w-full  md:w-1/2 lg:w-1/3 xl:w-1/4"
                key={index}
              >
                <TestCard
                  key={index}
                  name={test.name}
                  originalPrice={test.originalPrice}
                  discountedPrice={test.discountedPrice}
                  parameters={test.parameters}
                />
              </div>
            )
          )}
        </div>
      </section>
      <WhyUs />
    </main>
  );
}
