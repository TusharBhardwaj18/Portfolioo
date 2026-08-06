import React, { useState } from "react";
import { motion } from "framer-motion";
import {Maximize2,Filter} from "lucide-react";
import { FaHtml5, FaCss3, FaJs, FaJava, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiRedux, SiPostman, SiCplusplus, SiC, SiGit, SiMysql, SiGsap, SiReactrouter, SiMongodb } from "react-icons/si";

const skillsData = [
  { id: 1, name: "HTML", category: "frontend", icon: FaHtml5, color: "#E44D26", x:9, y: 10 },
  { id: 2, name: "CSS", category: "frontend", icon: FaCss3, color: "#264DE4", x: 28, y: 25 },
  { id: 3, name: "JavaScript", category: "frontend", icon: FaJs, color: "#F7DF1E", x: 44, y: 17 },
  { id: 4, name: "C", category: "language", icon: SiC, color: "#00599C", x: 60, y: 25 },
  { id: 5, name: "C++", category: "language", icon: SiCplusplus, color: "#00599C", x: 72, y: 15 },
  { id: 6, name: "Java", category: "language", icon: FaJava, color: "#5382A1", x: 86, y: 26 },
  { id: 7, name: "Python", category: "language", icon: FaPython, color: "#3776AB", x: 10, y: 30 },
  { id: 8, name: "Git", category: "tools", icon: SiGit, color: "#F05032", x: 25, y: 40 },
  { id: 9, name: "MySQL", category: "backend", icon: SiMysql, color: "#4479A1", x: 38, y: 46 },
  { id: 10, name: "NodeJs", category: "backend", icon: FaNodeJs, color: "#339933", x: 53, y: 47 },
  { id: 11, name: "ReactJs", category: "frontend", icon: FaReact, color: "#61DAFB", x: 70, y: 40 },
  { id: 12, name: "React Router", category: "backend", icon: SiReactrouter, color: "#CA4245", x: 84, y: 50 },
  { id: 13, name: "Redux", category: "frontend", icon: SiRedux, color: "#764ABC", x: 10, y: 58 },
  { id: 14, name: "TailwindCSS", category: "frontend", icon: SiTailwindcss, color: "#06B6D4", x: 32, y: 68 },
  { id: 15, name: "Bootstrap", category: "frontend", icon: SiBootstrap, color: "#7952B3", x: 50, y: 65 },
  { id: 16, name: "Postman", category: "tools", icon: SiPostman, color: "#FF6C37", x: 67, y: 68 },
  { id: 17, name: "GSAP", category: "frontend", icon: SiGsap, color: "#88CE02", x: 83, y: 65 },
  { id: 18, name: "MONGODB", category: "backend", icon: SiMongodb, color: "#47A248", x: 25, y: 55 },
];

// Constellation connections between skills (by ID)
const connections = [
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [4, 10], [5, 11], [10, 11], [11, 12],
  [10, 9], [9, 8], [8, 7],
  [8, 13], [14, 15], [15, 16], [16, 17],
  [11, 16], [9, 18],
];

export default function SkillSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-4 overflow-hidden">
      
      {/* Galaxy Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl sm:text-7xl font-extrabold tracking-wider mb-8 z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
      >
        SKILLS
      </motion.h2>

      {/* Constellation Canvas Container */}
      <div className="relative w-full max-w-6xl h-[550px] border border-cyan-500/10 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl">
        
        {/* SVG Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map(([fromId, toId], idx) => {
            const from = skillsData.find((s) => s.id === fromId);
            const to = skillsData.find((s) => s.id === toId);

            if (!from || !to) return null;

            const isHighlighted =
              hoveredSkill === from.id || hoveredSkill === to.id;

            return (
              <line
                key={idx}
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke={isHighlighted ? "#06B6D4" : "rgba(255, 255, 255, 0.15)"}
                strokeWidth={isHighlighted ? 2 : 1}
                strokeDasharray={isHighlighted ? "none" : "4 4"}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Skill Nodes */}
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          const isSelected = hoveredSkill === skill.id;

          return (
            <motion.div
              key={skill.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.15 }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 flex items-center gap-2 group"
            >
              {/* Node Icon Circle */}
              <div
                className="relative p-2 rounded-xl bg-gray-900/80 border border-gray-700/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg"
                style={{
                  borderColor: isSelected ? skill.color : "rgba(255, 255, 255, 0.15)",
                  boxShadow: isSelected ? `0 0 15px ${skill.color}` : "none",
                }}
              >
                <Icon size={22} style={{ color: skill.color }} />
              </div>

              {/* Skill Label */}
              <span
                className="text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 drop-shadow-md"
                style={{
                  color: isSelected ? skill.color : "#E5E7EB",
                  textShadow: isSelected ? `0 0 8px ${skill.color}` : "none",
                }}
              >
                {skill.name}
              </span>
            </motion.div>
          );
        })}

        {/* Bottom Floating Control Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md text-xs sm:text-sm shadow-xl z-20">
          <button 
            onClick={() => setActiveCategory(activeCategory === "all" ? "frontend" : "all")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-cyan-500/20 text-cyan-300 transition-colors"
          >
            <Filter size={14} />
            <span>{activeCategory === "all" ? "Filter Category" : `Category: ${activeCategory}`}</span>
          </button>
          
          <div className="w-[1px] h-4 bg-gray-700" />

          <button 
            onClick={() => setActiveCategory("all")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-cyan-500/20 text-gray-300 transition-colors"
          >
            <Maximize2 size={14} />
            <span>Reset View</span>
          </button>
        </div>
      </div>
    </section>
  );
}