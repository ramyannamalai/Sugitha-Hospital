import React from "react";
import Header from "./Header";
import GalleryImage from "../Components/Gallery/Galleryimage";
import GalleryBanner from "../Components/Gallery/GalleryBanner";
import Footer from "./Footer";

const Gallery = () => {
  return (
    <div>
      <Header />

      <GalleryBanner />

      <GalleryImage />

      <Footer/>

    </div>
  );
};

export default Gallery;
