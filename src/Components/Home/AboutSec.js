import React from "react";
import abtImg from "../../assets/images/abt.jpg"

const AboutUs = () => {
  return (
<section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-0 py-10 bg-white max-w-6xl mx-auto rounded-2xl ">     
     {/* Image Section */}
      <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
        <img
          src={abtImg}
          alt="Doctor"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full md:pl-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          ABOUT US
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable. If you
          are going to use a passage of Lorem Ipsum, you need to be sure there
          isn't anything embarrassing hidden in the middle of text.
        </p>
        <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
