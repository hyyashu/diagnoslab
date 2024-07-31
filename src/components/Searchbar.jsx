import Image from "next/image";
import React from "react";

const Searchbar = (route, iconPos, iconsrc, placeholder, otherClasses) => {
  return (
    <div className={` ${otherClasses}`}>
      <Image src={iconsrc} alt="searchbar-icon" className="cursor-pointer" />
    </div>
  );
};

export default Searchbar;
