import React from 'react'
import HeroSection from './Components/HeroSection'
import AboutPage from './Components/AboutPage'
import SkillSection from './Components/SkillSection'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
      <HeroSection />
      <AboutPage />
      <SkillSection />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
