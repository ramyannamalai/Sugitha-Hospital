import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
 
const ReactRoute = () => {
  return (
    <Routes>
 
      <Route path="/" element={<Home />} />
     
    </Routes>
  )
}
 
export default ReactRoute