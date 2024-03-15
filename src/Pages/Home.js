import React from 'react'
import Headers from './Headers.js'
import Footer from './Footer.js'
import Slider from './Slider.js'
import Esports from './Esports.js'
import About from './About/About.js'
const Home = () => {
  return (
    <>
    <div className="Home bg-dark text-white">
        <Headers/>
        <Slider/>
        <Esports/>
        <About/>
        <Footer/>
    </div>
    </>
  )
}

export default Home