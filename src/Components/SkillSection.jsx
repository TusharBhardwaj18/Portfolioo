import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaJava, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiRedux, SiPostman, SiCplusplus, SiC, SiGit, SiMysql, SiGsap, SiReactrouter, SiMongodb } from "react-icons/si";

const skillsData = [
  { id: 1, name: "HTML", icon: FaHtml5, color: "#E44D26", x:9, y: 10 },
  { id: 2, name: "CSS", icon: FaCss3, color: "#264DE4", x: 28, y: 25 },
  { id: 3, name: "JavaScript", icon: FaJs, color: "#F7DF1E", x: 44, y: 17 },
  { id: 4, name: "C", icon: SiC, color: "#00599C", x: 60, y: 25 },
  { id: 5, name: "C++", icon: SiCplusplus, color: "#00599C", x: 72, y: 15 },
  { id: 6, name: "Java", icon: FaJava, color: "#5382A1", x: 86, y: 26 },
  { id: 7, name: "Python", icon: FaPython, color: "#3776AB", x: 10, y: 30 },
  { id: 8, name: "Git", icon: SiGit, color: "#F05032", x: 25, y: 40 },
  { id: 9, name: "MySQL", icon: SiMysql, color: "#4479A1", x: 38, y: 46 },
  { id: 10, name: "NodeJs", icon: FaNodeJs, color: "#339933", x: 53, y: 47 },
  { id: 11, name: "ReactJs", icon: FaReact, color: "#61DAFB", x: 70, y: 40 },
  { id: 12, name: "React Router", icon: SiReactrouter, color: "#CA4245", x: 84, y: 50 },
  { id: 13, name: "Redux", icon: SiRedux, color: "#764ABC", x: 10, y: 58 },
  { id: 14, name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", x: 32, y: 68 },
  { id: 15, name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", x: 50, y: 65 },
  { id: 16, name: "Postman", icon: SiPostman, color: "#FF6C37", x: 67, y: 68 },
  { id: 17, name: "GSAP",  icon: SiGsap, color: "#88CE02", x: 83, y: 65 },
  { id: 18, name: "MONGODB", icon: SiMongodb, color: "#47A248", x: 25, y: 55 },
];

const connections = [
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [4, 10], [5, 11], [10, 11], [11, 12],
  [10, 9], [9, 8], [8, 7],
  [8, 13], [14, 15], [15, 16], [16, 17],
  [11, 16], [9, 18],
];

export default function SkillSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-12 md:py-16 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[600px] h-[250px] sm:h-[350px] bg-cyan-900/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider mb-8 md:mb-12 z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
        SKILLS
      </motion.h2>
      <div className="hidden md:block relative w-full max-w-6xl h-[500px] lg:h-[550px] border border-cyan-500/10 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl">
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
                className="transition-all duration-300" />
            );
          })}
        </svg>
        {skillsData.map((skill) => {
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
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 flex items-center gap-2 group">
              <div
                className="relative p-2 rounded-xl bg-gray-900/80 border border-gray-700/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg"
                style={{
                  borderColor: isSelected ? skill.color : "rgba(255, 255, 255, 0.15)",
                  boxShadow: isSelected ? `0 0 15px ${skill.color}` : "none",
                }}>
                <Icon size={22} style={{ color: skill.color }} />
              </div>
              <span
                className="text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 drop-shadow-md"
                style={{
                  color: isSelected ? skill.color : "#E5E7EB",
                  textShadow: isSelected ? `0 0 8px ${skill.color}` : "none",
                }}> {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
      <div className="block md:hidden w-full max-w-lg z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-gray-900/40 border border-cyan-500/20 rounded-2xl backdrop-blur-md">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 transition-colors"
              >
                <Icon size={20} style={{ color: skill.color }} className="shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200 truncate">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}