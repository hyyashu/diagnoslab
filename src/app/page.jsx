"use client";
import "./globals.css";
import TestCard from "@/components/TestCard";
import WhyUs from "@/components/sections/WhyUs";
import HeroSection from "@/components/sections/HeroSection";
import useFetch from "@/lib/useFetch";
import AutoOpenDialog from "@/components/Autopop";

export default function Home() {
  const { data, loading, error } = useFetch("/data.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const packageData = data?.slice(0, 4) || [];
  if (packageData.length === 0) return <p>Package was not found</p>;

  return (
    <main className="main">
      <AutoOpenDialog />
      <HeroSection />
      <section className="mt-5 item-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Most Preferred Packages</h2>
        </div>
        <div className="flex flex-wrap items-center">
          {packageData.map((test, index) => (
            <div className="w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4" key={index}>
              <TestCard
                name={test.name}
                originalPrice={test.originalPrice}
                discountedPrice={test.discountedPrice}
                parameters={test.parameters}
              />
            </div>
          ))}
        </div>
      </section>
      <WhyUs />
    </main>
  );
}
