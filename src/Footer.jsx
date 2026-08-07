import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <div>
       <div className="footer-container mt-16 p-3 text-white sm:font-normal text-xs sm:text-lg flex flex-col items-center justify-center">
        <div className=' space-x-6'>
           <a href="https://github.com/TusharBhardwaj18" target="_blank" rel="noopener noreferrer">
                <button className="px-2 py-2 text-gray-600 hover:text-cyan-300 hover:bg-transparent transition-colors duration-200">
                   <FaGithub size={20} />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/tushar-bh-1112e2" target="_blank" rel="noopener noreferrer">
                <button className="px-2 py-2 text-gray-600 hover:text-cyan-300 hover:bg-transparent transition-colors duration-200">
                  <FaLinkedinIn size={20} />
                </button>
              </a>
              <a href="https://x.com/its_tusharbh" target="_blank" rel="noopener noreferrer">
                <button className="px-2 py-2  text-gray-600 hover:text-cyan-300 hover:bg-transparent transition-colors duration-200">
                  <FaTwitter size={20}  />
                </button>
              </a>
        </div>
            <div className="flex gap-1">
             
            <p className="">© 2026 - Made by <span className="text-cyan-300">Tushar Bhardwaj with ❤️</span></p>
            </div>
            <div className="">
                <p>Built with ReactJs & TailwindCss.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
