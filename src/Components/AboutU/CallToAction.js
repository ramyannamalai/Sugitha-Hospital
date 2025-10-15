import React from 'react';
import { FaHospitalAlt } from 'react-icons/fa';

const CallToAction = () => (
  <section className="bg-blue-900 relative py-16 px-6 flex flex-col md:flex-row items-center gap-8 justify-center font-nunito">
    {/* Hospital Icon */}
    <div className="flex-shrink-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <FaHospitalAlt className="text-blue-600" style={{fontSize: "140px"}} />
      </div>
    </div>
    {/* Content */}
    <div className="flex-1 text-left">
      <h6 className="text-white text-2xl italic font-light mb-2">Our Services</h6>
      <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
        Expect Nothing But The Best<br />From Medical Technology
      </h2>
    </div>
    {/* Learn More Button */}
    <div className="flex-shrink-0 flex items-center">
      <a
        href="/services"
        className="bg-cyan-400 hover:bg-cyan-500 text-white text-lg font-bold py-4 px-8 rounded-full transition duration-150 shadow"
      >
        Learn More
      </a>
    </div>
    {/* Hexagon background shapes (optional for enhancement) */}
    {/* Add SVG/absolute positioned elements for background if desired */}
  </section>
);

export default CallToAction;
