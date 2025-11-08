import React from "react";
import Banner from "../Components/Home/Banner";
import Services from "../Components/Home/Services";
import AboutSec from "../Components/Home/AboutSec";
import ContactSec from "../Components/Home/ContactSec";
import Testimonial from "../Components/Home/Testimonials";
import Footer from "./Footer";
import AboutUs from "../Components/AboutU/AboutUs";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner />
      
      <AboutSec />

      <Services />
      <Testimonial />
      <ContactSec />
      <Footer />
    </div>
  );
};

export default Home;
