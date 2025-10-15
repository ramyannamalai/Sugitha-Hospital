import React from 'react'
import Banner from '../Components/Home/Banner'
import Services from '../Components/Home/Services'
import AboutSec from '../Components/Home/AboutSec'
import ContactSec from '../Components/Home/ContactSec'
import Testimonial from '../Components/Home/Testimonials'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Banner />
    <Services />
    <AboutSec />
    <ContactSec />
        <Testimonial />
        <Footer/>

    </div>
  )
}

export default Home