import React, { useState, useEffect } from "react";
import bg from "../../assets/images/imgi_1_hero-bg.png";

const slides = [
  {
    title: "WE PROVIDE BEST HEALTHCARE",
    description:
      "Explicabo esse amet tempora quibusdam laudantium, laboru eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias.",
    buttonText: "Read More",
  },
  {
    title: "YOUR HEALTH IS OUR PRIORITY",
    description:
      "We ensure quality care with experienced doctors, advanced technology, and a compassionate approach to your well-being.",
    buttonText: "Discover More",
  },
  {
    title: "COMPASSIONATE MEDICAL CARE",
    description:
      "Trusted by families for excellence in diagnosis, treatment, and holistic healthcare solutions tailored to your needs.",
    buttonText: "Learn More",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
className="relative h-[750px] flex items-center bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${bg})`, // ✅ Correct way to apply imported image
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-teal-700/70"></div> */}

      {/* Content */}
      <div className="relative z-10 text-white px-10 md:px-20 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {slides[current].title}
        </h1>
        <p className="mb-6 text-sm md:text-base leading-relaxed">
          {slides[current].description}
        </p>
        <button className="bg-white text-teal-700 font-semibold px-6 py-2 rounded-md hover:bg-teal-100 transition">
          {slides[current].buttonText}
        </button>
      </div>

      {/* Dots (black color) */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              index === current ? "bg-white" : "bg-black/40"
            }`}
          ></span>
        ))}
      </div>

      {/* Curved bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          {/* <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,80C672,64,768,64,864,85.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path> */}
        </svg>
      </div>
    </div>
  );
};

export default Banner;
