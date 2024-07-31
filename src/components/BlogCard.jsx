import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, imgUrl, author, category: category, updatedAt }) => {
  return (
    <div className="rounded-lg bg-primary text-white">
      <Image
        className="rounded-lg w-full h-48 object-cover"
        src={imgUrl}
        height="100"
        width="100"
        alt={title`img`}
      />
      <div className="rounded-lg p-4 text-white">
        <div>
          <h3 className="font-bold text-l">{title}</h3>
          <h4 className="">Posted By:{author}</h4>
        </div>
        <div className="flex flex-wrap justify-evenly items-center mb-1">
          <div className="flex flex-wrap w-[50%] items-center">
            <p className="line-through text-sm">{category}</p>
            <p className="font-bold text-2xl tex"></p>
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

export default BlogCard;
