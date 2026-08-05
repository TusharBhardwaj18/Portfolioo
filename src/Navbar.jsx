import React from 'react'
import {Contact, Rocket, Home, User, Wrench} from 'lucide-react';

function Navbar() {
  return (
      <div className="nav-bg flex space-x-4 py-2 items-center justify-center text-white  text-sm sm:text-normal rounded-2xl w-xs sm:font-medium fixed top-6 backdrop:blur-md z-50 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 lg:px-8 bg-white/20 ">
        <div
          className="flex-row items-center justify-items-center hover:text-cyan-300 hover:cursor-pointer"
        >
          <Home size={15} className="home" />
          <p>Home</p>
        </div>
        <div
          className="flex-row items-center justify-items-center hover:text-cyan-300  hover:cursor-pointer"
        >
          <User size={15} className="about" />
          <p>About</p>
        </div>
        <div
          className="flex-row items-center justify-items-center hover:text-cyan-300  hover:cursor-pointer"
        >
          <Wrench size={15} className="skills" />
          <p>Skills</p>
        </div>
        
        <div
          className="flex-row items-center justify-items-center hover:text-cyan-300 hover:cursor-pointer"

        >
          <Rocket size={15} className="projects" />
          <p>Projects</p>
        </div>
        <div
          className="flex-row items-center justify-items-center hover:text-cyan-300 hover:cursor-pointer"
        >
          <Contact size={15} className="contact" />
          <p>Contact</p>
        </div>
      </div>
  )
}

export default Navbar
