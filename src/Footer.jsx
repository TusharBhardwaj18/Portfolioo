import React from 'react'


function Footer() {
  return (
    <div>
       <div className="footer-container mt-16 p-3 text-white sm:font-normal text-xs sm:text-lg flex flex-col items-center justify-center">
        <div>
           <a href="https://github.com/TusharBhardwaj18" target="_blank" rel="noopener noreferrer">
                <button className="px-2 py-2  hover:bg-cyan-600 transition">
                  GitHub
                </button>
              </a>
              <a href="https://www.linkedin.com/in/tushar-bh-1112e2" target="_blank" rel="noopener noreferrer">
                <button className="px-2 py-2  hover:bg-cyan-600 transition">
                  LinkedIn
                </button>
              </a>
              <a href="https://twitter.com/tusharbhardwaj" target="_blank" rel="noopener noreferrer">
                <button className="px-2 py-2  hover:bg-cyan-600 transition">
                  Twitter
                </button>
              </a>
        </div>
            <div className="flex gap-1">
             
            <p className="">2026 - Made by <span className="text-cyan-300">Tushar Bhardwaj</span>.</p>
            </div>
            <div className="">
                <p>Built with ReactJs & TailwindCss.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
