import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import AboutUs from './Screens/AboutUs'
 
const ReactRoute = () => {
  return (
    <Routes>
 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
     
    </Routes>
  )
}
 
export default ReactRoute