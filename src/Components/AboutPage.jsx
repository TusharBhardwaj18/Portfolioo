import React from 'react'
import { Code, Database, Globe, Rocket } from "lucide-react";

function AboutPage() {
  return (
     <section
      id="about"
      className="bg-slate-950 text-white py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
             <span className="text-cyan-400">ABOUT ME</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-8 text-lg">
            I am a passionate Full Stack Developer specializing in the MERN
            Stack (MongoDB, Express.js, React.js, and Node.js). I enjoy
            transforming ideas into responsive, scalable, and user-friendly web
            applications that deliver seamless user experiences.
          </p>

          <p className="text-gray-400 mt-5 leading-8 text-lg">
            I have experience building modern web applications using React.js,
            Tailwind CSS, JavaScript, Node.js, Express.js, and MongoDB. I love
            writing clean, maintainable code and continuously learning new
            technologies to improve my development skills.
          </p>

          <p className="text-gray-400 mt-5 leading-8 text-lg">
            Recently, I developed projects including a <span className="text-cyan-400 font-semibold">Social Media Agent</span> powered by AI and an
            interactive website inspired by the K72 platform using GSAP
            animations. My goal is to contribute to impactful software products
            while growing as a professional full stack developer.
          </p>
          <div>
           <a href="/images/TusharResume neww.pdf"
              target="_blank"
              download="Tushar Resume.pdf">
          <button className="mt-8 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition duration-300">
            Download Resume 
          </button>
          </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition duration-300 border border-slate-800">
            <Code className="text-cyan-400 mb-4" size={40} />
            <h4 className="text-xl font-semibold">Frontend</h4>
            <p className="text-gray-400 mt-2">
              React.js, Tailwind CSS, JavaScript, HTML5, CSS3
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition duration-300 border border-slate-800">
            <Database className="text-cyan-400 mb-4" size={40} />
            <h4 className="text-xl font-semibold">Backend</h4>
            <p className="text-gray-400 mt-2">
              Node.js, Express.js, MongoDB, REST APIs
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition duration-300 border border-slate-800">
            <Globe className="text-cyan-400 mb-4" size={40} />
            <h4 className="text-xl font-semibold">Web Development</h4>
            <p className="text-gray-400 mt-2">
              Responsive Design, API Integration, Git & GitHub
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition duration-300 border border-slate-800">
            <Rocket className="text-cyan-400 mb-4" size={40} />
            <h4 className="text-xl font-semibold">Goal</h4>
            <p className="text-gray-400 mt-2">
              Building scalable applications and continuously learning new
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
