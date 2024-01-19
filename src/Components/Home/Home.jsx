import React from 'react'
import Hero from './Hero/Hero'
// import About from '../About/About'
import AboutCard from '../About/AboutCard'
import HAbout from './HAbout'

function Home() {
  return (
    <div>
      <Hero/>
      <div className="marigin"></div>
      <AboutCard/>
      <HAbout/>
    </div>
  )
}

export default Home