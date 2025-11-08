import React from "react";
import bannerImg from "../../assets/images/gallerybimge.png"; 

const GalleryBanner = () => {
  return (
    <div
      className="w-full h-72 md:h-96 bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="bg-black/40 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-md">
          Our Gallery
        </h1>
      </div>
    </div>
  );
};

export default GalleryBanner;
