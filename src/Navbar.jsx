import React from 'react'
// import Button from './Components/Button'
import {Menu} from 'lucide-React';

function Navbar() {
  const navlinks = [
    {href: '#about', label: 'About'},
    {href: '#projects', label: 'Projects'},
    {href: '#skills', label: 'Skills'},
  ]
  return (
    <header className='fixed object-cover top-0 left-0 right-0 bg-transparent py-5'>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href='#' className='text-xl font-bold tracking-tight hover:text-black'></a>
    <div className='hidden md:flex items-center gap-1'>
      <div className='glass rounded-full px-2 py-1 flex bg-white/20 items-center gap-1'>
        {navlinks.map((link, index) =>(
          <a href={link.href} key={index} className='px-4 py-2 tex-sm text-white/70  hover:text-cyan-400 rounded-full'>
            {link.label}
          </a>
        ))}
      </div>
    </div>
    <div className='hidden md:block'>
      <button className=' rounded-full bg-white/20 hover:bg-blue-300/80 px-2 py-1 text-white/70'>Contact Me</button>
    </div>
    <button className='md:hidden p-2 text-white'>
      <Menu size={24}/>
    </button>
      </nav>
    </header>
  )
}

export default Navbar
