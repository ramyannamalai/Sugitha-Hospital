import React from "react";
import { FaHeartbeat, FaClipboardList, FaCut, FaBriefcaseMedical } from "react-icons/fa";

const departments = [
  {
    icon: <FaHeartbeat size={40} className="text-white" />,
    title: "CARDIOLOGY",
    desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
  },
  {
    icon: <FaClipboardList size={40} className="text-white" />,
    title: "DIAGNOSIS",
    desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
  },
  {
    icon: <FaCut size={40} className="text-white" />,
    title: "SURGERY",
    desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
  },
  {
    icon: <FaBriefcaseMedical size={40} className="text-white" />,
    title: "FIRST AID",
    desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          OUR DEPARTMENTS
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Asperiores sunt consectetur impedit nulla molestiae delectus repellat
          laborum dolores doloremque accusantium.
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
              <p className="text-gray-600 text-sm">{dept.desc}</p>
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
