import React from 'react'
import {ArrowBigDown} from "lucide-react"
import { SiXdadevelopers } from "react-icons/si";

function HeroSection() {
  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div className='text-center mt-20'>
     <h1 className='font-bold text-center justify-center text-cyan-300 text-7xl    '>TUSHAR BHARDWAJ</h1>
     <h2 className='text-8xl font-bold  text-white/70  mt-2'>SOFTWARE </h2>
      <h2 className='text-8xl font-bold  text-white/40  mt-2 inline-flex items-baseline gap-2'>DEVELOPER
      <SiXdadevelopers size={30} className='text-cyan-300 ' /></h2>  
     <div className='mt-10 mx-20'>
      {/* <img src='/images/myimg.jpg' className='w-20 h-20 mx-20 rounded-full object-cover border-4 border-cyan-500 shadow-lg '></img> */}
      <p className='text-white/30 -mt-5 text-md sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed'>
        I transform ideas into modern, high-performance web applications through clean code, thoughtful design, and innovative technology.  
        {/* Swipe up<span>  <ArrowBigDown size={24}/></span> */}
      </p>
     </div>
     </div>
    </div>
  )
}

export default HeroSection
