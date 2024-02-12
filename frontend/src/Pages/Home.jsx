import React from 'react'
import HeroSection from '../Component/HeroSection'
import About from '../Component/About'
import Qualities from '../Component/Qualities'
import Menu from '../Component/Menu'
import WhoAreWe from '../Component/WhoAreWe'
import Team from '../Component/Team'
import Reservation from '../Component/Reservation'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <>
        <HeroSection />
        
        <Qualities />
        <Menu />

        <Reservation />

        <WhoAreWe />
        <Team />
        <About/>
        <Footer />
    </>
  )
}

export default Home
