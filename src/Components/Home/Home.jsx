import React from 'react'
import Hero from './Hero/Hero'
// import About from '../About/About'
import AboutCard from '../About/AboutCard'
import HAbout from './HAbout'
import Test from './testionamonal/Test'
import Hprice from './Hprice'

function Home() {
  return (
    <div>
      <Hero/>
      <div className="marigin"></div>
      <AboutCard/>
      <HAbout/>
      <Test/>
      <Hprice/>
    </div>
  )
}

export default Home