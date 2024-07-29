import React from "react";
import Link from "next/link";

const TestCard = ({ name, originalPrice, discountedPrice, parameters }) => {
  return (
    <div className="rounded-lg bg-primary text-white">
      <img
        className="rounded-lg w-full h-48 object-cover"
        src="https://www.pathkindlabs.com/assets/tests_images/2.png"
        height="100"
        width="100"
        alt={name}
      />
      <div className="rounded-lg p-4 text-white">
        <div>
          <h3 className="font-bold text-l">{name}</h3>
          <h4 className="">Parameters: {parameters}</h4>
        </div>
        <div className="flex flex-wrap justify-evenly items-center mb-1">
          <div className="flex flex-wrap w-[50%] items-center">
            <p className="line-through text-sm">{`₹${originalPrice}`}</p>
            <p className="font-bold text-2xl tex">{`₹${discountedPrice}`}</p>
          </div>
          <Link href={`/packages/${name}`} className="items-center">
            <button className="bg-white p-2 text-primary font-semibold rounded">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
