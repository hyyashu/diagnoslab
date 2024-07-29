import React from "react";
import { cities } from "@/app/constant/constant";

const Presence = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto py-6 text-center">
        <h2 className="text-2xl font-semibold">Our Presence</h2>
        <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm">
          {cities.map((city) => (
            <span key={city}>{city}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presence;
