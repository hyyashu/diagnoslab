import React from "react";

const Whatsapp = () => {
  return (
    <div>
      <div className="flex items-center p-2 mx-10 text-white bg-gradient-to-l to-primary from-red-400 rounded-xl justify-evenly">
        <a
          href="https://wa.me/918404802201?text=Hi%2C%20Can%20you%20assist%20me%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <p className="text-lg font-bold">Connect on Whatsapp</p>
          <div className="px-2 py-1 ml-2 border rounded-full bg-yellow-50">
            <i className="text-5xl text-center text-green-600 fa-brands fa-whatsapp"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
