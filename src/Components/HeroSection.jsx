import React from 'react'
import {ArrowBigDown} from'lucide-react'

function HeroSection() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-950'>
      <div className='text-center'>
     <h1 className='font-bold text-center justify-center text-cyan-300 text-6xl mr-20  '>TUSHAR BHARDWAJ</h1>
     <h2 className='text-4xl font-semibold  text-white/40 mr-20 mt-2'>SOFTWARE DEVELOPER</h2>
     <div className='mt-10 mx-20'>
      <img src='/images/myimg.jpg' className='w-64 h-64 mx-20 rounded-full object-cover border-4 border-cyan-500 shadow-lg '></img>
      <p className='text-white mt-20 text-xl mr-20'>
        {/* Swipe up<span>  <ArrowBigDown size={24}/></span> */}
      </p>
     </div>
     </div>
    </div>
  )
}

export default HeroSection
