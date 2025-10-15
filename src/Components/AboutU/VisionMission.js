import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa"; // Vision, Mission icons

const VisionMission = () => (
  <section className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white py-14 px-4 font-nunito">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-2">Our Vision & Mission</h2>
      <p className="mb-12 text-blue-200 text-lg font-light">
        Discover the driving force behind our organization.<br />
        <span className="font-semibold">Vision</span> gives us direction and <span className="font-semibold">Mission</span> guides our daily actions.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {/* Vision Card */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative mb-5">
            <div className="bg-cyan-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg mb-2">
              <FaEye />
            </div>
            <span className="absolute top-0 left-0 w-7 h-7 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-lg border-4 border-blue-800 -translate-x-3 -translate-y-3">01</span>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p className="text-blue-100 leading-relaxed px-3">
            To be a healthcare leader, enhancing quality of life through innovation and compassion, setting a new standard for patient-centered care in our community.
          </p>
        </div>
        {/* Mission Card */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative mb-5">
            <div className="bg-cyan-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg mb-2">
              <FaBullseye />
            </div>
            <span className="absolute top-0 left-0 w-7 h-7 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-lg border-4 border-blue-800 -translate-x-3 -translate-y-3">02</span>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-blue-100 leading-relaxed px-3">
            To deliver accessible, personalized, high-quality healthcare using skilled professionals and advanced technology while providing a caring and welcoming environment for all.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default VisionMission;
