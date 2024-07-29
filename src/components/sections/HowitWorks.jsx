import React from "react";

const HowitWorks = () => {
  return (
    <>
      <div className="border w-full">
        <div className="flex flex-col items-center text-center py-8 px-4">
          <p className="text-2xl font-bold text-red-600 mb-8">
            Simple Steps to get your Test done!
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex flex-col items-center w-full md:w-auto">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 14.8v-5.6c0-1.3-1-2.4-2.4-2.4h-11.2c-1.3 0-2.4 1-2.4 2.4v5.6c0 1.3 1 2.4 2.4 2.4h11.2c1.3 0 2.4-1 2.4-2.4zm-7.3 2.4h-3.4c-.2 0-.3-.1-.3-.3v-.3c0-.3.1-.4.3-.4h3.4c.2 0 .3.1.3.3v.3c0 .3-.1.4-.3.4zm4.3-3h-12v-5c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v5zm-2-1.5h-2.7c-.4 0-.8.3-.8.8v1.4c0 .4.3.8.8.8h2.7c.4 0 .8-.3.8-.8v-1.4c0-.5-.4-.8-.8-.8z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">01</p>
              <p className="text-sm font-bold text-red-600">Book</p>
              <p className="text-sm text-gray-600">
                Your Appointment Online or Call Us
              </p>
            </div>
            <div className="hidden md:block w-10 h-2 bg-gray-300"></div>
            <div className="flex flex-col items-center w-full md:w-auto">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-1 17.3c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm1.8-4.8h-3.6v-7.1h3.6v7.1z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">02</p>
              <p className="text-sm font-bold text-red-600">Our Professional</p>
              <p className="text-sm text-gray-600">
                Phlebotomist Visits Your Home
              </p>
            </div>
            <div className="hidden md:block w-10 h-2 bg-gray-300"></div>
            <div className="flex flex-col items-center w-full md:w-auto">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h-4v-2c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2h-4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-6 0h-4v-1h4v1zm6 16h-16v-14h4v1h8v-1h4v14zm-9-6h-2v-4h2v4zm4 0h-2v-6h2v6z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">03</p>
              <p className="text-sm font-bold text-red-600">
                Samples Collected
              </p>
              <p className="text-sm text-gray-600">Safely and Securely</p>
            </div>
            <div className="hidden md:block w-10 h-2 bg-gray-300"></div>
            <div className="flex flex-col items-center w-full md:w-auto">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 0h-16c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-20c0-1.1-.9-2-2-2zm-11 20c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm8-14h-10v2h10v-2zm0 4h-10v2h10v-2zm0 4h-1.8c-1-1.2-2.5-2-4.2-2s-3.1.8-4.2 2h-1.8v-4h12v4z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">04</p>
              <p className="text-sm font-bold text-red-600">
                Receive Your Reports
              </p>
              <p className="text-sm text-gray-600">Online the Same Day</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitWorks;
