import React from "react";

const Usp = () => {
  const features = [
    {
      id: 1,
      icon: "fas fa-money-bill",
      title: "Affordable Health Tests",
    },
    {
      id: 2,
      icon: "fas fa-check-circle",
      title: "100% Accurate Lab Reports",
    },
    {
      id: 3,
      icon: "fas fa-vials",
      title: "Vacutainer Blood Collection",
    },
    {
      id: 4,
      icon: "fas fa-clipboard-check",
      title: "Daily Quality Control Checks",
    },
    {
      id: 5,
      icon: "fas fa-calendar-day",
      title: "Same-Day Diagnostic Reports",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8">
      <div className="bg-gradient-to-r from-primary to-red-400 rounded-full p-8 text-center text-white lg:w-1/3">
        <h2 className="text-2xl font-bold">WHY CHOOSE US</h2>
      </div>
      <div className="flex flex-col space-y-6 mt-8 lg:mt-0 lg:ml-8 lg:w-2/3">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center space-x-4">
            <i
              className={`bg-gray-200 ${feature.icon} rounded-full p-3 text-xl`}
            ></i>
            <div>
              <h3 className="font-bold">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usp;
