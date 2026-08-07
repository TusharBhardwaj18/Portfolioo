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
    <div className='projects-container pt-12 md:pt-16 px-4 max-w-3xl mx-auto text-white'>
      <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            PROJECTS 
          </h2>
        </div>
         <div className="flex flex-col items-center gap-8 w-full">
        {ProjectList.slice(0,visible).map((project, index) => (
          <div
            key={project.id}
            className="card background2 p-4 sm:p-6 w-full rounded-2xl flex flex-col justify-between shadow-xl border border-white/5 hover:border-cyan-500/60 transition-all duration-300" >
              <div>
                <div className="w-full aspect-[16/9] overflow-hidden rounded-xl bg-slate-900">
            <img
              src={project.image}
              alt={project.name}
              loading='lazy'
              className="w-full h-full object-fill object-top hover:scale-105 transition-transform duration-500"/>
              </div>
            <h1 className="font-bold text-xl sm:text-2xl mt-4 text-cyan-500 text-center">{project.name}</h1>
            <p className="font-medium text-xs sm:text-sm mt-1 text-gray-300/60 text-center">
              Tech stack : <span className="font-color2">{project.stack}</span>
            </p>
            <p className="description font-color2 text-xs sm:text-sm leading-relaxed mt-2.5 text-center">
              {project.description}
            </p>
            </div>

            <div className="link-container flex items-center justify-center gap-6 mt-5 pt-3.5 border-t border-white/10">
              <a href={project.gitLink} target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-cyan-400 transition-colors" size={22} />
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <IoIosLink className="hover:text-cyan-400 transition-colors" size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="font-color2 flex justify-center mt-10">
      {visible < ProjectList.length && (
        <button 
        onClick={handleView}
        className="background flex items-center gap-1.5 text-gray-400 hover:text-cyan-300 transition-colors cursor-pointer text-sm px-5 py-2.5">
        View more <IoIosArrowDown />
      </button> 
      )
      }
      </div>
      </div>
  )
}

export default Projects
