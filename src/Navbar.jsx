import React from "react";
import { Contact, Rocket, Home, User, Wrench } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/"){
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if(element) {
          element.scrollIntoView({ behaviour: "smooth"});
        }
      }, 100);
    }else{
      const element = document.getElementById(id);
      if(element){
        element.scrollIntoView({behavior: "smooth"});
      }
    }
  };
  return (
    <div className="nav-bg flex space-x-4 py-2 items-center justify-center text-white  text-sm sm:text-normal rounded-2xl w-xs sm:font-medium fixed top-6 backdrop:blur-md z-50 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 lg:px-8 bg-white/20 ">
      
      <div onClick = {() => handleScroll("hero")}
       className="flex-row items-center justify-items-center hover:text-cyan-300 hover:cursor-pointer">
        <Home size={15} className="home" />
       <span>Home</span>
      </div>
      <div  onClick = {() => handleScroll("about")}
       className="flex-row items-center justify-items-center hover:text-cyan-300  hover:cursor-pointer">
        <User size={15} className="about" />
       <span>About</span>
      </div>
      <div onClick = {() => handleScroll("skills")}
       className="flex-row items-center justify-items-center hover:text-cyan-300  hover:cursor-pointer">
        <Wrench size={15} className="skills" />
       <span>Skills</span>
      </div>

      <div onClick = {() => handleScroll("projects")}
      className="flex-row items-center justify-items-center hover:text-cyan-300 hover:cursor-pointer">
        <Rocket size={15} className="projects" />
        <span>Projects</span>
      </div>
      <div onClick = {() => handleScroll("contact")}
       className="flex-row items-center justify-items-center hover:text-cyan-300 hover:cursor-pointer">
        <Contact size={15} className="contact" />
   <span>Contact</span>
      </div>
    </div>
  );
}

export default Navbar;
