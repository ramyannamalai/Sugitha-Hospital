import React from "react";
import abtImg from "../../assets/images/abt.jpg"

const AboutSec = () => {
  return (
<section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-0 py-10 bg-white max-w-6xl mx-auto rounded-2xl font-nunito ">     
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
        <p className="text-gray-600 leading-relaxed mb-6 text-justify text-sm md:text-[17px]">
        At Dr.Sujitha Hospital, we are dedicated to providing compassionate, high-quality healthcare for individuals and families. Our mission is to deliver accessible and personalized medical services that focus on your overall well-being.

With a team of experienced doctors, nurses, and healthcare professionals, we offer a wide range of services including OPD consultations, tele-consultations, ECG, laboratory tests, home visits, and specialist care — all under one roof.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutSec;
