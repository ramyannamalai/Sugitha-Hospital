import React from "react";
import { FaHeartbeat, FaClipboardList, FaCut, FaBriefcaseMedical } from "react-icons/fa";

const departments = [
  {
    icon: <FaHeartbeat size={40} className="text-white" />,
    title: "Tele Consultation",
    desc: "Connect with our doctors from the comfort of your home.",
  },
  {
    icon: <FaClipboardList size={40} className="text-white" />,
    title: "ECG(Electrocardiogram)",
    desc: "Quick and accurate heart monitoring for early detection.",
  },
  {
    icon: <FaCut size={40} className="text-white" />,
    title: "Laboratory Tests",
    desc: "Reliable diagnostic tests for precise health evaluation.",
  },
  {
    icon: <FaBriefcaseMedical size={40} className="text-white" />,
    title: "Home Visit ",
    desc: "Expert medical care delivered right at your doorstep.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white text-center font-nunito">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          OUR SERVICES
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-[17px]">
          We provide a wide range of trusted medical services designed to ensure your health,
           comfort, and well-being.
        </p>

        {/* Department Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-sm rounded-xl hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-teal-500 rounded-full p-6 flex items-center justify-center">
                  {dept.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.title}</h3>
              <p className="text-gray-600  text-sm md:text-[17px]">{dept.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-teal-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-600 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
