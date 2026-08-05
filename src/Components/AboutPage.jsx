import React from 'react'

function AboutPage() {
  return (
     <section
      id="about"
      className="min-h-screen py-10 px-6 md:px-12 lg:px-24 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mt-3">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="gap-10 items-center">

          {/* Left */}
          <div className='text-center'>

            <h3 className="text-4xl font-bold leading-tight">
              Hi, I'm
              <span className="text-cyan-400"> Tushar </span>
            </h3>

            <h4 className="text-2xl text-gray-300 mt-3">
              Full Stack MERN Developer
            </h4>

            <p className="text-gray-300 leading-8 mt-8 text-lg">
              I'm a passionate Full Stack Developer who enjoys building
              responsive, scalable, and modern web applications.
              I specialize in the MERN Stack and love transforming ideas
              into interactive digital experiences.
            </p>

            <p className="text-gray-300 leading-8 mt-6 text-lg">
              My expertise includes React.js, Tailwind CSS, JavaScript,
              Node.js, Express.js, MongoDB, REST APIs, and GSAP.
              I focus on writing clean code, creating beautiful user
              interfaces, and building applications that solve
              real-world problems.
            </p>

            <p className="text-gray-300 leading-8 mt-6 text-lg">
              I enjoy learning new technologies, exploring AI-powered
              applications, and continuously improving my development
              skills. My goal is to work on impactful software products
              while growing as a professional Full Stack Developer.
            </p>

            <div className="buttons mt-10 flex flex-wrap gap-4 items-center justify-center">
              <a href="/images/TusharResume neww.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-cyan-500 rounded-2xl   hover:bg-cyan-600 transition">
                 Resume
                </button>
              </a>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default AboutPage
