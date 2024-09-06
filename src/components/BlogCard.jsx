import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, imgUrl, author, category: category, updatedAt }) => {
  return (
    <div className="text-white rounded-lg bg-primary">
      <Image
        className="object-cover w-full h-48 rounded-lg"
        src={imgUrl}
        height="100"
        width="100"
        alt={title`img`}
      />
      <div className="p-4 text-white rounded-lg">
        <div>
          <h3 className="font-bold text-l">{title}</h3>
          <h4 className="">Posted By:{author}</h4>
        </div>
        <div className="flex flex-wrap items-center mb-1 justify-evenly">
          <div className="flex flex-wrap w-[50%] items-center">
            <p className="text-sm line-through">{category}</p>
            <p className="text-2xl font-bold tex"></p>
          </div>
          <Link href={`/packages/${name}`} className="items-center">
            <button className="p-2 font-semibold bg-white rounded text-primary">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
