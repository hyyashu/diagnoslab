import React from "react";

// Step data
const steps = [
  {
    id: 1,
    icon: "fas fa-calendar-check",
    number: "01",
    title: "Book Your Appointment",
    description: "Online or by Phone",
  },
  {
    id: 2,
    icon: "fas fa-user-md",
    number: "02",
    title: "Our Professional",
    description: "Phlebotomist Visits You",
  },
  {
    id: 3,
    icon: "fas fa-vial",
    number: "03",
    title: "Samples Collected",
    description: "Safely & Securely",
  },
  {
    id: 4,
    icon: "fas fa-file-alt",
    number: "04",
    title: "Receive Reports",
    description: "Online Same Day",
  },
];

const HowitWorks = () => {
  return (
    <>
      <div className="border w-full">
        <div className="flex flex-col items-center text-center py-8 px-4">
          <p className="text-2xl font-bold text-red-600 mb-8">
            Simple Steps to get your Test done!
          </p>
          <div className="flex justify-evenly items-center text-center w-full gap-1">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2">
                  <i className={`text-white text-3xl ${step.icon}`} />
                </div>
                <p className="text-sm text-gray-600">{step.number}</p>
                <p className="text-sm font-bold text-red-600">{step.title}</p>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitWorks;
