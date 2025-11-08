import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import AboutUs from './Screens/AboutUs'
import Servicess from './Components/Services/Servicess'
import Contactus from './Components/Contactus.js/Contact'
import Gallery from './Screens/Gallery'

const ReactRoute = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/service" element={<Servicess />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/gallery" element={<Gallery/>} />
      



    </Routes>
  )
}

export default ReactRoute