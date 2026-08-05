import React from 'react'
import HeroSection from './Components/HeroSection'
import AboutPage from './Components/AboutPage'
import SkillSection from './Components/SkillSection'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import PixelSnow from './PixelSnow';

function App() {
  return (
     <div className=' relative text-white min-h-screen overflow-x-hidden bg-black'>
<div className='fixed inset-0 pointer-events-none z-0'>
  <PixelSnow 
    color="#ffffff"
    flakeSize={0.01}
    minFlakeSize={1.25}
    pixelResolution={200}
    speed={1.25}
    density={0.7}
    direction={125}
    brightness={1}
    depthFade={0.8}
    farPlane={40}
    gamma={0.4545}
    variant="square"
/>
</div>
<div className='relative z-10'>
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
    </div>
  )
}

export default App
