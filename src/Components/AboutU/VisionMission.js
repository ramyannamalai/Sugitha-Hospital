import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => (
  <section className="relative bg-gradient-to-b from-teal-900 via-teal-800 to-blue-900 text-white py-16 px-6 font-nunito overflow-hidden">
    <div className="max-w-6xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-white tracking-wide">
        Our Vision & Mission
      </h2>
      <p className="mb-12 text-teal-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
        Discover the driving force behind our organization. <br />
        <span className="font-semibold text-white">Vision</span> gives us direction and{" "}
        <span className="font-semibold text-white">Mission</span> guides our daily actions.
      </p>

      {/* Vision & Mission Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16">
        {/* Vision Card */}
        <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-teal-400 w-20 h-20 rounded-full flex items-center justify-center text-4xl text-white shadow-lg transform hover:scale-110 transition-transform duration-300">
              <FaEye />
            </div>
            <span className="absolute -top-3 -left-3 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center font-bold text-sm border-4 border-teal-900">
              01
            </span>
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-white">Our Vision</h3>
          <p className="text-teal-100 leading-relaxed">
            To be a healthcare leader, enhancing quality of life through innovation
            and compassion — setting a new standard for patient-centered care
            in our community.
          </p>
        </div>

        {/* Mission Card */}
        <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-teal-400 w-20 h-20 rounded-full flex items-center justify-center text-4xl text-white shadow-lg transform hover:scale-110 transition-transform duration-300">
              <FaBullseye />
            </div>
            <span className="absolute -top-3 -left-3 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center font-bold text-sm border-4 border-teal-900">
              02
            </span>
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-white">Our Mission</h3>
          <p className="text-teal-100 leading-relaxed">
            To deliver accessible, personalized, high-quality healthcare using skilled
            professionals and advanced technology — providing a caring and welcoming
            environment for all.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default VisionMission;
