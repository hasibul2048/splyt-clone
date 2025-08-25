import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import MessageSecton from './sections/MessageSecton'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSecton />
    </main>
  )
}

export default App