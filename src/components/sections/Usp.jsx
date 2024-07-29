import React from "react";

const Usp = () => {
  const features = [
    {
      id: 1,
      icon: "🔹",
      title: "Affordable Health Tests",
      description: "This is a sample text. Insert your desired text here.",
    },
    {
      id: 2,
      icon: "🔹",
      title: "100% Accurate Lab Reports",
      description: "This is a sample text. Insert your desired text here.",
    },
    {
      id: 3,
      icon: "🔹",
      title: "Vacutainer Blood Collection",
      description: "This is a sample text. Insert your desired text here.",
    },
    {
      id: 4,
      icon: "🔹",
      title: "Daily Quality Control Checks",
      description: "This is a sample text. Insert your desired text here.",
    },
    {
      id: 5,
      icon: "🔹",
      title: "Same-Day Diagnostic Reports",
      description: "This is a sample text. Insert your desired text here.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8">
      <div className="bg-gradient-to-r from-primary to-purple-600 rounded-full p-8 text-center text-white lg:w-1/3">
        <h2 className="text-2xl font-bold">WHY CHOOSE US</h2>
      </div>
      <div className="flex flex-col space-y-6 mt-8 lg:mt-0 lg:ml-8 lg:w-2/3">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center space-x-4">
            <div className="bg-gray-200 rounded-full p-4 text-2xl">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usp;
