
import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import TestEffect from './component/TestEffect'
import Home from "./component/Home"
import Footer from "./component/Footer"
function App() {

  const [allVideo, setallVideo] = useState([])

  return (
    <>
      <Navbar />      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/testeffect' element={<TestEffect />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

