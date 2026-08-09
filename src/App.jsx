import React, {useEffect} from 'react'
import { Routes, Route, replace, useNavigate } from "react-router-dom";
import HeroSection from './Components/HeroSection'
import AboutPage from './Components/AboutPage'
import SkillSection from './Components/SkillSection'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import PixelSnow from './PixelSnow';

function App() {
  const navigate = useNavigate()
  useEffect (() =>{
    if('scrollRestoration' in window.history){
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    navigate('/', { replace: true })
  }, [navigate])
  return (
    <>
     <div className='relative text-white min-h-screen overflow-x-hidden bg-black'>
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
       <Routes>
        <Route path='/' element={<main>
          <section id='hero'> <HeroSection /> </section>
          <section id='about'> <AboutPage /> </section>
          <section id='skills'> <SkillSection /> </section>
          <section id='projects'> <Projects /> </section>
          <section id='contact'>  <Contact /> </section>  
            </main>
        }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </div>
    </>
  )
}

export default App
