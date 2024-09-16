import React from "react";
import Link from "next/link";
import { createSlug } from "@/lib/slugify";

const TestCard = ({
  cardType,
  name,
  originalPrice,
  discountedPrice,
  parameters,
}) => {
  const discountPercentage = Math.ceil(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );
  return (
    <div className="text-white rounded-lg bg-primary">
      <img
        className="object-cover w-full h-48 rounded-lg"
        src="https://www.pathkindlabs.com/assets/tests_images/2.png"
        height="100"
        width="100"
        alt={name}
      />
      <div className="p-4 text-white rounded-lg">
        <div>
          <h3 className="font-bold text-l">{name}</h3>
          <h4 className="">Parameters: {parameters}</h4>
        </div>
        <div className="flex flex-wrap items-center mb-1 justify-evenly">
          <div className="flex flex-wrap w-[50%] items-center">
            <p className="text-sm line-through">{`₹${originalPrice}`}</p>
            <p className="text-2xl font-bold tex">{`₹${discountedPrice}`}</p>
            <div className="">{`${discountPercentage}% OFF`}</div>
          </div>

          <Link
            href={`/${cardType}/${createSlug(name)}`}
            className="items-center"
          >
            <button className="p-2 font-semibold bg-white rounded text-primary">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
