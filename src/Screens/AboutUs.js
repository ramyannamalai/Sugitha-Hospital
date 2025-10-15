import React from "react";
import abtImg from "../assets/images/abt.jpg";
import Breadcrumbs from "../Components/AboutU/Breadcrumbs";
import VisionMission from "../Components/AboutU/VisionMission";
import Testimonial from "../Components/Home/Testimonials";
import CallToAction from "../Components/AboutU/CallToAction";

const AboutUs = () => {
  return (
    <>
      <Breadcrumbs />
      {/* Section with image and paragraph side by side */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-0 py-10 bg-white max-w-6xl mx-auto font-nunito">
        <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
          <img
            src={abtImg}
            alt="Doctor"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full md:pl-6 text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          ABOUT US
        </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-justify text-sm md:text-[17px]">
            At Dr.Sujitha Hospital, we are dedicated to providing compassionate,
            high-quality healthcare for individuals and families. Our mission is
            to deliver accessible and personalized medical services that focus on
            your overall well-being.

            With a team of experienced doctors, nurses, and healthcare
            professionals, we offer a wide range of services including OPD
            consultations, tele-consultations, ECG, laboratory tests, home visits,
            and specialist care — all under one roof.
          </p>
        </div>
      </section>

      {/* Separate div for the rest of the paragraph */}
      <div className="md:max-w-6xl w-full md:pl-6 text-left md:text-left mx-auto px-0 py-4">
        <p className="text-gray-600 leading-relaxed mb-6 text-justify text-sm md:text-[17px]">
          We believe that every patient deserves attentive care, clear
          communication, and a comfortable environment. Our clinic is designed to
          ensure a calm, hygienic, and patient-friendly experience, making every
          visit pleasant and reassuring.

          Your health is our priority, and we’re committed to supporting you on
          every step of your wellness journey.
        </p>
      </div>
      <VisionMission />
      <Testimonial />
    </>
  );
};

export default AboutUs;
