import React from 'react'
import { SiXdadevelopers } from "react-icons/si";

function HeroSection() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 '>
      <div className='text-center mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto'>
     <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-500 tracking-wider '>TUSHAR BHARDWAJ</h1>
     <h2 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold  text-white/70  mt-2 sm:mt-3'>SOFTWARE </h2>
      <h2 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold  text-white/30  mt-2 inline-flex items-baseline flex-wrap gap-2'>DEVELOPER
      <SiXdadevelopers size={30} className='text-cyan-300 text-2xl sm:text-4xl md:text-5xl lg:text-6xl ' /></h2>  
     <div className='mt-6 sm:mt-8 md:mt-10 mx-auto'>
      <p className='text-white/30 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-2'>
        I transform ideas into modern, high-performance web applications through clean code, thoughtful design, and innovative technology.  
      </p>
     </div>
     </div>
    </div>
  )
}

export default HeroSection
