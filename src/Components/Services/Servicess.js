import React from "react";
import {
  FaHeartbeat,
  FaClipboardList,
  FaCut,
  FaBriefcaseMedical,
  FaUserNurse,
  FaSyringe,
  FaAmbulance,
} from "react-icons/fa";
import Header from "../../Screens/Header";
import Footer from "../../Screens/Footer";

const departments = [
  {
    icon: <FaHeartbeat size={40} className="text-white" />,
    title: "Tele Consultation",
    desc: "Connect with our doctors from the comfort of your home.",
  },
  {
    icon: <FaClipboardList size={40} className="text-white" />,
    title: "ECG (Electrocardiogram)",
    desc: "Quick and accurate heart monitoring for early detection.",
  },
  {
    icon: <FaCut size={40} className="text-white" />,
    title: "Laboratory Tests",
    desc: "Reliable diagnostic tests for precise health evaluation.",
  },
  {
    icon: <FaBriefcaseMedical size={40} className="text-white" />,
    title: "Home Visit",
    desc: "Expert medical care delivered right at your doorstep.",
  },
  {
    icon: <FaUserNurse size={40} className="text-white" />,
    title: "Nursing Care",
    desc: "Qualified nurses provide compassionate bedside assistance.",
  },
  {
    icon: <FaSyringe size={40} className="text-white" />,
    title: "Vaccination",
    desc: "Protect yourself and your family with timely immunizations.",
  },
  {
    icon: <FaAmbulance size={40} className="text-white" />,
    title: "24/7 Emergency Support",
    desc: "Fast and reliable emergency care available any time of day.",
  },
];

const Servicess = () => {
  return (
    <>
      <Header />

      <section className="py-24 bg-white text-center font-nunito">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR SERVICES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-[17px]">
            We provide a wide range of trusted medical services designed to ensure your health,
            comfort, and well-being.
          </p>

          {/* 7-Card Grid — Neatly aligned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-teal-500 rounded-full p-6 flex items-center justify-center mb-5">
                  {dept.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.title}</h3>
                <p className="text-gray-600 text-sm md:text-[16px]">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Servicess;
