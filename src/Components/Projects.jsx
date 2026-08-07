import React ,{useState} from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosLink, IoIosArrowDown } from "react-icons/io";
import ProjectList from "../ProjectList";

function Projects() {
  const [visible, setvisible] = useState(2); 

  const handleView = () =>{
    setvisible(ProjectList.length); 
  }
  return (
    <div className='projects-container pt-12 md:pt-16 px-4 md:px-8 max-w-7xl mx-auto text-white'>
      <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            PROJECTS 
          </h2>
        </div>
         <div className="flex flex-col items-center gap-8 md:gap-10 w-full transition-all duration-10000 ease-in-out">
        {ProjectList.slice(0,visible).map((project, index) => (
          <div
            key={project.id}
            className="card background2 p-4 sm:p-6 md:p-8 w-full rounded-2xl flex flex-col justify-between shadow-xl border border-white/5 hover:border-cyan-500/60 transition-all duration-300" >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-xl w-full h-52 sm:h-72 md:h-96 object-fill"/>
            <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 text-cyan-600">{project.name}</h1>
            <p className="font-medium text-xs sm:text-sm md:text-base mt-2 text-gray-300">
              Tech stack : <span className="font-color2">{project.stack}</span>
            </p>
            <p className="description font-color2 text-xs sm:text-sm md:text-base leading-relaxed mt-3">
              {project.description}
            </p>

            <div className="link-container flex items-center justify-center gap-5 mt-6 pt-4 ">
              <a href={project.gitLink} target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-cyan-400 transition-colors" size={24} />
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <IoIosLink className="hover:text-cyan-400 transition-colors" size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="font-color2 flex justify-center mt-10 md:mt-14">
      {visible < ProjectList.length && (
        <button 
        onClick={handleView}
        className="background flex items-center gap-1.5 text-gray-400 hover:text-cyan-300 transition-colors cursor-pointer text-sm sm:text-base px-5 py-2.5">
        View more <IoIosArrowDown />
      </button> 
      )
      }
      </div>
      </div>
  )
}

export default Projects
