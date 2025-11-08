import React from "react";
import img1 from "../../assets/images/1.jpeg";
import img2 from "../../assets/images/2.jpeg";
import img3 from "../../assets/images/3.jpeg";
import img4 from "../../assets/images/4.jpeg";
import img5 from "../../assets/images/5.jpeg";

const GalleryImage = () => {
  const images = [img1, img2, img3, img4, img5]; // ✅ Only 5 images

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B2545] mb-10">
          Our <span className="text-teal-600">Gallery</span>
        </h2>

        {/* ✅ 3 images in 1st row, 2 in 2nd row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {images.slice(0, 3).map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 bg-white"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
          {images.slice(3).map((src, index) => (
            <div
              key={index + 3}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 bg-white"
            >
              <img
                src={src}
                alt={`Gallery ${index + 4}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryImage;
