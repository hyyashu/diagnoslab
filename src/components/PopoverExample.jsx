import React, { useState, useEffect } from "react";
import CallbackForm from "./CallbackForm";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const PopoverExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   // Open the popover after 5 seconds
  //   const timer = setTimeout(() => {
  //     setIsOpen(true);
  //   }, 5000);

  //   // Clean up the timer on component unmount
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="flex items-center justify-center">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          {/* <button className="px-4 py-2 font-bold text-white bg-green-500 rounded">
            Get A Callback
          </button> */}
          <a className="px-4 py-2 font-bold text-white bg-green-500 rounded">
            Get A Callback
          </a>
        </PopoverTrigger>
        <PopoverContent className="p-1 bg-white border border-gray-300 rounded shadow-lg">
          <CallbackForm showFAQ={false} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverExample;
