import React from 'react'

function AboutPage() {
  return (
     <section
      id="about"
      className="min-h-screen py-10 px-6 sm:px-6 md:px-12 lg:px-24 text-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8  md:mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            About 
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 items-center text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Hi, I'm
              <span className="text-cyan-400"> Tushar </span>
            </h3>

            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-300 -mt-2">
              Full Stack  <span className="text-cyan-400"> MERN </span>Developer
            </h4>
            <div className="space-y-4 md:space-y-6 max-w-3xl font-semibold">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              I'm a passionate Full Stack Developer who enjoys building
              responsive, scalable, and modern web applications.
              I specialize in the MERN Stack and love transforming ideas
              into interactive digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              My expertise includes React.js, Tailwind CSS, JavaScript,
              Node.js, Express.js, MongoDB, REST APIs, and GSAP.
              I focus on writing clean code, creating beautiful user
              interfaces, and building applications that solve
              real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              I enjoy learning new technologies, exploring AI-powered
              applications, and continuously improving my development
              skills. My goal is to work on impactful software products
              while growing as a professional Full Stack Developer.
            </p>
            </div>
            <div className="buttons mt-6 flex flex-wrap gap-4 items-center justify-center">
              <a href="/images/TusharResume neww.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-5 sm:px-6 py-2.5 sm:py-3 text-white font-medium text-sm sm:text-base rounded-2xl hover:bg-cyan-600/80 transition-colors duration-200 cursor-pointer shadow-lg shadow-cyan-500/60">
                 Resume
                </button>
              </a>
            </div>
          </div> 
        </div>
        
    </section>
  )
}

export default AboutPage
